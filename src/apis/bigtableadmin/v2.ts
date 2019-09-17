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

export namespace bigtableadmin_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * const bigtableadmin = google.bigtableadmin('v2');
   *
   * @namespace bigtableadmin
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Bigtableadmin
   */
  export class Bigtableadmin {
    context: APIRequestContext;
    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
   */
  export interface Schema$AppProfile {
    /**
     * Optional long form description of the use case for this AppProfile.
     */
    description?: string | null;
    /**
     * Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.
     */
    etag?: string | null;
    /**
     * Use a multi-cluster routing policy.
     */
    multiClusterRoutingUseAny?: Schema$MultiClusterRoutingUseAny;
    /**
     * (`OutputOnly`) The unique name of the app profile. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;/appProfiles/_a-zA-Z0-9*`.
     */
    name?: string | null;
    /**
     * Use a single-cluster routing policy.
     */
    singleClusterRouting?: Schema$SingleClusterRouting;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
   */
  export interface Schema$CheckConsistencyRequest {
    /**
     * The token created using GenerateConsistencyToken for the Table.
     */
    consistencyToken?: string | null;
  }
  /**
   * Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
   */
  export interface Schema$CheckConsistencyResponse {
    /**
     * True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request.
     */
    consistent?: boolean | null;
  }
  /**
   * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
   */
  export interface Schema$Cluster {
    /**
     * (`CreationOnly`) The type of storage used by this cluster to serve its parent instance&#39;s tables, unless explicitly overridden.
     */
    defaultStorageType?: string | null;
    /**
     * (`CreationOnly`) The location where this cluster&#39;s nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/&lt;project&gt;/locations/&lt;zone&gt;`.
     */
    location?: string | null;
    /**
     * (`OutputOnly`) The unique name of the cluster. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;/clusters/a-z*`.
     */
    name?: string | null;
    /**
     * The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.
     */
    serveNodes?: number | null;
    /**
     * (`OutputOnly`) The current state of the cluster.
     */
    state?: string | null;
  }
  /**
   * The state of a table&#39;s data in a particular cluster.
   */
  export interface Schema$ClusterState {
    /**
     * Output only. The state of replication for the table in this cluster.
     */
    replicationState?: string | null;
  }
  /**
   * A set of columns within a table which share a common configuration.
   */
  export interface Schema$ColumnFamily {
    /**
     * Garbage collection rule specified as a protobuf. Must serialize to at most 500 bytes.  NOTE: Garbage collection executes opportunistically in the background, and so it&#39;s possible for reads to return a cell even if it matches the active GC expression for its family.
     */
    gcRule?: Schema$GcRule;
  }
  /**
   * The metadata for the Operation returned by CreateCluster.
   */
  export interface Schema$CreateClusterMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this CreateCluster operation.
     */
    originalRequest?: Schema$CreateClusterRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
    /**
     * Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects/&lt;project&gt;/instances/&lt;instance&gt;/tables/&lt;table&gt;`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one.  Values: information on how much of a table&#39;s data has been copied to the newly-created cluster so far.
     */
    tables?: {[key: string]: Schema$TableProgress} | null;
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
    clusterId?: string | null;
    /**
     * The unique name of the instance in which to create the new cluster. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;`.
     */
    parent?: string | null;
  }
  /**
   * The metadata for the Operation returned by CreateInstance.
   */
  export interface Schema$CreateInstanceMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this CreateInstance operation.
     */
    originalRequest?: Schema$CreateInstanceRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
  }
  /**
   * Request message for BigtableInstanceAdmin.CreateInstance.
   */
  export interface Schema$CreateInstanceRequest {
    /**
     * The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank. Currently, at most two clusters can be specified.
     */
    clusters?: {[key: string]: Schema$Cluster} | null;
    /**
     * The instance to create. Fields marked `OutputOnly` must be left blank.
     */
    instance?: Schema$Instance;
    /**
     * The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.
     */
    instanceId?: string | null;
    /**
     * The unique name of the project in which to create the new instance. Values are of the form `projects/&lt;project&gt;`.
     */
    parent?: string | null;
  }
  /**
   * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
   */
  export interface Schema$CreateTableRequest {
    /**
     * The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, `s1` and `s2`, three tablets will be created, spanning the key ranges: `[, s1), [s1, s2), [s2, )`.  Example:  * Row keys := `[&quot;a&quot;, &quot;apple&quot;, &quot;custom&quot;, &quot;customer_1&quot;, &quot;customer_2&quot;,`                `&quot;other&quot;, &quot;zz&quot;]` * initial_split_keys := `[&quot;apple&quot;, &quot;customer_1&quot;, &quot;customer_2&quot;, &quot;other&quot;]` * Key assignment:     - Tablet 1 `[, apple)                =&gt; {&quot;a&quot;}.`     - Tablet 2 `[apple, customer_1)      =&gt; {&quot;apple&quot;, &quot;custom&quot;}.`     - Tablet 3 `[customer_1, customer_2) =&gt; {&quot;customer_1&quot;}.`     - Tablet 4 `[customer_2, other)      =&gt; {&quot;customer_2&quot;}.`     - Tablet 5 `[other, )                =&gt; {&quot;other&quot;, &quot;zz&quot;}.`
     */
    initialSplits?: Schema$Split[];
    /**
     * The Table to create.
     */
    table?: Schema$Table;
    /**
     * The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `&lt;parent&gt;/tables/foobar`. Maximum 50 characters.
     */
    tableId?: string | null;
  }
  /**
   * Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
   */
  export interface Schema$DropRowRangeRequest {
    /**
     * Delete all rows in the table. Setting this to false is a no-op.
     */
    deleteAllDataFromTable?: boolean | null;
    /**
     * Delete all rows that start with this row key prefix. Prefix cannot be zero length.
     */
    rowKeyPrefix?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
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
   * Rule for determining which cells to delete during garbage collection.
   */
  export interface Schema$GcRule {
    /**
     * Delete cells that would be deleted by every nested rule.
     */
    intersection?: Schema$Intersection;
    /**
     * Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity.
     */
    maxAge?: string | null;
    /**
     * Delete all cells in a column except the most recent N.
     */
    maxNumVersions?: number | null;
    /**
     * Delete cells that would be deleted by any nested rule.
     */
    union?: Schema$Union;
  }
  /**
   * Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
   */
  export interface Schema$GenerateConsistencyTokenRequest {}
  /**
   * Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
   */
  export interface Schema$GenerateConsistencyTokenResponse {
    /**
     * The generated consistency token.
     */
    consistencyToken?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
   */
  export interface Schema$Instance {
    /**
     * The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.
     */
    displayName?: string | null;
    /**
     * Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer&#39;s organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics.  * Label keys must be between 1 and 63 characters long and must conform to   the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to   the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * (`OutputOnly`) The unique name of the instance. Values are of the form `projects/&lt;project&gt;/instances/a-z+[a-z0-9]`.
     */
    name?: string | null;
    /**
     * (`OutputOnly`) The current state of the instance.
     */
    state?: string | null;
    /**
     * The type of the instance. Defaults to `PRODUCTION`.
     */
    type?: string | null;
  }
  /**
   * A GcRule which deletes cells matching all of the given rules.
   */
  export interface Schema$Intersection {
    /**
     * Only delete cells which would be deleted by every element of `rules`.
     */
    rules?: Schema$GcRule[];
  }
  /**
   * Response message for BigtableInstanceAdmin.ListAppProfiles.
   */
  export interface Schema$ListAppProfilesResponse {
    /**
     * The list of requested app profiles.
     */
    appProfiles?: Schema$AppProfile[];
    /**
     * Locations from which AppProfile information could not be retrieved, due to an outage or some other transient condition. AppProfiles from these locations may be missing from `app_profiles`. Values are of the form `projects/&lt;project&gt;/locations/&lt;zone_id&gt;`
     */
    failedLocations?: string[] | null;
    /**
     * Set if not all app profiles could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for BigtableInstanceAdmin.ListClusters.
   */
  export interface Schema$ListClustersResponse {
    /**
     * The list of requested clusters.
     */
    clusters?: Schema$Cluster[];
    /**
     * Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from `clusters`, or may only have partial information returned. Values are of the form `projects/&lt;project&gt;/locations/&lt;zone_id&gt;`
     */
    failedLocations?: string[] | null;
    /**
     * DEPRECATED: This field is unused and ignored.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for BigtableInstanceAdmin.ListInstances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * Locations from which Instance information could not be retrieved, due to an outage or some other transient condition. Instances whose Clusters are all in one of the failed locations may be missing from `instances`, and Instances with at least one Cluster in a failed location may only have partial information returned. Values are of the form `projects/&lt;project&gt;/locations/&lt;zone_id&gt;`
     */
    failedLocations?: string[] | null;
    /**
     * The list of requested instances.
     */
    instances?: Schema$Instance[];
    /**
     * DEPRECATED: This field is unused and ignored.
     */
    nextPageToken?: string | null;
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
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
   */
  export interface Schema$ListTablesResponse {
    /**
     * Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The tables present in the requested instance.
     */
    tables?: Schema$Table[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * A create, update, or delete of a particular column family.
   */
  export interface Schema$Modification {
    /**
     * Create a new column family with the specified schema, or fail if one already exists with the given ID.
     */
    create?: Schema$ColumnFamily;
    /**
     * Drop (delete) the column family with the given ID, or fail if no such family exists.
     */
    drop?: boolean | null;
    /**
     * The ID of the column family to be modified.
     */
    id?: string | null;
    /**
     * Update an existing column family to the specified schema, or fail if no column family exists with the given ID.
     */
    update?: Schema$ColumnFamily;
  }
  /**
   * Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
   */
  export interface Schema$ModifyColumnFamiliesRequest {
    /**
     * Modifications to be atomically applied to the specified table&#39;s families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example).
     */
    modifications?: Schema$Modification[];
  }
  /**
   * Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.
   */
  export interface Schema$MultiClusterRoutingUseAny {}
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
    updateMask?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
     */
    updateMask?: string | null;
  }
  /**
   * Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
   */
  export interface Schema$SingleClusterRouting {
    /**
     * Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters.
     */
    allowTransactionalWrites?: boolean | null;
    /**
     * The cluster to which read/write requests should be routed.
     */
    clusterId?: string | null;
  }
  /**
   * An initial split point for a newly created table.
   */
  export interface Schema$Split {
    /**
     * Row key to use as an initial tablet boundary.
     */
    key?: string | null;
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
   * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
   */
  export interface Schema$Table {
    /**
     * Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `FULL`
     */
    clusterStates?: {[key: string]: Schema$ClusterState} | null;
    /**
     * (`CreationOnly`) The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `FULL`
     */
    columnFamilies?: {[key: string]: Schema$ColumnFamily} | null;
    /**
     * (`CreationOnly`) The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.
     */
    granularity?: string | null;
    /**
     * Output only. The unique name of the table. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `FULL`
     */
    name?: string | null;
  }
  /**
   * Progress info for copying a table&#39;s data to the new cluster.
   */
  export interface Schema$TableProgress {
    /**
     * Estimate of the number of bytes copied so far for this table. This will eventually reach &#39;estimated_size_bytes&#39; unless the table copy is CANCELLED.
     */
    estimatedCopiedBytes?: string | null;
    /**
     * Estimate of the size of the table to be copied.
     */
    estimatedSizeBytes?: string | null;
    state?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * A GcRule which deletes cells matching any of the given rules.
   */
  export interface Schema$Union {
    /**
     * Delete cells which would be deleted by any element of `rules`.
     */
    rules?: Schema$GcRule[];
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
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this UpdateCluster operation.
     */
    originalRequest?: Schema$Cluster;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
  }
  /**
   * The metadata for the Operation returned by UpdateInstance.
   */
  export interface Schema$UpdateInstanceMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this UpdateInstance operation.
     */
    originalRequest?: Schema$PartialUpdateInstanceRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    projects: Resource$Operations$Projects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.projects = new Resource$Operations$Projects(this.context);
    }

    /**
     * bigtableadmin.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias bigtableadmin.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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

      const rootUrl =
        options.rootUrl || 'https://bigtableadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias bigtableadmin.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias bigtableadmin.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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

      const rootUrl =
        options.rootUrl || 'https://bigtableadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Operations$Projects {
    context: APIRequestContext;
    operations: Resource$Operations$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Operations$Projects$Operations(
        this.context
      );
    }
  }

  export class Resource$Operations$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigtableadmin.operations.projects.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias bigtableadmin.operations.projects.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Operations$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Operations$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$Projects$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$Projects$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Projects$Operations$List;
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
            url: (rootUrl + '/v2/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Projects$Operations$List
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
     * The name of the operation's parent resource.
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

  export class Resource$Projects {
    context: APIRequestContext;
    instances: Resource$Projects$Instances;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Instances(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Instances {
    context: APIRequestContext;
    appProfiles: Resource$Projects$Instances$Appprofiles;
    clusters: Resource$Projects$Instances$Clusters;
    tables: Resource$Projects$Instances$Tables;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.appProfiles = new Resource$Projects$Instances$Appprofiles(
        this.context
      );
      this.clusters = new Resource$Projects$Instances$Clusters(this.context);
      this.tables = new Resource$Projects$Instances$Tables(this.context);
    }

    /**
     * bigtableadmin.projects.instances.create
     * @desc Create an instance within a project.
     * @alias bigtableadmin.projects.instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The unique name of the project in which to create the new instance. Values are of the form `projects/<project>`.
     * @param {().CreateInstanceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Instances$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Instances$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Create;
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
            url: (rootUrl + '/v2/{+parent}/instances').replace(
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
     * bigtableadmin.projects.instances.delete
     * @desc Delete an instance from a project.
     * @alias bigtableadmin.projects.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.get
     * @desc Gets information about an instance.
     * @alias bigtableadmin.projects.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the requested instance. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    get(
      params: Params$Resource$Projects$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Get,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Get
        | BodyResponseCallback<Schema$Instance>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>
    ): void | GaxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.getIamPolicy
     * @desc Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.
     * @alias bigtableadmin.projects.instances.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Instances$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Instances$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Instances$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Getiampolicy;
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
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.list
     * @desc Lists information about instances in a project.
     * @alias bigtableadmin.projects.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pageToken DEPRECATED: This field is unused and ignored.
     * @param {string} params.parent The unique name of the project for which a list of instances is requested. Values are of the form `projects/<project>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstancesResponse>;
    list(
      params: Params$Resource$Projects$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$List,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$List
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback?: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void | GaxiosPromise<Schema$ListInstancesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$List;
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
            url: (rootUrl + '/v2/{+parent}/instances').replace(
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
        createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.partialUpdateInstance
     * @desc Partially updates an instance within a project. This method can modify all fields of an Instance and is the preferred way to update an Instance.
     * @alias bigtableadmin.projects.instances.partialUpdateInstance
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name (`OutputOnly`) The unique name of the instance. Values are of the form `projects/<project>/instances/a-z+[a-z0-9]`.
     * @param {string=} params.updateMask The subset of Instance fields which should be replaced. Must be explicitly set.
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    partialUpdateInstance(
      params?: Params$Resource$Projects$Instances$Partialupdateinstance,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    partialUpdateInstance(
      params: Params$Resource$Projects$Instances$Partialupdateinstance,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    partialUpdateInstance(
      params: Params$Resource$Projects$Instances$Partialupdateinstance,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    partialUpdateInstance(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    partialUpdateInstance(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Partialupdateinstance
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Partialupdateinstance;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Partialupdateinstance;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigtableadmin.projects.instances.setIamPolicy
     * @desc Sets the access control policy on an instance resource. Replaces any existing policy.
     * @alias bigtableadmin.projects.instances.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Instances$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Instances$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Instances$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Setiampolicy;
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
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.testIamPermissions
     * @desc Returns permissions that the caller has on the specified instance resource.
     * @alias bigtableadmin.projects.instances.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Instances$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Instances$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Instances$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Testiampermissions;
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
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.update
     * @desc Updates an instance within a project. This method updates only the display name and type for an Instance. To update other Instance properties, such as labels, use PartialUpdateInstance.
     * @alias bigtableadmin.projects.instances.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name (`OutputOnly`) The unique name of the instance. Values are of the form `projects/<project>/instances/a-z+[a-z0-9]`.
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Instances$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    update(
      params: Params$Resource$Projects$Instances$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    update(
      params: Params$Resource$Projects$Instances$Update,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    update(callback: BodyResponseCallback<Schema$Instance>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Update
        | BodyResponseCallback<Schema$Instance>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>
    ): void | GaxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Update;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the project in which to create the new instance. Values are of the form `projects/<project>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateInstanceRequest;
  }
  export interface Params$Resource$Projects$Instances$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the requested instance. Values are of the form `projects/<project>/instances/<instance>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Instances$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * DEPRECATED: This field is unused and ignored.
     */
    pageToken?: string;
    /**
     * The unique name of the project for which a list of instances is requested. Values are of the form `projects/<project>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Instances$Partialupdateinstance
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * (`OutputOnly`) The unique name of the instance. Values are of the form `projects/<project>/instances/a-z+[a-z0-9]`.
     */
    name?: string;
    /**
     * The subset of Instance fields which should be replaced. Must be explicitly set.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Instances$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Instances$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Instances$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * (`OutputOnly`) The unique name of the instance. Values are of the form `projects/<project>/instances/a-z+[a-z0-9]`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }

  export class Resource$Projects$Instances$Appprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigtableadmin.projects.instances.appProfiles.create
     * @desc Creates an app profile within an instance.
     * @alias bigtableadmin.projects.instances.appProfiles.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.appProfileId The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`.
     * @param {boolean=} params.ignoreWarnings If true, ignore safety checks when creating the app profile.
     * @param {string} params.parent The unique name of the instance in which to create the new app profile. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {().AppProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Instances$Appprofiles$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppProfile>;
    create(
      params: Params$Resource$Projects$Instances$Appprofiles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AppProfile>,
      callback: BodyResponseCallback<Schema$AppProfile>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Appprofiles$Create,
      callback: BodyResponseCallback<Schema$AppProfile>
    ): void;
    create(callback: BodyResponseCallback<Schema$AppProfile>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Appprofiles$Create
        | BodyResponseCallback<Schema$AppProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AppProfile>,
      callback?: BodyResponseCallback<Schema$AppProfile>
    ): void | GaxiosPromise<Schema$AppProfile> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Appprofiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Appprofiles$Create;
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
            url: (rootUrl + '/v2/{+parent}/appProfiles').replace(
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
        createAPIRequest<Schema$AppProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppProfile>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.appProfiles.delete
     * @desc Deletes an app profile from an instance.
     * @alias bigtableadmin.projects.instances.appProfiles.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.ignoreWarnings If true, ignore safety checks when deleting the app profile.
     * @param {string} params.name The unique name of the app profile to be deleted. Values are of the form `projects/<project>/instances/<instance>/appProfiles/<app_profile>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Appprofiles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Appprofiles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Appprofiles$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Appprofiles$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Appprofiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Appprofiles$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.appProfiles.get
     * @desc Gets information about an app profile.
     * @alias bigtableadmin.projects.instances.appProfiles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the requested app profile. Values are of the form `projects/<project>/instances/<instance>/appProfiles/<app_profile>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Appprofiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppProfile>;
    get(
      params: Params$Resource$Projects$Instances$Appprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AppProfile>,
      callback: BodyResponseCallback<Schema$AppProfile>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Appprofiles$Get,
      callback: BodyResponseCallback<Schema$AppProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$AppProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Appprofiles$Get
        | BodyResponseCallback<Schema$AppProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AppProfile>,
      callback?: BodyResponseCallback<Schema$AppProfile>
    ): void | GaxiosPromise<Schema$AppProfile> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Appprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Appprofiles$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AppProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppProfile>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.appProfiles.list
     * @desc Lists information about app profiles in an instance.
     * @alias bigtableadmin.projects.instances.appProfiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of results per page.  A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error.  Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     * @param {string=} params.pageToken The value of `next_page_token` returned by a previous call.
     * @param {string} params.parent The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/<project>/instances/<instance>`. Use `<instance> = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instances$Appprofiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAppProfilesResponse>;
    list(
      params: Params$Resource$Projects$Instances$Appprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAppProfilesResponse>,
      callback: BodyResponseCallback<Schema$ListAppProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Appprofiles$List,
      callback: BodyResponseCallback<Schema$ListAppProfilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAppProfilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Appprofiles$List
        | BodyResponseCallback<Schema$ListAppProfilesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAppProfilesResponse>,
      callback?: BodyResponseCallback<Schema$ListAppProfilesResponse>
    ): void | GaxiosPromise<Schema$ListAppProfilesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Appprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Appprofiles$List;
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
            url: (rootUrl + '/v2/{+parent}/appProfiles').replace(
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
        createAPIRequest<Schema$ListAppProfilesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAppProfilesResponse>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.appProfiles.patch
     * @desc Updates an app profile within an instance.
     * @alias bigtableadmin.projects.instances.appProfiles.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.ignoreWarnings If true, ignore safety checks when updating the app profile.
     * @param {string} params.name (`OutputOnly`) The unique name of the app profile. Values are of the form `projects/<project>/instances/<instance>/appProfiles/_a-zA-Z0-9*`.
     * @param {string=} params.updateMask The subset of app profile fields which should be replaced. If unset, all fields will be replaced.
     * @param {().AppProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Instances$Appprofiles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Instances$Appprofiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Instances$Appprofiles$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Appprofiles$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Appprofiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Appprofiles$Patch;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
  }

  export interface Params$Resource$Projects$Instances$Appprofiles$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`.
     */
    appProfileId?: string;
    /**
     * If true, ignore safety checks when creating the app profile.
     */
    ignoreWarnings?: boolean;
    /**
     * The unique name of the instance in which to create the new app profile. Values are of the form `projects/<project>/instances/<instance>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppProfile;
  }
  export interface Params$Resource$Projects$Instances$Appprofiles$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true, ignore safety checks when deleting the app profile.
     */
    ignoreWarnings?: boolean;
    /**
     * The unique name of the app profile to be deleted. Values are of the form `projects/<project>/instances/<instance>/appProfiles/<app_profile>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Appprofiles$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the requested app profile. Values are of the form `projects/<project>/instances/<instance>/appProfiles/<app_profile>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Appprofiles$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results per page.  A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error.  Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     */
    pageSize?: number;
    /**
     * The value of `next_page_token` returned by a previous call.
     */
    pageToken?: string;
    /**
     * The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/<project>/instances/<instance>`. Use `<instance> = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Instances$Appprofiles$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true, ignore safety checks when updating the app profile.
     */
    ignoreWarnings?: boolean;
    /**
     * (`OutputOnly`) The unique name of the app profile. Values are of the form `projects/<project>/instances/<instance>/appProfiles/_a-zA-Z0-9*`.
     */
    name?: string;
    /**
     * The subset of app profile fields which should be replaced. If unset, all fields will be replaced.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppProfile;
  }

  export class Resource$Projects$Instances$Clusters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigtableadmin.projects.instances.clusters.create
     * @desc Creates a cluster within an instance.
     * @alias bigtableadmin.projects.instances.clusters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterId The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.
     * @param {string} params.parent The unique name of the instance in which to create the new cluster. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {().Cluster} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Instances$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Instances$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Clusters$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Clusters$Create;
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
            url: (rootUrl + '/v2/{+parent}/clusters').replace(
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
     * bigtableadmin.projects.instances.clusters.delete
     * @desc Deletes a cluster from an instance.
     * @alias bigtableadmin.projects.instances.clusters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the cluster to be deleted. Values are of the form `projects/<project>/instances/<instance>/clusters/<cluster>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Clusters$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Clusters$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.clusters.get
     * @desc Gets information about a cluster.
     * @alias bigtableadmin.projects.instances.clusters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the requested cluster. Values are of the form `projects/<project>/instances/<instance>/clusters/<cluster>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Instances$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>
    ): void | GaxiosPromise<Schema$Cluster> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Clusters$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Cluster>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.clusters.list
     * @desc Lists information about clusters in an instance.
     * @alias bigtableadmin.projects.instances.clusters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pageToken DEPRECATED: This field is unused and ignored.
     * @param {string} params.parent The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/<project>/instances/<instance>`. Use `<instance> = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instances$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Instances$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>
    ): void | GaxiosPromise<Schema$ListClustersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Clusters$List;
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
            url: (rootUrl + '/v2/{+parent}/clusters').replace(
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
        createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.clusters.update
     * @desc Updates a cluster within an instance.
     * @alias bigtableadmin.projects.instances.clusters.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name (`OutputOnly`) The unique name of the cluster. Values are of the form `projects/<project>/instances/<instance>/clusters/a-z*`.
     * @param {().Cluster} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Instances$Clusters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Instances$Clusters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Instances$Clusters$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Clusters$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Clusters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Clusters$Update;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
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
  }

  export interface Params$Resource$Projects$Instances$Clusters$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.
     */
    clusterId?: string;
    /**
     * The unique name of the instance in which to create the new cluster. Values are of the form `projects/<project>/instances/<instance>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Instances$Clusters$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the cluster to be deleted. Values are of the form `projects/<project>/instances/<instance>/clusters/<cluster>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Clusters$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the requested cluster. Values are of the form `projects/<project>/instances/<instance>/clusters/<cluster>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Clusters$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * DEPRECATED: This field is unused and ignored.
     */
    pageToken?: string;
    /**
     * The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/<project>/instances/<instance>`. Use `<instance> = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Instances$Clusters$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * (`OutputOnly`) The unique name of the cluster. Values are of the form `projects/<project>/instances/<instance>/clusters/a-z*`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }

  export class Resource$Projects$Instances$Tables {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigtableadmin.projects.instances.tables.checkConsistency
     * @desc Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
     * @alias bigtableadmin.projects.instances.tables.checkConsistency
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the Table for which to check replication consistency. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     * @param {().CheckConsistencyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkConsistency(
      params?: Params$Resource$Projects$Instances$Tables$Checkconsistency,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckConsistencyResponse>;
    checkConsistency(
      params: Params$Resource$Projects$Instances$Tables$Checkconsistency,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckConsistencyResponse>,
      callback: BodyResponseCallback<Schema$CheckConsistencyResponse>
    ): void;
    checkConsistency(
      params: Params$Resource$Projects$Instances$Tables$Checkconsistency,
      callback: BodyResponseCallback<Schema$CheckConsistencyResponse>
    ): void;
    checkConsistency(
      callback: BodyResponseCallback<Schema$CheckConsistencyResponse>
    ): void;
    checkConsistency(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Checkconsistency
        | BodyResponseCallback<Schema$CheckConsistencyResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckConsistencyResponse>,
      callback?: BodyResponseCallback<Schema$CheckConsistencyResponse>
    ): void | GaxiosPromise<Schema$CheckConsistencyResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Checkconsistency;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Checkconsistency;
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
            url: (rootUrl + '/v2/{+name}:checkConsistency').replace(
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
        createAPIRequest<Schema$CheckConsistencyResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CheckConsistencyResponse>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.create
     * @desc Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
     * @alias bigtableadmin.projects.instances.tables.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The unique name of the instance in which to create the table. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {().CreateTableRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Instances$Tables$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    create(
      params: Params$Resource$Projects$Instances$Tables$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Tables$Create,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    create(callback: BodyResponseCallback<Schema$Table>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Create
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Create;
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
            url: (rootUrl + '/v2/{+parent}/tables').replace(
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
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.delete
     * @desc Permanently deletes a specified table and all of its data.
     * @alias bigtableadmin.projects.instances.tables.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the table to be deleted. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Tables$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Tables$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Tables$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.dropRowRange
     * @desc Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
     * @alias bigtableadmin.projects.instances.tables.dropRowRange
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the table on which to drop a range of rows. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     * @param {().DropRowRangeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dropRowRange(
      params?: Params$Resource$Projects$Instances$Tables$Droprowrange,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    dropRowRange(
      params: Params$Resource$Projects$Instances$Tables$Droprowrange,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    dropRowRange(
      params: Params$Resource$Projects$Instances$Tables$Droprowrange,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    dropRowRange(callback: BodyResponseCallback<Schema$Empty>): void;
    dropRowRange(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Droprowrange
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Droprowrange;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Droprowrange;
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
            url: (rootUrl + '/v2/{+name}:dropRowRange').replace(
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.generateConsistencyToken
     * @desc Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
     * @alias bigtableadmin.projects.instances.tables.generateConsistencyToken
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the Table for which to create a consistency token. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     * @param {().GenerateConsistencyTokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateConsistencyToken(
      params?: Params$Resource$Projects$Instances$Tables$Generateconsistencytoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateConsistencyTokenResponse>;
    generateConsistencyToken(
      params: Params$Resource$Projects$Instances$Tables$Generateconsistencytoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>
    ): void;
    generateConsistencyToken(
      params: Params$Resource$Projects$Instances$Tables$Generateconsistencytoken,
      callback: BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>
    ): void;
    generateConsistencyToken(
      callback: BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>
    ): void;
    generateConsistencyToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Generateconsistencytoken
        | BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>,
      callback?: BodyResponseCallback<Schema$GenerateConsistencyTokenResponse>
    ): void | GaxiosPromise<Schema$GenerateConsistencyTokenResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Generateconsistencytoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Generateconsistencytoken;
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
            url: (rootUrl + '/v2/{+name}:generateConsistencyToken').replace(
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
        createAPIRequest<Schema$GenerateConsistencyTokenResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GenerateConsistencyTokenResponse>(
          parameters
        );
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.get
     * @desc Gets metadata information about the specified table.
     * @alias bigtableadmin.projects.instances.tables.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the requested table. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     * @param {string=} params.view The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Tables$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    get(
      params: Params$Resource$Projects$Instances$Tables$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Tables$Get,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(callback: BodyResponseCallback<Schema$Table>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Get
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.getIamPolicy
     * @desc Gets the access control policy for an instance resource. Returns an empty policy if an table exists but does not have a policy set.
     * @alias bigtableadmin.projects.instances.tables.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Instances$Tables$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Instances$Tables$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Instances$Tables$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Getiampolicy;
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
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.list
     * @desc Lists all tables served from a specified instance.
     * @alias bigtableadmin.projects.instances.tables.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of results per page.  A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error.  Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     * @param {string=} params.pageToken The value of `next_page_token` returned by a previous call.
     * @param {string} params.parent The unique name of the instance for which tables should be listed. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {string=} params.view The view to be applied to the returned tables' fields. Defaults to `NAME_ONLY` if unspecified; no others are currently supported.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instances$Tables$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTablesResponse>;
    list(
      params: Params$Resource$Projects$Instances$Tables$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTablesResponse>,
      callback: BodyResponseCallback<Schema$ListTablesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Tables$List,
      callback: BodyResponseCallback<Schema$ListTablesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTablesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$List
        | BodyResponseCallback<Schema$ListTablesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTablesResponse>,
      callback?: BodyResponseCallback<Schema$ListTablesResponse>
    ): void | GaxiosPromise<Schema$ListTablesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$List;
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
            url: (rootUrl + '/v2/{+parent}/tables').replace(
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
        createAPIRequest<Schema$ListTablesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTablesResponse>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.modifyColumnFamilies
     * @desc Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
     * @alias bigtableadmin.projects.instances.tables.modifyColumnFamilies
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique name of the table whose families should be modified. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     * @param {().ModifyColumnFamiliesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modifyColumnFamilies(
      params?: Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    modifyColumnFamilies(
      params: Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    modifyColumnFamilies(
      params: Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    modifyColumnFamilies(callback: BodyResponseCallback<Schema$Table>): void;
    modifyColumnFamilies(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies;
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
            url: (rootUrl + '/v2/{+name}:modifyColumnFamilies').replace(
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
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.setIamPolicy
     * @desc Sets the access control policy on a table resource. Replaces any existing policy.
     * @alias bigtableadmin.projects.instances.tables.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Instances$Tables$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Instances$Tables$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Instances$Tables$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Setiampolicy;
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
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * bigtableadmin.projects.instances.tables.testIamPermissions
     * @desc Returns permissions that the caller has on the specified table resource.
     * @alias bigtableadmin.projects.instances.tables.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Instances$Tables$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Instances$Tables$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Instances$Tables$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Tables$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Tables$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Tables$Testiampermissions;
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
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Tables$Checkconsistency
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the Table for which to check replication consistency. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckConsistencyRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the instance in which to create the table. Values are of the form `projects/<project>/instances/<instance>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateTableRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the table to be deleted. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Tables$Droprowrange
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the table on which to drop a range of rows. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DropRowRangeRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$Generateconsistencytoken
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the Table for which to create a consistency token. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateConsistencyTokenRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the requested table. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     */
    name?: string;
    /**
     * The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Instances$Tables$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results per page.  A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error.  Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     */
    pageSize?: number;
    /**
     * The value of `next_page_token` returned by a previous call.
     */
    pageToken?: string;
    /**
     * The unique name of the instance for which tables should be listed. Values are of the form `projects/<project>/instances/<instance>`.
     */
    parent?: string;
    /**
     * The view to be applied to the returned tables' fields. Defaults to `NAME_ONLY` if unspecified; no others are currently supported.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Instances$Tables$Modifycolumnfamilies
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique name of the table whose families should be modified. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyColumnFamiliesRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Instances$Tables$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
            url: (rootUrl + '/v2/{+name}/locations').replace(
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
