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

export namespace bigqueryreservation_v1 {
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
   * BigQuery Reservation API
   *
   * A service to modify your BigQuery flat-rate reservations.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const bigqueryreservation = google.bigqueryreservation('v1');
   * ```
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
   * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
   */
  export interface Schema$Assignment {
    /**
     * The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
     */
    assignee?: string | null;
    /**
     * Which type of jobs will use the reservation.
     */
    jobType?: string | null;
    /**
     * Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     */
    name?: string | null;
    /**
     * Output only. State of the assignment.
     */
    state?: string | null;
  }
  /**
   * Auto scaling settings.
   */
  export interface Schema$Autoscale {
    /**
     * Output only. The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].
     */
    currentSlots?: string | null;
    /**
     * Number of slots to be scaled when needed.
     */
    maxSlots?: string | null;
  }
  /**
   * Represents a BI Reservation.
   */
  export interface Schema$BiReservation {
    /**
     * The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id\}/locations/{location_id\}/biReservation`.
     */
    name?: string | null;
    /**
     * Preferred tables to use BI capacity for.
     */
    preferredTables?: Schema$TableReference[];
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
   * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
   */
  export interface Schema$CapacityCommitment {
    /**
     * Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments.
     */
    commitmentEndTime?: string | null;
    /**
     * Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments.
     */
    commitmentStartTime?: string | null;
    /**
     * Edition of the capacity commitment.
     */
    edition?: string | null;
    /**
     * Output only. For FAILED commitment plan, provides the reason of failure.
     */
    failureStatus?: Schema$Status;
    /**
     * Output only. If true, the commitment is a flat-rate commitment, otherwise, it's an edition commitment.
     */
    isFlatRate?: boolean | null;
    /**
     * Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.
     */
    multiRegionAuxiliary?: boolean | null;
    /**
     * Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string | null;
    /**
     * Capacity commitment commitment plan.
     */
    plan?: string | null;
    /**
     * The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL and TRIAL commitments.
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
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
     * Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., 'abc' for projects/myproject/locations/US/capacityCommitments/abc
     */
    capacityCommitmentIds?: string[] | null;
  }
  /**
   * The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.
   */
  export interface Schema$MoveAssignmentRequest {
    /**
     * The optional assignment ID. A new assignment name is generated if this field is empty. This field can contain only lowercase alphanumeric characters or dashes. Max length is 64 characters.
     */
    assignmentId?: string | null;
    /**
     * The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod`
     */
    destinationId?: string | null;
  }
  /**
   * A reservation is a mechanism used to guarantee slots to users.
   */
  export interface Schema$Reservation {
    /**
     * The configuration parameters for the auto scaling feature.
     */
    autoscale?: Schema$Autoscale;
    /**
     * Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as `target_job_concurrency` in the Information Schema, DDL and BQ CLI.
     */
    concurrency?: string | null;
    /**
     * Output only. Creation time of the reservation.
     */
    creationTime?: string | null;
    /**
     * Edition of the reservation.
     */
    edition?: string | null;
    /**
     * If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.
     */
    ignoreIdleSlots?: boolean | null;
    /**
     * Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.
     */
    multiRegionAuxiliary?: boolean | null;
    /**
     * The resource name of the reservation, e.g., `projects/x/locations/x/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string | null;
    /**
     * Baseline slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false, or autoscaling is enabled. If edition is EDITION_UNSPECIFIED and total slot_capacity of the reservation and its siblings exceeds the total slot_count of all capacity commitments, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`. If edition is any value but EDITION_UNSPECIFIED, then the above requirement is not needed. The total slot_capacity of the reservation and its siblings may exceed the total slot_count of capacity commitments. In that case, the exceeding slots will be charged with the autoscale SKU. You can increase the number of baseline slots in a reservation every few minutes. If you want to decrease your baseline slots, you are limited to once an hour if you have recently changed your baseline slot capacity and your baseline slots exceed your committed slots. Otherwise, you can decrease your baseline slots every few minutes.
     */
    slotCapacity?: string | null;
    /**
     * Output only. Last update time of the reservation.
     */
    updateTime?: string | null;
  }
  /**
   * The response for ReservationService.SearchAllAssignments.
   */
  export interface Schema$SearchAllAssignmentsResponse {
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
   * Fully qualified reference to BigQuery table. Internally stored as google.cloud.bi.v1.BqTableReference.
   */
  export interface Schema$TableReference {
    /**
     * The ID of the dataset in the above project.
     */
    datasetId?: string | null;
    /**
     * The assigned project ID of the project.
     */
    projectId?: string | null;
    /**
     * The ID of the table in the above dataset.
     */
    tableId?: string | null;
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
      this.capacityCommitments =
        new Resource$Projects$Locations$Capacitycommitments(this.context);
      this.reservations = new Resource$Projects$Locations$Reservations(
        this.context
      );
    }

    /**
     * Retrieves a BI reservation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getBiReservation(
      params?: Params$Resource$Projects$Locations$Getbireservation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BiReservation>;
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BiReservation> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$BiReservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BiReservation>(parameters);
      }
    }

    /**
     * Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project-\>folder-\>organization) happens in this API. 3. Parent here is `projects/x/locations/x`, instead of `projects/x/locations/xreservations/x`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchAllAssignments(
      params?: Params$Resource$Projects$Locations$Searchallassignments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAllAssignmentsResponse>;
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
    ): void;
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      callback: BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
    ): void;
    searchAllAssignments(
      callback: BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
    ): void;
    searchAllAssignments(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Searchallassignments
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchAllAssignmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Searchallassignments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Searchallassignments;
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
            url: (rootUrl + '/v1/{+parent}:searchAllAssignments').replace(
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
        createAPIRequest<Schema$SearchAllAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchAllAssignmentsResponse>(
          parameters
        );
      }
    }

    /**
     * Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project-\>folder-\>organization) happens in this API. 3. Parent here is `projects/x/locations/x`, instead of `projects/x/locations/xreservations/x`. **Note** "-" cannot be used for projects nor locations.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchAssignments(
      params?: Params$Resource$Projects$Locations$Searchassignments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAssignmentsResponse>;
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchAssignmentsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+parent}:searchAssignments').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchAssignmentsResponse>(parameters);
      }
    }

    /**
     * Updates a BI reservation. Only fields specified in the `field_mask` are updated. A singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateBiReservation(
      params?: Params$Resource$Projects$Locations$Updatebireservation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BiReservation>;
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BiReservation> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$BiReservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BiReservation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Getbireservation
    extends StandardParameters {
    /**
     * Required. Name of the requested reservation, for example: `projects/{project_id\}/locations/{location_id\}/biReservation`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Searchallassignments
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name with location (project name could be the wildcard '-'), e.g.: `projects/-/locations/US`.
     */
    parent?: string;
    /**
     * Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     */
    query?: string;
  }
  export interface Params$Resource$Projects$Locations$Searchassignments
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.
     */
    parent?: string;
    /**
     * Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     */
    query?: string;
  }
  export interface Params$Resource$Projects$Locations$Updatebireservation
    extends StandardParameters {
    /**
     * The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id\}/locations/{location_id\}/biReservation`.
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
     * Creates a new capacity commitment resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CapacityCommitment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Create;
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
            url: (rootUrl + '/v1/{+parent}/capacityCommitments').replace(
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Delete;
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns information about the capacity commitment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CapacityCommitment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Get;
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Lists all the capacity commitments for the admin project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCapacityCommitmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCapacityCommitmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$List;
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
            url: (rootUrl + '/v1/{+parent}/capacityCommitments').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCapacityCommitmentsResponse>(
          parameters
        );
      }
    }

    /**
     * Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    merge(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CapacityCommitment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Merge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Merge;
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
            url: (rootUrl + '/v1/{+parent}/capacityCommitments:merge').replace(
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Updates an existing capacity commitment. Only `plan` and `renewal_plan` fields can be updated. Plan can only be changed to a plan of a longer commitment period. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CapacityCommitment>;
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CapacityCommitment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Patch;
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    split(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SplitCapacityCommitmentResponse>;
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SplitCapacityCommitmentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Split;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Split;
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
            url: (rootUrl + '/v1/{+name}:split').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SplitCapacityCommitmentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Capacitycommitments$Create
    extends StandardParameters {
    /**
     * The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.
     */
    capacityCommitmentId?: string;
    /**
     * If true, fail the request if another project in the organization has a capacity commitment.
     */
    enforceSingleAdminProjectPerOrg?: boolean;
    /**
     * Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
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
     * Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots.
     */
    force?: boolean;
    /**
     * Required. Resource name of the capacity commitment to delete. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the capacity commitment to retrieve. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Merge
    extends StandardParameters {
    /**
     * Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`
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
     * Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
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
     * Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SplitCapacityCommitmentRequest;
  }

  export class Resource$Projects$Locations$Reservations {
    context: APIRequestContext;
    assignments: Resource$Projects$Locations$Reservations$Assignments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assignments =
        new Resource$Projects$Locations$Reservations$Assignments(this.context);
    }

    /**
     * Creates a new reservation resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Reservations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reservation> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns information about the reservation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Reservations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reservation> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * Lists all the reservations for the project in the specified location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Reservations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReservationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReservationsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$ListReservationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReservationsResponse>(parameters);
      }
    }

    /**
     * Updates an existing reservation resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Reservations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reservation> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservations$Create
    extends StandardParameters {
    /**
     * Required. Project, location. E.g., `projects/myproject/locations/US`
     */
    parent?: string;
    /**
     * The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
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
     * Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$List
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Patch
    extends StandardParameters {
    /**
     * The resource name of the reservation, e.g., `projects/x/locations/x/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
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
     * Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Assignment>;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Assignment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Create;
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
            url: (rootUrl + '/v1/{+parent}/assignments').replace(
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
        createAPIRequest<Schema$Assignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }

    /**
     * Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Delete;
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAssignmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAssignmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$List;
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
            url: (rootUrl + '/v1/{+parent}/assignments').replace(
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
        createAPIRequest<Schema$ListAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssignmentsResponse>(parameters);
      }
    }

    /**
     * Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Assignment>;
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Assignment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Move;
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
            url: (rootUrl + '/v1/{+name}:move').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Assignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }

    /**
     * Updates an existing assignment. Only the `priority` field can be updated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Assignment>;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Assignment>,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Assignment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Patch
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Assignment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Patch;
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
        createAPIRequest<Schema$Assignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Create
    extends StandardParameters {
    /**
     * The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters.
     */
    assignmentId?: string;
    /**
     * Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`
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
     * Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$List
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Move
    extends StandardParameters {
    /**
     * Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MoveAssignmentRequest;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Patch
    extends StandardParameters {
    /**
     * Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     */
    name?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Assignment;
  }
}
