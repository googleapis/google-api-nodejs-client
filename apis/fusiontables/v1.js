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

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Fusion Tables API
 *
 * API for working with Fusion Tables data.
 *
 * @example
 * var google = require('googleapis');
 * var fusiontables = google.fusiontables('v1');
 *
 * @namespace fusiontables
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Fusiontables
 */
function Fusiontables(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.column = {

    /**
     * fusiontables.column.delete
     *
     * @desc Deletes the column.
     *
     * @alias fusiontables.column.delete
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column being deleted.
     * @param {string} params.tableId Table from which the column is being deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/columns/{columnId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.get
     *
     * @desc Retrieves a specific column by its id.
     *
     * @alias fusiontables.column.get
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column that is being requested.
     * @param {string} params.tableId Table to which the column belongs.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/columns/{columnId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.insert
     *
     * @desc Adds a new column to the table.
     *
     * @alias fusiontables.column.insert
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table for which a new column is being added.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/columns',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.list
     *
     * @desc Retrieves a list of columns.
     *
     * @alias fusiontables.column.list
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of columns to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
     * @param {string} params.tableId Table whose columns are being listed.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/columns',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.patch
     *
     * @desc Updates the name or type of an existing column. This method supports patch semantics.
     *
     * @alias fusiontables.column.patch
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column that is being updated.
     * @param {string} params.tableId Table for which the column is being updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/columns/{columnId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.update
     *
     * @desc Updates the name or type of an existing column.
     *
     * @alias fusiontables.column.update
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column that is being updated.
     * @param {string} params.tableId Table for which the column is being updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/columns/{columnId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.query = {

    /**
     * fusiontables.query.sql
     *
     * @desc Executes an SQL SELECT/INSERT/UPDATE/DELETE/SHOW/DESCRIBE/CREATE statement.
     *
     * @alias fusiontables.query.sql
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.hdrs Should column names be included (in the first row)?. Default is true.
     * @param {string} params.sql An SQL SELECT/SHOW/DESCRIBE/INSERT/UPDATE/DELETE/CREATE statement.
     * @param {boolean=} params.typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sql: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/query',
          method: 'POST'
        },
        params: params,
        requiredParams: ['sql'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.query.sqlGet
     *
     * @desc Executes an SQL SELECT/SHOW/DESCRIBE statement.
     *
     * @alias fusiontables.query.sqlGet
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.hdrs Should column names be included (in the first row)?. Default is true.
     * @param {string} params.sql An SQL SELECT/SHOW/DESCRIBE statement.
     * @param {boolean=} params.typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sqlGet: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/query',
          method: 'GET'
        },
        params: params,
        requiredParams: ['sql'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.style = {

    /**
     * fusiontables.style.delete
     *
     * @desc Deletes a style.
     *
     * @alias fusiontables.style.delete
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (within a table) for the style being deleted
     * @param {string} params.tableId Table from which the style is being deleted
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/styles/{styleId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.get
     *
     * @desc Gets a specific style.
     *
     * @alias fusiontables.style.get
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (integer) for a specific style in a table
     * @param {string} params.tableId Table to which the requested style belongs
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/styles/{styleId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.insert
     *
     * @desc Adds a new style for the table.
     *
     * @alias fusiontables.style.insert
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table for which a new style is being added
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/styles',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.list
     *
     * @desc Retrieves a list of styles.
     *
     * @alias fusiontables.style.list
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of styles to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
     * @param {string} params.tableId Table whose styles are being listed
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/styles',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.patch
     *
     * @desc Updates an existing style. This method supports patch semantics.
     *
     * @alias fusiontables.style.patch
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (within a table) for the style being updated.
     * @param {string} params.tableId Table whose style is being updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/styles/{styleId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.update
     *
     * @desc Updates an existing style.
     *
     * @alias fusiontables.style.update
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (within a table) for the style being updated.
     * @param {string} params.tableId Table whose style is being updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/styles/{styleId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.table = {

    /**
     * fusiontables.table.copy
     *
     * @desc Copies a table.
     *
     * @alias fusiontables.table.copy
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.copyPresentation Whether to also copy tabs, styles, and templates. Default is false.
     * @param {string} params.tableId ID of the table that is being copied.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/copy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.delete
     *
     * @desc Deletes a table.
     *
     * @alias fusiontables.table.delete
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId ID of the table that is being deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.get
     *
     * @desc Retrieves a specific table by its id.
     *
     * @alias fusiontables.table.get
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Identifier(ID) for the table being requested.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.importRows
     *
     * @desc Import more rows into a table.
     *
     * @alias fusiontables.table.importRows
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
     * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param {integer=} params.endLine The index of the last line from which to start importing, exclusive. Thus, the number of imported lines is endLine - startLine. If this parameter is not provided, the file will be imported until the last line of the file. If endLine is negative, then the imported content will exclude the last endLine lines. That is, if endline is negative, no line will be imported whose index is greater than N + endLine where N is the number of lines in the file, and the number of imported lines will be N + endLine - startLine.
     * @param {boolean=} params.isStrict Whether the CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
     * @param {integer=} params.startLine The index of the first line from which to start importing, inclusive. Default is 0.
     * @param {string} params.tableId The table into which new rows are being imported.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importRows: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/import',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/fusiontables/v1/tables/{tableId}/import',
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.importTable
     *
     * @desc Import a new table.
     *
     * @alias fusiontables.table.importTable
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
     * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param {string} params.name The name to be assigned to the new table.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importTable: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/import',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/fusiontables/v1/tables/import',
        requiredParams: ['name'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.insert
     *
     * @desc Creates a new table.
     *
     * @alias fusiontables.table.insert
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.list
     *
     * @desc Retrieves a list of tables a user owns.
     *
     * @alias fusiontables.table.list
     * @memberOf! fusiontables(v1)
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of styles to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.patch
     *
     * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
     *
     * @alias fusiontables.table.patch
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param {string} params.tableId ID of the table that is being updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.update
     *
     * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
     *
     * @alias fusiontables.table.update
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param {string} params.tableId ID of the table that is being updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.task = {

    /**
     * fusiontables.task.delete
     *
     * @desc Deletes the task, unless already started.
     *
     * @alias fusiontables.task.delete
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table from which the task is being deleted.
     * @param {string} params.taskId 
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/tasks/{taskId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'taskId'],
        pathParams: ['tableId', 'taskId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.task.get
     *
     * @desc Retrieves a specific task by its id.
     *
     * @alias fusiontables.task.get
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the task belongs.
     * @param {string} params.taskId 
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/tasks/{taskId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'taskId'],
        pathParams: ['tableId', 'taskId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.task.list
     *
     * @desc Retrieves a list of tasks.
     *
     * @alias fusiontables.task.list
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of columns to return. Optional. Default is 5.
     * @param {string=} params.pageToken 
     * @param {integer=} params.startIndex 
     * @param {string} params.tableId Table whose tasks are being listed.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/tasks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.template = {

    /**
     * fusiontables.template.delete
     *
     * @desc Deletes a template
     *
     * @alias fusiontables.template.delete
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table from which the template is being deleted
     * @param {integer} params.templateId Identifier for the template which is being deleted
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/templates/{templateId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.get
     *
     * @desc Retrieves a specific template by its id
     *
     * @alias fusiontables.template.get
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the template belongs
     * @param {integer} params.templateId Identifier for the template that is being requested
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/templates/{templateId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.insert
     *
     * @desc Creates a new template for the table.
     *
     * @alias fusiontables.template.insert
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table for which a new template is being created
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/templates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.list
     *
     * @desc Retrieves a list of templates.
     *
     * @alias fusiontables.template.list
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of templates to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which results page to return. Optional.
     * @param {string} params.tableId Identifier for the table whose templates are being requested
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/templates',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.patch
     *
     * @desc Updates an existing template. This method supports patch semantics.
     *
     * @alias fusiontables.template.patch
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the updated template belongs
     * @param {integer} params.templateId Identifier for the template that is being updated
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/templates/{templateId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.update
     *
     * @desc Updates an existing template
     *
     * @alias fusiontables.template.update
     * @memberOf! fusiontables(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the updated template belongs
     * @param {integer} params.templateId Identifier for the template that is being updated
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v1/tables/{tableId}/templates/{templateId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Fusiontables;
