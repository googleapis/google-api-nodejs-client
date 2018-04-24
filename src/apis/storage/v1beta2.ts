/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace storage_v1beta2 {
  /**
   * Cloud Storage JSON API
   *
   * Lets you store and retrieve potentially-large, immutable data objects.
   *
   * @example
   * const google = require('googleapis');
   * const storage = google.storage('v1beta2');
   *
   * @namespace storage
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Storage
   */
  export class Storage {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    bucketAccessControls: Resource$Bucketaccesscontrols;
    buckets: Resource$Buckets;
    channels: Resource$Channels;
    defaultObjectAccessControls: Resource$Defaultobjectaccesscontrols;
    objectAccessControls: Resource$Objectaccesscontrols;
    objects: Resource$Objects;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.bucketAccessControls = new Resource$Bucketaccesscontrols(this);
      this.buckets = new Resource$Buckets(this);
      this.channels = new Resource$Channels(this);
      this.defaultObjectAccessControls =
          new Resource$Defaultobjectaccesscontrols(this);
      this.objectAccessControls = new Resource$Objectaccesscontrols(this);
      this.objects = new Resource$Objects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * A bucket.
   */
  export interface Schema$Bucket {
    /**
     * Access controls on the bucket.
     */
    acl: Schema$BucketAccessControl[];
    /**
     * The bucket&#39;s Cross-Origin Resource Sharing (CORS) configuration.
     */
    cors: any[];
    /**
     * Default access controls to apply to new objects when no ACL is provided.
     */
    defaultObjectAcl: Schema$ObjectAccessControl[];
    /**
     * HTTP 1.1 Entity tag for the bucket.
     */
    etag: string;
    /**
     * The ID of the bucket.
     */
    id: string;
    /**
     * The kind of item this is. For buckets, this is always storage#bucket.
     */
    kind: string;
    /**
     * The bucket&#39;s lifecycle configuration. See object lifecycle management
     * for more information.
     */
    lifecycle: any;
    /**
     * The location of the bucket. Object data for objects in the bucket resides
     * in physical storage within this region. Typical values are US and EU.
     * Defaults to US. See the developer&#39;s guide for the authoritative list.
     */
    location: string;
    /**
     * The bucket&#39;s logging configuration, which defines the destination
     * bucket and optional name prefix for the current bucket&#39;s logs.
     */
    logging: any;
    /**
     * The metadata generation of this bucket.
     */
    metageneration: string;
    /**
     * The name of the bucket.
     */
    name: string;
    /**
     * The owner of the bucket. This is always the project team&#39;s owner
     * group.
     */
    owner: any;
    /**
     * The URI of this bucket.
     */
    selfLink: string;
    /**
     * The bucket&#39;s storage class. This defines how objects in the bucket
     * are stored and determines the SLA and the cost of storage. Typical values
     * are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See
     * the developer&#39;s guide for the authoritative list.
     */
    storageClass: string;
    /**
     * Creation time of the bucket in RFC 3339 format.
     */
    timeCreated: string;
    /**
     * The bucket&#39;s versioning configuration.
     */
    versioning: any;
    /**
     * The bucket&#39;s website configuration.
     */
    website: any;
  }
  /**
   * An access-control entry.
   */
  export interface Schema$BucketAccessControl {
    /**
     * The name of the bucket.
     */
    bucket: string;
    /**
     * The domain associated with the entity, if any.
     */
    domain: string;
    /**
     * The email address associated with the entity, if any.
     */
    email: string;
    /**
     * The entity holding the permission, in one of the following forms:  -
     * user-userId  - user-email  - group-groupId  - group-email  -
     * domain-domain  - allUsers  - allAuthenticatedUsers Examples:  - The user
     * liz@example.com would be user-liz@example.com.  - The group
     * example@googlegroups.com would be group-example@googlegroups.com.  - To
     * refer to all members of the Google Apps for Business domain example.com,
     * the entity would be domain-example.com.
     */
    entity: string;
    /**
     * The ID for the entity, if any.
     */
    entityId: string;
    /**
     * HTTP 1.1 Entity tag for the access-control entry.
     */
    etag: string;
    /**
     * The ID of the access-control entry.
     */
    id: string;
    /**
     * The kind of item this is. For bucket access control entries, this is
     * always storage#bucketAccessControl.
     */
    kind: string;
    /**
     * The access permission for the entity. Can be READER, WRITER, or OWNER.
     */
    role: string;
    /**
     * The link to this access-control entry.
     */
    selfLink: string;
  }
  /**
   * An access-control list.
   */
  export interface Schema$BucketAccessControls {
    /**
     * The list of items.
     */
    items: Schema$BucketAccessControl[];
    /**
     * The kind of item this is. For lists of bucket access control entries,
     * this is always storage#bucketAccessControls.
     */
    kind: string;
  }
  /**
   * A list of buckets.
   */
  export interface Schema$Buckets {
    /**
     * The list of items.
     */
    items: Schema$Bucket[];
    /**
     * The kind of item this is. For lists of buckets, this is always
     * storage#buckets.
     */
    kind: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken: string;
  }
  /**
   * An notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address: string;
    /**
     * Date and time of notification channel expiration, expressed as a Unix
     * timestamp, in milliseconds. Optional.
     */
    expiration: string;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id: string;
    /**
     * Identifies this as a notification channel used to watch for changes to a
     * resource. Value: the fixed string &quot;api#channel&quot;.
     */
    kind: string;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params: any;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload: boolean;
    /**
     * An opaque ID that identifies the resource being watched on this channel.
     * Stable across different API versions.
     */
    resourceId: string;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri: string;
    /**
     * An arbitrary string delivered to the target address with each
     * notification delivered over this channel. Optional.
     */
    token: string;
    /**
     * The type of delivery mechanism used for this channel.
     */
    type: string;
  }
  /**
   * A Compose request.
   */
  export interface Schema$ComposeRequest {
    /**
     * Properties of the resulting object
     */
    destination: Schema$Object;
    /**
     * The kind of item this is.
     */
    kind: string;
    /**
     * The list of source objects that will be concatenated into a single
     * object.
     */
    sourceObjects: any[];
  }
  /**
   * An object.
   */
  export interface Schema$Object {
    /**
     * Access controls on the object.
     */
    acl: Schema$ObjectAccessControl[];
    /**
     * The bucket containing this object.
     */
    bucket: string;
    /**
     * Cache-Control directive for the object data.
     */
    cacheControl: string;
    /**
     * Number of underlying components that make up this object. Components are
     * accumulated by compose operations and are limited to a count of 32.
     */
    componentCount: number;
    /**
     * Content-Disposition of the object data.
     */
    contentDisposition: string;
    /**
     * Content-Encoding of the object data.
     */
    contentEncoding: string;
    /**
     * Content-Language of the object data.
     */
    contentLanguage: string;
    /**
     * Content-Type of the object data.
     */
    contentType: string;
    /**
     * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using
     * base64.
     */
    crc32c: string;
    /**
     * HTTP 1.1 Entity tag for the object.
     */
    etag: string;
    /**
     * The content generation of this object. Used for object versioning.
     */
    generation: string;
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind: string;
    /**
     * MD5 hash of the data; encoded using base64.
     */
    md5Hash: string;
    /**
     * Media download link.
     */
    mediaLink: string;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata: any;
    /**
     * The generation of the metadata for this object at this generation. Used
     * for metadata versioning. Has no meaning outside of the context of this
     * generation.
     */
    metageneration: string;
    /**
     * The name of this object. Required if not specified by URL parameter.
     */
    name: string;
    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    owner: any;
    /**
     * The link to this object.
     */
    selfLink: string;
    /**
     * Content-Length of the data in bytes.
     */
    size: string;
    /**
     * Storage class of the object.
     */
    storageClass: string;
    /**
     * Deletion time of the object in RFC 3339 format. Will be returned if and
     * only if this version of the object has been deleted.
     */
    timeDeleted: string;
    /**
     * Modification time of the object metadata in RFC 3339 format.
     */
    updated: string;
  }
  /**
   * An access-control entry.
   */
  export interface Schema$ObjectAccessControl {
    /**
     * The name of the bucket.
     */
    bucket: string;
    /**
     * The domain associated with the entity, if any.
     */
    domain: string;
    /**
     * The email address associated with the entity, if any.
     */
    email: string;
    /**
     * The entity holding the permission, in one of the following forms:  -
     * user-userId  - user-email  - group-groupId  - group-email  -
     * domain-domain  - allUsers  - allAuthenticatedUsers Examples:  - The user
     * liz@example.com would be user-liz@example.com.  - The group
     * example@googlegroups.com would be group-example@googlegroups.com.  - To
     * refer to all members of the Google Apps for Business domain example.com,
     * the entity would be domain-example.com.
     */
    entity: string;
    /**
     * The ID for the entity, if any.
     */
    entityId: string;
    /**
     * HTTP 1.1 Entity tag for the access-control entry.
     */
    etag: string;
    /**
     * The content generation of the object.
     */
    generation: string;
    /**
     * The ID of the access-control entry.
     */
    id: string;
    /**
     * The kind of item this is. For object access control entries, this is
     * always storage#objectAccessControl.
     */
    kind: string;
    /**
     * The name of the object.
     */
    object: string;
    /**
     * The access permission for the entity. Can be READER or OWNER.
     */
    role: string;
    /**
     * The link to this access-control entry.
     */
    selfLink: string;
  }
  /**
   * An access-control list.
   */
  export interface Schema$ObjectAccessControls {
    /**
     * The list of items.
     */
    items: any[];
    /**
     * The kind of item this is. For lists of object access control entries,
     * this is always storage#objectAccessControls.
     */
    kind: string;
  }
  /**
   * A list of objects.
   */
  export interface Schema$Objects {
    /**
     * The list of items.
     */
    items: Schema$Object[];
    /**
     * The kind of item this is. For lists of objects, this is always
     * storage#objects.
     */
    kind: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken: string;
    /**
     * The list of prefixes of objects matching-but-not-listed up to and
     * including the requested delimiter.
     */
    prefixes: string[];
  }

  export class Resource$Bucketaccesscontrols {
    root: Storage;
    constructor(root: Storage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * storage.bucketAccessControls.delete
     * @desc Permanently deletes the ACL entry for the specified entity on the
     * specified bucket.
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
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * storage.bucketAccessControls.get
     * @desc Returns the ACL entry for the specified entity on the specified
     * bucket.
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
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$BucketAccessControl>;
    get(params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
    get(params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>):
        void|AxiosPromise<Schema$BucketAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
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
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$BucketAccessControl>;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>):
        void|AxiosPromise<Schema$BucketAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
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
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$BucketAccessControls>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControls>,
        callback?: BodyResponseCallback<Schema$BucketAccessControls>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControls>,
        callback?: BodyResponseCallback<Schema$BucketAccessControls>):
        void|AxiosPromise<Schema$BucketAccessControls> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControls>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControls>(parameters);
      }
    }


    /**
     * storage.bucketAccessControls.patch
     * @desc Updates an ACL entry on the specified bucket. This method supports
     * patch semantics.
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
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$BucketAccessControl>;
    patch(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
    patch(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>):
        void|AxiosPromise<Schema$BucketAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
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
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$BucketAccessControl>;
    update(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
    update(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BucketAccessControl>,
        callback?: BodyResponseCallback<Schema$BucketAccessControl>):
        void|AxiosPromise<Schema$BucketAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BucketAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }
  }

  export class Resource$Buckets {
    root: Storage;
    constructor(root: Storage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
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
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>):
        void|AxiosPromise<Schema$Bucket> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
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
    insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>):
        void|AxiosPromise<Schema$Bucket> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: [],
        context: this.getRoot()
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
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Buckets>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Buckets>,
        callback?: BodyResponseCallback<Schema$Buckets>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Buckets>,
        callback?: BodyResponseCallback<Schema$Buckets>):
        void|AxiosPromise<Schema$Buckets> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: [],
        context: this.getRoot()
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
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>):
        void|AxiosPromise<Schema$Bucket> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
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
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
        callback?: BodyResponseCallback<Schema$Bucket>):
        void|AxiosPromise<Schema$Bucket> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Bucket>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }
  }

  export class Resource$Channels {
    root: Storage;
    constructor(root: Storage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    stop(params?: any, options?: MethodOptions): AxiosPromise<void>;
    stop(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    stop(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/channels/stop')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export class Resource$Defaultobjectaccesscontrols {
    root: Storage;
    constructor(root: Storage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * storage.defaultObjectAccessControls.delete
     * @desc Permanently deletes the default object ACL entry for the specified
     * entity on the specified bucket.
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
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * storage.defaultObjectAccessControls.get
     * @desc Returns the default object ACL entry for the specified entity on
     * the specified bucket.
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
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$ObjectAccessControl>;
    get(params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    get(params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
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
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControl>;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
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
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControls>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControls>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControls>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControls>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControls>):
        void|AxiosPromise<Schema$ObjectAccessControls> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/defaultObjectAcl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControls>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControls>(parameters);
      }
    }


    /**
     * storage.defaultObjectAccessControls.patch
     * @desc Updates a default object ACL entry on the specified bucket. This
     * method supports patch semantics.
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
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControl>;
    patch(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    patch(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
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
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControl>;
    update(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    update(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/defaultObjectAcl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }
  }

  export class Resource$Objectaccesscontrols {
    root: Storage;
    constructor(root: Storage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * storage.objectAccessControls.delete
     * @desc Permanently deletes the ACL entry for the specified entity on the
     * specified object.
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
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * storage.objectAccessControls.get
     * @desc Returns the ACL entry for the specified entity on the specified
     * object.
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
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$ObjectAccessControl>;
    get(params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    get(params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.getRoot()
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
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControl>;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.getRoot()
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
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControls>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControls>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControls>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControls>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControls>):
        void|AxiosPromise<Schema$ObjectAccessControls> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}/acl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControls>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControls>(parameters);
      }
    }


    /**
     * storage.objectAccessControls.patch
     * @desc Updates an ACL entry on the specified object. This method supports
     * patch semantics.
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
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControl>;
    patch(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    patch(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.getRoot()
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
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ObjectAccessControl>;
    update(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
    update(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ObjectAccessControl>,
        callback?: BodyResponseCallback<Schema$ObjectAccessControl>):
        void|AxiosPromise<Schema$ObjectAccessControl> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/storage/v1beta2/b/{bucket}/o/{object}/acl/{entity}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ObjectAccessControl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }
  }

  export class Resource$Objects {
    root: Storage;
    constructor(root: Storage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * storage.objects.compose
     * @desc Concatenates a list of existing objects into a new object in the
     * same bucket.
     * @alias storage.objects.compose
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.destinationBucket Name of the bucket in which to store the new object.
     * @param {string} params.destinationObject Name of the new object.
     * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
     * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {().ComposeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    compose(params?: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
    compose(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>): void;
    compose(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>):
        void|AxiosPromise<Schema$Object> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/storage/v1beta2/b/{destinationBucket}/o/{destinationObject}/compose')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['destinationBucket', 'destinationObject'],
        pathParams: ['destinationBucket', 'destinationObject'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }


    /**
     * storage.objects.copy
     * @desc Copies an object to a destination in the same location. Optionally
     * overrides metadata.
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
    copy(params?: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
    copy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>): void;
    copy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>):
        void|AxiosPromise<Schema$Object> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/storage/v1beta2/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [
          'sourceBucket', 'sourceObject', 'destinationBucket',
          'destinationObject'
        ],
        pathParams: [
          'destinationBucket', 'destinationObject', 'sourceBucket',
          'sourceObject'
        ],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Object>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }


    /**
     * storage.objects.delete
     * @desc Deletes data blobs and associated metadata. Deletions are permanent
     * if versioning is not enabled for the bucket, or if the generation
     * parameter is used.
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
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.getRoot()
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
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>):
        void|AxiosPromise<Schema$Object> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.getRoot()
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
    insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>):
        void|AxiosPromise<Schema$Object> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/storage/v1beta2/b/{bucket}/o')
                      .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
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
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Objects>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Objects>,
        callback?: BodyResponseCallback<Schema$Objects>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Objects>,
        callback?: BodyResponseCallback<Schema$Objects>):
        void|AxiosPromise<Schema$Objects> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Objects>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Objects>(parameters);
      }
    }


    /**
     * storage.objects.patch
     * @desc Updates a data blob's associated metadata. This method supports
     * patch semantics.
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
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>):
        void|AxiosPromise<Schema$Object> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.getRoot()
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
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Object>,
        callback?: BodyResponseCallback<Schema$Object>):
        void|AxiosPromise<Schema$Object> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/{object}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: this.getRoot()
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
    watchAll(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Channel>;
    watchAll(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
        callback?: BodyResponseCallback<Schema$Channel>): void;
    watchAll(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
        callback?: BodyResponseCallback<Schema$Channel>):
        void|AxiosPromise<Schema$Channel> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/storage/v1beta2/b/{bucket}/o/watch')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }
}
