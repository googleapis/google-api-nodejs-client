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

export namespace storage_v1 {
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
     * Upload protocol for media (e.g. "media", "multipart", "resumable").
     */
    uploadType?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Cloud Storage JSON API
   *
   * Stores and retrieves potentially large, immutable data objects.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const storage = google.storage('v1');
   * ```
   */
  export class Storage {
    context: APIRequestContext;
    anywhereCaches: Resource$Anywherecaches;
    bucketAccessControls: Resource$Bucketaccesscontrols;
    buckets: Resource$Buckets;
    channels: Resource$Channels;
    defaultObjectAccessControls: Resource$Defaultobjectaccesscontrols;
    folders: Resource$Folders;
    managedFolders: Resource$Managedfolders;
    notifications: Resource$Notifications;
    objectAccessControls: Resource$Objectaccesscontrols;
    objects: Resource$Objects;
    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.anywhereCaches = new Resource$Anywherecaches(this.context);
      this.bucketAccessControls = new Resource$Bucketaccesscontrols(
        this.context
      );
      this.buckets = new Resource$Buckets(this.context);
      this.channels = new Resource$Channels(this.context);
      this.defaultObjectAccessControls =
        new Resource$Defaultobjectaccesscontrols(this.context);
      this.folders = new Resource$Folders(this.context);
      this.managedFolders = new Resource$Managedfolders(this.context);
      this.notifications = new Resource$Notifications(this.context);
      this.objectAccessControls = new Resource$Objectaccesscontrols(
        this.context
      );
      this.objects = new Resource$Objects(this.context);
      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * An Anywhere Cache instance.
   */
  export interface Schema$AnywhereCache {
    /**
     * The cache-level entry admission policy.
     */
    admissionPolicy?: string | null;
    /**
     * The ID of the Anywhere cache instance.
     */
    anywhereCacheId?: string | null;
    /**
     * The name of the bucket containing this cache instance.
     */
    bucket?: string | null;
    /**
     * The creation time of the cache instance in RFC 3339 format.
     */
    createTime?: string | null;
    /**
     * The ID of the resource, including the project number, bucket name and anywhere cache ID.
     */
    id?: string | null;
    /**
     * The kind of item this is. For Anywhere Cache, this is always storage#anywhereCache.
     */
    kind?: string | null;
    /**
     * True if the cache instance has an active Update long-running operation.
     */
    pendingUpdate?: boolean | null;
    /**
     * The link to this cache instance.
     */
    selfLink?: string | null;
    /**
     * The current state of the cache instance.
     */
    state?: string | null;
    /**
     * The TTL of all cache entries in whole seconds. e.g., "7200s".
     */
    ttl?: string | null;
    /**
     * The modification time of the cache instance metadata in RFC 3339 format.
     */
    updateTime?: string | null;
    /**
     * The zone in which the cache instance is running. For example, us-central1-a.
     */
    zone?: string | null;
  }
  /**
   * A list of Anywhere Caches.
   */
  export interface Schema$AnywhereCaches {
    /**
     * The list of items.
     */
    items?: Schema$AnywhereCache[];
    /**
     * The kind of item this is. For lists of Anywhere Caches, this is always storage#anywhereCaches.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
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
     * The bucket's Autoclass configuration.
     */
    autoclass?: {
      enabled?: boolean;
      terminalStorageClass?: string;
      terminalStorageClassUpdateTime?: string;
      toggleTime?: string;
    } | null;
    /**
     * The bucket's billing configuration.
     */
    billing?: {requesterPays?: boolean} | null;
    /**
     * The bucket's Cross-Origin Resource Sharing (CORS) configuration.
     */
    cors?: Array<{
      maxAgeSeconds?: number;
      method?: string[];
      origin?: string[];
      responseHeader?: string[];
    }> | null;
    /**
     * The bucket's custom placement configuration for Custom Dual Regions.
     */
    customPlacementConfig?: {dataLocations?: string[]} | null;
    /**
     * The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.
     */
    defaultEventBasedHold?: boolean | null;
    /**
     * Default access controls to apply to new objects when no ACL is provided.
     */
    defaultObjectAcl?: Schema$ObjectAccessControl[];
    /**
     * Encryption configuration for a bucket.
     */
    encryption?: {defaultKmsKeyName?: string} | null;
    /**
     * HTTP 1.1 Entity tag for the bucket.
     */
    etag?: string | null;
    /**
     * The bucket's hierarchical namespace configuration.
     */
    hierarchicalNamespace?: {enabled?: boolean} | null;
    /**
     * The bucket's IAM configuration.
     */
    iamConfiguration?: {
      bucketPolicyOnly?: {enabled?: boolean; lockedTime?: string};
      publicAccessPrevention?: string;
      uniformBucketLevelAccess?: {enabled?: boolean; lockedTime?: string};
    } | null;
    /**
     * The ID of the bucket. For buckets, the id and name properties are the same.
     */
    id?: string | null;
    /**
     * The kind of item this is. For buckets, this is always storage#bucket.
     */
    kind?: string | null;
    /**
     * User-provided labels, in key/value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The bucket's lifecycle configuration. See lifecycle management for more information.
     */
    lifecycle?: {
      rule?: Array<{
        action?: {storageClass?: string; type?: string};
        condition?: {
          age?: number;
          createdBefore?: string;
          customTimeBefore?: string;
          daysSinceCustomTime?: number;
          daysSinceNoncurrentTime?: number;
          isLive?: boolean;
          matchesPattern?: string;
          matchesPrefix?: string[];
          matchesStorageClass?: string[];
          matchesSuffix?: string[];
          noncurrentTimeBefore?: string;
          numNewerVersions?: number;
        };
      }>;
    } | null;
    /**
     * The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.
     */
    location?: string | null;
    /**
     * The type of the bucket location.
     */
    locationType?: string | null;
    /**
     * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
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
     * The bucket's object retention config.
     */
    objectRetention?: {mode?: string} | null;
    /**
     * The owner of the bucket. This is always the project team's owner group.
     */
    owner?: {entity?: string; entityId?: string} | null;
    /**
     * The project number of the project the bucket belongs to.
     */
    projectNumber?: string | null;
    /**
     * The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
     */
    retentionPolicy?: {
      effectiveTime?: string;
      isLocked?: boolean;
      retentionPeriod?: string;
    } | null;
    /**
     * The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.
     */
    rpo?: string | null;
    /**
     * Reserved for future use.
     */
    satisfiesPZS?: boolean | null;
    /**
     * The URI of this bucket.
     */
    selfLink?: string | null;
    /**
     * The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted.
     */
    softDeletePolicy?: {
      effectiveTime?: string;
      retentionDurationSeconds?: string;
    } | null;
    /**
     * The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.
     */
    storageClass?: string | null;
    /**
     * The creation time of the bucket in RFC 3339 format.
     */
    timeCreated?: string | null;
    /**
     * The modification time of the bucket in RFC 3339 format.
     */
    updated?: string | null;
    /**
     * The bucket's versioning configuration.
     */
    versioning?: {enabled?: boolean} | null;
    /**
     * The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
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
     * The entity holding the permission, in one of the following forms:
     * - user-userId
     * - user-email
     * - group-groupId
     * - group-email
     * - domain-domain
     * - project-team-projectId
     * - allUsers
     * - allAuthenticatedUsers Examples:
     * - The user liz@example.com would be user-liz@example.com.
     * - The group example@googlegroups.com would be group-example@googlegroups.com.
     * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
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
     * The project team associated with the entity, if any.
     */
    projectTeam?: {projectNumber?: string; team?: string} | null;
    /**
     * The access permission for the entity.
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
   * A bulk restore objects request.
   */
  export interface Schema$BulkRestoreObjectsRequest {
    /**
     * If false (default), the restore will not overwrite live objects with the same name at the destination. This means some deleted objects may be skipped. If true, live objects will be overwritten resulting in a noncurrent object (if versioning is enabled). If versioning is not enabled, overwriting the object will result in a soft-deleted object. In either case, if a noncurrent object already exists with the same name, a live version can be written without issue.
     */
    allowOverwrite?: boolean | null;
    /**
     * If true, copies the source object's ACL; otherwise, uses the bucket's default object ACL. The default is false.
     */
    copySourceAcl?: boolean | null;
    /**
     * Restores only the objects matching any of the specified glob(s). If this parameter is not specified, all objects will be restored within the specified time range.
     */
    matchGlobs?: string[] | null;
    /**
     * Restores only the objects that were soft-deleted after this time.
     */
    softDeletedAfterTime?: string | null;
    /**
     * Restores only the objects that were soft-deleted before this time.
     */
    softDeletedBeforeTime?: string | null;
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
     * Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
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
     * Properties of the resulting object.
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
   * Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) \> 0"
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * A folder. Only available in buckets with hierarchical namespace enabled.
   */
  export interface Schema$Folder {
    /**
     * The name of the bucket containing this folder.
     */
    bucket?: string | null;
    /**
     * The ID of the folder, including the bucket name, folder name.
     */
    id?: string | null;
    /**
     * The kind of item this is. For folders, this is always storage#folder.
     */
    kind?: string | null;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The version of the metadata for this folder. Used for preconditions and for detecting changes in metadata.
     */
    metageneration?: string | null;
    /**
     * The name of the folder. Required if not specified by URL parameter.
     */
    name?: string | null;
    /**
     * Only present if the folder is part of an ongoing rename folder operation. Contains information which can be used to query the operation status.
     */
    pendingRenameInfo?: {operationId?: string} | null;
    /**
     * The link to this folder.
     */
    selfLink?: string | null;
    /**
     * The creation time of the folder in RFC 3339 format.
     */
    timeCreated?: string | null;
    /**
     * The modification time of the folder metadata in RFC 3339 format.
     */
    updated?: string | null;
  }
  /**
   * A list of folders.
   */
  export interface Schema$Folders {
    /**
     * The list of items.
     */
    items?: Schema$Folder[];
    /**
     * The kind of item this is. For lists of folders, this is always storage#folders.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for storage.buckets.operations.list.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is "false", it means the operation is still in progress. If "true", the operation is completed, and either "error" or "response" is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the "name" should be a resource name ending with "operations/{operationId\}".
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as "Delete", the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type "XxxResponse", where "Xxx" is the original method name. For example, if the original method name is "TakeSnapshot()", the inferred response type is "TakeSnapshotResponse".
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * The "Status" type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each "Status" message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English.
     */
    message?: string | null;
  }
  /**
   * JSON template to produce a JSON-style HMAC Key resource for Create responses.
   */
  export interface Schema$HmacKey {
    /**
     * The kind of item this is. For HMAC keys, this is always storage#hmacKey.
     */
    kind?: string | null;
    /**
     * Key metadata.
     */
    metadata?: Schema$HmacKeyMetadata;
    /**
     * HMAC secret key material.
     */
    secret?: string | null;
  }
  /**
   * JSON template to produce a JSON-style HMAC Key metadata resource.
   */
  export interface Schema$HmacKeyMetadata {
    /**
     * The ID of the HMAC Key.
     */
    accessId?: string | null;
    /**
     * HTTP 1.1 Entity tag for the HMAC key.
     */
    etag?: string | null;
    /**
     * The ID of the HMAC key, including the Project ID and the Access ID.
     */
    id?: string | null;
    /**
     * The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata.
     */
    kind?: string | null;
    /**
     * Project ID owning the service account to which the key authenticates.
     */
    projectId?: string | null;
    /**
     * The link to this resource.
     */
    selfLink?: string | null;
    /**
     * The email address of the key's associated service account.
     */
    serviceAccountEmail?: string | null;
    /**
     * The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED.
     */
    state?: string | null;
    /**
     * The creation time of the HMAC key in RFC 3339 format.
     */
    timeCreated?: string | null;
    /**
     * The last modification time of the HMAC key metadata in RFC 3339 format.
     */
    updated?: string | null;
  }
  /**
   * A list of hmacKeys.
   */
  export interface Schema$HmacKeysMetadata {
    /**
     * The list of items.
     */
    items?: Schema$HmacKeyMetadata[];
    /**
     * The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A managed folder.
   */
  export interface Schema$ManagedFolder {
    /**
     * The name of the bucket containing this managed folder.
     */
    bucket?: string | null;
    /**
     * The creation time of the managed folder in RFC 3339 format.
     */
    createTime?: string | null;
    /**
     * The ID of the managed folder, including the bucket name and managed folder name.
     */
    id?: string | null;
    /**
     * The kind of item this is. For managed folders, this is always storage#managedFolder.
     */
    kind?: string | null;
    /**
     * The version of the metadata for this managed folder. Used for preconditions and for detecting changes in metadata.
     */
    metageneration?: string | null;
    /**
     * The name of the managed folder. Required if not specified by URL parameter.
     */
    name?: string | null;
    /**
     * The link to this managed folder.
     */
    selfLink?: string | null;
    /**
     * The last update time of the managed folder metadata in RFC 3339 format.
     */
    updateTime?: string | null;
  }
  /**
   * A list of managed folders.
   */
  export interface Schema$ManagedFolders {
    /**
     * The list of items.
     */
    items?: Schema$ManagedFolder[];
    /**
     * The kind of item this is. For lists of managed folders, this is always storage#managedFolders.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A subscription to receive Google PubSub notifications.
   */
  export interface Schema$Notification {
    /**
     * An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.
     */
    custom_attributes?: {[key: string]: string} | null;
    /**
     * HTTP 1.1 Entity tag for this subscription notification.
     */
    etag?: string | null;
    /**
     * If present, only send notifications about listed event types. If empty, sent notifications for all event types.
     */
    event_types?: string[] | null;
    /**
     * The ID of the notification.
     */
    id?: string | null;
    /**
     * The kind of item this is. For notifications, this is always storage#notification.
     */
    kind?: string | null;
    /**
     * If present, only apply this notification configuration to object names that begin with this prefix.
     */
    object_name_prefix?: string | null;
    /**
     * The desired content of the Payload.
     */
    payload_format?: string | null;
    /**
     * The canonical URL of this notification.
     */
    selfLink?: string | null;
    /**
     * The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier\}/topics/{my-topic\}'
     */
    topic?: string | null;
  }
  /**
   * A list of notification subscriptions.
   */
  export interface Schema$Notifications {
    /**
     * The list of items.
     */
    items?: Schema$Notification[];
    /**
     * The kind of item this is. For lists of notifications, this is always storage#notifications.
     */
    kind?: string | null;
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
     * The name of the bucket containing this object.
     */
    bucket?: string | null;
    /**
     * Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
     */
    cacheControl?: string | null;
    /**
     * Number of underlying components that make up this object. Components are accumulated by compose operations.
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
     * Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.
     */
    contentType?: string | null;
    /**
     * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.
     */
    crc32c?: string | null;
    /**
     * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
     */
    customerEncryption?: {
      encryptionAlgorithm?: string;
      keySha256?: string;
    } | null;
    /**
     * A timestamp in RFC 3339 format specified by the user for an object.
     */
    customTime?: string | null;
    /**
     * HTTP 1.1 Entity tag for the object.
     */
    etag?: string | null;
    /**
     * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.
     */
    eventBasedHold?: boolean | null;
    /**
     * The content generation of this object. Used for object versioning.
     */
    generation?: string | null;
    /**
     * This is the time (in the future) when the soft-deleted object will no longer be restorable. It is equal to the soft delete time plus the current soft delete retention duration of the bucket.
     */
    hardDeleteTime?: string | null;
    /**
     * The ID of the object, including the bucket name, object name, and generation number.
     */
    id?: string | null;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind?: string | null;
    /**
     * Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.
     */
    kmsKeyName?: string | null;
    /**
     * MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
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
     * The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
     */
    metageneration?: string | null;
    /**
     * The name of the object. Required if not specified by URL parameter.
     */
    name?: string | null;
    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    owner?: {entity?: string; entityId?: string} | null;
    /**
     * A collection of object level retention parameters.
     */
    retention?: {mode?: string; retainUntilTime?: string} | null;
    /**
     * A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).
     */
    retentionExpirationTime?: string | null;
    /**
     * The link to this object.
     */
    selfLink?: string | null;
    /**
     * Content-Length of the data in bytes.
     */
    size?: string | null;
    /**
     * The time at which the object became soft-deleted in RFC 3339 format.
     */
    softDeleteTime?: string | null;
    /**
     * Storage class of the object.
     */
    storageClass?: string | null;
    /**
     * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.
     */
    temporaryHold?: boolean | null;
    /**
     * The creation time of the object in RFC 3339 format.
     */
    timeCreated?: string | null;
    /**
     * The time at which the object became noncurrent in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
     */
    timeDeleted?: string | null;
    /**
     * The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.
     */
    timeStorageClassUpdated?: string | null;
    /**
     * The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.
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
     * The entity holding the permission, in one of the following forms:
     * - user-userId
     * - user-email
     * - group-groupId
     * - group-email
     * - domain-domain
     * - project-team-projectId
     * - allUsers
     * - allAuthenticatedUsers Examples:
     * - The user liz@example.com would be user-liz@example.com.
     * - The group example@googlegroups.com would be group-example@googlegroups.com.
     * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
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
     * The content generation of the object, if applied to an object.
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
     * The name of the object, if applied to an object.
     */
    object?: string | null;
    /**
     * The project team associated with the entity, if any.
     */
    projectTeam?: {projectNumber?: string; team?: string} | null;
    /**
     * The access permission for the entity.
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
  /**
   * A bucket/object/managedFolder IAM policy.
   */
  export interface Schema$Policy {
    /**
     * An association between a role, which comes with a set of permissions, and members who may assume that role.
     */
    bindings?: Array<{
      condition?: Schema$Expr;
      members?: string[];
      role?: string;
    }> | null;
    /**
     * HTTP 1.1  Entity tag for the policy.
     */
    etag?: string | null;
    /**
     * The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.
     */
    kind?: string | null;
    /**
     * The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, projects/_/buckets/bucket/objects/object for objects, and projects/_/buckets/bucket/managedFolders/managedFolder. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.
     */
    resourceId?: string | null;
    /**
     * The IAM policy format version.
     */
    version?: number | null;
  }
  /**
   * A rewrite response.
   */
  export interface Schema$RewriteResponse {
    /**
     * true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.
     */
    done?: boolean | null;
    /**
     * The kind of item this is.
     */
    kind?: string | null;
    /**
     * The total size of the object being copied in bytes. This property is always present in the response.
     */
    objectSize?: string | null;
    /**
     * A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.
     */
    resource?: Schema$Object;
    /**
     * A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.
     */
    rewriteToken?: string | null;
    /**
     * The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.
     */
    totalBytesRewritten?: string | null;
  }
  /**
   * A subscription to receive Google PubSub notifications.
   */
  export interface Schema$ServiceAccount {
    /**
     * The ID of the notification.
     */
    email_address?: string | null;
    /**
     * The kind of item this is. For notifications, this is always storage#notification.
     */
    kind?: string | null;
  }
  /**
   * A storage.(buckets|objects|managedFolders).testIamPermissions response.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * The kind of item this is.
     */
    kind?: string | null;
    /**
     * The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets, objects, or managedFolders. The supported permissions are as follows:
     * - storage.buckets.delete — Delete bucket.
     * - storage.buckets.get — Read bucket metadata.
     * - storage.buckets.getIamPolicy — Read bucket IAM policy.
     * - storage.buckets.create — Create bucket.
     * - storage.buckets.list — List buckets.
     * - storage.buckets.setIamPolicy — Update bucket IAM policy.
     * - storage.buckets.update — Update bucket metadata.
     * - storage.objects.delete — Delete object.
     * - storage.objects.get — Read object data and metadata.
     * - storage.objects.getIamPolicy — Read object IAM policy.
     * - storage.objects.create — Create object.
     * - storage.objects.list — List objects.
     * - storage.objects.setIamPolicy — Update object IAM policy.
     * - storage.objects.update — Update object metadata.
     * - storage.managedFolders.delete — Delete managed folder.
     * - storage.managedFolders.get — Read managed folder metadata.
     * - storage.managedFolders.getIamPolicy — Read managed folder IAM policy.
     * - storage.managedFolders.create — Create managed folder.
     * - storage.managedFolders.list — List managed folders.
     * - storage.managedFolders.setIamPolicy — Update managed folder IAM policy.
     */
    permissions?: string[] | null;
  }

  export class Resource$Anywherecaches {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Disables an Anywhere Cache instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disable(
      params: Params$Resource$Anywherecaches$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Anywherecaches$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnywhereCache>;
    disable(
      params: Params$Resource$Anywherecaches$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Anywherecaches$Disable,
      options: MethodOptions | BodyResponseCallback<Schema$AnywhereCache>,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    disable(
      params: Params$Resource$Anywherecaches$Disable,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    disable(callback: BodyResponseCallback<Schema$AnywhereCache>): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$Disable
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AnywhereCache> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/anywhereCaches/{anywhereCacheId}/disable'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'anywhereCacheId'],
        pathParams: ['anywhereCacheId', 'bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnywhereCache>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnywhereCache>(parameters);
      }
    }

    /**
     * Returns the metadata of an Anywhere Cache instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Anywherecaches$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Anywherecaches$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnywhereCache>;
    get(
      params: Params$Resource$Anywherecaches$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Anywherecaches$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AnywhereCache>,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    get(
      params: Params$Resource$Anywherecaches$Get,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    get(callback: BodyResponseCallback<Schema$AnywhereCache>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$Get
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AnywhereCache> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/anywhereCaches/{anywhereCacheId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'anywhereCacheId'],
        pathParams: ['anywhereCacheId', 'bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnywhereCache>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnywhereCache>(parameters);
      }
    }

    /**
     * Creates an Anywhere Cache instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Anywherecaches$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Anywherecaches$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    insert(
      params: Params$Resource$Anywherecaches$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Anywherecaches$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    insert(
      params: Params$Resource$Anywherecaches$Insert,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    insert(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$Insert
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/anywhereCaches').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Returns a list of Anywhere Cache instances of the bucket matching the criteria.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Anywherecaches$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Anywherecaches$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnywhereCaches>;
    list(
      params: Params$Resource$Anywherecaches$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Anywherecaches$List,
      options: MethodOptions | BodyResponseCallback<Schema$AnywhereCaches>,
      callback: BodyResponseCallback<Schema$AnywhereCaches>
    ): void;
    list(
      params: Params$Resource$Anywherecaches$List,
      callback: BodyResponseCallback<Schema$AnywhereCaches>
    ): void;
    list(callback: BodyResponseCallback<Schema$AnywhereCaches>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$List
        | BodyResponseCallback<Schema$AnywhereCaches>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnywhereCaches>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnywhereCaches>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AnywhereCaches> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/anywhereCaches').replace(
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
        createAPIRequest<Schema$AnywhereCaches>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnywhereCaches>(parameters);
      }
    }

    /**
     * Pauses an Anywhere Cache instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    pause(
      params: Params$Resource$Anywherecaches$Pause,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pause(
      params?: Params$Resource$Anywherecaches$Pause,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnywhereCache>;
    pause(
      params: Params$Resource$Anywherecaches$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Anywherecaches$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$AnywhereCache>,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    pause(
      params: Params$Resource$Anywherecaches$Pause,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    pause(callback: BodyResponseCallback<Schema$AnywhereCache>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$Pause
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AnywhereCache> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/anywhereCaches/{anywhereCacheId}/pause'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'anywhereCacheId'],
        pathParams: ['anywhereCacheId', 'bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnywhereCache>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnywhereCache>(parameters);
      }
    }

    /**
     * Resumes a paused or disabled Anywhere Cache instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resume(
      params: Params$Resource$Anywherecaches$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Anywherecaches$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnywhereCache>;
    resume(
      params: Params$Resource$Anywherecaches$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Anywherecaches$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$AnywhereCache>,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    resume(
      params: Params$Resource$Anywherecaches$Resume,
      callback: BodyResponseCallback<Schema$AnywhereCache>
    ): void;
    resume(callback: BodyResponseCallback<Schema$AnywhereCache>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$Resume
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnywhereCache>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AnywhereCache> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/anywhereCaches/{anywhereCacheId}/resume'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'anywhereCacheId'],
        pathParams: ['anywhereCacheId', 'bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnywhereCache>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnywhereCache>(parameters);
      }
    }

    /**
     * Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Anywherecaches$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Anywherecaches$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    update(
      params: Params$Resource$Anywherecaches$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Anywherecaches$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    update(
      params: Params$Resource$Anywherecaches$Update,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Anywherecaches$Update
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Anywherecaches$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Anywherecaches$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/anywhereCaches/{anywhereCacheId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'anywhereCacheId'],
        pathParams: ['anywhereCacheId', 'bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Anywherecaches$Disable
    extends StandardParameters {
    /**
     * The ID of requested Anywhere Cache instance.
     */
    anywhereCacheId?: string;
    /**
     * Name of the parent bucket.
     */
    bucket?: string;
  }
  export interface Params$Resource$Anywherecaches$Get
    extends StandardParameters {
    /**
     * The ID of requested Anywhere Cache instance.
     */
    anywhereCacheId?: string;
    /**
     * Name of the parent bucket.
     */
    bucket?: string;
  }
  export interface Params$Resource$Anywherecaches$Insert
    extends StandardParameters {
    /**
     * Name of the parent bucket.
     */
    bucket?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnywhereCache;
  }
  export interface Params$Resource$Anywherecaches$List
    extends StandardParameters {
    /**
     * Name of the parent bucket.
     */
    bucket?: string;
    /**
     * Maximum number of items to return in a single page of responses. Maximum 1000.
     */
    pageSize?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Anywherecaches$Pause
    extends StandardParameters {
    /**
     * The ID of requested Anywhere Cache instance.
     */
    anywhereCacheId?: string;
    /**
     * Name of the parent bucket.
     */
    bucket?: string;
  }
  export interface Params$Resource$Anywherecaches$Resume
    extends StandardParameters {
    /**
     * The ID of requested Anywhere Cache instance.
     */
    anywhereCacheId?: string;
    /**
     * Name of the parent bucket.
     */
    bucket?: string;
  }
  export interface Params$Resource$Anywherecaches$Update
    extends StandardParameters {
    /**
     * The ID of requested Anywhere Cache instance.
     */
    anywhereCacheId?: string;
    /**
     * Name of the parent bucket.
     */
    bucket?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnywhereCache;
  }

  export class Resource$Bucketaccesscontrols {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes the ACL entry for the specified entity on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Bucketaccesscontrols$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Bucketaccesscontrols$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Bucketaccesscontrols$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}').replace(
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns the ACL entry for the specified entity on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Bucketaccesscontrols$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Bucketaccesscontrols$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    get(
      params: Params$Resource$Bucketaccesscontrols$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BucketAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}').replace(
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
        createAPIRequest<Schema$BucketAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }

    /**
     * Creates a new ACL entry on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Bucketaccesscontrols$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Bucketaccesscontrols$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    insert(
      params: Params$Resource$Bucketaccesscontrols$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BucketAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/acl').replace(
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
        createAPIRequest<Schema$BucketAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }

    /**
     * Retrieves ACL entries on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Bucketaccesscontrols$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Bucketaccesscontrols$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControls>;
    list(
      params: Params$Resource$Bucketaccesscontrols$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BucketAccessControls>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BucketAccessControls>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BucketAccessControls>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BucketAccessControls>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/acl').replace(
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
        createAPIRequest<Schema$BucketAccessControls>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BucketAccessControls>(parameters);
      }
    }

    /**
     * Patches an ACL entry on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Bucketaccesscontrols$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Bucketaccesscontrols$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    patch(
      params: Params$Resource$Bucketaccesscontrols$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BucketAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}').replace(
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
        createAPIRequest<Schema$BucketAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }

    /**
     * Updates an ACL entry on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Bucketaccesscontrols$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Bucketaccesscontrols$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BucketAccessControl>;
    update(
      params: Params$Resource$Bucketaccesscontrols$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BucketAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BucketAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/acl/{entity}').replace(
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
        createAPIRequest<Schema$BucketAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BucketAccessControl>(parameters);
      }
    }
  }

  export interface Params$Resource$Bucketaccesscontrols$Delete
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Bucketaccesscontrols$Get
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Bucketaccesscontrols$Insert
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BucketAccessControl;
  }
  export interface Params$Resource$Bucketaccesscontrols$List
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Bucketaccesscontrols$Patch
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BucketAccessControl;
  }
  export interface Params$Resource$Bucketaccesscontrols$Update
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

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
     * Permanently deletes an empty bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Buckets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Buckets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Buckets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}').replace(
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns metadata for the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Buckets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Buckets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    get(
      params: Params$Resource$Buckets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bucket> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}').replace(
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
        createAPIRequest<Schema$Bucket>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * Returns an IAM policy for the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Buckets$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Buckets$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Buckets$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Buckets$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Buckets$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Buckets$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buckets$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/iam').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Creates a new bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Buckets$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Buckets$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    insert(
      params: Params$Resource$Buckets$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bucket> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Bucket>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * Retrieves a list of buckets for a given project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Buckets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Buckets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Buckets>;
    list(
      params: Params$Resource$Buckets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Buckets>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Buckets>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Buckets>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Buckets> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Buckets>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Buckets>(parameters);
      }
    }

    /**
     * Locks retention policy on a bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    lockRetentionPolicy(
      params: Params$Resource$Buckets$Lockretentionpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lockRetentionPolicy(
      params?: Params$Resource$Buckets$Lockretentionpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    lockRetentionPolicy(
      params: Params$Resource$Buckets$Lockretentionpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lockRetentionPolicy(
      params: Params$Resource$Buckets$Lockretentionpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Bucket>,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    lockRetentionPolicy(
      params: Params$Resource$Buckets$Lockretentionpolicy,
      callback: BodyResponseCallback<Schema$Bucket>
    ): void;
    lockRetentionPolicy(callback: BodyResponseCallback<Schema$Bucket>): void;
    lockRetentionPolicy(
      paramsOrCallback?:
        | Params$Resource$Buckets$Lockretentionpolicy
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bucket> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buckets$Lockretentionpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Lockretentionpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/lockRetentionPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'ifMetagenerationMatch'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bucket>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Buckets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Buckets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    patch(
      params: Params$Resource$Buckets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bucket> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}').replace(
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
        createAPIRequest<Schema$Bucket>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }

    /**
     * Updates an IAM policy for the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Buckets$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Buckets$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Buckets$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Buckets$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Buckets$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Buckets$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buckets$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/iam').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Buckets$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Buckets$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Buckets$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Buckets$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Buckets$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Buckets$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Buckets$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Buckets$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/iam/testPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'permissions'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Buckets$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Buckets$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bucket>;
    update(
      params: Params$Resource$Buckets$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bucket>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bucket> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}').replace(
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
        createAPIRequest<Schema$Bucket>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Bucket>(parameters);
      }
    }
  }

  export interface Params$Resource$Buckets$Delete extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * If set, only deletes the bucket if its metageneration matches this value.
     */
    ifMetagenerationMatch?: string;
    /**
     * If set, only deletes the bucket if its metageneration does not match this value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Buckets$Get extends StandardParameters {
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
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Buckets$Getiampolicy
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
     */
    optionsRequestedPolicyVersion?: number;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Buckets$Insert extends StandardParameters {
    /**
     * When set to true, object retention is enabled for this bucket.
     */
    enableObjectRetention?: boolean;
    /**
     * Apply a predefined set of access controls to this bucket.
     */
    predefinedAcl?: string;
    /**
     * Apply a predefined set of default object access controls to this bucket.
     */
    predefinedDefaultObjectAcl?: string;
    /**
     * A valid API project identifier.
     */
    project?: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Bucket;
  }
  export interface Params$Resource$Buckets$List extends StandardParameters {
    /**
     * Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to buckets whose names begin with this prefix.
     */
    prefix?: string;
    /**
     * A valid API project identifier.
     */
    project?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
  }
  export interface Params$Resource$Buckets$Lockretentionpolicy
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Makes the operation conditional on whether bucket's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Buckets$Patch extends StandardParameters {
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
     * Apply a predefined set of access controls to this bucket.
     */
    predefinedAcl?: string;
    /**
     * Apply a predefined set of default object access controls to this bucket.
     */
    predefinedDefaultObjectAcl?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Bucket;
  }
  export interface Params$Resource$Buckets$Setiampolicy
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Buckets$Testiampermissions
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * Permissions to test.
     */
    permissions?: string[];
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Buckets$Update extends StandardParameters {
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
     * Apply a predefined set of access controls to this bucket.
     */
    predefinedAcl?: string;
    /**
     * Apply a predefined set of default object access controls to this bucket.
     */
    predefinedDefaultObjectAcl?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

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
     * Stop watching resources through this channel
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/channels/stop').replace(
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
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
     * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Defaultobjectaccesscontrols$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Defaultobjectaccesscontrols$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Defaultobjectaccesscontrols$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}'
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns the default object ACL entry for the specified entity on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Defaultobjectaccesscontrols$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Defaultobjectaccesscontrols$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    get(
      params: Params$Resource$Defaultobjectaccesscontrols$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}'
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * Creates a new default object ACL entry on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Defaultobjectaccesscontrols$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Defaultobjectaccesscontrols$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    insert(
      params: Params$Resource$Defaultobjectaccesscontrols$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl').replace(
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * Retrieves default object ACL entries on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Defaultobjectaccesscontrols$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Defaultobjectaccesscontrols$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControls>;
    list(
      params: Params$Resource$Defaultobjectaccesscontrols$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControls>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControls>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControls>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControls>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl').replace(
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
        createAPIRequest<Schema$ObjectAccessControls>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControls>(parameters);
      }
    }

    /**
     * Patches a default object ACL entry on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Defaultobjectaccesscontrols$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Defaultobjectaccesscontrols$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    patch(
      params: Params$Resource$Defaultobjectaccesscontrols$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}'
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * Updates a default object ACL entry on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Defaultobjectaccesscontrols$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Defaultobjectaccesscontrols$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    update(
      params: Params$Resource$Defaultobjectaccesscontrols$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/defaultObjectAcl/{entity}'
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }
  }

  export interface Params$Resource$Defaultobjectaccesscontrols$Delete
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$Get
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$Insert
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$List
    extends StandardParameters {
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
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$Patch
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Defaultobjectaccesscontrols$Update
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Folders$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Folders$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Folders$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Folders$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Folders$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/folders/{folder}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'folder'],
        pathParams: ['bucket', 'folder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Folder>;
    get(
      params: Params$Resource$Folders$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    get(
      params: Params$Resource$Folders$Get,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    get(callback: BodyResponseCallback<Schema$Folder>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Get
        | BodyResponseCallback<Schema$Folder>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Folder>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Folder>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Folder> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Folders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/folders/{folder}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'folder'],
        pathParams: ['bucket', 'folder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Folder>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Folder>(parameters);
      }
    }

    /**
     * Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Folders$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Folders$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Folder>;
    insert(
      params: Params$Resource$Folders$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Folders$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    insert(
      params: Params$Resource$Folders$Insert,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Folder>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Folders$Insert
        | BodyResponseCallback<Schema$Folder>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Folder>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Folder>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Folder> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Folders$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/folders').replace(
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
        createAPIRequest<Schema$Folder>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Folder>(parameters);
      }
    }

    /**
     * Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Folders>;
    list(
      params: Params$Resource$Folders$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$List,
      options: MethodOptions | BodyResponseCallback<Schema$Folders>,
      callback: BodyResponseCallback<Schema$Folders>
    ): void;
    list(
      params: Params$Resource$Folders$List,
      callback: BodyResponseCallback<Schema$Folders>
    ): void;
    list(callback: BodyResponseCallback<Schema$Folders>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$List
        | BodyResponseCallback<Schema$Folders>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Folders>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Folders>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Folders> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Folders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/folders').replace(
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
        createAPIRequest<Schema$Folders>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Folders>(parameters);
      }
    }

    /**
     * Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rename(
      params: Params$Resource$Folders$Rename,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rename(
      params?: Params$Resource$Folders$Rename,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    rename(
      params: Params$Resource$Folders$Rename,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rename(
      params: Params$Resource$Folders$Rename,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rename(
      params: Params$Resource$Folders$Rename,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rename(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rename(
      paramsOrCallback?:
        | Params$Resource$Folders$Rename
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Folders$Rename;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Rename;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'sourceFolder', 'destinationFolder'],
        pathParams: ['bucket', 'destinationFolder', 'sourceFolder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Delete extends StandardParameters {
    /**
     * Name of the bucket in which the folder resides.
     */
    bucket?: string;
    /**
     * Name of a folder.
     */
    folder?: string;
    /**
     * If set, only deletes the folder if its metageneration matches this value.
     */
    ifMetagenerationMatch?: string;
    /**
     * If set, only deletes the folder if its metageneration does not match this value.
     */
    ifMetagenerationNotMatch?: string;
  }
  export interface Params$Resource$Folders$Get extends StandardParameters {
    /**
     * Name of the bucket in which the folder resides.
     */
    bucket?: string;
    /**
     * Name of a folder.
     */
    folder?: string;
    /**
     * Makes the return of the folder metadata conditional on whether the folder's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the folder metadata conditional on whether the folder's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
  }
  export interface Params$Resource$Folders$Insert extends StandardParameters {
    /**
     * Name of the bucket in which the folder resides.
     */
    bucket?: string;
    /**
     * If true, any parent folder which doesn’t exist will be created automatically.
     */
    recursive?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Folder;
  }
  export interface Params$Resource$Folders$List extends StandardParameters {
    /**
     * Name of the bucket in which to look for folders.
     */
    bucket?: string;
    /**
     * Returns results in a directory-like mode. The only supported value is '/'. If set, items will only contain folders that either exactly match the prefix, or are one level below the prefix.
     */
    delimiter?: string;
    /**
     * Filter results to folders whose names are lexicographically before endOffset. If startOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    endOffset?: string;
    /**
     * Maximum number of items to return in a single page of responses.
     */
    pageSize?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to folders whose paths begin with this prefix. If set, the value must either be an empty string or end with a '/'.
     */
    prefix?: string;
    /**
     * Filter results to folders whose names are lexicographically equal to or after startOffset. If endOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    startOffset?: string;
  }
  export interface Params$Resource$Folders$Rename extends StandardParameters {
    /**
     * Name of the bucket in which the folders are in.
     */
    bucket?: string;
    /**
     * Name of the destination folder.
     */
    destinationFolder?: string;
    /**
     * Makes the operation conditional on whether the source object's current metageneration matches the given value.
     */
    ifSourceMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     */
    ifSourceMetagenerationNotMatch?: string;
    /**
     * Name of the source folder.
     */
    sourceFolder?: string;
  }

  export class Resource$Managedfolders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes a managed folder.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Managedfolders$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Managedfolders$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Managedfolders$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Managedfolders$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Managedfolders$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/managedFolders/{managedFolder}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'managedFolder'],
        pathParams: ['bucket', 'managedFolder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns metadata of the specified managed folder.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Managedfolders$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Managedfolders$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedFolder>;
    get(
      params: Params$Resource$Managedfolders$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Managedfolders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedFolder>,
      callback: BodyResponseCallback<Schema$ManagedFolder>
    ): void;
    get(
      params: Params$Resource$Managedfolders$Get,
      callback: BodyResponseCallback<Schema$ManagedFolder>
    ): void;
    get(callback: BodyResponseCallback<Schema$ManagedFolder>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$Get
        | BodyResponseCallback<Schema$ManagedFolder>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedFolder>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedFolder>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ManagedFolder> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/managedFolders/{managedFolder}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'managedFolder'],
        pathParams: ['bucket', 'managedFolder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedFolder>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedFolder>(parameters);
      }
    }

    /**
     * Returns an IAM policy for the specified managed folder.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Managedfolders$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Managedfolders$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Managedfolders$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Managedfolders$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Managedfolders$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/managedFolders/{managedFolder}/iam'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'managedFolder'],
        pathParams: ['bucket', 'managedFolder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Creates a new managed folder.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Managedfolders$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Managedfolders$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedFolder>;
    insert(
      params: Params$Resource$Managedfolders$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Managedfolders$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedFolder>,
      callback: BodyResponseCallback<Schema$ManagedFolder>
    ): void;
    insert(
      params: Params$Resource$Managedfolders$Insert,
      callback: BodyResponseCallback<Schema$ManagedFolder>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ManagedFolder>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$Insert
        | BodyResponseCallback<Schema$ManagedFolder>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedFolder>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedFolder>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ManagedFolder> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/managedFolders').replace(
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
        createAPIRequest<Schema$ManagedFolder>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedFolder>(parameters);
      }
    }

    /**
     * Lists managed folders in the given bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Managedfolders$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Managedfolders$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedFolders>;
    list(
      params: Params$Resource$Managedfolders$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Managedfolders$List,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedFolders>,
      callback: BodyResponseCallback<Schema$ManagedFolders>
    ): void;
    list(
      params: Params$Resource$Managedfolders$List,
      callback: BodyResponseCallback<Schema$ManagedFolders>
    ): void;
    list(callback: BodyResponseCallback<Schema$ManagedFolders>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$List
        | BodyResponseCallback<Schema$ManagedFolders>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedFolders>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedFolders>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ManagedFolders> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/managedFolders').replace(
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
        createAPIRequest<Schema$ManagedFolders>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedFolders>(parameters);
      }
    }

    /**
     * Updates an IAM policy for the specified managed folder.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Managedfolders$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Managedfolders$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Managedfolders$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Managedfolders$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Managedfolders$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/managedFolders/{managedFolder}/iam'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'managedFolder'],
        pathParams: ['bucket', 'managedFolder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Managedfolders$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Managedfolders$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Managedfolders$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Managedfolders$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Managedfolders$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Managedfolders$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedfolders$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedfolders$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'managedFolder', 'permissions'],
        pathParams: ['bucket', 'managedFolder'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Managedfolders$Delete
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;
    /**
     * If set, only deletes the managed folder if its metageneration matches this value.
     */
    ifMetagenerationMatch?: string;
    /**
     * If set, only deletes the managed folder if its metageneration does not match this value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * The managed folder name/path.
     */
    managedFolder?: string;
  }
  export interface Params$Resource$Managedfolders$Get
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;
    /**
     * Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * The managed folder name/path.
     */
    managedFolder?: string;
  }
  export interface Params$Resource$Managedfolders$Getiampolicy
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;
    /**
     * The managed folder name/path.
     */
    managedFolder?: string;
    /**
     * The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
     */
    optionsRequestedPolicyVersion?: number;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Managedfolders$Insert
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedFolder;
  }
  export interface Params$Resource$Managedfolders$List
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;
    /**
     * Maximum number of items to return in a single page of responses.
     */
    pageSize?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * The managed folder name/path prefix to filter the output list of results.
     */
    prefix?: string;
  }
  export interface Params$Resource$Managedfolders$Setiampolicy
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;
    /**
     * The managed folder name/path.
     */
    managedFolder?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Managedfolders$Testiampermissions
    extends StandardParameters {
    /**
     * Name of the bucket containing the managed folder.
     */
    bucket?: string;
    /**
     * The managed folder name/path.
     */
    managedFolder?: string;
    /**
     * Permissions to test.
     */
    permissions?: string[];
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }

  export class Resource$Notifications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes a notification subscription.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Notifications$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Notifications$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Notifications$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Notifications$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Notifications$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Notifications$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Notifications$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notifications$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/notificationConfigs/{notification}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'notification'],
        pathParams: ['bucket', 'notification'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * View a notification configuration.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Notifications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Notifications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Notification>;
    get(
      params: Params$Resource$Notifications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Notifications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Notification>,
      callback: BodyResponseCallback<Schema$Notification>
    ): void;
    get(
      params: Params$Resource$Notifications$Get,
      callback: BodyResponseCallback<Schema$Notification>
    ): void;
    get(callback: BodyResponseCallback<Schema$Notification>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Notifications$Get
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Notification> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Notifications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notifications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{bucket}/notificationConfigs/{notification}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'notification'],
        pathParams: ['bucket', 'notification'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Notification>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Notification>(parameters);
      }
    }

    /**
     * Creates a notification subscription for a given bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Notifications$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Notifications$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Notification>;
    insert(
      params: Params$Resource$Notifications$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Notifications$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Notification>,
      callback: BodyResponseCallback<Schema$Notification>
    ): void;
    insert(
      params: Params$Resource$Notifications$Insert,
      callback: BodyResponseCallback<Schema$Notification>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Notification>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Notifications$Insert
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Notification> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Notifications$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notifications$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/notificationConfigs'
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
        createAPIRequest<Schema$Notification>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Notification>(parameters);
      }
    }

    /**
     * Retrieves a list of notification subscriptions for a given bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Notifications$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Notifications$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Notifications>;
    list(
      params: Params$Resource$Notifications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Notifications$List,
      options: MethodOptions | BodyResponseCallback<Schema$Notifications>,
      callback: BodyResponseCallback<Schema$Notifications>
    ): void;
    list(
      params: Params$Resource$Notifications$List,
      callback: BodyResponseCallback<Schema$Notifications>
    ): void;
    list(callback: BodyResponseCallback<Schema$Notifications>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Notifications$List
        | BodyResponseCallback<Schema$Notifications>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Notifications>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Notifications>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Notifications> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Notifications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notifications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/notificationConfigs'
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
        createAPIRequest<Schema$Notifications>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Notifications>(parameters);
      }
    }
  }

  export interface Params$Resource$Notifications$Delete
    extends StandardParameters {
    /**
     * The parent bucket of the notification.
     */
    bucket?: string;
    /**
     * ID of the notification to delete.
     */
    notification?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Notifications$Get
    extends StandardParameters {
    /**
     * The parent bucket of the notification.
     */
    bucket?: string;
    /**
     * Notification ID
     */
    notification?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Notifications$Insert
    extends StandardParameters {
    /**
     * The parent bucket of the notification.
     */
    bucket?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Notification;
  }
  export interface Params$Resource$Notifications$List
    extends StandardParameters {
    /**
     * Name of a Google Cloud Storage bucket.
     */
    bucket?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }

  export class Resource$Objectaccesscontrols {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes the ACL entry for the specified entity on the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Objectaccesscontrols$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Objectaccesscontrols$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Objectaccesscontrols$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}'
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns the ACL entry for the specified entity on the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Objectaccesscontrols$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Objectaccesscontrols$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    get(
      params: Params$Resource$Objectaccesscontrols$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}'
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * Creates a new ACL entry on the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Objectaccesscontrols$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Objectaccesscontrols$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    insert(
      params: Params$Resource$Objectaccesscontrols$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * Retrieves ACL entries on the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Objectaccesscontrols$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Objectaccesscontrols$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControls>;
    list(
      params: Params$Resource$Objectaccesscontrols$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControls>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControls>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControls>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControls>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl').replace(
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
        createAPIRequest<Schema$ObjectAccessControls>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControls>(parameters);
      }
    }

    /**
     * Patches an ACL entry on the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Objectaccesscontrols$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Objectaccesscontrols$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    patch(
      params: Params$Resource$Objectaccesscontrols$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}'
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }

    /**
     * Updates an ACL entry on the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Objectaccesscontrols$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Objectaccesscontrols$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ObjectAccessControl>;
    update(
      params: Params$Resource$Objectaccesscontrols$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ObjectAccessControl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ObjectAccessControl>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/o/{object}/acl/{entity}'
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
        createAPIRequest<Schema$ObjectAccessControl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ObjectAccessControl>(parameters);
      }
    }
  }

  export interface Params$Resource$Objectaccesscontrols$Delete
    extends StandardParameters {
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objectaccesscontrols$Get
    extends StandardParameters {
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objectaccesscontrols$Insert
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Objectaccesscontrols$List
    extends StandardParameters {
    /**
     * Name of a bucket.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objectaccesscontrols$Patch
    extends StandardParameters {
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObjectAccessControl;
  }
  export interface Params$Resource$Objectaccesscontrols$Update
    extends StandardParameters {
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

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
     * Initiates a long-running bulk restore operation on the specified bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    bulkRestore(
      params: Params$Resource$Objects$Bulkrestore,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bulkRestore(
      params?: Params$Resource$Objects$Bulkrestore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    bulkRestore(
      params: Params$Resource$Objects$Bulkrestore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bulkRestore(
      params: Params$Resource$Objects$Bulkrestore,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkRestore(
      params: Params$Resource$Objects$Bulkrestore,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkRestore(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkRestore(
      paramsOrCallback?:
        | Params$Resource$Objects$Bulkrestore
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objects$Bulkrestore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Bulkrestore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/bulkRestore').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Concatenates a list of existing objects into a new object in the same bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    compose(
      params: Params$Resource$Objects$Compose,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    compose(
      params?: Params$Resource$Objects$Compose,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    compose(
      params: Params$Resource$Objects$Compose,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{destinationBucket}/o/{destinationObject}/compose'
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
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Copies a source object to a destination object. Optionally overrides metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    copy(
      params: Params$Resource$Objects$Copy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    copy(
      params?: Params$Resource$Objects$Copy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    copy(
      params: Params$Resource$Objects$Copy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}'
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
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Objects$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Objects$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Objects$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}').replace(
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves an object or its metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Objects$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Objects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    get(
      params: Params$Resource$Objects$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}').replace(
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
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Returns an IAM policy for the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Objects$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Objects$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Objects$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Objects$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Objects$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Objects$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objects$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Stores a new object and metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Objects$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Objects$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    insert(
      params: Params$Resource$Objects$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/storage/v1/b/{bucket}/o').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Retrieves a list of objects matching the criteria.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Objects$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Objects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Objects>;
    list(
      params: Params$Resource$Objects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Objects>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Objects>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Objects>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Objects> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o').replace(
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
        createAPIRequest<Schema$Objects>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Objects>(parameters);
      }
    }

    /**
     * Patches an object's metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Objects$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Objects$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    patch(
      params: Params$Resource$Objects$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}').replace(
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
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Restores a soft-deleted object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restore(
      params: Params$Resource$Objects$Restore,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restore(
      params?: Params$Resource$Objects$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    restore(
      params: Params$Resource$Objects$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Objects$Restore,
      options: MethodOptions | BodyResponseCallback<Schema$Object>,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    restore(
      params: Params$Resource$Objects$Restore,
      callback: BodyResponseCallback<Schema$Object>
    ): void;
    restore(callback: BodyResponseCallback<Schema$Object>): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Objects$Restore
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/o/{object}/restore'
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
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Rewrites a source object to a destination object. Optionally overrides metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rewrite(
      params: Params$Resource$Objects$Rewrite,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rewrite(
      params?: Params$Resource$Objects$Rewrite,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RewriteResponse>;
    rewrite(
      params: Params$Resource$Objects$Rewrite,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rewrite(
      params: Params$Resource$Objects$Rewrite,
      options: MethodOptions | BodyResponseCallback<Schema$RewriteResponse>,
      callback: BodyResponseCallback<Schema$RewriteResponse>
    ): void;
    rewrite(
      params: Params$Resource$Objects$Rewrite,
      callback: BodyResponseCallback<Schema$RewriteResponse>
    ): void;
    rewrite(callback: BodyResponseCallback<Schema$RewriteResponse>): void;
    rewrite(
      paramsOrCallback?:
        | Params$Resource$Objects$Rewrite
        | BodyResponseCallback<Schema$RewriteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RewriteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RewriteResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RewriteResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Objects$Rewrite;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Rewrite;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/storage/v1/b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}'
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
        createAPIRequest<Schema$RewriteResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RewriteResponse>(parameters);
      }
    }

    /**
     * Updates an IAM policy for the specified object.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Objects$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Objects$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Objects$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Objects$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Objects$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Objects$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objects$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Tests a set of permissions on the given object to see which, if any, are held by the caller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Objects$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Objects$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Objects$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Objects$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Objects$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Objects$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Objects$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Objects$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/o/{object}/iam/testPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'object', 'permissions'],
        pathParams: ['bucket', 'object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * Updates an object's metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Objects$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Objects$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Object>;
    update(
      params: Params$Resource$Objects$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Object>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Object> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/{object}').replace(
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
        createAPIRequest<Schema$Object>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Object>(parameters);
      }
    }

    /**
     * Watch for changes on all objects in a bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    watchAll(
      params: Params$Resource$Objects$Watchall,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    watchAll(
      params?: Params$Resource$Objects$Watchall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watchAll(
      params: Params$Resource$Objects$Watchall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Channel> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/o/watch').replace(
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Objects$Bulkrestore
    extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BulkRestoreObjectsRequest;
  }
  export interface Params$Resource$Objects$Compose extends StandardParameters {
    /**
     * Name of the bucket containing the source objects. The destination object is stored in this bucket.
     */
    destinationBucket?: string;
    /**
     * Name of the new object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    destinationObject?: string;
    /**
     * Apply a predefined set of access controls to the destination object.
     */
    destinationPredefinedAcl?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     */
    kmsKeyName?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ComposeRequest;
  }
  export interface Params$Resource$Objects$Copy extends StandardParameters {
    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    destinationBucket?: string;
    /**
     * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     */
    destinationKmsKeyName?: string;
    /**
     * Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     */
    destinationObject?: string;
    /**
     * Apply a predefined set of access controls to the destination object.
     */
    destinationPredefinedAcl?: string;
    /**
     * Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Makes the operation conditional on whether the source object's current generation matches the given value.
     */
    ifSourceGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current generation does not match the given value.
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
     * Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    sourceObject?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
  export interface Params$Resource$Objects$Delete extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objects$Get extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: string;
    /**
     * If true, only soft-deleted object versions will be listed. The default is false. For more information, see Soft Delete.
     */
    softDeleted?: boolean;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objects$Getiampolicy
    extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objects$Insert extends StandardParameters {
    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     */
    bucket?: string;
    /**
     * If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
     */
    contentEncoding?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     */
    kmsKeyName?: string;
    /**
     * Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    name?: string;
    /**
     * Apply a predefined set of access controls to this object.
     */
    predefinedAcl?: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

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
     * Name of the bucket in which to look for objects.
     */
    bucket?: string;
    /**
     * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     */
    delimiter?: string;
    /**
     * Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    endOffset?: string;
    /**
     * Only applicable if delimiter is set to '/'. If true, will also include folders and managed folders (besides objects) in the returned prefixes.
     */
    includeFoldersAsPrefixes?: boolean;
    /**
     * If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     */
    includeTrailingDelimiter?: boolean;
    /**
     * Filter results to objects and prefixes that match this glob pattern.
     */
    matchGlob?: string;
    /**
     * Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
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
     * If true, only soft-deleted object versions will be listed. The default is false. For more information, see Soft Delete.
     */
    softDeleted?: boolean;
    /**
     * Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    startOffset?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
    /**
     * If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
     */
    versions?: boolean;
  }
  export interface Params$Resource$Objects$Patch extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked.
     */
    overrideUnlockedRetention?: boolean;
    /**
     * Apply a predefined set of access controls to this object.
     */
    predefinedAcl?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request, for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
  export interface Params$Resource$Objects$Restore extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If true, copies the source object's ACL; otherwise, uses the bucket's default object ACL. The default is false.
     */
    copySourceAcl?: boolean;
    /**
     * Selects a specific revision of this object.
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's one live generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether none of the object's live generations match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's one live metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether none of the object's live metagenerations match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
     */
    object?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
  export interface Params$Resource$Objects$Rewrite extends StandardParameters {
    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     */
    destinationBucket?: string;
    /**
     * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     */
    destinationKmsKeyName?: string;
    /**
     * Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    destinationObject?: string;
    /**
     * Apply a predefined set of access controls to the destination object.
     */
    destinationPredefinedAcl?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Makes the operation conditional on whether the source object's current generation matches the given value.
     */
    ifSourceGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current generation does not match the given value.
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
     * The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
     */
    maxBytesRewrittenPerCall?: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     */
    projection?: string;
    /**
     * Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
     */
    rewriteToken?: string;
    /**
     * Name of the bucket in which to find the source object.
     */
    sourceBucket?: string;
    /**
     * If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     */
    sourceGeneration?: string;
    /**
     * Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    sourceObject?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
  export interface Params$Resource$Objects$Setiampolicy
    extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Objects$Testiampermissions
    extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * Permissions to test.
     */
    permissions?: string[];
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
  }
  export interface Params$Resource$Objects$Update extends StandardParameters {
    /**
     * Name of the bucket in which the object resides.
     */
    bucket?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
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
     * Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     */
    object?: string;
    /**
     * Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked.
     */
    overrideUnlockedRetention?: boolean;
    /**
     * Apply a predefined set of access controls to this object.
     */
    predefinedAcl?: string;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Object;
  }
  export interface Params$Resource$Objects$Watchall extends StandardParameters {
    /**
     * Name of the bucket in which to look for objects.
     */
    bucket?: string;
    /**
     * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     */
    delimiter?: string;
    /**
     * Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    endOffset?: string;
    /**
     * If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     */
    includeTrailingDelimiter?: boolean;
    /**
     * Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
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
     * Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     */
    startOffset?: string;
    /**
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
    /**
     * If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
     */
    versions?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/operations/{operationId}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'operationId'],
        pathParams: ['bucket', 'operationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/b/{bucket}/operations/{operationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['bucket', 'operationId'],
        pathParams: ['bucket', 'operationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/storage/v1/b/{bucket}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * The parent bucket of the operation resource.
     */
    bucket?: string;
    /**
     * The ID of the operation resource.
     */
    operationId?: string;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The parent bucket of the operation resource.
     */
    bucket?: string;
    /**
     * The ID of the operation resource.
     */
    operationId?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * Name of the bucket in which to look for operations.
     */
    bucket?: string;
    /**
     * A filter to narrow down results to a preferred subset. The filtering language is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * Maximum number of items to return in a single page of responses. Fewer total results may be returned than requested. The service uses this parameter or 100 items, whichever is smaller.
     */
    pageSize?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    hmacKeys: Resource$Projects$Hmackeys;
    serviceAccount: Resource$Projects$Serviceaccount;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.hmacKeys = new Resource$Projects$Hmackeys(this.context);
      this.serviceAccount = new Resource$Projects$Serviceaccount(this.context);
    }
  }

  export class Resource$Projects$Hmackeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new HMAC key for the specified service account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Hmackeys$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Hmackeys$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HmacKey>;
    create(
      params: Params$Resource$Projects$Hmackeys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Hmackeys$Create,
      options: MethodOptions | BodyResponseCallback<Schema$HmacKey>,
      callback: BodyResponseCallback<Schema$HmacKey>
    ): void;
    create(
      params: Params$Resource$Projects$Hmackeys$Create,
      callback: BodyResponseCallback<Schema$HmacKey>
    ): void;
    create(callback: BodyResponseCallback<Schema$HmacKey>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Hmackeys$Create
        | BodyResponseCallback<Schema$HmacKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HmacKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HmacKey>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HmacKey> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Hmackeys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Hmackeys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/projects/{projectId}/hmacKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'serviceAccountEmail'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HmacKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HmacKey>(parameters);
      }
    }

    /**
     * Deletes an HMAC key.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Hmackeys$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Hmackeys$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Projects$Hmackeys$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Hmackeys$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Projects$Hmackeys$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Hmackeys$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Hmackeys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Hmackeys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/projects/{projectId}/hmacKeys/{accessId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'accessId'],
        pathParams: ['accessId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves an HMAC key's metadata
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Hmackeys$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Hmackeys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HmacKeyMetadata>;
    get(
      params: Params$Resource$Projects$Hmackeys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Hmackeys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$HmacKeyMetadata>,
      callback: BodyResponseCallback<Schema$HmacKeyMetadata>
    ): void;
    get(
      params: Params$Resource$Projects$Hmackeys$Get,
      callback: BodyResponseCallback<Schema$HmacKeyMetadata>
    ): void;
    get(callback: BodyResponseCallback<Schema$HmacKeyMetadata>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Hmackeys$Get
        | BodyResponseCallback<Schema$HmacKeyMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HmacKeyMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HmacKeyMetadata>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HmacKeyMetadata> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Hmackeys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Hmackeys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/projects/{projectId}/hmacKeys/{accessId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'accessId'],
        pathParams: ['accessId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HmacKeyMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HmacKeyMetadata>(parameters);
      }
    }

    /**
     * Retrieves a list of HMAC keys matching the criteria.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Hmackeys$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Hmackeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HmacKeysMetadata>;
    list(
      params: Params$Resource$Projects$Hmackeys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Hmackeys$List,
      options: MethodOptions | BodyResponseCallback<Schema$HmacKeysMetadata>,
      callback: BodyResponseCallback<Schema$HmacKeysMetadata>
    ): void;
    list(
      params: Params$Resource$Projects$Hmackeys$List,
      callback: BodyResponseCallback<Schema$HmacKeysMetadata>
    ): void;
    list(callback: BodyResponseCallback<Schema$HmacKeysMetadata>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Hmackeys$List
        | BodyResponseCallback<Schema$HmacKeysMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HmacKeysMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HmacKeysMetadata>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HmacKeysMetadata> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Hmackeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Hmackeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/projects/{projectId}/hmacKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HmacKeysMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HmacKeysMetadata>(parameters);
      }
    }

    /**
     * Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Projects$Hmackeys$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Hmackeys$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HmacKeyMetadata>;
    update(
      params: Params$Resource$Projects$Hmackeys$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Hmackeys$Update,
      options: MethodOptions | BodyResponseCallback<Schema$HmacKeyMetadata>,
      callback: BodyResponseCallback<Schema$HmacKeyMetadata>
    ): void;
    update(
      params: Params$Resource$Projects$Hmackeys$Update,
      callback: BodyResponseCallback<Schema$HmacKeyMetadata>
    ): void;
    update(callback: BodyResponseCallback<Schema$HmacKeyMetadata>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Hmackeys$Update
        | BodyResponseCallback<Schema$HmacKeyMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HmacKeyMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HmacKeyMetadata>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HmacKeyMetadata> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Hmackeys$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Hmackeys$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/projects/{projectId}/hmacKeys/{accessId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'accessId'],
        pathParams: ['accessId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HmacKeyMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HmacKeyMetadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Hmackeys$Create
    extends StandardParameters {
    /**
     * Project ID owning the service account.
     */
    projectId?: string;
    /**
     * Email address of the service account.
     */
    serviceAccountEmail?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
  }
  export interface Params$Resource$Projects$Hmackeys$Delete
    extends StandardParameters {
    /**
     * Name of the HMAC key to be deleted.
     */
    accessId?: string;
    /**
     * Project ID owning the requested key
     */
    projectId?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
  }
  export interface Params$Resource$Projects$Hmackeys$Get
    extends StandardParameters {
    /**
     * Name of the HMAC key.
     */
    accessId?: string;
    /**
     * Project ID owning the service account of the requested key.
     */
    projectId?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
  }
  export interface Params$Resource$Projects$Hmackeys$List
    extends StandardParameters {
    /**
     * Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Name of the project in which to look for HMAC keys.
     */
    projectId?: string;
    /**
     * If present, only keys for the given service account are returned.
     */
    serviceAccountEmail?: string;
    /**
     * Whether or not to show keys in the DELETED state.
     */
    showDeletedKeys?: boolean;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
  }
  export interface Params$Resource$Projects$Hmackeys$Update
    extends StandardParameters {
    /**
     * Name of the HMAC key being updated.
     */
    accessId?: string;
    /**
     * Project ID owning the service account of the updated key.
     */
    projectId?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HmacKeyMetadata;
  }

  export class Resource$Projects$Serviceaccount {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the email address of this project's Google Cloud Storage service account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Serviceaccount$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Serviceaccount$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccount>;
    get(
      params: Params$Resource$Projects$Serviceaccount$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Serviceaccount$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccount>,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    get(
      params: Params$Resource$Projects$Serviceaccount$Get,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    get(callback: BodyResponseCallback<Schema$ServiceAccount>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccount$Get
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServiceAccount> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccount$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccount$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://storage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/storage/v1/projects/{projectId}/serviceAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccount>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Serviceaccount$Get
    extends StandardParameters {
    /**
     * Project ID
     */
    projectId?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
  }
}
