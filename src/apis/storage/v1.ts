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

/**
 * Cloud Storage JSON API
 *
 * Stores and retrieves potentially large, immutable data objects.
 *
 * @example
 * const google = require('googleapis');
 * const storage = google.storage('v1');
 *
 * @namespace storage
 * @type {Function}
 * @version v1
 * @variation v1
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
  notifications: Resource$Notifications;
  objectAccessControls: Resource$Objectaccesscontrols;
  objects: Resource$Objects;
  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.bucketAccessControls = new Resource$Bucketaccesscontrols(this);
    this.buckets = new Resource$Buckets(this);
    this.channels = new Resource$Channels(this);
    this.defaultObjectAccessControls =
        new Resource$Defaultobjectaccesscontrols(this);
    this.notifications = new Resource$Notifications(this);
    this.objectAccessControls = new Resource$Objectaccesscontrols(this);
    this.objects = new Resource$Objects(this);
    this.projects = new Resource$Projects(this);
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
   * The bucket&#39;s billing configuration.
   */
  billing: any;
  /**
   * The bucket&#39;s Cross-Origin Resource Sharing (CORS) configuration.
   */
  cors: any[];
  /**
   * Defines the default value for Event-Based hold on newly created objects in
   * this bucket. Event-Based hold is a way to retain objects indefinitely until
   * an event occurs, signified by the hold&#39;s release. After being released,
   * such objects will be subject to bucket-level retention (if any). One sample
   * use case of this flag is for banks to hold loan documents for at least 3
   * years after loan is paid in full. Here bucket-level retention is 3 years
   * and the event is loan being paid in full. In this example these objects
   * will be held intact for any number of years until the event has occurred
   * (hold is released) and then 3 more years after that. Objects under
   * Event-Based hold cannot be deleted, overwritten or archived until the hold
   * is removed.
   */
  defaultEventBasedHold: boolean;
  /**
   * Default access controls to apply to new objects when no ACL is provided.
   */
  defaultObjectAcl: Schema$ObjectAccessControl[];
  /**
   * Encryption configuration used by default for newly inserted objects, when
   * no encryption config is specified.
   */
  encryption: any;
  /**
   * HTTP 1.1 Entity tag for the bucket.
   */
  etag: string;
  /**
   * The ID of the bucket. For buckets, the id and name properties are the same.
   */
  id: string;
  /**
   * The kind of item this is. For buckets, this is always storage#bucket.
   */
  kind: string;
  /**
   * User-provided labels, in key/value pairs.
   */
  labels: any;
  /**
   * The bucket&#39;s lifecycle configuration. See lifecycle management for more
   * information.
   */
  lifecycle: any;
  /**
   * The location of the bucket. Object data for objects in the bucket resides
   * in physical storage within this region. Defaults to US. See the
   * developer&#39;s guide for the authoritative list.
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
   * The owner of the bucket. This is always the project team&#39;s owner group.
   */
  owner: any;
  /**
   * The project number of the project the bucket belongs to.
   */
  projectNumber: string;
  /**
   * Defines the retention policy for a bucket. The Retention policy enforces a
   * minimum retention time for all objects contained in the bucket, based on
   * their creation time. Any attempt to overwrite or delete objects younger
   * than the retention period will result in a PERMISSION_DENIED error. An
   * unlocked retention policy can be modified or removed from the bucket via
   * the UpdateBucketMetadata RPC. A locked retention policy cannot be removed
   * or shortened in duration for the lifetime of the bucket. Attempting to
   * remove or decrease period of a locked retention policy will result in a
   * PERMISSION_DENIED error.
   */
  retentionPolicy: any;
  /**
   * The URI of this bucket.
   */
  selfLink: string;
  /**
   * The bucket&#39;s default storage class, used whenever no storageClass is
   * specified for a newly-created object. This defines how objects in the
   * bucket are stored and determines the SLA and the cost of storage. Values
   * include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and
   * DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the
   * bucket is created, it will default to STANDARD. For more information, see
   * storage classes.
   */
  storageClass: string;
  /**
   * The creation time of the bucket in RFC 3339 format.
   */
  timeCreated: string;
  /**
   * The modification time of the bucket in RFC 3339 format.
   */
  updated: string;
  /**
   * The bucket&#39;s versioning configuration.
   */
  versioning: any;
  /**
   * The bucket&#39;s website configuration, controlling how the service behaves
   * when accessing bucket contents as a web site. See the Static Website
   * Examples for more information.
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
   * user-userId  - user-email  - group-groupId  - group-email  - domain-domain
   * - project-team-projectId  - allUsers  - allAuthenticatedUsers Examples:  -
   * The user liz@example.com would be user-liz@example.com.  - The group
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
   * The kind of item this is. For bucket access control entries, this is always
   * storage#bucketAccessControl.
   */
  kind: string;
  /**
   * The project team associated with the entity, if any.
   */
  projectTeam: any;
  /**
   * The access permission for the entity.
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
   * The kind of item this is. For lists of bucket access control entries, this
   * is always storage#bucketAccessControls.
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
   * An arbitrary string delivered to the target address with each notification
   * delivered over this channel. Optional.
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
   * Properties of the resulting object.
   */
  destination: Schema$Object;
  /**
   * The kind of item this is.
   */
  kind: string;
  /**
   * The list of source objects that will be concatenated into a single object.
   */
  sourceObjects: any[];
}
/**
 * A subscription to receive Google PubSub notifications.
 */
export interface Schema$Notification {
  /**
   * An optional list of additional attributes to attach to each Cloud PubSub
   * message published for this notification subscription.
   */
  custom_attributes: any;
  /**
   * HTTP 1.1 Entity tag for this subscription notification.
   */
  etag: string;
  /**
   * If present, only send notifications about listed event types. If empty,
   * sent notifications for all event types.
   */
  event_types: string[];
  /**
   * The ID of the notification.
   */
  id: string;
  /**
   * The kind of item this is. For notifications, this is always
   * storage#notification.
   */
  kind: string;
  /**
   * If present, only apply this notification configuration to object names that
   * begin with this prefix.
   */
  object_name_prefix: string;
  /**
   * The desired content of the Payload.
   */
  payload_format: string;
  /**
   * The canonical URL of this notification.
   */
  selfLink: string;
  /**
   * The Cloud PubSub topic to which this subscription publishes. Formatted as:
   * &#39;//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}&#39;
   */
  topic: string;
}
/**
 * A list of notification subscriptions.
 */
export interface Schema$Notifications {
  /**
   * The list of items.
   */
  items: Schema$Notification[];
  /**
   * The kind of item this is. For lists of notifications, this is always
   * storage#notifications.
   */
  kind: string;
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
   * The name of the bucket containing this object.
   */
  bucket: string;
  /**
   * Cache-Control directive for the object data. If omitted, and the object is
   * accessible to all anonymous users, the default will be public,
   * max-age=3600.
   */
  cacheControl: string;
  /**
   * Number of underlying components that make up this object. Components are
   * accumulated by compose operations.
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
   * Content-Type of the object data. If an object is stored without a
   * Content-Type, it is served as application/octet-stream.
   */
  contentType: string;
  /**
   * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64
   * in big-endian byte order. For more information about using the CRC32c
   * checksum, see Hashes and ETags: Best Practices.
   */
  crc32c: string;
  /**
   * Metadata of customer-supplied encryption key, if the object is encrypted by
   * such a key.
   */
  customerEncryption: any;
  /**
   * HTTP 1.1 Entity tag for the object.
   */
  etag: string;
  /**
   * Defines the Event-Based hold for an object. Event-Based hold is a way to
   * retain objects indefinitely until an event occurs, signified by the
   * hold&#39;s release. After being released, such objects will be subject to
   * bucket-level retention (if any). One sample use case of this flag is for
   * banks to hold loan documents for at least 3 years after loan is paid in
   * full. Here bucket-level retention is 3 years and the event is loan being
   * paid in full. In this example these objects will be held intact for any
   * number of years until the event has occurred (hold is released) and then 3
   * more years after that.
   */
  eventBasedHold: boolean;
  /**
   * The content generation of this object. Used for object versioning.
   */
  generation: string;
  /**
   * The ID of the object, including the bucket name, object name, and
   * generation number.
   */
  id: string;
  /**
   * The kind of item this is. For objects, this is always storage#object.
   */
  kind: string;
  /**
   * Cloud KMS Key used to encrypt this object, if the object is encrypted by
   * such a key. Limited availability; usable only by enabled projects.
   */
  kmsKeyName: string;
  /**
   * MD5 hash of the data; encoded using base64. For more information about
   * using the MD5 hash, see Hashes and ETags: Best Practices.
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
   * The version of the metadata for this object at this generation. Used for
   * preconditions and for detecting changes in metadata. A metageneration
   * number is only meaningful in the context of a particular generation of a
   * particular object.
   */
  metageneration: string;
  /**
   * The name of the object. Required if not specified by URL parameter.
   */
  name: string;
  /**
   * The owner of the object. This will always be the uploader of the object.
   */
  owner: any;
  /**
   * Specifies the earliest time that the object&#39;s retention period expires.
   * This value is server-determined and is in RFC 3339 format. Note 1: This
   * field is not provided for objects with an active Event-Based hold, since
   * retention expiration is unknown until the hold is removed. Note 2: This
   * value can be provided even when TemporaryHold is set (so that the user can
   * reason about policy without having to first unset the TemporaryHold).
   */
  retentionExpirationTime: string;
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
   * Defines the temporary hold for an object. This flag is used to enforce a
   * temporary hold on an object. While it is set to true, the object is
   * protected against deletion and overwrites. A common use case of this flag
   * is regulatory investigations where objects need to be retained while the
   * investigation is ongoing.
   */
  temporaryHold: boolean;
  /**
   * The creation time of the object in RFC 3339 format.
   */
  timeCreated: string;
  /**
   * The deletion time of the object in RFC 3339 format. Will be returned if and
   * only if this version of the object has been deleted.
   */
  timeDeleted: string;
  /**
   * The time at which the object&#39;s storage class was last changed. When the
   * object is initially created, it will be set to timeCreated.
   */
  timeStorageClassUpdated: string;
  /**
   * The modification time of the object metadata in RFC 3339 format.
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
   * user-userId  - user-email  - group-groupId  - group-email  - domain-domain
   * - project-team-projectId  - allUsers  - allAuthenticatedUsers Examples:  -
   * The user liz@example.com would be user-liz@example.com.  - The group
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
   * The content generation of the object, if applied to an object.
   */
  generation: string;
  /**
   * The ID of the access-control entry.
   */
  id: string;
  /**
   * The kind of item this is. For object access control entries, this is always
   * storage#objectAccessControl.
   */
  kind: string;
  /**
   * The name of the object, if applied to an object.
   */
  object: string;
  /**
   * The project team associated with the entity, if any.
   */
  projectTeam: any;
  /**
   * The access permission for the entity.
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
  items: Schema$ObjectAccessControl[];
  /**
   * The kind of item this is. For lists of object access control entries, this
   * is always storage#objectAccessControls.
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
   * The list of prefixes of objects matching-but-not-listed up to and including
   * the requested delimiter.
   */
  prefixes: string[];
}
/**
 * A bucket/object IAM policy.
 */
export interface Schema$Policy {
  /**
   * An association between a role, which comes with a set of permissions, and
   * members who may assume that role.
   */
  bindings: any[];
  /**
   * HTTP 1.1  Entity tag for the policy.
   */
  etag: string;
  /**
   * The kind of item this is. For policies, this is always storage#policy. This
   * field is ignored on input.
   */
  kind: string;
  /**
   * The ID of the resource to which this policy belongs. Will be of the form
   * projects/_/buckets/bucket for buckets, and
   * projects/_/buckets/bucket/objects/object for objects. A specific generation
   * may be specified by appending #generationNumber to the end of the object
   * name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current
   * generation can be denoted with #0. This field is ignored on input.
   */
  resourceId: string;
}
/**
 * A rewrite response.
 */
export interface Schema$RewriteResponse {
  /**
   * true if the copy is finished; otherwise, false if the copy is in progress.
   * This property is always present in the response.
   */
  done: boolean;
  /**
   * The kind of item this is.
   */
  kind: string;
  /**
   * The total size of the object being copied in bytes. This property is always
   * present in the response.
   */
  objectSize: string;
  /**
   * A resource containing the metadata for the copied-to object. This property
   * is present in the response only when copying completes.
   */
  resource: Schema$Object;
  /**
   * A token to use in subsequent requests to continue copying data. This token
   * is present in the response only when there is more data to copy.
   */
  rewriteToken: string;
  /**
   * The total bytes written so far, which can be used to provide a waiting user
   * with a progress indicator. This property is always present in the response.
   */
  totalBytesRewritten: string;
}
/**
 * A subscription to receive Google PubSub notifications.
 */
export interface Schema$ServiceAccount {
  /**
   * The ID of the notification.
   */
  email_address: string;
  /**
   * The kind of item this is. For notifications, this is always
   * storage#notification.
   */
  kind: string;
}
/**
 * A storage.(buckets|objects).testIamPermissions response.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * The kind of item this is.
   */
  kind: string;
  /**
   * The permissions held by the caller. Permissions are always of the format
   * storage.resource.capability, where resource is one of buckets or objects.
   * The supported permissions are as follows:   - storage.buckets.delete —
   * Delete bucket.   - storage.buckets.get — Read bucket metadata.   -
   * storage.buckets.getIamPolicy — Read bucket IAM policy.   -
   * storage.buckets.create — Create bucket.   - storage.buckets.list — List
   * buckets.   - storage.buckets.setIamPolicy — Update bucket IAM policy.   -
   * storage.buckets.update — Update bucket metadata.   - storage.objects.delete
   * — Delete object.   - storage.objects.get — Read object data and metadata.
   * - storage.objects.getIamPolicy — Read object IAM policy.   -
   * storage.objects.create — Create object.   - storage.objects.list — List
   * objects.   - storage.objects.setIamPolicy — Update object IAM policy.   -
   * storage.objects.update — Update object metadata.
   */
  permissions: string[];
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.bucketAccessControls.delete(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.bucketAccessControls.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.bucketAccessControls.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.bucketAccessControls.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$BucketAccessControl>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.bucketAccessControls.insert(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.bucketAccessControls.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().BucketAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$BucketAccessControl>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/acl')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.bucketAccessControls.list(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.bucketAccessControls.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$BucketAccessControls>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$BucketAccessControls>,
      callback?: BodyResponseCallback<Schema$BucketAccessControls>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BucketAccessControls>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/acl')
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
   * @desc Patches an ACL entry on the specified bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.bucketAccessControls.patch(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.bucketAccessControls.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().BucketAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$BucketAccessControl>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.bucketAccessControls.update(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.bucketAccessControls.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().BucketAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$BucketAccessControl>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
      callback?: BodyResponseCallback<Schema$BucketAccessControl>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BucketAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.delete(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.ifMetagenerationMatch If set, only deletes the bucket if its metageneration matches this value.
   * @param {string=} params.ifMetagenerationNotMatch If set, only deletes the bucket if its metageneration does not match this value.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}')
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
   * storage.buckets.getIamPolicy
   * @desc Returns an IAM policy for the specified bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.getIamPolicy(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/iam')
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
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * storage.buckets.insert
   * @desc Creates a new bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // A valid API project identifier.
   *     project: '',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.insert(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this bucket.
   * @param {string=} params.predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
   * @param {string} params.project A valid API project identifier.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
   * @param {string=} params.userProject The project to be billed for this request.
   * @param {().Bucket} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
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
            url: (rootUrl + '/storage/v1/b').replace(/([^:]\/)\/+/g, '$1'),
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // A valid API project identifier.
   *     project: '',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var itemsPage = response['items'];
   *     if (!itemsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < itemsPage.length; i++) {
   *       // TODO: Change code below to process each resource in `itemsPage`:
   *       console.log(JSON.stringify(itemsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       storage.buckets.list(request, handlePage);
   *     }
   *   };
   *
   *   storage.buckets.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
   * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
   * @param {string=} params.prefix Filter results to buckets whose names begin with this prefix.
   * @param {string} params.project A valid API project identifier.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
   * @param {string=} params.userProject The project to be billed for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$Buckets>;
  list(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Buckets>,
      callback?: BodyResponseCallback<Schema$Buckets>): void;
  list(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Buckets>,
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
            url: (rootUrl + '/storage/v1/b').replace(/([^:]\/)\/+/g, '$1'),
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
   * storage.buckets.lockRetentionPolicy
   * @desc Locks retention policy on a bucket.
   * @alias storage.buckets.lockRetentionPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.ifMetagenerationMatch Makes the operation conditional on whether bucket's current metageneration matches the given value.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  lockRetentionPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Bucket>;
  lockRetentionPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>): void;
  lockRetentionPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/lockRetentionPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['bucket', 'ifMetagenerationMatch'],
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
   * storage.buckets.patch
   * @desc Updates a bucket. Changes to the bucket will be readable immediately
   * after writing, but configuration changes may take time to propagate. This
   * method supports patch semantics.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.patch(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
   * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this bucket.
   * @param {string=} params.predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
   * @param {string=} params.projection Set of properties to return. Defaults to full.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Bucket} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}')
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
   * storage.buckets.setIamPolicy
   * @desc Updates an IAM policy for the specified bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.setIamPolicy(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Policy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/iam')
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
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * storage.buckets.testIamPermissions
   * @desc Tests a set of permissions on the given bucket to see which, if any,
   * are held by the caller.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Permissions to test.
   *     permissions: [],  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.testIamPermissions(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.permissions Permissions to test.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/iam/testPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['bucket', 'permissions'],
      pathParams: ['bucket'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * storage.buckets.update
   * @desc Updates a bucket. Changes to the bucket will be readable immediately
   * after writing, but configuration changes may take time to propagate.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.buckets.update(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.buckets.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
   * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this bucket.
   * @param {string=} params.predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
   * @param {string=} params.projection Set of properties to return. Defaults to full.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Bucket} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Bucket>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Bucket>,
      callback?: BodyResponseCallback<Schema$Bucket>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Bucket>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.channels.stop(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.channels.stop
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  stop(params: any, options?: MethodOptions): AxiosPromise<void>;
  stop(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  stop(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/storage/v1/channels/stop')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.defaultObjectAccessControls.delete(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.defaultObjectAccessControls.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
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
   * @desc Returns the default object ACL entry for the specified entity on the
   * specified bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.defaultObjectAccessControls.get(request, function(err, response)
   * { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.defaultObjectAccessControls.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$ObjectAccessControl>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.defaultObjectAccessControls.insert(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.defaultObjectAccessControls.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ObjectAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControl>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.defaultObjectAccessControls.list(request, function(err, response)
   * { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.defaultObjectAccessControls.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.ifMetagenerationMatch If present, only return default ACL listing if the bucket's current metageneration matches this value.
   * @param {string=} params.ifMetagenerationNotMatch If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControls>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControls>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControls>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControls>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl')
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
   * @desc Patches a default object ACL entry on the specified bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.defaultObjectAccessControls.patch(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.defaultObjectAccessControls.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ObjectAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControl>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.defaultObjectAccessControls.update(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.defaultObjectAccessControls.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ObjectAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControl>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}')
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

export class Resource$Notifications {
  root: Storage;
  constructor(root: Storage) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * storage.notifications.delete
   * @desc Permanently deletes a notification subscription.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The parent bucket of the notification.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // ID of the notification to delete.
   *     notification: 'my-notification',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.notifications.delete(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.notifications.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket The parent bucket of the notification.
   * @param {string} params.notification ID of the notification to delete.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
                  '/storage/v1/b/{bucket}/notificationConfigs/{notification}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['bucket', 'notification'],
      pathParams: ['bucket', 'notification'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * storage.notifications.get
   * @desc View a notification configuration.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The parent bucket of the notification.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Notification ID
   *     notification: 'my-notification',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.notifications.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.notifications.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket The parent bucket of the notification.
   * @param {string} params.notification Notification ID
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Notification>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>):
      void|AxiosPromise<Schema$Notification> {
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
                  '/storage/v1/b/{bucket}/notificationConfigs/{notification}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['bucket', 'notification'],
      pathParams: ['bucket', 'notification'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Notification>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notification>(parameters);
    }
  }


  /**
   * storage.notifications.insert
   * @desc Creates a notification subscription for a given bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The parent bucket of the notification.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.notifications.insert(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.notifications.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket The parent bucket of the notification.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Notification} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Notification>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notification>,
      callback?: BodyResponseCallback<Schema$Notification>):
      void|AxiosPromise<Schema$Notification> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/notificationConfigs')
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
      createAPIRequest<Schema$Notification>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notification>(parameters);
    }
  }


  /**
   * storage.notifications.list
   * @desc Retrieves a list of notification subscriptions for a given bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a Google Cloud Storage bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.notifications.list(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.notifications.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a Google Cloud Storage bucket.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Notifications>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Notifications>,
      callback?: BodyResponseCallback<Schema$Notifications>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Notifications>,
      callback?: BodyResponseCallback<Schema$Notifications>):
      void|AxiosPromise<Schema$Notifications> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/notificationConfigs')
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
      createAPIRequest<Schema$Notifications>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Notifications>(parameters);
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objectAccessControls.delete(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objectAccessControls.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objectAccessControls.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objectAccessControls.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$ObjectAccessControl>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objectAccessControls.insert(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objectAccessControls.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ObjectAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControl>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objectAccessControls.list(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objectAccessControls.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControls>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControls>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControls>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControls>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl')
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
   * @desc Patches an ACL entry on the specified object.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objectAccessControls.patch(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objectAccessControls.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ObjectAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControl>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of a bucket.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     // The entity holding the permission. Can be user-userId,
   * user-emailAddress, group-groupId,
   *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
   *     entity: 'my-entity',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objectAccessControls.update(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objectAccessControls.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of a bucket.
   * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ObjectAccessControl} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ObjectAccessControl>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
      callback?: BodyResponseCallback<Schema$ObjectAccessControl>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ObjectAccessControl>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}')
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
   * @desc Concatenates a list of existing objects into a new object in the same
   * bucket.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which to store the new object.
   *     destinationBucket: 'my-destination-bucket',  // TODO: Update
   * placeholder value.
   *
   *     // Name of the new object. For information about how to URL encode
   * object names to be path safe, see
   *     // Encoding URI Path Parts.
   *     destinationObject: 'my-destination-object',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.compose(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.compose
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.destinationBucket Name of the bucket in which to store the new object.
   * @param {string} params.destinationObject Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
   * @param {string=} params.kmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().ComposeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  compose(params: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
  compose(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>): void;
  compose(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Object>,
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
                 '/storage/v1/b/{destinationBucket}/o/{destinationObject}/compose')
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
   * @desc Copies a source object to a destination object. Optionally overrides
   * metadata.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which to find the source object.
   *     sourceBucket: 'my-source-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the source object. For information about how to URL encode
   * object names to be path safe,
   *     // see Encoding URI Path Parts.
   *     sourceObject: 'my-source-object',  // TODO: Update placeholder value.
   *
   *     // Name of the bucket in which to store the new object. Overrides the
   * provided object metadata's
   *     // bucket value, if any.For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     destinationBucket: 'my-destination-bucket',  // TODO: Update
   * placeholder value.
   *
   *     // Name of the new object. Required when the object metadata is not
   * otherwise provided. Overrides the
   *     // object metadata's name value, if any.
   *     destinationObject: 'my-destination-object',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.copy(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.copy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string} params.destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
   * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
   * @param {string=} params.ifSourceGenerationMatch Makes the operation conditional on whether the source object's current generation matches the given value.
   * @param {string=} params.ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's current generation does not match the given value.
   * @param {string=} params.ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
   * @param {string=} params.ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
   * @param {string} params.sourceBucket Name of the bucket in which to find the source object.
   * @param {string=} params.sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
   * @param {string} params.sourceObject Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Object} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  copy(params: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
  copy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>): void;
  copy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Object>,
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
                 '/storage/v1/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [
        'sourceBucket', 'sourceObject', 'destinationBucket', 'destinationObject'
      ],
      pathParams: [
        'destinationBucket', 'destinationObject', 'sourceBucket', 'sourceObject'
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
   * @desc Deletes an object and its metadata. Deletions are permanent if
   * versioning is not enabled for the bucket, or if the generation parameter is
   * used.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.delete(request, function(err) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
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
   * @desc Retrieves an object or its metadata.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     // TODO: To download media content, use:
   *     //
   *     // alt: 'media',
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Object>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
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
   * storage.objects.getIamPolicy
   * @desc Returns an IAM policy for the specified object.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.getIamPolicy(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam')
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
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * storage.objects.insert
   * @desc Stores a new object and metadata.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which to store the new object. Overrides the
   * provided object metadata's
   *     // bucket value, if any.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     media: {
   *       // TODO: Add desired media content for upload. See
   *       // https://github.com/google/google-api-nodejs-client#media-uploads
   *       mimeType: '',  // See
   * https://www.w3.org/Protocols/rfc1341/4_Content-Type.html body: '',
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.insert(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
   * @param {string=} params.contentEncoding If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
   * @param {string=} params.kmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. Limited availability; usable only by enabled projects.
   * @param {string=} params.name Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this object.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param  {object} params.resource Media resource metadata
   * @param {object} params.media Media object
   * @param {string} params.media.mimeType Media mime-type
   * @param {string|object} params.media.body Media body contents
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Object>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/storage/v1/b/{bucket}/o')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which to look for objects.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var itemsPage = response['items'];
   *     if (!itemsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < itemsPage.length; i++) {
   *       // TODO: Change code below to process each resource in `itemsPage`:
   *       console.log(JSON.stringify(itemsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       storage.objects.list(request, handlePage);
   *     }
   *   };
   *
   *   storage.objects.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which to look for objects.
   * @param {string=} params.delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
   * @param {integer=} params.maxResults Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
   * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
   * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {boolean=} params.versions If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$Objects>;
  list(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Objects>,
      callback?: BodyResponseCallback<Schema$Objects>): void;
  list(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Objects>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o')
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
   * @desc Patches an object's metadata.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.patch(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this object.
   * @param {string=} params.projection Set of properties to return. Defaults to full.
   * @param {string=} params.userProject The project to be billed for this request, for Requester Pays buckets.
   * @param {().Object} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Object>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
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
   * storage.objects.rewrite
   * @desc Rewrites a source object to a destination object. Optionally
   * overrides metadata.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which to find the source object.
   *     sourceBucket: 'my-source-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the source object. For information about how to URL encode
   * object names to be path safe,
   *     // see Encoding URI Path Parts.
   *     sourceObject: 'my-source-object',  // TODO: Update placeholder value.
   *
   *     // Name of the bucket in which to store the new object. Overrides the
   * provided object metadata's
   *     // bucket value, if any.
   *     destinationBucket: 'my-destination-bucket',  // TODO: Update
   * placeholder value.
   *
   *     // Name of the new object. Required when the object metadata is not
   * otherwise provided. Overrides the
   *     // object metadata's name value, if any. For information about how to
   * URL encode object names to be
   *     // path safe, see Encoding URI Path Parts.
   *     destinationObject: 'my-destination-object',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.rewrite(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.rewrite
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
   * @param {string=} params.destinationKmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
   * @param {string} params.destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
   * @param {string=} params.ifSourceGenerationMatch Makes the operation conditional on whether the source object's current generation matches the given value.
   * @param {string=} params.ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's current generation does not match the given value.
   * @param {string=} params.ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
   * @param {string=} params.ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
   * @param {string=} params.maxBytesRewrittenPerCall The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
   * @param {string=} params.rewriteToken Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
   * @param {string} params.sourceBucket Name of the bucket in which to find the source object.
   * @param {string=} params.sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
   * @param {string} params.sourceObject Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Object} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  rewrite(params: any, options?: MethodOptions):
      AxiosPromise<Schema$RewriteResponse>;
  rewrite(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$RewriteResponse>,
      callback?: BodyResponseCallback<Schema$RewriteResponse>): void;
  rewrite(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RewriteResponse>,
      callback?: BodyResponseCallback<Schema$RewriteResponse>):
      void|AxiosPromise<Schema$RewriteResponse> {
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
                 '/storage/v1/b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [
        'sourceBucket', 'sourceObject', 'destinationBucket', 'destinationObject'
      ],
      pathParams: [
        'destinationBucket', 'destinationObject', 'sourceBucket', 'sourceObject'
      ],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RewriteResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RewriteResponse>(parameters);
    }
  }


  /**
   * storage.objects.setIamPolicy
   * @desc Updates an IAM policy for the specified object.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.setIamPolicy(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Policy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam')
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
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * storage.objects.testIamPermissions
   * @desc Tests a set of permissions on the given object to see which, if any,
   * are held by the caller.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     // Permissions to test.
   *     permissions: [],  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.testIamPermissions(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string} params.permissions Permissions to test.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
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
                  '/storage/v1/b/{bucket}/o/{object}/iam/testPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['bucket', 'object', 'permissions'],
      pathParams: ['bucket', 'object'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * storage.objects.update
   * @desc Updates an object's metadata.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which the object resides.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     // Name of the object. For information about how to URL encode object
   * names to be path safe, see
   *     // Encoding URI Path Parts.
   *     object: 'my-object',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.update(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which the object resides.
   * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
   * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
   * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
   * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
   * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
   * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
   * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this object.
   * @param {string=} params.projection Set of properties to return. Defaults to full.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {().Object} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Object>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Object>,
      callback?: BodyResponseCallback<Schema$Object>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Object>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the bucket in which to look for objects.
   *     bucket: 'my-bucket',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   storage.objects.watchAll(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.objects.watchAll
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.bucket Name of the bucket in which to look for objects.
   * @param {string=} params.delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
   * @param {integer=} params.maxResults Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
   * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
   * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
   * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
   * @param {string=} params.userProject The project to be billed for this request. Required for Requester Pays buckets.
   * @param {boolean=} params.versions If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watchAll(params: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watchAll(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watchAll(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
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
            url: (rootUrl + '/storage/v1/b/{bucket}/o/watch')
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

export class Resource$Projects {
  root: Storage;
  serviceAccount: Resource$Projects$Serviceaccount;
  constructor(root: Storage) {
    this.root = root;
    this.getRoot.bind(this);
    this.serviceAccount = new Resource$Projects$Serviceaccount(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Serviceaccount {
  root: Storage;
  constructor(root: Storage) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * storage.projects.serviceAccount.get
   * @desc Get the email address of this project's Google Cloud Storage service
   * account.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Storage JSON API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/storage
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var storage = google.storage('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Project ID
   *     projectId: 'my-project-id',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   storage.projects.serviceAccount.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias storage.projects.serviceAccount.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.projectId Project ID
   * @param {string=} params.userProject The project to be billed for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$ServiceAccount>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>):
      void|AxiosPromise<Schema$ServiceAccount> {
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
            url: (rootUrl + '/storage/v1/projects/{projectId}/serviceAccount')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId'],
      pathParams: ['projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccount>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccount>(parameters);
    }
  }
}
