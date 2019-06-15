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

export namespace bigtableadmin_v1 {
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
   * Cloud Bigtable Admin API
   *
   * Administer your Cloud Bigtable tables and instances.
   *
   * @example
   * const {google} = require('googleapis');
   * const bigtableadmin = google.bigtableadmin('v1');
   *
   * @namespace bigtableadmin
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Bigtableadmin
   */
  export class Bigtableadmin {
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
   * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
   */
  export interface Schema$Cluster {
    /**
     * (`CreationOnly`) The type of storage used by this cluster to serve its parent instance&#39;s tables, unless explicitly overridden.
     */
    defaultStorageType?: string;
    /**
     * (`CreationOnly`) The location where this cluster&#39;s nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/&lt;project&gt;/locations/&lt;zone&gt;`.
     */
    location?: string;
    /**
     * (`OutputOnly`) The unique name of the cluster. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;/clusters/a-z*`.
     */
    name?: string;
    /**
     * The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.
     */
    serveNodes?: number;
    /**
     * (`OutputOnly`) The current state of the cluster.
     */
    state?: string;
  }
  /**
   * The metadata for the Operation returned by CreateCluster.
   */
  export interface Schema$CreateClusterMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string;
    /**
     * The request that prompted the initiation of this CreateCluster operation.
     */
    originalRequest?: Schema$CreateClusterRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string;
    /**
     * Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects/&lt;project&gt;/instances/&lt;instance&gt;/tables/&lt;table&gt;`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one.  Values: information on how much of a table&#39;s data has been copied to the newly-created cluster so far.
     */
    tables?: {[key: string]: Schema$TableProgress};
  }
  /**
   * Request message for BigtableInstanceAdmin.CreateCluster.
   */
  export interface Schema$CreateClusterRequest {
    /**
     * The cluster to be created. Fields marked `OutputOnly` must be left blank.
     */
    cluster?: Schema$Cluster;
    /**
     * The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.
     */
    clusterId?: string;
    /**
     * The unique name of the instance in which to create the new cluster. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;`.
     */
    parent?: string;
  }
  /**
   * The metadata for the Operation returned by CreateInstance.
   */
  export interface Schema$CreateInstanceMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string;
    /**
     * The request that prompted the initiation of this CreateInstance operation.
     */
    originalRequest?: Schema$CreateInstanceRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string;
  }
  /**
   * Request message for BigtableInstanceAdmin.CreateInstance.
   */
  export interface Schema$CreateInstanceRequest {
    /**
     * The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank. Currently, at most two clusters can be specified.
     */
    clusters?: {[key: string]: Schema$Cluster};
    /**
     * The instance to create. Fields marked `OutputOnly` must be left blank.
     */
    instance?: Schema$Instance;
    /**
     * The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.
     */
    instanceId?: string;
    /**
     * The unique name of the project in which to create the new instance. Values are of the form `projects/&lt;project&gt;`.
     */
    parent?: string;
  }
  /**
   * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
   */
  export interface Schema$Instance {
    /**
     * The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.
     */
    displayName?: string;
    /**
     * Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer&#39;s organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics.  * Label keys must be between 1 and 63 characters long and must conform to   the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to   the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.
     */
    labels?: {[key: string]: string};
    /**
     * (`OutputOnly`) The unique name of the instance. Values are of the form `projects/&lt;project&gt;/instances/a-z+[a-z0-9]`.
     */
    name?: string;
    /**
     * (`OutputOnly`) The current state of the instance.
     */
    state?: string;
    /**
     * The type of the instance. Defaults to `PRODUCTION`.
     */
    type?: string;
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
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string};
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any};
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * Request message for BigtableInstanceAdmin.PartialUpdateInstance.
   */
  export interface Schema$PartialUpdateInstanceRequest {
    /**
     * The Instance which will (partially) replace the current value.
     */
    instance?: Schema$Instance;
    /**
     * The subset of Instance fields which should be replaced. Must be explicitly set.
     */
    updateMask?: string;
  }
  /**
   * Progress info for copying a table&#39;s data to the new cluster.
   */
  export interface Schema$TableProgress {
    /**
     * Estimate of the number of bytes copied so far for this table. This will eventually reach &#39;estimated_size_bytes&#39; unless the table copy is CANCELLED.
     */
    estimatedCopiedBytes?: string;
    /**
     * Estimate of the size of the table to be copied.
     */
    estimatedSizeBytes?: string;
    state?: string;
  }
  /**
   * The metadata for the Operation returned by UpdateAppProfile.
   */
  export interface Schema$UpdateAppProfileMetadata {}
  /**
   * The metadata for the Operation returned by UpdateCluster.
   */
  export interface Schema$UpdateClusterMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string;
    /**
     * The request that prompted the initiation of this UpdateCluster operation.
     */
    originalRequest?: Schema$Cluster;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string;
  }
  /**
   * The metadata for the Operation returned by UpdateInstance.
   */
  export interface Schema$UpdateInstanceMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string;
    /**
     * The request that prompted the initiation of this UpdateInstance operation.
     */
    originalRequest?: Schema$PartialUpdateInstanceRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string;
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
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigtableadmin.projects.locations.get
     * @desc Gets information about a location.
     * @alias bigtableadmin.projects.locations.get
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
        options.rootUrl || 'https://bigtableadmin.googleapis.com/';
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
     * bigtableadmin.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias bigtableadmin.projects.locations.list
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
        options.rootUrl || 'https://bigtableadmin.googleapis.com/';
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
}
