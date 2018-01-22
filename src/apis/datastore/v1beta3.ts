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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud Datastore API
 *
 * Accesses the schemaless NoSQL database to provide fully managed, robust,
 * scalable storage for your application.
 *
 * @example
 * const google = require('googleapis');
 * const datastore = google.datastore('v1beta3');
 *
 * @namespace datastore
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Datastore
 */
function Datastore(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    /**
     * datastore.projects.allocateIds
     * @desc Allocates IDs for the given keys, which is useful for referencing
     * an entity before it is inserted.
     * @alias datastore.projects.allocateIds
     * @memberOf! datastore(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {datastore(v1beta3).AllocateIdsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    allocateIds(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:allocateIds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * datastore.projects.beginTransaction
        * @desc Begins a new transaction.
        * @alias datastore.projects.beginTransaction
        * @memberOf! datastore(v1beta3)
        *
        * @param {object} params Parameters for request
        * @param {string} params.projectId The ID of the project against which to make the request.
        * @param {datastore(v1beta3).BeginTransactionRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    beginTransaction(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:beginTransaction')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * datastore.projects.commit
        * @desc Commits a transaction, optionally creating, deleting or
        * modifying some entities.
        * @alias datastore.projects.commit
        * @memberOf! datastore(v1beta3)
        *
        * @param {object} params Parameters for request
        * @param {string} params.projectId The ID of the project against which to make the request.
        * @param {datastore(v1beta3).CommitRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    commit(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:commit')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * datastore.projects.lookup
        * @desc Looks up entities by key.
        * @alias datastore.projects.lookup
        * @memberOf! datastore(v1beta3)
        *
        * @param {object} params Parameters for request
        * @param {string} params.projectId The ID of the project against which to make the request.
        * @param {datastore(v1beta3).LookupRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    lookup(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:lookup')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * datastore.projects.reserveIds
        * @desc Prevents the supplied keys' IDs from being auto-allocated by
        * Cloud Datastore.
        * @alias datastore.projects.reserveIds
        * @memberOf! datastore(v1beta3)
        *
        * @param {object} params Parameters for request
        * @param {string} params.projectId The ID of the project against which to make the request.
        * @param {datastore(v1beta3).ReserveIdsRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    reserveIds(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:reserveIds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * datastore.projects.rollback
        * @desc Rolls back a transaction.
        * @alias datastore.projects.rollback
        * @memberOf! datastore(v1beta3)
        *
        * @param {object} params Parameters for request
        * @param {string} params.projectId The ID of the project against which to make the request.
        * @param {datastore(v1beta3).RollbackRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    rollback(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:rollback')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * datastore.projects.runQuery
        * @desc Queries for entities.
        * @alias datastore.projects.runQuery
        * @memberOf! datastore(v1beta3)
        *
        * @param {object} params Parameters for request
        * @param {string} params.projectId The ID of the project against which to make the request.
        * @param {datastore(v1beta3).RunQueryRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    runQuery(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta3/projects/{projectId}:runQuery')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef AllocateIdsRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Key[]} keys A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only.
 */
/**
 * @typedef AllocateIdsResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Key[]} keys The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
 */
/**
 * @typedef ArrayValue
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Value[]} values Values in the array. The order of this array may not be preserved if it contains a mix of indexed and unindexed values.
 */
/**
 * @typedef BeginTransactionRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).TransactionOptions} transactionOptions Options for a new transaction.
 */
/**
 * @typedef BeginTransactionResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} transaction The transaction identifier (always present).
 */
/**
 * @typedef CommitRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} mode The type of commit to perform. Defaults to `TRANSACTIONAL`.
 * @property {datastore(v1beta3).Mutation[]} mutations The mutations to perform.  When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request:  - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update`  When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity.
 * @property {string} transaction The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction.
 */
/**
 * @typedef CommitResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {integer} indexUpdates The number of index entries updated during the commit, or zero if none were updated.
 * @property {datastore(v1beta3).MutationResult[]} mutationResults The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request.
 */
/**
 * @typedef CompositeFilter
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Filter[]} filters The list of filters to combine. Must contain at least one filter.
 * @property {string} op The operator for combining multiple filters.
 */
/**
 * @typedef Entity
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Key} key The entity&#39;s key.  An entity must have a key, unless otherwise documented (for example, an entity in `Value.entity_value` may have no key). An entity&#39;s kind is its key path&#39;s last element&#39;s kind, or null if it has no key.
 * @property {object} properties The entity&#39;s properties. The map&#39;s keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The name must not contain more than 500 characters. The name cannot be `&quot;&quot;`.
 */
/**
 * @typedef EntityResult
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} cursor A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message.
 * @property {datastore(v1beta3).Entity} entity The resulting entity.
 * @property {string} version The version of the entity, a strictly positive number that monotonically increases with changes to the entity.  This field is set for `FULL` entity results.  For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads.
 */
/**
 * @typedef Filter
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).CompositeFilter} compositeFilter A composite filter.
 * @property {datastore(v1beta3).PropertyFilter} propertyFilter A filter on a property.
 */
/**
 * @typedef GoogleDatastoreAdminV1beta1CommonMetadata
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} endTime The time the operation ended, either successfully or otherwise.
 * @property {object} labels The client-assigned labels which were provided when the operation was created. May also include additional labels.
 * @property {string} operationType The type of the operation. Can be used as a filter in ListOperationsRequest.
 * @property {string} startTime The time that work began on the operation.
 * @property {string} state The current state of the Operation.
 */
/**
 * @typedef GoogleDatastoreAdminV1beta1EntityFilter
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string[]} kinds If empty, then this represents all kinds.
 * @property {string[]} namespaceIds An empty list represents all namespaces. This is the preferred usage for projects that don&#39;t use namespaces.  An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn&#39;t want to include them. Each namespace in this list must be unique.
 */
/**
 * @typedef GoogleDatastoreAdminV1beta1ExportEntitiesMetadata
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1CommonMetadata} common Metadata common to all Datastore Admin operations.
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1EntityFilter} entityFilter Description of which entities are being exported.
 * @property {string} outputUrlPrefix Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1Progress} progressBytes An estimate of the number of bytes processed.
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1Progress} progressEntities An estimate of the number of entities processed.
 */
/**
 * @typedef GoogleDatastoreAdminV1beta1ExportEntitiesResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} outputUrl Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.
 */
/**
 * @typedef GoogleDatastoreAdminV1beta1ImportEntitiesMetadata
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1CommonMetadata} common Metadata common to all Datastore Admin operations.
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1EntityFilter} entityFilter Description of which entities are being imported.
 * @property {string} inputUrl The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field.
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1Progress} progressBytes An estimate of the number of bytes processed.
 * @property {datastore(v1beta3).GoogleDatastoreAdminV1beta1Progress} progressEntities An estimate of the number of entities processed.
 */
/**
 * @typedef GoogleDatastoreAdminV1beta1Progress
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} workCompleted The amount of work that has been completed. Note that this may be greater than work_estimated.
 * @property {string} workEstimated An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.
 */
/**
 * @typedef GqlQuery
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {boolean} allowLiterals When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = &#39;string literal&#39;` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is.
 * @property {object} namedBindings For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse.  Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `&quot;&quot;`.
 * @property {datastore(v1beta3).GqlQueryParameter[]} positionalBindings Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0.  For each binding site numbered i in `query_string`, there must be an i-th numbered parameter. The inverse must also be true.
 * @property {string} queryString A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
 */
/**
 * @typedef GqlQueryParameter
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} cursor A query cursor. Query cursors are returned in query result batches.
 * @property {datastore(v1beta3).Value} value A value parameter.
 */
/**
 * @typedef Key
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).PartitionId} partitionId Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition.
 * @property {datastore(v1beta3).PathElement[]} path The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element&#39;s _ancestors_.  An entity path is always fully complete: *all* of the entity&#39;s ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of `Mutation.insert` may have no identifier.  A path can never be empty, and a path can have at most 100 elements.
 */
/**
 * @typedef KindExpression
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} name The name of the kind.
 */
/**
 * @typedef LatLng
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {number} latitude The latitude in degrees. It must be in the range [-90.0, +90.0].
 * @property {number} longitude The longitude in degrees. It must be in the range [-180.0, +180.0].
 */
/**
 * @typedef LookupRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Key[]} keys Keys of entities to look up.
 * @property {datastore(v1beta3).ReadOptions} readOptions The options for this lookup request.
 */
/**
 * @typedef LookupResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).Key[]} deferred A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input.
 * @property {datastore(v1beta3).EntityResult[]} found Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
 * @property {datastore(v1beta3).EntityResult[]} missing Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
 */
/**
 * @typedef Mutation
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} baseVersion The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts.
 * @property {datastore(v1beta3).Key} delete The key of the entity to delete. The entity may or may not already exist. Must have a complete key path and must not be reserved/read-only.
 * @property {datastore(v1beta3).Entity} insert The entity to insert. The entity must not already exist. The entity key&#39;s final path element may be incomplete.
 * @property {datastore(v1beta3).Entity} update The entity to update. The entity must already exist. Must have a complete key path.
 * @property {datastore(v1beta3).Entity} upsert The entity to upsert. The entity may or may not already exist. The entity key&#39;s final path element may be incomplete.
 */
/**
 * @typedef MutationResult
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {boolean} conflictDetected Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation.
 * @property {datastore(v1beta3).Key} key The automatically allocated key. Set only when the mutation allocated a key.
 * @property {string} version The version of the entity on the server after processing the mutation. If the mutation doesn&#39;t change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity.
 */
/**
 * @typedef PartitionId
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} namespaceId If not empty, the ID of the namespace to which the entities belong.
 * @property {string} projectId The ID of the project to which the entities belong.
 */
/**
 * @typedef PathElement
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} id The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
 * @property {string} kind The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `&quot;&quot;`.
 * @property {string} name The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `&quot;&quot;`.
 */
/**
 * @typedef Projection
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).PropertyReference} property The property to project.
 */
/**
 * @typedef PropertyFilter
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} op The operator to filter by.
 * @property {datastore(v1beta3).PropertyReference} property The property to filter by.
 * @property {datastore(v1beta3).Value} value The value to compare the property to.
 */
/**
 * @typedef PropertyOrder
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} direction The direction to order by. Defaults to `ASCENDING`.
 * @property {datastore(v1beta3).PropertyReference} property The property to order by.
 */
/**
 * @typedef PropertyReference
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} name The name of the property. If name includes &quot;.&quot;s, it may be interpreted as a property name path.
 */
/**
 * @typedef Query
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).PropertyReference[]} distinctOn The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned).
 * @property {string} endCursor An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
 * @property {datastore(v1beta3).Filter} filter The filter to apply.
 * @property {datastore(v1beta3).KindExpression[]} kind The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified.
 * @property {integer} limit The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be &gt;= 0 if specified.
 * @property {integer} offset The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be &gt;= 0 if specified.
 * @property {datastore(v1beta3).PropertyOrder[]} order The order to apply to the query results (if empty, order is unspecified).
 * @property {datastore(v1beta3).Projection[]} projection The projection to return. Defaults to returning all properties.
 * @property {string} startCursor A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
 */
/**
 * @typedef QueryResultBatch
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} endCursor A cursor that points to the position after the last result in the batch.
 * @property {datastore(v1beta3).EntityResult[]} entityResults The results for this batch.
 * @property {string} entityResultType The result type for every entity in `entity_results`.
 * @property {string} moreResults The state of the query after the current batch.
 * @property {string} skippedCursor A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0.
 * @property {integer} skippedResults The number of results skipped, typically because of an offset.
 * @property {string} snapshotVersion The version number of the snapshot this batch was returned from. This applies to the range of results from the query&#39;s `start_cursor` (or the beginning of the query if no cursor was given) to this batch&#39;s `end_cursor` (not the query&#39;s `end_cursor`).  In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch&#39;s snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries.
 */
/**
 * @typedef ReadOnly
 * @memberOf! datastore(v1beta3)
 * @type object
 */
/**
 * @typedef ReadOptions
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} readConsistency The non-transactional read consistency to use. Cannot be set to `STRONG` for global queries.
 * @property {string} transaction The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction.
 */
/**
 * @typedef ReadWrite
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} previousTransaction The transaction identifier of the transaction being retried.
 */
/**
 * @typedef ReserveIdsRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} databaseId If not empty, the ID of the database against which to make the request.
 * @property {datastore(v1beta3).Key[]} keys A list of keys with complete key paths whose numeric IDs should not be auto-allocated.
 */
/**
 * @typedef ReserveIdsResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 */
/**
 * @typedef RollbackRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {string} transaction The transaction identifier, returned by a call to Datastore.BeginTransaction.
 */
/**
 * @typedef RollbackResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 */
/**
 * @typedef RunQueryRequest
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).GqlQuery} gqlQuery The GQL query to run.
 * @property {datastore(v1beta3).PartitionId} partitionId Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID.
 * @property {datastore(v1beta3).Query} query The query to run.
 * @property {datastore(v1beta3).ReadOptions} readOptions The options for this query.
 */
/**
 * @typedef RunQueryResponse
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).QueryResultBatch} batch A batch of query results (always present).
 * @property {datastore(v1beta3).Query} query The parsed form of the `GqlQuery` from the request, if it was set.
 */
/**
 * @typedef TransactionOptions
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).ReadOnly} readOnly The transaction should only allow reads.
 * @property {datastore(v1beta3).ReadWrite} readWrite The transaction should allow both reads and writes.
 */
/**
 * @typedef Value
 * @memberOf! datastore(v1beta3)
 * @type object
 * @property {datastore(v1beta3).ArrayValue} arrayValue An array value. Cannot contain another array value. A `Value` instance that sets field `array_value` must not set fields `meaning` or `exclude_from_indexes`.
 * @property {string} blobValue A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded.
 * @property {boolean} booleanValue A boolean value.
 * @property {number} doubleValue A double value.
 * @property {datastore(v1beta3).Entity} entityValue An entity value.  - May have no key. - May have a key with an incomplete key path. - May have a reserved/read-only key.
 * @property {boolean} excludeFromIndexes If the value should be excluded from all indexes including those defined explicitly.
 * @property {datastore(v1beta3).LatLng} geoPointValue A geo point value representing a point on the surface of Earth.
 * @property {string} integerValue An integer value.
 * @property {datastore(v1beta3).Key} keyValue A key value.
 * @property {integer} meaning The `meaning` field should only be populated for backwards compatibility.
 * @property {string} nullValue A null value.
 * @property {string} stringValue A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at least 1,000,000 bytes.
 * @property {string} timestampValue A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down.
 */

export = Datastore;
