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
// tslint:disable: no-namespace

export namespace fusiontables_v1 {
  /**
   * Fusion Tables API
   *
   * API for working with Fusion Tables data.
   *
   * @example
   * const google = require('googleapis');
   * const fusiontables = google.fusiontables('v1');
   *
   * @namespace fusiontables
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Fusiontables
   */
  export class Fusiontables {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    column: Resource$Column;
    query: Resource$Query;
    style: Resource$Style;
    table: Resource$Table;
    task: Resource$Task;
    template: Resource$Template;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.column = new Resource$Column(this);
      this.query = new Resource$Query(this);
      this.style = new Resource$Style(this);
      this.table = new Resource$Table(this);
      this.task = new Resource$Task(this);
      this.template = new Resource$Template(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Specifies the minimum and maximum values, the color, opacity, icon and
   * weight of a bucket within a StyleSetting.
   */
  export interface Schema$Bucket {
    /**
     * Color of line or the interior of a polygon in #RRGGBB format.
     */
    color: string;
    /**
     * Icon name used for a point.
     */
    icon: string;
    /**
     * Maximum value in the selected column for a row to be styled according to
     * the bucket color, opacity, icon, or weight.
     */
    max: number;
    /**
     * Minimum value in the selected column for a row to be styled according to
     * the bucket color, opacity, icon, or weight.
     */
    min: number;
    /**
     * Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
     */
    opacity: number;
    /**
     * Width of a line (in pixels).
     */
    weight: number;
  }
  /**
   * Specifies the id, name and type of a column in a table.
   */
  export interface Schema$Column {
    /**
     * Optional identifier of the base column. If present, this column is
     * derived from the specified base column.
     */
    baseColumn: any;
    /**
     * Identifier for the column.
     */
    columnId: number;
    /**
     * Optional column description.
     */
    description: string;
    /**
     * Optional column predicate. Used to map table to graph data model
     * (subject,predicate,object) See
     * http://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#data-model
     */
    graph_predicate: string;
    /**
     * Type name: a template for an individual column.
     */
    kind: string;
    /**
     * Required name of the column.
     */
    name: string;
    /**
     * Required type of the column.
     */
    type: string;
  }
  /**
   * Represents a list of columns in a table.
   */
  export interface Schema$ColumnList {
    /**
     * List of all requested columns.
     */
    items: Schema$Column[];
    /**
     * Type name: a list of all columns.
     */
    kind: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken: string;
    /**
     * Total number of columns for the table.
     */
    totalItems: number;
  }
  /**
   * Represents a Geometry object.
   */
  export interface Schema$Geometry {
    /**
     * The list of geometries in this geometry collection.
     */
    geometries: any[];
    geometry: any;
    /**
     * Type: A collection of geometries.
     */
    type: string;
  }
  /**
   * Represents an import request.
   */
  export interface Schema$Import {
    /**
     * Type name: a template for an import request.
     */
    kind: string;
    /**
     * The number of rows received from the import request.
     */
    numRowsReceived: string;
  }
  /**
   * Represents a line geometry.
   */
  export interface Schema$Line {
    /**
     * The coordinates that define the line.
     */
    coordinates: number[][];
    /**
     * Type: A line geometry.
     */
    type: string;
  }
  /**
   * Represents a LineStyle within a StyleSetting
   */
  export interface Schema$LineStyle {
    /**
     * Color of the line in #RRGGBB format.
     */
    strokeColor: string;
    /**
     * Column-value, gradient or buckets styler that is used to determine the
     * line color and opacity.
     */
    strokeColorStyler: Schema$StyleFunction;
    /**
     * Opacity of the line : 0.0 (transparent) to 1.0 (opaque).
     */
    strokeOpacity: number;
    /**
     * Width of the line in pixels.
     */
    strokeWeight: number;
    /**
     * Column-value or bucket styler that is used to determine the width of the
     * line.
     */
    strokeWeightStyler: Schema$StyleFunction;
  }
  /**
   * Represents a point object.
   */
  export interface Schema$Point {
    /**
     * The coordinates that define the point.
     */
    coordinates: number[];
    /**
     * Point: A point geometry.
     */
    type: string;
  }
  /**
   * Represents a PointStyle within a StyleSetting
   */
  export interface Schema$PointStyle {
    /**
     * Name of the icon. Use values defined in
     * http://www.google.com/fusiontables/DataSource?dsrcid=308519
     */
    iconName: string;
    /**
     * Column or a bucket value from which the icon name is to be determined.
     */
    iconStyler: Schema$StyleFunction;
  }
  /**
   * Represents a polygon object.
   */
  export interface Schema$Polygon {
    /**
     * The coordinates that define the polygon.
     */
    coordinates: number[][][];
    /**
     * Type: A polygon geometry.
     */
    type: string;
  }
  /**
   * Represents a PolygonStyle within a StyleSetting
   */
  export interface Schema$PolygonStyle {
    /**
     * Color of the interior of the polygon in #RRGGBB format.
     */
    fillColor: string;
    /**
     * Column-value, gradient, or bucket styler that is used to determine the
     * interior color and opacity of the polygon.
     */
    fillColorStyler: Schema$StyleFunction;
    /**
     * Opacity of the interior of the polygon: 0.0 (transparent) to 1.0
     * (opaque).
     */
    fillOpacity: number;
    /**
     * Color of the polygon border in #RRGGBB format.
     */
    strokeColor: string;
    /**
     * Column-value, gradient or buckets styler that is used to determine the
     * border color and opacity.
     */
    strokeColorStyler: Schema$StyleFunction;
    /**
     * Opacity of the polygon border: 0.0 (transparent) to 1.0 (opaque).
     */
    strokeOpacity: number;
    /**
     * Width of the polyon border in pixels.
     */
    strokeWeight: number;
    /**
     * Column-value or bucket styler that is used to determine the width of the
     * polygon border.
     */
    strokeWeightStyler: Schema$StyleFunction;
  }
  /**
   * Represents a response to an sql statement.
   */
  export interface Schema$Sqlresponse {
    /**
     * Columns in the table.
     */
    columns: string[];
    /**
     * Type name: a template for an individual table.
     */
    kind: string;
    /**
     * The rows in the table. For each cell we print out whatever cell value
     * (e.g., numeric, string) exists. Thus it is important that each cell
     * contains only one value.
     */
    rows: any[][];
  }
  /**
   * Represents a StyleFunction within a StyleSetting
   */
  export interface Schema$StyleFunction {
    /**
     * Bucket function that assigns a style based on the range a column value
     * falls into.
     */
    buckets: Schema$Bucket[];
    /**
     * Name of the column whose value is used in the style.
     */
    columnName: string;
    /**
     * Gradient function that interpolates a range of colors based on column
     * value.
     */
    gradient: any;
    /**
     * Stylers can be one of three kinds: &quot;fusiontables#fromColumn&quot; if
     * the column value is to be used as is, i.e., the column values can have
     * colors in #RRGGBBAA format or integer line widths or icon names;
     * &quot;fusiontables#gradient&quot; if the styling of the row is to be
     * based on applying the gradient function on the column value; or
     * &quot;fusiontables#buckets&quot; if the styling is to based on the bucket
     * into which the the column value falls.
     */
    kind: string;
  }
  /**
   * Represents a complete StyleSettings object. The primary key is a
   * combination of the tableId and a styleId.
   */
  export interface Schema$StyleSetting {
    /**
     * Type name: an individual style setting. A StyleSetting contains the style
     * defintions for points, lines, and polygons in a table. Since a table can
     * have any one or all of them, a style definition can have point, line and
     * polygon style definitions.
     */
    kind: string;
    /**
     * Style definition for points in the table.
     */
    markerOptions: Schema$PointStyle;
    /**
     * Optional name for the style setting.
     */
    name: string;
    /**
     * Style definition for polygons in the table.
     */
    polygonOptions: Schema$PolygonStyle;
    /**
     * Style definition for lines in the table.
     */
    polylineOptions: Schema$LineStyle;
    /**
     * Identifier for the style setting (unique only within tables).
     */
    styleId: number;
    /**
     * Identifier for the table.
     */
    tableId: string;
  }
  /**
   * Represents a list of styles for a given table.
   */
  export interface Schema$StyleSettingList {
    /**
     * All requested style settings.
     */
    items: Schema$StyleSetting[];
    /**
     * Type name: in this case, a list of style settings.
     */
    kind: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken: string;
    /**
     * Total number of styles for the table.
     */
    totalItems: number;
  }
  /**
   * Represents a table. Specifies the name, whether it is exportable,
   * description, attribution, and attribution link.
   */
  export interface Schema$Table {
    /**
     * Optional attribution assigned to the table.
     */
    attribution: string;
    /**
     * Optional link for attribution.
     */
    attributionLink: string;
    /**
     * Optional base table identifier if this table is a view or merged table.
     */
    baseTableIds: string[];
    /**
     * Columns in the table.
     */
    columns: Schema$Column[];
    /**
     * Optional description assigned to the table.
     */
    description: string;
    /**
     * Variable for whether table is exportable.
     */
    isExportable: boolean;
    /**
     * Type name: a template for an individual table.
     */
    kind: string;
    /**
     * Name assigned to a table.
     */
    name: string;
    /**
     * Optional sql that encodes the table definition for derived tables.
     */
    sql: string;
    /**
     * Encrypted unique alphanumeric identifier for the table.
     */
    tableId: string;
  }
  /**
   * Represents a list of tables.
   */
  export interface Schema$TableList {
    /**
     * List of all requested tables.
     */
    items: Schema$Table[];
    /**
     * Type name: a list of all tables.
     */
    kind: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken: string;
  }
  /**
   * Specifies the identifier, name, and type of a task in a table.
   */
  export interface Schema$Task {
    /**
     * Type of the resource. This is always &quot;fusiontables#task&quot;.
     */
    kind: string;
    /**
     * An indication of task progress.
     */
    progress: string;
    /**
     * false while the table is busy with some other task. true if this
     * background task is currently running.
     */
    started: boolean;
    /**
     * Identifier for the task.
     */
    taskId: string;
    /**
     * Type of background task. One of  DELETE_ROWS Deletes one or more rows
     * from the table. ADD_ROWS &quot;Adds one or more rows to a table. Includes
     * importing data into a new table and importing more rows into an existing
     * table. ADD_COLUMN Adds a new column to the table. CHANGE_TYPE Changes the
     * type of a column.
     */
    type: string;
  }
  /**
   * Represents a list of tasks for a table.
   */
  export interface Schema$TaskList {
    /**
     * List of all requested tasks.
     */
    items: Schema$Task[];
    /**
     * Type of the resource. This is always &quot;fusiontables#taskList&quot;.
     */
    kind: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken: string;
    /**
     * Total number of tasks for the table.
     */
    totalItems: number;
  }
  /**
   * Represents the contents of InfoWindow templates.
   */
  export interface Schema$Template {
    /**
     * List of columns from which the template is to be automatically
     * constructed. Only one of body or automaticColumns can be specified.
     */
    automaticColumnNames: string[];
    /**
     * Body of the template. It contains HTML with {column_name} to insert
     * values from a particular column. The body is sanitized to remove certain
     * tags, e.g., script. Only one of body or automaticColumns can be
     * specified.
     */
    body: string;
    /**
     * Type name: a template for the info window contents. The template can
     * either include an HTML body or a list of columns from which the template
     * is computed automatically.
     */
    kind: string;
    /**
     * Optional name assigned to a template.
     */
    name: string;
    /**
     * Identifier for the table for which the template is defined.
     */
    tableId: string;
    /**
     * Identifier for the template, unique within the context of a particular
     * table.
     */
    templateId: number;
  }
  /**
   * Represents a list of templates for a given table.
   */
  export interface Schema$TemplateList {
    /**
     * List of all requested templates.
     */
    items: Schema$Template[];
    /**
     * Type name: a list of all templates.
     */
    kind: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken: string;
    /**
     * Total number of templates for the table.
     */
    totalItems: number;
  }

  export class Resource$Column {
    root: Fusiontables;
    constructor(root: Fusiontables) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * fusiontables.column.delete
     * @desc Deletes the column.
     * @alias fusiontables.column.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column being deleted.
     * @param {string} params.tableId Table from which the column is being deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/columns/{columnId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * fusiontables.column.get
     * @desc Retrieves a specific column by its id.
     * @alias fusiontables.column.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column that is being requested.
     * @param {string} params.tableId Table to which the column belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Column>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/columns/{columnId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Column>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Column>(parameters);
      }
    }


    /**
     * fusiontables.column.insert
     * @desc Adds a new column to the table.
     * @alias fusiontables.column.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table for which a new column is being added.
     * @param {().Column} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Column>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Column>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Column>(parameters);
      }
    }


    /**
     * fusiontables.column.list
     * @desc Retrieves a list of columns.
     * @alias fusiontables.column.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of columns to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
     * @param {string} params.tableId Table whose columns are being listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ColumnList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ColumnList>,
        callback?: BodyResponseCallback<Schema$ColumnList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ColumnList>,
        callback?: BodyResponseCallback<Schema$ColumnList>):
        void|AxiosPromise<Schema$ColumnList> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ColumnList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ColumnList>(parameters);
      }
    }


    /**
     * fusiontables.column.patch
     * @desc Updates the name or type of an existing column. This method
     * supports patch semantics.
     * @alias fusiontables.column.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column that is being updated.
     * @param {string} params.tableId Table for which the column is being updated.
     * @param {().Column} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Column>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/columns/{columnId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Column>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Column>(parameters);
      }
    }


    /**
     * fusiontables.column.update
     * @desc Updates the name or type of an existing column.
     * @alias fusiontables.column.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.columnId Name or identifier for the column that is being updated.
     * @param {string} params.tableId Table for which the column is being updated.
     * @param {().Column} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Column>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/columns/{columnId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Column>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Column>(parameters);
      }
    }
  }

  export class Resource$Query {
    root: Fusiontables;
    constructor(root: Fusiontables) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * fusiontables.query.sql
     * @desc Executes an SQL SELECT/INSERT/UPDATE/DELETE/SHOW/DESCRIBE/CREATE
     * statement.
     * @alias fusiontables.query.sql
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.hdrs Should column names be included (in the first row)?. Default is true.
     * @param {string} params.sql An SQL SELECT/SHOW/DESCRIBE/INSERT/UPDATE/DELETE/CREATE statement.
     * @param {boolean=} params.typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sql(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$Sqlresponse>;
    sql(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Sqlresponse>,
        callback?: BodyResponseCallback<Schema$Sqlresponse>): void;
    sql(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Sqlresponse>,
        callback?: BodyResponseCallback<Schema$Sqlresponse>):
        void|AxiosPromise<Schema$Sqlresponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/query')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['sql'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Sqlresponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Sqlresponse>(parameters);
      }
    }


    /**
     * fusiontables.query.sqlGet
     * @desc Executes an SQL SELECT/SHOW/DESCRIBE statement.
     * @alias fusiontables.query.sqlGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.hdrs Should column names be included (in the first row)?. Default is true.
     * @param {string} params.sql An SQL SELECT/SHOW/DESCRIBE statement.
     * @param {boolean=} params.typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sqlGet(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Sqlresponse>;
    sqlGet(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Sqlresponse>,
        callback?: BodyResponseCallback<Schema$Sqlresponse>): void;
    sqlGet(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Sqlresponse>,
        callback?: BodyResponseCallback<Schema$Sqlresponse>):
        void|AxiosPromise<Schema$Sqlresponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/query')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['sql'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Sqlresponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Sqlresponse>(parameters);
      }
    }
  }

  export class Resource$Style {
    root: Fusiontables;
    constructor(root: Fusiontables) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * fusiontables.style.delete
     * @desc Deletes a style.
     * @alias fusiontables.style.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (within a table) for the style being deleted
     * @param {string} params.tableId Table from which the style is being deleted
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/styles/{styleId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * fusiontables.style.get
     * @desc Gets a specific style.
     * @alias fusiontables.style.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (integer) for a specific style in a table
     * @param {string} params.tableId Table to which the requested style belongs
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$StyleSetting>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/styles/{styleId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$StyleSetting>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StyleSetting>(parameters);
      }
    }


    /**
     * fusiontables.style.insert
     * @desc Adds a new style for the table.
     * @alias fusiontables.style.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table for which a new style is being added
     * @param {().StyleSetting} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$StyleSetting>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$StyleSetting>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StyleSetting>(parameters);
      }
    }


    /**
     * fusiontables.style.list
     * @desc Retrieves a list of styles.
     * @alias fusiontables.style.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of styles to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
     * @param {string} params.tableId Table whose styles are being listed
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$StyleSettingList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSettingList>,
        callback?: BodyResponseCallback<Schema$StyleSettingList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSettingList>,
        callback?: BodyResponseCallback<Schema$StyleSettingList>):
        void|AxiosPromise<Schema$StyleSettingList> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$StyleSettingList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StyleSettingList>(parameters);
      }
    }


    /**
     * fusiontables.style.patch
     * @desc Updates an existing style. This method supports patch semantics.
     * @alias fusiontables.style.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (within a table) for the style being updated.
     * @param {string} params.tableId Table whose style is being updated.
     * @param {().StyleSetting} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$StyleSetting>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/styles/{styleId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$StyleSetting>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StyleSetting>(parameters);
      }
    }


    /**
     * fusiontables.style.update
     * @desc Updates an existing style.
     * @alias fusiontables.style.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.styleId Identifier (within a table) for the style being updated.
     * @param {string} params.tableId Table whose style is being updated.
     * @param {().StyleSetting} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$StyleSetting>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/styles/{styleId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$StyleSetting>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StyleSetting>(parameters);
      }
    }
  }

  export class Resource$Table {
    root: Fusiontables;
    constructor(root: Fusiontables) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * fusiontables.table.copy
     * @desc Copies a table.
     * @alias fusiontables.table.copy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.copyPresentation Whether to also copy tabs, styles, and templates. Default is false.
     * @param {string} params.tableId ID of the table that is being copied.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copy(params?: any, options?: MethodOptions): AxiosPromise<Schema$Table>;
    copy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>): void;
    copy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/copy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }


    /**
     * fusiontables.table.delete
     * @desc Deletes a table.
     * @alias fusiontables.table.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId ID of the table that is being deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * fusiontables.table.get
     * @desc Retrieves a specific table by its id.
     * @alias fusiontables.table.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Identifier(ID) for the table being requested.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Table>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }


    /**
     * fusiontables.table.importRows
     * @desc Import more rows into a table.
     * @alias fusiontables.table.importRows
     * @memberOf! ()
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
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importRows(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Import>;
    importRows(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Import>,
        callback?: BodyResponseCallback<Schema$Import>): void;
    importRows(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Import>,
        callback?: BodyResponseCallback<Schema$Import>):
        void|AxiosPromise<Schema$Import> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/import')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/fusiontables/v1/tables/{tableId}/import')
                      .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Import>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Import>(parameters);
      }
    }


    /**
     * fusiontables.table.importTable
     * @desc Import a new table.
     * @alias fusiontables.table.importTable
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
     * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param {string} params.name The name to be assigned to the new table.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importTable(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Table>;
    importTable(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>): void;
    importTable(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/import')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/fusiontables/v1/tables/import')
                      .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['name'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }


    /**
     * fusiontables.table.insert
     * @desc Creates a new table.
     * @alias fusiontables.table.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Table>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }


    /**
     * fusiontables.table.list
     * @desc Retrieves a list of tables a user owns.
     * @alias fusiontables.table.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of styles to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$TableList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TableList>,
        callback?: BodyResponseCallback<Schema$TableList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TableList>,
        callback?: BodyResponseCallback<Schema$TableList>):
        void|AxiosPromise<Schema$TableList> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TableList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TableList>(parameters);
      }
    }


    /**
     * fusiontables.table.patch
     * @desc Updates an existing table. Unless explicitly requested, only the
     * name, description, and attribution will be updated. This method supports
     * patch semantics.
     * @alias fusiontables.table.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param {string} params.tableId ID of the table that is being updated.
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Table>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }


    /**
     * fusiontables.table.update
     * @desc Updates an existing table. Unless explicitly requested, only the
     * name, description, and attribution will be updated.
     * @alias fusiontables.table.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param {string} params.tableId ID of the table that is being updated.
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Table>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }
  }

  export class Resource$Task {
    root: Fusiontables;
    constructor(root: Fusiontables) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * fusiontables.task.delete
     * @desc Deletes the task, unless already started.
     * @alias fusiontables.task.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table from which the task is being deleted.
     * @param {string} params.taskId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/fusiontables/v1/tables/{tableId}/tasks/{taskId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['tableId', 'taskId'],
        pathParams: ['tableId', 'taskId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * fusiontables.task.get
     * @desc Retrieves a specific task by its id.
     * @alias fusiontables.task.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the task belongs.
     * @param {string} params.taskId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
    get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>): void;
    get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/fusiontables/v1/tables/{tableId}/tasks/{taskId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId', 'taskId'],
        pathParams: ['tableId', 'taskId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Task>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }


    /**
     * fusiontables.task.list
     * @desc Retrieves a list of tasks.
     * @alias fusiontables.task.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of columns to return. Optional. Default is 5.
     * @param {string=} params.pageToken
     * @param {integer=} params.startIndex
     * @param {string} params.tableId Table whose tasks are being listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$TaskList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TaskList>,
        callback?: BodyResponseCallback<Schema$TaskList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TaskList>,
        callback?: BodyResponseCallback<Schema$TaskList>):
        void|AxiosPromise<Schema$TaskList> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/tasks')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TaskList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TaskList>(parameters);
      }
    }
  }

  export class Resource$Template {
    root: Fusiontables;
    constructor(root: Fusiontables) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * fusiontables.template.delete
     * @desc Deletes a template
     * @alias fusiontables.template.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table from which the template is being deleted
     * @param {integer} params.templateId Identifier for the template which is being deleted
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/templates/{templateId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * fusiontables.template.get
     * @desc Retrieves a specific template by its id
     * @alias fusiontables.template.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the template belongs
     * @param {integer} params.templateId Identifier for the template that is being requested
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Template>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/templates/{templateId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Template>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Template>(parameters);
      }
    }


    /**
     * fusiontables.template.insert
     * @desc Creates a new template for the table.
     * @alias fusiontables.template.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table for which a new template is being created
     * @param {().Template} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Template>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Template>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Template>(parameters);
      }
    }


    /**
     * fusiontables.template.list
     * @desc Retrieves a list of templates.
     * @alias fusiontables.template.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of templates to return. Optional. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which results page to return. Optional.
     * @param {string} params.tableId Identifier for the table whose templates are being requested
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$TemplateList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TemplateList>,
        callback?: BodyResponseCallback<Schema$TemplateList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TemplateList>,
        callback?: BodyResponseCallback<Schema$TemplateList>):
        void|AxiosPromise<Schema$TemplateList> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TemplateList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TemplateList>(parameters);
      }
    }


    /**
     * fusiontables.template.patch
     * @desc Updates an existing template. This method supports patch semantics.
     * @alias fusiontables.template.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the updated template belongs
     * @param {integer} params.templateId Identifier for the template that is being updated
     * @param {().Template} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Template>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/templates/{templateId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Template>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Template>(parameters);
      }
    }


    /**
     * fusiontables.template.update
     * @desc Updates an existing template
     * @alias fusiontables.template.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the updated template belongs
     * @param {integer} params.templateId Identifier for the template that is being updated
     * @param {().Template} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Template>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v1/tables/{tableId}/templates/{templateId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Template>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Template>(parameters);
      }
    }
  }
}
