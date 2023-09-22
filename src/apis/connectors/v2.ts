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

export namespace connectors_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Connectors API
   *
   * Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const connectors = google.connectors('v2');
   * ```
   */
  export class Connectors {
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
   * Action message contains metadata information about a single action present in the external system.
   */
  export interface Schema$Action {
    /**
     * JsonSchema representation of this actions's input schema
     */
    inputJsonSchema?: Schema$JsonSchema;
    /**
     * List containing input parameter metadata.
     */
    inputParameters?: Schema$InputParameter[];
    /**
     * Name of the action.
     */
    name?: string | null;
    /**
     * JsonSchema representation of this actions's result schema
     */
    resultJsonSchema?: Schema$JsonSchema;
    /**
     * List containing the metadata of result fields.
     */
    resultMetadata?: Schema$ResultMetadata[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * 'Entity row'/ 'Entity' refers to a single row of an entity type.
   */
  export interface Schema$Entity {
    /**
     * Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.
     */
    fields?: {[key: string]: any} | null;
    /**
     * Output only. Resource name of the Entity. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string | null;
  }
  /**
   * EntityType message contains metadata information about a single entity type present in the external system.
   */
  export interface Schema$EntityType {
    /**
     * List containing metadata information about each field of the entity type.
     */
    fields?: Schema$Field[];
    /**
     * JsonSchema representation of this entity's schema
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * The name of the entity type.
     */
    name?: string | null;
  }
  /**
   * Request message for ActionService.ExecuteAction
   */
  export interface Schema$ExecuteActionRequest {
    /**
     * Parameters for executing the action. The parameters can be key/value pairs or nested structs.
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * Response message for ActionService.ExecuteAction
   */
  export interface Schema$ExecuteActionResponse {
    /**
     * In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'\}, ...] \}
     */
    results?: Array<{[key: string]: any}> | null;
  }
  /**
   * An execute sql query request containing the query and the connection to execute it on.
   */
  export interface Schema$ExecuteSqlQueryRequest {
    /**
     * Required. SQL statement passed by clients like Integration Platform, the query is passed as-is to the driver used for interfacing with external systems.
     */
    query?: Schema$Query;
  }
  /**
   * A response returned by the connection after executing the sql query.
   */
  export interface Schema$ExecuteSqlQueryResponse {
    /**
     * In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the 'results' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. \},.. ] Each Struct row can contain fields any type of like nested Structs or lists.
     */
    results?: Array<{[key: string]: any}> | null;
  }
  /**
   * Message contains EntityType's Field metadata.
   */
  export interface Schema$Field {
    /**
     * The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The data type of the Field.
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Field provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the Field.
     */
    description?: string | null;
    /**
     * JsonSchema of the field, applicable only if field is of type `STRUCT`
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.
     */
    key?: boolean | null;
    /**
     * Name of the Field.
     */
    name?: string | null;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
    /**
     * Reference captures the association between two different entity types. Value links to the reference of another entity type.
     */
    reference?: Schema$Reference;
  }
  /**
   * Input Parameter message contains metadata about the parameters required for executing an Action.
   */
  export interface Schema$InputParameter {
    /**
     * The data type of the Parameter
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the Parameter.
     */
    description?: string | null;
    /**
     * JsonSchema of the parameter, applicable only if parameter is of type `STRUCT`
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * Name of the Parameter.
     */
    name?: string | null;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
  }
  /**
   * JsonSchema representation of schema metadata
   */
  export interface Schema$JsonSchema {
    /**
     * Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The default value of the field or object described by this schema.
     */
    default?: any | null;
    /**
     * A description of this schema.
     */
    description?: string | null;
    /**
     * Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values
     */
    enum?: any[] | null;
    /**
     * Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format
     */
    format?: string | null;
    /**
     * Schema that applies to array values, applicable only if this is of type `array`.
     */
    items?: Schema$JsonSchema;
    /**
     * JDBC datatype of the field.
     */
    jdbcType?: string | null;
    /**
     * The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property
     */
    properties?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * Whether this property is required.
     */
    required?: string[] | null;
    /**
     * JSON Schema Validation: A Vocabulary for Structural Validation of JSON
     */
    type?: string[] | null;
  }
  /**
   * Response message for ActionService.ListActions
   */
  export interface Schema$ListActionsResponse {
    /**
     * List of action metadata.
     */
    actions?: Schema$Action[];
    /**
     * Next page token if more actions available.
     */
    nextPageToken?: string | null;
    /**
     * List of actions which contain unsupported Datatypes. Check datatype.proto for more information.
     */
    unsupportedActionNames?: string[] | null;
  }
  /**
   * Response message for EntityService.ListEntities
   */
  export interface Schema$ListEntitiesResponse {
    /**
     * List containing entity rows.
     */
    entities?: Schema$Entity[];
    /**
     * Next page token if more records are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EntityService.ListEntityTypes
   */
  export interface Schema$ListEntityTypesResponse {
    /**
     * Next page token if more entity types available.
     */
    nextPageToken?: string | null;
    /**
     * List of metadata related to all entity types.
     */
    types?: Schema$EntityType[];
    /**
     * List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information.
     */
    unsupportedTypeNames?: string[] | null;
  }
  /**
   * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"\}`.
   */
  export interface Schema$Query {
    /**
     * Sets the limit for the maximum number of rows returned after the query execution.
     */
    maxRows?: string | null;
    /**
     * Required. Sql query to execute.
     */
    query?: string | null;
    /**
     * In the struct, the value corresponds to the value of query parameter and date type corresponds to the date type of the query parameter.
     */
    queryParameters?: Schema$QueryParameter[];
    /**
     * Sets the number of seconds the driver will wait for a query to execute.
     */
    timeout?: string | null;
  }
  /**
   * Query parameter definition
   */
  export interface Schema$QueryParameter {
    dataType?: string | null;
    value?: string | null;
  }
  export interface Schema$Reference {
    /**
     * Name of the reference field.
     */
    name?: string | null;
    /**
     * Name of reference entity type.
     */
    type?: string | null;
  }
  /**
   * Result Metadata message contains metadata about the result returned after executing an Action.
   */
  export interface Schema$ResultMetadata {
    /**
     * The data type of the metadata field
     */
    dataType?: string | null;
    /**
     * A brief description of the metadata field.
     */
    description?: string | null;
    /**
     * JsonSchema of the result, applicable only if parameter is of type `STRUCT`
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * Name of the metadata field.
     */
    name?: string | null;
  }
  /**
   * Response message for EntityService.UpdateEntitiesWithConditions
   */
  export interface Schema$UpdateEntitiesWithConditionsResponse {
    /**
     * Response returned by the external system.
     */
    response?: {[key: string]: any} | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    connections: Resource$Projects$Locations$Connections;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connections = new Resource$Projects$Locations$Connections(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Connections {
    context: APIRequestContext;
    actions: Resource$Projects$Locations$Connections$Actions;
    entityTypes: Resource$Projects$Locations$Connections$Entitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.actions = new Resource$Projects$Locations$Connections$Actions(
        this.context
      );
      this.entityTypes =
        new Resource$Projects$Locations$Connections$Entitytypes(this.context);
    }

    /**
     * Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    executeSqlQuery(
      params?: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExecuteSqlQueryResponse>;
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>,
      callback: BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
    ): void;
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      callback: BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
    ): void;
    executeSqlQuery(
      callback: BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
    ): void;
    executeSqlQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Executesqlquery
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExecuteSqlQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Executesqlquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Executesqlquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+connection}:executeSqlQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['connection'],
        pathParams: ['connection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExecuteSqlQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExecuteSqlQueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Executesqlquery
    extends StandardParameters {
    /**
     * Required. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    connection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteSqlQueryRequest;
  }

  export class Resource$Projects$Locations$Connections$Actions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    execute(
      params?: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExecuteActionResponse>;
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteActionResponse>,
      callback: BodyResponseCallback<Schema$ExecuteActionResponse>
    ): void;
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      callback: BodyResponseCallback<Schema$ExecuteActionResponse>
    ): void;
    execute(callback: BodyResponseCallback<Schema$ExecuteActionResponse>): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Actions$Execute
        | BodyResponseCallback<Schema$ExecuteActionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExecuteActionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExecuteActionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExecuteActionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Actions$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Actions$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:execute').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ExecuteActionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExecuteActionResponse>(parameters);
      }
    }

    /**
     * Gets the schema of the given action.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Action>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Action>,
      callback: BodyResponseCallback<Schema$Action>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      callback: BodyResponseCallback<Schema$Action>
    ): void;
    get(callback: BodyResponseCallback<Schema$Action>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Actions$Get
        | BodyResponseCallback<Schema$Action>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Action>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Action>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Action> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Actions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Actions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Action>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Action>(parameters);
      }
    }

    /**
     * Gets the schema of all the actions supported by the connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Actions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListActionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListActionsResponse>,
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListActionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Actions$List
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListActionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Actions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Actions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/actions').replace(
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
        createAPIRequest<Schema$ListActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListActionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Actions$Execute
    extends StandardParameters {
    /**
     * Required. Resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}/actions/{action\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteActionRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Actions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}/actions/{action\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Actions$List
    extends StandardParameters {
    /**
     * Number of Actions to return. Defaults to 25.
     */
    pageSize?: number;
    /**
     * Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    parent?: string;
    /**
     * Specifies which fields of the Action are returned in the response.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Connections$Entitytypes {
    context: APIRequestContext;
    entities: Resource$Projects$Locations$Connections$Entitytypes$Entities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entities =
        new Resource$Projects$Locations$Connections$Entitytypes$Entities(
          this.context
        );
    }

    /**
     * Gets metadata of given entity type
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityType>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EntityType>,
      callback: BodyResponseCallback<Schema$EntityType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      callback: BodyResponseCallback<Schema$EntityType>
    ): void;
    get(callback: BodyResponseCallback<Schema$EntityType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Get
        | BodyResponseCallback<Schema$EntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityType>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityType> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityType>(parameters);
      }
    }

    /**
     * Lists metadata related to all entity types present in the external system.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEntityTypesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntityTypesResponse>,
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntityTypesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$List
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEntityTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
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
        createAPIRequest<Schema$ListEntityTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntityTypesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{entityType\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$List
    extends StandardParameters {
    /**
     * Number of entity types to return. Defaults to 25.
     */
    pageSize?: number;
    /**
     * Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    parent?: string;
    /**
     * Specifies which fields of the Entity Type are returned in the response.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Connections$Entitytypes$Entities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Entity>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Entity>,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    create(callback: BodyResponseCallback<Schema$Entity>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Entity> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities').replace(
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
        createAPIRequest<Schema$Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entity>(parameters);
      }
    }

    /**
     * Deletes an existing entity row matching the entity type and entity id specified in the request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete
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
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Deletes entities based on conditions specified in the request and not on entity id.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteEntitiesWithConditions(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteEntitiesWithConditions(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteEntitiesWithConditions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions
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
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v2/{+entityType}/entities:deleteEntitiesWithConditions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['entityType'],
        pathParams: ['entityType'],
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
     * Gets a single entity row matching the entity type and entity id specified in the request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Entity>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Entity>,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    get(callback: BodyResponseCallback<Schema$Entity>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Entity> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entity>(parameters);
      }
    }

    /**
     * Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEntitiesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntitiesResponse>,
      callback: BodyResponseCallback<Schema$ListEntitiesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      callback: BodyResponseCallback<Schema$ListEntitiesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntitiesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List
        | BodyResponseCallback<Schema$ListEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEntitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities').replace(
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
        createAPIRequest<Schema$ListEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntitiesResponse>(parameters);
      }
    }

    /**
     * Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Entity>;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Entity>,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Entity>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Entity> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entity>(parameters);
      }
    }

    /**
     * Updates entities based on conditions specified in the request and not on entity id.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateEntitiesWithConditions(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UpdateEntitiesWithConditionsResponse>;
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>,
      callback: BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
    ): void;
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      callback: BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
    ): void;
    updateEntitiesWithConditions(
      callback: BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
    ): void;
    updateEntitiesWithConditions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UpdateEntitiesWithConditionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v2/{+entityType}/entities:updateEntitiesWithConditions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['entityType'],
        pathParams: ['entityType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UpdateEntitiesWithConditionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UpdateEntitiesWithConditionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions
    extends StandardParameters {
    /**
     * Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     */
    conditions?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    entityType?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List
    extends StandardParameters {
    /**
     * Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.
     */
    conditions?: string;
    /**
     * Number of entity rows to return. Defaults page size = 25. Max page size = 200.
     */
    pageSize?: number;
    /**
     * Page token value if available from a previous request.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    parent?: string;
    /**
     * List of 'sort_by' columns to use when returning the results.
     */
    sortBy?: string[];
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the Entity. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions
    extends StandardParameters {
    /**
     * Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     */
    conditions?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    entityType?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
}
