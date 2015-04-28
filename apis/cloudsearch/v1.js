/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Search API
 *
 * @classdesc The Google Cloud Search API defines an application interface to index documents that contain structured data and to search those indexes. It supports full text search.
 * @namespace cloudsearch
 * @version  v1
 * @variation v1
 * @this Cloudsearch
 * @param {object=} options Options for Cloudsearch
 */
function Cloudsearch(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    indexes: {

      /**
       * cloudsearch.projects.indexes.list
       *
       * @desc Lists search indexes belonging to the specified project.
       *
       * @alias cloudsearch.projects.indexes.list
       * @memberOf! cloudsearch(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The project from which to retrieve indexes. It cannot be the empty string.
       * @param  {string=} params.indexNamePrefix - The prefix of the index name. It is used to list all indexes with names that have this prefix.
       * @param  {integer=} params.pageSize - The maximum number of indexes to return per page. If not specified, 100 indexes are returned per page.
       * @param  {string=} params.pageToken - A `nextPageToken` returned from previous list indexes call as the starting point for this call. If not specified, list indexes from the beginning.
       * @param  {string=} params.view - Specifies which parts of the IndexInfo resource is returned in the response. If not specified, `ID_ONLY` is used.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudsearch.googleapis.com/v1/projects/{projectId}/indexes',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'indexNamePrefix', 'pageSize', 'pageToken', 'view'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * cloudsearch.projects.indexes.search
       *
       * @desc Lists the documents in the named index that match the query.
       *
       * @alias cloudsearch.projects.indexes.search
       * @memberOf! cloudsearch(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The project associated with the index for searching document. It cannot be the empty string.
       * @param  {string} params.indexId - The index to search. It cannot be the empty string.
       * @param  {string=} params.query - The query string in search query syntax. If the query is missing or empty, all documents are returned.
       * @param  {string=} params.fieldExpressions - Customized expressions used in `orderBy` or `returnFields`. The expression can contain fields in `Document`, the built-in fields ( `_rank`, the document rank, and `_score` if scoring is enabled) and fields defined in `fieldExpressions`. Each field expression is represented in a json object with the following fields: * `name`: the name of the field expression in string. * `expression`: the expression to be computed. It can be a combination of supported functions encoded in string. Expressions involving number fields can use the arithmetical operators (`+`, `-`, `*`, `/`) and the built-in numeric functions (`max`, `min`, `pow`, `count`, `log`, `abs`). Expressions involving geopoint fields can use the `geopoint` and `distance` functions. Expressions for text and html fields can use the `snippet` function. For example: ``` fieldExpressions={name: "TotalPrice", expression: "(Price+Tax)"} ``` ``` fieldExpressions={name: "snippet", expression: "snippet('good times', content)"} ``` The field expression names can be used in `orderBy` and `returnFields` after they are defined in `fieldExpressions`.
       * @param  {integer=} params.pageSize - The maximum number of search results to return per page. Searches perform best when the `pageSize` is kept as small as possible. If not specified, 10 results are returned per page.
       * @param  {string=} params.pageToken - A `nextPageToken` returned from previous Search call as the starting point for this call. Pagination tokens provide better performance and consistency than offsets, and they cannot be used in combination with offsets.
       * @param  {integer=} params.offset - Offset is used to move to an arbitrary result, independent of the previous results. Offsets are inefficient when compared to `pageToken`. `pageToken` and `offset` cannot be both set. The default value of `offset` is 0.
       * @param  {integer=} params.matchedCountAccuracy - Minimum accuracy requirement for `matchedCount` in search response. If specified, `matchedCount` will be accurate up to at least that number. For example, when set to 100, any `matchedCount <= 100` is accurate. This option may add considerable latency/expense. By default (when it is not specified or set to 0), the accuracy is the same as `pageSize`.
       * @param  {string=} params.orderBy - Comma-separated list of fields for sorting on the search result, including fields from `Document`, the built-in fields (`_rank` and `_score`), and fields defined in `fieldExpressions`. For example: `orderBy="foo,bar"`. The default sorting order is ascending. To specify descending order for a field, a suffix `" desc"` should be appended to the field name. For example: `orderBy="foo desc,bar"`. The default value for text sort is the empty string, and the default value for numeric sort is 0. If not specified, the search results are automatically sorted by descending `_rank`. Sorting by ascending `_rank` is not allowed.
       * @param  {string=} params.scorer - The scoring function to invoke on a search result for this query. If `scorer` is not set, scoring is disabled and `_score` is 0 for all documents in the search result. To enable document relevancy score based on term frequency, set `"scorer=generic"`.
       * @param  {integer=} params.scorerSize - Maximum number of top retrieved results to score. It is valid only when `scorer` is set. If not specified, 100 retrieved results are scored.
       * @param  {string=} params.returnFields - List of fields to return in `SearchResult` objects. It can be fields from `Document`, the built-in fields `_rank` and `_score`, and fields defined in `fieldExpressions`. Use `"*"` to return all fields from `Document`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      search: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudsearch.googleapis.com/v1/projects/{projectId}/indexes/{indexId}/search',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'indexId', 'query', 'fieldExpressions', 'pageSize', 'pageToken', 'offset', 'matchedCountAccuracy', 'orderBy', 'scorer', 'scorerSize', 'returnFields'],
          pathParams: ['projectId', 'indexId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      documents: {

        /**
         * cloudsearch.projects.indexes.documents.create
         *
         * @desc Inserts a document for indexing or updates an indexed document. The returned document contains only the ID of the new document. When `docId` is absent from the document, it is provided by the server.
         *
         * @alias cloudsearch.projects.indexes.documents.create
         * @memberOf! cloudsearch(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project associated with the index for adding document. It cannot be the empty string.
         * @param  {string} params.indexId - The index to add document to. It cannot be the empty string.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://cloudsearch.googleapis.com/v1/projects/{projectId}/indexes/{indexId}/documents',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'indexId'],
            pathParams: ['projectId', 'indexId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudsearch.projects.indexes.documents.delete
         *
         * @desc Deletes a document from an index.
         *
         * @alias cloudsearch.projects.indexes.documents.delete
         * @memberOf! cloudsearch(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project associated with the index for deleting document. It cannot be the empty string.
         * @param  {string} params.indexId - The index from which to delete the document. It cannot be the empty string.
         * @param  {string} params.docId - The document to be deleted. It cannot be the empty string.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://cloudsearch.googleapis.com/v1/projects/{projectId}/indexes/{indexId}/documents/{docId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectId', 'indexId', 'docId'],
            pathParams: ['projectId', 'indexId', 'docId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudsearch.projects.indexes.documents.get
         *
         * @desc Retrieves a document from an index.
         *
         * @alias cloudsearch.projects.indexes.documents.get
         * @memberOf! cloudsearch(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project associated with the index for retrieving the document. It cannot be the empty string.
         * @param  {string} params.indexId - The index from which to retrieve the document. It cannot be the empty string.
         * @param  {string} params.docId - The identifier of the document to retrieve. It cannot be the empty string.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://cloudsearch.googleapis.com/v1/projects/{projectId}/indexes/{indexId}/documents/{docId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'indexId', 'docId'],
            pathParams: ['projectId', 'indexId', 'docId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudsearch.projects.indexes.documents.list
         *
         * @desc Lists documents in the specified search index. Intended for batch processing.
         *
         * @alias cloudsearch.projects.indexes.documents.list
         * @memberOf! cloudsearch(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project associated with the index for listing documents. It cannot be the empty string.
         * @param  {string} params.indexId - The index from which to list the documents. It cannot be the empty string.
         * @param  {integer=} params.pageSize - The maximum number of documents to return per page. If not specified, 100 documents are returned per page.
         * @param  {string=} params.pageToken - A `nextPageToken` returned from previous list documents call as the starting point for this call. If not specified, list documents from the beginning.
         * @param  {string=} params.view - Specifies which part of the document resource is returned in the response. If not specified, `ID_ONLY` is used.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://cloudsearch.googleapis.com/v1/projects/{projectId}/indexes/{indexId}/documents',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'indexId', 'pageSize', 'pageToken', 'view'],
            pathParams: ['projectId', 'indexId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * Exports Cloudsearch object
 * @type Cloudsearch
 */
module.exports = Cloudsearch;