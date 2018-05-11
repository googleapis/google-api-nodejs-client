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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

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

export namespace fusiontables_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * Fusion Tables API
   *
   * API for working with Fusion Tables data.
   *
   * @example
   * const google = require('googleapis');
   * const fusiontables = google.fusiontables('v2');
   *
   * @namespace fusiontables
   * @type {Function}
   * @version v2
   * @variation v2
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
    color?: string;
    /**
     * Icon name used for a point.
     */
    icon?: string;
    /**
     * Maximum value in the selected column for a row to be styled according to
     * the bucket color, opacity, icon, or weight.
     */
    max?: number;
    /**
     * Minimum value in the selected column for a row to be styled according to
     * the bucket color, opacity, icon, or weight.
     */
    min?: number;
    /**
     * Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
     */
    opacity?: number;
    /**
     * Width of a line (in pixels).
     */
    weight?: number;
  }
  /**
   * Specifies the details of a column in a table.
   */
  export interface Schema$Column {
    /**
     * Identifier of the base column. If present, this column is derived from
     * the specified base column.
     */
    baseColumn?: any;
    /**
     * Identifier for the column.
     */
    columnId?: number;
    /**
     * JSON schema for interpreting JSON in this column.
     */
    columnJsonSchema?: string;
    /**
     * JSON object containing custom column properties.
     */
    columnPropertiesJson?: string;
    /**
     * Column description.
     */
    description?: string;
    /**
     * Format pattern. Acceptable values are DT_DATE_MEDIUMe.g Dec 24, 2008
     * DT_DATE_SHORTfor example 12/24/08 DT_DATE_TIME_MEDIUMfor example Dec 24,
     * 2008 8:30:45 PM DT_DATE_TIME_SHORTfor example 12/24/08 8:30 PM
     * DT_DAY_MONTH_2_DIGIT_YEARfor example 24/12/08
     * DT_DAY_MONTH_2_DIGIT_YEAR_TIMEfor example 24/12/08 20:30
     * DT_DAY_MONTH_2_DIGIT_YEAR_TIME_MERIDIANfor example 24/12/08 8:30 PM
     * DT_DAY_MONTH_4_DIGIT_YEARfor example 24/12/2008
     * DT_DAY_MONTH_4_DIGIT_YEAR_TIMEfor example 24/12/2008 20:30
     * DT_DAY_MONTH_4_DIGIT_YEAR_TIME_MERIDIANfor example 24/12/2008 8:30 PM
     * DT_ISO_YEAR_MONTH_DAYfor example 2008-12-24 DT_ISO_YEAR_MONTH_DAY_TIMEfor
     * example 2008-12-24 20:30:45 DT_MONTH_DAY_4_DIGIT_YEARfor example
     * 12/24/2008 DT_TIME_LONGfor example 8:30:45 PM UTC-6 DT_TIME_MEDIUMfor
     * example 8:30:45 PM DT_TIME_SHORTfor example 8:30 PM DT_YEAR_ONLYfor
     * example 2008 HIGHLIGHT_UNTYPED_CELLSHighlight cell data that does not
     * match the data type NONENo formatting (default) NUMBER_CURRENCYfor
     * example $1234.56 NUMBER_DEFAULTfor example 1,234.56 NUMBER_INTEGERfor
     * example 1235 NUMBER_NO_SEPARATORfor example 1234.56 NUMBER_PERCENTfor
     * example 123,456% NUMBER_SCIENTIFICfor example 1E3
     * STRING_EIGHT_LINE_IMAGEDisplays thumbnail images as tall as eight lines
     * of text STRING_FOUR_LINE_IMAGEDisplays thumbnail images as tall as four
     * lines of text STRING_JSON_TEXTAllows editing of text as JSON in UI
     * STRING_JSON_LISTAllows editing of text as a JSON list in UI
     * STRING_LINKTreats cell as a link (must start with http:// or https://)
     * STRING_ONE_LINE_IMAGEDisplays thumbnail images as tall as one line of
     * text STRING_VIDEO_OR_MAPDisplay a video or map thumbnail
     */
    formatPattern?: string;
    /**
     * Column graph predicate. Used to map table to graph data model
     * (subject,predicate,object) See W3C Graph-based Data Model.
     */
    graphPredicate?: string;
    /**
     * The kind of item this is. For a column, this is always
     * fusiontables#column.
     */
    kind?: string;
    /**
     * Name of the column.
     */
    name?: string;
    /**
     * Type of the column.
     */
    type?: string;
    /**
     * If true, data entered via the web application is validated.
     */
    validateData?: boolean;
    /**
     * List of valid values used to validate data and supply a drop-down list of
     * values in the web application.
     */
    validValues?: string[];
  }
  /**
   * Represents a list of columns in a table.
   */
  export interface Schema$ColumnList {
    /**
     * List of all requested columns.
     */
    items?: Schema$Column[];
    /**
     * The kind of item this is. For a column list, this is always
     * fusiontables#columnList.
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken?: string;
    /**
     * Total number of columns for the table.
     */
    totalItems?: number;
  }
  /**
   * Represents a Geometry object.
   */
  export interface Schema$Geometry {
    /**
     * The list of geometries in this geometry collection.
     */
    geometries?: any[];
    geometry?: any;
    /**
     * Type: A collection of geometries.
     */
    type?: string;
  }
  /**
   * Represents an import request.
   */
  export interface Schema$Import {
    /**
     * The kind of item this is. For an import, this is always
     * fusiontables#import.
     */
    kind?: string;
    /**
     * The number of rows received from the import request.
     */
    numRowsReceived?: string;
  }
  /**
   * Represents a line geometry.
   */
  export interface Schema$Line {
    /**
     * The coordinates that define the line.
     */
    coordinates?: number[][];
    /**
     * Type: A line geometry.
     */
    type?: string;
  }
  /**
   * Represents a LineStyle within a StyleSetting
   */
  export interface Schema$LineStyle {
    /**
     * Color of the line in #RRGGBB format.
     */
    strokeColor?: string;
    /**
     * Column-value, gradient or buckets styler that is used to determine the
     * line color and opacity.
     */
    strokeColorStyler?: Schema$StyleFunction;
    /**
     * Opacity of the line : 0.0 (transparent) to 1.0 (opaque).
     */
    strokeOpacity?: number;
    /**
     * Width of the line in pixels.
     */
    strokeWeight?: number;
    /**
     * Column-value or bucket styler that is used to determine the width of the
     * line.
     */
    strokeWeightStyler?: Schema$StyleFunction;
  }
  /**
   * Represents a point object.
   */
  export interface Schema$Point {
    /**
     * The coordinates that define the point.
     */
    coordinates?: number[];
    /**
     * Point: A point geometry.
     */
    type?: string;
  }
  /**
   * Represents a PointStyle within a StyleSetting
   */
  export interface Schema$PointStyle {
    /**
     * Name of the icon. Use values defined in
     * http://www.google.com/fusiontables/DataSource?dsrcid=308519
     */
    iconName?: string;
    /**
     * Column or a bucket value from which the icon name is to be determined.
     */
    iconStyler?: Schema$StyleFunction;
  }
  /**
   * Represents a polygon object.
   */
  export interface Schema$Polygon {
    /**
     * The coordinates that define the polygon.
     */
    coordinates?: number[][][];
    /**
     * Type: A polygon geometry.
     */
    type?: string;
  }
  /**
   * Represents a PolygonStyle within a StyleSetting
   */
  export interface Schema$PolygonStyle {
    /**
     * Color of the interior of the polygon in #RRGGBB format.
     */
    fillColor?: string;
    /**
     * Column-value, gradient, or bucket styler that is used to determine the
     * interior color and opacity of the polygon.
     */
    fillColorStyler?: Schema$StyleFunction;
    /**
     * Opacity of the interior of the polygon: 0.0 (transparent) to 1.0
     * (opaque).
     */
    fillOpacity?: number;
    /**
     * Color of the polygon border in #RRGGBB format.
     */
    strokeColor?: string;
    /**
     * Column-value, gradient or buckets styler that is used to determine the
     * border color and opacity.
     */
    strokeColorStyler?: Schema$StyleFunction;
    /**
     * Opacity of the polygon border: 0.0 (transparent) to 1.0 (opaque).
     */
    strokeOpacity?: number;
    /**
     * Width of the polyon border in pixels.
     */
    strokeWeight?: number;
    /**
     * Column-value or bucket styler that is used to determine the width of the
     * polygon border.
     */
    strokeWeightStyler?: Schema$StyleFunction;
  }
  /**
   * Represents a response to a SQL statement.
   */
  export interface Schema$Sqlresponse {
    /**
     * Columns in the table.
     */
    columns?: string[];
    /**
     * The kind of item this is. For responses to SQL queries, this is always
     * fusiontables#sqlresponse.
     */
    kind?: string;
    /**
     * The rows in the table. For each cell we print out whatever cell value
     * (e.g., numeric, string) exists. Thus it is important that each cell
     * contains only one value.
     */
    rows?: any[][];
  }
  /**
   * Represents a StyleFunction within a StyleSetting
   */
  export interface Schema$StyleFunction {
    /**
     * Bucket function that assigns a style based on the range a column value
     * falls into.
     */
    buckets?: Schema$Bucket[];
    /**
     * Name of the column whose value is used in the style.
     */
    columnName?: string;
    /**
     * Gradient function that interpolates a range of colors based on column
     * value.
     */
    gradient?: any;
    /**
     * Stylers can be one of three kinds: &quot;fusiontables#fromColumn if the
     * column value is to be used as is, i.e., the column values can have colors
     * in #RRGGBBAA format or integer line widths or icon names;
     * fusiontables#gradient if the styling of the row is to be based on
     * applying the gradient function on the column value; or
     * fusiontables#buckets if the styling is to based on the bucket into which
     * the the column value falls.
     */
    kind?: string;
  }
  /**
   * Represents a complete StyleSettings object. The primary key is a
   * combination of the tableId and a styleId.
   */
  export interface Schema$StyleSetting {
    /**
     * The kind of item this is. A StyleSetting contains the style definitions
     * for points, lines, and polygons in a table. Since a table can have any
     * one or all of them, a style definition can have point, line and polygon
     * style definitions.
     */
    kind?: string;
    /**
     * Style definition for points in the table.
     */
    markerOptions?: Schema$PointStyle;
    /**
     * Optional name for the style setting.
     */
    name?: string;
    /**
     * Style definition for polygons in the table.
     */
    polygonOptions?: Schema$PolygonStyle;
    /**
     * Style definition for lines in the table.
     */
    polylineOptions?: Schema$LineStyle;
    /**
     * Identifier for the style setting (unique only within tables).
     */
    styleId?: number;
    /**
     * Identifier for the table.
     */
    tableId?: string;
  }
  /**
   * Represents a list of styles for a given table.
   */
  export interface Schema$StyleSettingList {
    /**
     * All requested style settings.
     */
    items?: Schema$StyleSetting[];
    /**
     * The kind of item this is. For a style list, this is always
     * fusiontables#styleSettingList .
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more styles left.
     */
    nextPageToken?: string;
    /**
     * Total number of styles for the table.
     */
    totalItems?: number;
  }
  /**
   * Represents a table.
   */
  export interface Schema$Table {
    /**
     * Attribution assigned to the table.
     */
    attribution?: string;
    /**
     * Optional link for attribution.
     */
    attributionLink?: string;
    /**
     * Base table identifier if this table is a view or merged table.
     */
    baseTableIds?: string[];
    /**
     * Default JSON schema for validating all JSON column properties.
     */
    columnPropertiesJsonSchema?: string;
    /**
     * Columns in the table.
     */
    columns?: Schema$Column[];
    /**
     * Description assigned to the table.
     */
    description?: string;
    /**
     * Variable for whether table is exportable.
     */
    isExportable?: boolean;
    /**
     * The kind of item this is. For a table, this is always fusiontables#table.
     */
    kind?: string;
    /**
     * Name assigned to a table.
     */
    name?: string;
    /**
     * SQL that encodes the table definition for derived tables.
     */
    sql?: string;
    /**
     * Encrypted unique alphanumeric identifier for the table.
     */
    tableId?: string;
    /**
     * JSON object containing custom table properties.
     */
    tablePropertiesJson?: string;
    /**
     * JSON schema for validating the JSON table properties.
     */
    tablePropertiesJsonSchema?: string;
  }
  /**
   * Represents a list of tables.
   */
  export interface Schema$TableList {
    /**
     * List of all requested tables.
     */
    items?: Schema$Table[];
    /**
     * The kind of item this is. For table list, this is always
     * fusiontables#tableList.
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken?: string;
  }
  /**
   * A background task on a table, initiated for time- or resource-consuming
   * operations such as changing column types or deleting all rows.
   */
  export interface Schema$Task {
    /**
     * Type of the resource. This is always &quot;fusiontables#task&quot;.
     */
    kind?: string;
    /**
     * Task percentage completion.
     */
    progress?: string;
    /**
     * false while the table is busy with some other task. true if this
     * background task is currently running.
     */
    started?: boolean;
    /**
     * Identifier for the task.
     */
    taskId?: string;
    /**
     * Type of background task.
     */
    type?: string;
  }
  /**
   * Represents a list of tasks for a table.
   */
  export interface Schema$TaskList {
    /**
     * List of all requested tasks.
     */
    items?: Schema$Task[];
    /**
     * Type of the resource. This is always &quot;fusiontables#taskList&quot;.
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken?: string;
    /**
     * Total number of tasks for the table.
     */
    totalItems?: number;
  }
  /**
   * Represents the contents of InfoWindow templates.
   */
  export interface Schema$Template {
    /**
     * List of columns from which the template is to be automatically
     * constructed. Only one of body or automaticColumns can be specified.
     */
    automaticColumnNames?: string[];
    /**
     * Body of the template. It contains HTML with {column_name} to insert
     * values from a particular column. The body is sanitized to remove certain
     * tags, e.g., script. Only one of body or automaticColumns can be
     * specified.
     */
    body?: string;
    /**
     * The kind of item this is. For a template, this is always
     * fusiontables#template.
     */
    kind?: string;
    /**
     * Optional name assigned to a template.
     */
    name?: string;
    /**
     * Identifier for the table for which the template is defined.
     */
    tableId?: string;
    /**
     * Identifier for the template, unique within the context of a particular
     * table.
     */
    templateId?: number;
  }
  /**
   * Represents a list of templates for a given table.
   */
  export interface Schema$TemplateList {
    /**
     * List of all requested templates.
     */
    items?: Schema$Template[];
    /**
     * The kind of item this is. For a template list, this is always
     * fusiontables#templateList .
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. No token is displayed
     * if there are no more pages left.
     */
    nextPageToken?: string;
    /**
     * Total number of templates for the table.
     */
    totalItems?: number;
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
     * @desc Deletes the specified column.
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
    delete(params?: Params$Resource$Column$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Column$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Column$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Column$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Column$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Column$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/columns/{columnId}')
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
     * @desc Retrieves a specific column by its ID.
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
    get(params?: Params$Resource$Column$Get,
        options?: MethodOptions): AxiosPromise<Schema$Column>;
    get(params: Params$Resource$Column$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback: BodyResponseCallback<Schema$Column>): void;
    get(params: Params$Resource$Column$Get,
        callback: BodyResponseCallback<Schema$Column>): void;
    get(callback: BodyResponseCallback<Schema$Column>): void;
    get(paramsOrCallback?: Params$Resource$Column$Get|
        BodyResponseCallback<Schema$Column>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      let params = (paramsOrCallback || {}) as Params$Resource$Column$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Column$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/columns/{columnId}')
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
    insert(params?: Params$Resource$Column$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Column>;
    insert(
        params: Params$Resource$Column$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback: BodyResponseCallback<Schema$Column>): void;
    insert(
        params: Params$Resource$Column$Insert,
        callback: BodyResponseCallback<Schema$Column>): void;
    insert(callback: BodyResponseCallback<Schema$Column>): void;
    insert(
        paramsOrCallback?: Params$Resource$Column$Insert|
        BodyResponseCallback<Schema$Column>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      let params = (paramsOrCallback || {}) as Params$Resource$Column$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Column$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/columns')
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
     * @param {integer=} params.maxResults Maximum number of columns to return. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return.
     * @param {string} params.tableId Table whose columns are being listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Column$List, options?: MethodOptions):
        AxiosPromise<Schema$ColumnList>;
    list(
        params: Params$Resource$Column$List,
        options: MethodOptions|BodyResponseCallback<Schema$ColumnList>,
        callback: BodyResponseCallback<Schema$ColumnList>): void;
    list(
        params: Params$Resource$Column$List,
        callback: BodyResponseCallback<Schema$ColumnList>): void;
    list(callback: BodyResponseCallback<Schema$ColumnList>): void;
    list(
        paramsOrCallback?: Params$Resource$Column$List|
        BodyResponseCallback<Schema$ColumnList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ColumnList>,
        callback?: BodyResponseCallback<Schema$ColumnList>):
        void|AxiosPromise<Schema$ColumnList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Column$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Column$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/columns')
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
    patch(params?: Params$Resource$Column$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Column>;
    patch(
        params: Params$Resource$Column$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback: BodyResponseCallback<Schema$Column>): void;
    patch(
        params: Params$Resource$Column$Patch,
        callback: BodyResponseCallback<Schema$Column>): void;
    patch(callback: BodyResponseCallback<Schema$Column>): void;
    patch(
        paramsOrCallback?: Params$Resource$Column$Patch|
        BodyResponseCallback<Schema$Column>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      let params = (paramsOrCallback || {}) as Params$Resource$Column$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Column$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/columns/{columnId}')
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
    update(params?: Params$Resource$Column$Update, options?: MethodOptions):
        AxiosPromise<Schema$Column>;
    update(
        params: Params$Resource$Column$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback: BodyResponseCallback<Schema$Column>): void;
    update(
        params: Params$Resource$Column$Update,
        callback: BodyResponseCallback<Schema$Column>): void;
    update(callback: BodyResponseCallback<Schema$Column>): void;
    update(
        paramsOrCallback?: Params$Resource$Column$Update|
        BodyResponseCallback<Schema$Column>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Column>,
        callback?: BodyResponseCallback<Schema$Column>):
        void|AxiosPromise<Schema$Column> {
      let params = (paramsOrCallback || {}) as Params$Resource$Column$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Column$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/columns/{columnId}')
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

  export interface Params$Resource$Column$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name or identifier for the column being deleted.
     */
    columnId?: string;
    /**
     * Table from which the column is being deleted.
     */
    tableId?: string;
  }
  export interface Params$Resource$Column$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name or identifier for the column that is being requested.
     */
    columnId?: string;
    /**
     * Table to which the column belongs.
     */
    tableId?: string;
  }
  export interface Params$Resource$Column$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table for which a new column is being added.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Column;
  }
  export interface Params$Resource$Column$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of columns to return. Default is 5.
     */
    maxResults?: number;
    /**
     * Continuation token specifying which result page to return.
     */
    pageToken?: string;
    /**
     * Table whose columns are being listed.
     */
    tableId?: string;
  }
  export interface Params$Resource$Column$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name or identifier for the column that is being updated.
     */
    columnId?: string;
    /**
     * Table for which the column is being updated.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Column;
  }
  export interface Params$Resource$Column$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name or identifier for the column that is being updated.
     */
    columnId?: string;
    /**
     * Table for which the column is being updated.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Column;
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
     * @desc Executes a Fusion Tables SQL statement, which can be any of  -
     * SELECT - INSERT - UPDATE - DELETE - SHOW - DESCRIBE - CREATE statement.
     * @alias fusiontables.query.sql
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.hdrs Whether column names are included in the first row. Default is true.
     * @param {string} params.sql A Fusion Tables SQL statement, which can be any of  - SELECT - INSERT - UPDATE - DELETE - SHOW - DESCRIBE - CREATE
     * @param {boolean=} params.typed Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sql(params?: Params$Resource$Query$Sql,
        options?: MethodOptions): AxiosPromise<Schema$Sqlresponse>;
    sql(params: Params$Resource$Query$Sql,
        options: MethodOptions|BodyResponseCallback<Schema$Sqlresponse>,
        callback: BodyResponseCallback<Schema$Sqlresponse>): void;
    sql(params: Params$Resource$Query$Sql,
        callback: BodyResponseCallback<Schema$Sqlresponse>): void;
    sql(callback: BodyResponseCallback<Schema$Sqlresponse>): void;
    sql(paramsOrCallback?: Params$Resource$Query$Sql|
        BodyResponseCallback<Schema$Sqlresponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Sqlresponse>,
        callback?: BodyResponseCallback<Schema$Sqlresponse>):
        void|AxiosPromise<Schema$Sqlresponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Query$Sql;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Sql;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/query')
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
     * @desc Executes a SQL statement which can be any of  - SELECT - SHOW -
     * DESCRIBE
     * @alias fusiontables.query.sqlGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.hdrs Whether column names are included (in the first row). Default is true.
     * @param {string} params.sql A SQL statement which can be any of  - SELECT - SHOW - DESCRIBE
     * @param {boolean=} params.typed Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sqlGet(params?: Params$Resource$Query$Sqlget, options?: MethodOptions):
        AxiosPromise<Schema$Sqlresponse>;
    sqlGet(
        params: Params$Resource$Query$Sqlget,
        options: MethodOptions|BodyResponseCallback<Schema$Sqlresponse>,
        callback: BodyResponseCallback<Schema$Sqlresponse>): void;
    sqlGet(
        params: Params$Resource$Query$Sqlget,
        callback: BodyResponseCallback<Schema$Sqlresponse>): void;
    sqlGet(callback: BodyResponseCallback<Schema$Sqlresponse>): void;
    sqlGet(
        paramsOrCallback?: Params$Resource$Query$Sqlget|
        BodyResponseCallback<Schema$Sqlresponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Sqlresponse>,
        callback?: BodyResponseCallback<Schema$Sqlresponse>):
        void|AxiosPromise<Schema$Sqlresponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Query$Sqlget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Sqlget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/query')
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

  export interface Params$Resource$Query$Sql {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether column names are included in the first row. Default is true.
     */
    hdrs?: boolean;
    /**
     * A Fusion Tables SQL statement, which can be any of  - SELECT - INSERT -
     * UPDATE - DELETE - SHOW - DESCRIBE - CREATE
     */
    sql?: string;
    /**
     * Whether typed values are returned in the (JSON) response: numbers for
     * numeric values and parsed geometries for KML values. Default is true.
     */
    typed?: boolean;
  }
  export interface Params$Resource$Query$Sqlget {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether column names are included (in the first row). Default is true.
     */
    hdrs?: boolean;
    /**
     * A SQL statement which can be any of  - SELECT - SHOW - DESCRIBE
     */
    sql?: string;
    /**
     * Whether typed values are returned in the (JSON) response: numbers for
     * numeric values and parsed geometries for KML values. Default is true.
     */
    typed?: boolean;
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
    delete(params?: Params$Resource$Style$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Style$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Style$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Style$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Style$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Style$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/styles/{styleId}')
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
    get(params?: Params$Resource$Style$Get,
        options?: MethodOptions): AxiosPromise<Schema$StyleSetting>;
    get(params: Params$Resource$Style$Get,
        options: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    get(params: Params$Resource$Style$Get,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    get(callback: BodyResponseCallback<Schema$StyleSetting>): void;
    get(paramsOrCallback?: Params$Resource$Style$Get|
        BodyResponseCallback<Schema$StyleSetting>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      let params = (paramsOrCallback || {}) as Params$Resource$Style$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Style$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/styles/{styleId}')
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
    insert(params?: Params$Resource$Style$Insert, options?: MethodOptions):
        AxiosPromise<Schema$StyleSetting>;
    insert(
        params: Params$Resource$Style$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    insert(
        params: Params$Resource$Style$Insert,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    insert(callback: BodyResponseCallback<Schema$StyleSetting>): void;
    insert(
        paramsOrCallback?: Params$Resource$Style$Insert|
        BodyResponseCallback<Schema$StyleSetting>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      let params = (paramsOrCallback || {}) as Params$Resource$Style$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Style$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/styles')
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
    list(params?: Params$Resource$Style$List, options?: MethodOptions):
        AxiosPromise<Schema$StyleSettingList>;
    list(
        params: Params$Resource$Style$List,
        options: MethodOptions|BodyResponseCallback<Schema$StyleSettingList>,
        callback: BodyResponseCallback<Schema$StyleSettingList>): void;
    list(
        params: Params$Resource$Style$List,
        callback: BodyResponseCallback<Schema$StyleSettingList>): void;
    list(callback: BodyResponseCallback<Schema$StyleSettingList>): void;
    list(
        paramsOrCallback?: Params$Resource$Style$List|
        BodyResponseCallback<Schema$StyleSettingList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$StyleSettingList>,
        callback?: BodyResponseCallback<Schema$StyleSettingList>):
        void|AxiosPromise<Schema$StyleSettingList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Style$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Style$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/styles')
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
    patch(params?: Params$Resource$Style$Patch, options?: MethodOptions):
        AxiosPromise<Schema$StyleSetting>;
    patch(
        params: Params$Resource$Style$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    patch(
        params: Params$Resource$Style$Patch,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    patch(callback: BodyResponseCallback<Schema$StyleSetting>): void;
    patch(
        paramsOrCallback?: Params$Resource$Style$Patch|
        BodyResponseCallback<Schema$StyleSetting>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      let params = (paramsOrCallback || {}) as Params$Resource$Style$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Style$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/styles/{styleId}')
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
    update(params?: Params$Resource$Style$Update, options?: MethodOptions):
        AxiosPromise<Schema$StyleSetting>;
    update(
        params: Params$Resource$Style$Update,
        options: MethodOptions|BodyResponseCallback<Schema$StyleSetting>,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    update(
        params: Params$Resource$Style$Update,
        callback: BodyResponseCallback<Schema$StyleSetting>): void;
    update(callback: BodyResponseCallback<Schema$StyleSetting>): void;
    update(
        paramsOrCallback?: Params$Resource$Style$Update|
        BodyResponseCallback<Schema$StyleSetting>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$StyleSetting>,
        callback?: BodyResponseCallback<Schema$StyleSetting>):
        void|AxiosPromise<Schema$StyleSetting> {
      let params = (paramsOrCallback || {}) as Params$Resource$Style$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Style$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/styles/{styleId}')
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

  export interface Params$Resource$Style$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier (within a table) for the style being deleted
     */
    styleId?: number;
    /**
     * Table from which the style is being deleted
     */
    tableId?: string;
  }
  export interface Params$Resource$Style$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier (integer) for a specific style in a table
     */
    styleId?: number;
    /**
     * Table to which the requested style belongs
     */
    tableId?: string;
  }
  export interface Params$Resource$Style$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table for which a new style is being added
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StyleSetting;
  }
  export interface Params$Resource$Style$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of styles to return. Optional. Default is 5.
     */
    maxResults?: number;
    /**
     * Continuation token specifying which result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Table whose styles are being listed
     */
    tableId?: string;
  }
  export interface Params$Resource$Style$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier (within a table) for the style being updated.
     */
    styleId?: number;
    /**
     * Table whose style is being updated.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StyleSetting;
  }
  export interface Params$Resource$Style$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier (within a table) for the style being updated.
     */
    styleId?: number;
    /**
     * Table whose style is being updated.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StyleSetting;
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
    copy(params?: Params$Resource$Table$Copy, options?: MethodOptions):
        AxiosPromise<Schema$Table>;
    copy(
        params: Params$Resource$Table$Copy,
        options: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback: BodyResponseCallback<Schema$Table>): void;
    copy(
        params: Params$Resource$Table$Copy,
        callback: BodyResponseCallback<Schema$Table>): void;
    copy(callback: BodyResponseCallback<Schema$Table>): void;
    copy(
        paramsOrCallback?: Params$Resource$Table$Copy|
        BodyResponseCallback<Schema$Table>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Copy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Copy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/copy')
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
     * @param {string} params.tableId ID of the table to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Table$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Table$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Table$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Table$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}')
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
     * @desc Retrieves a specific table by its ID.
     * @alias fusiontables.table.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Identifier for the table being requested.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Table$Get,
        options?: MethodOptions): AxiosPromise<Schema$Table>;
    get(params: Params$Resource$Table$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback: BodyResponseCallback<Schema$Table>): void;
    get(params: Params$Resource$Table$Get,
        callback: BodyResponseCallback<Schema$Table>): void;
    get(callback: BodyResponseCallback<Schema$Table>): void;
    get(paramsOrCallback?: Params$Resource$Table$Get|
        BodyResponseCallback<Schema$Table>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}')
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
     * @desc Imports more rows into a table.
     * @alias fusiontables.table.importRows
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
     * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
     * @param {integer=} params.endLine The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
     * @param {boolean=} params.isStrict Whether the imported CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
     * @param {integer=} params.startLine The index of the first line from which to start importing, inclusive. Default is 0.
     * @param {string} params.tableId The table into which new rows are being imported.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importRows(
        params?: Params$Resource$Table$Importrows,
        options?: MethodOptions): AxiosPromise<Schema$Import>;
    importRows(
        params: Params$Resource$Table$Importrows,
        options: MethodOptions|BodyResponseCallback<Schema$Import>,
        callback: BodyResponseCallback<Schema$Import>): void;
    importRows(
        params: Params$Resource$Table$Importrows,
        callback: BodyResponseCallback<Schema$Import>): void;
    importRows(callback: BodyResponseCallback<Schema$Import>): void;
    importRows(
        paramsOrCallback?: Params$Resource$Table$Importrows|
        BodyResponseCallback<Schema$Import>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Import>,
        callback?: BodyResponseCallback<Schema$Import>):
        void|AxiosPromise<Schema$Import> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Importrows;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Importrows;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/import')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/fusiontables/v2/tables/{tableId}/import')
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
     * @desc Imports a new table.
     * @alias fusiontables.table.importTable
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
     * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
     * @param {string} params.name The name to be assigned to the new table.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importTable(
        params?: Params$Resource$Table$Importtable,
        options?: MethodOptions): AxiosPromise<Schema$Table>;
    importTable(
        params: Params$Resource$Table$Importtable,
        options: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback: BodyResponseCallback<Schema$Table>): void;
    importTable(
        params: Params$Resource$Table$Importtable,
        callback: BodyResponseCallback<Schema$Table>): void;
    importTable(callback: BodyResponseCallback<Schema$Table>): void;
    importTable(
        paramsOrCallback?: Params$Resource$Table$Importtable|
        BodyResponseCallback<Schema$Table>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Table$Importtable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Importtable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/import')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/fusiontables/v2/tables/import')
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
    insert(params?: Params$Resource$Table$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Table>;
    insert(
        params: Params$Resource$Table$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback: BodyResponseCallback<Schema$Table>): void;
    insert(
        params: Params$Resource$Table$Insert,
        callback: BodyResponseCallback<Schema$Table>): void;
    insert(callback: BodyResponseCallback<Schema$Table>): void;
    insert(
        paramsOrCallback?: Params$Resource$Table$Insert|
        BodyResponseCallback<Schema$Table>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables')
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
     * @param {integer=} params.maxResults Maximum number of tables to return. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Table$List, options?: MethodOptions):
        AxiosPromise<Schema$TableList>;
    list(
        params: Params$Resource$Table$List,
        options: MethodOptions|BodyResponseCallback<Schema$TableList>,
        callback: BodyResponseCallback<Schema$TableList>): void;
    list(
        params: Params$Resource$Table$List,
        callback: BodyResponseCallback<Schema$TableList>): void;
    list(callback: BodyResponseCallback<Schema$TableList>): void;
    list(
        paramsOrCallback?: Params$Resource$Table$List|
        BodyResponseCallback<Schema$TableList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TableList>,
        callback?: BodyResponseCallback<Schema$TableList>):
        void|AxiosPromise<Schema$TableList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables')
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
     * @param {boolean=} params.replaceViewDefinition Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param {string} params.tableId ID of the table that is being updated.
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Table$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Table>;
    patch(
        params: Params$Resource$Table$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback: BodyResponseCallback<Schema$Table>): void;
    patch(
        params: Params$Resource$Table$Patch,
        callback: BodyResponseCallback<Schema$Table>): void;
    patch(callback: BodyResponseCallback<Schema$Table>): void;
    patch(
        paramsOrCallback?: Params$Resource$Table$Patch|
        BodyResponseCallback<Schema$Table>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}')
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
     * fusiontables.table.refetchSheet
     * @desc Replaces rows of the table with the rows of the spreadsheet that is
     * first imported from. Current rows remain visible until all replacement
     * rows are ready.
     * @alias fusiontables.table.refetchSheet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table whose rows will be replaced from the spreadsheet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refetchSheet(
        params?: Params$Resource$Table$Refetchsheet,
        options?: MethodOptions): AxiosPromise<Schema$Task>;
    refetchSheet(
        params: Params$Resource$Table$Refetchsheet,
        options: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback: BodyResponseCallback<Schema$Task>): void;
    refetchSheet(
        params: Params$Resource$Table$Refetchsheet,
        callback: BodyResponseCallback<Schema$Task>): void;
    refetchSheet(callback: BodyResponseCallback<Schema$Task>): void;
    refetchSheet(
        paramsOrCallback?: Params$Resource$Table$Refetchsheet|
        BodyResponseCallback<Schema$Task>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Table$Refetchsheet;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Refetchsheet;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/refetch')
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
        createAPIRequest<Schema$Task>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }


    /**
     * fusiontables.table.replaceRows
     * @desc Replaces rows of an existing table. Current rows remain visible
     * until all replacement rows are ready.
     * @alias fusiontables.table.replaceRows
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
     * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param {integer=} params.endLine The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
     * @param {boolean=} params.isStrict Whether the imported CSV must have the same number of column values for each row. If true, throws an exception if the CSV does not have the same number of columns. If false, rows with fewer column values will be padded with empty values. Default is true.
     * @param {integer=} params.startLine The index of the first line from which to start importing, inclusive. Default is 0.
     * @param {string} params.tableId Table whose rows will be replaced.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceRows(
        params?: Params$Resource$Table$Replacerows,
        options?: MethodOptions): AxiosPromise<Schema$Task>;
    replaceRows(
        params: Params$Resource$Table$Replacerows,
        options: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback: BodyResponseCallback<Schema$Task>): void;
    replaceRows(
        params: Params$Resource$Table$Replacerows,
        callback: BodyResponseCallback<Schema$Task>): void;
    replaceRows(callback: BodyResponseCallback<Schema$Task>): void;
    replaceRows(
        paramsOrCallback?: Params$Resource$Table$Replacerows|
        BodyResponseCallback<Schema$Task>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Table$Replacerows;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Replacerows;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/replace')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/fusiontables/v2/tables/{tableId}/replace')
                      .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Task>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Task>(parameters);
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
     * @param {boolean=} params.replaceViewDefinition Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param {string} params.tableId ID of the table that is being updated.
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: Params$Resource$Table$Update, options?: MethodOptions):
        AxiosPromise<Schema$Table>;
    update(
        params: Params$Resource$Table$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback: BodyResponseCallback<Schema$Table>): void;
    update(
        params: Params$Resource$Table$Update,
        callback: BodyResponseCallback<Schema$Table>): void;
    update(callback: BodyResponseCallback<Schema$Table>): void;
    update(
        paramsOrCallback?: Params$Resource$Table$Update|
        BodyResponseCallback<Schema$Table>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Table>,
        callback?: BodyResponseCallback<Schema$Table>):
        void|AxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Table$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Table$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}')
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

  export interface Params$Resource$Table$Copy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether to also copy tabs, styles, and templates. Default is false.
     */
    copyPresentation?: boolean;
    /**
     * ID of the table that is being copied.
     */
    tableId?: string;
  }
  export interface Params$Resource$Table$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the table to be deleted.
     */
    tableId?: string;
  }
  export interface Params$Resource$Table$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier for the table being requested.
     */
    tableId?: string;
  }
  export interface Params$Resource$Table$Importrows {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The delimiter used to separate cell values. This can only consist of a
     * single character. Default is ,.
     */
    delimiter?: string;
    /**
     * The encoding of the content. Default is UTF-8. Use auto-detect if you are
     * unsure of the encoding.
     */
    encoding?: string;
    /**
     * The index of the line up to which data will be imported. Default is to
     * import the entire file. If endLine is negative, it is an offset from the
     * end of the file; the imported content will exclude the last endLine
     * lines.
     */
    endLine?: number;
    /**
     * Whether the imported CSV must have the same number of values for each
     * row. If false, rows with fewer values will be padded with empty values.
     * Default is true.
     */
    isStrict?: boolean;
    /**
     * The index of the first line from which to start importing, inclusive.
     * Default is 0.
     */
    startLine?: number;
    /**
     * The table into which new rows are being imported.
     */
    tableId?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Table$Importtable {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The delimiter used to separate cell values. This can only consist of a
     * single character. Default is ,.
     */
    delimiter?: string;
    /**
     * The encoding of the content. Default is UTF-8. Use auto-detect if you are
     * unsure of the encoding.
     */
    encoding?: string;
    /**
     * The name to be assigned to the new table.
     */
    name?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Table$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
  export interface Params$Resource$Table$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of tables to return. Default is 5.
     */
    maxResults?: number;
    /**
     * Continuation token specifying which result page to return.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Table$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether the view definition is also updated. The specified view
     * definition replaces the existing one. Only a view can be updated with a
     * new definition.
     */
    replaceViewDefinition?: boolean;
    /**
     * ID of the table that is being updated.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
  export interface Params$Resource$Table$Refetchsheet {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table whose rows will be replaced from the spreadsheet.
     */
    tableId?: string;
  }
  export interface Params$Resource$Table$Replacerows {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The delimiter used to separate cell values. This can only consist of a
     * single character. Default is ,.
     */
    delimiter?: string;
    /**
     * The encoding of the content. Default is UTF-8. Use 'auto-detect' if you
     * are unsure of the encoding.
     */
    encoding?: string;
    /**
     * The index of the line up to which data will be imported. Default is to
     * import the entire file. If endLine is negative, it is an offset from the
     * end of the file; the imported content will exclude the last endLine
     * lines.
     */
    endLine?: number;
    /**
     * Whether the imported CSV must have the same number of column values for
     * each row. If true, throws an exception if the CSV does not have the same
     * number of columns. If false, rows with fewer column values will be padded
     * with empty values. Default is true.
     */
    isStrict?: boolean;
    /**
     * The index of the first line from which to start importing, inclusive.
     * Default is 0.
     */
    startLine?: number;
    /**
     * Table whose rows will be replaced.
     */
    tableId?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Table$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether the view definition is also updated. The specified view
     * definition replaces the existing one. Only a view can be updated with a
     * new definition.
     */
    replaceViewDefinition?: boolean;
    /**
     * ID of the table that is being updated.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
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
     * @desc Deletes a specific task by its ID, unless that task has already
     * started running.
     * @alias fusiontables.task.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table from which the task is being deleted.
     * @param {string} params.taskId The identifier of the task to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Task$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Task$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Task$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Task$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Task$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Task$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/fusiontables/v2/tables/{tableId}/tasks/{taskId}')
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
     * @desc Retrieves a specific task by its ID.
     * @alias fusiontables.task.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.tableId Table to which the task belongs.
     * @param {string} params.taskId The identifier of the task to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Task$Get,
        options?: MethodOptions): AxiosPromise<Schema$Task>;
    get(params: Params$Resource$Task$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback: BodyResponseCallback<Schema$Task>): void;
    get(params: Params$Resource$Task$Get,
        callback: BodyResponseCallback<Schema$Task>): void;
    get(callback: BodyResponseCallback<Schema$Task>): void;
    get(paramsOrCallback?: Params$Resource$Task$Get|
        BodyResponseCallback<Schema$Task>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      let params = (paramsOrCallback || {}) as Params$Resource$Task$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Task$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/fusiontables/v2/tables/{tableId}/tasks/{taskId}')
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
     * @param {integer=} params.maxResults Maximum number of tasks to return. Default is 5.
     * @param {string=} params.pageToken Continuation token specifying which result page to return.
     * @param {integer=} params.startIndex Index of the first result returned in the current page.
     * @param {string} params.tableId Table whose tasks are being listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Task$List, options?: MethodOptions):
        AxiosPromise<Schema$TaskList>;
    list(
        params: Params$Resource$Task$List,
        options: MethodOptions|BodyResponseCallback<Schema$TaskList>,
        callback: BodyResponseCallback<Schema$TaskList>): void;
    list(
        params: Params$Resource$Task$List,
        callback: BodyResponseCallback<Schema$TaskList>): void;
    list(callback: BodyResponseCallback<Schema$TaskList>): void;
    list(
        paramsOrCallback?: Params$Resource$Task$List|
        BodyResponseCallback<Schema$TaskList>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$TaskList>,
        callback?: BodyResponseCallback<Schema$TaskList>):
        void|AxiosPromise<Schema$TaskList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Task$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Task$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/tasks')
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

  export interface Params$Resource$Task$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table from which the task is being deleted.
     */
    tableId?: string;
    /**
     * The identifier of the task to delete.
     */
    taskId?: string;
  }
  export interface Params$Resource$Task$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table to which the task belongs.
     */
    tableId?: string;
    /**
     * The identifier of the task to get.
     */
    taskId?: string;
  }
  export interface Params$Resource$Task$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of tasks to return. Default is 5.
     */
    maxResults?: number;
    /**
     * Continuation token specifying which result page to return.
     */
    pageToken?: string;
    /**
     * Index of the first result returned in the current page.
     */
    startIndex?: number;
    /**
     * Table whose tasks are being listed.
     */
    tableId?: string;
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
    delete(params?: Params$Resource$Template$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Template$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Template$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Template$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Template$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Template$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/templates/{templateId}')
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
    get(params?: Params$Resource$Template$Get,
        options?: MethodOptions): AxiosPromise<Schema$Template>;
    get(params: Params$Resource$Template$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback: BodyResponseCallback<Schema$Template>): void;
    get(params: Params$Resource$Template$Get,
        callback: BodyResponseCallback<Schema$Template>): void;
    get(callback: BodyResponseCallback<Schema$Template>): void;
    get(paramsOrCallback?: Params$Resource$Template$Get|
        BodyResponseCallback<Schema$Template>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      let params = (paramsOrCallback || {}) as Params$Resource$Template$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Template$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/templates/{templateId}')
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
    insert(params?: Params$Resource$Template$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Template>;
    insert(
        params: Params$Resource$Template$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback: BodyResponseCallback<Schema$Template>): void;
    insert(
        params: Params$Resource$Template$Insert,
        callback: BodyResponseCallback<Schema$Template>): void;
    insert(callback: BodyResponseCallback<Schema$Template>): void;
    insert(
        paramsOrCallback?: Params$Resource$Template$Insert|
        BodyResponseCallback<Schema$Template>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      let params = (paramsOrCallback || {}) as Params$Resource$Template$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Template$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/templates')
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
    list(params?: Params$Resource$Template$List, options?: MethodOptions):
        AxiosPromise<Schema$TemplateList>;
    list(
        params: Params$Resource$Template$List,
        options: MethodOptions|BodyResponseCallback<Schema$TemplateList>,
        callback: BodyResponseCallback<Schema$TemplateList>): void;
    list(
        params: Params$Resource$Template$List,
        callback: BodyResponseCallback<Schema$TemplateList>): void;
    list(callback: BodyResponseCallback<Schema$TemplateList>): void;
    list(
        paramsOrCallback?: Params$Resource$Template$List|
        BodyResponseCallback<Schema$TemplateList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TemplateList>,
        callback?: BodyResponseCallback<Schema$TemplateList>):
        void|AxiosPromise<Schema$TemplateList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Template$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Template$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/fusiontables/v2/tables/{tableId}/templates')
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
    patch(params?: Params$Resource$Template$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Template>;
    patch(
        params: Params$Resource$Template$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback: BodyResponseCallback<Schema$Template>): void;
    patch(
        params: Params$Resource$Template$Patch,
        callback: BodyResponseCallback<Schema$Template>): void;
    patch(callback: BodyResponseCallback<Schema$Template>): void;
    patch(
        paramsOrCallback?: Params$Resource$Template$Patch|
        BodyResponseCallback<Schema$Template>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      let params = (paramsOrCallback || {}) as Params$Resource$Template$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Template$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/templates/{templateId}')
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
    update(params?: Params$Resource$Template$Update, options?: MethodOptions):
        AxiosPromise<Schema$Template>;
    update(
        params: Params$Resource$Template$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback: BodyResponseCallback<Schema$Template>): void;
    update(
        params: Params$Resource$Template$Update,
        callback: BodyResponseCallback<Schema$Template>): void;
    update(callback: BodyResponseCallback<Schema$Template>): void;
    update(
        paramsOrCallback?: Params$Resource$Template$Update|
        BodyResponseCallback<Schema$Template>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Template>,
        callback?: BodyResponseCallback<Schema$Template>):
        void|AxiosPromise<Schema$Template> {
      let params = (paramsOrCallback || {}) as Params$Resource$Template$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Template$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/fusiontables/v2/tables/{tableId}/templates/{templateId}')
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

  export interface Params$Resource$Template$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table from which the template is being deleted
     */
    tableId?: string;
    /**
     * Identifier for the template which is being deleted
     */
    templateId?: number;
  }
  export interface Params$Resource$Template$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table to which the template belongs
     */
    tableId?: string;
    /**
     * Identifier for the template that is being requested
     */
    templateId?: number;
  }
  export interface Params$Resource$Template$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table for which a new template is being created
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Template;
  }
  export interface Params$Resource$Template$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of templates to return. Optional. Default is 5.
     */
    maxResults?: number;
    /**
     * Continuation token specifying which results page to return. Optional.
     */
    pageToken?: string;
    /**
     * Identifier for the table whose templates are being requested
     */
    tableId?: string;
  }
  export interface Params$Resource$Template$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table to which the updated template belongs
     */
    tableId?: string;
    /**
     * Identifier for the template that is being updated
     */
    templateId?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Template;
  }
  export interface Params$Resource$Template$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Table to which the updated template belongs
     */
    tableId?: string;
    /**
     * Identifier for the template that is being updated
     */
    templateId?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Template;
  }
}
