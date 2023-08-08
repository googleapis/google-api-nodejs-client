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

export namespace script_v1 {
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
   * Apps Script API
   *
   * Manages and executes Google Apps Script projects.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const script = google.script('v1');
   * ```
   */
  export class Script {
    context: APIRequestContext;
    processes: Resource$Processes;
    projects: Resource$Projects;
    scripts: Resource$Scripts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.processes = new Resource$Processes(this.context);
      this.projects = new Resource$Projects(this.context);
      this.scripts = new Resource$Scripts(this.context);
    }
  }

  /**
   * The Content resource.
   */
  export interface Schema$Content {
    /**
     * The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.
     */
    files?: Schema$File[];
    /**
     * The script project's Drive ID.
     */
    scriptId?: string | null;
  }
  /**
   * Request to create a script project. Request to create a script project.
   */
  export interface Schema$CreateProjectRequest {
    /**
     * The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.
     */
    parentId?: string | null;
    /**
     * The title for the project.
     */
    title?: string | null;
  }
  /**
   * Representation of a single script deployment.
   */
  export interface Schema$Deployment {
    /**
     * The deployment configuration.
     */
    deploymentConfig?: Schema$DeploymentConfig;
    /**
     * The deployment ID for this deployment.
     */
    deploymentId?: string | null;
    /**
     * The deployment's entry points.
     */
    entryPoints?: Schema$EntryPoint[];
    /**
     * Last modified date time stamp.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata the defines how a deployment is configured.
   */
  export interface Schema$DeploymentConfig {
    /**
     * The description for this deployment.
     */
    description?: string | null;
    /**
     * The manifest file name for this deployment.
     */
    manifestFileName?: string | null;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string | null;
    /**
     * The version number on which this deployment is based.
     */
    versionNumber?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A configuration that defines how a deployment is accessed externally.
   */
  export interface Schema$EntryPoint {
    /**
     * Add-on properties.
     */
    addOn?: Schema$GoogleAppsScriptTypeAddOnEntryPoint;
    /**
     * The type of the entry point.
     */
    entryPointType?: string | null;
    /**
     * An entry point specification for Apps Script API execution calls.
     */
    executionApi?: Schema$GoogleAppsScriptTypeExecutionApiEntryPoint;
    /**
     * An entry point specification for web apps.
     */
    webApp?: Schema$GoogleAppsScriptTypeWebAppEntryPoint;
  }
  /**
   * The response for executing or debugging a function in an Apps Script project.
   */
  export interface Schema$ExecuteStreamResponse {
    /**
     * The result of the execution.
     */
    result?: Schema$ScriptExecutionResult;
  }
  /**
   * An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object. The `Status` object's `details` field contains an array with a single one of these `ExecutionError` objects.
   */
  export interface Schema$ExecutionError {
    /**
     * The error message thrown by Apps Script, usually localized into the user's language.
     */
    errorMessage?: string | null;
    /**
     * The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included.
     */
    errorType?: string | null;
    /**
     * An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.
     */
    scriptStackTraceElements?: Schema$ScriptStackTraceElement[];
  }
  /**
   * A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.
   */
  export interface Schema$ExecutionRequest {
    /**
     * If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`.
     */
    devMode?: boolean | null;
    /**
     * The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as `Library.libFunction1`.
     */
    function?: string | null;
    /**
     * The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional.
     */
    parameters?: any[] | null;
    /**
     * *Deprecated*. For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`. Optional.
     */
    sessionState?: string | null;
  }
  /**
   * An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's response field contains this `ExecutionResponse` object.
   */
  export interface Schema$ExecutionResponse {
    /**
     * The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a `Document` or a `Calendar`); they can only return primitive types such as a `string`, `number`, `array`, `object`, or `boolean`.
     */
    result?: any | null;
  }
  /**
   * An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
   */
  export interface Schema$File {
    /**
     * Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
     */
    createTime?: string | null;
    /**
     * The defined set of functions in the script file, if any.
     */
    functionSet?: Schema$GoogleAppsScriptTypeFunctionSet;
    /**
     * The user who modified the file most recently. This read-only field is only visible to users who have WRITER permission for the script project.
     */
    lastModifyUser?: Schema$GoogleAppsScriptTypeUser;
    /**
     * The name of the file. The file extension is not part of the file name, which can be identified from the type field.
     */
    name?: string | null;
    /**
     * The file content.
     */
    source?: string | null;
    /**
     * The type of the file.
     */
    type?: string | null;
    /**
     * Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
     */
    updateTime?: string | null;
  }
  /**
   * An add-on entry point.
   */
  export interface Schema$GoogleAppsScriptTypeAddOnEntryPoint {
    /**
     * The add-on's required list of supported container types.
     */
    addOnType?: string | null;
    /**
     * The add-on's optional description.
     */
    description?: string | null;
    /**
     * The add-on's optional help URL.
     */
    helpUrl?: string | null;
    /**
     * The add-on's required post install tip URL.
     */
    postInstallTipUrl?: string | null;
    /**
     * The add-on's optional report issue URL.
     */
    reportIssueUrl?: string | null;
    /**
     * The add-on's required title.
     */
    title?: string | null;
  }
  /**
   * API executable entry point configuration.
   */
  export interface Schema$GoogleAppsScriptTypeExecutionApiConfig {
    /**
     * Who has permission to run the API executable.
     */
    access?: string | null;
  }
  /**
   * An API executable entry point.
   */
  export interface Schema$GoogleAppsScriptTypeExecutionApiEntryPoint {
    /**
     * The entry point's configuration.
     */
    entryPointConfig?: Schema$GoogleAppsScriptTypeExecutionApiConfig;
  }
  /**
   * Represents a function in a script project.
   */
  export interface Schema$GoogleAppsScriptTypeFunction {
    /**
     * The function name in the script project.
     */
    name?: string | null;
    /**
     * The ordered list of parameter names of the function in the script project.
     */
    parameters?: string[] | null;
  }
  /**
   * A set of functions. No duplicates are permitted.
   */
  export interface Schema$GoogleAppsScriptTypeFunctionSet {
    /**
     * A list of functions composing the set.
     */
    values?: Schema$GoogleAppsScriptTypeFunction[];
  }
  /**
   * Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
   */
  export interface Schema$GoogleAppsScriptTypeProcess {
    /**
     * Duration the execution spent executing.
     */
    duration?: string | null;
    /**
     * Name of the function the started the execution.
     */
    functionName?: string | null;
    /**
     * The executions status.
     */
    processStatus?: string | null;
    /**
     * The executions type.
     */
    processType?: string | null;
    /**
     * Name of the script being executed.
     */
    projectName?: string | null;
    /**
     * Which version of maestro to use to execute the script.
     */
    runtimeVersion?: string | null;
    /**
     * Time the execution started.
     */
    startTime?: string | null;
    /**
     * The executing users access level to the script.
     */
    userAccessLevel?: string | null;
  }
  /**
   * A simple user profile resource.
   */
  export interface Schema$GoogleAppsScriptTypeUser {
    /**
     * The user's domain.
     */
    domain?: string | null;
    /**
     * The user's identifying email address.
     */
    email?: string | null;
    /**
     * The user's display name.
     */
    name?: string | null;
    /**
     * The user's photo.
     */
    photoUrl?: string | null;
  }
  /**
   * Web app entry point configuration.
   */
  export interface Schema$GoogleAppsScriptTypeWebAppConfig {
    /**
     * Who has permission to run the web app.
     */
    access?: string | null;
    /**
     * Who to execute the web app as.
     */
    executeAs?: string | null;
  }
  /**
   * A web application entry point.
   */
  export interface Schema$GoogleAppsScriptTypeWebAppEntryPoint {
    /**
     * The entry point's configuration.
     */
    entryPointConfig?: Schema$GoogleAppsScriptTypeWebAppConfig;
    /**
     * The URL for the web application.
     */
    url?: string | null;
  }
  /**
   * Response with the list of deployments for the specified Apps Script project.
   */
  export interface Schema$ListDeploymentsResponse {
    /**
     * The list of deployments.
     */
    deployments?: Schema$Deployment[];
    /**
     * The token that can be used in the next call to get the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response with the list of Process resources.
   */
  export interface Schema$ListScriptProcessesResponse {
    /**
     * Token for the next page of results. If empty, there are no more pages remaining.
     */
    nextPageToken?: string | null;
    /**
     * List of processes matching request parameters.
     */
    processes?: Schema$GoogleAppsScriptTypeProcess[];
  }
  /**
   * Response with the list of Process resources.
   */
  export interface Schema$ListUserProcessesResponse {
    /**
     * Token for the next page of results. If empty, there are no more pages remaining.
     */
    nextPageToken?: string | null;
    /**
     * List of processes matching request parameters.
     */
    processes?: Schema$GoogleAppsScriptTypeProcess[];
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   */
  export interface Schema$ListValue {
    /**
     * Repeated field of dynamically typed values.
     */
    values?: Schema$Value[];
  }
  /**
   * Response with the list of the versions for the specified script project.
   */
  export interface Schema$ListVersionsResponse {
    /**
     * The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.
     */
    nextPageToken?: string | null;
    /**
     * The list of versions.
     */
    versions?: Schema$Version[];
  }
  /**
   * Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
   */
  export interface Schema$Metrics {
    /**
     * Number of active users.
     */
    activeUsers?: Schema$MetricsValue[];
    /**
     * Number of failed executions.
     */
    failedExecutions?: Schema$MetricsValue[];
    /**
     * Number of total executions.
     */
    totalExecutions?: Schema$MetricsValue[];
  }
  /**
   * Metrics value that holds number of executions counted.
   */
  export interface Schema$MetricsValue {
    /**
     * Required field indicating the end time of the interval.
     */
    endTime?: string | null;
    /**
     * Required field indicating the start time of the interval.
     */
    startTime?: string | null;
    /**
     * Indicates the number of executions counted.
     */
    value?: string | null;
  }
  /**
   * A representation of an execution of an Apps Script function started with run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). After execution has started, it can have one of four outcomes: - If the script function returns successfully, the response field contains an ExecutionResponse object with the function's return value in the object's `result` field. - If the script function (or Apps Script itself) throws an exception, the error field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error. - If the execution has not yet completed, the done field is `false` and the neither the `response` nor `error` fields are present. - If the `run` call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class.
   */
  export interface Schema$Operation {
    /**
     * This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.
     */
    done?: boolean | null;
    /**
     * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error.
     */
    error?: Schema$Status;
    /**
     * If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * The script project resource.
   */
  export interface Schema$Project {
    /**
     * When the script was created.
     */
    createTime?: string | null;
    /**
     * User who originally created the script.
     */
    creator?: Schema$GoogleAppsScriptTypeUser;
    /**
     * User who last modified the script.
     */
    lastModifyUser?: Schema$GoogleAppsScriptTypeUser;
    /**
     * The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.
     */
    parentId?: string | null;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string | null;
    /**
     * The title for the project.
     */
    title?: string | null;
    /**
     * When the script was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The result of an execution.
   */
  export interface Schema$ScriptExecutionResult {
    /**
     * The returned value of the execution.
     */
    returnValue?: Schema$Value;
  }
  /**
   * A stack trace through the script that shows where the execution failed.
   */
  export interface Schema$ScriptStackTraceElement {
    /**
     * The name of the function that failed.
     */
    function?: string | null;
    /**
     * The line number where the script failed.
     */
    lineNumber?: number | null;
  }
  /**
   * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
   */
  export interface Schema$Status {
    /**
     * The status code. For this API, this value either: - 10, indicating a `SCRIPT_TIMEOUT` error, - 3, indicating an `INVALID_ARGUMENT` error, or - 1, indicating a `CANCELLED` execution.
     */
    code?: number | null;
    /**
     * An array that contains a single ExecutionError object that provides information about the nature of the error.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * `Struct` represents a structured data value, consisting of fields which map to dynamically typed values.
   */
  export interface Schema$Struct {
    /**
     * Unordered map of dynamically typed values.
     */
    fields?: {[key: string]: Schema$Value} | null;
  }
  /**
   * Request with deployment information to update an existing deployment.
   */
  export interface Schema$UpdateDeploymentRequest {
    /**
     * The deployment configuration.
     */
    deploymentConfig?: Schema$DeploymentConfig;
  }
  /**
   * `Value` represents a dynamically typed value which is the outcome of an executed script.
   */
  export interface Schema$Value {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Represents raw byte values.
     */
    bytesValue?: string | null;
    /**
     * Represents a date in ms since the epoch.
     */
    dateValue?: string | null;
    /**
     * Represents a repeated `Value`.
     */
    listValue?: Schema$ListValue;
    /**
     * Represents a null value.
     */
    nullValue?: string | null;
    /**
     * Represents a double value.
     */
    numberValue?: number | null;
    /**
     * Represents a structured proto value.
     */
    protoValue?: {[key: string]: any} | null;
    /**
     * Represents a string value.
     */
    stringValue?: string | null;
    /**
     * Represents a structured value.
     */
    structValue?: Schema$Struct;
  }
  /**
   * A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
   */
  export interface Schema$Version {
    /**
     * When the version was created.
     */
    createTime?: string | null;
    /**
     * The description for this version.
     */
    description?: string | null;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string | null;
    /**
     * The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.
     */
    versionNumber?: number | null;
  }

  export class Resource$Processes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List information about processes made by or on behalf of a user, such as process type and current status.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Processes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Processes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUserProcessesResponse>;
    list(
      params: Params$Resource$Processes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Processes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserProcessesResponse>,
      callback: BodyResponseCallback<Schema$ListUserProcessesResponse>
    ): void;
    list(
      params: Params$Resource$Processes$List,
      callback: BodyResponseCallback<Schema$ListUserProcessesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserProcessesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Processes$List
        | BodyResponseCallback<Schema$ListUserProcessesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserProcessesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserProcessesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUserProcessesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Processes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Processes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/processes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListUserProcessesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserProcessesResponse>(parameters);
      }
    }

    /**
     * List information about a script's executed processes, such as process type and current status.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listScriptProcesses(
      params: Params$Resource$Processes$Listscriptprocesses,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listScriptProcesses(
      params?: Params$Resource$Processes$Listscriptprocesses,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScriptProcessesResponse>;
    listScriptProcesses(
      params: Params$Resource$Processes$Listscriptprocesses,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listScriptProcesses(
      params: Params$Resource$Processes$Listscriptprocesses,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScriptProcessesResponse>,
      callback: BodyResponseCallback<Schema$ListScriptProcessesResponse>
    ): void;
    listScriptProcesses(
      params: Params$Resource$Processes$Listscriptprocesses,
      callback: BodyResponseCallback<Schema$ListScriptProcessesResponse>
    ): void;
    listScriptProcesses(
      callback: BodyResponseCallback<Schema$ListScriptProcessesResponse>
    ): void;
    listScriptProcesses(
      paramsOrCallback?:
        | Params$Resource$Processes$Listscriptprocesses
        | BodyResponseCallback<Schema$ListScriptProcessesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScriptProcessesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScriptProcessesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListScriptProcessesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Processes$Listscriptprocesses;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Processes$Listscriptprocesses;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/processes:listScriptProcesses').replace(
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
        createAPIRequest<Schema$ListScriptProcessesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScriptProcessesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Processes$List extends StandardParameters {
    /**
     * The maximum number of returned processes per page of results. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     */
    pageToken?: string;
    /**
     * Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
     */
    'userProcessFilter.deploymentId'?: string;
    /**
     * Optional field used to limit returned processes to those that completed on or before the given timestamp.
     */
    'userProcessFilter.endTime'?: string;
    /**
     * Optional field used to limit returned processes to those originating from a script function with the given function name.
     */
    'userProcessFilter.functionName'?: string;
    /**
     * Optional field used to limit returned processes to those originating from projects with project names containing a specific string.
     */
    'userProcessFilter.projectName'?: string;
    /**
     * Optional field used to limit returned processes to those originating from projects with a specific script ID.
     */
    'userProcessFilter.scriptId'?: string;
    /**
     * Optional field used to limit returned processes to those that were started on or after the given timestamp.
     */
    'userProcessFilter.startTime'?: string;
    /**
     * Optional field used to limit returned processes to those having one of the specified process statuses.
     */
    'userProcessFilter.statuses'?: string[];
    /**
     * Optional field used to limit returned processes to those having one of the specified process types.
     */
    'userProcessFilter.types'?: string[];
    /**
     * Optional field used to limit returned processes to those having one of the specified user access levels.
     */
    'userProcessFilter.userAccessLevels'?: string[];
  }
  export interface Params$Resource$Processes$Listscriptprocesses
    extends StandardParameters {
    /**
     * The maximum number of returned processes per page of results. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     */
    pageToken?: string;
    /**
     * The script ID of the project whose processes are listed.
     */
    scriptId?: string;
    /**
     * Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
     */
    'scriptProcessFilter.deploymentId'?: string;
    /**
     * Optional field used to limit returned processes to those that completed on or before the given timestamp.
     */
    'scriptProcessFilter.endTime'?: string;
    /**
     * Optional field used to limit returned processes to those originating from a script function with the given function name.
     */
    'scriptProcessFilter.functionName'?: string;
    /**
     * Optional field used to limit returned processes to those that were started on or after the given timestamp.
     */
    'scriptProcessFilter.startTime'?: string;
    /**
     * Optional field used to limit returned processes to those having one of the specified process statuses.
     */
    'scriptProcessFilter.statuses'?: string[];
    /**
     * Optional field used to limit returned processes to those having one of the specified process types.
     */
    'scriptProcessFilter.types'?: string[];
    /**
     * Optional field used to limit returned processes to those having one of the specified user access levels.
     */
    'scriptProcessFilter.userAccessLevels'?: string[];
  }

  export class Resource$Projects {
    context: APIRequestContext;
    deployments: Resource$Projects$Deployments;
    versions: Resource$Projects$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deployments = new Resource$Projects$Deployments(this.context);
      this.versions = new Resource$Projects$Versions(this.context);
    }

    /**
     * Creates a new, empty script project with no script files and a base manifest file.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    create(
      params: Params$Resource$Projects$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    create(
      params: Params$Resource$Projects$Create,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    create(callback: BodyResponseCallback<Schema$Project>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Create
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Project> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }

    /**
     * Gets a script project's metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    get(
      params: Params$Resource$Projects$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(callback: BodyResponseCallback<Schema$Project>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Get
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Project> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }

    /**
     * Gets the content of the script project, including the code source and metadata for each script file.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getContent(
      params: Params$Resource$Projects$Getcontent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getContent(
      params?: Params$Resource$Projects$Getcontent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Content>;
    getContent(
      params: Params$Resource$Projects$Getcontent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContent(
      params: Params$Resource$Projects$Getcontent,
      options: MethodOptions | BodyResponseCallback<Schema$Content>,
      callback: BodyResponseCallback<Schema$Content>
    ): void;
    getContent(
      params: Params$Resource$Projects$Getcontent,
      callback: BodyResponseCallback<Schema$Content>
    ): void;
    getContent(callback: BodyResponseCallback<Schema$Content>): void;
    getContent(
      paramsOrCallback?:
        | Params$Resource$Projects$Getcontent
        | BodyResponseCallback<Schema$Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Content>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Content> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getcontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getcontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/content').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Content>(parameters);
      }
    }

    /**
     * Get metrics data for scripts, such as number of executions and active users.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getMetrics(
      params: Params$Resource$Projects$Getmetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMetrics(
      params?: Params$Resource$Projects$Getmetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Metrics>;
    getMetrics(
      params: Params$Resource$Projects$Getmetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetrics(
      params: Params$Resource$Projects$Getmetrics,
      options: MethodOptions | BodyResponseCallback<Schema$Metrics>,
      callback: BodyResponseCallback<Schema$Metrics>
    ): void;
    getMetrics(
      params: Params$Resource$Projects$Getmetrics,
      callback: BodyResponseCallback<Schema$Metrics>
    ): void;
    getMetrics(callback: BodyResponseCallback<Schema$Metrics>): void;
    getMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Getmetrics
        | BodyResponseCallback<Schema$Metrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Metrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Metrics>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Metrics> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getmetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getmetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/metrics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Metrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Metrics>(parameters);
      }
    }

    /**
     * Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateContent(
      params: Params$Resource$Projects$Updatecontent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateContent(
      params?: Params$Resource$Projects$Updatecontent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Content>;
    updateContent(
      params: Params$Resource$Projects$Updatecontent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContent(
      params: Params$Resource$Projects$Updatecontent,
      options: MethodOptions | BodyResponseCallback<Schema$Content>,
      callback: BodyResponseCallback<Schema$Content>
    ): void;
    updateContent(
      params: Params$Resource$Projects$Updatecontent,
      callback: BodyResponseCallback<Schema$Content>
    ): void;
    updateContent(callback: BodyResponseCallback<Schema$Content>): void;
    updateContent(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatecontent
        | BodyResponseCallback<Schema$Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Content>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Content> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatecontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updatecontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/content').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Content>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateProjectRequest;
  }
  export interface Params$Resource$Projects$Get extends StandardParameters {
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
  }
  export interface Params$Resource$Projects$Getcontent
    extends StandardParameters {
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
    /**
     * The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
     */
    versionNumber?: number;
  }
  export interface Params$Resource$Projects$Getmetrics
    extends StandardParameters {
    /**
     * Optional field indicating a specific deployment to retrieve metrics from.
     */
    'metricsFilter.deploymentId'?: string;
    /**
     * Required field indicating what granularity of metrics are returned.
     */
    metricsGranularity?: string;
    /**
     * Required field indicating the script to get metrics for.
     */
    scriptId?: string;
  }
  export interface Params$Resource$Projects$Updatecontent
    extends StandardParameters {
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Content;
  }

  export class Resource$Projects$Deployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a deployment of an Apps Script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Deployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Deployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Deployment>;
    create(
      params: Params$Resource$Projects$Deployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Deployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    create(
      params: Params$Resource$Projects$Deployments$Create,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Deployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Deployments$Create
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Deployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/deployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }

    /**
     * Deletes a deployment of an Apps Script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Deployments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Deployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Deployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Deployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Deployments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Deployments$Delete
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
        {}) as Params$Resource$Projects$Deployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{scriptId}/deployments/{deploymentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['scriptId', 'deploymentId'],
        pathParams: ['deploymentId', 'scriptId'],
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
     * Gets a deployment of an Apps Script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Deployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Deployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Deployment>;
    get(
      params: Params$Resource$Projects$Deployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Deployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    get(
      params: Params$Resource$Projects$Deployments$Get,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Deployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Deployments$Get
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Deployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{scriptId}/deployments/{deploymentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId', 'deploymentId'],
        pathParams: ['deploymentId', 'scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }

    /**
     * Lists the deployments of an Apps Script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Deployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Deployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDeploymentsResponse>;
    list(
      params: Params$Resource$Projects$Deployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Deployments$List,
      callback: BodyResponseCallback<Schema$ListDeploymentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDeploymentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Deployments$List
        | BodyResponseCallback<Schema$ListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/deployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDeploymentsResponse>(parameters);
      }
    }

    /**
     * Updates a deployment of an Apps Script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Projects$Deployments$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Deployments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Deployment>;
    update(
      params: Params$Resource$Projects$Deployments$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Deployments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    update(
      params: Params$Resource$Projects$Deployments$Update,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Deployment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Deployments$Update
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Deployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deployments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deployments$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{scriptId}/deployments/{deploymentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['scriptId', 'deploymentId'],
        pathParams: ['deploymentId', 'scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Deployments$Create
    extends StandardParameters {
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeploymentConfig;
  }
  export interface Params$Resource$Projects$Deployments$Delete
    extends StandardParameters {
    /**
     * The deployment ID to be undeployed.
     */
    deploymentId?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
  }
  export interface Params$Resource$Projects$Deployments$Get
    extends StandardParameters {
    /**
     * The deployment ID.
     */
    deploymentId?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
  }
  export interface Params$Resource$Projects$Deployments$List
    extends StandardParameters {
    /**
     * The maximum number of deployments on each returned page. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     */
    pageToken?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
  }
  export interface Params$Resource$Projects$Deployments$Update
    extends StandardParameters {
    /**
     * The deployment ID for this deployment.
     */
    deploymentId?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateDeploymentRequest;
  }

  export class Resource$Projects$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new immutable version using the current code, with a unique version number.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Versions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Versions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    create(
      params: Params$Resource$Projects$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(
      params: Params$Resource$Projects$Versions$Create,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(callback: BodyResponseCallback<Schema$Version>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Versions$Create
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * Gets a version of a script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Versions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Versions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    get(
      params: Params$Resource$Projects$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(
      params: Params$Resource$Projects$Versions$Get,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(callback: BodyResponseCallback<Schema$Version>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Versions$Get
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{scriptId}/versions/{versionNumber}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId', 'versionNumber'],
        pathParams: ['scriptId', 'versionNumber'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * List the versions of a script project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Versions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Versions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionsResponse>;
    list(
      params: Params$Resource$Projects$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Versions$List,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Versions$List
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Versions$Create
    extends StandardParameters {
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Projects$Versions$Get
    extends StandardParameters {
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
    /**
     * The version number.
     */
    versionNumber?: number;
  }
  export interface Params$Resource$Projects$Versions$List
    extends StandardParameters {
    /**
     * The maximum number of versions on each returned page. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     */
    pageToken?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
  }

  export class Resource$Scripts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    run(
      params: Params$Resource$Scripts$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Scripts$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Scripts$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Scripts$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Scripts$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Scripts$Run
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Scripts$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scripts$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/scripts/{scriptId}:run').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Scripts$Run extends StandardParameters {
    /**
     * The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs."
     */
    scriptId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecutionRequest;
  }
}
