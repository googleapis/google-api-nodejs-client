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

export namespace datastore_v1 {
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
   * Cloud Datastore API
   *
   * Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datastore = google.datastore('v1');
   * ```
   */
  export class Datastore {
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
   * Defines an aggregation that produces a single result.
   */
  export interface Schema$Aggregation {
    /**
     * Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format `property_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations.
     */
    alias?: string | null;
    /**
     * Average aggregator.
     */
    avg?: Schema$Avg;
    /**
     * Count aggregator.
     */
    count?: Schema$Count;
    /**
     * Sum aggregator.
     */
    sum?: Schema$Sum;
  }
  /**
   * Datastore query for running an aggregation over a Query.
   */
  export interface Schema$AggregationQuery {
    /**
     * Optional. Series of aggregations to apply over the results of the `nested_query`. Requires: * A minimum of one and maximum of five aggregations per query.
     */
    aggregations?: Schema$Aggregation[];
    /**
     * Nested query for aggregation
     */
    nestedQuery?: Schema$Query;
  }
  /**
   * The result of a single bucket from a Datastore aggregation query. The keys of `aggregate_properties` are the same for all results in an aggregation query, unlike entity queries which can have different fields present for each result.
   */
  export interface Schema$AggregationResult {
    /**
     * The result of the aggregation functions, ex: `COUNT(*) AS total_entities`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query.
     */
    aggregateProperties?: {[key: string]: Schema$Value} | null;
  }
  /**
   * A batch of aggregation results produced by an aggregation query.
   */
  export interface Schema$AggregationResultBatch {
    /**
     * The aggregation results for this batch.
     */
    aggregationResults?: Schema$AggregationResult[];
    /**
     * The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`.
     */
    moreResults?: string | null;
    /**
     * Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches.
     */
    readTime?: string | null;
  }
  /**
   * The request for Datastore.AllocateIds.
   */
  export interface Schema$AllocateIdsRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only.
     */
    keys?: Schema$Key[];
  }
  /**
   * The response for Datastore.AllocateIds.
   */
  export interface Schema$AllocateIdsResponse {
    /**
     * The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
     */
    keys?: Schema$Key[];
  }
  /**
   * An array value.
   */
  export interface Schema$ArrayValue {
    /**
     * Values in the array. The order of values in an array is preserved as long as all values have identical settings for 'exclude_from_indexes'.
     */
    values?: Schema$Value[];
  }
  /**
   * Average of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double.
   */
  export interface Schema$Avg {
    /**
     * The property to aggregate on.
     */
    property?: Schema$PropertyReference;
  }
  /**
   * The request for Datastore.BeginTransaction.
   */
  export interface Schema$BeginTransactionRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * Options for a new transaction.
     */
    transactionOptions?: Schema$TransactionOptions;
  }
  /**
   * The response for Datastore.BeginTransaction.
   */
  export interface Schema$BeginTransactionResponse {
    /**
     * The transaction identifier (always present).
     */
    transaction?: string | null;
  }
  /**
   * The request for Datastore.Commit.
   */
  export interface Schema$CommitRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * The type of commit to perform. Defaults to `TRANSACTIONAL`.
     */
    mode?: string | null;
    /**
     * The mutations to perform. When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request: - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update` When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity.
     */
    mutations?: Schema$Mutation[];
    /**
     * Options for beginning a new transaction for this request. The transaction is committed when the request completes. If specified, TransactionOptions.mode must be TransactionOptions.ReadWrite.
     */
    singleUseTransaction?: Schema$TransactionOptions;
    /**
     * The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string | null;
  }
  /**
   * The response for Datastore.Commit.
   */
  export interface Schema$CommitResponse {
    /**
     * The transaction commit timestamp. Not set for non-transactional commits.
     */
    commitTime?: string | null;
    /**
     * The number of index entries updated during the commit, or zero if none were updated.
     */
    indexUpdates?: number | null;
    /**
     * The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request.
     */
    mutationResults?: Schema$MutationResult[];
  }
  /**
   * A filter that merges multiple other filters using the given operator.
   */
  export interface Schema$CompositeFilter {
    /**
     * The list of filters to combine. Requires: * At least one filter is present.
     */
    filters?: Schema$Filter[];
    /**
     * The operator for combining multiple filters.
     */
    op?: string | null;
  }
  /**
   * Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.
   */
  export interface Schema$Count {
    /**
     * Optional. Optional constraint on the maximum number of entities to count. This provides a way to set an upper bound on the number of entities to scan, limiting latency, and cost. Unspecified is interpreted as no bound. If a zero value is provided, a count result of zero should always be expected. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be non-negative when present.
     */
    upTo?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A Datastore data object. Must not exceed 1 MiB - 4 bytes.
   */
  export interface Schema$Entity {
    /**
     * The entity's key. An entity must have a key, unless otherwise documented (for example, an entity in `Value.entity_value` may have no key). An entity's kind is its key path's last element's kind, or null if it has no key.
     */
    key?: Schema$Key;
    /**
     * The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty.
     */
    properties?: {[key: string]: Schema$Value} | null;
  }
  /**
   * The result of fetching an entity from Datastore.
   */
  export interface Schema$EntityResult {
    /**
     * The time at which the entity was created. This field is set for `FULL` entity results. If this entity is missing, this field will not be set.
     */
    createTime?: string | null;
    /**
     * A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message.
     */
    cursor?: string | null;
    /**
     * The resulting entity.
     */
    entity?: Schema$Entity;
    /**
     * The time at which the entity was last changed. This field is set for `FULL` entity results. If this entity is missing, this field will not be set.
     */
    updateTime?: string | null;
    /**
     * The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads.
     */
    version?: string | null;
  }
  /**
   * A holder for any type of filter.
   */
  export interface Schema$Filter {
    /**
     * A composite filter.
     */
    compositeFilter?: Schema$CompositeFilter;
    /**
     * A filter on a property.
     */
    propertyFilter?: Schema$PropertyFilter;
  }
  /**
   * Metadata common to all Datastore Admin operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1CommonMetadata {
    /**
     * The time the operation ended, either successfully or otherwise.
     */
    endTime?: string | null;
    /**
     * The client-assigned labels which were provided when the operation was created. May also include additional labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The type of the operation. Can be used as a filter in ListOperationsRequest.
     */
    operationType?: string | null;
    /**
     * The time that work began on the operation.
     */
    startTime?: string | null;
    /**
     * The current state of the Operation.
     */
    state?: string | null;
  }
  /**
   * Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
   */
  export interface Schema$GoogleDatastoreAdminV1beta1EntityFilter {
    /**
     * If empty, then this represents all kinds.
     */
    kinds?: string[] | null;
    /**
     * An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
     */
    namespaceIds?: string[] | null;
  }
  /**
   * Metadata for ExportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1beta1CommonMetadata;
    /**
     * Description of which entities are being exported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
     */
    outputUrlPrefix?: string | null;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1beta1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1beta1Progress;
  }
  /**
   * The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
    /**
     * Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.
     */
    outputUrl?: string | null;
  }
  /**
   * Metadata for ImportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1beta1CommonMetadata;
    /**
     * Description of which entities are being imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field.
     */
    inputUrl?: string | null;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1beta1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1beta1Progress;
  }
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1Progress {
    /**
     * The amount of work that has been completed. Note that this may be greater than work_estimated.
     */
    workCompleted?: string | null;
    /**
     * An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.
     */
    workEstimated?: string | null;
  }
  /**
   * Metadata common to all Datastore Admin operations.
   */
  export interface Schema$GoogleDatastoreAdminV1CommonMetadata {
    /**
     * The time the operation ended, either successfully or otherwise.
     */
    endTime?: string | null;
    /**
     * The client-assigned labels which were provided when the operation was created. May also include additional labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The type of the operation. Can be used as a filter in ListOperationsRequest.
     */
    operationType?: string | null;
    /**
     * The time that work began on the operation.
     */
    startTime?: string | null;
    /**
     * The current state of the Operation.
     */
    state?: string | null;
  }
  /**
   * Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id\}/operations/datastore-firestore-migration"
   */
  export interface Schema$GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata {
    /**
     * The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode.
     */
    migrationState?: string | null;
    /**
     * The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode.
     */
    migrationStep?: string | null;
  }
  /**
   * Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
   */
  export interface Schema$GoogleDatastoreAdminV1EntityFilter {
    /**
     * If empty, then this represents all kinds.
     */
    kinds?: string[] | null;
    /**
     * An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
     */
    namespaceIds?: string[] | null;
  }
  /**
   * Metadata for ExportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * Description of which entities are being exported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url.
     */
    outputUrlPrefix?: string | null;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesRequest {
    /**
     * Description of what data from the project is included in the export.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * Client-assigned labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict.
     */
    outputUrlPrefix?: string | null;
  }
  /**
   * The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesResponse {
    /**
     * Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.
     */
    outputUrl?: string | null;
  }
  /**
   * Metadata for ImportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1ImportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * Description of which entities are being imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.
     */
    inputUrl?: string | null;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ImportEntitiesRequest {
    /**
     * Optionally specify which kinds/namespaces are to be imported. If provided, the list must be a subset of the EntityFilter used in creating the export, otherwise a FAILED_PRECONDITION error will be returned. If no filter is specified then all entities from the export are imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * Required. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1.ExportEntitiesResponse.output_url.
     */
    inputUrl?: string | null;
    /**
     * Client-assigned labels.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Datastore composite index definition.
   */
  export interface Schema$GoogleDatastoreAdminV1Index {
    /**
     * Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED.
     */
    ancestor?: string | null;
    /**
     * Output only. The resource ID of the index.
     */
    indexId?: string | null;
    /**
     * Required. The entity kind to which this index applies.
     */
    kind?: string | null;
    /**
     * Output only. Project ID.
     */
    projectId?: string | null;
    /**
     * Required. An ordered sequence of property names and their index attributes. Requires: * A maximum of 100 properties.
     */
    properties?: Schema$GoogleDatastoreAdminV1IndexedProperty[];
    /**
     * Output only. The state of the index.
     */
    state?: string | null;
  }
  /**
   * A property of an index.
   */
  export interface Schema$GoogleDatastoreAdminV1IndexedProperty {
    /**
     * Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED.
     */
    direction?: string | null;
    /**
     * Required. The property name to index.
     */
    name?: string | null;
  }
  /**
   * Metadata for Index operations.
   */
  export interface Schema$GoogleDatastoreAdminV1IndexOperationMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * The index resource ID that this operation is acting on.
     */
    indexId?: string | null;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
   */
  export interface Schema$GoogleDatastoreAdminV1ListIndexesResponse {
    /**
     * The indexes.
     */
    indexes?: Schema$GoogleDatastoreAdminV1Index[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).
   */
  export interface Schema$GoogleDatastoreAdminV1MigrationProgressEvent {
    /**
     * Details for the `PREPARE` step.
     */
    prepareStepDetails?: Schema$GoogleDatastoreAdminV1PrepareStepDetails;
    /**
     * Details for the `REDIRECT_WRITES` step.
     */
    redirectWritesStepDetails?: Schema$GoogleDatastoreAdminV1RedirectWritesStepDetails;
    /**
     * The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state.
     */
    step?: string | null;
  }
  /**
   * An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).
   */
  export interface Schema$GoogleDatastoreAdminV1MigrationStateEvent {
    /**
     * The new state of the migration.
     */
    state?: string | null;
  }
  /**
   * Details for the `PREPARE` step.
   */
  export interface Schema$GoogleDatastoreAdminV1PrepareStepDetails {
    /**
     * The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step.
     */
    concurrencyMode?: string | null;
  }
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleDatastoreAdminV1Progress {
    /**
     * The amount of work that has been completed. Note that this may be greater than work_estimated.
     */
    workCompleted?: string | null;
    /**
     * An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.
     */
    workEstimated?: string | null;
  }
  /**
   * Details for the `REDIRECT_WRITES` step.
   */
  export interface Schema$GoogleDatastoreAdminV1RedirectWritesStepDetails {
    /**
     * Ths concurrency mode for this database.
     */
    concurrencyMode?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
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
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
   */
  export interface Schema$GqlQuery {
    /**
     * When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is.
     */
    allowLiterals?: boolean | null;
    /**
     * For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `""`.
     */
    namedBindings?: {[key: string]: Schema$GqlQueryParameter} | null;
    /**
     * Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0. For each binding site numbered i in `query_string`, there must be an i-th numbered parameter. The inverse must also be true.
     */
    positionalBindings?: Schema$GqlQueryParameter[];
    /**
     * A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
     */
    queryString?: string | null;
  }
  /**
   * A binding parameter for a GQL query.
   */
  export interface Schema$GqlQueryParameter {
    /**
     * A query cursor. Query cursors are returned in query result batches.
     */
    cursor?: string | null;
    /**
     * A value parameter.
     */
    value?: Schema$Value;
  }
  /**
   * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
   */
  export interface Schema$Key {
    /**
     * Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition.
     */
    partitionId?: Schema$PartitionId;
    /**
     * The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. An entity path is always fully complete: *all* of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of `Mutation.insert` may have no identifier. A path can never be empty, and a path can have at most 100 elements.
     */
    path?: Schema$PathElement[];
  }
  /**
   * A representation of a kind.
   */
  export interface Schema$KindExpression {
    /**
     * The name of the kind.
     */
    name?: string | null;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * The request for Datastore.Lookup.
   */
  export interface Schema$LookupRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * Required. Keys of entities to look up.
     */
    keys?: Schema$Key[];
    /**
     * The options for this lookup request.
     */
    readOptions?: Schema$ReadOptions;
  }
  /**
   * The response for Datastore.Lookup.
   */
  export interface Schema$LookupResponse {
    /**
     * A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input.
     */
    deferred?: Schema$Key[];
    /**
     * Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
     */
    found?: Schema$EntityResult[];
    /**
     * Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
     */
    missing?: Schema$EntityResult[];
    /**
     * The time at which these entities were read or found missing.
     */
    readTime?: string | null;
    /**
     * The identifier of the transaction that was started as part of this Lookup request. Set only when ReadOptions.new_transaction was set in LookupRequest.read_options.
     */
    transaction?: string | null;
  }
  /**
   * A mutation to apply to an entity.
   */
  export interface Schema$Mutation {
    /**
     * The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts.
     */
    baseVersion?: string | null;
    /**
     * The key of the entity to delete. The entity may or may not already exist. Must have a complete key path and must not be reserved/read-only.
     */
    delete?: Schema$Key;
    /**
     * The entity to insert. The entity must not already exist. The entity key's final path element may be incomplete.
     */
    insert?: Schema$Entity;
    /**
     * The entity to update. The entity must already exist. Must have a complete key path.
     */
    update?: Schema$Entity;
    /**
     * The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts.
     */
    updateTime?: string | null;
    /**
     * The entity to upsert. The entity may or may not already exist. The entity key's final path element may be incomplete.
     */
    upsert?: Schema$Entity;
  }
  /**
   * The result of applying a mutation.
   */
  export interface Schema$MutationResult {
    /**
     * Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation.
     */
    conflictDetected?: boolean | null;
    /**
     * The create time of the entity. This field will not be set after a 'delete'.
     */
    createTime?: string | null;
    /**
     * The automatically allocated key. Set only when the mutation allocated a key.
     */
    key?: Schema$Key;
    /**
     * The update time of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a 'delete'.
     */
    updateTime?: string | null;
    /**
     * The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity.
     */
    version?: string | null;
  }
  /**
   * A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100\}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state.
   */
  export interface Schema$PartitionId {
    /**
     * If not empty, the ID of the database to which the entities belong.
     */
    databaseId?: string | null;
    /**
     * If not empty, the ID of the namespace to which the entities belong.
     */
    namespaceId?: string | null;
    /**
     * The ID of the project to which the entities belong.
     */
    projectId?: string | null;
  }
  /**
   * A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
   */
  export interface Schema$PathElement {
    /**
     * The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
     */
    id?: string | null;
    /**
     * The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes.
     */
    kind?: string | null;
    /**
     * The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes.
     */
    name?: string | null;
  }
  /**
   * A representation of a property in a projection.
   */
  export interface Schema$Projection {
    /**
     * The property to project.
     */
    property?: Schema$PropertyReference;
  }
  /**
   * A filter on a specific property.
   */
  export interface Schema$PropertyFilter {
    /**
     * The operator to filter by.
     */
    op?: string | null;
    /**
     * The property to filter by.
     */
    property?: Schema$PropertyReference;
    /**
     * The value to compare the property to.
     */
    value?: Schema$Value;
  }
  /**
   * The desired order for a specific property.
   */
  export interface Schema$PropertyOrder {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: string | null;
    /**
     * The property to order by.
     */
    property?: Schema$PropertyReference;
  }
  /**
   * A reference to a property relative to the kind expressions.
   */
  export interface Schema$PropertyReference {
    /**
     * A reference to a property. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to entity property name limitations.
     */
    name?: string | null;
  }
  /**
   * A query for entities.
   */
  export interface Schema$Query {
    /**
     * The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned). Requires: * If `order` is specified, the set of distinct on properties must appear before the non-distinct on properties in `order`.
     */
    distinctOn?: Schema$PropertyReference[];
    /**
     * An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
     */
    endCursor?: string | null;
    /**
     * The filter to apply.
     */
    filter?: Schema$Filter;
    /**
     * The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified.
     */
    kind?: Schema$KindExpression[];
    /**
     * The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be \>= 0 if specified.
     */
    limit?: number | null;
    /**
     * The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be \>= 0 if specified.
     */
    offset?: number | null;
    /**
     * The order to apply to the query results (if empty, order is unspecified).
     */
    order?: Schema$PropertyOrder[];
    /**
     * The projection to return. Defaults to returning all properties.
     */
    projection?: Schema$Projection[];
    /**
     * A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
     */
    startCursor?: string | null;
  }
  /**
   * Plan for the query.
   */
  export interface Schema$QueryPlan {
    /**
     * Planning phase information for the query. It will include: { "indexes_used": [ {"query_scope": "Collection", "properties": "(foo ASC, __name__ ASC)"\}, {"query_scope": "Collection", "properties": "(bar ASC, __name__ ASC)"\} ] \}
     */
    planInfo?: {[key: string]: any} | null;
  }
  /**
   * A batch of results produced by a query.
   */
  export interface Schema$QueryResultBatch {
    /**
     * A cursor that points to the position after the last result in the batch.
     */
    endCursor?: string | null;
    /**
     * The results for this batch.
     */
    entityResults?: Schema$EntityResult[];
    /**
     * The result type for every entity in `entity_results`.
     */
    entityResultType?: string | null;
    /**
     * The state of the query after the current batch.
     */
    moreResults?: string | null;
    /**
     * Read timestamp this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. This value will not be set for eventually consistent queries in Cloud Datastore.
     */
    readTime?: string | null;
    /**
     * A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0.
     */
    skippedCursor?: string | null;
    /**
     * The number of results skipped, typically because of an offset.
     */
    skippedResults?: number | null;
    /**
     * The version number of the snapshot this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch's snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries.
     */
    snapshotVersion?: string | null;
  }
  /**
   * Options specific to read-only transactions.
   */
  export interface Schema$ReadOnly {
    /**
     * Reads entities at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
  }
  /**
   * The options shared by read requests.
   */
  export interface Schema$ReadOptions {
    /**
     * Options for beginning a new transaction for this request. The new transaction identifier will be returned in the corresponding response as either LookupResponse.transaction or RunQueryResponse.transaction.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * The non-transactional read consistency to use.
     */
    readConsistency?: string | null;
    /**
     * Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
    /**
     * The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string | null;
  }
  /**
   * Options specific to read / write transactions.
   */
  export interface Schema$ReadWrite {
    /**
     * The transaction identifier of the transaction being retried.
     */
    previousTransaction?: string | null;
  }
  /**
   * The request for Datastore.ReserveIds.
   */
  export interface Schema$ReserveIdsRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated.
     */
    keys?: Schema$Key[];
  }
  /**
   * The response for Datastore.ReserveIds.
   */
  export interface Schema$ReserveIdsResponse {}
  /**
   * Planning and execution statistics for the query.
   */
  export interface Schema$ResultSetStats {
    /**
     * Plan for the query.
     */
    queryPlan?: Schema$QueryPlan;
    /**
     * Aggregated statistics from the execution of the query. This will only be present when the request specifies `PROFILE` mode. For example, a query will return the statistics including: { "results_returned": "20", "documents_scanned": "20", "indexes_entries_scanned": "10050", "total_execution_time": "100.7 msecs" \}
     */
    queryStats?: {[key: string]: any} | null;
  }
  /**
   * The request for Datastore.Rollback.
   */
  export interface Schema$RollbackRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * Required. The transaction identifier, returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string | null;
  }
  /**
   * The response for Datastore.Rollback. (an empty message).
   */
  export interface Schema$RollbackResponse {}
  /**
   * The request for Datastore.RunAggregationQuery.
   */
  export interface Schema$RunAggregationQueryRequest {
    /**
     * The query to run.
     */
    aggregationQuery?: Schema$AggregationQuery;
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * The GQL query to run. This query must be an aggregation query.
     */
    gqlQuery?: Schema$GqlQuery;
    /**
     * Optional. The mode in which the query request is processed. This field is optional, and when not provided, it defaults to `NORMAL` mode where no additional statistics will be returned with the query results.
     */
    mode?: string | null;
    /**
     * Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID.
     */
    partitionId?: Schema$PartitionId;
    /**
     * The options for this query.
     */
    readOptions?: Schema$ReadOptions;
  }
  /**
   * The response for Datastore.RunAggregationQuery.
   */
  export interface Schema$RunAggregationQueryResponse {
    /**
     * A batch of aggregation results. Always present.
     */
    batch?: Schema$AggregationResultBatch;
    /**
     * The parsed form of the `GqlQuery` from the request, if it was set.
     */
    query?: Schema$AggregationQuery;
    /**
     * Query plan and execution statistics. Note that the returned stats are subject to change as Firestore evolves. This is only present when the request specifies a mode other than `NORMAL`.
     */
    stats?: Schema$ResultSetStats;
    /**
     * The identifier of the transaction that was started as part of this RunAggregationQuery request. Set only when ReadOptions.new_transaction was set in RunAggregationQueryRequest.read_options.
     */
    transaction?: string | null;
  }
  /**
   * The request for Datastore.RunQuery.
   */
  export interface Schema$RunQueryRequest {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string | null;
    /**
     * The GQL query to run. This query must be a non-aggregation query.
     */
    gqlQuery?: Schema$GqlQuery;
    /**
     * Optional. The mode in which the query request is processed. This field is optional, and when not provided, it defaults to `NORMAL` mode where no additional statistics will be returned with the query results.
     */
    mode?: string | null;
    /**
     * Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID.
     */
    partitionId?: Schema$PartitionId;
    /**
     * The query to run.
     */
    query?: Schema$Query;
    /**
     * The options for this query.
     */
    readOptions?: Schema$ReadOptions;
  }
  /**
   * The response for Datastore.RunQuery.
   */
  export interface Schema$RunQueryResponse {
    /**
     * A batch of query results (always present).
     */
    batch?: Schema$QueryResultBatch;
    /**
     * The parsed form of the `GqlQuery` from the request, if it was set.
     */
    query?: Schema$Query;
    /**
     * Query plan and execution statistics. Note that the returned stats are subject to change as Firestore evolves. This is only present when the request specifies a mode other than `NORMAL`.
     */
    stats?: Schema$ResultSetStats;
    /**
     * The identifier of the transaction that was started as part of this RunQuery request. Set only when ReadOptions.new_transaction was set in RunQueryRequest.read_options.
     */
    transaction?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Sum of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers.
   */
  export interface Schema$Sum {
    /**
     * The property to aggregate on.
     */
    property?: Schema$PropertyReference;
  }
  /**
   * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
   */
  export interface Schema$TransactionOptions {
    /**
     * The transaction should only allow reads.
     */
    readOnly?: Schema$ReadOnly;
    /**
     * The transaction should allow both reads and writes.
     */
    readWrite?: Schema$ReadWrite;
  }
  /**
   * A message that can hold any of the supported value types and associated metadata.
   */
  export interface Schema$Value {
    /**
     * An array value. Cannot contain another array value. A `Value` instance that sets field `array_value` must not set fields `meaning` or `exclude_from_indexes`.
     */
    arrayValue?: Schema$ArrayValue;
    /**
     * A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded.
     */
    blobValue?: string | null;
    /**
     * A boolean value.
     */
    booleanValue?: boolean | null;
    /**
     * A double value.
     */
    doubleValue?: number | null;
    /**
     * An entity value. - May have no key. - May have a key with an incomplete key path. - May have a reserved/read-only key.
     */
    entityValue?: Schema$Entity;
    /**
     * If the value should be excluded from all indexes including those defined explicitly.
     */
    excludeFromIndexes?: boolean | null;
    /**
     * A geo point value representing a point on the surface of Earth.
     */
    geoPointValue?: Schema$LatLng;
    /**
     * An integer value.
     */
    integerValue?: string | null;
    /**
     * A key value.
     */
    keyValue?: Schema$Key;
    /**
     * The `meaning` field should only be populated for backwards compatibility.
     */
    meaning?: number | null;
    /**
     * A null value.
     */
    nullValue?: string | null;
    /**
     * A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes.
     */
    stringValue?: string | null;
    /**
     * A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down.
     */
    timestampValue?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    indexes: Resource$Projects$Indexes;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.indexes = new Resource$Projects$Indexes(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }

    /**
     * Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    allocateIds(
      params: Params$Resource$Projects$Allocateids,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    allocateIds(
      params?: Params$Resource$Projects$Allocateids,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AllocateIdsResponse>;
    allocateIds(
      params: Params$Resource$Projects$Allocateids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    allocateIds(
      params: Params$Resource$Projects$Allocateids,
      options: MethodOptions | BodyResponseCallback<Schema$AllocateIdsResponse>,
      callback: BodyResponseCallback<Schema$AllocateIdsResponse>
    ): void;
    allocateIds(
      params: Params$Resource$Projects$Allocateids,
      callback: BodyResponseCallback<Schema$AllocateIdsResponse>
    ): void;
    allocateIds(
      callback: BodyResponseCallback<Schema$AllocateIdsResponse>
    ): void;
    allocateIds(
      paramsOrCallback?:
        | Params$Resource$Projects$Allocateids
        | BodyResponseCallback<Schema$AllocateIdsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AllocateIdsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AllocateIdsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AllocateIdsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Allocateids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Allocateids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:allocateIds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AllocateIdsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AllocateIdsResponse>(parameters);
      }
    }

    /**
     * Begins a new transaction.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    beginTransaction(
      params: Params$Resource$Projects$Begintransaction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    beginTransaction(
      params?: Params$Resource$Projects$Begintransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BeginTransactionResponse>;
    beginTransaction(
      params: Params$Resource$Projects$Begintransaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Begintransaction,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BeginTransactionResponse>,
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Begintransaction,
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      paramsOrCallback?:
        | Params$Resource$Projects$Begintransaction
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BeginTransactionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Begintransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Begintransaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}:beginTransaction'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BeginTransactionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BeginTransactionResponse>(parameters);
      }
    }

    /**
     * Commits a transaction, optionally creating, deleting or modifying some entities.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    commit(
      params: Params$Resource$Projects$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Projects$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommitResponse>;
    commit(
      params: Params$Resource$Projects$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Projects$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$CommitResponse>,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(
      params: Params$Resource$Projects$Commit,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Commit
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CommitResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:commit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommitResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommitResponse>(parameters);
      }
    }

    /**
     * Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
      params: Params$Resource$Projects$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Export,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      params: Params$Resource$Projects$Export,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Export
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
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:export').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
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
     * Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Import
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
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
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
     * Looks up entities by key.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    lookup(
      params: Params$Resource$Projects$Lookup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookup(
      params?: Params$Resource$Projects$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LookupResponse>;
    lookup(
      params: Params$Resource$Projects$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Projects$Lookup,
      options: MethodOptions | BodyResponseCallback<Schema$LookupResponse>,
      callback: BodyResponseCallback<Schema$LookupResponse>
    ): void;
    lookup(
      params: Params$Resource$Projects$Lookup,
      callback: BodyResponseCallback<Schema$LookupResponse>
    ): void;
    lookup(callback: BodyResponseCallback<Schema$LookupResponse>): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Projects$Lookup
        | BodyResponseCallback<Schema$LookupResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LookupResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:lookup').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LookupResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupResponse>(parameters);
      }
    }

    /**
     * Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reserveIds(
      params: Params$Resource$Projects$Reserveids,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reserveIds(
      params?: Params$Resource$Projects$Reserveids,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReserveIdsResponse>;
    reserveIds(
      params: Params$Resource$Projects$Reserveids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reserveIds(
      params: Params$Resource$Projects$Reserveids,
      options: MethodOptions | BodyResponseCallback<Schema$ReserveIdsResponse>,
      callback: BodyResponseCallback<Schema$ReserveIdsResponse>
    ): void;
    reserveIds(
      params: Params$Resource$Projects$Reserveids,
      callback: BodyResponseCallback<Schema$ReserveIdsResponse>
    ): void;
    reserveIds(callback: BodyResponseCallback<Schema$ReserveIdsResponse>): void;
    reserveIds(
      paramsOrCallback?:
        | Params$Resource$Projects$Reserveids
        | BodyResponseCallback<Schema$ReserveIdsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReserveIdsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReserveIdsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReserveIdsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Reserveids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Reserveids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:reserveIds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReserveIdsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReserveIdsResponse>(parameters);
      }
    }

    /**
     * Rolls back a transaction.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rollback(
      params: Params$Resource$Projects$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RollbackResponse>;
    rollback(
      params: Params$Resource$Projects$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$RollbackResponse>,
      callback: BodyResponseCallback<Schema$RollbackResponse>
    ): void;
    rollback(
      params: Params$Resource$Projects$Rollback,
      callback: BodyResponseCallback<Schema$RollbackResponse>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$RollbackResponse>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Rollback
        | BodyResponseCallback<Schema$RollbackResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RollbackResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RollbackResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RollbackResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:rollback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RollbackResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RollbackResponse>(parameters);
      }
    }

    /**
     * Runs an aggregation query.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runAggregationQuery(
      params: Params$Resource$Projects$Runaggregationquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runAggregationQuery(
      params?: Params$Resource$Projects$Runaggregationquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RunAggregationQueryResponse>;
    runAggregationQuery(
      params: Params$Resource$Projects$Runaggregationquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runAggregationQuery(
      params: Params$Resource$Projects$Runaggregationquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>,
      callback: BodyResponseCallback<Schema$RunAggregationQueryResponse>
    ): void;
    runAggregationQuery(
      params: Params$Resource$Projects$Runaggregationquery,
      callback: BodyResponseCallback<Schema$RunAggregationQueryResponse>
    ): void;
    runAggregationQuery(
      callback: BodyResponseCallback<Schema$RunAggregationQueryResponse>
    ): void;
    runAggregationQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Runaggregationquery
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RunAggregationQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Runaggregationquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Runaggregationquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}:runAggregationQuery'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunAggregationQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunAggregationQueryResponse>(parameters);
      }
    }

    /**
     * Queries for entities.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runQuery(
      params: Params$Resource$Projects$Runquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runQuery(
      params?: Params$Resource$Projects$Runquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RunQueryResponse>;
    runQuery(
      params: Params$Resource$Projects$Runquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runQuery(
      params: Params$Resource$Projects$Runquery,
      options: MethodOptions | BodyResponseCallback<Schema$RunQueryResponse>,
      callback: BodyResponseCallback<Schema$RunQueryResponse>
    ): void;
    runQuery(
      params: Params$Resource$Projects$Runquery,
      callback: BodyResponseCallback<Schema$RunQueryResponse>
    ): void;
    runQuery(callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Runquery
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RunQueryResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Runquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}:runQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunQueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Allocateids
    extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AllocateIdsRequest;
  }
  export interface Params$Resource$Projects$Begintransaction
    extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BeginTransactionRequest;
  }
  export interface Params$Resource$Projects$Commit extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRequest;
  }
  export interface Params$Resource$Projects$Export extends StandardParameters {
    /**
     * Required. Project ID against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleDatastoreAdminV1ExportEntitiesRequest;
  }
  export interface Params$Resource$Projects$Import extends StandardParameters {
    /**
     * Required. Project ID against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleDatastoreAdminV1ImportEntitiesRequest;
  }
  export interface Params$Resource$Projects$Lookup extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupRequest;
  }
  export interface Params$Resource$Projects$Reserveids
    extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReserveIdsRequest;
  }
  export interface Params$Resource$Projects$Rollback
    extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackRequest;
  }
  export interface Params$Resource$Projects$Runaggregationquery
    extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunAggregationQueryRequest;
  }
  export interface Params$Resource$Projects$Runquery
    extends StandardParameters {
    /**
     * Required. The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }

  export class Resource$Projects$Indexes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Indexes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Indexes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Indexes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Indexes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Indexes$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Indexes$Create
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
        {}) as Params$Resource$Projects$Indexes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Indexes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/indexes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
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
     * Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Indexes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Indexes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Indexes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Indexes$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Indexes$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Indexes$Delete
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
        {}) as Params$Resource$Projects$Indexes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Indexes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/indexes/{indexId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'indexId'],
        pathParams: ['indexId', 'projectId'],
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
     * Gets an index.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Indexes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Indexes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleDatastoreAdminV1Index>;
    get(
      params: Params$Resource$Projects$Indexes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Indexes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>,
      callback: BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>
    ): void;
    get(
      params: Params$Resource$Projects$Indexes$Get,
      callback: BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Indexes$Get
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1Index>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleDatastoreAdminV1Index>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Indexes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Indexes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/indexes/{indexId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'indexId'],
        pathParams: ['indexId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleDatastoreAdminV1Index>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleDatastoreAdminV1Index>(parameters);
      }
    }

    /**
     * Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Indexes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Indexes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleDatastoreAdminV1ListIndexesResponse>;
    list(
      params: Params$Resource$Projects$Indexes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Indexes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>,
      callback: BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Indexes$List,
      callback: BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Indexes$List
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleDatastoreAdminV1ListIndexesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Indexes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Indexes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/indexes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleDatastoreAdminV1ListIndexesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleDatastoreAdminV1ListIndexesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Indexes$Create
    extends StandardParameters {
    /**
     * Project ID against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleDatastoreAdminV1Index;
  }
  export interface Params$Resource$Projects$Indexes$Delete
    extends StandardParameters {
    /**
     * The resource ID of the index to delete.
     */
    indexId?: string;
    /**
     * Project ID against which to make the request.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Indexes$Get
    extends StandardParameters {
    /**
     * The resource ID of the index to get.
     */
    indexId?: string;
    /**
     * Project ID against which to make the request.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Indexes$List
    extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     * The maximum number of items to return. If zero, then all results will be returned.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Project ID against which to make the request.
     */
    projectId?: string;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
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
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List
    extends StandardParameters {
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
