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

export namespace spanner_v1 {
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
   * Cloud Spanner API
   *
   * Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.
   *
   * @example
   * const {google} = require('googleapis');
   * const spanner = google.spanner('v1');
   *
   * @namespace spanner
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Spanner
   */
  export class Spanner {
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
   * The request for BatchCreateSessions.
   */
  export interface Schema$BatchCreateSessionsRequest {
    /**
     * Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary). The maximum allowed sessions are documented at https://goo.gl/hBUQED.
     */
    sessionCount?: number | null;
    /**
     * Parameters to be applied to each created session.
     */
    sessionTemplate?: Schema$Session;
  }
  /**
   * The response for BatchCreateSessions.
   */
  export interface Schema$BatchCreateSessionsResponse {
    /**
     * The freshly created sessions.
     */
    session?: Schema$Session[];
  }
  /**
   * The request for BeginTransaction.
   */
  export interface Schema$BeginTransactionRequest {
    /**
     * Required. Options for the new transaction.
     */
    options?: Schema$TransactionOptions;
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
   * Metadata associated with a parent-child relationship appearing in a PlanNode.
   */
  export interface Schema$ChildLink {
    /**
     * The node to which the link points.
     */
    childIndex?: number | null;
    /**
     * The type of the link. For example, in Hash Joins this could be used to distinguish between the build child and the probe child, or in the case of the child being an output variable, to represent the tag associated with the output variable.
     */
    type?: string | null;
    /**
     * Only present if the child node is SCALAR and corresponds to an output variable of the parent node. The field carries the name of the output variable. For example, a `TableScan` operator that reads rows from a table will have child links to the `SCALAR` nodes representing the output variables created for each column that is read by the operator. The corresponding `variable` fields will be set to the variable names assigned to the columns.
     */
    variable?: string | null;
  }
  /**
   * The request for Commit.
   */
  export interface Schema$CommitRequest {
    /**
     * The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.
     */
    mutations?: Schema$Mutation[];
    /**
     * Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.
     */
    singleUseTransaction?: Schema$TransactionOptions;
    /**
     * Commit a previously-started transaction.
     */
    transactionId?: string | null;
  }
  /**
   * The response for Commit.
   */
  export interface Schema$CommitResponse {
    /**
     * The Cloud Spanner timestamp at which the transaction committed.
     */
    commitTimestamp?: string | null;
  }
  /**
   * Metadata type for the operation returned by CreateDatabase.
   */
  export interface Schema$CreateDatabaseMetadata {
    /**
     * The database being created.
     */
    database?: string | null;
  }
  /**
   * The request for CreateDatabase.
   */
  export interface Schema$CreateDatabaseRequest {
    /**
     * Required. A `CREATE DATABASE` statement, which specifies the ID of the new database.  The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``).
     */
    createStatement?: string | null;
    /**
     * An optional list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.
     */
    extraStatements?: string[] | null;
  }
  /**
   * Metadata type for the operation returned by CreateInstance.
   */
  export interface Schema$CreateInstanceMetadata {
    /**
     * The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again.
     */
    cancelTime?: string | null;
    /**
     * The time at which this operation failed or was completed successfully.
     */
    endTime?: string | null;
    /**
     * The instance being created.
     */
    instance?: Schema$Instance;
    /**
     * The time at which the CreateInstance request was received.
     */
    startTime?: string | null;
  }
  /**
   * The request for CreateInstance.
   */
  export interface Schema$CreateInstanceRequest {
    /**
     * Required. The instance to create.  The name may be omitted, but if specified must be `&lt;parent&gt;/instances/&lt;instance_id&gt;`.
     */
    instance?: Schema$Instance;
    /**
     * Required. The ID of the instance to create.  Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length.
     */
    instanceId?: string | null;
  }
  /**
   * The request for CreateSession.
   */
  export interface Schema$CreateSessionRequest {
    /**
     * The session to create.
     */
    session?: Schema$Session;
  }
  /**
   * A Cloud Spanner database.
   */
  export interface Schema$Database {
    /**
     * Required. The name of the database. Values are of the form `projects/&lt;project&gt;/instances/&lt;instance&gt;/databases/&lt;database&gt;`, where `&lt;database&gt;` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.
     */
    name?: string | null;
    /**
     * Output only. The current database state.
     */
    state?: string | null;
  }
  /**
   * Arguments to delete operations.
   */
  export interface Schema$Delete {
    /**
     * Required. The primary keys of the rows within table to delete. Delete is idempotent. The transaction will succeed even if some or all rows do not exist.
     */
    keySet?: Schema$KeySet;
    /**
     * Required. The table whose rows will be deleted.
     */
    table?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * The request for ExecuteBatchDml.
   */
  export interface Schema$ExecuteBatchDmlRequest {
    /**
     * A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed.  The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.
     */
    seqno?: string | null;
    /**
     * The list of statements to execute in this batch. Statements are executed serially, such that the effects of statement `i` are visible to statement `i+1`. Each statement must be a DML statement. Execution stops at the first failed statement; the remaining statements are not executed.  Callers must provide at least one statement.
     */
    statements?: Schema$Statement[];
    /**
     * The transaction to use. Must be a read-write transaction.  To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.
     */
    transaction?: Schema$TransactionSelector;
  }
  /**
   * The response for ExecuteBatchDml. Contains a list of ResultSet messages, one for each DML statement that has successfully executed, in the same order as the statements in the request. If a statement fails, the status in the response body identifies the cause of the failure.  To check for DML statements that failed, use the following approach:  1. Check the status in the response message. The google.rpc.Code enum    value `OK` indicates that all statements were executed successfully. 2. If the status was not `OK`, check the number of result sets in the    response. If the response contains `N` ResultSet messages, then    statement `N+1` in the request failed.  Example 1:  * Request: 5 DML statements, all executed successfully. * Response: 5 ResultSet messages, with the status `OK`.  Example 2:  * Request: 5 DML statements. The third statement has a syntax error. * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`)   status. The number of ResultSet messages indicates that the third   statement failed, and the fourth and fifth statements were not executed.
   */
  export interface Schema$ExecuteBatchDmlResponse {
    /**
     * One ResultSet for each statement in the request that ran successfully, in the same order as the statements in the request. Each ResultSet does not contain any rows. The ResultSetStats in each ResultSet contain the number of rows modified by the statement.  Only the first ResultSet in the response contains valid ResultSetMetadata.
     */
    resultSets?: Schema$ResultSet[];
    /**
     * If all DML statements are executed successfully, the status is `OK`. Otherwise, the error status of the first failed statement.
     */
    status?: Schema$Status;
  }
  /**
   * The request for ExecuteSql and ExecuteStreamingSql.
   */
  export interface Schema$ExecuteSqlRequest {
    /**
     * Parameter names and values that bind to placeholders in the SQL string.  A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores.  Parameters can appear anywhere that a literal value is expected.  The same parameter name can be used more than once, for example:  `&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100&quot;`  It is an error to execute a SQL statement with unbound parameters.
     */
    params?: {[key: string]: any} | null;
    /**
     * It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value.  For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.  In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.
     */
    paramTypes?: {[key: string]: Schema$Type} | null;
    /**
     * If present, results will be restricted to the specified partition previously created using PartitionQuery().  There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token.
     */
    partitionToken?: string | null;
    /**
     * Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL.
     */
    queryMode?: string | null;
    /**
     * If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.
     */
    resumeToken?: string | null;
    /**
     * A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed.  The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.  Required for DML statements. Ignored for queries.
     */
    seqno?: string | null;
    /**
     * Required. The SQL string.
     */
    sql?: string | null;
    /**
     * The transaction to use.  For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.  Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported.  The caller must either supply an existing transaction ID or begin a new transaction.  Partitioned DML requires an existing Partitioned DML transaction ID.
     */
    transaction?: Schema$TransactionSelector;
  }
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
   * Message representing a single field of a struct.
   */
  export interface Schema$Field {
    /**
     * The name of the field. For reads, this is the column name. For SQL queries, it is the column alias (e.g., `&quot;Word&quot;` in the query `&quot;SELECT &#39;hello&#39; AS Word&quot;`), or the column name (e.g., `&quot;ColName&quot;` in the query `&quot;SELECT ColName FROM Table&quot;`). Some columns might have an empty name (e.g., !&quot;SELECT UPPER(ColName)&quot;`). Note that a query result can contain multiple fields with the same name.
     */
    name?: string | null;
    /**
     * The type of the field.
     */
    type?: Schema$Type;
  }
  /**
   * The response for GetDatabaseDdl.
   */
  export interface Schema$GetDatabaseDdlResponse {
    /**
     * A list of formatted DDL statements defining the schema of the database specified in the request.
     */
    statements?: string[] | null;
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
     * Optional. The policy format version to be returned. Acceptable values are 0 and 1. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * An isolated set of Cloud Spanner resources on which databases can be hosted.
   */
  export interface Schema$Instance {
    /**
     * Required. The name of the instance&#39;s configuration. Values are of the form `projects/&lt;project&gt;/instanceConfigs/&lt;configuration&gt;`. See also InstanceConfig and ListInstanceConfigs.
     */
    config?: string | null;
    /**
     * Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.
     */
    displayName?: string | null;
    /**
     * Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer&#39;s organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.).   * Label keys must be between 1 and 63 characters long and must conform to    the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.  * Label values must be between 0 and 63 characters long and must conform    to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.  * No more than 64 labels can be associated with a given resource.  See https://goo.gl/xmQnxf for more information on and examples of labels.  If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn&#39;t rely upon specific characters being disallowed.  For example, representing labels as the string:  name + &quot;_&quot; + value  would prove problematic if we were to allow &quot;_&quot; in a future release.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/&lt;project&gt;/instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.
     */
    name?: string | null;
    /**
     * Required. The number of nodes allocated to this instance. This may be zero in API responses for instances that are not yet in state `READY`.  See [the documentation](https://cloud.google.com/spanner/docs/instances#node_count) for more information about nodes.
     */
    nodeCount?: number | null;
    /**
     * Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.
     */
    state?: string | null;
  }
  /**
   * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
   */
  export interface Schema$InstanceConfig {
    /**
     * The name of this instance configuration as it appears in UIs.
     */
    displayName?: string | null;
    /**
     * A unique identifier for the instance configuration.  Values are of the form `projects/&lt;project&gt;/instanceConfigs/a-z*`
     */
    name?: string | null;
    /**
     * The geographic placement of nodes in this instance configuration and their replication properties.
     */
    replicas?: Schema$ReplicaInfo[];
  }
  /**
   * KeyRange represents a range of rows in a table or index.  A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key.  Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here.  For example, consider the following table definition:      CREATE TABLE UserEvents (       UserName STRING(MAX),       EventDate STRING(10)     ) PRIMARY KEY(UserName, EventDate);  The following keys name rows in this table:      &quot;Bob&quot;, &quot;2014-09-23&quot;  Since the `UserEvents` table&#39;s `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`.  Key ranges with multiple components are interpreted lexicographically by component using the table or index key&#39;s declared sort order. For example, the following range returns all events for user `&quot;Bob&quot;` that occurred in the year 2015:      &quot;start_closed&quot;: [&quot;Bob&quot;, &quot;2015-01-01&quot;]     &quot;end_closed&quot;: [&quot;Bob&quot;, &quot;2015-12-31&quot;]  Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included.  For example, the following range includes all events for `&quot;Bob&quot;` that occurred during and after the year 2000:      &quot;start_closed&quot;: [&quot;Bob&quot;, &quot;2000-01-01&quot;]     &quot;end_closed&quot;: [&quot;Bob&quot;]  The next example retrieves all events for `&quot;Bob&quot;`:      &quot;start_closed&quot;: [&quot;Bob&quot;]     &quot;end_closed&quot;: [&quot;Bob&quot;]  To retrieve events before the year 2000:      &quot;start_closed&quot;: [&quot;Bob&quot;]     &quot;end_open&quot;: [&quot;Bob&quot;, &quot;2000-01-01&quot;]  The following range includes all rows in the table:      &quot;start_closed&quot;: []     &quot;end_closed&quot;: []  This range returns all users whose `UserName` begins with any character from A to C:      &quot;start_closed&quot;: [&quot;A&quot;]     &quot;end_open&quot;: [&quot;D&quot;]  This range returns all users whose `UserName` begins with B:      &quot;start_closed&quot;: [&quot;B&quot;]     &quot;end_open&quot;: [&quot;C&quot;]  Key ranges honor column sort order. For example, suppose a table is defined as follows:      CREATE TABLE DescendingSortedTable {       Key INT64,       ...     ) PRIMARY KEY(Key DESC);  The following range retrieves all rows with key values between 1 and 100 inclusive:      &quot;start_closed&quot;: [&quot;100&quot;]     &quot;end_closed&quot;: [&quot;1&quot;]  Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema.
   */
  export interface Schema$KeyRange {
    /**
     * If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`.
     */
    endClosed?: any[] | null;
    /**
     * If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`.
     */
    endOpen?: any[] | null;
    /**
     * If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`.
     */
    startClosed?: any[] | null;
    /**
     * If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`.
     */
    startOpen?: any[] | null;
  }
  /**
   * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way.  If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once.
   */
  export interface Schema$KeySet {
    /**
     * For convenience `all` can be set to `true` to indicate that this `KeySet` matches all keys in the table or index. Note that any keys specified in `keys` or `ranges` are only yielded once.
     */
    all?: boolean | null;
    /**
     * A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used.  Individual key values are encoded as described here.
     */
    keys?: any[][] | null;
    /**
     * A list of key ranges. See KeyRange for more information about key range specifications.
     */
    ranges?: Schema$KeyRange[];
  }
  /**
   * The response for ListDatabases.
   */
  export interface Schema$ListDatabasesResponse {
    /**
     * Databases that matched the request.
     */
    databases?: Schema$Database[];
    /**
     * `next_page_token` can be sent in a subsequent ListDatabases call to fetch more of the matching databases.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for ListInstanceConfigs.
   */
  export interface Schema$ListInstanceConfigsResponse {
    /**
     * The list of requested instance configurations.
     */
    instanceConfigs?: Schema$InstanceConfig[];
    /**
     * `next_page_token` can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for ListInstances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * The list of requested instances.
     */
    instances?: Schema$Instance[];
    /**
     * `next_page_token` can be sent in a subsequent ListInstances call to fetch more of the matching instances.
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
   * The response for ListSessions.
   */
  export interface Schema$ListSessionsResponse {
    /**
     * `next_page_token` can be sent in a subsequent ListSessions call to fetch more of the matching sessions.
     */
    nextPageToken?: string | null;
    /**
     * The list of requested sessions.
     */
    sessions?: Schema$Session[];
  }
  /**
   * A modification to one or more Cloud Spanner rows.  Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
   */
  export interface Schema$Mutation {
    /**
     * Delete rows from a table. Succeeds whether or not the named rows were present.
     */
    delete?: Schema$Delete;
    /**
     * Insert new rows in a table. If any of the rows already exist, the write or transaction fails with error `ALREADY_EXISTS`.
     */
    insert?: Schema$Write;
    /**
     * Like insert, except that if the row already exists, then its column values are overwritten with the ones provided. Any column values not explicitly written are preserved.
     */
    insertOrUpdate?: Schema$Write;
    /**
     * Like insert, except that if the row already exists, it is deleted, and the column values provided are inserted instead. Unlike insert_or_update, this means any values not explicitly written become `NULL`.
     */
    replace?: Schema$Write;
    /**
     * Update existing rows in a table. If any of the rows does not already exist, the transaction fails with error `NOT_FOUND`.
     */
    update?: Schema$Write;
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
   * Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.
   */
  export interface Schema$PartialResultSet {
    /**
     * If true, then the final value in values is chunked, and must be combined with more values from subsequent `PartialResultSet`s to obtain a complete field value.
     */
    chunkedValue?: boolean | null;
    /**
     * Metadata about the result set, such as row type information. Only present in the first response.
     */
    metadata?: Schema$ResultSetMetadata;
    /**
     * Streaming calls might be interrupted for a variety of reasons, such as TCP connection loss. If this occurs, the stream of results can be resumed by re-sending the original request and including `resume_token`. Note that executing any other transaction in the same session invalidates the token.
     */
    resumeToken?: string | null;
    /**
     * Query plan and execution statistics for the statement that produced this streaming result set. These can be requested by setting ExecuteSqlRequest.query_mode and are sent only once with the last response in the stream. This field will also be present in the last response for DML statements.
     */
    stats?: Schema$ResultSetStats;
    /**
     * A streamed result set consists of a stream of values, which might be split into many `PartialResultSet` messages to accommodate large rows and/or large values. Every N complete values defines a row, where N is equal to the number of entries in metadata.row_type.fields.  Most values are encoded based on type as described here.  It is possible that the last value in values is &quot;chunked&quot;, meaning that the rest of the value is sent in subsequent `PartialResultSet`(s). This is denoted by the chunked_value field. Two or more chunked values can be merged to form a complete value as follows:    * `bool/number/null`: cannot be chunked   * `string`: concatenate the strings   * `list`: concatenate the lists. If the last element in a list is a     `string`, `list`, or `object`, merge it with the first element in     the next list by applying these rules recursively.   * `object`: concatenate the (field name, field value) pairs. If a     field name is duplicated, then apply these rules recursively     to merge the field values.  Some examples of merging:      # Strings are concatenated.     &quot;foo&quot;, &quot;bar&quot; =&gt; &quot;foobar&quot;      # Lists of non-strings are concatenated.     [2, 3], [4] =&gt; [2, 3, 4]      # Lists are concatenated, but the last and first elements are merged     # because they are strings.     [&quot;a&quot;, &quot;b&quot;], [&quot;c&quot;, &quot;d&quot;] =&gt; [&quot;a&quot;, &quot;bc&quot;, &quot;d&quot;]      # Lists are concatenated, but the last and first elements are merged     # because they are lists. Recursively, the last and first elements     # of the inner lists are merged because they are strings.     [&quot;a&quot;, [&quot;b&quot;, &quot;c&quot;]], [[&quot;d&quot;], &quot;e&quot;] =&gt; [&quot;a&quot;, [&quot;b&quot;, &quot;cd&quot;], &quot;e&quot;]      # Non-overlapping object fields are combined.     {&quot;a&quot;: &quot;1&quot;}, {&quot;b&quot;: &quot;2&quot;} =&gt; {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: 2&quot;}      # Overlapping object fields are merged.     {&quot;a&quot;: &quot;1&quot;}, {&quot;a&quot;: &quot;2&quot;} =&gt; {&quot;a&quot;: &quot;12&quot;}      # Examples of merging objects containing lists of strings.     {&quot;a&quot;: [&quot;1&quot;]}, {&quot;a&quot;: [&quot;2&quot;]} =&gt; {&quot;a&quot;: [&quot;12&quot;]}  For a more complete example, suppose a streaming SQL query is yielding a result set whose rows contain a single string field. The following `PartialResultSet`s might be yielded:      {       &quot;metadata&quot;: { ... }       &quot;values&quot;: [&quot;Hello&quot;, &quot;W&quot;]       &quot;chunked_value&quot;: true       &quot;resume_token&quot;: &quot;Af65...&quot;     }     {       &quot;values&quot;: [&quot;orl&quot;]       &quot;chunked_value&quot;: true       &quot;resume_token&quot;: &quot;Bqp2...&quot;     }     {       &quot;values&quot;: [&quot;d&quot;]       &quot;resume_token&quot;: &quot;Zx1B...&quot;     }  This sequence of `PartialResultSet`s encodes two rows, one containing the field value `&quot;Hello&quot;`, and a second containing the field value `&quot;World&quot; = &quot;W&quot; + &quot;orl&quot; + &quot;d&quot;`.
     */
    values?: any[] | null;
  }
  /**
   * Information returned for each partition returned in a PartitionResponse.
   */
  export interface Schema$Partition {
    /**
     * This token can be passed to Read, StreamingRead, ExecuteSql, or ExecuteStreamingSql requests to restrict the results to those identified by this partition token.
     */
    partitionToken?: string | null;
  }
  /**
   * Message type to initiate a Partitioned DML transaction.
   */
  export interface Schema$PartitionedDml {}
  /**
   * Options for a PartitionQueryRequest and PartitionReadRequest.
   */
  export interface Schema$PartitionOptions {
    /**
     * **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests.  The desired maximum number of partitions to return.  For example, this may be set to the number of workers available.  The default for this option is currently 10,000. The maximum value is currently 200,000.  This is only a hint.  The actual number of partitions returned may be smaller or larger than this maximum count request.
     */
    maxPartitions?: string | null;
    /**
     * **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests.  The desired data size for each partition generated.  The default for this option is currently 1 GiB.  This is only a hint. The actual size of each partition may be smaller or larger than this size request.
     */
    partitionSizeBytes?: string | null;
  }
  /**
   * The request for PartitionQuery
   */
  export interface Schema$PartitionQueryRequest {
    /**
     * Parameter names and values that bind to placeholders in the SQL string.  A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores.  Parameters can appear anywhere that a literal value is expected.  The same parameter name can be used more than once, for example:  `&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100&quot;`  It is an error to execute a SQL statement with unbound parameters.
     */
    params?: {[key: string]: any} | null;
    /**
     * It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value.  For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.  In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL query parameters. See the definition of Type for more information about SQL types.
     */
    paramTypes?: {[key: string]: Schema$Type} | null;
    /**
     * Additional options that affect how many partitions are created.
     */
    partitionOptions?: Schema$PartitionOptions;
    /**
     * The query request to generate partitions for. The request will fail if the query is not root partitionable. The query plan of a root partitionable query has a single distributed union operator. A distributed union operator conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results.  This must not contain DML commands, such as INSERT, UPDATE, or DELETE. Use ExecuteStreamingSql with a PartitionedDml transaction for large, partition-friendly DML operations.
     */
    sql?: string | null;
    /**
     * Read only snapshot transactions are supported, read/write and single use transactions are not.
     */
    transaction?: Schema$TransactionSelector;
  }
  /**
   * The request for PartitionRead
   */
  export interface Schema$PartitionReadRequest {
    /**
     * The columns of table to be returned for each row matching this request.
     */
    columns?: string[] | null;
    /**
     * If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.
     */
    index?: string | null;
    /**
     * Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index.  It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.
     */
    keySet?: Schema$KeySet;
    /**
     * Additional options that affect how many partitions are created.
     */
    partitionOptions?: Schema$PartitionOptions;
    /**
     * Required. The name of the table in the database to be read.
     */
    table?: string | null;
    /**
     * Read only snapshot transactions are supported, read/write and single use transactions are not.
     */
    transaction?: Schema$TransactionSelector;
  }
  /**
   * The response for PartitionQuery or PartitionRead
   */
  export interface Schema$PartitionResponse {
    /**
     * Partitions created by this request.
     */
    partitions?: Schema$Partition[];
    /**
     * Transaction created by this request.
     */
    transaction?: Schema$Transaction;
  }
  /**
   * Node information for nodes appearing in a QueryPlan.plan_nodes.
   */
  export interface Schema$PlanNode {
    /**
     * List of child node `index`es and their relationship to this parent.
     */
    childLinks?: Schema$ChildLink[];
    /**
     * The display name for the node.
     */
    displayName?: string | null;
    /**
     * The execution statistics associated with the node, contained in a group of key-value pairs. Only present if the plan was returned as a result of a profile query. For example, number of executions, number of rows/time per execution etc.
     */
    executionStats?: {[key: string]: any} | null;
    /**
     * The `PlanNode`&#39;s index in node list.
     */
    index?: number | null;
    /**
     * Used to determine the type of node. May be needed for visualizing different kinds of nodes differently. For example, If the node is a SCALAR node, it will have a condensed representation which can be used to directly embed a description of the node in its parent.
     */
    kind?: string | null;
    /**
     * Attributes relevant to the node contained in a group of key-value pairs. For example, a Parameter Reference node could have the following information in its metadata:      {       &quot;parameter_reference&quot;: &quot;param1&quot;,       &quot;parameter_type&quot;: &quot;array&quot;     }
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Condensed representation for SCALAR nodes.
     */
    shortRepresentation?: Schema$ShortRepresentation;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Deprecated.
     */
    version?: number | null;
  }
  /**
   * Contains an ordered list of nodes appearing in the query plan.
   */
  export interface Schema$QueryPlan {
    /**
     * The nodes in the query plan. Plan nodes are returned in pre-order starting with the plan root. Each PlanNode&#39;s `id` corresponds to its index in `plan_nodes`.
     */
    planNodes?: Schema$PlanNode[];
  }
  /**
   * Message type to initiate a read-only transaction.
   */
  export interface Schema$ReadOnly {
    /**
     * Executes all reads at a timestamp that is `exact_staleness` old. The timestamp is chosen soon after the read is started.  Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client&#39;s local clock is substantially skewed from Cloud Spanner commit timestamps.  Useful for reading at nearby replicas without the distributed timestamp negotiation overhead of `max_staleness`.
     */
    exactStaleness?: string | null;
    /**
     * Read data at a timestamp &gt;= `NOW - max_staleness` seconds. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client&#39;s local clock is substantially skewed from Cloud Spanner commit timestamps.  Useful for reading the freshest data available at a nearby replica, while bounding the possible staleness if the local replica has fallen behind.  Note that this option can only be used in single-use transactions.
     */
    maxStaleness?: string | null;
    /**
     * Executes all reads at a timestamp &gt;= `min_read_timestamp`.  This is useful for requesting fresher data than some previous read, or data that is fresh enough to observe the effects of some previously committed transaction whose timestamp is known.  Note that this option can only be used in single-use transactions.  A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: `&quot;2014-10-02T15:01:23.045123456Z&quot;`.
     */
    minReadTimestamp?: string | null;
    /**
     * Executes all reads at the given timestamp. Unlike other modes, reads at a specific timestamp are repeatable; the same read at the same timestamp always returns the same data. If the timestamp is in the future, the read will block until the specified timestamp, modulo the read&#39;s deadline.  Useful for large scale consistent reads such as mapreduces, or for coordinating many reads against a consistent snapshot of the data.  A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: `&quot;2014-10-02T15:01:23.045123456Z&quot;`.
     */
    readTimestamp?: string | null;
    /**
     * If true, the Cloud Spanner-selected read timestamp is included in the Transaction message that describes the transaction.
     */
    returnReadTimestamp?: boolean | null;
    /**
     * Read at a timestamp where all previously committed transactions are visible.
     */
    strong?: boolean | null;
  }
  /**
   * The request for Read and StreamingRead.
   */
  export interface Schema$ReadRequest {
    /**
     * The columns of table to be returned for each row matching this request.
     */
    columns?: string[] | null;
    /**
     * If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.
     */
    index?: string | null;
    /**
     * Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index.  If the partition_token field is empty, rows are yielded in table primary key order (if index is empty) or index key order (if index is non-empty).  If the partition_token field is not empty, rows will be yielded in an unspecified order.  It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.
     */
    keySet?: Schema$KeySet;
    /**
     * If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set.
     */
    limit?: string | null;
    /**
     * If present, results will be restricted to the specified partition previously created using PartitionRead().    There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token.
     */
    partitionToken?: string | null;
    /**
     * If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token.
     */
    resumeToken?: string | null;
    /**
     * Required. The name of the table in the database to be read.
     */
    table?: string | null;
    /**
     * The transaction to use. If none is provided, the default is a temporary read-only transaction with strong concurrency.
     */
    transaction?: Schema$TransactionSelector;
  }
  /**
   * Message type to initiate a read-write transaction. Currently this transaction type has no options.
   */
  export interface Schema$ReadWrite {}
  export interface Schema$ReplicaInfo {
    /**
     * If true, this location is designated as the default leader location where leader replicas are placed. See the [region types documentation](https://cloud.google.com/spanner/docs/instances#region_types) for more details.
     */
    defaultLeaderLocation?: boolean | null;
    /**
     * The location of the serving resources, e.g. &quot;us-central1&quot;.
     */
    location?: string | null;
    /**
     * The type of replica.
     */
    type?: string | null;
  }
  /**
   * Results from Read or ExecuteSql.
   */
  export interface Schema$ResultSet {
    /**
     * Metadata about the result set, such as row type information.
     */
    metadata?: Schema$ResultSetMetadata;
    /**
     * Each element in `rows` is a row whose format is defined by metadata.row_type. The ith element in each row matches the ith field in metadata.row_type. Elements are encoded based on type as described here.
     */
    rows?: any[][] | null;
    /**
     * Query plan and execution statistics for the SQL statement that produced this result set. These can be requested by setting ExecuteSqlRequest.query_mode. DML statements always produce stats containing the number of rows modified, unless executed using the ExecuteSqlRequest.QueryMode.PLAN ExecuteSqlRequest.query_mode. Other fields may or may not be populated, based on the ExecuteSqlRequest.query_mode.
     */
    stats?: Schema$ResultSetStats;
  }
  /**
   * Metadata about a ResultSet or PartialResultSet.
   */
  export interface Schema$ResultSetMetadata {
    /**
     * Indicates the field names and types for the rows in the result set.  For example, a SQL query like `&quot;SELECT UserId, UserName FROM Users&quot;` could return a `row_type` value like:      &quot;fields&quot;: [       { &quot;name&quot;: &quot;UserId&quot;, &quot;type&quot;: { &quot;code&quot;: &quot;INT64&quot; } },       { &quot;name&quot;: &quot;UserName&quot;, &quot;type&quot;: { &quot;code&quot;: &quot;STRING&quot; } },     ]
     */
    rowType?: Schema$StructType;
    /**
     * If the read or SQL query began a transaction as a side-effect, the information about the new transaction is yielded here.
     */
    transaction?: Schema$Transaction;
  }
  /**
   * Additional statistics about a ResultSet or PartialResultSet.
   */
  export interface Schema$ResultSetStats {
    /**
     * QueryPlan for the query associated with this result.
     */
    queryPlan?: Schema$QueryPlan;
    /**
     * Aggregated statistics from the execution of the query. Only present when the query is profiled. For example, a query could return the statistics as follows:      {       &quot;rows_returned&quot;: &quot;3&quot;,       &quot;elapsed_time&quot;: &quot;1.22 secs&quot;,       &quot;cpu_time&quot;: &quot;1.19 secs&quot;     }
     */
    queryStats?: {[key: string]: any} | null;
    /**
     * Standard DML returns an exact count of rows that were modified.
     */
    rowCountExact?: string | null;
    /**
     * Partitioned DML does not offer exactly-once semantics, so it returns a lower bound of the rows modified.
     */
    rowCountLowerBound?: string | null;
  }
  /**
   * The request for Rollback.
   */
  export interface Schema$RollbackRequest {
    /**
     * Required. The transaction to roll back.
     */
    transactionId?: string | null;
  }
  /**
   * A session in the Cloud Spanner API.
   */
  export interface Schema$Session {
    /**
     * Output only. The approximate timestamp when the session is last used. It is typically earlier than the actual last use time.
     */
    approximateLastUseTime?: string | null;
    /**
     * Output only. The timestamp when the session is created.
     */
    createTime?: string | null;
    /**
     * The labels for the session.   * Label keys must be between 1 and 63 characters long and must conform to    the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.  * Label values must be between 0 and 63 characters long and must conform    to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.  * No more than 64 labels can be associated with a given session.  See https://goo.gl/xmQnxf for more information on and examples of labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The name of the session. This is always system-assigned; values provided when creating a session are ignored.
     */
    name?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).
   */
  export interface Schema$ShortRepresentation {
    /**
     * A string representation of the expression subtree rooted at this node.
     */
    description?: string | null;
    /**
     * A mapping of (subquery variable name) -&gt; (subquery node id) for cases where the `description` string of this node references a `SCALAR` subquery contained in the expression subtree rooted at this node. The referenced `SCALAR` subquery may not necessarily be a direct child of this node.
     */
    subqueries?: {[key: string]: number} | null;
  }
  /**
   * A single DML statement.
   */
  export interface Schema$Statement {
    /**
     * Parameter names and values that bind to placeholders in the DML string.  A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores.  Parameters can appear anywhere that a literal value is expected.  The same parameter name can be used more than once, for example:  `&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100&quot;`  It is an error to execute a SQL statement with unbound parameters.
     */
    params?: {[key: string]: any} | null;
    /**
     * It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value.  For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.  In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.
     */
    paramTypes?: {[key: string]: Schema$Type} | null;
    /**
     * Required. The DML string.
     */
    sql?: string | null;
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
   * `StructType` defines the fields of a STRUCT type.
   */
  export interface Schema$StructType {
    /**
     * The list of fields that make up this struct. Order is significant, because values of this struct type are represented as lists, where the order of field values matches the order of fields in the StructType. In turn, the order of fields matches the order of columns in a read request, or the order of fields in the `SELECT` clause of a query.
     */
    fields?: Schema$Field[];
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * REQUIRED: The set of permissions to check for &#39;resource&#39;. Permissions with wildcards (such as &#39;*&#39;, &#39;spanner.*&#39;, &#39;spanner.instances.*&#39;) are not allowed.
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
   * A transaction.
   */
  export interface Schema$Transaction {
    /**
     * `id` may be used to identify the transaction in subsequent Read, ExecuteSql, Commit, or Rollback calls.  Single-use read-only transactions do not have IDs, because single-use transactions do not support multiple requests.
     */
    id?: string | null;
    /**
     * For snapshot read-only transactions, the read timestamp chosen for the transaction. Not returned by default: see TransactionOptions.ReadOnly.return_read_timestamp.  A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: `&quot;2014-10-02T15:01:23.045123456Z&quot;`.
     */
    readTimestamp?: string | null;
  }
  /**
   * # Transactions   Each session can have at most one active transaction at a time. After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction.  # Transaction Modes  Cloud Spanner supports three transaction modes:    1. Locking read-write. This type of transaction is the only way      to write data into Cloud Spanner. These transactions rely on      pessimistic locking and, if necessary, two-phase commit.      Locking read-write transactions may abort, requiring the      application to retry.    2. Snapshot read-only. This transaction type provides guaranteed      consistency across several reads, but does not allow      writes. Snapshot read-only transactions can be configured to      read at timestamps in the past. Snapshot read-only      transactions do not need to be committed.    3. Partitioned DML. This type of transaction is used to execute      a single Partitioned DML statement. Partitioned DML partitions      the key space and runs the DML statement over each partition      in parallel using separate, internal transactions that commit      independently. Partitioned DML transactions do not need to be      committed.  For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed.  Transactions may only read/write data in a single database. They may, however, read/write data in different tables within that database.  ## Locking Read-Write Transactions  Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent.  Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback.  Long periods of inactivity at the client may cause Cloud Spanner to release a transaction&#39;s locks and abort it.  Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction.  ### Semantics  Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner.  Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction&#39;s locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves.  ### Retrying Aborted Transactions  When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session&#39;s lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous.  Under some circumstances (e.g., many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of wall time spent retrying.  ### Idle Transactions  A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don&#39;t hold on to locks indefinitely. In that case, the commit will fail with error `ABORTED`.  If this behavior is undesirable, periodically executing a simple SQL query in the transaction (e.g., `SELECT 1`) prevents the transaction from becoming idle.  ## Snapshot Read-Only Transactions  Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes.  Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions.  Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice.  Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so).  To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp.  The types of timestamp bound are:    - Strong (the default).   - Bounded staleness.   - Exact staleness.  If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transaction, because they are able to execute far from the leader replica.  Each type of timestamp bound is discussed in detail below.  ### Strong  Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction.  Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp.  See TransactionOptions.ReadOnly.strong.  ### Exact Staleness  These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp &lt;= the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps &lt;= the read timestamp have finished.  The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time.  These modes do not require a &quot;negotiation phase&quot; to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results.  See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness.  ### Bounded Staleness  Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking.  All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results.  Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp.  As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica.  Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions.  See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp.  ### Old Read Timestamps and Garbage Collection  Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as &quot;version GC&quot;. By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`.  ## Partitioned DML Transactions  Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions.  Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another.  To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time.  That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions.   - The DML statement must be fully-partitionable. Specifically, the statement    must be expressible as the union of many statements which each access only    a single row of the table.   - The statement is not applied atomically to all rows of the table. Rather,    the statement is applied atomically to partitions of the table, in    independent transactions. Secondary index rows are updated atomically    with the base table rows.   - Partitioned DML does not guarantee exactly-once execution semantics    against a partition. The statement will be applied at least once to each    partition. It is strongly recommended that the DML statement should be    idempotent to avoid unexpected results. For instance, it is potentially    dangerous to run a statement such as    `UPDATE table SET column = column + 1` as it could be run multiple times    against some rows.   - The partitions are committed automatically - there is no support for    Commit or Rollback. If the call returns an error, or if the client issuing    the ExecuteSql call dies, it is possible that some rows had the statement    executed on them successfully. It is also possible that statement was    never executed against other rows.   - Partitioned DML transactions may only contain the execution of a single    DML statement via ExecuteSql or ExecuteStreamingSql.   - If any error is encountered during the execution of the partitioned DML    operation (for instance, a UNIQUE INDEX violation, division by zero, or a    value that cannot be stored due to schema constraints), then the    operation is stopped at that point and an error is returned. It is    possible that at this point, some partitions have been committed (or even    committed multiple times), and other partitions have not been run at all.  Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table.
   */
  export interface Schema$TransactionOptions {
    /**
     * Partitioned DML transaction.  Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.
     */
    partitionedDml?: Schema$PartitionedDml;
    /**
     * Transaction will not write.  Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.
     */
    readOnly?: Schema$ReadOnly;
    /**
     * Transaction may write.  Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.
     */
    readWrite?: Schema$ReadWrite;
  }
  /**
   * This message is used to select the transaction in which a Read or ExecuteSql call runs.  See TransactionOptions for more information about transactions.
   */
  export interface Schema$TransactionSelector {
    /**
     * Begin a new transaction and execute this read or SQL query in it. The transaction ID of the new transaction is returned in ResultSetMetadata.transaction, which is a Transaction.
     */
    begin?: Schema$TransactionOptions;
    /**
     * Execute the read or SQL query in a previously-started transaction.
     */
    id?: string | null;
    /**
     * Execute the read or SQL query in a temporary transaction. This is the most efficient way to execute a transaction that consists of a single SQL query.
     */
    singleUse?: Schema$TransactionOptions;
  }
  /**
   * `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
   */
  export interface Schema$Type {
    /**
     * If code == ARRAY, then `array_element_type` is the type of the array elements.
     */
    arrayElementType?: Schema$Type;
    /**
     * Required. The TypeCode for this type.
     */
    code?: string | null;
    /**
     * If code == STRUCT, then `struct_type` provides type information for the struct&#39;s fields.
     */
    structType?: Schema$StructType;
  }
  /**
   * Metadata type for the operation returned by UpdateDatabaseDdl.
   */
  export interface Schema$UpdateDatabaseDdlMetadata {
    /**
     * Reports the commit timestamps of all statements that have succeeded so far, where `commit_timestamps[i]` is the commit timestamp for the statement `statements[i]`.
     */
    commitTimestamps?: string[] | null;
    /**
     * The database being modified.
     */
    database?: string | null;
    /**
     * For an update this list contains all the statements. For an individual statement, this list contains only that statement.
     */
    statements?: string[] | null;
  }
  /**
   * Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled.  Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details.
   */
  export interface Schema$UpdateDatabaseDdlRequest {
    /**
     * If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, `operation_id` is used to construct the name of the resulting Operation.  Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and `operation_id` fields can be combined to form the name of the resulting longrunning.Operation: `&lt;database&gt;/operations/&lt;operation_id&gt;`.  `operation_id` should be unique within the database, and must be a valid identifier: `a-z*`. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns `ALREADY_EXISTS`.
     */
    operationId?: string | null;
    /**
     * DDL statements to be applied to the database.
     */
    statements?: string[] | null;
  }
  /**
   * Metadata type for the operation returned by UpdateInstance.
   */
  export interface Schema$UpdateInstanceMetadata {
    /**
     * The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again.
     */
    cancelTime?: string | null;
    /**
     * The time at which this operation failed or was completed successfully.
     */
    endTime?: string | null;
    /**
     * The desired end state of the update.
     */
    instance?: Schema$Instance;
    /**
     * The time at which UpdateInstance request was received.
     */
    startTime?: string | null;
  }
  /**
   * The request for UpdateInstance.
   */
  export interface Schema$UpdateInstanceRequest {
    /**
     * Required. A mask specifying which fields in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.instance] should be updated. The field mask must always be specified; this prevents any future fields in [][google.spanner.admin.instance.v1.Instance] from being erased accidentally by clients that do not know about them.
     */
    fieldMask?: string | null;
    /**
     * Required. The instance to update, which must always include the instance name.  Otherwise, only fields mentioned in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.field_mask] need be included.
     */
    instance?: Schema$Instance;
  }
  /**
   * Arguments to insert, update, insert_or_update, and replace operations.
   */
  export interface Schema$Write {
    /**
     * The names of the columns in table to be written.  The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.
     */
    columns?: string[] | null;
    /**
     * Required. The table whose rows will be written.
     */
    table?: string | null;
    /**
     * The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.
     */
    values?: any[][] | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    instanceConfigs: Resource$Projects$Instanceconfigs;
    instances: Resource$Projects$Instances;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instanceConfigs = new Resource$Projects$Instanceconfigs(
        this.context
      );
      this.instances = new Resource$Projects$Instances(this.context);
    }
  }

  export class Resource$Projects$Instanceconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * spanner.projects.instanceConfigs.get
     * @desc Gets information about a particular instance configuration.
     * @alias spanner.projects.instanceConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the requested instance configuration. Values are of the form `projects/<project>/instanceConfigs/<config>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instanceconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InstanceConfig>;
    get(
      params: Params$Resource$Projects$Instanceconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$InstanceConfig>,
      callback: BodyResponseCallback<Schema$InstanceConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Instanceconfigs$Get,
      callback: BodyResponseCallback<Schema$InstanceConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$InstanceConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instanceconfigs$Get
        | BodyResponseCallback<Schema$InstanceConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InstanceConfig>,
      callback?: BodyResponseCallback<Schema$InstanceConfig>
    ): void | GaxiosPromise<Schema$InstanceConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instanceconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instanceconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$InstanceConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstanceConfig>(parameters);
      }
    }

    /**
     * spanner.projects.instanceConfigs.list
     * @desc Lists the supported instance configurations for a given project.
     * @alias spanner.projects.instanceConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.
     * @param {string} params.parent Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/<project>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instanceconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstanceConfigsResponse>;
    list(
      params: Params$Resource$Projects$Instanceconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstanceConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListInstanceConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instanceconfigs$List,
      callback: BodyResponseCallback<Schema$ListInstanceConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListInstanceConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instanceconfigs$List
        | BodyResponseCallback<Schema$ListInstanceConfigsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstanceConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListInstanceConfigsResponse>
    ): void | GaxiosPromise<Schema$ListInstanceConfigsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instanceconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instanceconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instanceConfigs').replace(
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
        createAPIRequest<Schema$ListInstanceConfigsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListInstanceConfigsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instanceconfigs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the requested instance configuration. Values are of the form `projects/<project>/instanceConfigs/<config>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instanceconfigs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     */
    pageSize?: number;
    /**
     * If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.
     */
    pageToken?: string;
    /**
     * Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/<project>`.
     */
    parent?: string;
  }

  export class Resource$Projects$Instances {
    context: APIRequestContext;
    databases: Resource$Projects$Instances$Databases;
    operations: Resource$Projects$Instances$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.databases = new Resource$Projects$Instances$Databases(this.context);
      this.operations = new Resource$Projects$Instances$Operations(
        this.context
      );
    }

    /**
     * spanner.projects.instances.create
     * @desc Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`.  Immediately upon completion of this request:    * The instance is readable via the API, with all requested attributes     but no allocated resources. Its state is `CREATING`.  Until completion of the returned operation:    * Cancelling the operation renders the instance immediately unreadable     via the API.   * The instance can be deleted.   * All other attempts to modify the instance are rejected.  Upon completion of the returned operation:    * Billing for all successfully-allocated resources begins (some types     may have lower than the requested levels).   * Databases can be created in the instance.   * The instance's allocated resource levels are readable via the API.   * The instance's state becomes `READY`.  The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track creation of the instance.  The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.
     * @alias spanner.projects.instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the project in which to create the instance. Values are of the form `projects/<project>`.
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
     * spanner.projects.instances.delete
     * @desc Deletes an instance.  Immediately upon completion of the request:    * Billing ceases for all of the instance's reserved resources.  Soon afterward:    * The instance and *all of its databases* immediately and     irrevocably disappear from the API. All data in the databases     is permanently deleted.
     * @alias spanner.projects.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * spanner.projects.instances.get
     * @desc Gets information about a particular instance.
     * @alias spanner.projects.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the requested instance. Values are of the form `projects/<project>/instances/<instance>`.
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * spanner.projects.instances.getIamPolicy
     * @desc Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.  Authorization requires `spanner.instances.getIamPolicy` on resource.
     * @alias spanner.projects.instances.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * spanner.projects.instances.list
     * @desc Lists all instances in the given project.
     * @alias spanner.projects.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:    * `name`   * `display_name`   * `labels.key` where key is the name of a label  Some examples of using filters are:    * `name:*` --> The instance has a name.   * `name:Howl` --> The instance's name contains the string "howl".   * `name:HOWL` --> Equivalent to above.   * `NAME:howl` --> Equivalent to above.   * `labels.env:*` --> The instance has the label "env".   * `labels.env:dev` --> The instance has the label "env" and the value of                        the label contains the string "dev".   * `name:howl labels.env:dev` --> The instance's name contains "howl" and                                  it has the label "env" with its value                                  containing "dev".
     * @param {integer=} params.pageSize Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.
     * @param {string} params.parent Required. The name of the project for which a list of instances is requested. Values are of the form `projects/<project>`.
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
     * spanner.projects.instances.patch
     * @desc Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`.  Immediately upon completion of this request:    * For resource types for which a decrease in the instance's allocation     has been requested, billing is based on the newly-requested level.  Until completion of the returned operation:    * Cancelling the operation sets its metadata's     cancel_time, and begins     restoring resources to their pre-request values. The operation     is guaranteed to succeed at undoing all resource changes,     after which point it terminates with a `CANCELLED` status.   * All other attempts to modify the instance are rejected.   * Reading the instance via the API continues to give the pre-request     resource levels.  Upon completion of the returned operation:    * Billing begins for all successfully-allocated resources (some types     may have lower than the requested levels).   * All newly-reserved resources are available for serving the instance's     tables.   * The instance's new resource levels are readable via the API.  The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track the instance modification.  The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful.  Authorization requires `spanner.instances.update` permission on resource name.
     * @alias spanner.projects.instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.
     * @param {().UpdateInstanceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
     * spanner.projects.instances.setIamPolicy
     * @desc Sets the access control policy on an instance resource. Replaces any existing policy.  Authorization requires `spanner.instances.setIamPolicy` on resource.
     * @alias spanner.projects.instances.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
     * spanner.projects.instances.testIamPermissions
     * @desc Returns permissions that the caller has on the specified instance resource.  Attempting this RPC on a non-existent Cloud Spanner instance resource will result in a NOT_FOUND error if the user has `spanner.instances.list` permission on the containing Google Cloud Project. Otherwise returns an empty set of permissions.
     * @alias spanner.projects.instances.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
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

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Instances$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the project in which to create the instance. Values are of the form `projects/<project>`.
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
     * Required. The name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`
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
     * Required. The name of the requested instance. Values are of the form `projects/<project>/instances/<instance>`.
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
     * REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
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
     * An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:    * `name`   * `display_name`   * `labels.key` where key is the name of a label  Some examples of using filters are:    * `name:*` --> The instance has a name.   * `name:Howl` --> The instance's name contains the string "howl".   * `name:HOWL` --> Equivalent to above.   * `NAME:howl` --> Equivalent to above.   * `labels.env:*` --> The instance has the label "env".   * `labels.env:dev` --> The instance has the label "env" and the value of                        the label contains the string "dev".   * `name:howl labels.env:dev` --> The instance's name contains "howl" and                                  it has the label "env" with its value                                  containing "dev".
     */
    filter?: string;
    /**
     * Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     */
    pageSize?: number;
    /**
     * If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.
     */
    pageToken?: string;
    /**
     * Required. The name of the project for which a list of instances is requested. Values are of the form `projects/<project>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Instances$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateInstanceRequest;
  }
  export interface Params$Resource$Projects$Instances$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
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
     * REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Instances$Databases {
    context: APIRequestContext;
    operations: Resource$Projects$Instances$Databases$Operations;
    sessions: Resource$Projects$Instances$Databases$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Instances$Databases$Operations(
        this.context
      );
      this.sessions = new Resource$Projects$Instances$Databases$Sessions(
        this.context
      );
    }

    /**
     * spanner.projects.instances.databases.create
     * @desc Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.
     * @alias spanner.projects.instances.databases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {().CreateDatabaseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Instances$Databases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Instances$Databases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Databases$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases').replace(
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
     * spanner.projects.instances.databases.dropDatabase
     * @desc Drops (aka deletes) a Cloud Spanner database.
     * @alias spanner.projects.instances.databases.dropDatabase
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Required. The database to be dropped.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dropDatabase(
      params?: Params$Resource$Projects$Instances$Databases$Dropdatabase,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    dropDatabase(
      params: Params$Resource$Projects$Instances$Databases$Dropdatabase,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    dropDatabase(
      params: Params$Resource$Projects$Instances$Databases$Dropdatabase,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    dropDatabase(callback: BodyResponseCallback<Schema$Empty>): void;
    dropDatabase(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Dropdatabase
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Dropdatabase;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Dropdatabase;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.get
     * @desc Gets the state of a Cloud Spanner database.
     * @alias spanner.projects.instances.databases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the requested database. Values are of the form `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Databases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Database>;
    get(
      params: Params$Resource$Projects$Instances$Databases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Database>,
      callback: BodyResponseCallback<Schema$Database>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Databases$Get,
      callback: BodyResponseCallback<Schema$Database>
    ): void;
    get(callback: BodyResponseCallback<Schema$Database>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Get
        | BodyResponseCallback<Schema$Database>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Database>,
      callback?: BodyResponseCallback<Schema$Database>
    ): void | GaxiosPromise<Schema$Database> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Database>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Database>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.getDdl
     * @desc Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.
     * @alias spanner.projects.instances.databases.getDdl
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Required. The database whose schema we wish to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getDdl(
      params?: Params$Resource$Projects$Instances$Databases$Getddl,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetDatabaseDdlResponse>;
    getDdl(
      params: Params$Resource$Projects$Instances$Databases$Getddl,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetDatabaseDdlResponse>,
      callback: BodyResponseCallback<Schema$GetDatabaseDdlResponse>
    ): void;
    getDdl(
      params: Params$Resource$Projects$Instances$Databases$Getddl,
      callback: BodyResponseCallback<Schema$GetDatabaseDdlResponse>
    ): void;
    getDdl(callback: BodyResponseCallback<Schema$GetDatabaseDdlResponse>): void;
    getDdl(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Getddl
        | BodyResponseCallback<Schema$GetDatabaseDdlResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetDatabaseDdlResponse>,
      callback?: BodyResponseCallback<Schema$GetDatabaseDdlResponse>
    ): void | GaxiosPromise<Schema$GetDatabaseDdlResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Getddl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Getddl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/ddl').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetDatabaseDdlResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetDatabaseDdlResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.getIamPolicy
     * @desc Gets the access control policy for a database resource. Returns an empty policy if a database exists but does not have a policy set.  Authorization requires `spanner.databases.getIamPolicy` permission on resource.
     * @alias spanner.projects.instances.databases.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Instances$Databases$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Instances$Databases$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Instances$Databases$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * spanner.projects.instances.databases.list
     * @desc Lists Cloud Spanner databases.
     * @alias spanner.projects.instances.databases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.
     * @param {string} params.parent Required. The instance whose databases should be listed. Values are of the form `projects/<project>/instances/<instance>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instances$Databases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDatabasesResponse>;
    list(
      params: Params$Resource$Projects$Instances$Databases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatabasesResponse>,
      callback: BodyResponseCallback<Schema$ListDatabasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Databases$List,
      callback: BodyResponseCallback<Schema$ListDatabasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDatabasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$List
        | BodyResponseCallback<Schema$ListDatabasesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatabasesResponse>,
      callback?: BodyResponseCallback<Schema$ListDatabasesResponse>
    ): void | GaxiosPromise<Schema$ListDatabasesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases').replace(
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
        createAPIRequest<Schema$ListDatabasesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDatabasesResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.setIamPolicy
     * @desc Sets the access control policy on a database resource. Replaces any existing policy.  Authorization requires `spanner.databases.setIamPolicy` permission on resource.
     * @alias spanner.projects.instances.databases.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Instances$Databases$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Instances$Databases$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Instances$Databases$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
     * spanner.projects.instances.databases.testIamPermissions
     * @desc Returns permissions that the caller has on the specified database resource.  Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions.
     * @alias spanner.projects.instances.databases.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Instances$Databases$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Instances$Databases$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Instances$Databases$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
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
     * spanner.projects.instances.databases.updateDdl
     * @desc Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata.  The operation has no response.
     * @alias spanner.projects.instances.databases.updateDdl
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Required. The database to update.
     * @param {().UpdateDatabaseDdlRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateDdl(
      params?: Params$Resource$Projects$Instances$Databases$Updateddl,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateDdl(
      params: Params$Resource$Projects$Instances$Databases$Updateddl,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateDdl(
      params: Params$Resource$Projects$Instances$Databases$Updateddl,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateDdl(callback: BodyResponseCallback<Schema$Operation>): void;
    updateDdl(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Updateddl
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Updateddl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Updateddl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/ddl').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Databases$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateDatabaseRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Dropdatabase
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The database to be dropped.
     */
    database?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the requested database. Values are of the form `projects/<project>/instances/<instance>/databases/<database>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Getddl
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The database whose schema we wish to get.
     */
    database?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     */
    pageSize?: number;
    /**
     * If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.
     */
    pageToken?: string;
    /**
     * Required. The instance whose databases should be listed. Values are of the form `projects/<project>/instances/<instance>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Updateddl
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The database to update.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateDatabaseDdlRequest;
  }

  export class Resource$Projects$Instances$Databases$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * spanner.projects.instances.databases.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias spanner.projects.instances.databases.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Instances$Databases$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Instances$Databases$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Instances$Databases$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * spanner.projects.instances.databases.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias spanner.projects.instances.databases.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Databases$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Databases$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Databases$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias spanner.projects.instances.databases.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Databases$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Instances$Databases$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Databases$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias spanner.projects.instances.databases.operations.list
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
      params?: Params$Resource$Projects$Instances$Databases$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Instances$Databases$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Databases$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Databases$Operations$Cancel
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
  export interface Params$Resource$Projects$Instances$Databases$Operations$Delete
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
  export interface Params$Resource$Projects$Instances$Databases$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Operations$List
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

  export class Resource$Projects$Instances$Databases$Sessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * spanner.projects.instances.databases.sessions.batchCreate
     * @desc Creates multiple new sessions. If the requested number of sessions would cause the database to exceed its session limit, returns a RESOURCE_EXHAUSTED error.  This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.
     * @alias spanner.projects.instances.databases.sessions.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Required. The database in which the new sessions are created.
     * @param {().BatchCreateSessionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreateSessionsResponse>;
    batchCreate(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateSessionsResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateSessionsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateSessionsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateSessionsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateSessionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateSessionsResponse>,
      callback?: BodyResponseCallback<Schema$BatchCreateSessionsResponse>
    ): void | GaxiosPromise<Schema$BatchCreateSessionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/sessions:batchCreate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchCreateSessionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchCreateSessionsResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.beginTransaction
     * @desc Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.
     * @alias spanner.projects.instances.databases.sessions.beginTransaction
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the transaction runs.
     * @param {().BeginTransactionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    beginTransaction(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Transaction>;
    beginTransaction(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction,
      options: MethodOptions | BodyResponseCallback<Schema$Transaction>,
      callback: BodyResponseCallback<Schema$Transaction>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction,
      callback: BodyResponseCallback<Schema$Transaction>
    ): void;
    beginTransaction(callback: BodyResponseCallback<Schema$Transaction>): void;
    beginTransaction(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction
        | BodyResponseCallback<Schema$Transaction>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Transaction>,
      callback?: BodyResponseCallback<Schema$Transaction>
    ): void | GaxiosPromise<Schema$Transaction> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:beginTransaction').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Transaction>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Transaction>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.commit
     * @desc Commits a transaction. The request includes the mutations to be applied to rows in the database.  `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session.
     * @alias spanner.projects.instances.databases.sessions.commit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the transaction to be committed is running.
     * @param {().CommitRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    commit(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommitResponse>;
    commit(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$CommitResponse>,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Commit,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Commit
        | BodyResponseCallback<Schema$CommitResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommitResponse>,
      callback?: BodyResponseCallback<Schema$CommitResponse>
    ): void | GaxiosPromise<Schema$CommitResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:commit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommitResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommitResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.create
     * @desc Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions.  Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit.  Active sessions use additional server resources, so it is a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner can delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`.  Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT 1"`.
     * @alias spanner.projects.instances.databases.sessions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Required. The database in which the new session is created.
     * @param {().CreateSessionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Session>;
    create(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Create,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    create(callback: BodyResponseCallback<Schema$Session>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Create
        | BodyResponseCallback<Schema$Session>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>
    ): void | GaxiosPromise<Schema$Session> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Session>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Session>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.delete
     * @desc Ends a session, releasing server resources associated with it. This will asynchronously trigger cancellation of any operations that are running with this session.
     * @alias spanner.projects.instances.databases.sessions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the session to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.executeBatchDml
     * @desc Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql.  Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred.  Execution stops after the first failed statement; the remaining statements are not executed.
     * @alias spanner.projects.instances.databases.sessions.executeBatchDml
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the DML statements should be performed.
     * @param {().ExecuteBatchDmlRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    executeBatchDml(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExecuteBatchDmlResponse>;
    executeBatchDml(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteBatchDmlResponse>,
      callback: BodyResponseCallback<Schema$ExecuteBatchDmlResponse>
    ): void;
    executeBatchDml(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml,
      callback: BodyResponseCallback<Schema$ExecuteBatchDmlResponse>
    ): void;
    executeBatchDml(
      callback: BodyResponseCallback<Schema$ExecuteBatchDmlResponse>
    ): void;
    executeBatchDml(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml
        | BodyResponseCallback<Schema$ExecuteBatchDmlResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteBatchDmlResponse>,
      callback?: BodyResponseCallback<Schema$ExecuteBatchDmlResponse>
    ): void | GaxiosPromise<Schema$ExecuteBatchDmlResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:executeBatchDml').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExecuteBatchDmlResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ExecuteBatchDmlResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.executeSql
     * @desc Executes an SQL statement, returning all results in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error.  Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details.  Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.
     * @alias spanner.projects.instances.databases.sessions.executeSql
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the SQL query should be performed.
     * @param {().ExecuteSqlRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    executeSql(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Executesql,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResultSet>;
    executeSql(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Executesql,
      options: MethodOptions | BodyResponseCallback<Schema$ResultSet>,
      callback: BodyResponseCallback<Schema$ResultSet>
    ): void;
    executeSql(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Executesql,
      callback: BodyResponseCallback<Schema$ResultSet>
    ): void;
    executeSql(callback: BodyResponseCallback<Schema$ResultSet>): void;
    executeSql(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Executesql
        | BodyResponseCallback<Schema$ResultSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ResultSet>,
      callback?: BodyResponseCallback<Schema$ResultSet>
    ): void | GaxiosPromise<Schema$ResultSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Executesql;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Executesql;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:executeSql').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResultSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResultSet>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.executeStreamingSql
     * @desc Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
     * @alias spanner.projects.instances.databases.sessions.executeStreamingSql
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the SQL query should be performed.
     * @param {().ExecuteSqlRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    executeStreamingSql(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PartialResultSet>;
    executeStreamingSql(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql,
      options: MethodOptions | BodyResponseCallback<Schema$PartialResultSet>,
      callback: BodyResponseCallback<Schema$PartialResultSet>
    ): void;
    executeStreamingSql(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql,
      callback: BodyResponseCallback<Schema$PartialResultSet>
    ): void;
    executeStreamingSql(
      callback: BodyResponseCallback<Schema$PartialResultSet>
    ): void;
    executeStreamingSql(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql
        | BodyResponseCallback<Schema$PartialResultSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PartialResultSet>,
      callback?: BodyResponseCallback<Schema$PartialResultSet>
    ): void | GaxiosPromise<Schema$PartialResultSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:executeStreamingSql').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PartialResultSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PartialResultSet>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.get
     * @desc Gets a session. Returns `NOT_FOUND` if the session does not exist. This is mainly useful for determining whether a session is still alive.
     * @alias spanner.projects.instances.databases.sessions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the session to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Session>;
    get(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Get,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    get(callback: BodyResponseCallback<Schema$Session>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Get
        | BodyResponseCallback<Schema$Session>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>
    ): void | GaxiosPromise<Schema$Session> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Session>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Session>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.list
     * @desc Lists all sessions in a given database.
     * @alias spanner.projects.instances.databases.sessions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Required. The database in which to list sessions.
     * @param {string=} params.filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:    * `labels.key` where key is the name of a label  Some examples of using filters are:    * `labels.env:*` --> The session has the label "env".   * `labels.env:dev` --> The session has the label "env" and the value of                        the label contains the string "dev".
     * @param {integer=} params.pageSize Number of sessions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListSessionsResponse.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSessionsResponse>;
    list(
      params: Params$Resource$Projects$Instances$Databases$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Databases$Sessions$List,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSessionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$List
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void | GaxiosPromise<Schema$ListSessionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSessionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSessionsResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.partitionQuery
     * @desc Creates a set of partition tokens that can be used to execute a query operation in parallel.  Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read.  The same session and read-only transaction must be used by the PartitionQueryRequest used to create the partition tokens and the ExecuteSqlRequests that use the partition tokens.  Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old.  When any of these happen, it is not possible to resume the query, and the whole operation must be restarted from the beginning.
     * @alias spanner.projects.instances.databases.sessions.partitionQuery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session used to create the partitions.
     * @param {().PartitionQueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    partitionQuery(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PartitionResponse>;
    partitionQuery(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery,
      options: MethodOptions | BodyResponseCallback<Schema$PartitionResponse>,
      callback: BodyResponseCallback<Schema$PartitionResponse>
    ): void;
    partitionQuery(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery,
      callback: BodyResponseCallback<Schema$PartitionResponse>
    ): void;
    partitionQuery(
      callback: BodyResponseCallback<Schema$PartitionResponse>
    ): void;
    partitionQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery
        | BodyResponseCallback<Schema$PartitionResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PartitionResponse>,
      callback?: BodyResponseCallback<Schema$PartitionResponse>
    ): void | GaxiosPromise<Schema$PartitionResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:partitionQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PartitionResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PartitionResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.partitionRead
     * @desc Creates a set of partition tokens that can be used to execute a read operation in parallel.  Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read.  The same session and read-only transaction must be used by the PartitionReadRequest used to create the partition tokens and the ReadRequests that use the partition tokens.  There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual StreamingRead call issued with a partition_token.  Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old.  When any of these happen, it is not possible to resume the read, and the whole operation must be restarted from the beginning.
     * @alias spanner.projects.instances.databases.sessions.partitionRead
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session used to create the partitions.
     * @param {().PartitionReadRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    partitionRead(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Partitionread,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PartitionResponse>;
    partitionRead(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Partitionread,
      options: MethodOptions | BodyResponseCallback<Schema$PartitionResponse>,
      callback: BodyResponseCallback<Schema$PartitionResponse>
    ): void;
    partitionRead(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Partitionread,
      callback: BodyResponseCallback<Schema$PartitionResponse>
    ): void;
    partitionRead(
      callback: BodyResponseCallback<Schema$PartitionResponse>
    ): void;
    partitionRead(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Partitionread
        | BodyResponseCallback<Schema$PartitionResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PartitionResponse>,
      callback?: BodyResponseCallback<Schema$PartitionResponse>
    ): void | GaxiosPromise<Schema$PartitionResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Partitionread;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Partitionread;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:partitionRead').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PartitionResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PartitionResponse>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.read
     * @desc Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql.  This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error.  Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details.  Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.
     * @alias spanner.projects.instances.databases.sessions.read
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the read should be performed.
     * @param {().ReadRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    read(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Read,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResultSet>;
    read(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Read,
      options: MethodOptions | BodyResponseCallback<Schema$ResultSet>,
      callback: BodyResponseCallback<Schema$ResultSet>
    ): void;
    read(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Read,
      callback: BodyResponseCallback<Schema$ResultSet>
    ): void;
    read(callback: BodyResponseCallback<Schema$ResultSet>): void;
    read(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Read
        | BodyResponseCallback<Schema$ResultSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ResultSet>,
      callback?: BodyResponseCallback<Schema$ResultSet>
    ): void | GaxiosPromise<Schema$ResultSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Read;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Read;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:read').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResultSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResultSet>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.rollback
     * @desc Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit.  `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.
     * @alias spanner.projects.instances.databases.sessions.rollback
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the transaction to roll back is running.
     * @param {().RollbackRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rollback(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    rollback(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rollback(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Rollback,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Empty>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Rollback
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:rollback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * spanner.projects.instances.databases.sessions.streamingRead
     * @desc Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
     * @alias spanner.projects.instances.databases.sessions.streamingRead
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The session in which the read should be performed.
     * @param {().ReadRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    streamingRead(
      params?: Params$Resource$Projects$Instances$Databases$Sessions$Streamingread,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PartialResultSet>;
    streamingRead(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Streamingread,
      options: MethodOptions | BodyResponseCallback<Schema$PartialResultSet>,
      callback: BodyResponseCallback<Schema$PartialResultSet>
    ): void;
    streamingRead(
      params: Params$Resource$Projects$Instances$Databases$Sessions$Streamingread,
      callback: BodyResponseCallback<Schema$PartialResultSet>
    ): void;
    streamingRead(
      callback: BodyResponseCallback<Schema$PartialResultSet>
    ): void;
    streamingRead(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Databases$Sessions$Streamingread
        | BodyResponseCallback<Schema$PartialResultSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PartialResultSet>,
      callback?: BodyResponseCallback<Schema$PartialResultSet>
    ): void | GaxiosPromise<Schema$PartialResultSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Databases$Sessions$Streamingread;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Databases$Sessions$Streamingread;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:streamingRead').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PartialResultSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PartialResultSet>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Databases$Sessions$Batchcreate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The database in which the new sessions are created.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateSessionsRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Begintransaction
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the transaction runs.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BeginTransactionRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Commit
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the transaction to be committed is running.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The database in which the new session is created.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateSessionRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the session to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Executebatchdml
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the DML statements should be performed.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteBatchDmlRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Executesql
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the SQL query should be performed.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteSqlRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Executestreamingsql
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the SQL query should be performed.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteSqlRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the session to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The database in which to list sessions.
     */
    database?: string;
    /**
     * An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:    * `labels.key` where key is the name of a label  Some examples of using filters are:    * `labels.env:*` --> The session has the label "env".   * `labels.env:dev` --> The session has the label "env" and the value of                        the label contains the string "dev".
     */
    filter?: string;
    /**
     * Number of sessions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     */
    pageSize?: number;
    /**
     * If non-empty, `page_token` should contain a next_page_token from a previous ListSessionsResponse.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Partitionquery
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session used to create the partitions.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PartitionQueryRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Partitionread
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session used to create the partitions.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PartitionReadRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Read
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the read should be performed.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReadRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Rollback
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the transaction to roll back is running.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackRequest;
  }
  export interface Params$Resource$Projects$Instances$Databases$Sessions$Streamingread
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session in which the read should be performed.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReadRequest;
  }

  export class Resource$Projects$Instances$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * spanner.projects.instances.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias spanner.projects.instances.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Instances$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Instances$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Instances$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * spanner.projects.instances.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias spanner.projects.instances.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Instances$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Instances$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instances$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * spanner.projects.instances.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias spanner.projects.instances.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Instances$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Instances$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * spanner.projects.instances.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias spanner.projects.instances.operations.list
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
      params?: Params$Resource$Projects$Instances$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Instances$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instances$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Operations$Cancel
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
  export interface Params$Resource$Projects$Instances$Operations$Delete
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
  export interface Params$Resource$Projects$Instances$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instances$Operations$List
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
}
