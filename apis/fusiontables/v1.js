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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Fusion Tables API
 *
 * @classdesc API for working with Fusion Tables data.
 * @namespace fusiontables
 * @version  v1
 * @variation v1
 * @this Fusiontables
 * @param {object=} options Options for Fusiontables
 */
function Fusiontables(options) {

  var self = this;
  this._options = options || {};

  this.column = {

    /**
     * fusiontables.column.delete
     *
     * @desc Deletes the column.
     *
     * @alias fusiontables.column.delete
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column being deleted.
     * @param  {string} params.tableId - Table from which the column is being deleted.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'columnId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/columns/' + params.columnId,
        method: 'DELETE'
      };

      delete params.columnId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.column.get
     *
     * @desc Retrieves a specific column by its id.
     *
     * @alias fusiontables.column.get
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column that is being requested.
     * @param  {string} params.tableId - Table to which the column belongs.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'columnId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/columns/' + params.columnId,
        method: 'GET'
      };

      delete params.columnId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.column.insert
     *
     * @desc Adds a new column to the table.
     *
     * @alias fusiontables.column.insert
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table for which a new column is being added.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/columns',
        method: 'POST'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.column.list
     *
     * @desc Retrieves a list of columns.
     *
     * @alias fusiontables.column.list
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of columns to return. Optional. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return. Optional.
     * @param  {string} params.tableId - Table whose columns are being listed.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/columns',
        method: 'GET'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.column.patch
     *
     * @desc Updates the name or type of an existing column. This method supports patch semantics.
     *
     * @alias fusiontables.column.patch
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column that is being updated.
     * @param  {string} params.tableId - Table for which the column is being updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'columnId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/columns/' + params.columnId,
        method: 'PATCH'
      };

      delete params.columnId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.column.update
     *
     * @desc Updates the name or type of an existing column.
     *
     * @alias fusiontables.column.update
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column that is being updated.
     * @param  {string} params.tableId - Table for which the column is being updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'columnId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/columns/' + params.columnId,
        method: 'PUT'
      };

      delete params.columnId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.query = {

    /**
     * fusiontables.query.sql
     *
     * @desc Executes an SQL SELECT/INSERT/UPDATE/DELETE/SHOW/DESCRIBE/CREATE statement.
     *
     * @alias fusiontables.query.sql
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.hdrs - Should column names be included (in the first row)?. Default is true.
     * @param  {string} params.sql - An SQL SELECT/SHOW/DESCRIBE/INSERT/UPDATE/DELETE/CREATE statement.
     * @param  {boolean=} params.typed - Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    sql: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['sql']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/query',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.query.sqlGet
     *
     * @desc Executes an SQL SELECT/SHOW/DESCRIBE statement.
     *
     * @alias fusiontables.query.sqlGet
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.hdrs - Should column names be included (in the first row)?. Default is true.
     * @param  {string} params.sql - An SQL SELECT/SHOW/DESCRIBE statement.
     * @param  {boolean=} params.typed - Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    sqlGet: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['sql']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/query',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.style = {

    /**
     * fusiontables.style.delete
     *
     * @desc Deletes a style.
     *
     * @alias fusiontables.style.delete
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (within a table) for the style being deleted
     * @param  {string} params.tableId - Table from which the style is being deleted
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'styleId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/styles/' + params.styleId,
        method: 'DELETE'
      };

      delete params.styleId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.style.get
     *
     * @desc Gets a specific style.
     *
     * @alias fusiontables.style.get
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (integer) for a specific style in a table
     * @param  {string} params.tableId - Table to which the requested style belongs
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'styleId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/styles/' + params.styleId,
        method: 'GET'
      };

      delete params.styleId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.style.insert
     *
     * @desc Adds a new style for the table.
     *
     * @alias fusiontables.style.insert
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table for which a new style is being added
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/styles',
        method: 'POST'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.style.list
     *
     * @desc Retrieves a list of styles.
     *
     * @alias fusiontables.style.list
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of styles to return. Optional. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return. Optional.
     * @param  {string} params.tableId - Table whose styles are being listed
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/styles',
        method: 'GET'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.style.patch
     *
     * @desc Updates an existing style. This method supports patch semantics.
     *
     * @alias fusiontables.style.patch
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (within a table) for the style being updated.
     * @param  {string} params.tableId - Table whose style is being updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'styleId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/styles/' + params.styleId,
        method: 'PATCH'
      };

      delete params.styleId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.style.update
     *
     * @desc Updates an existing style.
     *
     * @alias fusiontables.style.update
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (within a table) for the style being updated.
     * @param  {string} params.tableId - Table whose style is being updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'styleId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/styles/' + params.styleId,
        method: 'PUT'
      };

      delete params.styleId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.table = {

    /**
     * fusiontables.table.copy
     *
     * @desc Copies a table.
     *
     * @alias fusiontables.table.copy
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.copyPresentation - Whether to also copy tabs, styles, and templates. Default is false.
     * @param  {string} params.tableId - ID of the table that is being copied.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    copy: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/copy',
        method: 'POST'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.delete
     *
     * @desc Deletes a table.
     *
     * @alias fusiontables.table.delete
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - ID of the table that is being deleted.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId,
        method: 'DELETE'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.get
     *
     * @desc Retrieves a specific table by its id.
     *
     * @alias fusiontables.table.get
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Identifier(ID) for the table being requested.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId,
        method: 'GET'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.importRows
     *
     * @desc Import more rows into a table.
     *
     * @alias fusiontables.table.importRows
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.delimiter - The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
     * @param  {string=} params.encoding - The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param  {integer=} params.endLine - The index of the last line from which to start importing, exclusive. Thus, the number of imported lines is endLine - startLine. If this parameter is not provided, the file will be imported until the last line of the file. If endLine is negative, then the imported content will exclude the last endLine lines. That is, if endline is negative, no line will be imported whose index is greater than N + endLine where N is the number of lines in the file, and the number of imported lines will be N + endLine - startLine.
     * @param  {boolean=} params.isStrict - Whether the CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
     * @param  {integer=} params.startLine - The index of the first line from which to start importing, inclusive. Default is 0.
     * @param  {string} params.tableId - The table into which new rows are being imported.
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    importRows: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/fusiontables/v1/tables/' + params.tableId + '/import',
        method: 'POST'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.importTable
     *
     * @desc Import a new table.
     *
     * @alias fusiontables.table.importTable
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.delimiter - The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
     * @param  {string=} params.encoding - The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param  {string} params.name - The name to be assigned to the new table.
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    importTable: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['name']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/fusiontables/v1/tables/import',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.insert
     *
     * @desc Creates a new table.
     *
     * @alias fusiontables.table.insert
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.list
     *
     * @desc Retrieves a list of tables a user owns.
     *
     * @alias fusiontables.table.list
     * @memberOf! fusiontables(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of styles to return. Optional. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return. Optional.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.patch
     *
     * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
     *
     * @alias fusiontables.table.patch
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.replaceViewDefinition - Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param  {string} params.tableId - ID of the table that is being updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId,
        method: 'PATCH'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.table.update
     *
     * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
     *
     * @alias fusiontables.table.update
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.replaceViewDefinition - Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param  {string} params.tableId - ID of the table that is being updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId,
        method: 'PUT'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.template = {

    /**
     * fusiontables.template.delete
     *
     * @desc Deletes a template
     *
     * @alias fusiontables.template.delete
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table from which the template is being deleted
     * @param  {integer} params.templateId - Identifier for the template which is being deleted
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'templateId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/templates/' + params.templateId,
        method: 'DELETE'
      };

      delete params.tableId;
      delete params.templateId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.template.get
     *
     * @desc Retrieves a specific template by its id
     *
     * @alias fusiontables.template.get
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the template belongs
     * @param  {integer} params.templateId - Identifier for the template that is being requested
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'templateId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/templates/' + params.templateId,
        method: 'GET'
      };

      delete params.tableId;
      delete params.templateId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.template.insert
     *
     * @desc Creates a new template for the table.
     *
     * @alias fusiontables.template.insert
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table for which a new template is being created
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/templates',
        method: 'POST'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.template.list
     *
     * @desc Retrieves a list of templates.
     *
     * @alias fusiontables.template.list
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of templates to return. Optional. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which results page to return. Optional.
     * @param  {string} params.tableId - Identifier for the table whose templates are being requested
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/templates',
        method: 'GET'
      };

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.template.patch
     *
     * @desc Updates an existing template. This method supports patch semantics.
     *
     * @alias fusiontables.template.patch
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the updated template belongs
     * @param  {integer} params.templateId - Identifier for the template that is being updated
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'templateId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/templates/' + params.templateId,
        method: 'PATCH'
      };

      delete params.tableId;
      delete params.templateId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * fusiontables.template.update
     *
     * @desc Updates an existing template
     *
     * @alias fusiontables.template.update
     * @memberOf! fusiontables(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the updated template belongs
     * @param  {integer} params.templateId - Identifier for the template that is being updated
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tableId', 'templateId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/fusiontables/v1/tables/' + params.tableId + '/templates/' + params.templateId,
        method: 'PUT'
      };

      delete params.tableId;
      delete params.templateId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Fusiontables object
 * @type Fusiontables
 */
module.exports = Fusiontables;