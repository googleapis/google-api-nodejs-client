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

export namespace area120tables_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * Area120 Tables API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const area120tables = google.area120tables('v1alpha1');
   * ```
   */
  export class Area120tables {
    context: APIRequestContext;
    tables: Resource$Tables;
    workspaces: Resource$Workspaces;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.tables = new Resource$Tables(this.context);
      this.workspaces = new Resource$Workspaces(this.context);
    }
  }

  /**
   * Request message for TablesService.BatchCreateRows.
   */
  export interface Schema$BatchCreateRowsRequest {
    /**
     * Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.
     */
    requests?: Schema$CreateRowRequest[];
  }
  /**
   * Response message for TablesService.BatchCreateRows.
   */
  export interface Schema$BatchCreateRowsResponse {
    /**
     * The created rows.
     */
    rows?: Schema$Row[];
  }
  /**
   * Request message for TablesService.BatchDeleteRows
   */
  export interface Schema$BatchDeleteRowsRequest {
    /**
     * Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table\}/rows/{row\}
     */
    names?: string[] | null;
  }
  /**
   * Request message for TablesService.BatchUpdateRows.
   */
  export interface Schema$BatchUpdateRowsRequest {
    /**
     * Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.
     */
    requests?: Schema$UpdateRowRequest[];
  }
  /**
   * Response message for TablesService.BatchUpdateRows.
   */
  export interface Schema$BatchUpdateRowsResponse {
    /**
     * The updated rows.
     */
    rows?: Schema$Row[];
  }
  /**
   * Details on a column in the table.
   */
  export interface Schema$ColumnDescription {
    /**
     * Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website.
     */
    dataType?: string | null;
    /**
     * Optional. Additional details about a date column.
     */
    dateDetails?: Schema$DateDetails;
    /**
     * Internal id for a column.
     */
    id?: string | null;
    /**
     * Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation.
     */
    labels?: Schema$LabeledItem[];
    /**
     * Optional. Indicates that this is a lookup column whose value is derived from the relationship column specified in the details. Lookup columns can not be updated directly. To change the value you must update the associated relationship column.
     */
    lookupDetails?: Schema$LookupDetails;
    /**
     * Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible.
     */
    multipleValuesDisallowed?: boolean | null;
    /**
     * column name
     */
    name?: string | null;
    /**
     * Optional. Indicates that values for the column cannot be set by the user.
     */
    readonly?: boolean | null;
    /**
     * Optional. Additional details about a relationship column. Specified when data_type is relationship.
     */
    relationshipDetails?: Schema$RelationshipDetails;
  }
  /**
   * Request message for TablesService.CreateRow.
   */
  export interface Schema$CreateRowRequest {
    /**
     * Required. The parent table where this row will be created. Format: tables/{table\}
     */
    parent?: string | null;
    /**
     * Required. The row to create.
     */
    row?: Schema$Row;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: string | null;
  }
  /**
   * Details about a date column.
   */
  export interface Schema$DateDetails {
    /**
     * Whether the date column includes time.
     */
    hasTime?: boolean | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A single item in a labeled column.
   */
  export interface Schema$LabeledItem {
    /**
     * Internal id associated with the item.
     */
    id?: string | null;
    /**
     * Display string as entered by user.
     */
    name?: string | null;
  }
  /**
   * Response message for TablesService.ListRows.
   */
  export interface Schema$ListRowsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The rows from the specified table.
     */
    rows?: Schema$Row[];
  }
  /**
   * Response message for TablesService.ListTables.
   */
  export interface Schema$ListTablesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of tables.
     */
    tables?: Schema$Table[];
  }
  /**
   * Response message for TablesService.ListWorkspaces.
   */
  export interface Schema$ListWorkspacesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of workspaces.
     */
    workspaces?: Schema$Workspace[];
  }
  /**
   * Details about a lookup column whose value comes from the associated relationship.
   */
  export interface Schema$LookupDetails {
    /**
     * The name of the relationship column associated with the lookup.
     */
    relationshipColumn?: string | null;
    /**
     * The id of the relationship column.
     */
    relationshipColumnId?: string | null;
  }
  /**
   * Details about a relationship column.
   */
  export interface Schema$RelationshipDetails {
    /**
     * The name of the table this relationship is linked to.
     */
    linkedTable?: string | null;
  }
  /**
   * A single row in a table.
   */
  export interface Schema$Row {
    /**
     * Time when the row was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the row. Row names have the form `tables/{table\}/rows/{row\}`. The name is ignored when creating a row.
     */
    name?: string | null;
    /**
     * Time when the row was last updated.
     */
    updateTime?: string | null;
    /**
     * The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.
     */
    values?: {[key: string]: any} | null;
  }
  /**
   * A saved view of a table. NextId: 3
   */
  export interface Schema$SavedView {
    /**
     * Internal id associated with the saved view.
     */
    id?: string | null;
    /**
     * Display name of the saved view.
     */
    name?: string | null;
  }
  /**
   * A single table. NextId: 8
   */
  export interface Schema$Table {
    /**
     * List of columns in this table. Order of columns matches the display order.
     */
    columns?: Schema$ColumnDescription[];
    /**
     * Time when the table was created.
     */
    createTime?: string | null;
    /**
     * The human readable title of the table.
     */
    displayName?: string | null;
    /**
     * The resource name of the table. Table names have the form `tables/{table\}`.
     */
    name?: string | null;
    /**
     * Saved views for this table.
     */
    savedViews?: Schema$SavedView[];
    /**
     * The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    timeZone?: string | null;
    /**
     * Time when the table was last updated excluding updates to individual rows
     */
    updateTime?: string | null;
  }
  /**
   * Request message for TablesService.UpdateRow.
   */
  export interface Schema$UpdateRowRequest {
    /**
     * Required. The row to update.
     */
    row?: Schema$Row;
    /**
     * The list of fields to update.
     */
    updateMask?: string | null;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: string | null;
  }
  /**
   * A single workspace.
   */
  export interface Schema$Workspace {
    /**
     * Time when the workspace was created.
     */
    createTime?: string | null;
    /**
     * The human readable title of the workspace.
     */
    displayName?: string | null;
    /**
     * The resource name of the workspace. Workspace names have the form `workspaces/{workspace\}`.
     */
    name?: string | null;
    /**
     * The list of tables in the workspace.
     */
    tables?: Schema$Table[];
    /**
     * Time when the workspace was last updated.
     */
    updateTime?: string | null;
  }

  export class Resource$Tables {
    context: APIRequestContext;
    rows: Resource$Tables$Rows;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.rows = new Resource$Tables$Rows(this.context);
    }

    /**
     * Gets a table. Returns NOT_FOUND if the table does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Tables$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Tables$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    get(
      params: Params$Resource$Tables$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tables$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(
      params: Params$Resource$Tables$Get,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(callback: BodyResponseCallback<Schema$Table>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tables$Get
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Table> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Table>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * Lists tables for the user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Tables$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Tables$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTablesResponse>;
    list(
      params: Params$Resource$Tables$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tables$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTablesResponse>,
      callback: BodyResponseCallback<Schema$ListTablesResponse>
    ): void;
    list(
      params: Params$Resource$Tables$List,
      callback: BodyResponseCallback<Schema$ListTablesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTablesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tables$List
        | BodyResponseCallback<Schema$ListTablesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTablesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTablesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTablesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/tables').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTablesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTablesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Tables$Get extends StandardParameters {
    /**
     * Required. The name of the table to retrieve. Format: tables/{table\}
     */
    name?: string;
  }
  export interface Params$Resource$Tables$List extends StandardParameters {
    /**
     * Optional. Sorting order for the list of tables on createTime/updateTime.
     */
    orderBy?: string;
    /**
     * The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Tables$Rows {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates multiple rows.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Tables$Rows$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Tables$Rows$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreateRowsResponse>;
    batchCreate(
      params: Params$Resource$Tables$Rows$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Tables$Rows$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateRowsResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateRowsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Tables$Rows$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateRowsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateRowsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateRowsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateRowsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateRowsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchCreateRowsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Rows$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/rows:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreateRowsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateRowsResponse>(parameters);
      }
    }

    /**
     * Deletes multiple rows.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Tables$Rows$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Tables$Rows$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    batchDelete(
      params: Params$Resource$Tables$Rows$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Tables$Rows$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(
      params: Params$Resource$Tables$Rows$Batchdelete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Batchdelete
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
        {}) as Params$Resource$Tables$Rows$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/rows:batchDelete').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Updates multiple rows.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Tables$Rows$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Tables$Rows$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchUpdateRowsResponse>;
    batchUpdate(
      params: Params$Resource$Tables$Rows$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Tables$Rows$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateRowsResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateRowsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Tables$Rows$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateRowsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateRowsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateRowsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateRowsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateRowsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchUpdateRowsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Rows$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/rows:batchUpdate').replace(
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
        createAPIRequest<Schema$BatchUpdateRowsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateRowsResponse>(parameters);
      }
    }

    /**
     * Creates a row.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Tables$Rows$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Tables$Rows$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Row>;
    create(
      params: Params$Resource$Tables$Rows$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Tables$Rows$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Row>,
      callback: BodyResponseCallback<Schema$Row>
    ): void;
    create(
      params: Params$Resource$Tables$Rows$Create,
      callback: BodyResponseCallback<Schema$Row>
    ): void;
    create(callback: BodyResponseCallback<Schema$Row>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Create
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Row> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Rows$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/rows').replace(
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
        createAPIRequest<Schema$Row>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Row>(parameters);
      }
    }

    /**
     * Deletes a row.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Tables$Rows$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Tables$Rows$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Tables$Rows$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Tables$Rows$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Tables$Rows$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Delete
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
        {}) as Params$Resource$Tables$Rows$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a row. Returns NOT_FOUND if the row does not exist in the table.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Tables$Rows$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Tables$Rows$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Row>;
    get(
      params: Params$Resource$Tables$Rows$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tables$Rows$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Row>,
      callback: BodyResponseCallback<Schema$Row>
    ): void;
    get(
      params: Params$Resource$Tables$Rows$Get,
      callback: BodyResponseCallback<Schema$Row>
    ): void;
    get(callback: BodyResponseCallback<Schema$Row>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Get
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Row> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Rows$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Row>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Row>(parameters);
      }
    }

    /**
     * Lists rows in a table. Returns NOT_FOUND if the table does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Tables$Rows$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Tables$Rows$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRowsResponse>;
    list(
      params: Params$Resource$Tables$Rows$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tables$Rows$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRowsResponse>,
      callback: BodyResponseCallback<Schema$ListRowsResponse>
    ): void;
    list(
      params: Params$Resource$Tables$Rows$List,
      callback: BodyResponseCallback<Schema$ListRowsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRowsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$List
        | BodyResponseCallback<Schema$ListRowsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRowsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRowsResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListRowsResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Rows$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/rows').replace(
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
        createAPIRequest<Schema$ListRowsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRowsResponse>(parameters);
      }
    }

    /**
     * Updates a row.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Tables$Rows$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Tables$Rows$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Row>;
    patch(
      params: Params$Resource$Tables$Rows$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Tables$Rows$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Row>,
      callback: BodyResponseCallback<Schema$Row>
    ): void;
    patch(
      params: Params$Resource$Tables$Rows$Patch,
      callback: BodyResponseCallback<Schema$Row>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Row>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Tables$Rows$Patch
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Row>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Row> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Rows$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Rows$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Row>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Row>(parameters);
      }
    }
  }

  export interface Params$Resource$Tables$Rows$Batchcreate
    extends StandardParameters {
    /**
     * Required. The parent table where the rows will be created. Format: tables/{table\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateRowsRequest;
  }
  export interface Params$Resource$Tables$Rows$Batchdelete
    extends StandardParameters {
    /**
     * Required. The parent table shared by all rows being deleted. Format: tables/{table\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteRowsRequest;
  }
  export interface Params$Resource$Tables$Rows$Batchupdate
    extends StandardParameters {
    /**
     * Required. The parent table shared by all rows being updated. Format: tables/{table\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateRowsRequest;
  }
  export interface Params$Resource$Tables$Rows$Create
    extends StandardParameters {
    /**
     * Required. The parent table where this row will be created. Format: tables/{table\}
     */
    parent?: string;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Row;
  }
  export interface Params$Resource$Tables$Rows$Delete
    extends StandardParameters {
    /**
     * Required. The name of the row to delete. Format: tables/{table\}/rows/{row\}
     */
    name?: string;
  }
  export interface Params$Resource$Tables$Rows$Get extends StandardParameters {
    /**
     * Required. The name of the row to retrieve. Format: tables/{table\}/rows/{row\}
     */
    name?: string;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: string;
  }
  export interface Params$Resource$Tables$Rows$List extends StandardParameters {
    /**
     * Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).
     */
    filter?: string;
    /**
     * Optional. Sorting order for the list of rows on createTime/updateTime.
     */
    orderBy?: string;
    /**
     * The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent table. Format: tables/{table\}
     */
    parent?: string;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: string;
  }
  export interface Params$Resource$Tables$Rows$Patch
    extends StandardParameters {
    /**
     * The resource name of the row. Row names have the form `tables/{table\}/rows/{row\}`. The name is ignored when creating a row.
     */
    name?: string;
    /**
     * The list of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Row;
  }

  export class Resource$Workspaces {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Workspaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Workspaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workspace>;
    get(
      params: Params$Resource$Workspaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Workspaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Workspace>,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    get(
      params: Params$Resource$Workspaces$Get,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Workspace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Workspaces$Get
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Workspace> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Workspaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Workspaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Workspace>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Workspace>(parameters);
      }
    }

    /**
     * Lists workspaces for the user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Workspaces$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Workspaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkspacesResponse>;
    list(
      params: Params$Resource$Workspaces$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Workspaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkspacesResponse>,
      callback: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void;
    list(
      params: Params$Resource$Workspaces$List,
      callback: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Workspaces$List
        | BodyResponseCallback<Schema$ListWorkspacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkspacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkspacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkspacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Workspaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Workspaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://area120tables.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/workspaces').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListWorkspacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkspacesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Workspaces$Get extends StandardParameters {
    /**
     * Required. The name of the workspace to retrieve. Format: workspaces/{workspace\}
     */
    name?: string;
  }
  export interface Params$Resource$Workspaces$List extends StandardParameters {
    /**
     * The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
     */
    pageToken?: string;
  }
}
