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
 * Cloud Spanner API
 *
 * Cloud Spanner is a managed, mission-critical, globally consistent and
 * scalable relational database service.
 *
 * @example
 * const google = require('googleapis');
 * const spanner = google.spanner('v1');
 *
 * @namespace spanner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Spanner
 */
export class Spanner {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * The request for BeginTransaction.
 */
export interface Schema$BeginTransactionRequest {
  /**
   * Required. Options for the new transaction.
   */
  options: Schema$TransactionOptions;
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is    on the internet; with or
   * without a Google account.  * `allAuthenticatedUsers`: A special identifier
   * that represents anyone    who is authenticated with a Google account or a
   * service account.  * `user:{emailid}`: An email address that represents a
   * specific Google    account. For example, `alice@gmail.com` or
   * `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that
   * represents a service    account. For example,
   * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email
   * address that represents a Google group.    For example,
   * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that
   * represents all the    users of that domain. For example, `google.com` or
   * `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * Metadata associated with a parent-child relationship appearing in a PlanNode.
 */
export interface Schema$ChildLink {
  /**
   * The node to which the link points.
   */
  childIndex: number;
  /**
   * The type of the link. For example, in Hash Joins this could be used to
   * distinguish between the build child and the probe child, or in the case of
   * the child being an output variable, to represent the tag associated with
   * the output variable.
   */
  type: string;
  /**
   * Only present if the child node is SCALAR and corresponds to an output
   * variable of the parent node. The field carries the name of the output
   * variable. For example, a `TableScan` operator that reads rows from a table
   * will have child links to the `SCALAR` nodes representing the output
   * variables created for each column that is read by the operator. The
   * corresponding `variable` fields will be set to the variable names assigned
   * to the columns.
   */
  variable: string;
}
/**
 * The request for Commit.
 */
export interface Schema$CommitRequest {
  /**
   * The mutations to be executed when this transaction commits. All mutations
   * are applied atomically, in the order they appear in this list.
   */
  mutations: Schema$Mutation[];
  /**
   * Execute mutations in a temporary transaction. Note that unlike commit of a
   * previously-started transaction, commit with a temporary transaction is
   * non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner
   * more than once (for instance, due to retries in the application, or in the
   * transport library), it is possible that the mutations are executed more
   * than once. If this is undesirable, use BeginTransaction and Commit instead.
   */
  singleUseTransaction: Schema$TransactionOptions;
  /**
   * Commit a previously-started transaction.
   */
  transactionId: string;
}
/**
 * The response for Commit.
 */
export interface Schema$CommitResponse {
  /**
   * The Cloud Spanner timestamp at which the transaction committed.
   */
  commitTimestamp: string;
}
/**
 * Metadata type for the operation returned by CreateDatabase.
 */
export interface Schema$CreateDatabaseMetadata {
  /**
   * The database being created.
   */
  database: string;
}
/**
 * The request for CreateDatabase.
 */
export interface Schema$CreateDatabaseRequest {
  /**
   * Required. A `CREATE DATABASE` statement, which specifies the ID of the new
   * database.  The database ID must conform to the regular expression
   * `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the
   * database ID is a reserved word or if it contains a hyphen, the database ID
   * must be enclosed in backticks (`` ` ``).
   */
  createStatement: string;
  /**
   * An optional list of DDL statements to run inside the newly created
   * database. Statements can create tables, indexes, etc. These statements
   * execute atomically with the creation of the database: if there is an error
   * in any statement, the database is not created.
   */
  extraStatements: string[];
}
/**
 * Metadata type for the operation returned by CreateInstance.
 */
export interface Schema$CreateInstanceMetadata {
  /**
   * The time at which this operation was cancelled. If set, this operation is
   * in the process of undoing itself (which is guaranteed to succeed) and
   * cannot be cancelled again.
   */
  cancelTime: string;
  /**
   * The time at which this operation failed or was completed successfully.
   */
  endTime: string;
  /**
   * The instance being created.
   */
  instance: Schema$Instance;
  /**
   * The time at which the CreateInstance request was received.
   */
  startTime: string;
}
/**
 * The request for CreateInstance.
 */
export interface Schema$CreateInstanceRequest {
  /**
   * Required. The instance to create.  The name may be omitted, but if
   * specified must be `&lt;parent&gt;/instances/&lt;instance_id&gt;`.
   */
  instance: Schema$Instance;
  /**
   * Required. The ID of the instance to create.  Valid identifiers are of the
   * form `a-z*[a-z0-9]` and must be between 6 and 30 characters in length.
   */
  instanceId: string;
}
/**
 * The request for CreateSession.
 */
export interface Schema$CreateSessionRequest {
  /**
   * The session to create.
   */
  session: Schema$Session;
}
/**
 * A Cloud Spanner database.
 */
export interface Schema$Database {
  /**
   * Required. The name of the database. Values are of the form
   * `projects/&lt;project&gt;/instances/&lt;instance&gt;/databases/&lt;database&gt;`,
   * where `&lt;database&gt;` is as specified in the `CREATE DATABASE`
   * statement. This name can be passed to other API methods to identify the
   * database.
   */
  name: string;
  /**
   * Output only. The current database state.
   */
  state: string;
}
/**
 * Arguments to delete operations.
 */
export interface Schema$Delete {
  /**
   * Required. The primary keys of the rows within table to delete. Delete is
   * idempotent. The transaction will succeed even if some or all rows do not
   * exist.
   */
  keySet: Schema$KeySet;
  /**
   * Required. The table whose rows will be deleted.
   */
  table: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * The request for ExecuteSql and ExecuteStreamingSql.
 */
export interface Schema$ExecuteSqlRequest {
  /**
   * The SQL query string can contain parameter placeholders. A parameter
   * placeholder consists of `&#39;@&#39;` followed by the parameter name.
   * Parameter names consist of any combination of letters, numbers, and
   * underscores.  Parameters can appear anywhere that a literal value is
   * expected.  The same parameter name can be used more than once, for example:
   * `&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100&quot;`  It is an
   * error to execute an SQL query with unbound parameters.  Parameter values
   * are specified using `params`, which is a JSON object whose keys are
   * parameter names, and whose values are the corresponding parameter values.
   */
  params: any;
  /**
   * It is not always possible for Cloud Spanner to infer the right SQL type
   * from a JSON value.  For example, values of type `BYTES` and values of type
   * `STRING` both appear in params as JSON strings.  In these cases,
   * `param_types` can be used to specify the exact SQL type for some or all of
   * the SQL query parameters. See the definition of Type for more information
   * about SQL types.
   */
  paramTypes: any;
  /**
   * If present, results will be restricted to the specified partition
   * previously created using PartitionQuery().  There must be an exact match
   * for the values of fields common to this message and the
   * PartitionQueryRequest message used to create this partition_token.
   */
  partitionToken: string;
  /**
   * Used to control the amount of debugging information returned in
   * ResultSetStats. If partition_token is set, query_mode can only be set to
   * QueryMode.NORMAL.
   */
  queryMode: string;
  /**
   * If this request is resuming a previously interrupted SQL query execution,
   * `resume_token` should be copied from the last PartialResultSet yielded
   * before the interruption. Doing this enables the new SQL query execution to
   * resume where the last one left off. The rest of the request parameters must
   * exactly match the request that yielded this token.
   */
  resumeToken: string;
  /**
   * Required. The SQL query string.
   */
  sql: string;
  /**
   * The transaction to use. If none is provided, the default is a temporary
   * read-only transaction with strong concurrency.
   */
  transaction: Schema$TransactionSelector;
}
/**
 * Message representing a single field of a struct.
 */
export interface Schema$Field {
  /**
   * The name of the field. For reads, this is the column name. For SQL queries,
   * it is the column alias (e.g., `&quot;Word&quot;` in the query `&quot;SELECT
   * &#39;hello&#39; AS Word&quot;`), or the column name (e.g.,
   * `&quot;ColName&quot;` in the query `&quot;SELECT ColName FROM
   * Table&quot;`). Some columns might have an empty name (e.g., !&quot;SELECT
   * UPPER(ColName)&quot;`). Note that a query result can contain multiple
   * fields with the same name.
   */
  name: string;
  /**
   * The type of the field.
   */
  type: Schema$Type;
}
/**
 * The response for GetDatabaseDdl.
 */
export interface Schema$GetDatabaseDdlResponse {
  /**
   * A list of formatted DDL statements defining the schema of the database
   * specified in the request.
   */
  statements: string[];
}
/**
 * Request message for `GetIamPolicy` method.
 */
export interface Schema$GetIamPolicyRequest {}
/**
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
 */
export interface Schema$Instance {
  /**
   * Required. The name of the instance&#39;s configuration. Values are of the
   * form `projects/&lt;project&gt;/instanceConfigs/&lt;configuration&gt;`. See
   * also InstanceConfig and ListInstanceConfigs.
   */
  config: string;
  /**
   * Required. The descriptive name for this instance as it appears in UIs. Must
   * be unique per project and between 4 and 30 characters in length.
   */
  displayName: string;
  /**
   * Cloud Labels are a flexible and lightweight mechanism for organizing cloud
   * resources into groups that reflect a customer&#39;s organizational needs
   * and deployment strategies. Cloud Labels can be used to filter collections
   * of resources. They can be used to control how resource metrics are
   * aggregated. And they can be used as arguments to policy management rules
   * (e.g. route, firewall, load balancing, etc.).   * Label keys must be
   * between 1 and 63 characters long and must conform to    the following
   * regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.  * Label values must be
   * between 0 and 63 characters long and must conform    to the regular
   * expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.  * No more than 64 labels can
   * be associated with a given resource.  See https://goo.gl/xmQnxf for more
   * information on and examples of labels.  If you plan to use labels in your
   * own code, please note that additional characters may be allowed in the
   * future. And so you are advised to use an internal label representation,
   * such as JSON, which doesn&#39;t rely upon specific characters being
   * disallowed.  For example, representing labels as the string:  name +
   * &quot;_&quot; + value  would prove problematic if we were to allow
   * &quot;_&quot; in a future release.
   */
  labels: any;
  /**
   * Required. A unique identifier for the instance, which cannot be changed
   * after the instance is created. Values are of the form
   * `projects/&lt;project&gt;/instances/a-z*[a-z0-9]`. The final segment of the
   * name must be between 6 and 30 characters in length.
   */
  name: string;
  /**
   * Required. The number of nodes allocated to this instance. This may be zero
   * in API responses for instances that are not yet in state `READY`.  See [the
   * documentation](https://cloud.google.com/spanner/docs/instances#node_count)
   * for more information about nodes.
   */
  nodeCount: number;
  /**
   * Output only. The current instance state. For CreateInstance, the state must
   * be either omitted or set to `CREATING`. For UpdateInstance, the state must
   * be either omitted or set to `READY`.
   */
  state: string;
}
/**
 * A possible configuration for a Cloud Spanner instance. Configurations define
 * the geographic placement of nodes and their replication.
 */
export interface Schema$InstanceConfig {
  /**
   * The name of this instance configuration as it appears in UIs.
   */
  displayName: string;
  /**
   * A unique identifier for the instance configuration.  Values are of the form
   * `projects/&lt;project&gt;/instanceConfigs/a-z*`
   */
  name: string;
}
/**
 * KeyRange represents a range of rows in a table or index.  A range has a start
 * key and an end key. These keys can be open or closed, indicating if the range
 * includes rows with that key.  Keys are represented by lists, where the ith
 * value in the list corresponds to the ith component of the table or index
 * primary key. Individual values are encoded as described here.  For example,
 * consider the following table definition:      CREATE TABLE UserEvents (
 * UserName STRING(MAX),       EventDate STRING(10)     ) PRIMARY KEY(UserName,
 * EventDate);  The following keys name rows in this table: &quot;Bob&quot;,
 * &quot;2014-09-23&quot;  Since the `UserEvents` table&#39;s `PRIMARY KEY`
 * clause names two columns, each `UserEvents` key has two elements; the first
 * is the `UserName`, and the second is the `EventDate`.  Key ranges with
 * multiple components are interpreted lexicographically by component using the
 * table or index key&#39;s declared sort order. For example, the following
 * range returns all events for user `&quot;Bob&quot;` that occurred in the year
 * 2015:      &quot;start_closed&quot;: [&quot;Bob&quot;,
 * &quot;2015-01-01&quot;]     &quot;end_closed&quot;: [&quot;Bob&quot;,
 * &quot;2015-12-31&quot;]  Start and end keys can omit trailing key components.
 * This affects the inclusion and exclusion of rows that exactly match the
 * provided key components: if the key is closed, then rows that exactly match
 * the provided components are included; if the key is open, then rows that
 * exactly match are not included.  For example, the following range includes
 * all events for `&quot;Bob&quot;` that occurred during and after the year
 * 2000:      &quot;start_closed&quot;: [&quot;Bob&quot;,
 * &quot;2000-01-01&quot;]     &quot;end_closed&quot;: [&quot;Bob&quot;]  The
 * next example retrieves all events for `&quot;Bob&quot;`:
 * &quot;start_closed&quot;: [&quot;Bob&quot;]     &quot;end_closed&quot;:
 * [&quot;Bob&quot;]  To retrieve events before the year 2000:
 * &quot;start_closed&quot;: [&quot;Bob&quot;]     &quot;end_open&quot;:
 * [&quot;Bob&quot;, &quot;2000-01-01&quot;]  The following range includes all
 * rows in the table:      &quot;start_closed&quot;: [] &quot;end_closed&quot;:
 * []  This range returns all users whose `UserName` begins with any character
 * from A to C:      &quot;start_closed&quot;: [&quot;A&quot;]
 * &quot;end_open&quot;: [&quot;D&quot;]  This range returns all users whose
 * `UserName` begins with B:      &quot;start_closed&quot;: [&quot;B&quot;]
 * &quot;end_open&quot;: [&quot;C&quot;]  Key ranges honor column sort order.
 * For example, suppose a table is defined as follows:      CREATE TABLE
 * DescendingSortedTable {       Key INT64,       ...     ) PRIMARY KEY(Key
 * DESC);  The following range retrieves all rows with key values between 1 and
 * 100 inclusive:      &quot;start_closed&quot;: [&quot;100&quot;]
 * &quot;end_closed&quot;: [&quot;1&quot;]  Note that 100 is passed as the
 * start, and 1 is passed as the end, because `Key` is a descending column in
 * the schema.
 */
export interface Schema$KeyRange {
  /**
   * If the end is closed, then the range includes all rows whose first
   * `len(end_closed)` key columns exactly match `end_closed`.
   */
  endClosed: any[];
  /**
   * If the end is open, then the range excludes rows whose first
   * `len(end_open)` key columns exactly match `end_open`.
   */
  endOpen: any[];
  /**
   * If the start is closed, then the range includes all rows whose first
   * `len(start_closed)` key columns exactly match `start_closed`.
   */
  startClosed: any[];
  /**
   * If the start is open, then the range excludes rows whose first
   * `len(start_open)` key columns exactly match `start_open`.
   */
  startOpen: any[];
}
/**
 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
 * the keys are expected to be in the same table or index. The keys need not be
 * sorted in any particular way.  If the same key is specified multiple times in
 * the set (for example if two ranges, two keys, or a key and a range overlap),
 * Cloud Spanner behaves as if the key were only specified once.
 */
export interface Schema$KeySet {
  /**
   * For convenience `all` can be set to `true` to indicate that this `KeySet`
   * matches all keys in the table or index. Note that any keys specified in
   * `keys` or `ranges` are only yielded once.
   */
  all: boolean;
  /**
   * A list of specific keys. Entries in `keys` should have exactly as many
   * elements as there are columns in the primary or index key with which this
   * `KeySet` is used.  Individual key values are encoded as described here.
   */
  keys: any[][];
  /**
   * A list of key ranges. See KeyRange for more information about key range
   * specifications.
   */
  ranges: Schema$KeyRange[];
}
/**
 * The response for ListDatabases.
 */
export interface Schema$ListDatabasesResponse {
  /**
   * Databases that matched the request.
   */
  databases: Schema$Database[];
  /**
   * `next_page_token` can be sent in a subsequent ListDatabases call to fetch
   * more of the matching databases.
   */
  nextPageToken: string;
}
/**
 * The response for ListInstanceConfigs.
 */
export interface Schema$ListInstanceConfigsResponse {
  /**
   * The list of requested instance configurations.
   */
  instanceConfigs: Schema$InstanceConfig[];
  /**
   * `next_page_token` can be sent in a subsequent ListInstanceConfigs call to
   * fetch more of the matching instance configurations.
   */
  nextPageToken: string;
}
/**
 * The response for ListInstances.
 */
export interface Schema$ListInstancesResponse {
  /**
   * The list of requested instances.
   */
  instances: Schema$Instance[];
  /**
   * `next_page_token` can be sent in a subsequent ListInstances call to fetch
   * more of the matching instances.
   */
  nextPageToken: string;
}
/**
 * The response message for Operations.ListOperations.
 */
export interface Schema$ListOperationsResponse {
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
  /**
   * A list of operations that matches the specified filter in the request.
   */
  operations: Schema$Operation[];
}
/**
 * The response for ListSessions.
 */
export interface Schema$ListSessionsResponse {
  /**
   * `next_page_token` can be sent in a subsequent ListSessions call to fetch
   * more of the matching sessions.
   */
  nextPageToken: string;
  /**
   * The list of requested sessions.
   */
  sessions: Schema$Session[];
}
/**
 * A modification to one or more Cloud Spanner rows.  Mutations can be applied
 * to a Cloud Spanner database by sending them in a Commit call.
 */
export interface Schema$Mutation {
  /**
   * Delete rows from a table. Succeeds whether or not the named rows were
   * present.
   */
  delete: Schema$Delete;
  /**
   * Insert new rows in a table. If any of the rows already exist, the write or
   * transaction fails with error `ALREADY_EXISTS`.
   */
  insert: Schema$Write;
  /**
   * Like insert, except that if the row already exists, then its column values
   * are overwritten with the ones provided. Any column values not explicitly
   * written are preserved.
   */
  insertOrUpdate: Schema$Write;
  /**
   * Like insert, except that if the row already exists, it is deleted, and the
   * column values provided are inserted instead. Unlike insert_or_update, this
   * means any values not explicitly written become `NULL`.
   */
  replace: Schema$Write;
  /**
   * Update existing rows in a table. If any of the rows does not already exist,
   * the transaction fails with error `NOT_FOUND`.
   */
  update: Schema$Write;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$Operation {
  /**
   * If the value is `false`, it means the operation is still in progress. If
   * `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$Status;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `operations/some/unique/name`.
   */
  name: string;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx` is
   * the original method name.  For example, if the original method name is
   * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   */
  response: any;
}
/**
 * Partial results from a streaming read or SQL query. Streaming reads and SQL
 * queries better tolerate large result sets, large rows, and large values, but
 * are a little trickier to consume.
 */
export interface Schema$PartialResultSet {
  /**
   * If true, then the final value in values is chunked, and must be combined
   * with more values from subsequent `PartialResultSet`s to obtain a complete
   * field value.
   */
  chunkedValue: boolean;
  /**
   * Metadata about the result set, such as row type information. Only present
   * in the first response.
   */
  metadata: Schema$ResultSetMetadata;
  /**
   * Streaming calls might be interrupted for a variety of reasons, such as TCP
   * connection loss. If this occurs, the stream of results can be resumed by
   * re-sending the original request and including `resume_token`. Note that
   * executing any other transaction in the same session invalidates the token.
   */
  resumeToken: string;
  /**
   * Query plan and execution statistics for the query that produced this
   * streaming result set. These can be requested by setting
   * ExecuteSqlRequest.query_mode and are sent only once with the last response
   * in the stream.
   */
  stats: Schema$ResultSetStats;
  /**
   * A streamed result set consists of a stream of values, which might be split
   * into many `PartialResultSet` messages to accommodate large rows and/or
   * large values. Every N complete values defines a row, where N is equal to
   * the number of entries in metadata.row_type.fields.  Most values are encoded
   * based on type as described here.  It is possible that the last value in
   * values is &quot;chunked&quot;, meaning that the rest of the value is sent
   * in subsequent `PartialResultSet`(s). This is denoted by the chunked_value
   * field. Two or more chunked values can be merged to form a complete value as
   * follows:    * `bool/number/null`: cannot be chunked   * `string`:
   * concatenate the strings   * `list`: concatenate the lists. If the last
   * element in a list is a     `string`, `list`, or `object`, merge it with the
   * first element in     the next list by applying these rules recursively.   *
   * `object`: concatenate the (field name, field value) pairs. If a     field
   * name is duplicated, then apply these rules recursively     to merge the
   * field values.  Some examples of merging:      # Strings are concatenated.
   * &quot;foo&quot;, &quot;bar&quot; =&gt; &quot;foobar&quot;      # Lists of
   * non-strings are concatenated.     [2, 3], [4] =&gt; [2, 3, 4]      # Lists
   * are concatenated, but the last and first elements are merged     # because
   * they are strings.     [&quot;a&quot;, &quot;b&quot;], [&quot;c&quot;,
   * &quot;d&quot;] =&gt; [&quot;a&quot;, &quot;bc&quot;, &quot;d&quot;]      #
   * Lists are concatenated, but the last and first elements are merged     #
   * because they are lists. Recursively, the last and first elements     # of
   * the inner lists are merged because they are strings.     [&quot;a&quot;,
   * [&quot;b&quot;, &quot;c&quot;]], [[&quot;d&quot;], &quot;e&quot;] =&gt;
   * [&quot;a&quot;, [&quot;b&quot;, &quot;cd&quot;], &quot;e&quot;]      #
   * Non-overlapping object fields are combined.     {&quot;a&quot;:
   * &quot;1&quot;}, {&quot;b&quot;: &quot;2&quot;} =&gt; {&quot;a&quot;:
   * &quot;1&quot;, &quot;b&quot;: 2&quot;}      # Overlapping object fields are
   * merged.     {&quot;a&quot;: &quot;1&quot;}, {&quot;a&quot;: &quot;2&quot;}
   * =&gt; {&quot;a&quot;: &quot;12&quot;}      # Examples of merging objects
   * containing lists of strings.     {&quot;a&quot;: [&quot;1&quot;]},
   * {&quot;a&quot;: [&quot;2&quot;]} =&gt; {&quot;a&quot;: [&quot;12&quot;]}
   * For a more complete example, suppose a streaming SQL query is yielding a
   * result set whose rows contain a single string field. The following
   * `PartialResultSet`s might be yielded:      {       &quot;metadata&quot;: {
   * ... }       &quot;values&quot;: [&quot;Hello&quot;, &quot;W&quot;]
   * &quot;chunked_value&quot;: true       &quot;resume_token&quot;:
   * &quot;Af65...&quot;     }     {       &quot;values&quot;: [&quot;orl&quot;]
   * &quot;chunked_value&quot;: true       &quot;resume_token&quot;:
   * &quot;Bqp2...&quot;     }     {       &quot;values&quot;: [&quot;d&quot;]
   * &quot;resume_token&quot;: &quot;Zx1B...&quot;     }  This sequence of
   * `PartialResultSet`s encodes two rows, one containing the field value
   * `&quot;Hello&quot;`, and a second containing the field value
   * `&quot;World&quot; = &quot;W&quot; + &quot;orl&quot; + &quot;d&quot;`.
   */
  values: any[];
}
/**
 * Information returned for each partition returned in a PartitionResponse.
 */
export interface Schema$Partition {
  /**
   * This token can be passed to Read, StreamingRead, ExecuteSql, or
   * ExecuteStreamingSql requests to restrict the results to those identified by
   * this partition token.
   */
  partitionToken: string;
}
/**
 * Options for a PartitionQueryRequest and PartitionReadRequest.
 */
export interface Schema$PartitionOptions {
  /**
   * **Note:** This hint is currently ignored by PartitionQuery and
   * PartitionRead requests.  The desired maximum number of partitions to
   * return.  For example, this may be set to the number of workers available.
   * The default for this option is currently 10,000. The maximum value is
   * currently 200,000.  This is only a hint.  The actual number of partitions
   * returned may be smaller or larger than this maximum count request.
   */
  maxPartitions: string;
  /**
   * **Note:** This hint is currently ignored by PartitionQuery and
   * PartitionRead requests.  The desired data size for each partition
   * generated.  The default for this option is currently 1 GiB.  This is only a
   * hint. The actual size of each partition may be smaller or larger than this
   * size request.
   */
  partitionSizeBytes: string;
}
/**
 * The request for PartitionQuery
 */
export interface Schema$PartitionQueryRequest {
  /**
   * The SQL query string can contain parameter placeholders. A parameter
   * placeholder consists of `&#39;@&#39;` followed by the parameter name.
   * Parameter names consist of any combination of letters, numbers, and
   * underscores.  Parameters can appear anywhere that a literal value is
   * expected.  The same parameter name can be used more than once, for example:
   * `&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100&quot;`  It is an
   * error to execute an SQL query with unbound parameters.  Parameter values
   * are specified using `params`, which is a JSON object whose keys are
   * parameter names, and whose values are the corresponding parameter values.
   */
  params: any;
  /**
   * It is not always possible for Cloud Spanner to infer the right SQL type
   * from a JSON value.  For example, values of type `BYTES` and values of type
   * `STRING` both appear in params as JSON strings.  In these cases,
   * `param_types` can be used to specify the exact SQL type for some or all of
   * the SQL query parameters. See the definition of Type for more information
   * about SQL types.
   */
  paramTypes: any;
  /**
   * Additional options that affect how many partitions are created.
   */
  partitionOptions: Schema$PartitionOptions;
  /**
   * The query request to generate partitions for. The request will fail if the
   * query is not root partitionable. The query plan of a root partitionable
   * query has a single distributed union operator. A distributed union operator
   * conceptually divides one or more tables into multiple splits, remotely
   * evaluates a subquery independently on each split, and then unions all
   * results.
   */
  sql: string;
  /**
   * Read only snapshot transactions are supported, read/write and single use
   * transactions are not.
   */
  transaction: Schema$TransactionSelector;
}
/**
 * The request for PartitionRead
 */
export interface Schema$PartitionReadRequest {
  /**
   * The columns of table to be returned for each row matching this request.
   */
  columns: string[];
  /**
   * If non-empty, the name of an index on table. This index is used instead of
   * the table primary key when interpreting key_set and sorting result rows.
   * See key_set for further information.
   */
  index: string;
  /**
   * Required. `key_set` identifies the rows to be yielded. `key_set` names the
   * primary keys of the rows in table to be yielded, unless index is present.
   * If index is present, then key_set instead names index keys in index.  It is
   * not an error for the `key_set` to name rows that do not exist in the
   * database. Read yields nothing for nonexistent rows.
   */
  keySet: Schema$KeySet;
  /**
   * Additional options that affect how many partitions are created.
   */
  partitionOptions: Schema$PartitionOptions;
  /**
   * Required. The name of the table in the database to be read.
   */
  table: string;
  /**
   * Read only snapshot transactions are supported, read/write and single use
   * transactions are not.
   */
  transaction: Schema$TransactionSelector;
}
/**
 * The response for PartitionQuery or PartitionRead
 */
export interface Schema$PartitionResponse {
  /**
   * Partitions created by this request.
   */
  partitions: Schema$Partition[];
  /**
   * Transaction created by this request.
   */
  transaction: Schema$Transaction;
}
/**
 * Node information for nodes appearing in a QueryPlan.plan_nodes.
 */
export interface Schema$PlanNode {
  /**
   * List of child node `index`es and their relationship to this parent.
   */
  childLinks: Schema$ChildLink[];
  /**
   * The display name for the node.
   */
  displayName: string;
  /**
   * The execution statistics associated with the node, contained in a group of
   * key-value pairs. Only present if the plan was returned as a result of a
   * profile query. For example, number of executions, number of rows/time per
   * execution etc.
   */
  executionStats: any;
  /**
   * The `PlanNode`&#39;s index in node list.
   */
  index: number;
  /**
   * Used to determine the type of node. May be needed for visualizing different
   * kinds of nodes differently. For example, If the node is a SCALAR node, it
   * will have a condensed representation which can be used to directly embed a
   * description of the node in its parent.
   */
  kind: string;
  /**
   * Attributes relevant to the node contained in a group of key-value pairs.
   * For example, a Parameter Reference node could have the following
   * information in its metadata:      {       &quot;parameter_reference&quot;:
   * &quot;param1&quot;,       &quot;parameter_type&quot;: &quot;array&quot; }
   */
  metadata: any;
  /**
   * Condensed representation for SCALAR nodes.
   */
  shortRepresentation: Schema$ShortRepresentation;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.   A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**      {       &quot;bindings&quot;: [         { &quot;role&quot;:
 * &quot;roles/owner&quot;,           &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] }, {
 * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
 * [&quot;user:sean@example.com&quot;]         }       ]     }  For a
 * description of IAM and its features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * Contains an ordered list of nodes appearing in the query plan.
 */
export interface Schema$QueryPlan {
  /**
   * The nodes in the query plan. Plan nodes are returned in pre-order starting
   * with the plan root. Each PlanNode&#39;s `id` corresponds to its index in
   * `plan_nodes`.
   */
  planNodes: Schema$PlanNode[];
}
/**
 * Message type to initiate a read-only transaction.
 */
export interface Schema$ReadOnly {
  /**
   * Executes all reads at a timestamp that is `exact_staleness` old. The
   * timestamp is chosen soon after the read is started.  Guarantees that all
   * writes that have committed more than the specified number of seconds ago
   * are visible. Because Cloud Spanner chooses the exact timestamp, this mode
   * works even if the client&#39;s local clock is substantially skewed from
   * Cloud Spanner commit timestamps.  Useful for reading at nearby replicas
   * without the distributed timestamp negotiation overhead of `max_staleness`.
   */
  exactStaleness: string;
  /**
   * Read data at a timestamp &gt;= `NOW - max_staleness` seconds. Guarantees
   * that all writes that have committed more than the specified number of
   * seconds ago are visible. Because Cloud Spanner chooses the exact timestamp,
   * this mode works even if the client&#39;s local clock is substantially
   * skewed from Cloud Spanner commit timestamps.  Useful for reading the
   * freshest data available at a nearby replica, while bounding the possible
   * staleness if the local replica has fallen behind.  Note that this option
   * can only be used in single-use transactions.
   */
  maxStaleness: string;
  /**
   * Executes all reads at a timestamp &gt;= `min_read_timestamp`.  This is
   * useful for requesting fresher data than some previous read, or data that is
   * fresh enough to observe the effects of some previously committed
   * transaction whose timestamp is known.  Note that this option can only be
   * used in single-use transactions.  A timestamp in RFC3339 UTC
   * \&quot;Zulu\&quot; format, accurate to nanoseconds. Example:
   * `&quot;2014-10-02T15:01:23.045123456Z&quot;`.
   */
  minReadTimestamp: string;
  /**
   * Executes all reads at the given timestamp. Unlike other modes, reads at a
   * specific timestamp are repeatable; the same read at the same timestamp
   * always returns the same data. If the timestamp is in the future, the read
   * will block until the specified timestamp, modulo the read&#39;s deadline.
   * Useful for large scale consistent reads such as mapreduces, or for
   * coordinating many reads against a consistent snapshot of the data.  A
   * timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to
   * nanoseconds. Example: `&quot;2014-10-02T15:01:23.045123456Z&quot;`.
   */
  readTimestamp: string;
  /**
   * If true, the Cloud Spanner-selected read timestamp is included in the
   * Transaction message that describes the transaction.
   */
  returnReadTimestamp: boolean;
  /**
   * Read at a timestamp where all previously committed transactions are
   * visible.
   */
  strong: boolean;
}
/**
 * The request for Read and StreamingRead.
 */
export interface Schema$ReadRequest {
  /**
   * The columns of table to be returned for each row matching this request.
   */
  columns: string[];
  /**
   * If non-empty, the name of an index on table. This index is used instead of
   * the table primary key when interpreting key_set and sorting result rows.
   * See key_set for further information.
   */
  index: string;
  /**
   * Required. `key_set` identifies the rows to be yielded. `key_set` names the
   * primary keys of the rows in table to be yielded, unless index is present.
   * If index is present, then key_set instead names index keys in index.  If
   * the partition_token field is empty, rows are yielded in table primary key
   * order (if index is empty) or index key order (if index is non-empty).  If
   * the partition_token field is not empty, rows will be yielded in an
   * unspecified order.  It is not an error for the `key_set` to name rows that
   * do not exist in the database. Read yields nothing for nonexistent rows.
   */
  keySet: Schema$KeySet;
  /**
   * If greater than zero, only the first `limit` rows are yielded. If `limit`
   * is zero, the default is no limit. A limit cannot be specified if
   * `partition_token` is set.
   */
  limit: string;
  /**
   * If present, results will be restricted to the specified partition
   * previously created using PartitionRead().    There must be an exact match
   * for the values of fields common to this message and the
   * PartitionReadRequest message used to create this partition_token.
   */
  partitionToken: string;
  /**
   * If this request is resuming a previously interrupted read, `resume_token`
   * should be copied from the last PartialResultSet yielded before the
   * interruption. Doing this enables the new read to resume where the last read
   * left off. The rest of the request parameters must exactly match the request
   * that yielded this token.
   */
  resumeToken: string;
  /**
   * Required. The name of the table in the database to be read.
   */
  table: string;
  /**
   * The transaction to use. If none is provided, the default is a temporary
   * read-only transaction with strong concurrency.
   */
  transaction: Schema$TransactionSelector;
}
/**
 * Message type to initiate a read-write transaction. Currently this transaction
 * type has no options.
 */
export interface Schema$ReadWrite {}
/**
 * Results from Read or ExecuteSql.
 */
export interface Schema$ResultSet {
  /**
   * Metadata about the result set, such as row type information.
   */
  metadata: Schema$ResultSetMetadata;
  /**
   * Each element in `rows` is a row whose format is defined by
   * metadata.row_type. The ith element in each row matches the ith field in
   * metadata.row_type. Elements are encoded based on type as described here.
   */
  rows: any[][];
  /**
   * Query plan and execution statistics for the query that produced this result
   * set. These can be requested by setting ExecuteSqlRequest.query_mode.
   */
  stats: Schema$ResultSetStats;
}
/**
 * Metadata about a ResultSet or PartialResultSet.
 */
export interface Schema$ResultSetMetadata {
  /**
   * Indicates the field names and types for the rows in the result set.  For
   * example, a SQL query like `&quot;SELECT UserId, UserName FROM Users&quot;`
   * could return a `row_type` value like:      &quot;fields&quot;: [       {
   * &quot;name&quot;: &quot;UserId&quot;, &quot;type&quot;: { &quot;code&quot;:
   * &quot;INT64&quot; } },       { &quot;name&quot;: &quot;UserName&quot;,
   * &quot;type&quot;: { &quot;code&quot;: &quot;STRING&quot; } },     ]
   */
  rowType: Schema$StructType;
  /**
   * If the read or SQL query began a transaction as a side-effect, the
   * information about the new transaction is yielded here.
   */
  transaction: Schema$Transaction;
}
/**
 * Additional statistics about a ResultSet or PartialResultSet.
 */
export interface Schema$ResultSetStats {
  /**
   * QueryPlan for the query associated with this result.
   */
  queryPlan: Schema$QueryPlan;
  /**
   * Aggregated statistics from the execution of the query. Only present when
   * the query is profiled. For example, a query could return the statistics as
   * follows:      {       &quot;rows_returned&quot;: &quot;3&quot;,
   * &quot;elapsed_time&quot;: &quot;1.22 secs&quot;, &quot;cpu_time&quot;:
   * &quot;1.19 secs&quot;     }
   */
  queryStats: any;
}
/**
 * The request for Rollback.
 */
export interface Schema$RollbackRequest {
  /**
   * Required. The transaction to roll back.
   */
  transactionId: string;
}
/**
 * A session in the Cloud Spanner API.
 */
export interface Schema$Session {
  /**
   * Output only. The approximate timestamp when the session is last used. It is
   * typically earlier than the actual last use time.
   */
  approximateLastUseTime: string;
  /**
   * Output only. The timestamp when the session is created.
   */
  createTime: string;
  /**
   * The labels for the session.   * Label keys must be between 1 and 63
   * characters long and must conform to    the following regular expression:
   * `[a-z]([-a-z0-9]*[a-z0-9])?`.  * Label values must be between 0 and 63
   * characters long and must conform    to the regular expression
   * `([a-z]([-a-z0-9]*[a-z0-9])?)?`.  * No more than 64 labels can be
   * associated with a given session.  See https://goo.gl/xmQnxf for more
   * information on and examples of labels.
   */
  labels: any;
  /**
   * The name of the session. This is always system-assigned; values provided
   * when creating a session are ignored.
   */
  name: string;
}
/**
 * Request message for `SetIamPolicy` method.
 */
export interface Schema$SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$Policy;
}
/**
 * Condensed representation of a node and its subtree. Only present for `SCALAR`
 * PlanNode(s).
 */
export interface Schema$ShortRepresentation {
  /**
   * A string representation of the expression subtree rooted at this node.
   */
  description: string;
  /**
   * A mapping of (subquery variable name) -&gt; (subquery node id) for cases
   * where the `description` string of this node references a `SCALAR` subquery
   * contained in the expression subtree rooted at this node. The referenced
   * `SCALAR` subquery may not necessarily be a direct child of this node.
   */
  subqueries: any;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * `StructType` defines the fields of a STRUCT type.
 */
export interface Schema$StructType {
  /**
   * The list of fields that make up this struct. Order is significant, because
   * values of this struct type are represented as lists, where the order of
   * field values matches the order of fields in the StructType. In turn, the
   * order of fields matches the order of columns in a read request, or the
   * order of fields in the `SELECT` clause of a query.
   */
  fields: Schema$Field[];
}
/**
 * Request message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsRequest {
  /**
   * REQUIRED: The set of permissions to check for &#39;resource&#39;.
   * Permissions with wildcards (such as &#39;*&#39;, &#39;spanner.*&#39;,
   * &#39;spanner.instances.*&#39;) are not allowed.
   */
  permissions: string[];
}
/**
 * Response message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * A transaction.
 */
export interface Schema$Transaction {
  /**
   * `id` may be used to identify the transaction in subsequent Read,
   * ExecuteSql, Commit, or Rollback calls.  Single-use read-only transactions
   * do not have IDs, because single-use transactions do not support multiple
   * requests.
   */
  id: string;
  /**
   * For snapshot read-only transactions, the read timestamp chosen for the
   * transaction. Not returned by default: see
   * TransactionOptions.ReadOnly.return_read_timestamp.  A timestamp in RFC3339
   * UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example:
   * `&quot;2014-10-02T15:01:23.045123456Z&quot;`.
   */
  readTimestamp: string;
}
/**
 * # Transactions   Each session can have at most one active transaction at a
 * time. After the active transaction is completed, the session can immediately
 * be re-used for the next transaction. It is not necessary to create a new
 * session for each transaction.  # Transaction Modes  Cloud Spanner supports
 * two transaction modes:    1. Locking read-write. This type of transaction is
 * the only way      to write data into Cloud Spanner. These transactions rely
 * on      pessimistic locking and, if necessary, two-phase commit.      Locking
 * read-write transactions may abort, requiring the      application to retry.
 * 2. Snapshot read-only. This transaction type provides guaranteed consistency
 * across several reads, but does not allow      writes. Snapshot read-only
 * transactions can be configured to      read at timestamps in the past.
 * Snapshot read-only      transactions do not need to be committed.  For
 * transactions that only read, snapshot read-only transactions provide simpler
 * semantics and are almost always faster. In particular, read-only transactions
 * do not take locks, so they do not conflict with read-write transactions. As a
 * consequence of not taking locks, they also do not abort, so retry loops are
 * not needed.  Transactions may only read/write data in a single database. They
 * may, however, read/write data in different tables within that database.  ##
 * Locking Read-Write Transactions  Locking transactions may be used to
 * atomically read-modify-write data anywhere in a database. This type of
 * transaction is externally consistent.  Clients should attempt to minimize the
 * amount of time a transaction is active. Faster transactions commit with
 * higher probability and cause less contention. Cloud Spanner attempts to keep
 * read locks active as long as the transaction continues to do reads, and the
 * transaction has not been terminated by Commit or Rollback.  Long periods of
 * inactivity at the client may cause Cloud Spanner to release a
 * transaction&#39;s locks and abort it.  Reads performed within a transaction
 * acquire locks on the data being read. Writes can only be done at commit time,
 * after all reads have been completed. Conceptually, a read-write transaction
 * consists of zero or more reads or SQL queries followed by Commit. At any time
 * before Commit, the client can send a Rollback request to abort the
 * transaction.  ### Semantics  Cloud Spanner can commit the transaction if all
 * read locks it acquired are still valid at commit time, and it is able to
 * acquire write locks for all writes. Cloud Spanner can abort the transaction
 * for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner
 * guarantees that the transaction has not modified any user data in Cloud
 * Spanner.  Unless the transaction commits, Cloud Spanner makes no guarantees
 * about how long the transaction&#39;s locks were held for. It is an error to
 * use Cloud Spanner locks for any sort of mutual exclusion other than between
 * Cloud Spanner transactions themselves.  ### Retrying Aborted Transactions
 * When a transaction aborts, the application can choose to retry the whole
 * transaction again. To maximize the chances of successfully committing the
 * retry, the client should execute the retry in the same session as the
 * original attempt. The original session&#39;s lock priority increases with
 * each consecutive abort, meaning that each attempt has a slightly better
 * chance of success than the previous.  Under some circumstances (e.g., many
 * transactions attempting to modify the same row(s)), a transaction can abort
 * many times in a short period before successfully committing. Thus, it is not
 * a good idea to cap the number of retries a transaction can attempt; instead,
 * it is better to limit the total amount of wall time spent retrying.  ### Idle
 * Transactions  A transaction is considered idle if it has no outstanding reads
 * or SQL queries and has not started a read or SQL query within the last 10
 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
 * don&#39;t hold on to locks indefinitely. In that case, the commit will fail
 * with error `ABORTED`.  If this behavior is undesirable, periodically
 * executing a simple SQL query in the transaction (e.g., `SELECT 1`) prevents
 * the transaction from becoming idle.  ## Snapshot Read-Only Transactions
 * Snapshot read-only transactions provides a simpler method than locking
 * read-write transactions for doing several consistent reads. However, this
 * type of transaction does not support writes.  Snapshot transactions do not
 * take locks. Instead, they work by choosing a Cloud Spanner timestamp, then
 * executing all reads at that timestamp. Since they do not acquire locks, they
 * do not block concurrent read-write transactions.  Unlike locking read-write
 * transactions, snapshot read-only transactions never abort. They can fail if
 * the chosen read timestamp is garbage collected; however, the default garbage
 * collection policy is generous enough that most applications do not need to
 * worry about this in practice.  Snapshot read-only transactions do not need to
 * call Commit or Rollback (and in fact are not permitted to do so).  To execute
 * a snapshot transaction, the client specifies a timestamp bound, which tells
 * Cloud Spanner how to choose a read timestamp.  The types of timestamp bound
 * are:    - Strong (the default).   - Bounded staleness.   - Exact staleness.
 * If the Cloud Spanner database to be read is geographically distributed, stale
 * read-only transactions can execute more quickly than strong or read-write
 * transaction, because they are able to execute far from the leader replica.
 * Each type of timestamp bound is discussed in detail below.  ### Strong Strong
 * reads are guaranteed to see the effects of all transactions that have
 * committed before the start of the read. Furthermore, all rows yielded by a
 * single read are consistent with each other -- if any part of the read
 * observes a transaction, all parts of the read see the transaction.  Strong
 * reads are not repeatable: two consecutive strong read-only transactions might
 * return inconsistent results if there are concurrent writes. If consistency
 * across reads is required, the reads should be executed within a transaction
 * or at an exact read timestamp.  See TransactionOptions.ReadOnly.strong.  ###
 * Exact Staleness  These timestamp bounds execute reads at a user-specified
 * timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of
 * the global transaction history: they observe modifications done by all
 * transactions with a commit timestamp &lt;= the read timestamp, and observe
 * none of the modifications done by transactions with a larger commit
 * timestamp. They will block until all conflicting transactions that may be
 * assigned commit timestamps &lt;= the read timestamp have finished.  The
 * timestamp can either be expressed as an absolute Cloud Spanner commit
 * timestamp or a staleness relative to the current time.  These modes do not
 * require a &quot;negotiation phase&quot; to pick a timestamp. As a result,
 * they execute slightly faster than the equivalent boundedly stale concurrency
 * modes. On the other hand, boundedly stale reads usually return fresher
 * results.  See TransactionOptions.ReadOnly.read_timestamp and
 * TransactionOptions.ReadOnly.exact_staleness.  ### Bounded Staleness  Bounded
 * staleness modes allow Cloud Spanner to pick the read timestamp, subject to a
 * user-provided staleness bound. Cloud Spanner chooses the newest timestamp
 * within the staleness bound that allows execution of the reads at the closest
 * available replica without blocking.  All rows yielded are consistent with
 * each other -- if any part of the read observes a transaction, all parts of
 * the read see the transaction. Boundedly stale reads are not repeatable: two
 * stale reads, even if they use the same staleness bound, can execute at
 * different timestamps and thus return inconsistent results.  Boundedly stale
 * reads execute in two phases: the first phase negotiates a timestamp among all
 * replicas needed to serve the read. In the second phase, reads are executed at
 * the negotiated timestamp.  As a result of the two phase execution, bounded
 * staleness reads are usually a little slower than comparable exact staleness
 * reads. However, they are typically able to return fresher results, and are
 * more likely to execute at the closest replica.  Because the timestamp
 * negotiation requires up-front knowledge of which rows will be read, it can
 * only be used with single-use read-only transactions.  See
 * TransactionOptions.ReadOnly.max_staleness and
 * TransactionOptions.ReadOnly.min_read_timestamp.  ### Old Read Timestamps and
 * Garbage Collection  Cloud Spanner continuously garbage collects deleted and
 * overwritten data in the background to reclaim storage space. This process is
 * known as &quot;version GC&quot;. By default, version GC reclaims versions
 * after they are one hour old. Because of this, Cloud Spanner cannot perform
 * reads at read timestamps more than one hour in the past. This restriction
 * also applies to in-progress reads and/or SQL queries whose timestamp become
 * too old while executing. Reads and SQL queries with too-old read timestamps
 * fail with the error `FAILED_PRECONDITION`.
 */
export interface Schema$TransactionOptions {
  /**
   * Transaction will not write.  Authorization to begin a read-only transaction
   * requires `spanner.databases.beginReadOnlyTransaction` permission on the
   * `session` resource.
   */
  readOnly: Schema$ReadOnly;
  /**
   * Transaction may write.  Authorization to begin a read-write transaction
   * requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission
   * on the `session` resource.
   */
  readWrite: Schema$ReadWrite;
}
/**
 * This message is used to select the transaction in which a Read or ExecuteSql
 * call runs.  See TransactionOptions for more information about transactions.
 */
export interface Schema$TransactionSelector {
  /**
   * Begin a new transaction and execute this read or SQL query in it. The
   * transaction ID of the new transaction is returned in
   * ResultSetMetadata.transaction, which is a Transaction.
   */
  begin: Schema$TransactionOptions;
  /**
   * Execute the read or SQL query in a previously-started transaction.
   */
  id: string;
  /**
   * Execute the read or SQL query in a temporary transaction. This is the most
   * efficient way to execute a transaction that consists of a single SQL query.
   */
  singleUse: Schema$TransactionOptions;
}
/**
 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a
 * table cell or returned from an SQL query.
 */
export interface Schema$Type {
  /**
   * If code == ARRAY, then `array_element_type` is the type of the array
   * elements.
   */
  arrayElementType: Schema$Type;
  /**
   * Required. The TypeCode for this type.
   */
  code: string;
  /**
   * If code == STRUCT, then `struct_type` provides type information for the
   * struct&#39;s fields.
   */
  structType: Schema$StructType;
}
/**
 * Metadata type for the operation returned by UpdateDatabaseDdl.
 */
export interface Schema$UpdateDatabaseDdlMetadata {
  /**
   * Reports the commit timestamps of all statements that have succeeded so far,
   * where `commit_timestamps[i]` is the commit timestamp for the statement
   * `statements[i]`.
   */
  commitTimestamps: string[];
  /**
   * The database being modified.
   */
  database: string;
  /**
   * For an update this list contains all the statements. For an individual
   * statement, this list contains only that statement.
   */
  statements: string[];
}
/**
 * Enqueues the given DDL statements to be applied, in order but not necessarily
 * all at once, to the database schema at some point (or points) in the future.
 * The server checks that the statements are executable (syntactically valid,
 * name tables that exist, etc.) before enqueueing them, but they may still fail
 * upon later execution (e.g., if a statement from another batch of statements
 * is applied first and it conflicts in some way, or if there is some
 * data-related problem like a `NULL` value in a column to which `NOT NULL`
 * would be added). If a statement fails, all subsequent statements in the batch
 * are automatically cancelled.  Each batch of statements is assigned a name
 * which can be used with the Operations API to monitor progress. See the
 * operation_id field for more details.
 */
export interface Schema$UpdateDatabaseDdlRequest {
  /**
   * If empty, the new update request is assigned an automatically-generated
   * operation ID. Otherwise, `operation_id` is used to construct the name of
   * the resulting Operation.  Specifying an explicit operation ID simplifies
   * determining whether the statements were executed in the event that the
   * UpdateDatabaseDdl call is replayed, or the return value is otherwise lost:
   * the database and `operation_id` fields can be combined to form the name of
   * the resulting longrunning.Operation:
   * `&lt;database&gt;/operations/&lt;operation_id&gt;`.  `operation_id` should
   * be unique within the database, and must be a valid identifier: `a-z*`. Note
   * that automatically-generated operation IDs always begin with an underscore.
   * If the named operation already exists, UpdateDatabaseDdl returns
   * `ALREADY_EXISTS`.
   */
  operationId: string;
  /**
   * DDL statements to be applied to the database.
   */
  statements: string[];
}
/**
 * Metadata type for the operation returned by UpdateInstance.
 */
export interface Schema$UpdateInstanceMetadata {
  /**
   * The time at which this operation was cancelled. If set, this operation is
   * in the process of undoing itself (which is guaranteed to succeed) and
   * cannot be cancelled again.
   */
  cancelTime: string;
  /**
   * The time at which this operation failed or was completed successfully.
   */
  endTime: string;
  /**
   * The desired end state of the update.
   */
  instance: Schema$Instance;
  /**
   * The time at which UpdateInstance request was received.
   */
  startTime: string;
}
/**
 * The request for UpdateInstance.
 */
export interface Schema$UpdateInstanceRequest {
  /**
   * Required. A mask specifying which fields in
   * [][google.spanner.admin.instance.v1.UpdateInstanceRequest.instance] should
   * be updated. The field mask must always be specified; this prevents any
   * future fields in [][google.spanner.admin.instance.v1.Instance] from being
   * erased accidentally by clients that do not know about them.
   */
  fieldMask: string;
  /**
   * Required. The instance to update, which must always include the instance
   * name.  Otherwise, only fields mentioned in
   * [][google.spanner.admin.instance.v1.UpdateInstanceRequest.field_mask] need
   * be included.
   */
  instance: Schema$Instance;
}
/**
 * Arguments to insert, update, insert_or_update, and replace operations.
 */
export interface Schema$Write {
  /**
   * The names of the columns in table to be written.  The list of columns must
   * contain enough columns to allow Cloud Spanner to derive values for all
   * primary key columns in the row(s) to be modified.
   */
  columns: string[];
  /**
   * Required. The table whose rows will be written.
   */
  table: string;
  /**
   * The values to be written. `values` can contain more than one list of
   * values. If it does, then multiple rows are written, one for each entry in
   * `values`. Each list in `values` must have exactly as many entries as there
   * are entries in columns above. Sending multiple lists is equivalent to
   * sending multiple `Mutation`s, each containing one `values` entry and
   * repeating table and columns. Individual values in each list are encoded as
   * described here.
   */
  values: any[][];
}

export class Resource$Projects {
  root: Spanner;
  instanceConfigs: Resource$Projects$Instanceconfigs;
  instances: Resource$Projects$Instances;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
    this.instanceConfigs = new Resource$Projects$Instanceconfigs(root);
    this.instances = new Resource$Projects$Instances(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Instanceconfigs {
  root: Spanner;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$InstanceConfig>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InstanceConfig>,
      callback?: BodyResponseCallback<Schema$InstanceConfig>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InstanceConfig>,
      callback?: BodyResponseCallback<Schema$InstanceConfig>):
      void|AxiosPromise<Schema$InstanceConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListInstanceConfigsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListInstanceConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListInstanceConfigsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListInstanceConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListInstanceConfigsResponse>):
      void|AxiosPromise<Schema$ListInstanceConfigsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instanceConfigs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListInstanceConfigsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListInstanceConfigsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Instances {
  root: Spanner;
  databases: Resource$Projects$Instances$Databases;
  operations: Resource$Projects$Instances$Operations;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
    this.databases = new Resource$Projects$Instances$Databases(root);
    this.operations = new Resource$Projects$Instances$Operations(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * spanner.projects.instances.create
   * @desc Creates an instance and begins preparing it to begin serving. The
   * returned long-running operation can be used to track the progress of
   * preparing the new instance. The instance name is assigned by the caller. If
   * the named instance already exists, `CreateInstance` returns
   * `ALREADY_EXISTS`.  Immediately upon completion of this request:    * The
   * instance is readable via the API, with all requested attributes     but no
   * allocated resources. Its state is `CREATING`.  Until completion of the
   * returned operation:    * Cancelling the operation renders the instance
   * immediately unreadable     via the API.   * The instance can be deleted. *
   * All other attempts to modify the instance are rejected.  Upon completion of
   * the returned operation:    * Billing for all successfully-allocated
   * resources begins (some types     may have lower than the requested levels).
   * * Databases can be created in the instance.   * The instance's allocated
   * resource levels are readable via the API.   * The instance's state becomes
   * `READY`.  The returned long-running operation will have a name of the
   * format `<instance_name>/operations/<operation_id>` and can be used to track
   * creation of the instance.  The metadata field type is
   * CreateInstanceMetadata. The response field type is Instance, if successful.
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * spanner.projects.instances.delete
   * @desc Deletes an instance.  Immediately upon completion of the request: *
   * Billing ceases for all of the instance's reserved resources.  Soon
   * afterward:    * The instance and *all of its databases* immediately and
   * irrevocably disappear from the API. All data in the databases     is
   * permanently deleted.
   * @alias spanner.projects.instances.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Instance>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>):
      void|AxiosPromise<Schema$Instance> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Instance>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Instance>(parameters);
    }
  }


  /**
   * spanner.projects.instances.getIamPolicy
   * @desc Gets the access control policy for an instance resource. Returns an
   * empty policy if an instance exists but does not have a policy set.
   * Authorization requires `spanner.instances.getIamPolicy` on resource.
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
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
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
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListInstancesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListInstancesResponse>,
      callback?: BodyResponseCallback<Schema$ListInstancesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListInstancesResponse>,
      callback?: BodyResponseCallback<Schema$ListInstancesResponse>):
      void|AxiosPromise<Schema$ListInstancesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListInstancesResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.patch
   * @desc Updates an instance, and begins allocating or releasing resources as
   * requested. The returned long-running operation can be used to track the
   * progress of updating the instance. If the named instance does not exist,
   * returns `NOT_FOUND`.  Immediately upon completion of this request:    * For
   * resource types for which a decrease in the instance's allocation     has
   * been requested, billing is based on the newly-requested level.  Until
   * completion of the returned operation:    * Cancelling the operation sets
   * its metadata's     cancel_time, and begins     restoring resources to their
   * pre-request values. The operation     is guaranteed to succeed at undoing
   * all resource changes,     after which point it terminates with a
   * `CANCELLED` status.   * All other attempts to modify the instance are
   * rejected.   * Reading the instance via the API continues to give the
   * pre-request     resource levels.  Upon completion of the returned
   * operation:    * Billing begins for all successfully-allocated resources
   * (some types     may have lower than the requested levels).   * All
   * newly-reserved resources are available for serving the instance's tables.
   * * The instance's new resource levels are readable via the API.  The
   * returned long-running operation will have a name of the format
   * `<instance_name>/operations/<operation_id>` and can be used to track the
   * instance modification.  The metadata field type is UpdateInstanceMetadata.
   * The response field type is Instance, if successful.  Authorization requires
   * `spanner.instances.update` permission on resource name.
   * @alias spanner.projects.instances.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/a-z*[a-z0-9]`. The final segment of the name must be between 6 and 30 characters in length.
   * @param {().UpdateInstanceRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * spanner.projects.instances.setIamPolicy
   * @desc Sets the access control policy on an instance resource. Replaces any
   * existing policy.  Authorization requires `spanner.instances.setIamPolicy`
   * on resource.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
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
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * spanner.projects.instances.testIamPermissions
   * @desc Returns permissions that the caller has on the specified instance
   * resource.  Attempting this RPC on a non-existent Cloud Spanner instance
   * resource will result in a NOT_FOUND error if the user has
   * `spanner.instances.list` permission on the containing Google Cloud Project.
   * Otherwise returns an empty set of permissions.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
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
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Instances$Databases {
  root: Spanner;
  operations: Resource$Projects$Instances$Databases$Operations;
  sessions: Resource$Projects$Instances$Databases$Sessions;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
    this.operations =
        new Resource$Projects$Instances$Databases$Operations(root);
    this.sessions = new Resource$Projects$Instances$Databases$Sessions(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * spanner.projects.instances.databases.create
   * @desc Creates a new Cloud Spanner database and starts to prepare it for
   * serving. The returned long-running operation will have a name of the format
   * `<database_name>/operations/<operation_id>` and can be used to track
   * preparation of the database. The metadata field type is
   * CreateDatabaseMetadata. The response field type is Database, if successful.
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
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
  dropDatabase(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Empty>;
  dropDatabase(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  dropDatabase(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['database'],
      pathParams: ['database'],
      context: this.getRoot()
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Database>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Database>,
      callback?: BodyResponseCallback<Schema$Database>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Database>,
      callback?: BodyResponseCallback<Schema$Database>):
      void|AxiosPromise<Schema$Database> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Database>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Database>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.getDdl
   * @desc Returns the schema of a Cloud Spanner database as a list of formatted
   * DDL statements. This method does not show pending schema updates, those may
   * be queried using the Operations API.
   * @alias spanner.projects.instances.databases.getDdl
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.database Required. The database whose schema we wish to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getDdl(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetDatabaseDdlResponse>;
  getDdl(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetDatabaseDdlResponse>,
      callback?: BodyResponseCallback<Schema$GetDatabaseDdlResponse>): void;
  getDdl(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetDatabaseDdlResponse>,
      callback?: BodyResponseCallback<Schema$GetDatabaseDdlResponse>):
      void|AxiosPromise<Schema$GetDatabaseDdlResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+database}/ddl').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['database'],
      pathParams: ['database'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetDatabaseDdlResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetDatabaseDdlResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.getIamPolicy
   * @desc Gets the access control policy for a database resource. Returns an
   * empty policy if a database exists but does not have a policy set.
   * Authorization requires `spanner.databases.getIamPolicy` permission on
   * resource.
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
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
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
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDatabasesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDatabasesResponse>,
      callback?: BodyResponseCallback<Schema$ListDatabasesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDatabasesResponse>,
      callback?: BodyResponseCallback<Schema$ListDatabasesResponse>):
      void|AxiosPromise<Schema$ListDatabasesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDatabasesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDatabasesResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.setIamPolicy
   * @desc Sets the access control policy on a database resource. Replaces any
   * existing policy.  Authorization requires `spanner.databases.setIamPolicy`
   * permission on resource.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
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
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.testIamPermissions
   * @desc Returns permissions that the caller has on the specified database
   * resource.  Attempting this RPC on a non-existent Cloud Spanner database
   * will result in a NOT_FOUND error if the user has `spanner.databases.list`
   * permission on the containing Cloud Spanner instance. Otherwise returns an
   * empty set of permissions.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
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
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.updateDdl
   * @desc Updates the schema of a Cloud Spanner database by
   * creating/altering/dropping tables, columns, indexes, etc. The returned
   * long-running operation will have a name of the format
   * `<database_name>/operations/<operation_id>` and can be used to track
   * execution of the schema change(s). The metadata field type is
   * UpdateDatabaseDdlMetadata.  The operation has no response.
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
  updateDdl(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  updateDdl(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  updateDdl(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+database}/ddl').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['database'],
      pathParams: ['database'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
}
export class Resource$Projects$Instances$Databases$Operations {
  root: Spanner;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * spanner.projects.instances.databases.operations.cancel
   * @desc Starts asynchronous cancellation on a long-running operation.  The
   * server makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
   * or other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation, the
   * operation is not deleted; instead, it becomes an operation with an
   * Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * `Code.CANCELLED`.
   * @alias spanner.projects.instances.databases.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.operations.delete
   * @desc Deletes a long-running operation. This method indicates that the
   * client is no longer interested in the operation result. It does not cancel
   * the operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   * @alias spanner.projects.instances.databases.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias spanner.projects.instances.databases.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.operations.list
   * @desc Lists operations that match the specified filter in the request. If
   * the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE:
   * the `name` binding allows API services to override the binding to use
   * different resource name schemes, such as `users/x/operations`. To override
   * the binding, API services can add a binding such as
   * `"/v1/{name=users/x}/operations"` to their service configuration. For
   * backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding is the
   * parent resource, without the operations collection id.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
      void|AxiosPromise<Schema$ListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListOperationsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Instances$Databases$Sessions {
  root: Spanner;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * spanner.projects.instances.databases.sessions.beginTransaction
   * @desc Begins a new transaction. This step can often be skipped: Read,
   * ExecuteSql and Commit can begin a new transaction as a side-effect.
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
  beginTransaction(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Transaction>;
  beginTransaction(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Transaction>,
      callback?: BodyResponseCallback<Schema$Transaction>): void;
  beginTransaction(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Transaction>,
      callback?: BodyResponseCallback<Schema$Transaction>):
      void|AxiosPromise<Schema$Transaction> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:beginTransaction')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Transaction>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Transaction>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.commit
   * @desc Commits a transaction. The request includes the mutations to be
   * applied to rows in the database.  `Commit` might return an `ABORTED` error.
   * This can occur at any time; commonly, the cause is conflicts with
   * concurrent transactions. However, it can also happen for a variety of other
   * reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the
   * transaction from the beginning, re-using the same session.
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
  commit(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CommitResponse>;
  commit(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommitResponse>,
      callback?: BodyResponseCallback<Schema$CommitResponse>): void;
  commit(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommitResponse>,
      callback?: BodyResponseCallback<Schema$CommitResponse>):
      void|AxiosPromise<Schema$CommitResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:commit')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CommitResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommitResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.create
   * @desc Creates a new session. A session can be used to perform transactions
   * that read and/or modify data in a Cloud Spanner database. Sessions are
   * meant to be reused for many consecutive transactions.  Sessions can only
   * execute one transaction at a time. To execute multiple concurrent
   * read-write/write-only transactions, create multiple sessions. Note that
   * standalone reads and queries use a transaction internally, and count toward
   * the one transaction limit.  Cloud Spanner limits the number of sessions
   * that can exist at any given time; thus, it is a good idea to delete idle
   * and/or unneeded sessions. Aside from explicit deletes, Cloud Spanner can
   * delete sessions for which no operations are sent for more than an hour. If
   * a session is deleted, requests to it return `NOT_FOUND`.  Idle sessions can
   * be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT
   * 1"`.
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Session>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>):
      void|AxiosPromise<Schema$Session> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/sessions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['database'],
      pathParams: ['database'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Session>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Session>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.delete
   * @desc Ends a session, releasing server resources associated with it.
   * @alias spanner.projects.instances.databases.sessions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the session to delete.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.executeSql
   * @desc Executes an SQL query, returning all rows in a single reply. This
   * method cannot be used to return a result set larger than 10 MiB; if the
   * query yields more data than that, the query fails with a
   * `FAILED_PRECONDITION` error.  Queries inside read-write transactions might
   * return `ABORTED`. If this occurs, the application should restart the
   * transaction from the beginning. See Transaction for more details.  Larger
   * result sets can be fetched in streaming fashion by calling
   * ExecuteStreamingSql instead.
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
  executeSql(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ResultSet>;
  executeSql(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ResultSet>,
      callback?: BodyResponseCallback<Schema$ResultSet>): void;
  executeSql(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ResultSet>,
      callback?: BodyResponseCallback<Schema$ResultSet>):
      void|AxiosPromise<Schema$ResultSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:executeSql')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResultSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ResultSet>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.executeStreamingSql
   * @desc Like ExecuteSql, except returns the result set as a stream. Unlike
   * ExecuteSql, there is no limit on the size of the returned result set.
   * However, no individual row in the result set can exceed 100 MiB, and no
   * column value can exceed 10 MiB.
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
  executeStreamingSql(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PartialResultSet>;
  executeStreamingSql(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartialResultSet>,
      callback?: BodyResponseCallback<Schema$PartialResultSet>): void;
  executeStreamingSql(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartialResultSet>,
      callback?: BodyResponseCallback<Schema$PartialResultSet>):
      void|AxiosPromise<Schema$PartialResultSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:executeStreamingSql')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PartialResultSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PartialResultSet>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.get
   * @desc Gets a session. Returns `NOT_FOUND` if the session does not exist.
   * This is mainly useful for determining whether a session is still alive.
   * @alias spanner.projects.instances.databases.sessions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the session to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Session>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>):
      void|AxiosPromise<Schema$Session> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListSessionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListSessionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSessionsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListSessionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSessionsResponse>):
      void|AxiosPromise<Schema$ListSessionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/sessions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['database'],
      pathParams: ['database'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListSessionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListSessionsResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.partitionQuery
   * @desc Creates a set of partition tokens that can be used to execute a query
   * operation in parallel.  Each of the returned partition tokens can be used
   * by ExecuteStreamingSql to specify a subset of the query result to read. The
   * same session and read-only transaction must be used by the
   * PartitionQueryRequest used to create the partition tokens and the
   * ExecuteSqlRequests that use the partition tokens. Partition tokens become
   * invalid when the session used to create them is deleted or begins a new
   * transaction.
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
  partitionQuery(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PartitionResponse>;
  partitionQuery(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartitionResponse>,
      callback?: BodyResponseCallback<Schema$PartitionResponse>): void;
  partitionQuery(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartitionResponse>,
      callback?: BodyResponseCallback<Schema$PartitionResponse>):
      void|AxiosPromise<Schema$PartitionResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:partitionQuery')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PartitionResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PartitionResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.partitionRead
   * @desc Creates a set of partition tokens that can be used to execute a read
   * operation in parallel.  Each of the returned partition tokens can be used
   * by StreamingRead to specify a subset of the read result to read.  The same
   * session and read-only transaction must be used by the PartitionReadRequest
   * used to create the partition tokens and the ReadRequests that use the
   * partition tokens. Partition tokens become invalid when the session used to
   * create them is deleted or begins a new transaction.
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
  partitionRead(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PartitionResponse>;
  partitionRead(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartitionResponse>,
      callback?: BodyResponseCallback<Schema$PartitionResponse>): void;
  partitionRead(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartitionResponse>,
      callback?: BodyResponseCallback<Schema$PartitionResponse>):
      void|AxiosPromise<Schema$PartitionResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:partitionRead')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PartitionResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PartitionResponse>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.read
   * @desc Reads rows from the database using key lookups and scans, as a simple
   * key/value style alternative to ExecuteSql.  This method cannot be used to
   * return a result set larger than 10 MiB; if the read matches more data than
   * that, the read fails with a `FAILED_PRECONDITION` error.  Reads inside
   * read-write transactions might return `ABORTED`. If this occurs, the
   * application should restart the transaction from the beginning. See
   * Transaction for more details.  Larger result sets can be yielded in
   * streaming fashion by calling StreamingRead instead.
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
  read(params?: any, options?: MethodOptions): AxiosPromise<Schema$ResultSet>;
  read(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ResultSet>,
      callback?: BodyResponseCallback<Schema$ResultSet>): void;
  read(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ResultSet>,
      callback?: BodyResponseCallback<Schema$ResultSet>):
      void|AxiosPromise<Schema$ResultSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+session}:read').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResultSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ResultSet>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.rollback
   * @desc Rolls back a transaction, releasing any locks it holds. It is a good
   * idea to call this for any transaction that includes one or more Read or
   * ExecuteSql requests and ultimately decides not to commit.  `Rollback`
   * returns `OK` if it successfully aborts the transaction, the transaction was
   * already aborted, or the transaction is not found. `Rollback` never returns
   * `ABORTED`.
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
  rollback(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  rollback(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  rollback(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:rollback')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * spanner.projects.instances.databases.sessions.streamingRead
   * @desc Like Read, except returns the result set as a stream. Unlike Read,
   * there is no limit on the size of the returned result set. However, no
   * individual row in the result set can exceed 100 MiB, and no column value
   * can exceed 10 MiB.
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
  streamingRead(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PartialResultSet>;
  streamingRead(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartialResultSet>,
      callback?: BodyResponseCallback<Schema$PartialResultSet>): void;
  streamingRead(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PartialResultSet>,
      callback?: BodyResponseCallback<Schema$PartialResultSet>):
      void|AxiosPromise<Schema$PartialResultSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+session}:streamingRead')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['session'],
      pathParams: ['session'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PartialResultSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PartialResultSet>(parameters);
    }
  }
}


export class Resource$Projects$Instances$Operations {
  root: Spanner;
  constructor(root: Spanner) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * spanner.projects.instances.operations.cancel
   * @desc Starts asynchronous cancellation on a long-running operation.  The
   * server makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
   * or other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation, the
   * operation is not deleted; instead, it becomes an operation with an
   * Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * `Code.CANCELLED`.
   * @alias spanner.projects.instances.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * spanner.projects.instances.operations.delete
   * @desc Deletes a long-running operation. This method indicates that the
   * client is no longer interested in the operation result. It does not cancel
   * the operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   * @alias spanner.projects.instances.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * spanner.projects.instances.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias spanner.projects.instances.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * spanner.projects.instances.operations.list
   * @desc Lists operations that match the specified filter in the request. If
   * the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE:
   * the `name` binding allows API services to override the binding to use
   * different resource name schemes, such as `users/x/operations`. To override
   * the binding, API services can add a binding such as
   * `"/v1/{name=users/x}/operations"` to their service configuration. For
   * backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding is the
   * parent resource, without the operations collection id.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
      void|AxiosPromise<Schema$ListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListOperationsResponse>(parameters);
    }
  }
}
