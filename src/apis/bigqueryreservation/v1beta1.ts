// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

export namespace bigqueryreservation_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * const bigqueryreservation = google.bigqueryreservation('v1beta1');
   *
   * @namespace bigqueryreservation
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
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
   * A Assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
   */
  export interface Schema$Assignment {
    /**
     * The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.
     */
    assignee?: string | null;
    /**
     * Which type of jobs will use the reservation.
     */
    jobType?: string | null;
    /**
     * Output only. Name of the resource. E.g.: projects/myproject/locations/US/reservations/team1-prod/assignments/123.
     */
    name?: string | null;
    /**
     * Output only. State of the assignment.
     */
    state?: string | null;
  }
  /**
   * Represents a BI Reservation.
   */
  export interface Schema$BiReservation {
    /**
     * The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/bireservation`.
     */
    name?: string | null;
    /**
     * Size of a reservation, in bytes.
     */
    size?: string | null;
    /**
     * Output only. The last update timestamp of a reservation.
     */
    updateTime?: string | null;
  }
  /**
   * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Monthly and annual commitments renew by default. Only flex commitments can be removed. In order to remove monthly or annual commitments, their plan needs to be changed to flex first.  A capacity commitment resource exists as a child resource of the admin project.
   */
  export interface Schema$CapacityCommitment {
    /**
     * Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments.
     */
    commitmentEndTime?: string | null;
    /**
     * Output only. For FAILED commitment plan, provides the reason of failure.
     */
    failureStatus?: Schema$Status;
    /**
     * Output only. The resource name of the capacity commitment, e.g.,    projects/myproject/locations/US/capacityCommitments/123
     */
    name?: string | null;
    /**
     * Capacity commitment commitment plan.
     */
    plan?: string | null;
    /**
     * The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for MONTHLY and ANNUAL commitments.
     */
    renewalPlan?: string | null;
    /**
     * Number of slots in this commitment.
     */
    slotCount?: string | null;
    /**
     * Output only. State of the commitment.
     */
    state?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * The response for ReservationService.ListAssignments.
   */
  export interface Schema$ListAssignmentsResponse {
    /**
     * List of assignments visible to the user.
     */
    assignments?: Schema$Assignment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for ReservationService.ListCapacityCommitments.
   */
  export interface Schema$ListCapacityCommitmentsResponse {
    /**
     * List of capacity commitments visible to the user.
     */
    capacityCommitments?: Schema$CapacityCommitment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
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
   * The request for ReservationService.MergeCapacityCommitments.
   */
  export interface Schema$MergeCapacityCommitmentsRequest {
    /**
     * Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent.
     */
    capacityCommitmentIds?: string[] | null;
  }
  /**
   * The request for ReservationService.MoveAssignment. Note: &quot;bigquery.reservationAssignments.create&quot; permission is required on the destination_id. Note: &quot;bigquery.reservationAssignments.create&quot; and &quot;bigquery.reservationAssignments.delete&quot; permission is required on the related assignee.
   */
  export interface Schema$MoveAssignmentRequest {
    /**
     * The new reservation ID, e.g.:   projects/myotherproject/locations/US/reservations/team2-prod
     */
    destinationId?: string | null;
  }
  /**
   * A reservation is a mechanism used to guarantee slots to users.
   */
  export interface Schema$Reservation {
    /**
     * If false, any query using this reservation will use idle slots from other reservations within the same admin project. If true, a query using this reservation will execute with the slot capacity specified above at most.
     */
    ignoreIdleSlots?: boolean | null;
    /**
     * The resource name of the reservation, e.g., &quot;projects/x/locations/x/reservations/team1-prod&quot;.
     */
    name?: string | null;
    /**
     * Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false. If the new reservation&#39;s slot capacity exceed the parent&#39;s slot capacity or if total slot capacity of the new reservation and its siblings exceeds the parent&#39;s slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`.
     */
    slotCapacity?: string | null;
  }
  /**
   * The response for ReservationService.SearchAssignments.
   */
  export interface Schema$SearchAssignmentsResponse {
    /**
     * List of assignments visible to the user.
     */
    assignments?: Schema$Assignment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The request for ReservationService.SplitCapacityCommitment.
   */
  export interface Schema$SplitCapacityCommitmentRequest {
    /**
     * Number of slots in the capacity commitment after the split.
     */
    slotCount?: string | null;
  }
  /**
   * The response for ReservationService.SplitCapacityCommitment.
   */
  export interface Schema$SplitCapacityCommitmentResponse {
    /**
     * First capacity commitment, result of a split.
     */
    first?: Schema$CapacityCommitment;
    /**
     * Second capacity commitment, result of a split.
     */
    second?: Schema$CapacityCommitment;
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
  /**
   * The request for ReservationService.UpgradeCapacityCommitmentPlan.
   */
  export interface Schema$UpgradeCapacityCommitmentPlanRequest {
    /**
     * New capacity commitment plan.
     */
    plan?: string | null;
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
    capacityCommitments: Resource$Projects$Locations$Capacitycommitments;
    reservations: Resource$Projects$Locations$Reservations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.capacityCommitments = new Resource$Projects$Locations$Capacitycommitments(
        this.context
      );
      this.reservations = new Resource$Projects$Locations$Reservations(
        this.context
      );
    }

    /**
     * bigqueryreservation.projects.locations.getBiReservation
     * @desc Retrieves a BI reservation.
     * @alias bigqueryreservation.projects.locations.getBiReservation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the requested reservation, for example: `projects/{project_id}/locations/{location_id}/bireservation`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getBiReservation(
      params?: Params$Resource$Projects$Locations$Getbireservation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BiReservation>;
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      options: MethodOptions | BodyResponseCallback<Schema$BiReservation>,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    getBiReservation(
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    getBiReservation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getbireservation
        | BodyResponseCallback<Schema$BiReservation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BiReservation>,
      callback?: BodyResponseCallback<Schema$BiReservation>
    ): void | GaxiosPromise<Schema$BiReservation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getbireservation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getbireservation;
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$BiReservation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BiReservation>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.searchAssignments
     * @desc Looks up assignments for a specified resource for a particular region. If the request is about a project:   1) Assignments created on the project will be returned if they exist.   2) Otherwise assignments created on the closest ancestor will be   returned. 3) Assignments for different JobTypes will all be returned. Same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences:   1) permission on the assignee will be verified in this API.   2) Hierarchy lookup (project->folder->organization) happens in this API.   3) Parent here is projects/x/locations/x, instead of   projects/x/locations/xreservations/x. Note "-" cannot be used for projects nor locations.
     * @alias bigqueryreservation.projects.locations.searchAssignments
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The resource name of the admin project(containing project and location), e.g.:   "projects/myproject/locations/US".
     * @param {string=} params.query Please specify resource name as assignee in the query. e.g., "assignee=projects/myproject"       "assignee=folders/123"       "assignee=organizations/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchAssignments(
      params?: Params$Resource$Projects$Locations$Searchassignments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAssignmentsResponse>;
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void;
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      callback: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void;
    searchAssignments(
      callback: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void;
    searchAssignments(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Searchassignments
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>,
      callback?: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void | GaxiosPromise<Schema$SearchAssignmentsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Searchassignments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Searchassignments;
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
            url: (rootUrl + '/v1beta1/{+parent}:searchAssignments').replace(
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
        createAPIRequest<Schema$SearchAssignmentsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SearchAssignmentsResponse>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.updateBiReservation
     * @desc Updates a BI reservation. Only fields specified in the field_mask are updated. Singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.
     * @alias bigqueryreservation.projects.locations.updateBiReservation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/bireservation`.
     * @param {string=} params.updateMask A list of fields to be updated in this request.
     * @param {().BiReservation} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateBiReservation(
      params?: Params$Resource$Projects$Locations$Updatebireservation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BiReservation>;
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      options: MethodOptions | BodyResponseCallback<Schema$BiReservation>,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    updateBiReservation(
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    updateBiReservation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Updatebireservation
        | BodyResponseCallback<Schema$BiReservation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BiReservation>,
      callback?: BodyResponseCallback<Schema$BiReservation>
    ): void | GaxiosPromise<Schema$BiReservation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Updatebireservation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Updatebireservation;
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$BiReservation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BiReservation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Getbireservation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the requested reservation, for example: `projects/{project_id}/locations/{location_id}/bireservation`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Searchassignments
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
     * Required. The resource name of the admin project(containing project and location), e.g.:   "projects/myproject/locations/US".
     */
    parent?: string;
    /**
     * Please specify resource name as assignee in the query. e.g., "assignee=projects/myproject"       "assignee=folders/123"       "assignee=organizations/456"
     */
    query?: string;
  }
  export interface Params$Resource$Projects$Locations$Updatebireservation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/bireservation`.
     */
    name?: string;
    /**
     * A list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BiReservation;
  }

  export class Resource$Projects$Locations$Capacitycommitments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.create
     * @desc Creates a new capacity commitment resource.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.enforceSingleAdminProjectPerOrg If true, fail the request if another project in the organization has a capacity commitment.
     * @param {string} params.parent Required. Resource name of the parent reservation. E.g.,    projects/myproject/locations/US
     * @param {().CapacityCommitment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    create(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Create
        | BodyResponseCallback<Schema$CapacityCommitment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>,
      callback?: BodyResponseCallback<Schema$CapacityCommitment>
    ): void | GaxiosPromise<Schema$CapacityCommitment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Create;
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
            url: (rootUrl + '/v1beta1/{+parent}/capacityCommitments').replace(
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
        createAPIRequest<Schema$CapacityCommitment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.delete
     * @desc Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the capacity commitment to delete. E.g.,    projects/myproject/locations/US/capacityCommitments/123
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Delete;
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigqueryreservation.projects.locations.capacityCommitments.get
     * @desc Returns information about the capacity commitment.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the capacity commitment to retrieve. E.g.,    projects/myproject/locations/US/capacityCommitments/123
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    get(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Get
        | BodyResponseCallback<Schema$CapacityCommitment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>,
      callback?: BodyResponseCallback<Schema$CapacityCommitment>
    ): void | GaxiosPromise<Schema$CapacityCommitment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Get;
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CapacityCommitment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.list
     * @desc Lists all the capacity commitments for the admin project.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. Resource name of the parent reservation. E.g.,    projects/myproject/locations/US
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCapacityCommitmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>,
      callback: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      callback: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$List
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void | GaxiosPromise<Schema$ListCapacityCommitmentsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$List;
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
            url: (rootUrl + '/v1beta1/{+parent}/capacityCommitments').replace(
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
        createAPIRequest<Schema$ListCapacityCommitmentsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListCapacityCommitmentsResponse>(
          parameters
        );
      }
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.merge
     * @desc Merges capacity commitments of the same plan into one. Resulting capacity commitment has the longer commitment_end_time out of the two. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.merge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Parent resource that identifies admin project and location e.g., projects/myproject/locations/us
     * @param {().MergeCapacityCommitmentsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    merge(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    merge(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    merge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Merge
        | BodyResponseCallback<Schema$CapacityCommitment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>,
      callback?: BodyResponseCallback<Schema$CapacityCommitment>
    ): void | GaxiosPromise<Schema$CapacityCommitment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Merge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Merge;
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
              rootUrl + '/v1beta1/{+parent}/capacityCommitments:merge'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CapacityCommitment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.patch
     * @desc Updates an existing capacity commitment.  Only renewal_plan field can be updated.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource name of the capacity commitment, e.g.,    projects/myproject/locations/US/capacityCommitments/123
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().CapacityCommitment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Patch
        | BodyResponseCallback<Schema$CapacityCommitment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>,
      callback?: BodyResponseCallback<Schema$CapacityCommitment>
    ): void | GaxiosPromise<Schema$CapacityCommitment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Patch;
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CapacityCommitment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.split
     * @desc Splits capacity commitment to two commitments of the same plan and commitment_end_time. A common use case to do that is to perform a downgrade e.g., in order to downgrade from 10000 slots to 8000, one might split 10000 capacity commitment to 2000 and 8000, change the plan of the first one to flex and then delete it.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.split
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name e.g.,:   projects/myproject/locations/US/capacityCommitments/123
     * @param {().SplitCapacityCommitmentRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    split(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SplitCapacityCommitmentResponse>;
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>,
      callback: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void;
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      callback: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void;
    split(
      callback: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void;
    split(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Split
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>,
      callback?: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void | GaxiosPromise<Schema$SplitCapacityCommitmentResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Split;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Split;
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
            url: (rootUrl + '/v1beta1/{+name}:split').replace(
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
        createAPIRequest<Schema$SplitCapacityCommitmentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SplitCapacityCommitmentResponse>(
          parameters
        );
      }
    }

    /**
     * bigqueryreservation.projects.locations.capacityCommitments.upgradeCapacityCommitmentPlan
     * @desc Replaces an existing commitment with a new commitment of a different plan. Plan can only be changed to a plan of a longer commitment period. New commitment start is set to a current time. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @alias bigqueryreservation.projects.locations.capacityCommitments.upgradeCapacityCommitmentPlan
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.capacityCommitment Required. The resource name e.g.,:   projects/myproject/locations/US/capacityCommitments/123
     * @param {().UpgradeCapacityCommitmentPlanRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upgradeCapacityCommitmentPlan(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    upgradeCapacityCommitmentPlan(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    upgradeCapacityCommitmentPlan(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    upgradeCapacityCommitmentPlan(
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    upgradeCapacityCommitmentPlan(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan
        | BodyResponseCallback<Schema$CapacityCommitment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>,
      callback?: BodyResponseCallback<Schema$CapacityCommitment>
    ): void | GaxiosPromise<Schema$CapacityCommitment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan;
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
              rootUrl +
              '/v1beta1/{+capacityCommitment}:upgradeCapacityCommitmentPlan'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['capacityCommitment'],
        pathParams: ['capacityCommitment'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CapacityCommitment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Capacitycommitments$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true, fail the request if another project in the organization has a capacity commitment.
     */
    enforceSingleAdminProjectPerOrg?: boolean;
    /**
     * Required. Resource name of the parent reservation. E.g.,    projects/myproject/locations/US
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CapacityCommitment;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the capacity commitment to delete. E.g.,    projects/myproject/locations/US/capacityCommitments/123
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the capacity commitment to retrieve. E.g.,    projects/myproject/locations/US/capacityCommitments/123
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$List
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
     * Required. Resource name of the parent reservation. E.g.,    projects/myproject/locations/US
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Merge
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Parent resource that identifies admin project and location e.g., projects/myproject/locations/us
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MergeCapacityCommitmentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name of the capacity commitment, e.g.,    projects/myproject/locations/US/capacityCommitments/123
     */
    name?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CapacityCommitment;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Split
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name e.g.,:   projects/myproject/locations/US/capacityCommitments/123
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SplitCapacityCommitmentRequest;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Upgradecapacitycommitmentplan
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name e.g.,:   projects/myproject/locations/US/capacityCommitments/123
     */
    capacityCommitment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpgradeCapacityCommitmentPlanRequest;
  }

  export class Resource$Projects$Locations$Reservations {
    context: APIRequestContext;
    assignments: Resource$Projects$Locations$Reservations$Assignments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assignments = new Resource$Projects$Locations$Reservations$Assignments(
        this.context
      );
    }

    /**
     * bigqueryreservation.projects.locations.reservations.create
     * @desc Creates a new reservation resource.
     * @alias bigqueryreservation.projects.locations.reservations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Project, location. E.g.,    projects/myproject/locations/US
     * @param {string=} params.reservationId The reservation ID. This field must only contain lower case alphanumeric characters or dash. Max length is 64 characters.
     * @param {().Reservation} params.requestBody Request body data
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
            url: (rootUrl + '/v1beta1/{+parent}/reservations').replace(
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
     * @desc Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.
     * @alias bigqueryreservation.projects.locations.reservations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/US/reservations/team1-prod
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string} params.name Required. Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/US/reservations/team1-prod
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string} params.parent Required. The parent resource name containing project and location, e.g.:   "projects/myproject/locations/US"
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
            url: (rootUrl + '/v1beta1/{+parent}/reservations').replace(
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
     * @desc Updates an existing reservation resource.
     * @alias bigqueryreservation.projects.locations.reservations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the reservation, e.g., "projects/x/locations/x/reservations/team1-prod".
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().Reservation} params.requestBody Request body data
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Required. Project, location. E.g.,    projects/myproject/locations/US
     */
    parent?: string;
    /**
     * The reservation ID. This field must only contain lower case alphanumeric characters or dash. Max length is 64 characters.
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
     * Required. Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/US/reservations/team1-prod
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
     * Required. Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/US/reservations/team1-prod
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
     * Required. The parent resource name containing project and location, e.g.:   "projects/myproject/locations/US"
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
     * The resource name of the reservation, e.g., "projects/x/locations/x/reservations/team1-prod".
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

  export class Resource$Projects$Locations$Reservations$Assignments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigqueryreservation.projects.locations.reservations.assignments.create
     * @desc Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
     * @alias bigqueryreservation.projects.locations.reservations.assignments.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource name of the assignment E.g.: projects/myproject/locations/US/reservations/team1-prod
     * @param {().Assignment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Assignment>;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Assignment>,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Assignment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Create
        | BodyResponseCallback<Schema$Assignment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Assignment>,
      callback?: BodyResponseCallback<Schema$Assignment>
    ): void | GaxiosPromise<Schema$Assignment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Assignments$Create;
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
            url: (rootUrl + '/v1beta1/{+parent}/assignments').replace(
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
        createAPIRequest<Schema$Assignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.assignments.delete
     * @desc Deletes a assignment. No expansion will happen. E.g: organizationA contains project1 and project2. Reservation res1 exists. CreateAssignment was invoked previously and following assignments were created explicitly:   <organizationA, res1>   <project1, res1> Then deletion of <organizationA, res1> won't affect <project1, res1>. After deletion of <organizationA, res1>, queries from project1 will still use res1, while queries from project2 will use on-demand mode.
     * @alias bigqueryreservation.projects.locations.reservations.assignments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the resource, e.g.:   projects/myproject/locations/US/reservations/team1-prod/assignments/123
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Assignments$Delete;
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigqueryreservation.projects.locations.reservations.assignments.list
     * @desc Lists assignments. Only explicitly created assignments will be returned. E.g: organizationA contains project1 and project2. Reservation res1 exists. CreateAssignment was invoked previously and following assignments were created explicitly:   <organizationA, res1>   <project1, res1> Then this API will just return the above two assignments for reservation res1, and no expansion/merge will happen. Wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. Note "-" cannot be used for projects nor locations.
     * @alias bigqueryreservation.projects.locations.reservations.assignments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The parent resource name e.g.: projects/myproject/locations/US/reservations/team1-prod Or: projects/myproject/locations/US/reservations/-
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAssignmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$ListAssignmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      callback: BodyResponseCallback<Schema$ListAssignmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssignmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$List
        | BodyResponseCallback<Schema$ListAssignmentsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAssignmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListAssignmentsResponse>
    ): void | GaxiosPromise<Schema$ListAssignmentsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Assignments$List;
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
            url: (rootUrl + '/v1beta1/{+parent}/assignments').replace(
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
        createAPIRequest<Schema$ListAssignmentsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAssignmentsResponse>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.assignments.move
     * @desc Moves a assignment under a new reservation. Customers can do this by deleting the existing assignment followed by creating another assignment under the new reservation, but this method provides a transactional way to do so, to make sure the assignee always has an associated reservation. Without the method customers might see some queries run on-demand which might be unexpected.
     * @alias bigqueryreservation.projects.locations.reservations.assignments.move
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the assignment, e.g.:   projects/myproject/locations/US/reservations/team1-prod/assignments/123
     * @param {().MoveAssignmentRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    move(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Assignment>;
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options: MethodOptions | BodyResponseCallback<Schema$Assignment>,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    move(callback: BodyResponseCallback<Schema$Assignment>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Move
        | BodyResponseCallback<Schema$Assignment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Assignment>,
      callback?: BodyResponseCallback<Schema$Assignment>
    ): void | GaxiosPromise<Schema$Assignment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Assignments$Move;
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
            url: (rootUrl + '/v1beta1/{+name}:move').replace(
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
        createAPIRequest<Schema$Assignment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource name of the assignment E.g.: projects/myproject/locations/US/reservations/team1-prod
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Assignment;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the resource, e.g.:   projects/myproject/locations/US/reservations/team1-prod/assignments/123
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$List
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
     * Required. The parent resource name e.g.: projects/myproject/locations/US/reservations/team1-prod Or: projects/myproject/locations/US/reservations/-
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Move
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the assignment, e.g.:   projects/myproject/locations/US/reservations/team1-prod/assignments/123
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MoveAssignmentRequest;
  }
}
