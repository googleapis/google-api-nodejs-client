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

export namespace storage_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Cloud Storage JSON API
   *
   * Lets you store and retrieve potentially-large, immutable data objects.
   *
   * @example
   * const {google} = require('googleapis');
   * const storage = google.storage('v1beta1');
   *
   * @namespace storage
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Storage
   */
  export class Storage {
    context: APIRequestContext;
    bucketAccessControls: Resource$Bucketaccesscontrols;
    buckets: Resource$Buckets;
    objectAccessControls: Resource$Objectaccesscontrols;
    objects: Resource$Objects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.bucketAccessControls = new Resource$Bucketaccesscontrols(
        this.context
      );
      this.buckets = new Resource$Buckets(this.context);
      this.objectAccessControls = new Resource$Objectaccesscontrols(
        this.context
      );
      this.objects = new Resource$Objects(this.context);
    }
  }

  /**
   * A bucket.
   */
  export interface Schema$Bucket {
    /**
     * Access controls on the bucket.
     */
    acl?: Schema$BucketAccessControl[];
    /**
     * Default access controls to apply to new objects when no ACL is provided.
     */
    defaultObjectAcl?: Schema$ObjectAccessControl[];
    /**
     * The name of the bucket.
     */
    id?: string | null;
    /**
     * The kind of item this is. For buckets, this is always storage#bucket.
     */
    kind?: string | null;
    /**
     * The location of the bucket. Object data for objects in the bucket resides in physical storage in this location. Can be US or EU. Defaults to US.
     */
    location?: string | null;
    /**
     * The owner of the bucket. This will always be the project team&#39;s owner group.
     */
    owner?: {entity?: string; entityId?: string} | null;
    /**
     * The project the bucket belongs to.
     */
    projectId?: string | null;
    /**
     * The URI of this bucket.
     */
    selfLink?: string | null;
    /**
     * Creation time of the bucket in RFC 3339 format.
     */
    timeCreated?: string | null;
    /**
     * The bucket&#39;s website configuration.
     */
    website?: {mainPageSuffix?: string; notFoundPage?: string} | null;
  }
  /**
   * An access-control entry.
   */
  export interface Schema$BucketAccessControl {
    /**
     * The name of the bucket.
     */
    bucket?: string | null;
    /**
     * The domain associated with the entity, if any.
     */
    domain?: string | null;
    /**
     * The email address associated with the entity, if any.
     */
    email?: string | null;
    /**
     * The entity holding the permission, in one of the following forms:  - user-userId  - user-email  - group-groupId  - group-email  - domain-domain  - allUsers  - allAuthenticatedUsers Examples:  - The user liz@example.com would be user-liz@example.com.  - The group example@googlegroups.com would be group-example@googlegroups.com.  - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
     */
    entity?: string | null;
    /**
     * The ID for the entity, if any.
     */
    entityId?: string | null;
    /**
     * The ID of the access-control entry.
     */
    id?: string | null;
    /**
     * The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
     */
    kind?: string | null;
    /**
     * The access permission for the entity. Can be READER, WRITER, or OWNER.
     */
    role?: string | null;
    /**
     * The link to this access-control entry.
     */
    selfLink?: string | null;
  }
  /**
   * An access-control list.
   */
  export interface Schema$BucketAccessControls {
    /**
     * The list of items.
     */
    items?: Schema$BucketAccessControl[];
    /**
     * The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.
     */
    kind?: string | null;
  }
  /**
   * A list of buckets.
   */
  export interface Schema$Buckets {
    /**
     * The list of items.
     */
    items?: Schema$Bucket[];
    /**
     * The kind of item this is. For lists of buckets, this is always storage#buckets.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * An object.
   */
  export interface Schema$Object {
    /**
     * Access controls on the object.
     */
    acl?: Schema$ObjectAccessControl[];
    /**
     * The bucket containing this object.
     */
    bucket?: string | null;
    /**
     * Cache-Control directive for the object data.
     */
    cacheControl?: string | null;
    /**
     * Content-Disposition of the object data.
     */
    contentDisposition?: string | null;
    /**
     * Content-Encoding of the object data.
     */
    contentEncoding?: string | null;
    /**
     * Content-Language of the object data.
     */
    contentLanguage?: string | null;
    /**
     * The ID of the object.
     */
    id?: string | null;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind?: string | null;
    /**
     * Object media data. Provided on your behalf when uploading raw media or multipart/related with an auxiliary media part.
     */
    media?: {
      algorithm?: string;
      contentType?: string;
      data?: string;
      hash?: string;
      length?: string;
      link?: string;
      timeCreated?: string;
    } | null;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of this object. Required if not specified by URL parameter.
     */
    name?: string | null;
    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    owner?: {entity?: string; entityId?: string} | null;
    /**
     * The link to this object.
     */
    selfLink?: string | null;
  }
  /**
   * An access-control entry.
   */
  export interface Schema$ObjectAccessControl {
    /**
     * The name of the bucket.
     */
    bucket?: string | null;
    /**
     * The domain associated with the entity, if any.
     */
    domain?: string | null;
    /**
     * The email address associated with the entity, if any.
     */
    email?: string | null;
    /**
     * The entity holding the permission, in one of the following forms:  - user-userId  - user-email  - group-groupId  - group-email  - domain-domain  - allUsers  - allAuthenticatedUsers Examples:  - The user liz@example.com would be user-liz@example.com.  - The group example@googlegroups.com would be group-example@googlegroups.com.  - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
     */
    entity?: string | null;
    /**
     * The ID for the entity, if any.
     */
    entityId?: string | null;
    /**
     * The ID of the access-control entry.
     */
    id?: string | null;
    /**
     * The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
     */
    kind?: string | null;
    /**
     * The name of the object.
     */
    object?: string | null;
    /**
     * The access permission for the entity. Can be READER or OWNER.
     */
    role?: string | null;
    /**
     * The link to this access-control entry.
     */
    selfLink?: string | null;
  }
  /**
   * An access-control list.
   */
  export interface Schema$ObjectAccessControls {
    /**
     * The list of items.
     */
    items?: Schema$ObjectAccessControl[];
    /**
     * The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
     */
    kind?: string | null;
  }
  /**
   * A list of objects.
   */
  export interface Schema$Objects {
    /**
     * The list of items.
     */
    items?: Schema$Object[];
    /**
     * The kind of item this is. For lists of objects, this is always storage#objects.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
     */
    prefixes?: string[] | null;
  }

  export class Resource$Bucketaccesscontrols {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.bucketAccessControls.delete
     * @desc Deletes the ACL entry for the specified entity on the specified bucket.
     * @alias storage.bucketAccessControls.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Bucketaccesscontrols$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Bucketaccesscontrols$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Bucketaccesscontrols$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Bucketaccesscontrols$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bucketaccesscontrols$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bucketaccesscontrols$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/acl/{entity}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * storage.bucketAccessControls.get
     * @desc Returns the ACL entry for the specified entity on the specified bucket.
     * @alias storage.bucketAccessControls.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Bucketaccesscontrols$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    get(
      params: Params$Resource$Bucketaccesscontrols$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BucketAccessControl>,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    get(
      params: Params$Resource$Bucketaccesscontrols$Get,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    get(callback: BodyResponseCallback<Schema$BucketAccessControl>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bucketaccesscontrols$Get
        | BodyResponseCallback<Schema$BucketAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>
    ): void | GaxiosPromise<Schema$BucketAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bucketaccesscontrols$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bucketaccesscontrols$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/acl/{entity}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }

    /**
     * storage.bucketAccessControls.insert
     * @desc Creates a new ACL entry on the specified bucket.
     * @alias storage.bucketAccessControls.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {().BucketAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Bucketaccesscontrols$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    insert(
      params: Params$Resource$Bucketaccesscontrols$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$BucketAccessControl>,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    insert(
      params: Params$Resource$Bucketaccesscontrols$Insert,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    insert(callback: BodyResponseCallback<Schema$BucketAccessControl>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Bucketaccesscontrols$Insert
        | BodyResponseCallback<Schema$BucketAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>
    ): void | GaxiosPromise<Schema$BucketAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bucketaccesscontrols$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bucketaccesscontrols$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/acl').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }

    /**
     * storage.bucketAccessControls.list
     * @desc Retrieves ACL entries on the specified bucket.
     * @alias storage.bucketAccessControls.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Bucketaccesscontrols$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControls>;
    list(
      params: Params$Resource$Bucketaccesscontrols$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BucketAccessControls>,
      callback: BodyResponseCallback<Schema$BucketAccessControls>
    ): void;
    list(
      params: Params$Resource$Bucketaccesscontrols$List,
      callback: BodyResponseCallback<Schema$BucketAccessControls>
    ): void;
    list(callback: BodyResponseCallback<Schema$BucketAccessControls>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bucketaccesscontrols$List
        | BodyResponseCallback<Schema$BucketAccessControls>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BucketAccessControls>,
      callback?: BodyResponseCallback<Schema$BucketAccessControls>
    ): void | GaxiosPromise<Schema$BucketAccessControls> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bucketaccesscontrols$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bucketaccesscontrols$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/acl').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControls>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControls>(parameters);
      }
    }

    /**
     * storage.bucketAccessControls.patch
     * @desc Updates an ACL entry on the specified bucket. This method supports patch semantics.
     * @alias storage.bucketAccessControls.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {().BucketAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Bucketaccesscontrols$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    patch(
      params: Params$Resource$Bucketaccesscontrols$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$BucketAccessControl>,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    patch(
      params: Params$Resource$Bucketaccesscontrols$Patch,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    patch(callback: BodyResponseCallback<Schema$BucketAccessControl>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Bucketaccesscontrols$Patch
        | BodyResponseCallback<Schema$BucketAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>
    ): void | GaxiosPromise<Schema$BucketAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bucketaccesscontrols$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bucketaccesscontrols$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/acl/{entity}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }

    /**
     * storage.bucketAccessControls.update
     * @desc Updates an ACL entry on the specified bucket.
     * @alias storage.bucketAccessControls.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {().BucketAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Bucketaccesscontrols$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    update(
      params: Params$Resource$Bucketaccesscontrols$Update,
      options: MethodOptions | BodyResponseCallback<Schema$BucketAccessControl>,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    update(
      params: Params$Resource$Bucketaccesscontrols$Update,
      callback: BodyResponseCallback<Schema$BucketAccessControl>
    ): void;
    update(callback: BodyResponseCallback<Schema$BucketAccessControl>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Bucketaccesscontrols$Update
        | BodyResponseCallback<Schema$BucketAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>
    ): void | GaxiosPromise<Schema$BucketAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bucketaccesscontrols$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bucketaccesscontrols$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/acl/{entity}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }
  }

  export interface Params$Resource$Bucketaccesscontrols$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
  }
  export interface Params$Resource$Bucketaccesscontrols$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
  }
  export interface Params$Resource$Bucketaccesscontrols$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BucketAccessControl;
  }
  export interface Params$Resource$Bucketaccesscontrols$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
  }
  export interface Params$Resource$Bucketaccesscontrols$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BucketAccessControl;
  }
  export interface Params$Resource$Bucketaccesscontrols$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BucketAccessControl;
  }

  export class Resource$Buckets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.buckets.delete
     * @desc Deletes an empty bucket.
     * @alias storage.buckets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Buckets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Buckets$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Buckets$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Buckets$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buckets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * storage.buckets.get
     * @desc Returns metadata for the specified bucket.
     * @alias storage.buckets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string=} params.projection Set of properties to return. Defaults to no_acl.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Buckets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    get(
      params: Params$Resource$Buckets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    get(
      params: Params$Resource$Buckets$Get,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    get(callback: BodyResponseCallback<Schema$Bucket>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Buckets$Get
        | BodyResponseCallback<Schema$Bucket>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>
    ): void | GaxiosPromise<Schema$Bucket> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buckets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bucket>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * storage.buckets.insert
     * @desc Creates a new bucket.
     * @alias storage.buckets.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.projection Set of properties to return. Defaults to no_acl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     * @param {().Bucket} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Buckets$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    insert(
      params: Params$Resource$Buckets$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    insert(
      params: Params$Resource$Buckets$Insert,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Bucket>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Buckets$Insert
        | BodyResponseCallback<Schema$Bucket>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>
    ): void | GaxiosPromise<Schema$Bucket> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buckets$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Bucket>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * storage.buckets.list
     * @desc Retrieves a list of buckets for a given project.
     * @alias storage.buckets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.max-results Maximum number of buckets to return.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.projectId A valid API project identifier.
     * @param {string=} params.projection Set of properties to return. Defaults to no_acl.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Buckets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Buckets>;
    list(
      params: Params$Resource$Buckets$List,
      options: MethodOptions | BodyResponseCallback<Schema$Buckets>,
      callback: BodyResponseCallback<Schema$Buckets>
    ): void;
    list(
      params: Params$Resource$Buckets$List,
      callback: BodyResponseCallback<Schema$Buckets>
    ): void;
    list(callback: BodyResponseCallback<Schema$Buckets>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Buckets$List
        | BodyResponseCallback<Schema$Buckets>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Buckets>,
      callback?: BodyResponseCallback<Schema$Buckets>
    ): void | GaxiosPromise<Schema$Buckets> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buckets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Buckets>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Buckets>(parameters);
      }
    }

    /**
     * storage.buckets.patch
     * @desc Updates a bucket. This method supports patch semantics.
     * @alias storage.buckets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string=} params.projection Set of properties to return. Defaults to full.
     * @param {().Bucket} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Buckets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    patch(
      params: Params$Resource$Buckets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    patch(
      params: Params$Resource$Buckets$Patch,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Bucket>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Buckets$Patch
        | BodyResponseCallback<Schema$Bucket>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>
    ): void | GaxiosPromise<Schema$Bucket> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buckets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bucket>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * storage.buckets.update
     * @desc Updates a bucket.
     * @alias storage.buckets.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string=} params.projection Set of properties to return. Defaults to full.
     * @param {().Bucket} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Buckets$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    update(
      params: Params$Resource$Buckets$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    update(
      params: Params$Resource$Buckets$Update,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    update(callback: BodyResponseCallback<Schema$Bucket>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Buckets$Update
        | BodyResponseCallback<Schema$Bucket>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>
    ): void | GaxiosPromise<Schema$Bucket> {
      let params = (paramsOrCallback || {}) as Params$Resource$Buckets$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bucket>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }
  }

  export interface Params$Resource$Buckets$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
  }
  export interface Params$Resource$Buckets$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Set of properties to return. Defaults to no_acl.
     */
    projection?: string;
  }
  export interface Params$Resource$Buckets$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Set of properties to return. Defaults to no_acl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Bucket;
  }
  export interface Params$Resource$Buckets$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of buckets to return.
     */
    'max-results'?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * A valid API project identifier.
     */
    projectId?: string;
    /**
     * Set of properties to return. Defaults to no_acl.
     */
    projection?: string;
  }
  export interface Params$Resource$Buckets$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Bucket;
  }
  export interface Params$Resource$Buckets$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Bucket;
  }

  export class Resource$Objectaccesscontrols {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.objectAccessControls.delete
     * @desc Deletes the ACL entry for the specified entity on the specified object.
     * @alias storage.objectAccessControls.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.object Name of the object.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Objectaccesscontrols$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Objectaccesscontrols$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Objectaccesscontrols$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Objectaccesscontrols$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objectaccesscontrols$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objectaccesscontrols$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * storage.objectAccessControls.get
     * @desc Returns the ACL entry for the specified entity on the specified object.
     * @alias storage.objectAccessControls.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.object Name of the object.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Objectaccesscontrols$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    get(
      params: Params$Resource$Objectaccesscontrols$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    get(
      params: Params$Resource$Objectaccesscontrols$Get,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    get(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Objectaccesscontrols$Get
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objectaccesscontrols$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objectaccesscontrols$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * storage.objectAccessControls.insert
     * @desc Creates a new ACL entry on the specified object.
     * @alias storage.objectAccessControls.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.object Name of the object.
     * @param {().ObjectAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Objectaccesscontrols$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    insert(
      params: Params$Resource$Objectaccesscontrols$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    insert(
      params: Params$Resource$Objectaccesscontrols$Insert,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Objectaccesscontrols$Insert
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objectaccesscontrols$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objectaccesscontrols$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}/acl'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * storage.objectAccessControls.list
     * @desc Retrieves ACL entries on the specified object.
     * @alias storage.objectAccessControls.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.object Name of the object.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Objectaccesscontrols$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControls>;
    list(
      params: Params$Resource$Objectaccesscontrols$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControls>,
      callback: BodyResponseCallback<Schema$ObjectAccessControls>
    ): void;
    list(
      params: Params$Resource$Objectaccesscontrols$List,
      callback: BodyResponseCallback<Schema$ObjectAccessControls>
    ): void;
    list(callback: BodyResponseCallback<Schema$ObjectAccessControls>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Objectaccesscontrols$List
        | BodyResponseCallback<Schema$ObjectAccessControls>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControls>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControls>
    ): void | GaxiosPromise<Schema$ObjectAccessControls> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objectaccesscontrols$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objectaccesscontrols$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}/acl'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControls>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControls>(parameters);
      }
    }

    /**
     * storage.objectAccessControls.patch
     * @desc Updates an ACL entry on the specified object. This method supports patch semantics.
     * @alias storage.objectAccessControls.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.object Name of the object.
     * @param {().ObjectAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Objectaccesscontrols$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    patch(
      params: Params$Resource$Objectaccesscontrols$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    patch(
      params: Params$Resource$Objectaccesscontrols$Patch,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Objectaccesscontrols$Patch
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objectaccesscontrols$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objectaccesscontrols$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * storage.objectAccessControls.update
     * @desc Updates an ACL entry on the specified object.
     * @alias storage.objectAccessControls.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.object Name of the object.
     * @param {().ObjectAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Objectaccesscontrols$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    update(
      params: Params$Resource$Objectaccesscontrols$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    update(
      params: Params$Resource$Objectaccesscontrols$Update,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    update(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Objectaccesscontrols$Update
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objectaccesscontrols$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objectaccesscontrols$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }
  }

  export interface Params$Resource$Objectaccesscontrols$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * Name of the object.
     */
    object?: string;
  }
  export interface Params$Resource$Objectaccesscontrols$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * Name of the object.
     */
    object?: string;
  }
  export interface Params$Resource$Objectaccesscontrols$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Name of the object.
     */
    object?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Objectaccesscontrols$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Name of the object.
     */
    object?: string;
  }
  export interface Params$Resource$Objectaccesscontrols$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * Name of the object.
     */
    object?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Objectaccesscontrols$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * Name of the object.
     */
    object?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }

  export class Resource$Objects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.objects.delete
     * @desc Deletes data blobs and associated metadata.
     * @alias storage.objects.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which the object resides.
     * @param {string} params.object Name of the object.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Objects$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Objects$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Objects$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Objects$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * storage.objects.get
     * @desc Retrieves objects or their associated metadata.
     * @alias storage.objects.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which the object resides.
     * @param {string} params.object Name of the object.
     * @param {string=} params.projection Set of properties to return. Defaults to no_acl.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Objects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    get(
      params: Params$Resource$Objects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    get(
      params: Params$Resource$Objects$Get,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    get(callback: BodyResponseCallback<Schema$Object>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Objects$Get
        | BodyResponseCallback<Schema$Object>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>
    ): void | GaxiosPromise<Schema$Object> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * storage.objects.insert
     * @desc Stores new data blobs and associated metadata.
     * @alias storage.objects.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param {string=} params.name Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param {string=} params.projection Set of properties to return. Defaults to no_acl, unless the object resource specifies the acl property, when it defaults to full.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Objects$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    insert(
      params: Params$Resource$Objects$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    insert(
      params: Params$Resource$Objects$Insert,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Object>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Objects$Insert
        | BodyResponseCallback<Schema$Object>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>
    ): void | GaxiosPromise<Schema$Object> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/o').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/storage/v1beta1/b/{bucket}/o').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * storage.objects.list
     * @desc Retrieves a list of objects matching the criteria.
     * @alias storage.objects.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which to look for objects.
     * @param {string=} params.delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param {integer=} params.max-results Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
     * @param {string=} params.projection Set of properties to return. Defaults to no_acl.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Objects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Objects>;
    list(
      params: Params$Resource$Objects$List,
      options: MethodOptions | BodyResponseCallback<Schema$Objects>,
      callback: BodyResponseCallback<Schema$Objects>
    ): void;
    list(
      params: Params$Resource$Objects$List,
      callback: BodyResponseCallback<Schema$Objects>
    ): void;
    list(callback: BodyResponseCallback<Schema$Objects>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Objects$List
        | BodyResponseCallback<Schema$Objects>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Objects>,
      callback?: BodyResponseCallback<Schema$Objects>
    ): void | GaxiosPromise<Schema$Objects> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/o').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Objects>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Objects>(parameters);
      }
    }

    /**
     * storage.objects.patch
     * @desc Updates a data blob's associated metadata. This method supports patch semantics.
     * @alias storage.objects.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which the object resides.
     * @param {string} params.object Name of the object.
     * @param {string=} params.projection Set of properties to return. Defaults to full.
     * @param {().Object} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Objects$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    patch(
      params: Params$Resource$Objects$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    patch(
      params: Params$Resource$Objects$Patch,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Object>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Objects$Patch
        | BodyResponseCallback<Schema$Object>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>
    ): void | GaxiosPromise<Schema$Object> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * storage.objects.update
     * @desc Updates a data blob's associated metadata.
     * @alias storage.objects.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which the object resides.
     * @param {string} params.object Name of the object.
     * @param {string=} params.projection Set of properties to return. Defaults to full.
     * @param {().Object} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Objects$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    update(
      params: Params$Resource$Objects$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    update(
      params: Params$Resource$Objects$Update,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    update(callback: BodyResponseCallback<Schema$Object>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Objects$Update
        | BodyResponseCallback<Schema$Object>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>
    ): void | GaxiosPromise<Schema$Object> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1beta1/b/{bucket}/o/{object}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }
  }

  export interface Params$Resource$Objects$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * Name of the object.
     */
    object?: string;
  }
  export interface Params$Resource$Objects$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * Name of the object.
     */
    object?: string;
    /**
     * Set of properties to return. Defaults to no_acl.
     */
    projection?: string;
  }
  export interface Params$Resource$Objects$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     */
    bucket?: string;
    /**
     * Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     */
    name?: string;
    /**
     * Set of properties to return. Defaults to no_acl, unless the object resource specifies the acl property, when it defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Objects$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which to look for objects.
     */
    bucket?: string;
    /**
     * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     */
    delimiter?: string;
    /**
     * Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     */
    'max-results'?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to objects whose names begin with this prefix.
     */
    prefix?: string;
    /**
     * Set of properties to return. Defaults to no_acl.
     */
    projection?: string;
  }
  export interface Params$Resource$Objects$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * Name of the object.
     */
    object?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
  export interface Params$Resource$Objects$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * Name of the object.
     */
    object?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
}
