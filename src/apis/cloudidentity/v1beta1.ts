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

export namespace cloudidentity_v1beta1 {
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
   * Cloud Identity API
   *
   * API for provisioning and managing identity resources.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudidentity = google.cloudidentity('v1beta1');
   *
   * @namespace cloudidentity
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
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
   * A unique identifier for an entity in the Cloud Identity Groups API.  An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
   */
  export interface Schema$EntityKey {
    /**
     * The ID of the entity.  For Google-managed entities, the `id` must be the email address of an existing group or user.  For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source&#39;s requirements.  Must be unique within a `namespace`.
     */
    id?: string | null;
    /**
     * The namespace in which the entity exists.  If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group.  If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console. Must be of the form `identitysources/{identity_source_id}.
     */
    namespace?: string | null;
  }
  /**
   * A group within the Cloud Identity Groups API.  A `Group` is a collection of entities, where each entity is either a user or another group or a service account.
   */
  export interface Schema$Group {
    /**
     * Additional entity key aliases for a Group.
     */
    additionalGroupKeys?: Schema$EntityKey[];
    /**
     * Output only. The time when the `Group` was created.
     */
    createTime?: string | null;
    /**
     * An extended description to help users determine the purpose of a `Group`.  Must not be longer than 4,096 characters.
     */
    description?: string | null;
    /**
     * The display name of the `Group`.
     */
    displayName?: string | null;
    /**
     * Required. Immutable. The `EntityKey` of the `Group`.
     */
    groupKey?: Schema$EntityKey;
    /**
     * Required. The labels that apply to the `Group`.  Must not contain more than one entry. Must contain the entry `&#39;cloudidentity.googleapis.com/groups.discussion_forum&#39;: &#39;&#39;` if the `Group` is a Google Group or `&#39;system/groups/external&#39;: &#39;&#39;` if the `Group` is an external-identity-mapped group.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`.  Shall be of the form `groups/{group_id}`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy.  Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups.
     */
    parent?: string | null;
    /**
     * Output only. The time when the `Group` was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The response message for GroupsService.ListGroups.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * The `Group`s under the specified `parent`.
     */
    groups?: Schema$Group[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for MembershipsService.ListMemberships.
   */
  export interface Schema$ListMembershipsResponse {
    /**
     * The `Membership`s under the specified `parent`.
     */
    memberships?: Schema$Membership[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for GroupsService.LookupGroupName.
   */
  export interface Schema$LookupGroupNameResponse {
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`.
     */
    name?: string | null;
  }
  /**
   * The response message for MembershipsService.LookupMembershipName.
   */
  export interface Schema$LookupMembershipNameResponse {
    /**
     * The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    name?: string | null;
  }
  /**
   * A membership within the Cloud Identity Groups API.  A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a &quot;member&quot;.
   */
  export interface Schema$Membership {
    /**
     * Output only. The time when the `Membership` was created.
     */
    createTime?: string | null;
    /**
     * Immutable. The `EntityKey` of the member.  Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
     */
    memberKey?: Schema$EntityKey;
    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`.  Shall be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The `EntityKey` of the member.  Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
     */
    preferredMemberKey?: Schema$EntityKey;
    /**
     * The `MembershipRole`s that apply to the `Membership`.  If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`.  Must not contain duplicate `MembershipRole`s with the same `name`.
     */
    roles?: Schema$MembershipRole[];
    /**
     * Output only. The time when the `Membership` was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A membership role within the Cloud Identity Groups API.  A `MembershipRole` defines the privileges granted to a `Membership`.
   */
  export interface Schema$MembershipRole {
    /**
     * The name of the `MembershipRole`.  Must be one of `OWNER`, `MANAGER`, `MEMBER`.
     */
    name?: string | null;
  }
  /**
   * The request message for MembershipsService.ModifyMembershipRoles.
   */
  export interface Schema$ModifyMembershipRolesRequest {
    /**
     * The `MembershipRole`s to be added.  Adding or removing roles in the same request as updating roles is not supported.  Must not be set if `update_roles_params` is set.
     */
    addRoles?: Schema$MembershipRole[];
    /**
     * The `name`s of the `MembershipRole`s to be removed.  Adding or removing roles in the same request as updating roles is not supported.  It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead.  Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.
     */
    removeRoles?: string[] | null;
    /**
     * The `MembershipRole`s to be updated.  Updating roles in the same request as adding or removing roles is not supported.  Must not be set if either `add_roles` or `remove_roles` is set.
     */
    updateRolesParams?: Schema$UpdateMembershipRolesParams[];
  }
  /**
   * The response message for MembershipsService.ModifyMembershipRoles.
   */
  export interface Schema$ModifyMembershipRolesResponse {
    /**
     * The `Membership` resource after modifying its `MembershipRole`s.
     */
    membership?: Schema$Membership;
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
   * The response message for GroupsService.SearchGroups.
   */
  export interface Schema$SearchGroupsResponse {
    /**
     * The `Group`s that match the search query.
     */
    groups?: Schema$Group[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
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
  /**
   * The details of an update to a `MembershipRole`.
   */
  export interface Schema$UpdateMembershipRolesParams {
    /**
     * The fully-qualified names of fields to update.  May only contain the field `expiry_detail`.
     */
    fieldMask?: string | null;
    /**
     * The `MembershipRole`s to be updated.  Only `MEMBER` `MembershipRoles` can currently be updated.  May only contain a `MembershipRole` with `name` `MEMBER`.
     */
    membershipRole?: Schema$MembershipRole;
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
     * @desc Creates a `Group`.
     * @alias cloudidentity.groups.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.initialGroupConfig Required. The initial configuration option for the `Group`.
     * @param {().Group} params.requestBody Request body data
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
            url: (rootUrl + '/v1beta1/groups').replace(/([^:]\/)\/+/g, '$1'),
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
     * @desc Deletes a `Group`.
     * @alias cloudidentity.groups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve.  Must be of the form `groups/{group_id}`.
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.get
     * @desc Retrieves a `Group`.
     * @alias cloudidentity.groups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve.  Must be of the form `groups/{group_id}`.
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
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * cloudidentity.groups.list
     * @desc Lists the `Group`s under a customer or namespace.
     * @alias cloudidentity.groups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return.  Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`.  If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`.  Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.
     * @param {string=} params.pageToken The `next_page_token` value returned from a previous list request, if any.
     * @param {string=} params.parent Required. The parent resource under which to list all `Group`s.  Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups.
     * @param {string=} params.view The level of detail to be returned.  If unspecified, defaults to `View.BASIC`.
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
            url: (rootUrl + '/v1beta1/groups').replace(/([^:]\/)\/+/g, '$1'),
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
     * @desc Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
     * @alias cloudidentity.groups.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.groupKey.id The ID of the entity.  For Google-managed entities, the `id` must be the email address of an existing group or user.  For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements.  Must be unique within a `namespace`.
     * @param {string=} params.groupKey.namespace The namespace in which the entity exists.  If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group.  If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console. Must be of the form `identitysources/{identity_source_id}.
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
            url: (rootUrl + '/v1beta1/groups:lookup').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * @desc Updates a `Group`.
     * @alias cloudidentity.groups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`.  Shall be of the form `groups/{group_id}`.
     * @param {string=} params.updateMask Required. The fully-qualified names of fields to update.  May only contain the following fields: `display_name`, `description`.
     * @param {().Group} params.requestBody Request body data
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.search
     * @desc Searches for `Group`s matching a specified query.
     * @alias cloudidentity.groups.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return.  Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`.  If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`.  Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     * @param {string=} params.pageToken The `next_page_token` value returned from a previous search request, if any.
     * @param {string=} params.query Required. The search query.  Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the parent and inclusion operators on labels (e.g., `parent == 'customers/{customer_id}' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels`).
     * @param {string=} params.view The level of detail to be returned.  If unspecified, defaults to `View.BASIC`.
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
            url: (rootUrl + '/v1beta1/groups:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Required. The initial configuration option for the `Group`.
     */
    initialGroupConfig?: string;

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
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve.  Must be of the form `groups/{group_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve.  Must be of the form `groups/{group_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Groups$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of results to return.  Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`.  If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`.  Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource under which to list all `Group`s.  Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups.
     */
    parent?: string;
    /**
     * The level of detail to be returned.  If unspecified, defaults to `View.BASIC`.
     */
    view?: string;
  }
  export interface Params$Resource$Groups$Lookup extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the entity.  For Google-managed entities, the `id` must be the email address of an existing group or user.  For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements.  Must be unique within a `namespace`.
     */
    'groupKey.id'?: string;
    /**
     * The namespace in which the entity exists.  If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group.  If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console. Must be of the form `identitysources/{identity_source_id}.
     */
    'groupKey.namespace'?: string;
  }
  export interface Params$Resource$Groups$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`.  Shall be of the form `groups/{group_id}`.
     */
    name?: string;
    /**
     * Required. The fully-qualified names of fields to update.  May only contain the following fields: `display_name`, `description`.
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
     * The maximum number of results to return.  Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`.  If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`.  Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous search request, if any.
     */
    pageToken?: string;
    /**
     * Required. The search query.  Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the parent and inclusion operators on labels (e.g., `parent == 'customers/{customer_id}' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels`).
     */
    query?: string;
    /**
     * The level of detail to be returned.  If unspecified, defaults to `View.BASIC`.
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
     * @desc Creates a `Membership`.
     * @alias cloudidentity.groups.memberships.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent `Group` resource under which to create the `Membership`.  Must be of the form `groups/{group_id}`.
     * @param {().Membership} params.requestBody Request body data
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
            url: (rootUrl + '/v1beta1/{+parent}/memberships').replace(
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
     * @desc Deletes a `Membership`.
     * @alias cloudidentity.groups.memberships.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.get
     * @desc Retrieves a `Membership`.
     * @alias cloudidentity.groups.memberships.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
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
        createAPIRequest<Schema$Membership>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Membership>(parameters);
      }
    }

    /**
     * cloudidentity.groups.memberships.list
     * @desc Lists the `Membership`s within a `Group`.
     * @alias cloudidentity.groups.memberships.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return.  Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`.  If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`.  Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     * @param {string=} params.pageToken The `next_page_token` value returned from a previous search request, if any.
     * @param {string} params.parent Required. The parent `Group` resource under which to lookup the `Membership` name.  Must be of the form `groups/{group_id}`.
     * @param {string=} params.view The level of detail to be returned.  If unspecified, defaults to `MembershipView.BASIC`.
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
            url: (rootUrl + '/v1beta1/{+parent}/memberships').replace(
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
     * @desc Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
     * @alias cloudidentity.groups.memberships.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.memberKey.id The ID of the entity.  For Google-managed entities, the `id` must be the email address of an existing group or user.  For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements.  Must be unique within a `namespace`.
     * @param {string=} params.memberKey.namespace The namespace in which the entity exists.  If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group.  If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console. Must be of the form `identitysources/{identity_source_id}.
     * @param {string} params.parent Required. The parent `Group` resource under which to lookup the `Membership` name.  Must be of the form `groups/{group_id}`.
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
            url: (rootUrl + '/v1beta1/{+parent}/memberships:lookup').replace(
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

    /**
     * cloudidentity.groups.memberships.modifyMembershipRoles
     * @desc Modifies the `MembershipRole`s of a `Membership`.
     * @alias cloudidentity.groups.memberships.modifyMembershipRoles
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     * @param {().ModifyMembershipRolesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modifyMembershipRoles(
      params?: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ModifyMembershipRolesResponse>;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>,
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      params: Params$Resource$Groups$Memberships$Modifymembershiproles,
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      callback: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void;
    modifyMembershipRoles(
      paramsOrCallback?:
        | Params$Resource$Groups$Memberships$Modifymembershiproles
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyMembershipRolesResponse>,
      callback?: BodyResponseCallback<Schema$ModifyMembershipRolesResponse>
    ): void | GaxiosPromise<Schema$ModifyMembershipRolesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Groups$Memberships$Modifymembershiproles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Memberships$Modifymembershiproles;
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
            url: (rootUrl + '/v1beta1/{+name}:modifyMembershipRoles').replace(
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
        createAPIRequest<Schema$ModifyMembershipRolesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ModifyMembershipRolesResponse>(
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
     * Required. The parent `Group` resource under which to create the `Membership`.  Must be of the form `groups/{group_id}`.
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
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
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
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
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
     * The maximum number of results to return.  Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`.  If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`.  Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous search request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent `Group` resource under which to lookup the `Membership` name.  Must be of the form `groups/{group_id}`.
     */
    parent?: string;
    /**
     * The level of detail to be returned.  If unspecified, defaults to `MembershipView.BASIC`.
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
     * The ID of the entity.  For Google-managed entities, the `id` must be the email address of an existing group or user.  For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements.  Must be unique within a `namespace`.
     */
    'memberKey.id'?: string;
    /**
     * The namespace in which the entity exists.  If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group.  If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console. Must be of the form `identitysources/{identity_source_id}.
     */
    'memberKey.namespace'?: string;
    /**
     * Required. The parent `Group` resource under which to lookup the `Membership` name.  Must be of the form `groups/{group_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Groups$Memberships$Modifymembershiproles
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified.  Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyMembershipRolesRequest;
  }
}
