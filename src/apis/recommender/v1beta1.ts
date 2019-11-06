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

export namespace recommender_v1beta1 {
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
   * Recommender API
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const recommender = google.recommender('v1beta1');
   *
   * @namespace recommender
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Recommender
   */
  export class Recommender {
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
   * Contains metadata about how much money a recommendation can save or incur.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1CostProjection {
    /**
     * An approximate projection on amount saved or amount incurred. Negative cost units indicate cost savings and positive cost units indicate increase. See google.type.Money documentation for positive/negative units.
     */
    cost?: Schema$GoogleTypeMoney;
    /**
     * Duration for which this cost applies.
     */
    duration?: string | null;
  }
  /**
   * Contains the impact a recommendation can have for a given category.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Impact {
    /**
     * Category that is being targeted.
     */
    category?: string | null;
    /**
     * Use with CategoryType.COST
     */
    costProjection?: Schema$GoogleCloudRecommenderV1beta1CostProjection;
  }
  /**
   * Response to the `ListRecommendations` method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse {
    /**
     * A token that can be used to request the next page of results. This field is empty if there are no additional results.
     */
    nextPageToken?: string | null;
    /**
     * The set of recommendations for the `parent` resource.
     */
    recommendations?: Schema$GoogleCloudRecommenderV1beta1Recommendation[];
  }
  /**
   * Request for the `MarkRecommendationClaimed` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest {
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Request for the `MarkRecommendationFailed` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest {
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Request for the `MarkRecommendationSucceeded` Method.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest {
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string | null;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Contains an operation for a resource loosely based on the JSON-PATCH format with support for:  * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being   described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Operation {
    /**
     * Type of this operation. Contains one of &#39;and&#39;, &#39;remove&#39;, &#39;replace&#39;, &#39;move&#39;, &#39;copy&#39;, &#39;test&#39; and custom operations. This field is case-insensitive and always populated.
     */
    action?: string | null;
    /**
     * Path to the target field being operated on. If the operation is at the resource level, then path should be &quot;/&quot;. This field is always populated.
     */
    path?: string | null;
    /**
     * Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers.  * Example: {   &quot;/versions/x/name&quot; : &quot;it-123&quot;   &quot;/versions/x/targetSize/percent&quot;: 20  } * Example: {   &quot;/bindings/x/role&quot;: &quot;roles/admin&quot;   &quot;/bindings/x/condition&quot; : null  } * Example: {   &quot;/bindings/x/role&quot;: &quot;roles/admin&quot;   &quot;/bindings/x/members/*&quot; : [&quot;x@google.com&quot;, &quot;y@google.com&quot;]  } When both path_filters and path_value_matchers are set, an implicit AND must be performed.
     */
    pathFilters?: {[key: string]: any} | null;
    /**
     * Similar to path_filters, this contains set of filters to apply if `path` field referes to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed.
     */
    pathValueMatchers?: {
      [key: string]: Schema$GoogleCloudRecommenderV1beta1ValueMatcher;
    } | null;
    /**
     * Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.
     */
    resource?: string | null;
    /**
     * Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance
     */
    resourceType?: string | null;
    /**
     * Can be set with action &#39;copy&#39; or &#39;move&#39; to indicate the source field within resource or source_resource, ignored if provided for other operation types.
     */
    sourcePath?: string | null;
    /**
     * Can be set with action &#39;copy&#39; to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = &#39;copy&#39;, path = &quot;/&quot;, from = &quot;/&quot;, source_resource = &lt;source&gt; and resource_name = &lt;target&gt;. This field is empty for all other values of `action`.
     */
    sourceResource?: string | null;
    /**
     * Value for the `path` field. Will be set for actions:&#39;add&#39;/&#39;replace&#39;. Maybe set for action: &#39;test&#39;. Either this or `value_matcher` will be set for &#39;test&#39; operation. An exact match must be performed.
     */
    value?: any | null;
    /**
     * Can be set for action &#39;test&#39; for advanced matching for the value of &#39;path&#39; field. Either this or `value` will be set for &#39;test&#39; operation.
     */
    valueMatcher?: Schema$GoogleCloudRecommenderV1beta1ValueMatcher;
  }
  /**
   * Group of operations that need to be performed atomically.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1OperationGroup {
    /**
     * List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear.
     */
    operations?: Schema$GoogleCloudRecommenderV1beta1Operation[];
  }
  /**
   * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
   */
  export interface Schema$GoogleCloudRecommenderV1beta1Recommendation {
    /**
     * Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.
     */
    additionalImpact?: Schema$GoogleCloudRecommenderV1beta1Impact[];
    /**
     * Content of the recommendation describing recommended changes to resources.
     */
    content?: Schema$GoogleCloudRecommenderV1beta1RecommendationContent;
    /**
     * Free-form human readable summary in English. The maximum length is 500 characters.
     */
    description?: string | null;
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking when updating states.
     */
    etag?: string | null;
    /**
     * Last time this recommendation was refreshed by the system that created it in the first place.
     */
    lastRefreshTime?: string | null;
    /**
     * Name of recommendation.  A project recommendation is represented as   projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]
     */
    name?: string | null;
    /**
     * The primary impact that this recommendation can have while trying to optimize for one category.
     */
    primaryImpact?: Schema$GoogleCloudRecommenderV1beta1Impact;
    /**
     * Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender.  Examples:   For recommender = &quot;google.iam.policy.Recommender&quot;,   recommender_subtype can be one of &quot;REMOVE_ROLE&quot;/&quot;REPLACE_ROLE&quot;
     */
    recommenderSubtype?: string | null;
    /**
     * Information for state. Contains state and metadata.
     */
    stateInfo?: Schema$GoogleCloudRecommenderV1beta1RecommendationStateInfo;
  }
  /**
   * Contains what resources are changing and how they are changing.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommendationContent {
    /**
     * Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order.
     */
    operationGroups?: Schema$GoogleCloudRecommenderV1beta1OperationGroup[];
  }
  /**
   * Information for state. Contains state and metadata.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1RecommendationStateInfo {
    /**
     * The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.
     */
    state?: string | null;
    /**
     * A map of metadata for the state, provided by user or automations systems.
     */
    stateMetadata?: {[key: string]: string} | null;
  }
  /**
   * Contains various matching options for values for a GCP resource field.
   */
  export interface Schema$GoogleCloudRecommenderV1beta1ValueMatcher {
    /**
     * To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch
     */
    matchesPattern?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `&quot;USD&quot;`, then 1 unit is one US dollar.
     */
    units?: string | null;
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
    recommenders: Resource$Projects$Locations$Recommenders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.recommenders = new Resource$Projects$Locations$Recommenders(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Recommenders {
    context: APIRequestContext;
    recommendations: Resource$Projects$Locations$Recommenders$Recommendations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.recommendations = new Resource$Projects$Locations$Recommenders$Recommendations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Recommenders$Recommendations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * recommender.projects.locations.recommenders.recommendations.get
     * @desc Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @alias recommender.projects.locations.recommenders.recommendations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the recommendation.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecommenderV1beta1Recommendation>;
    get(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Get
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudRecommenderV1beta1Recommendation
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudRecommenderV1beta1Recommendation
        >(parameters);
      }
    }

    /**
     * recommender.projects.locations.recommenders.recommendations.list
     * @desc Lists recommendations for a Cloud project. Requires the recommender.*.list IAM permission for the specified recommender.
     * @alias recommender.projects.locations.recommenders.recommendations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Filter expression to restrict the recommendations returned. Supported filter fields: state_info.state Eg: `state_info.state:"DISMISSED" or state_info.state:"FAILED"
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string=} params.pageToken Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent Required. The container resource on which to execute the request. Acceptable formats:  1. "projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]",  LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
    >;
    list(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$List
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/recommendations').replace(
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
        createAPIRequest<
          Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudRecommenderV1beta1ListRecommendationsResponse
        >(parameters);
      }
    }

    /**
     * recommender.projects.locations.recommenders.recommendations.markClaimed
     * @desc Mark the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated.  MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state.  Requires the recommender.*.update IAM permission for the specified recommender.
     * @alias recommender.projects.locations.recommenders.recommendations.markClaimed
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the recommendation.
     * @param {().GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markClaimed(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecommenderV1beta1Recommendation>;
    markClaimed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markClaimed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markClaimed(
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markClaimed(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudRecommenderV1beta1Recommendation
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markClaimed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudRecommenderV1beta1Recommendation
        >(parameters);
      }
    }

    /**
     * recommender.projects.locations.recommenders.recommendations.markFailed
     * @desc Mark the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated.  MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state.  Requires the recommender.*.update IAM permission for the specified recommender.
     * @alias recommender.projects.locations.recommenders.recommendations.markFailed
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the recommendation.
     * @param {().GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markFailed(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecommenderV1beta1Recommendation>;
    markFailed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markFailed(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markFailed(
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markFailed(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudRecommenderV1beta1Recommendation
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markFailed').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudRecommenderV1beta1Recommendation
        >(parameters);
      }
    }

    /**
     * recommender.projects.locations.recommenders.recommendations.markSucceeded
     * @desc Mark the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated.  MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state.  Requires the recommender.*.update IAM permission for the specified recommender.
     * @alias recommender.projects.locations.recommenders.recommendations.markSucceeded
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the recommendation.
     * @param {().GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markSucceeded(
      params?: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecommenderV1beta1Recommendation>;
    markSucceeded(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markSucceeded(
      params: Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded,
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markSucceeded(
      callback: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void;
    markSucceeded(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudRecommenderV1beta1Recommendation
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudRecommenderV1beta1Recommendation
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudRecommenderV1beta1Recommendation
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://recommender.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:markSucceeded').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommenderV1beta1Recommendation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudRecommenderV1beta1Recommendation
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the recommendation.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Filter expression to restrict the recommendations returned. Supported filter fields: state_info.state Eg: `state_info.state:"DISMISSED" or state_info.state:"FAILED"
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The container resource on which to execute the request. Acceptable formats:  1. "projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]",  LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Markclaimed
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Markfailed
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
  }
  export interface Params$Resource$Projects$Locations$Recommenders$Recommendations$Marksucceeded
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the recommendation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
  }
}
