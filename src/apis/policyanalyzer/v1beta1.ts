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

export namespace policyanalyzer_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * const policyanalyzer = google.policyanalyzer('v1beta1');
   * ```
   */
  export class Policyanalyzer {
    context: APIRequestContext;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Represents Activity on a GCP resource over specific observation period.
   */
  export interface Schema$GoogleCloudPolicyanalyzerV1beta1Activity {
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
    observationPeriod?: Schema$GoogleCloudPolicyanalyzerV1beta1ObservationPeriod;
  }
  /**
   * Represents data observation period.
   */
  export interface Schema$GoogleCloudPolicyanalyzerV1beta1ObservationPeriod {
    /**
     * The observation end time.
     */
    endTime?: string | null;
    /**
     * The observation start time.
     */
    startTime?: string | null;
  }
  /**
   * Response to the `QueryActivity` method.
   */
  export interface Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse {
    /**
     * The set of activities that match the filter included in the request.
     */
    activities?: Schema$GoogleCloudPolicyanalyzerV1beta1Activity[];
    /**
     * If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    locations: Resource$Folders$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Folders$Locations(this.context);
    }
  }

  export class Resource$Folders$Locations {
    context: APIRequestContext;
    activityTypes: Resource$Folders$Locations$Activitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.activityTypes = new Resource$Folders$Locations$Activitytypes(
        this.context
      );
    }
  }

  export class Resource$Folders$Locations$Activitytypes {
    context: APIRequestContext;
    activities: Resource$Folders$Locations$Activitytypes$Activities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.activities = new Resource$Folders$Locations$Activitytypes$Activities(
        this.context
      );
    }
  }

  export class Resource$Folders$Locations$Activitytypes$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Queries policy activities on GCP resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/policyanalyzer.googleapis.com
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
     * const policyanalyzer = google.policyanalyzer('v1beta1');
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
     *   const res =
     *     await policyanalyzer.folders.locations.activityTypes.activities.query({
     *       // Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=\} - service_account_key_last_authn.full_resource_name {=\}
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.
     *       pageSize: 'placeholder-value',
     *       // Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     *       parent:
     *         'folders/my-folder/locations/my-location/activityTypes/my-activityType',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activities": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    query(
      params: Params$Resource$Folders$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    query(
      params?: Params$Resource$Folders$Locations$Activitytypes$Activities$Query,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    >;
    query(
      params: Params$Resource$Folders$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Folders$Locations$Activitytypes$Activities$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      params: Params$Resource$Folders$Locations$Activitytypes$Activities$Query,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Activitytypes$Activities$Query
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Activitytypes$Activities$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Activitytypes$Activities$Query;
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
            url: (rootUrl + '/v1beta1/{+parent}/activities:query').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Activitytypes$Activities$Query extends StandardParameters {
    /**
     * Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=\} - service_account_key_last_authn.full_resource_name {=\}
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
     * Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     */
    parent?: string;
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
    activityTypes: Resource$Organizations$Locations$Activitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.activityTypes = new Resource$Organizations$Locations$Activitytypes(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Activitytypes {
    context: APIRequestContext;
    activities: Resource$Organizations$Locations$Activitytypes$Activities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.activities =
        new Resource$Organizations$Locations$Activitytypes$Activities(
          this.context
        );
    }
  }

  export class Resource$Organizations$Locations$Activitytypes$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Queries policy activities on GCP resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/policyanalyzer.googleapis.com
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
     * const policyanalyzer = google.policyanalyzer('v1beta1');
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
     *   const res =
     *     await policyanalyzer.organizations.locations.activityTypes.activities.query(
     *       {
     *         // Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=\} - service_account_key_last_authn.full_resource_name {=\}
     *         filter: 'placeholder-value',
     *         // Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.
     *         pageSize: 'placeholder-value',
     *         // Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *         pageToken: 'placeholder-value',
     *         // Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     *         parent:
     *           'organizations/my-organization/locations/my-location/activityTypes/my-activityType',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activities": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    query(
      params: Params$Resource$Organizations$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    query(
      params?: Params$Resource$Organizations$Locations$Activitytypes$Activities$Query,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    >;
    query(
      params: Params$Resource$Organizations$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Organizations$Locations$Activitytypes$Activities$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      params: Params$Resource$Organizations$Locations$Activitytypes$Activities$Query,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Activitytypes$Activities$Query
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Activitytypes$Activities$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Activitytypes$Activities$Query;
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
            url: (rootUrl + '/v1beta1/{+parent}/activities:query').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Activitytypes$Activities$Query extends StandardParameters {
    /**
     * Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=\} - service_account_key_last_authn.full_resource_name {=\}
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
     * Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     */
    parent?: string;
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
     * Queries policy activities on GCP resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/policyanalyzer.googleapis.com
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
     * const policyanalyzer = google.policyanalyzer('v1beta1');
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
     *   const res =
     *     await policyanalyzer.projects.locations.activityTypes.activities.query({
     *       // Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=\} - service_account_key_last_authn.full_resource_name {=\}
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.
     *       pageSize: 'placeholder-value',
     *       // Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     *       parent:
     *         'projects/my-project/locations/my-location/activityTypes/my-activityType',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activities": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    query(
      params?: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    >;
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Activitytypes$Activities$Query,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Activitytypes$Activities$Query
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (rootUrl + '/v1beta1/{+parent}/activities:query').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Activitytypes$Activities$Query extends StandardParameters {
    /**
     * Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=\} - service_account_key_last_authn.full_resource_name {=\}
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
     * Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     */
    parent?: string;
  }
}
