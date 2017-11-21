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

/* jshint maxlen: false */

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Google Cloud Firestore API
 *
 * 
 *
 * @example
 * const google = require('googleapis');
 * const firestore = google.firestore('v1beta1');
 *
 * @namespace firestore
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Firestore
 */
function Firestore(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    databases: {
      documents: {

        /**
         * firestore.projects.databases.documents.batchGet
         *
         * @desc Gets multiple documents.  Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
         *
         * @alias firestore.projects.databases.documents.batchGet
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
         * @param {firestore(v1beta1).BatchGetDocumentsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{database}/documents:batchGet').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.beginTransaction
         *
         * @desc Starts a new transaction.
         *
         * @alias firestore.projects.databases.documents.beginTransaction
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
         * @param {firestore(v1beta1).BeginTransactionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        beginTransaction: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{database}/documents:beginTransaction').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.commit
         *
         * @desc Commits a transaction, while optionally updating documents.
         *
         * @alias firestore.projects.databases.documents.commit
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
         * @param {firestore(v1beta1).CommitRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        commit: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{database}/documents:commit').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.createDocument
         *
         * @desc Creates a new document.
         *
         * @alias firestore.projects.databases.documents.createDocument
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.collectionId The collection ID, relative to `parent`, to list. For example: `chatrooms`.
         * @param {string=} params.documentId The client-assigned document ID to use for this document.  Optional. If not specified, an ID will be assigned by the service.
         * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
         * @param {string} params.parent The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
         * @param {firestore(v1beta1).Document} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createDocument: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/{collectionId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent', 'collectionId'],
            pathParams: ['collectionId', 'parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.delete
         *
         * @desc Deletes a document.
         *
         * @alias firestore.projects.databases.documents.delete
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.currentDocument.exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
         * @param {string=} params.currentDocument.updateTime When set, the target document must exist and have been last updated at that time.
         * @param {string} params.name The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.get
         *
         * @desc Gets a single document.
         *
         * @alias firestore.projects.databases.documents.get
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
         * @param {string} params.name The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
         * @param {string=} params.readTime Reads the version of the document at the given time. This may not be older than 60 seconds.
         * @param {string=} params.transaction Reads the document in a transaction.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.list
         *
         * @desc Lists documents.
         *
         * @alias firestore.projects.databases.documents.list
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.collectionId The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
         * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
         * @param {string=} params.orderBy The order to sort results by. For example: `priority desc, name`.
         * @param {integer=} params.pageSize The maximum number of documents to return.
         * @param {string=} params.pageToken The `next_page_token` value returned from a previous List request, if any.
         * @param {string} params.parent The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
         * @param {string=} params.readTime Reads documents as they were at the given time. This may not be older than 60 seconds.
         * @param {boolean=} params.showMissing If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set.  Requests with `show_missing` may not specify `where` or `order_by`.
         * @param {string=} params.transaction Reads documents in a transaction.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/{collectionId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent', 'collectionId'],
            pathParams: ['collectionId', 'parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.listCollectionIds
         *
         * @desc Lists all the collection IDs underneath a document.
         *
         * @alias firestore.projects.databases.documents.listCollectionIds
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
         * @param {firestore(v1beta1).ListCollectionIdsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listCollectionIds: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}:listCollectionIds').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.listen
         *
         * @desc Listens to changes.
         *
         * @alias firestore.projects.databases.documents.listen
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
         * @param {firestore(v1beta1).ListenRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listen: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{database}/documents:listen').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.patch
         *
         * @desc Updates or inserts a document.
         *
         * @alias firestore.projects.databases.documents.patch
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.currentDocument.exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
         * @param {string=} params.currentDocument.updateTime When set, the target document must exist and have been last updated at that time.
         * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
         * @param {string} params.name The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
         * @param {string=} params.updateMask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
         * @param {firestore(v1beta1).Document} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.rollback
         *
         * @desc Rolls back a transaction.
         *
         * @alias firestore.projects.databases.documents.rollback
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
         * @param {firestore(v1beta1).RollbackRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rollback: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{database}/documents:rollback').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.runQuery
         *
         * @desc Runs a query.
         *
         * @alias firestore.projects.databases.documents.runQuery
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
         * @param {firestore(v1beta1).RunQueryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        runQuery: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}:runQuery').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.documents.write
         *
         * @desc Streams batches of document updates and deletes, in order.
         *
         * @alias firestore.projects.databases.documents.write
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
         * @param {firestore(v1beta1).WriteRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        write: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{database}/documents:write').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },
      indexes: {

        /**
         * firestore.projects.databases.indexes.create
         *
         * @desc Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status.  During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create.  Indexes with a single field cannot be created.
         *
         * @alias firestore.projects.databases.indexes.create
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
         * @param {firestore(v1beta1).Index} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/indexes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.indexes.delete
         *
         * @desc Deletes an index.
         *
         * @alias firestore.projects.databases.indexes.delete
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.indexes.get
         *
         * @desc Gets an index.
         *
         * @alias firestore.projects.databases.indexes.get
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * firestore.projects.databases.indexes.list
         *
         * @desc Lists the indexes that match the specified filters.
         *
         * @alias firestore.projects.databases.indexes.list
         * @memberOf! firestore(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter 
         * @param {integer=} params.pageSize The standard List page size.
         * @param {string=} params.pageToken The standard List page token.
         * @param {string} params.parent The database name. For example: `projects/{project_id}/databases/{database_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/indexes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef ArrayValue
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).Value[]} values Values in the array.
 */

/**
 * @typedef BatchGetDocumentsRequest
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string[]} documents The names of the documents to retrieve. In the format:
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
The request will fail if any of the document is not a child resource of the
given `database`. Duplicate names will be elided.
* @property {firestore(v1beta1).DocumentMask} mask The fields to return. If not set, returns all fields.

If a document has a field that is not present in this mask, that field will
not be returned in the response.
* @property {firestore(v1beta1).TransactionOptions} newTransaction Starts a new transaction and reads the documents.
Defaults to a read-only transaction.
The new transaction ID will be returned as the first response in the
stream.
* @property {string} readTime Reads documents as they were at the given time.
This may not be older than 60 seconds.
* @property {string} transaction Reads documents in a transaction.
*/

/**
 * @typedef BatchGetDocumentsResponse
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Document} found A document that was requested.
* @property {string} missing A document name that was requested but does not exist. In the format:
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
* @property {string} readTime The time at which the document was read.
This may be monotically increasing, in this case the previous documents in
the result stream are guaranteed not to have changed between their
read_time and this one.
* @property {string} transaction The transaction that was started as part of this request.
Will only be set in the first response, and only if
BatchGetDocumentsRequest.new_transaction was set in the request.
*/

/**
 * @typedef BeginTransactionRequest
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).TransactionOptions} options The options for the transaction.
Defaults to a read-write transaction.
*/

/**
 * @typedef BeginTransactionResponse
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {string} transaction The transaction that was started.
 */

/**
 * @typedef CollectionSelector
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {boolean} allDescendants When false, selects only collections that are immediate children of
the `parent` specified in the containing `RunQueryRequest`.
When true, selects all descendant collections.
* @property {string} collectionId The collection ID.
When set, selects only collections with this ID.
*/

/**
 * @typedef CommitRequest
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} transaction If set, applies all writes in this transaction, and commits it.
* @property {firestore(v1beta1).Write[]} writes The writes to apply.

Always executed atomically and in order.
*/

/**
 * @typedef CommitResponse
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} commitTime The time at which the commit occurred.
* @property {firestore(v1beta1).WriteResult[]} writeResults The result of applying the writes.

This i-th write result corresponds to the i-th write in the
request.
*/

/**
 * @typedef CompositeFilter
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Filter[]} filters The list of filters to combine.
Must contain at least one filter.
* @property {string} op The operator for combining multiple filters.
*/

/**
 * @typedef Cursor
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {boolean} before If the position is just before or just after the given values, relative
to the sort order defined by the query.
* @property {firestore(v1beta1).Value[]} values The values that represent a position, in the order they appear in
the order by clause of a query.

Can contain fewer values than specified in the order by clause.
*/

/**
 * @typedef Document
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} createTime Output only. The time at which the document was created.

This value increases monotonically when a document is deleted then
recreated. It can also be compared to values from other documents and
the `read_time` of a query.
* @property {object} fields The document&#39;s fields.

The map keys represent field names.

A simple field name contains only characters `a` to `z`, `A` to `Z`,
`0` to `9`, or `_`, and must not start with `0` to `9` or `_`. For example,
`foo_bar_17`.

Field names matching the regular expression `__.*__` are reserved. Reserved
field names are forbidden except in certain documented contexts. The map
keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be
empty.

Field paths may be used in other contexts to refer to structured fields
defined here. For `map_value`, the field path is represented by the simple
or quoted field names of the containing fields, delimited by `.`. For
example, the structured field
`&quot;foo&quot; : { map_value: { &quot;x&amp;y&quot; : { string_value: &quot;hello&quot; }}}` would be
represented by the field path `foo.x&amp;y`.

Within a field path, a quoted field name starts and ends with `` ` `` and
may contain any character. Some characters, including `` ` ``, must be
escaped using a `\`. For example, `` `x&amp;y` `` represents `x&amp;y` and
`` `bak\`tik` `` represents `` bak`tik ``.
* @property {string} name The resource name of the document, for example
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
* @property {string} updateTime Output only. The time at which the document was last changed.

This value is initally set to the `create_time` then increases
monotonically with each change to the document. It can also be
compared to values from other documents and the `read_time` of a query.
*/

/**
 * @typedef DocumentChange
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Document} document The new state of the Document.

If `mask` is set, contains only fields that were updated or added.
* @property {integer[]} removedTargetIds A set of target IDs for targets that no longer match this document.
* @property {integer[]} targetIds A set of target IDs of targets that match this document.
*/

/**
 * @typedef DocumentDelete
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} document The resource name of the Document that was deleted.
* @property {string} readTime The read timestamp at which the delete was observed.

Greater or equal to the `commit_time` of the delete.
* @property {integer[]} removedTargetIds A set of target IDs for targets that previously matched this entity.
*/

/**
 * @typedef DocumentMask
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string[]} fieldPaths The list of field paths in the mask. See Document.fields for a field
path syntax reference.
*/

/**
 * @typedef DocumentRemove
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} document The resource name of the Document that has gone out of view.
* @property {string} readTime The read timestamp at which the remove was observed.

Greater or equal to the `commit_time` of the change/delete/remove.
* @property {integer[]} removedTargetIds A set of target IDs for targets that previously matched this document.
*/

/**
 * @typedef DocumentTransform
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} document The name of the document to transform.
* @property {firestore(v1beta1).FieldTransform[]} fieldTransforms The list of transformations to apply to the fields of the document, in
order.
This must not be empty.
*/

/**
 * @typedef DocumentsTarget
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string[]} documents The names of the documents to retrieve. In the format:
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
The request will fail if any of the document is not a child resource of
the given `database`. Duplicate names will be elided.
*/

/**
 * @typedef Empty
 * @memberOf! firestore(v1beta1)
 * @type object
 */

/**
 * @typedef ExistenceFilter
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {integer} count The total count of documents that match target_id.

If different from the count of documents in the client that match, the
client must manually determine which documents no longer match the target.
* @property {integer} targetId The target ID to which this filter applies.
*/

/**
 * @typedef FieldFilter
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).FieldReference} field The field to filter by.
 * @property {string} op The operator to filter by.
 * @property {firestore(v1beta1).Value} value The value to compare to.
 */

/**
 * @typedef FieldReference
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {string} fieldPath 
 */

/**
 * @typedef FieldTransform
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} fieldPath The path of the field. See Document.fields for the field path syntax
reference.
* @property {string} setToServerValue Sets the field to the given server value.
*/

/**
 * @typedef Filter
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).CompositeFilter} compositeFilter A composite filter.
 * @property {firestore(v1beta1).FieldFilter} fieldFilter A filter on a document field.
 * @property {firestore(v1beta1).UnaryFilter} unaryFilter A filter that takes exactly one argument.
 */

/**
 * @typedef Index
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} collectionId The collection ID to which this index applies. Required.
* @property {firestore(v1beta1).IndexField[]} fields The fields to index.
* @property {string} name The resource name of the index.
Output only.
* @property {string} state The state of the index.
Output only.
*/

/**
 * @typedef IndexField
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} fieldPath The path of the field. Must match the field path specification described
by google.firestore.v1beta1.Document.fields.
Special field path `__name__` may be used by itself or at the end of a
path. `__type__` may be used only at the end of path.
* @property {string} mode The field&#39;s mode.
*/

/**
 * @typedef LatLng
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {number} latitude The latitude in degrees. It must be in the range [-90.0, +90.0].
 * @property {number} longitude The longitude in degrees. It must be in the range [-180.0, +180.0].
 */

/**
 * @typedef ListCollectionIdsRequest
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {integer} pageSize The maximum number of results to return.
* @property {string} pageToken A page token. Must be a value from
ListCollectionIdsResponse.
*/

/**
 * @typedef ListCollectionIdsResponse
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {string[]} collectionIds The collection ids.
 * @property {string} nextPageToken A page token that may be used to continue the list.
 */

/**
 * @typedef ListDocumentsResponse
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).Document[]} documents The Documents found.
 * @property {string} nextPageToken The next page token.
 */

/**
 * @typedef ListIndexesResponse
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).Index[]} indexes The indexes.
 * @property {string} nextPageToken The standard List next-page token.
 */

/**
 * @typedef ListenRequest
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).Target} addTarget A target to add to this stream.
 * @property {object} labels Labels associated with this target change.
 * @property {integer} removeTarget The ID of a target to remove from this stream.
 */

/**
 * @typedef ListenResponse
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).DocumentChange} documentChange A Document has changed.
* @property {firestore(v1beta1).DocumentDelete} documentDelete A Document has been deleted.
* @property {firestore(v1beta1).DocumentRemove} documentRemove A Document has been removed from a target (because it is no longer
relevant to that target).
* @property {firestore(v1beta1).ExistenceFilter} filter A filter to apply to the set of documents previously returned for the
given target.

Returned when documents may have been removed from the given target, but
the exact documents are unknown.
* @property {firestore(v1beta1).TargetChange} targetChange Targets have changed.
*/

/**
 * @typedef MapValue
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {object} fields The map&#39;s fields.

The map keys represent field names. Field names matching the regular
expression `__.*__` are reserved. Reserved field names are forbidden except
in certain documented contexts. The map keys, represented as UTF-8, must
not exceed 1,500 bytes and cannot be empty.
*/

/**
 * @typedef Operation
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {firestore(v1beta1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
*/

/**
 * @typedef Order
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {string} direction The direction to order by. Defaults to `ASCENDING`.
 * @property {firestore(v1beta1).FieldReference} field The field to order by.
 */

/**
 * @typedef Precondition
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {boolean} exists When set to `true`, the target document must exist.
When set to `false`, the target document must not exist.
* @property {string} updateTime When set, the target document must exist and have been last updated at
that time.
*/

/**
 * @typedef Projection
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).FieldReference[]} fields The fields to return.

If empty, all fields are returned. To only return the name
of the document, use `[&#39;__name__&#39;]`.
*/

/**
 * @typedef QueryTarget
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} parent The parent resource name. In the format:
`projects/{project_id}/databases/{database_id}/documents` or
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
For example:
`projects/my-project/databases/my-database/documents` or
`projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
* @property {firestore(v1beta1).StructuredQuery} structuredQuery A structured query.
*/

/**
 * @typedef ReadOnly
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} readTime Reads documents at the given time.
This may not be older than 60 seconds.
*/

/**
 * @typedef ReadWrite
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {string} retryTransaction An optional transaction to retry.
 */

/**
 * @typedef RollbackRequest
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {string} transaction The transaction to roll back.
 */

/**
 * @typedef RunQueryRequest
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).TransactionOptions} newTransaction Starts a new transaction and reads the documents.
Defaults to a read-only transaction.
The new transaction ID will be returned as the first response in the
stream.
* @property {string} readTime Reads documents as they were at the given time.
This may not be older than 60 seconds.
* @property {firestore(v1beta1).StructuredQuery} structuredQuery A structured query.
* @property {string} transaction Reads documents in a transaction.
*/

/**
 * @typedef RunQueryResponse
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Document} document A query result.
Not set when reporting partial progress.
* @property {string} readTime The time at which the document was read. This may be monotonically
increasing; in this case, the previous documents in the result stream are
guaranteed not to have changed between their `read_time` and this one.

If the query returns no results, a response with `read_time` and no
`document` will be sent, and this represents the time at which the query
was run.
* @property {integer} skippedResults The number of results that have been skipped due to an offset between
the last response and the current response.
* @property {string} transaction The transaction that was started as part of this request.
Can only be set in the first response, and only if
RunQueryRequest.new_transaction was set in the request.
If set, no other fields will be set in this response.
*/

/**
 * @typedef Status
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef StructuredQuery
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Cursor} endAt A end point for the query results.
* @property {firestore(v1beta1).CollectionSelector[]} from The collections to query.
* @property {integer} limit The maximum number of results to return.

Applies after all other constraints.
Must be &gt;= 0 if specified.
* @property {integer} offset The number of results to skip.

Applies before limit, but after all other constraints. Must be &gt;= 0 if
specified.
* @property {firestore(v1beta1).Order[]} orderBy The order to apply to the query results.

Firestore guarantees a stable ordering through the following rules:

 * Any field required to appear in `order_by`, that is not already
   specified in `order_by`, is appended to the order in field name order
   by default.
 * If an order on `__name__` is not specified, it is appended by default.

Fields are appended with the same sort direction as the last order
specified, or &#39;ASCENDING&#39; if no order was specified. For example:

 * `SELECT * FROM Foo ORDER BY A` becomes
   `SELECT * FROM Foo ORDER BY A, __name__`
 * `SELECT * FROM Foo ORDER BY A DESC` becomes
   `SELECT * FROM Foo ORDER BY A DESC, __name__ DESC`
 * `SELECT * FROM Foo WHERE A &gt; 1` becomes
   `SELECT * FROM Foo WHERE A &gt; 1 ORDER BY A, __name__`
* @property {firestore(v1beta1).Projection} select The projection to return.
* @property {firestore(v1beta1).Cursor} startAt A starting point for the query results.
* @property {firestore(v1beta1).Filter} where The filter to apply.
*/

/**
 * @typedef Target
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).DocumentsTarget} documents A target specified by a set of document names.
* @property {boolean} once If the target should be removed once it is current and consistent.
* @property {firestore(v1beta1).QueryTarget} query A target specified by a query.
* @property {string} readTime Start listening after a specific `read_time`.

The client must know the state of matching documents at this time.
* @property {string} resumeToken A resume token from a prior TargetChange for an identical target.

Using a resume token with a different target is unsupported and may fail.
* @property {integer} targetId A client provided target ID.

If not set, the server will assign an ID for the target.

Used for resuming a target without changing IDs. The IDs can either be
client-assigned or be server-assigned in a previous stream. All targets
with client provided IDs must be added before adding a target that needs
a server-assigned id.
*/

/**
 * @typedef TargetChange
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Status} cause The error that resulted in this change, if applicable.
* @property {string} readTime The consistent `read_time` for the given `target_ids` (omitted when the
target_ids are not at a consistent snapshot).

The stream is guaranteed to send a `read_time` with `target_ids` empty
whenever the entire stream reaches a new consistent snapshot. ADD,
CURRENT, and RESET messages are guaranteed to (eventually) result in a
new consistent snapshot (while NO_CHANGE and REMOVE messages are not).

For a given stream, `read_time` is guaranteed to be monotonically
increasing.
* @property {string} resumeToken A token that can be used to resume the stream for the given `target_ids`,
or all targets if `target_ids` is empty.

Not set on every target change.
* @property {string} targetChangeType The type of change that occurred.
* @property {integer[]} targetIds The target IDs of targets that have changed.

If empty, the change applies to all targets.

For `target_change_type=ADD`, the order of the target IDs matches the order
of the requests to add the targets. This allows clients to unambiguously
associate server-assigned target IDs with added targets.

For other states, the order of the target IDs is not defined.
*/

/**
 * @typedef TransactionOptions
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).ReadOnly} readOnly The transaction can only be used for read operations.
 * @property {firestore(v1beta1).ReadWrite} readWrite The transaction can be used for both read and write operations.
 */

/**
 * @typedef UnaryFilter
 * @memberOf! firestore(v1beta1)
 * @type object
 * @property {firestore(v1beta1).FieldReference} field The field to which to apply the operator.
 * @property {string} op The unary operator to apply.
 */

/**
 * @typedef Value
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).ArrayValue} arrayValue An array value.

Cannot contain another array value.
* @property {boolean} booleanValue A boolean value.
* @property {string} bytesValue A bytes value.

Must not exceed 1 MiB - 89 bytes.
Only the first 1,500 bytes are considered by queries.
* @property {number} doubleValue A double value.
* @property {firestore(v1beta1).LatLng} geoPointValue A geo point value representing a point on the surface of Earth.
* @property {string} integerValue An integer value.
* @property {firestore(v1beta1).MapValue} mapValue A map value.
* @property {string} nullValue A null value.
* @property {string} referenceValue A reference to a document. For example:
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
* @property {string} stringValue A string value.

The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
Only the first 1,500 bytes of the UTF-8 representation are considered by
queries.
* @property {string} timestampValue A timestamp value.

Precise only to microseconds. When stored, any additional precision is
rounded down.
*/

/**
 * @typedef Write
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Precondition} currentDocument An optional precondition on the document.

The write will fail if this is set and not met by the target document.
* @property {string} delete A document name to delete. In the format:
`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
* @property {firestore(v1beta1).DocumentTransform} transform Applies a tranformation to a document.
At most one `transform` per document is allowed in a given request.
An `update` cannot follow a `transform` on the same document in a given
request.
* @property {firestore(v1beta1).Document} update A document to write.
* @property {firestore(v1beta1).DocumentMask} updateMask The fields to update in this write.

This field can be set only when the operation is `update`.
None of the field paths in the mask may contain a reserved name.
If the document exists on the server and has fields not referenced in the
mask, they are left unchanged.
Fields referenced in the mask, but not present in the input document, are
deleted from the document on the server.
The field paths in this mask must not contain a reserved field name.
*/

/**
 * @typedef WriteRequest
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {object} labels Labels associated with this write request.
* @property {string} streamId The ID of the write stream to resume.
This may only be set in the first message. When left empty, a new write
stream will be created.
* @property {string} streamToken A stream token that was previously sent by the server.

The client should set this field to the token from the most recent
WriteResponse it has received. This acknowledges that the client has
received responses up to this token. After sending this token, earlier
tokens may not be used anymore.

The server may close the stream if there are too many unacknowledged
responses.

Leave this field unset when creating a new stream. To resume a stream at
a specific point, set this field and the `stream_id` field.

Leave this field unset when creating a new stream.
* @property {firestore(v1beta1).Write[]} writes The writes to apply.

Always executed atomically and in order.
This must be empty on the first request.
This may be empty on the last request.
This must not be empty on all other requests.
*/

/**
 * @typedef WriteResponse
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {string} commitTime The time at which the commit occurred.
* @property {string} streamId The ID of the stream.
Only set on the first message, when a new stream was created.
* @property {string} streamToken A token that represents the position of this response in the stream.
This can be used by a client to resume the stream at this point.

This field is always set.
* @property {firestore(v1beta1).WriteResult[]} writeResults The result of applying the writes.

This i-th write result corresponds to the i-th write in the
request.
*/

/**
 * @typedef WriteResult
 * @memberOf! firestore(v1beta1)
 * @type object
* @property {firestore(v1beta1).Value[]} transformResults The results of applying each DocumentTransform.FieldTransform, in the
same order.
* @property {string} updateTime The last update time of the document after applying the write. Not set
after a `delete`.

If the write did not actually change the document, this will be the
previous update_time.
*/
export = Firestore;
