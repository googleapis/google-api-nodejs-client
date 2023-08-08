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

export namespace policyanalyzer_v1 {
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
   * Policy Analyzer API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const policyanalyzer = google.policyanalyzer('v1');
   * ```
   */
  export class Policyanalyzer {
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

  export interface Schema$GoogleCloudPolicyanalyzerV1Activity {
    /**
     * A struct of custom fields to explain the activity.
     */
    activity?: {[key: string]: any} | null;
    /**
     * The type of the activity.
     */
    activityType?: string | null;
    /**
     * The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string | null;
    /**
     * The data observation period to build the activity.
     */
    observationPeriod?: Schema$GoogleCloudPolicyanalyzerV1ObservationPeriod;
  }
  /**
   * Represents data observation period.
   */
  export interface Schema$GoogleCloudPolicyanalyzerV1ObservationPeriod {
    /**
     * The observation end time. The time in this timestamp is always `07:00:00Z`.
     */
    endTime?: string | null;
    /**
     * The observation start time. The time in this timestamp is always `07:00:00Z`.
     */
    startTime?: string | null;
  }
  /**
   * Response to the `QueryActivity` method.
   */
  export interface Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse {
    /**
     * The set of activities that match the filter included in the request.
     */
    activities?: Schema$GoogleCloudPolicyanalyzerV1Activity[];
    /**
     * If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken?: string | null;
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
    activityTypes: Resource$Projects$Locations$Activitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.activityTypes = new Resource$Projects$Locations$Activitytypes(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Activitytypes {
    context: APIRequestContext;
    activities: Resource$Projects$Locations$Activitytypes$Activities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.activities =
        new Resource$Projects$Locations$Activitytypes$Activities(this.context);
    }
  }

  export class Resource$Projects$Locations$Activitytypes$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Queries policy activities on Google Cloud resources.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>;
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Activitytypes$Activities$Query
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Activitytypes$Activities$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Activitytypes$Activities$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://policyanalyzer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/activities:query').replace(
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
        createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1QueryActivityResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Activitytypes$Activities$Query
    extends StandardParameters {
    /**
     * Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - `activities.full_resource_name {=\} [STRING]` - `activities.fullResourceName {=\} [STRING]` where `[STRING]` is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - `activities.full_resource_name {=\} [STRING]` - `activities.fullResourceName {=\} [STRING]` where `[STRING]` is the full resource name of the service account key.
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/
     */
    parent?: string;
  }
}
