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

export namespace storage_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * const storage = google.storage('v1beta2');
   *
   * @namespace storage
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Storage
   */
  export class Storage {
    context: APIRequestContext;
    bucketAccessControls: Resource$Bucketaccesscontrols;
    buckets: Resource$Buckets;
    channels: Resource$Channels;
    defaultObjectAccessControls: Resource$Defaultobjectaccesscontrols;
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
      this.channels = new Resource$Channels(this.context);
      this.defaultObjectAccessControls = new Resource$Defaultobjectaccesscontrols(
        this.context
      );
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
     * The bucket&#39;s Cross-Origin Resource Sharing (CORS) configuration.
     */
    cors?: Array<{
      maxAgeSeconds?: number;
      method?: string[];
      origin?: string[];
      responseHeader?: string[];
    }> | null;
    /**
     * Default access controls to apply to new objects when no ACL is provided.
     */
    defaultObjectAcl?: Schema$ObjectAccessControl[];
    /**
     * HTTP 1.1 Entity tag for the bucket.
     */
    etag?: string | null;
    /**
     * The ID of the bucket.
     */
    id?: string | null;
    /**
     * The kind of item this is. For buckets, this is always storage#bucket.
     */
    kind?: string | null;
    /**
     * The bucket&#39;s lifecycle configuration. See object lifecycle management for more information.
     */
    lifecycle?: {
      rule?: Array<{
        action?: {type?: string};
        condition?: {
          age?: number;
          createdBefore?: string;
          isLive?: boolean;
          numNewerVersions?: number;
        };
      }>;
    } | null;
    /**
     * The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Typical values are US and EU. Defaults to US. See the developer&#39;s guide for the authoritative list.
     */
    location?: string | null;
    /**
     * The bucket&#39;s logging configuration, which defines the destination bucket and optional name prefix for the current bucket&#39;s logs.
     */
    logging?: {logBucket?: string; logObjectPrefix?: string} | null;
    /**
     * The metadata generation of this bucket.
     */
    metageneration?: string | null;
    /**
     * The name of the bucket.
     */
    name?: string | null;
    /**
     * The owner of the bucket. This is always the project team&#39;s owner group.
     */
    owner?: {entity?: string; entityId?: string} | null;
    /**
     * The URI of this bucket.
     */
    selfLink?: string | null;
    /**
     * The bucket&#39;s storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Typical values are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See the developer&#39;s guide for the authoritative list.
     */
    storageClass?: string | null;
    /**
     * Creation time of the bucket in RFC 3339 format.
     */
    timeCreated?: string | null;
    /**
     * The bucket&#39;s versioning configuration.
     */
    versioning?: {enabled?: boolean} | null;
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
     * HTTP 1.1 Entity tag for the access-control entry.
     */
    etag?: string | null;
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
   * An notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string | null;
    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string | null;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string | null;
    /**
     * Identifies this as a notification channel used to watch for changes to a resource, which is &quot;api#channel&quot;.
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean | null;
    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string | null;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string | null;
    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string | null;
    /**
     * The type of delivery mechanism used for this channel.
     */
    type?: string | null;
  }
  /**
   * A Compose request.
   */
  export interface Schema$ComposeRequest {
    /**
     * Properties of the resulting object
     */
    destination?: Schema$Object;
    /**
     * The kind of item this is.
     */
    kind?: string | null;
    /**
     * The list of source objects that will be concatenated into a single object.
     */
    sourceObjects?: Array<{
      generation?: string;
      name?: string;
      objectPreconditions?: {ifGenerationMatch?: string};
    }> | null;
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
     * Number of underlying components that make up this object. Components are accumulated by compose operations and are limited to a count of 32.
     */
    componentCount?: number | null;
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
     * Content-Type of the object data.
     */
    contentType?: string | null;
    /**
     * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64.
     */
    crc32c?: string | null;
    /**
     * HTTP 1.1 Entity tag for the object.
     */
    etag?: string | null;
    /**
     * The content generation of this object. Used for object versioning.
     */
    generation?: string | null;
    /**
     * The ID of the object.
     */
    id?: string | null;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind?: string | null;
    /**
     * MD5 hash of the data; encoded using base64.
     */
    md5Hash?: string | null;
    /**
     * Media download link.
     */
    mediaLink?: string | null;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The generation of the metadata for this object at this generation. Used for metadata versioning. Has no meaning outside of the context of this generation.
     */
    metageneration?: string | null;
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
    /**
     * Content-Length of the data in bytes.
     */
    size?: string | null;
    /**
     * Storage class of the object.
     */
    storageClass?: string | null;
    /**
     * Deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
     */
    timeDeleted?: string | null;
    /**
     * Modification time of the object metadata in RFC 3339 format.
     */
    updated?: string | null;
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
     * HTTP 1.1 Entity tag for the access-control entry.
     */
    etag?: string | null;
    /**
     * The content generation of the object.
     */
    generation?: string | null;
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
    items?: any[] | null;
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
     * @desc Permanently deletes the ACL entry for the specified entity on the specified bucket.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}').replace(
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}').replace(
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl').replace(
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl').replace(
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}').replace(
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}').replace(
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
     * @desc Permanently deletes an empty bucket.
     * @alias storage.buckets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}').replace(
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
     * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}').replace(
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
     * @param {string} params.project A valid API project identifier.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
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
            url: (rootUrl + '/storage/v1beta2/b').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
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
     * @param {integer=} params.maxResults Maximum number of buckets to return.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project A valid API project identifier.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
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
            url: (rootUrl + '/storage/v1beta2/b').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
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
     * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}').replace(
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
     * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}').replace(
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
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
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
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: string;
  }
  export interface Params$Resource$Buckets$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A valid API project identifier.
     */
    project?: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
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
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * A valid API project identifier.
     */
    project?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
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
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
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
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Bucket;
  }

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.channels.stop
     * @desc Stop watching resources through this channel
     * @alias storage.channels.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Channels$Stop
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Stop;
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
            url: (rootUrl + '/storage/v1beta2/channels/stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Defaultobjectaccesscontrols {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.defaultObjectAccessControls.delete
     * @desc Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
     * @alias storage.defaultObjectAccessControls.delete
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
      params?: Params$Resource$Defaultobjectaccesscontrols$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Defaultobjectaccesscontrols$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Defaultobjectaccesscontrols$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Defaultobjectaccesscontrols$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultobjectaccesscontrols$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultobjectaccesscontrols$Delete;
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
              rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * storage.defaultObjectAccessControls.get
     * @desc Returns the default object ACL entry for the specified entity on the specified bucket.
     * @alias storage.defaultObjectAccessControls.get
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
      params?: Params$Resource$Defaultobjectaccesscontrols$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    get(
      params: Params$Resource$Defaultobjectaccesscontrols$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    get(
      params: Params$Resource$Defaultobjectaccesscontrols$Get,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    get(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Defaultobjectaccesscontrols$Get
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultobjectaccesscontrols$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultobjectaccesscontrols$Get;
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
              rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * storage.defaultObjectAccessControls.insert
     * @desc Creates a new default object ACL entry on the specified bucket.
     * @alias storage.defaultObjectAccessControls.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {().ObjectAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Defaultobjectaccesscontrols$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    insert(
      params: Params$Resource$Defaultobjectaccesscontrols$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    insert(
      params: Params$Resource$Defaultobjectaccesscontrols$Insert,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Defaultobjectaccesscontrols$Insert
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultobjectaccesscontrols$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultobjectaccesscontrols$Insert;
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
              rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * storage.defaultObjectAccessControls.list
     * @desc Retrieves default object ACL entries on the specified bucket.
     * @alias storage.defaultObjectAccessControls.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string=} params.ifMetagenerationMatch If present, only return default ACL listing if the bucket's current metageneration matches this value.
     * @param {string=} params.ifMetagenerationNotMatch If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Defaultobjectaccesscontrols$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControls>;
    list(
      params: Params$Resource$Defaultobjectaccesscontrols$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControls>,
      callback: BodyResponseCallback<Schema$ObjectAccessControls>
    ): void;
    list(
      params: Params$Resource$Defaultobjectaccesscontrols$List,
      callback: BodyResponseCallback<Schema$ObjectAccessControls>
    ): void;
    list(callback: BodyResponseCallback<Schema$ObjectAccessControls>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Defaultobjectaccesscontrols$List
        | BodyResponseCallback<Schema$ObjectAccessControls>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControls>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControls>
    ): void | GaxiosPromise<Schema$ObjectAccessControls> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultobjectaccesscontrols$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultobjectaccesscontrols$List;
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
              rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ObjectAccessControls>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControls>(parameters);
      }
    }

    /**
     * storage.defaultObjectAccessControls.patch
     * @desc Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
     * @alias storage.defaultObjectAccessControls.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {().ObjectAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Defaultobjectaccesscontrols$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    patch(
      params: Params$Resource$Defaultobjectaccesscontrols$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    patch(
      params: Params$Resource$Defaultobjectaccesscontrols$Patch,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Defaultobjectaccesscontrols$Patch
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultobjectaccesscontrols$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultobjectaccesscontrols$Patch;
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
              rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * storage.defaultObjectAccessControls.update
     * @desc Updates a default object ACL entry on the specified bucket.
     * @alias storage.defaultObjectAccessControls.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {().ObjectAccessControl} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Defaultobjectaccesscontrols$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    update(
      params: Params$Resource$Defaultobjectaccesscontrols$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    update(
      params: Params$Resource$Defaultobjectaccesscontrols$Update,
      callback: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void;
    update(callback: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Defaultobjectaccesscontrols$Update
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>
    ): void | GaxiosPromise<Schema$ObjectAccessControl> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultobjectaccesscontrols$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultobjectaccesscontrols$Update;
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
              rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }
  }

  export interface Params$Resource$Defaultobjectaccesscontrols$Delete
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
  export interface Params$Resource$Defaultobjectaccesscontrols$Get
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
  export interface Params$Resource$Defaultobjectaccesscontrols$Insert
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
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$List
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
     * If present, only return default ACL listing if the bucket's current metageneration matches this value.
     */
    ifMetagenerationMatch?: string;
    /**
     * If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$Patch
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
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$Update
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
    requestBody?: Schema$ObjectAccessControl;
  }

  export class Resource$Objectaccesscontrols {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * storage.objectAccessControls.delete
     * @desc Permanently deletes the ACL entry for the specified entity on the specified object.
     * @alias storage.objectAccessControls.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of a bucket.
     * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
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
              rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}'
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
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
              rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}'
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
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
              rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl'
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
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
              rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl'
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
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
              rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}'
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
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
              rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}'
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
     * storage.objects.compose
     * @desc Concatenates a list of existing objects into a new object in the same bucket.
     * @alias storage.objects.compose
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.destinationBucket Name of the bucket containing the source objects. The destination object is stored in this bucket.
     * @param {string} params.destinationObject Name of the new object.
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {().ComposeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    compose(
      params?: Params$Resource$Objects$Compose,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    compose(
      params: Params$Resource$Objects$Compose,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    compose(
      params: Params$Resource$Objects$Compose,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    compose(callback: BodyResponseCallback<Schema$Object>): void;
    compose(
      paramsOrCallback?:
        | Params$Resource$Objects$Compose
        | BodyResponseCallback<Schema$Object>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>
    ): void | GaxiosPromise<Schema$Object> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Compose;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Compose;
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
              rootUrl +
              '/storage/v1beta2/b/{destinationBucket}/o/{destinationObject}/compose'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['destinationBucket', 'destinationObject'],
        pathParams: ['destinationBucket', 'destinationObject'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * storage.objects.copy
     * @desc Copies an object to a destination in the same location. Optionally overrides metadata.
     * @alias storage.objects.copy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param {string} params.destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value.
     * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     * @param {string=} params.ifSourceGenerationMatch Makes the operation conditional on whether the source object's generation matches the given value.
     * @param {string=} params.ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's generation does not match the given value.
     * @param {string=} params.ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string=} params.ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} params.sourceBucket Name of the bucket in which to find the source object.
     * @param {string=} params.sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     * @param {string} params.sourceObject Name of the source object.
     * @param {().Object} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copy(
      params?: Params$Resource$Objects$Copy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    copy(
      params: Params$Resource$Objects$Copy,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    copy(
      params: Params$Resource$Objects$Copy,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    copy(callback: BodyResponseCallback<Schema$Object>): void;
    copy(
      paramsOrCallback?:
        | Params$Resource$Objects$Copy
        | BodyResponseCallback<Schema$Object>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>
    ): void | GaxiosPromise<Schema$Object> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Copy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Copy;
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
              rootUrl +
              '/storage/v1beta2/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [
          'sourceBucket',
          'sourceObject',
          'destinationBucket',
          'destinationObject',
        ],
        pathParams: [
          'destinationBucket',
          'destinationObject',
          'sourceBucket',
          'sourceObject',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * storage.objects.delete
     * @desc Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     * @alias storage.objects.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which the object resides.
     * @param {string=} params.generation If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
     * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}').replace(
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's generation matches the given value.
     * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's generation does not match the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} params.object Name of the object.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}').replace(
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
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
     * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string=} params.name Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/storage/v1beta2/b/{bucket}/o').replace(
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
     * @param {integer=} params.maxResults Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
     * @param {boolean=} params.versions If true, lists all versions of a file as distinct results.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o').replace(
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
     * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}').replace(
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
     * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
     * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}').replace(
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

    /**
     * storage.objects.watchAll
     * @desc Watch for changes on all objects in a bucket.
     * @alias storage.objects.watchAll
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bucket Name of the bucket in which to look for objects.
     * @param {string=} params.delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param {integer=} params.maxResults Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
     * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
     * @param {boolean=} params.versions If true, lists all versions of a file as distinct results.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watchAll(
      params?: Params$Resource$Objects$Watchall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watchAll(
      params: Params$Resource$Objects$Watchall,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watchAll(
      params: Params$Resource$Objects$Watchall,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watchAll(callback: BodyResponseCallback<Schema$Channel>): void;
    watchAll(
      paramsOrCallback?:
        | Params$Resource$Objects$Watchall
        | BodyResponseCallback<Schema$Channel>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>
    ): void | GaxiosPromise<Schema$Channel> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Watchall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Watchall;
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
            url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/watch').replace(
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
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Objects$Compose extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket containing the source objects. The destination object is stored in this bucket.
     */
    destinationBucket?: string;
    /**
     * Name of the new object.
     */
    destinationObject?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ComposeRequest;
  }
  export interface Params$Resource$Objects$Copy extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     */
    destinationBucket?: string;
    /**
     * Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     */
    destinationObject?: string;
    /**
     * Makes the operation conditional on whether the destination object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the destination object's current generation does not match the given value.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's generation matches the given value.
     */
    ifSourceGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's generation does not match the given value.
     */
    ifSourceGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current metageneration matches the given value.
     */
    ifSourceMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     */
    ifSourceMetagenerationNotMatch?: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     */
    projection?: string;
    /**
     * Name of the bucket in which to find the source object.
     */
    sourceBucket?: string;
    /**
     * If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     */
    sourceGeneration?: string;
    /**
     * Name of the source object.
     */
    sourceObject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
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
     * If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's generation does not match the given value.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Name of the object.
     */
    object?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
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
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     */
    name?: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
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
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to objects whose names begin with this prefix.
     */
    prefix?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: string;
    /**
     * If true, lists all versions of a file as distinct results.
     */
    versions?: boolean;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
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
  export interface Params$Resource$Objects$Watchall extends StandardParameters {
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
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to objects whose names begin with this prefix.
     */
    prefix?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: string;
    /**
     * If true, lists all versions of a file as distinct results.
     */
    versions?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }
}
