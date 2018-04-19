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

/**
 * Apps Script API
 *
 * An API for managing and executing Google Apps Script projects.
 *
 * @example
 * const google = require('googleapis');
 * const script = google.script('v1');
 *
 * @namespace script
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Script
 */
export class Script {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  processes: Resource$Processes;
  projects: Resource$Projects;
  scripts: Resource$Scripts;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.processes = new Resource$Processes(this);
    this.projects = new Resource$Projects(this);
    this.scripts = new Resource$Scripts(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * The Content resource.
 */
export interface Schema$Content {
  /**
   * The list of script project files. One of the files is a script manifest; it
   * must be named &quot;appsscript&quot;, must have type of JSON, and include
   * the manifest configurations for the project.
   */
  files: Schema$File[];
  /**
   * The script project&#39;s Drive ID.
   */
  scriptId: string;
}
/**
 * Request to create a script project.
 */
export interface Schema$CreateProjectRequest {
  /**
   * The Drive ID of a parent file that the created script project is bound to.
   * This is usually the ID of a Google Doc, Google Sheet, Google Form, or
   * Google Slides file. If not set, a standalone script project is created.
   */
  parentId: string;
  /**
   * The title for the project.
   */
  title: string;
}
/**
 * Representation of a single script deployment.
 */
export interface Schema$Deployment {
  /**
   * The deployment configuration.
   */
  deploymentConfig: Schema$DeploymentConfig;
  /**
   * The deployment ID for this deployment.
   */
  deploymentId: string;
  /**
   * The deployment&#39;s entry points.
   */
  entryPoints: Schema$EntryPoint[];
  /**
   * Script&#39;s defined set of functions.
   */
  functionSet: Schema$GoogleAppsScriptTypeFunctionSet;
  /**
   * Set of scopes required by the deployment.
   */
  scopeSet: Schema$GoogleAppsScriptTypeScopeSet;
  /**
   * Last modified date time stamp.
   */
  updateTime: string;
}
/**
 * Metadata the defines how a deployment is configured.
 */
export interface Schema$DeploymentConfig {
  /**
   * The description for this deployment.
   */
  description: string;
  /**
   * The manifest file name for this deployment.
   */
  manifestFileName: string;
  /**
   * The script project&#39;s Drive ID.
   */
  scriptId: string;
  /**
   * The version number on which this deployment is based.
   */
  versionNumber: number;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * A configuration that defines how a deployment is accessed externally.
 */
export interface Schema$EntryPoint {
  /**
   * Add-on properties.
   */
  addOn: Schema$GoogleAppsScriptTypeAddOnEntryPoint;
  /**
   * The type of the entry point.
   */
  entryPointType: string;
  /**
   * An entry point specification for Apps Script API execution calls.
   */
  executionApi: Schema$GoogleAppsScriptTypeExecutionApiEntryPoint;
  /**
   * An entry point specification for web apps.
   */
  webApp: Schema$GoogleAppsScriptTypeWebAppEntryPoint;
}
/**
 * An object that provides information about the nature of an error resulting
 * from an attempted execution of a script function using the Apps Script API.
 * If a run call succeeds but the script function (or Apps Script itself) throws
 * an exception, the response body&#39;s error field contains a Status object.
 * The `Status` object&#39;s `details` field contains an array with a single one
 * of these `ExecutionError` objects.
 */
export interface Schema$ExecutionError {
  /**
   * The error message thrown by Apps Script, usually localized into the
   * user&#39;s language.
   */
  errorMessage: string;
  /**
   * The error type, for example `TypeError` or `ReferenceError`. If the error
   * type is unavailable, this field is not included.
   */
  errorType: string;
  /**
   * An array of objects that provide a stack trace through the script to show
   * where the execution failed, with the deepest call first.
   */
  scriptStackTraceElements: Schema$ScriptStackTraceElement[];
}
/**
 * A request to run the function in a script. The script is identified by the
 * specified `script_id`. Executing a function on a script returns results based
 * on the implementation of the script.
 */
export interface Schema$ExecutionRequest {
  /**
   * If `true` and the user is an owner of the script, the script runs at the
   * most recently saved version rather than the version deployed for use with
   * the Apps Script API. Optional; default is `false`.
   */
  devMode: boolean;
  /**
   * The name of the function to execute in the given script. The name does not
   * include parentheses or parameters.
   */
  function: string;
  /**
   * The parameters to be passed to the function being executed. The object type
   * for each parameter should match the expected type in Apps Script.
   * Parameters cannot be Apps Script-specific object types (such as a
   * `Document` or a `Calendar`); they can only be primitive types such as
   * `string`, `number`, `array`, `object`, or `boolean`. Optional.
   */
  parameters: any[];
  /**
   * For Android add-ons only. An ID that represents the user&#39;s current
   * session in the Android app for Google Docs or Sheets, included as extra
   * data in the
   * [Intent](https://developer.android.com/guide/components/intents-filters.html)
   * that launches the add-on. When an Android add-on is run with a session
   * state, it gains the privileges of a
   * [bound](https://developers.google.com/apps-script/guides/bound)
   * script&amp;mdash;that is, it can access information like the user&#39;s
   * current cursor position (in Docs) or selected cell (in Sheets). To retrieve
   * the state, call
   * `Intent.getStringExtra(&quot;com.google.android.apps.docs.addons.SessionState&quot;)`.
   * Optional.
   */
  sessionState: string;
}
/**
 * An object that provides the return value of a function executed using the
 * Apps Script API. If the script function returns successfully, the response
 * body&#39;s response field contains this `ExecutionResponse` object.
 */
export interface Schema$ExecutionResponse {
  /**
   * The return value of the script function. The type matches the object type
   * returned in Apps Script. Functions called using the Apps Script API cannot
   * return Apps Script-specific objects (such as a `Document` or a `Calendar`);
   * they can only return primitive types such as a `string`, `number`, `array`,
   * `object`, or `boolean`.
   */
  result: any;
}
/**
 * An individual file within a script project. A file is a third-party source
 * code created by one or more developers. It can be a server-side JS code,
 * HTML, or a configuration file. Each script project can contain multiple
 * files.
 */
export interface Schema$File {
  /**
   * Creation date timestamp. This read-only field is only visible to users who
   * have WRITER permission for the script project.
   */
  createTime: string;
  /**
   * The defined set of functions in the script file, if any.
   */
  functionSet: Schema$GoogleAppsScriptTypeFunctionSet;
  /**
   * The user who modified the file most recently. This read-only field is only
   * visible to users who have WRITER permission for the script project.
   */
  lastModifyUser: Schema$GoogleAppsScriptTypeUser;
  /**
   * The name of the file. The file extension is not part of the file name,
   * which can be identified from the type field.
   */
  name: string;
  /**
   * The file content.
   */
  source: string;
  /**
   * The type of the file.
   */
  type: string;
  /**
   * Last modified date timestamp. This read-only field is only visible to users
   * who have WRITER permission for the script project.
   */
  updateTime: string;
}
/**
 * An add-on entry point.
 */
export interface Schema$GoogleAppsScriptTypeAddOnEntryPoint {
  /**
   * The add-on&#39;s required list of supported container types.
   */
  addOnType: string;
  /**
   * The add-on&#39;s optional description.
   */
  description: string;
  /**
   * The add-on&#39;s optional help URL.
   */
  helpUrl: string;
  /**
   * The add-on&#39;s required post install tip URL.
   */
  postInstallTipUrl: string;
  /**
   * The add-on&#39;s optional report issue URL.
   */
  reportIssueUrl: string;
  /**
   * The add-on&#39;s required title.
   */
  title: string;
}
/**
 * API executable entry point configuration.
 */
export interface Schema$GoogleAppsScriptTypeExecutionApiConfig {
  /**
   * Who has permission to run the API executable.
   */
  access: string;
}
/**
 * An API executable entry point.
 */
export interface Schema$GoogleAppsScriptTypeExecutionApiEntryPoint {
  /**
   * The entry point&#39;s configuration.
   */
  entryPointConfig: Schema$GoogleAppsScriptTypeExecutionApiConfig;
}
/**
 * Represents a function in a script project.
 */
export interface Schema$GoogleAppsScriptTypeFunction {
  /**
   * The function name in the script project.
   */
  name: string;
}
/**
 * A set of functions. No duplicates are permitted.
 */
export interface Schema$GoogleAppsScriptTypeFunctionSet {
  /**
   * A list of functions composing the set.
   */
  values: Schema$GoogleAppsScriptTypeFunction[];
}
/**
 * Representation of a single script process execution that was started from the
 * script editor, a trigger, an application, or using the Apps Script API. This
 * is distinct from the `Operation` resource, which only represents exeuctions
 * started via the Apps Script API.
 */
export interface Schema$GoogleAppsScriptTypeProcess {
  /**
   * Duration the execution spent executing.
   */
  duration: string;
  /**
   * User-facing name for the user executing the script.
   */
  executingUser: string;
  /**
   * Name of the function the started the execution.
   */
  functionName: string;
  /**
   * The executions status.
   */
  processStatus: string;
  /**
   * The executions type.
   */
  processType: string;
  /**
   * Name of the script being executed.
   */
  projectName: string;
  /**
   * Time the execution started.
   */
  startTime: string;
  /**
   * The executing users access level to the script.
   */
  userAccessLevel: string;
}
/**
 * Represents an authorization scope.
 */
export interface Schema$GoogleAppsScriptTypeScope {
  /**
   * Who authorized the scope.
   */
  authorizer: string;
  /**
   * The scope&#39;s identifying string.
   */
  name: string;
}
/**
 * A set of scopes. No duplicates are permitted.
 */
export interface Schema$GoogleAppsScriptTypeScopeSet {
  /**
   * List of scope values in the set.
   */
  values: Schema$GoogleAppsScriptTypeScope[];
}
/**
 * A simple user profile resource.
 */
export interface Schema$GoogleAppsScriptTypeUser {
  /**
   * The user&#39;s domain.
   */
  domain: string;
  /**
   * The user&#39;s identifying email address.
   */
  email: string;
  /**
   * The user&#39;s display name.
   */
  name: string;
  /**
   * The user&#39;s photo.
   */
  photoUrl: string;
}
/**
 * Web app entry point configuration.
 */
export interface Schema$GoogleAppsScriptTypeWebAppConfig {
  /**
   * Who has permission to run the web app.
   */
  access: string;
  /**
   * Who to execute the web app as.
   */
  executeAs: string;
}
/**
 * A web application entry point.
 */
export interface Schema$GoogleAppsScriptTypeWebAppEntryPoint {
  /**
   * The entry point&#39;s configuration.
   */
  entryPointConfig: Schema$GoogleAppsScriptTypeWebAppConfig;
  /**
   * The URL for the web application.
   */
  url: string;
}
/**
 * Response with the list of deployments for the specified Apps Script project.
 */
export interface Schema$ListDeploymentsResponse {
  /**
   * The list of deployments.
   */
  deployments: Schema$Deployment[];
  /**
   * The token that can be used in the next call to get the next page of
   * results.
   */
  nextPageToken: string;
}
/**
 * Response with the list of Process resources.
 */
export interface Schema$ListScriptProcessesResponse {
  /**
   * Token for the next page of results. If empty, there are no more pages
   * remaining.
   */
  nextPageToken: string;
  /**
   * List of processes matching request parameters.
   */
  processes: Schema$GoogleAppsScriptTypeProcess[];
}
/**
 * Response with the list of Process resources.
 */
export interface Schema$ListUserProcessesResponse {
  /**
   * Token for the next page of results. If empty, there are no more pages
   * remaining.
   */
  nextPageToken: string;
  /**
   * List of processes matching request parameters.
   */
  processes: Schema$GoogleAppsScriptTypeProcess[];
}
/**
 * Response with the list of the versions for the specified script project.
 */
export interface Schema$ListVersionsResponse {
  /**
   * The token use to fetch the next page of records. if not exist in the
   * response, that means no more versions to list.
   */
  nextPageToken: string;
  /**
   * The list of versions.
   */
  versions: Schema$Version[];
}
/**
 * Resource containing usage stats for a given script, based on the supplied
 * filter and mask present in the request.
 */
export interface Schema$Metrics {
  /**
   * Number of active users.
   */
  activeUsers: Schema$MetricsValue[];
  /**
   * Number of failed executions.
   */
  failedExecutions: Schema$MetricsValue[];
  /**
   * Number of total executions.
   */
  totalExecutions: Schema$MetricsValue[];
}
/**
 * Metrics value that holds number of executions counted.
 */
export interface Schema$MetricsValue {
  /**
   * Required field indicating the end time of the interval.
   */
  endTime: string;
  /**
   * Required field indicating the start time of the interval.
   */
  startTime: string;
  /**
   * Indicates the number of executions counted.
   */
  value: string;
}
/**
 * A representation of a execution of an Apps Script function that is started
 * using run. The execution response does not arrive until the function finishes
 * executing. The maximum execution runtime is listed in the [Apps Script quotas
 * guide](/apps-script/guides/services/quotas#current_limitations).
 * &lt;p&gt;After the execution is started, it can have one of four
 * outcomes:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; If the script function returns
 * successfully, the   response field contains an   ExecutionResponse object
 * with the function&#39;s return value in the object&#39;s `result`
 * field.&lt;/li&gt; &lt;li&gt; If the script function (or Apps Script itself)
 * throws an exception, the   error field contains a   Status object. The
 * `Status` object&#39;s `details`   field contains an array with a single
 * ExecutionError object that   provides information about the nature of the
 * error.&lt;/li&gt; &lt;li&gt; If the execution has not yet completed,   the
 * done field is `false` and   the neither the `response` nor `error` fields are
 * present.&lt;/li&gt; &lt;li&gt; If the `run` call itself fails (for example,
 * because of a   malformed request or an authorization error), the method
 * returns an HTTP   response code in the 4XX range with a different format for
 * the response   body. Client libraries automatically convert a 4XX response
 * into an   exception class.&lt;/li&gt; &lt;/ul&gt;
 */
export interface Schema$Operation {
  /**
   * This field indicates whether the script execution has completed. A
   * completed execution has a populated `response` field containing the
   * ExecutionResponse from function that was executed.
   */
  done: boolean;
  /**
   * If a `run` call succeeds but the script function (or Apps Script itself)
   * throws an exception, this field contains a Status object. The `Status`
   * object&#39;s `details` field contains an array with a single ExecutionError
   * object that provides information about the nature of the error.
   */
  error: Schema$Status;
  /**
   * If the script function returns successfully, this field contains an
   * ExecutionResponse object with the function&#39;s return value.
   */
  response: any;
}
/**
 * The script project resource.
 */
export interface Schema$Project {
  /**
   * When the script was created.
   */
  createTime: string;
  /**
   * User who originally created the script.
   */
  creator: Schema$GoogleAppsScriptTypeUser;
  /**
   * User who last modified the script.
   */
  lastModifyUser: Schema$GoogleAppsScriptTypeUser;
  /**
   * The parent&#39;s Drive ID that the script will be attached to. This is
   * usually the ID of a Google Document or Google Sheet. This filed is
   * optional, and if not set, a stand-alone script will be created.
   */
  parentId: string;
  /**
   * The script project&#39;s Drive ID.
   */
  scriptId: string;
  /**
   * The title for the project.
   */
  title: string;
  /**
   * When the script was last updated.
   */
  updateTime: string;
}
/**
 * A stack trace through the script that shows where the execution failed.
 */
export interface Schema$ScriptStackTraceElement {
  /**
   * The name of the function that failed.
   */
  function: string;
  /**
   * The line number where the script failed.
   */
  lineNumber: number;
}
/**
 * If a `run` call succeeds but the script function (or Apps Script itself)
 * throws an exception, the response body&#39;s error field contains this
 * `Status` object.
 */
export interface Schema$Status {
  /**
   * The status code. For this API, this value either: &lt;ul&gt; &lt;li&gt; 3,
   * indicating an `INVALID_ARGUMENT` error, or&lt;/li&gt; &lt;li&gt; 1,
   * indicating a `CANCELLED` execution.&lt;/li&gt; &lt;/ul&gt;
   */
  code: number;
  /**
   * An array that contains a single ExecutionError object that provides
   * information about the nature of the error.
   */
  details: any[];
  /**
   * A developer-facing error message, which is in English. Any user-facing
   * error message is localized and sent in the
   * [google.rpc.Status.details](google.rpc.Status.details) field, or localized
   * by the client.
   */
  message: string;
}
/**
 * Request with deployment information to update an existing deployment.
 */
export interface Schema$UpdateDeploymentRequest {
  /**
   * The deployment configuration.
   */
  deploymentConfig: Schema$DeploymentConfig;
}
/**
 * A resource representing a script project version. A version is a
 * &quot;snapshot&quot; of a script project and is similar to a read-only
 * branched release. When creating deployments, the version to use must be
 * specified.
 */
export interface Schema$Version {
  /**
   * When the version was created.
   */
  createTime: string;
  /**
   * The description for this version.
   */
  description: string;
  /**
   * The script project&#39;s Drive ID.
   */
  scriptId: string;
  /**
   * The incremental ID that is created by Apps Script when a version is
   * created. This is system assigned number and is immutable once created.
   */
  versionNumber: number;
}

export class Resource$Processes {
  root: Script;
  constructor(root: Script) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * script.processes.list
   * @desc List information about processes made by or on behalf of a user, such
   * as process type and current status.
   * @alias script.processes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
   * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
   * @param {string=} params.userProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
   * @param {string=} params.userProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
   * @param {string=} params.userProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
   * @param {string=} params.userProcessFilter.projectName Optional field used to limit returned processes to those originating from projects with a specific project name.
   * @param {string=} params.userProcessFilter.scriptId Optional field used to limit returned processes to those originating from projects with a specific script ID.
   * @param {string=} params.userProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
   * @param {string=} params.userProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
   * @param {string=} params.userProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
   * @param {string=} params.userProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListUserProcessesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListUserProcessesResponse>,
      callback?: BodyResponseCallback<Schema$ListUserProcessesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListUserProcessesResponse>,
      callback?: BodyResponseCallback<Schema$ListUserProcessesResponse>):
      void|AxiosPromise<Schema$ListUserProcessesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/processes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListUserProcessesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListUserProcessesResponse>(parameters);
    }
  }


  /**
   * script.processes.listScriptProcesses
   * @desc List information about a script's executed processes, such as process
   * type and current status.
   * @alias script.processes.listScriptProcesses
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
   * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
   * @param {string=} params.scriptId The script ID of the project whose processes are listed.
   * @param {string=} params.scriptProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
   * @param {string=} params.scriptProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
   * @param {string=} params.scriptProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
   * @param {string=} params.scriptProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
   * @param {string=} params.scriptProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
   * @param {string=} params.scriptProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
   * @param {string=} params.scriptProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listScriptProcesses(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListScriptProcessesResponse>;
  listScriptProcesses(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListScriptProcessesResponse>,
      callback?: BodyResponseCallback<Schema$ListScriptProcessesResponse>):
      void;
  listScriptProcesses(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListScriptProcessesResponse>,
      callback?: BodyResponseCallback<Schema$ListScriptProcessesResponse>):
      void|AxiosPromise<Schema$ListScriptProcessesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/processes:listScriptProcesses')
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
      createAPIRequest<Schema$ListScriptProcessesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListScriptProcessesResponse>(parameters);
    }
  }
}

export class Resource$Projects {
  root: Script;
  deployments: Resource$Projects$Deployments;
  versions: Resource$Projects$Versions;
  constructor(root: Script) {
    this.root = root;
    this.getRoot.bind(this);
    this.deployments = new Resource$Projects$Deployments(root);
    this.versions = new Resource$Projects$Versions(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * script.projects.create
   * @desc Creates a new, empty script project with no script files and a base
   * manifest file.
   * @alias script.projects.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().CreateProjectRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Project>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>):
      void|AxiosPromise<Schema$Project> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Project>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Project>(parameters);
    }
  }


  /**
   * script.projects.get
   * @desc Gets a script project's metadata.
   * @alias script.projects.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Project>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>):
      void|AxiosPromise<Schema$Project> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Project>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Project>(parameters);
    }
  }


  /**
   * script.projects.getContent
   * @desc Gets the content of the script project, including the code source and
   * metadata for each script file.
   * @alias script.projects.getContent
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {integer=} params.versionNumber The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getContent(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Content>;
  getContent(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Content>,
      callback?: BodyResponseCallback<Schema$Content>): void;
  getContent(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Content>,
      callback?: BodyResponseCallback<Schema$Content>):
      void|AxiosPromise<Schema$Content> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/content')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Content>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Content>(parameters);
    }
  }


  /**
   * script.projects.getMetrics
   * @desc Get metrics data for scripts, such as number of executions and active
   * users.
   * @alias script.projects.getMetrics
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.metricsFilter.deploymentId Optional field indicating a specific deployment to retrieve metrics from.
   * @param {string=} params.metricsGranularity Required field indicating what granularity of metrics are returned.
   * @param {string} params.scriptId Required field indicating the script to get metrics for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getMetrics(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Metrics>;
  getMetrics(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Metrics>,
      callback?: BodyResponseCallback<Schema$Metrics>): void;
  getMetrics(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Metrics>,
      callback?: BodyResponseCallback<Schema$Metrics>):
      void|AxiosPromise<Schema$Metrics> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/metrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Metrics>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Metrics>(parameters);
    }
  }


  /**
   * script.projects.updateContent
   * @desc Updates the content of the specified script project. This content is
   * stored as the HEAD version, and is used when the script is executed as a
   * trigger, in the script editor, in add-on preview mode, or as a web app or
   * Apps Script API in development mode. This clears all the existing files in
   * the project.
   * @alias script.projects.updateContent
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {().Content} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updateContent(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Content>;
  updateContent(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Content>,
      callback?: BodyResponseCallback<Schema$Content>): void;
  updateContent(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Content>,
      callback?: BodyResponseCallback<Schema$Content>):
      void|AxiosPromise<Schema$Content> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/content')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Content>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Content>(parameters);
    }
  }
}
export class Resource$Projects$Deployments {
  root: Script;
  constructor(root: Script) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * script.projects.deployments.create
   * @desc Creates a deployment of an Apps Script project.
   * @alias script.projects.deployments.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {().DeploymentConfig} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Deployment>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>):
      void|AxiosPromise<Schema$Deployment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Deployment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Deployment>(parameters);
    }
  }


  /**
   * script.projects.deployments.delete
   * @desc Deletes a deployment of an Apps Script project.
   * @alias script.projects.deployments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deploymentId The deployment ID to be undeployed.
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/projects/{scriptId}/deployments/{deploymentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['scriptId', 'deploymentId'],
      pathParams: ['deploymentId', 'scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * script.projects.deployments.get
   * @desc Gets a deployment of an Apps Script project.
   * @alias script.projects.deployments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deploymentId The deployment ID.
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Deployment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>):
      void|AxiosPromise<Schema$Deployment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/projects/{scriptId}/deployments/{deploymentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId', 'deploymentId'],
      pathParams: ['deploymentId', 'scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Deployment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Deployment>(parameters);
    }
  }


  /**
   * script.projects.deployments.list
   * @desc Lists the deployments of an Apps Script project.
   * @alias script.projects.deployments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize The maximum number of deployments on each returned page. Defaults to 50.
   * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDeploymentsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDeploymentsResponse>,
      callback?: BodyResponseCallback<Schema$ListDeploymentsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDeploymentsResponse>,
      callback?: BodyResponseCallback<Schema$ListDeploymentsResponse>):
      void|AxiosPromise<Schema$ListDeploymentsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDeploymentsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDeploymentsResponse>(parameters);
    }
  }


  /**
   * script.projects.deployments.update
   * @desc Updates a deployment of an Apps Script project.
   * @alias script.projects.deployments.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deploymentId The deployment ID for this deployment.
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {().UpdateDeploymentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Deployment>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>):
      void|AxiosPromise<Schema$Deployment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/projects/{scriptId}/deployments/{deploymentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['scriptId', 'deploymentId'],
      pathParams: ['deploymentId', 'scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Deployment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Deployment>(parameters);
    }
  }
}

export class Resource$Projects$Versions {
  root: Script;
  constructor(root: Script) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * script.projects.versions.create
   * @desc Creates a new immutable version using the current code, with a unique
   * version number.
   * @alias script.projects.versions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {().Version} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Version>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Version>,
      callback?: BodyResponseCallback<Schema$Version>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Version>,
      callback?: BodyResponseCallback<Schema$Version>):
      void|AxiosPromise<Schema$Version> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/versions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Version>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Version>(parameters);
    }
  }


  /**
   * script.projects.versions.get
   * @desc Gets a version of a script project.
   * @alias script.projects.versions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {integer} params.versionNumber The version number.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Version>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Version>,
      callback?: BodyResponseCallback<Schema$Version>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Version>,
      callback?: BodyResponseCallback<Schema$Version>):
      void|AxiosPromise<Schema$Version> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/versions/{versionNumber}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId', 'versionNumber'],
      pathParams: ['scriptId', 'versionNumber'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Version>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Version>(parameters);
    }
  }


  /**
   * script.projects.versions.list
   * @desc List the versions of a script project.
   * @alias script.projects.versions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize The maximum number of versions on each returned page. Defaults to 50.
   * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
   * @param {string} params.scriptId The script project's Drive ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListVersionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListVersionsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListVersionsResponse>):
      void|AxiosPromise<Schema$ListVersionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{scriptId}/versions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListVersionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListVersionsResponse>(parameters);
    }
  }
}


export class Resource$Scripts {
  root: Script;
  constructor(root: Script) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * script.scripts.run
   * @desc Runs a function in an Apps Script project. The project must be
   * deployed for use with the Apps Script API.  This method requires
   * authorization with an OAuth 2.0 token that includes at least one of the
   * scopes listed in the [Authorization](#authorization) section; script
   * projects that do not require authorization cannot be executed through this
   * API. To find the correct scopes to include in the authentication token,
   * open the project in the script editor, then select **File > Project
   * properties** and click the **Scopes** tab.
   * @alias script.scripts.run
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.scriptId The script ID of the script to be executed. To find the script ID, open the project in the script editor and select **File > Project properties**.
   * @param {().ExecutionRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  run(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  run(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  run(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/scripts/{scriptId}:run')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['scriptId'],
      pathParams: ['scriptId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
}
