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

export namespace cloudidentity_v1 {
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
   * Cloud Identity API
   *
   * API for provisioning and managing identity resources.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudidentity = google.cloudidentity('v1');
   *
   * @namespace cloudidentity
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudidentity
   */
  export class Cloudidentity {
    context: APIRequestContext;
    groups: Resource$Groups;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.groups = new Resource$Groups(this.context);
    }
  }

  /**
   * An EntityKey uniquely identifies an Entity. Namespaces are used to provide isolation for IDs. A single ID can be reused across namespaces but the combination of a namespace and an ID must be unique.
   */
  export interface Schema$EntityKey {
    /**
     * The ID of the entity within the given namespace. The ID must be unique within its namespace.
     */
    id?: string | null;
    /**
     * Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace.  Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `&quot;identitysources/{identity_source_id}&quot;` is created corresponding to every Identity Source `identity_source_id`.
     */
    namespace?: string | null;
  }
  /**
   * Resource representing a Group.
   */
  export interface Schema$Group {
    /**
     * The time when the Group was created. Output only.
     */
    createTime?: string | null;
    /**
     * An extended description to help users determine the purpose of a Group. For example, you can include information about who should join the Group, the types of messages to send to the Group, links to FAQs about the Group, or related Groups. Maximum length is 4,096 characters.
     */
    description?: string | null;
    /**
     * The Group&#39;s display name.
     */
    displayName?: string | null;
    /**
     * EntityKey of the Group.  Must be set when creating a Group, read-only afterwards.
     */
    groupKey?: Schema$EntityKey;
    /**
     * `Required`. Labels for Group resource. For creating Groups under a namespace, set label key to &#39;labels/system/groups/external&#39; and label value as empty.
     */
    labels?: {[key: string]: string} | null;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group.  Must be left blank while creating a Group.
     */
    name?: string | null;
    /**
     * The entity under which this Group resides in Cloud Identity resource hierarchy. Must be set when creating a Group, read-only afterwards.  Currently allowed types: `identitysources`.
     */
    parent?: string | null;
    /**
     * The time when the Group was last updated. Output only.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for ListGroups operation.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * Groups returned in response to list request. The results are not sorted.
     */
    groups?: Schema$Group[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListMembershipsResponse {
    /**
     * List of Memberships.
     */
    memberships?: Schema$Membership[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$LookupGroupNameResponse {
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    name?: string | null;
  }
  export interface Schema$LookupMembershipNameResponse {
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership being looked up.  Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     */
    name?: string | null;
  }
  /**
   * Resource representing a Membership within a Group
   */
  export interface Schema$Membership {
    /**
     * Creation timestamp of the Membership. Output only.
     */
    createTime?: string | null;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership in the format: `groups/{group_id}/memberships/{member_id}`, where group_id is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member  Must be left blank while creating a Membership.
     */
    name?: string | null;
    /**
     * EntityKey of the entity to be added as the member. Must be set while creating a Membership, read-only afterwards.  Currently allowed entity types: `Users`, `Groups`.
     */
    preferredMemberKey?: Schema$EntityKey;
    /**
     * Roles for a member within the Group.  Currently supported MembershipRoles: `&quot;MEMBER&quot;`.
     */
    roles?: Schema$MembershipRole[];
    /**
     * Last updated timestamp of the Membership. Output only.
     */
    updateTime?: string | null;
  }
  /**
   * Resource representing a role within a Membership.
   */
  export interface Schema$MembershipRole {
    /**
     * MembershipRole in string format.  Currently supported MembershipRoles: `&quot;MEMBER&quot;`.
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
  export interface Schema$SearchGroupsResponse {
    /**
     * List of Groups satisfying the search query.
     */
    groups?: Schema$Group[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for specified query.
     */
    nextPageToken?: string | null;
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

  export class Resource$Groups {
    context: APIRequestContext;
    memberships: Resource$Groups$Memberships;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.memberships = new Resource$Groups$Memberships(this.context);
    }

    /**
     * cloudidentity.groups.create
     * @desc Creates a Group.
     * @alias cloudidentity.groups.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Group} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Groups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Groups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Groups$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Groups$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.delete
     * @desc Deletes a Group.
     * @alias cloudidentity.groups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Groups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Groups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Groups$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * cloudidentity.groups.get
     * @desc Retrieves a Group.
     * @alias cloudidentity.groups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Groups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Group>;
    get(
      params: Params$Resource$Groups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(
      params: Params$Resource$Groups$Get,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(callback: BodyResponseCallback<Schema$Group>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Groups$Get
        | BodyResponseCallback<Schema$Group>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback?: BodyResponseCallback<Schema$Group>
    ): void | GaxiosPromise<Schema$Group> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * cloudidentity.groups.list
     * @desc List groups within a customer or a domain.
     * @alias cloudidentity.groups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     * @param {string=} params.pageToken The next_page_token value returned from a previous list request, if any.
     * @param {string=} params.parent `Required`. May be made Optional in the future. Customer ID to list all groups from.
     * @param {string=} params.view Group resource view to be returned. Defaults to [View.BASIC]().
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Groups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGroupsResponse>;
    list(
      params: Params$Resource$Groups$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Groups$List,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$List
        | BodyResponseCallback<Schema$ListGroupsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGroupsResponse>,
      callback?: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void | GaxiosPromise<Schema$ListGroupsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGroupsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListGroupsResponse>(parameters);
      }
    }

    /**
     * cloudidentity.groups.lookup
     * @desc Looks up [resource name](https://cloud.google.com/apis/design/resource_names) of a Group by its EntityKey.
     * @alias cloudidentity.groups.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.groupKey.id The ID of the entity within the given namespace. The ID must be unique within its namespace.
     * @param {string=} params.groupKey.namespace Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace.  Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup(
      params?: Params$Resource$Groups$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupGroupNameResponse>;
    lookup(
      params: Params$Resource$Groups$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupGroupNameResponse>,
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      params: Params$Resource$Groups$Lookup,
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Groups$Lookup
        | BodyResponseCallback<Schema$LookupGroupNameResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupGroupNameResponse>,
      callback?: BodyResponseCallback<Schema$LookupGroupNameResponse>
    ): void | GaxiosPromise<Schema$LookupGroupNameResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups:lookup').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupGroupNameResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LookupGroupNameResponse>(parameters);
      }
    }

    /**
     * cloudidentity.groups.patch
     * @desc Updates a Group.
     * @alias cloudidentity.groups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group.  Must be left blank while creating a Group.
     * @param {string=} params.updateMask Editable fields: `display_name`, `description`
     * @param {().Group} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Groups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Groups$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Groups$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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

    /**
     * cloudidentity.groups.search
     * @desc Searches for Groups.
     * @alias cloudidentity.groups.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     * @param {string=} params.pageToken The next_page_token value returned from a previous search request, if any.
     * @param {string=} params.query `Required`. Query string for performing search on groups. Users can search on parent and label attributes of groups. EXACT match ('==') is supported on parent, and CONTAINS match ('in') is supported on labels.
     * @param {string=} params.view Group resource view to be returned. Defaults to [View.BASIC]().
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params?: Params$Resource$Groups$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchGroupsResponse>;
    search(
      params: Params$Resource$Groups$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchGroupsResponse>,
      callback: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void;
    search(
      params: Params$Resource$Groups$Search,
      callback: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchGroupsResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Groups$Search
        | BodyResponseCallback<Schema$SearchGroupsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchGroupsResponse>,
      callback?: BodyResponseCallback<Schema$SearchGroupsResponse>
    ): void | GaxiosPromise<Schema$SearchGroupsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/groups:search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchGroupsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchGroupsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Groups$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * `Required`. May be made Optional in the future. Customer ID to list all groups from.
     */
    parent?: string;
    /**
     * Group resource view to be returned. Defaults to [View.BASIC]().
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Lookup extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the entity within the given namespace. The ID must be unique within its namespace.
     */
    'groupKey.id'?: string;
    /**
     * Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace.  Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     */
    'groupKey.namespace'?: string;
  }
  export interface Params$Resource$Groups$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group in the format: `groups/{group_id}`, where group_id is the unique ID assigned to the Group.  Must be left blank while creating a Group.
     */
    name?: string;
    /**
     * Editable fields: `display_name`, `description`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$Search extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous search request, if any.
     */
    pageToken?: string;
    /**
     * `Required`. Query string for performing search on groups. Users can search on parent and label attributes of groups. EXACT match ('==') is supported on parent, and CONTAINS match ('in') is supported on labels.
     */
    query?: string;
    /**
     * Group resource view to be returned. Defaults to [View.BASIC]().
     */
    view?: string;
  }

  export class Resource$Groups$Memberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudidentity.groups.memberships.create
     * @desc Creates a Membership.
     * @alias cloudidentity.groups.memberships.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to create Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {().Membership} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Groups$Memberships$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Groups$Memberships$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
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
     * cloudidentity.groups.memberships.delete
     * @desc Deletes a Membership.
     * @alias cloudidentity.groups.memberships.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be deleted.  Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Groups$Memberships$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Groups$Memberships$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
     * cloudidentity.groups.memberships.get
     * @desc Retrieves a Membership.
     * @alias cloudidentity.groups.memberships.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be retrieved.  Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique id assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Groups$Memberships$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(
      params: Params$Resource$Groups$Memberships$Get,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(callback: BodyResponseCallback<Schema$Membership>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Get
        | BodyResponseCallback<Schema$Membership>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Membership>,
      callback?: BodyResponseCallback<Schema$Membership>
    ): void | GaxiosPromise<Schema$Membership> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
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
        createAPIRequest<Schema$Membership>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Membership>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.list
     * @desc List Memberships within a Group.
     * @alias cloudidentity.groups.memberships.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     * @param {string=} params.pageToken The next_page_token value returned from a previous list request, if any.
     * @param {string} params.parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to list Memberships within.  Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {string=} params.view Membership resource view to be returned. Defaults to View.BASIC.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Groups$Memberships$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMembershipsResponse>;
    list(
      params: Params$Resource$Groups$Memberships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(
      params: Params$Resource$Groups$Memberships$List,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMembershipsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$List
        | BodyResponseCallback<Schema$ListMembershipsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>,
      callback?: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void | GaxiosPromise<Schema$ListMembershipsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
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
        createAPIRequest<Schema$ListMembershipsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListMembershipsResponse>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.lookup
     * @desc Looks up [resource name](https://cloud.google.com/apis/design/resource_names) of a Membership within a Group by member's EntityKey.
     * @alias cloudidentity.groups.memberships.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.memberKey.id The ID of the entity within the given namespace. The ID must be unique within its namespace.
     * @param {string=} params.memberKey.namespace Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace.  Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     * @param {string} params.parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to lookup Membership within.  Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup(
      params?: Params$Resource$Groups$Memberships$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupMembershipNameResponse>;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>,
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      params: Params$Resource$Groups$Memberships$Lookup,
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Lookup
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupMembershipNameResponse>,
      callback?: BodyResponseCallback<Schema$LookupMembershipNameResponse>
    ): void | GaxiosPromise<Schema$LookupMembershipNameResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudidentity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships:lookup').replace(
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
        createAPIRequest<Schema$LookupMembershipNameResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$LookupMembershipNameResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Groups$Memberships$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to create Membership within. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Membership;
  }
  export interface Params$Resource$Groups$Memberships$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be deleted.  Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique ID assigned to the Group to which Membership belongs to, and member_id is the unique ID assigned to the member.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Memberships$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Membership to be retrieved.  Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is the unique id assigned to the Group to which Membership belongs to, and `member_id` is the unique ID assigned to the member.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Memberships$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The default page size is 200 (max 1000) for the BASIC view, and 50 (max 500) for the FULL view.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to list Memberships within.  Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    parent?: string;
    /**
     * Membership resource view to be returned. Defaults to View.BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Memberships$Lookup
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the entity within the given namespace. The ID must be unique within its namespace.
     */
    'memberKey.id'?: string;
    /**
     * Namespaces provide isolation for IDs, so an ID only needs to be unique within its namespace.  Namespaces are currently only created as part of IdentitySource creation from Admin Console. A namespace `"identitysources/{identity_source_id}"` is created corresponding to every Identity Source `identity_source_id`.
     */
    'memberKey.namespace'?: string;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the Group to lookup Membership within.  Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
     */
    parent?: string;
  }
}
