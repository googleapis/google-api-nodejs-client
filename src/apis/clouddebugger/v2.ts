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
 * Stackdriver Debugger API
 *
 * Examines the call stack and variables of a running application without
 * stopping or slowing it down.
 *
 * @example
 * const google = require('googleapis');
 * const clouddebugger = google.clouddebugger('v2');
 *
 * @namespace clouddebugger
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Clouddebugger
 */
export class Clouddebugger {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  controller: Resource$Controller;
  debugger: Resource$Debugger;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.controller = new Resource$Controller(this);
    this.debugger = new Resource$Debugger(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * An alias to a repo revision.
 */
export interface Schema$AliasContext {
  /**
   * The alias kind.
   */
  kind: string;
  /**
   * The alias name.
   */
  name: string;
}
/**
 * Represents the breakpoint specification, status and results.
 */
export interface Schema$Breakpoint {
  /**
   * Action that the agent should perform when the code at the breakpoint
   * location is hit.
   */
  action: string;
  /**
   * Condition that triggers the breakpoint. The condition is a compound boolean
   * expression composed using expressions in a programming language at the
   * source location.
   */
  condition: string;
  /**
   * Time this breakpoint was created by the server in seconds resolution.
   */
  createTime: string;
  /**
   * Values of evaluated expressions at breakpoint time. The evaluated
   * expressions appear in exactly the same order they are listed in the
   * `expressions` field. The `name` field holds the original expression text,
   * the `value` or `members` field holds the result of the evaluated
   * expression. If the expression cannot be evaluated, the `status` inside the
   * `Variable` will indicate an error and contain the error text.
   */
  evaluatedExpressions: Schema$Variable[];
  /**
   * List of read-only expressions to evaluate at the breakpoint location. The
   * expressions are composed using expressions in the programming language at
   * the source location. If the breakpoint action is `LOG`, the evaluated
   * expressions are included in log statements.
   */
  expressions: string[];
  /**
   * Time this breakpoint was finalized as seen by the server in seconds
   * resolution.
   */
  finalTime: string;
  /**
   * Breakpoint identifier, unique in the scope of the debuggee.
   */
  id: string;
  /**
   * When true, indicates that this is a final result and the breakpoint state
   * will not change from here on.
   */
  isFinalState: boolean;
  /**
   * A set of custom breakpoint properties, populated by the agent, to be
   * displayed to the user.
   */
  labels: any;
  /**
   * Breakpoint source location.
   */
  location: Schema$SourceLocation;
  /**
   * Indicates the severity of the log. Only relevant when action is `LOG`.
   */
  logLevel: string;
  /**
   * Only relevant when action is `LOG`. Defines the message to log when the
   * breakpoint hits. The message may include parameter placeholders `$0`, `$1`,
   * etc. These placeholders are replaced with the evaluated value of the
   * appropriate expression. Expressions not referenced in `log_message_format`
   * are not logged.  Example: `Message received, id = $0, count = $1` with
   * `expressions` = `[ message.id, message.count ]`.
   */
  logMessageFormat: string;
  /**
   * The stack at breakpoint time.
   */
  stackFrames: Schema$StackFrame[];
  /**
   * Breakpoint status.  The status includes an error flag and a human readable
   * message. This field is usually unset. The message can be either
   * informational or an error message. Regardless, clients should always
   * display the text message back to the user.  Error status indicates complete
   * failure of the breakpoint.  Example (non-final state): `Still loading
   * symbols...`  Examples (final state):  *   `Invalid line number` referring
   * to location *   `Field f not found in class C` referring to condition
   */
  status: Schema$StatusMessage;
  /**
   * E-mail address of the user that created this breakpoint
   */
  userEmail: string;
  /**
   * The `variable_table` exists to aid with computation, memory and network
   * traffic optimization.  It enables storing a variable once and reference it
   * from multiple variables, including variables stored in the `variable_table`
   * itself. For example, the same `this` object, which may appear at many
   * levels of the stack, can have all of its data stored once in this table.
   * The stack frame variables then would hold only a reference to it.  The
   * variable `var_table_index` field is an index into this repeated field. The
   * stored objects are nameless and get their name from the referencing
   * variable. The effective variable is a merge of the referencing variable and
   * the referenced variable.
   */
  variableTable: Schema$Variable[];
}
/**
 * A CloudRepoSourceContext denotes a particular revision in a cloud repo (a
 * repo hosted by the Google Cloud Platform).
 */
export interface Schema$CloudRepoSourceContext {
  /**
   * An alias, which may be a branch or tag.
   */
  aliasContext: Schema$AliasContext;
  /**
   * The name of an alias (branch, tag, etc.).
   */
  aliasName: string;
  /**
   * The ID of the repo.
   */
  repoId: Schema$RepoId;
  /**
   * A revision ID.
   */
  revisionId: string;
}
/**
 * A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud
 * workspace is a place associated with a repo where modified files can be
 * stored before they are committed.
 */
export interface Schema$CloudWorkspaceId {
  /**
   * The unique name of the workspace within the repo.  This is the name chosen
   * by the client in the Source API&#39;s CreateWorkspace method.
   */
  name: string;
  /**
   * The ID of the repo containing the workspace.
   */
  repoId: Schema$RepoId;
}
/**
 * A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
 */
export interface Schema$CloudWorkspaceSourceContext {
  /**
   * The ID of the snapshot. An empty snapshot_id refers to the most recent
   * snapshot.
   */
  snapshotId: string;
  /**
   * The ID of the workspace.
   */
  workspaceId: Schema$CloudWorkspaceId;
}
/**
 * Represents the debugged application. The application may include one or more
 * replicated processes executing the same code. Each of these processes is
 * attached with a debugger agent, carrying out the debugging commands. Agents
 * attached to the same debuggee identify themselves as such by using exactly
 * the same Debuggee message value when registering.
 */
export interface Schema$Debuggee {
  /**
   * Version ID of the agent. Schema: `domain/language-platform/vmajor.minor`
   * (for example `google.com/java-gcp/v1.1`).
   */
  agentVersion: string;
  /**
   * Human readable description of the debuggee. Including a human-readable
   * project name, environment name and version information is recommended.
   */
  description: string;
  /**
   * References to the locations and revisions of the source code used in the
   * deployed application.
   */
  extSourceContexts: Schema$ExtendedSourceContext[];
  /**
   * Unique identifier for the debuggee generated by the controller service.
   */
  id: string;
  /**
   * If set to `true`, indicates that the agent should disable itself and detach
   * from the debuggee.
   */
  isDisabled: boolean;
  /**
   * If set to `true`, indicates that Controller service does not detect any
   * activity from the debuggee agents and the application is possibly stopped.
   */
  isInactive: boolean;
  /**
   * A set of custom debuggee properties, populated by the agent, to be
   * displayed to the user.
   */
  labels: any;
  /**
   * Project the debuggee is associated with. Use project number or id when
   * registering a Google Cloud Platform project.
   */
  project: string;
  /**
   * References to the locations and revisions of the source code used in the
   * deployed application.
   */
  sourceContexts: Schema$SourceContext[];
  /**
   * Human readable message to be displayed to the user about this debuggee.
   * Absence of this field indicates no status. The message can be either
   * informational or an error status.
   */
  status: Schema$StatusMessage;
  /**
   * Uniquifier to further distiguish the application. It is possible that
   * different applications might have identical values in the debuggee message,
   * thus, incorrectly identified as a single application by the Controller
   * service. This field adds salt to further distiguish the application. Agents
   * should consider seeding this field with value that identifies the code,
   * binary, configuration and environment.
   */
  uniquifier: string;
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
 * An ExtendedSourceContext is a SourceContext combined with additional details
 * describing the context.
 */
export interface Schema$ExtendedSourceContext {
  /**
   * Any source context.
   */
  context: Schema$SourceContext;
  /**
   * Labels with user defined metadata.
   */
  labels: any;
}
/**
 * Represents a message with parameters.
 */
export interface Schema$FormatMessage {
  /**
   * Format template for the message. The `format` uses placeholders `$0`, `$1`,
   * etc. to reference parameters. `$$` can be used to denote the `$` character.
   * Examples:  *   `Failed to load &#39;$0&#39; which helps debug $1 the first
   * time it     is loaded.  Again, $0 is very important.` *   `Please pay $$10
   * to use $0 instead of $1.`
   */
  format: string;
  /**
   * Optional parameters to be embedded into the message.
   */
  parameters: string[];
}
/**
 * A SourceContext referring to a Gerrit project.
 */
export interface Schema$GerritSourceContext {
  /**
   * An alias, which may be a branch or tag.
   */
  aliasContext: Schema$AliasContext;
  /**
   * The name of an alias (branch, tag, etc.).
   */
  aliasName: string;
  /**
   * The full project name within the host. Projects may be nested, so
   * &quot;project/subproject&quot; is a valid project name. The &quot;repo
   * name&quot; is hostURI/project.
   */
  gerritProject: string;
  /**
   * The URI of a running Gerrit instance.
   */
  hostUri: string;
  /**
   * A revision (commit) ID.
   */
  revisionId: string;
}
/**
 * Response for getting breakpoint information.
 */
export interface Schema$GetBreakpointResponse {
  /**
   * Complete breakpoint state. The fields `id` and `location` are guaranteed to
   * be set.
   */
  breakpoint: Schema$Breakpoint;
}
/**
 * A GitSourceContext denotes a particular revision in a third party Git
 * repository (e.g. GitHub).
 */
export interface Schema$GitSourceContext {
  /**
   * Git commit hash. required.
   */
  revisionId: string;
  /**
   * Git repository URL.
   */
  url: string;
}
/**
 * Response for listing active breakpoints.
 */
export interface Schema$ListActiveBreakpointsResponse {
  /**
   * List of all active breakpoints. The fields `id` and `location` are
   * guaranteed to be set on each breakpoint.
   */
  breakpoints: Schema$Breakpoint[];
  /**
   * A token that can be used in the next method call to block until the list of
   * breakpoints changes.
   */
  nextWaitToken: string;
  /**
   * If set to `true`, indicates that there is no change to the list of active
   * breakpoints and the server-selected timeout has expired. The `breakpoints`
   * field would be empty and should be ignored.
   */
  waitExpired: boolean;
}
/**
 * Response for listing breakpoints.
 */
export interface Schema$ListBreakpointsResponse {
  /**
   * List of breakpoints matching the request. The fields `id` and `location`
   * are guaranteed to be set on each breakpoint. The fields: `stack_frames`,
   * `evaluated_expressions` and `variable_table` are cleared on each breakpoint
   * regardless of its status.
   */
  breakpoints: Schema$Breakpoint[];
  /**
   * A wait token that can be used in the next call to `list` (REST) or
   * `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.
   */
  nextWaitToken: string;
}
/**
 * Response for listing debuggees.
 */
export interface Schema$ListDebuggeesResponse {
  /**
   * List of debuggees accessible to the calling user. The fields `debuggee.id`
   * and `description` are guaranteed to be set. The `description` field is a
   * human readable field provided by agents and can be displayed to users.
   */
  debuggees: Schema$Debuggee[];
}
/**
 * Selects a repo using a Google Cloud Platform project ID (e.g.
 * winged-cargo-31) and a repo name within that project.
 */
export interface Schema$ProjectRepoId {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The name of the repo. Leave empty for the default repo.
   */
  repoName: string;
}
/**
 * Request to register a debuggee.
 */
export interface Schema$RegisterDebuggeeRequest {
  /**
   * Debuggee information to register. The fields `project`, `uniquifier`,
   * `description` and `agent_version` of the debuggee must be set.
   */
  debuggee: Schema$Debuggee;
}
/**
 * Response for registering a debuggee.
 */
export interface Schema$RegisterDebuggeeResponse {
  /**
   * Debuggee resource. The field `id` is guranteed to be set (in addition to
   * the echoed fields). If the field `is_disabled` is set to `true`, the agent
   * should disable itself by removing all breakpoints and detaching from the
   * application. It should however continue to poll `RegisterDebuggee` until
   * reenabled.
   */
  debuggee: Schema$Debuggee;
}
/**
 * A unique identifier for a cloud repo.
 */
export interface Schema$RepoId {
  /**
   * A combination of a project ID and a repo name.
   */
  projectRepoId: Schema$ProjectRepoId;
  /**
   * A server-assigned, globally unique identifier.
   */
  uid: string;
}
/**
 * Response for setting a breakpoint.
 */
export interface Schema$SetBreakpointResponse {
  /**
   * Breakpoint resource. The field `id` is guaranteed to be set (in addition to
   * the echoed fileds).
   */
  breakpoint: Schema$Breakpoint;
}
/**
 * A SourceContext is a reference to a tree of files. A SourceContext together
 * with a path point to a unique revision of a single file or directory.
 */
export interface Schema$SourceContext {
  /**
   * A SourceContext referring to a revision in a cloud repo.
   */
  cloudRepo: Schema$CloudRepoSourceContext;
  /**
   * A SourceContext referring to a snapshot in a cloud workspace.
   */
  cloudWorkspace: Schema$CloudWorkspaceSourceContext;
  /**
   * A SourceContext referring to a Gerrit project.
   */
  gerrit: Schema$GerritSourceContext;
  /**
   * A SourceContext referring to any third party Git repo (e.g. GitHub).
   */
  git: Schema$GitSourceContext;
}
/**
 * Represents a location in the source code.
 */
export interface Schema$SourceLocation {
  /**
   * Line inside the file. The first line in the file has the value `1`.
   */
  line: number;
  /**
   * Path to the source file within the source context of the target binary.
   */
  path: string;
}
/**
 * Represents a stack frame context.
 */
export interface Schema$StackFrame {
  /**
   * Set of arguments passed to this function. Note that this might not be
   * populated for all stack frames.
   */
  arguments: Schema$Variable[];
  /**
   * Demangled function name at the call site.
   */
  function: string;
  /**
   * Set of local variables at the stack frame location. Note that this might
   * not be populated for all stack frames.
   */
  locals: Schema$Variable[];
  /**
   * Source location of the call site.
   */
  location: Schema$SourceLocation;
}
/**
 * Represents a contextual status message. The message can indicate an error or
 * informational status, and refer to specific parts of the containing object.
 * For example, the `Breakpoint.status` field can indicate an error referring to
 * the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
 */
export interface Schema$StatusMessage {
  /**
   * Status message text.
   */
  description: Schema$FormatMessage;
  /**
   * Distinguishes errors from informational messages.
   */
  isError: boolean;
  /**
   * Reference to which the message applies.
   */
  refersTo: string;
}
/**
 * Request to update an active breakpoint.
 */
export interface Schema$UpdateActiveBreakpointRequest {
  /**
   * Updated breakpoint information. The field `id` must be set. The agent must
   * echo all Breakpoint specification fields in the update.
   */
  breakpoint: Schema$Breakpoint;
}
/**
 * Response for updating an active breakpoint. The message is defined to allow
 * future extensions.
 */
export interface Schema$UpdateActiveBreakpointResponse {}
/**
 * Represents a variable or an argument possibly of a compound object type. Note
 * how the following variables are represented:  1) A simple variable:      int
 * x = 5      { name: &quot;x&quot;, value: &quot;5&quot;, type: &quot;int&quot;
 * }  // Captured variable  2) A compound object:      struct T {         int
 * m1;         int m2;     };     T x = { 3, 7 };      {  // Captured variable
 * name: &quot;x&quot;,         type: &quot;T&quot;,         members { name:
 * &quot;m1&quot;, value: &quot;3&quot;, type: &quot;int&quot; }, members {
 * name: &quot;m2&quot;, value: &quot;7&quot;, type: &quot;int&quot; }     }  3)
 * A pointer where the pointee was captured:      T x = { 3, 7 };     T* p =
 * &amp;x;      {   // Captured variable         name: &quot;p&quot;, type:
 * &quot;T*&quot;,         value: &quot;0x00500500&quot;,         members {
 * name: &quot;m1&quot;, value: &quot;3&quot;, type: &quot;int&quot; }, members
 * { name: &quot;m2&quot;, value: &quot;7&quot;, type: &quot;int&quot; }     }
 * 4) A pointer where the pointee was not captured:      T* p = new T;      { //
 * Captured variable         name: &quot;p&quot;,         type: &quot;T*&quot;,
 * value: &quot;0x00400400&quot;         status { is_error: true, description {
 * format: &quot;unavailable&quot; } }     }  The status should describe the
 * reason for the missing value, such as `&lt;optimized out&gt;`,
 * `&lt;inaccessible&gt;`, `&lt;pointers limit reached&gt;`.  Note that a null
 * pointer should not have members.  5) An unnamed value:      int* p = new
 * int(7);      {   // Captured variable         name: &quot;p&quot;, value:
 * &quot;0x00500500&quot;,         type: &quot;int*&quot;,         members {
 * value: &quot;7&quot;, type: &quot;int&quot; } }  6) An unnamed pointer where
 * the pointee was not captured:      int* p = new int(7);     int** pp =
 * &amp;p;      {  // Captured variable         name: &quot;pp&quot;, value:
 * &quot;0x00500500&quot;,         type: &quot;int**&quot;,         members {
 * value: &quot;0x00400400&quot;,             type: &quot;int*&quot; status {
 * is_error: true,                 description: { format:
 * &quot;unavailable&quot; } }             }         }     }  To optimize
 * computation, memory and network traffic, variables that repeat in the output
 * multiple times can be stored once in a shared variable table and be
 * referenced using the `var_table_index` field.  The variables stored in the
 * shared table are nameless and are essentially a partition of the complete
 * variable. To reconstruct the complete variable, merge the referencing
 * variable with the referenced variable.  When using the shared variable table,
 * the following variables:      T x = { 3, 7 };     T* p = &amp;x;     T&amp; r
 * = x;      { name: &quot;x&quot;, var_table_index: 3, type: &quot;T&quot; } //
 * Captured variables     { name: &quot;p&quot;, value &quot;0x00500500&quot;,
 * type=&quot;T*&quot;, var_table_index: 3 }     { name: &quot;r&quot;,
 * type=&quot;T&amp;&quot;, var_table_index: 3 }      {  // Shared variable
 * table entry #3:         members { name: &quot;m1&quot;, value: &quot;3&quot;,
 * type: &quot;int&quot; },         members { name: &quot;m2&quot;, value:
 * &quot;7&quot;, type: &quot;int&quot; }     }  Note that the pointer address
 * is stored with the referencing variable and not with the referenced variable.
 * This allows the referenced variable to be shared between pointers and
 * references.  The type field is optional. The debugger agent may or may not
 * support it.
 */
export interface Schema$Variable {
  /**
   * Members contained or pointed to by the variable.
   */
  members: Schema$Variable[];
  /**
   * Name of the variable, if any.
   */
  name: string;
  /**
   * Status associated with the variable. This field will usually stay unset. A
   * status of a single variable only applies to that variable or expression.
   * The rest of breakpoint data still remains valid. Variables might be
   * reported in error state even when breakpoint is not in final state.  The
   * message may refer to variable name with `refers_to` set to `VARIABLE_NAME`.
   * Alternatively `refers_to` will be set to `VARIABLE_VALUE`. In either case
   * variable value and members will be unset.  Example of error message applied
   * to name: `Invalid expression syntax`.  Example of information message
   * applied to value: `Not captured`.  Examples of error message applied to
   * value:  *   `Malformed string`, *   `Field f not found in class C` * `Null
   * pointer dereference`
   */
  status: Schema$StatusMessage;
  /**
   * Variable type (e.g. `MyClass`). If the variable is split with
   * `var_table_index`, `type` goes next to `value`. The interpretation of a
   * type is agent specific. It is recommended to include the dynamic type
   * rather than a static type of an object.
   */
  type: string;
  /**
   * Simple value of the variable.
   */
  value: string;
  /**
   * Reference to a variable in the shared variable table. More than one
   * variable can reference the same variable in the table. The
   * `var_table_index` field is an index into `variable_table` in Breakpoint.
   */
  varTableIndex: number;
}

export class Resource$Controller {
  root: Clouddebugger;
  debuggees: Resource$Controller$Debuggees;
  constructor(root: Clouddebugger) {
    this.root = root;
    this.getRoot.bind(this);
    this.debuggees = new Resource$Controller$Debuggees(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Controller$Debuggees {
  root: Clouddebugger;
  breakpoints: Resource$Controller$Debuggees$Breakpoints;
  constructor(root: Clouddebugger) {
    this.root = root;
    this.getRoot.bind(this);
    this.breakpoints = new Resource$Controller$Debuggees$Breakpoints(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * clouddebugger.controller.debuggees.register
   * @desc Registers the debuggee with the controller service.  All agents
   * attached to the same application must call this method with exactly the
   * same request content to get back the same stable `debuggee_id`. Agents
   * should call this method again whenever `google.rpc.Code.NOT_FOUND` is
   * returned from any controller method.  This protocol allows the controller
   * service to disable debuggees, recover from data loss, or change the
   * `debuggee_id` format. Agents must handle `debuggee_id` value changing upon
   * re-registration.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.controller.debuggees.register(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.controller.debuggees.register
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().RegisterDebuggeeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  register(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RegisterDebuggeeResponse>;
  register(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RegisterDebuggeeResponse>,
      callback?: BodyResponseCallback<Schema$RegisterDebuggeeResponse>): void;
  register(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RegisterDebuggeeResponse>,
      callback?: BodyResponseCallback<Schema$RegisterDebuggeeResponse>):
      void|AxiosPromise<Schema$RegisterDebuggeeResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/controller/debuggees/register')
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
      createAPIRequest<Schema$RegisterDebuggeeResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RegisterDebuggeeResponse>(parameters);
    }
  }
}
export class Resource$Controller$Debuggees$Breakpoints {
  root: Clouddebugger;
  constructor(root: Clouddebugger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * clouddebugger.controller.debuggees.breakpoints.list
   * @desc Returns the list of all active breakpoints for the debuggee.  The
   * breakpoint specification (`location`, `condition`, and `expressions`
   * fields) is semantically immutable, although the field values may change.
   * For example, an agent may update the location line number to reflect the
   * actual line where the breakpoint was set, but this doesn't change the
   * breakpoint semantics.  This means that an agent does not need to check if a
   * breakpoint has changed when it encounters the same breakpoint on a
   * successive call. Moreover, an agent should remember the breakpoints that
   * are completed until the controller removes them from the active list to
   * avoid setting those breakpoints again.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the debuggee.
   *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.controller.debuggees.breakpoints.list(request,
   * function(err, response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.controller.debuggees.breakpoints.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.debuggeeId Identifies the debuggee.
   * @param {boolean=} params.successOnTimeout If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired.  If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.
   * @param {string=} params.waitToken A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListActiveBreakpointsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListActiveBreakpointsResponse>,
      callback?: BodyResponseCallback<Schema$ListActiveBreakpointsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListActiveBreakpointsResponse>,
      callback?: BodyResponseCallback<Schema$ListActiveBreakpointsResponse>):
      void|AxiosPromise<Schema$ListActiveBreakpointsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/controller/debuggees/{debuggeeId}/breakpoints')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['debuggeeId'],
      pathParams: ['debuggeeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListActiveBreakpointsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListActiveBreakpointsResponse>(parameters);
    }
  }


  /**
   * clouddebugger.controller.debuggees.breakpoints.update
   * @desc Updates the breakpoint state or mutable fields. The entire Breakpoint
   * message must be sent back to the controller service.  Updates to active
   * breakpoint fields are only allowed if the new value does not change the
   * breakpoint specification. Updates to the `location`, `condition` and
   * `expressions` fields should not alter the breakpoint semantics. These may
   * only make changes such as canonicalizing a value or snapping the location
   * to the correct line of code.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the debuggee being debugged.
   *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
   *
   *     // Breakpoint identifier, unique in the scope of the debuggee.
   *     id: 'my-id',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.controller.debuggees.breakpoints.update(request,
   * function(err, response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.controller.debuggees.breakpoints.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.debuggeeId Identifies the debuggee being debugged.
   * @param {string} params.id Breakpoint identifier, unique in the scope of the debuggee.
   * @param {().UpdateActiveBreakpointRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UpdateActiveBreakpointResponse>;
  update(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$UpdateActiveBreakpointResponse>,
      callback?: BodyResponseCallback<Schema$UpdateActiveBreakpointResponse>):
      void;
  update(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$UpdateActiveBreakpointResponse>,
      callback?: BodyResponseCallback<Schema$UpdateActiveBreakpointResponse>):
      void|AxiosPromise<Schema$UpdateActiveBreakpointResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2/controller/debuggees/{debuggeeId}/breakpoints/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['debuggeeId', 'id'],
      pathParams: ['debuggeeId', 'id'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UpdateActiveBreakpointResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$UpdateActiveBreakpointResponse>(
          parameters);
    }
  }
}



export class Resource$Debugger {
  root: Clouddebugger;
  debuggees: Resource$Debugger$Debuggees;
  constructor(root: Clouddebugger) {
    this.root = root;
    this.getRoot.bind(this);
    this.debuggees = new Resource$Debugger$Debuggees(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Debugger$Debuggees {
  root: Clouddebugger;
  breakpoints: Resource$Debugger$Debuggees$Breakpoints;
  constructor(root: Clouddebugger) {
    this.root = root;
    this.getRoot.bind(this);
    this.breakpoints = new Resource$Debugger$Debuggees$Breakpoints(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * clouddebugger.debugger.debuggees.list
   * @desc Lists all the debuggees that the user has access to.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.debugger.debuggees.list(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.debugger.debuggees.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
   * @param {boolean=} params.includeInactive When set to `true`, the result includes all debuggees. Otherwise, the result includes only debuggees that are active.
   * @param {string=} params.project Project number of a Google Cloud project whose debuggees to list.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDebuggeesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDebuggeesResponse>,
      callback?: BodyResponseCallback<Schema$ListDebuggeesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDebuggeesResponse>,
      callback?: BodyResponseCallback<Schema$ListDebuggeesResponse>):
      void|AxiosPromise<Schema$ListDebuggeesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/debugger/debuggees')
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
      createAPIRequest<Schema$ListDebuggeesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDebuggeesResponse>(parameters);
    }
  }
}
export class Resource$Debugger$Debuggees$Breakpoints {
  root: Clouddebugger;
  constructor(root: Clouddebugger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * clouddebugger.debugger.debuggees.breakpoints.delete
   * @desc Deletes the breakpoint from the debuggee.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // ID of the debuggee whose breakpoint to delete.
   *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
   *
   *     // ID of the breakpoint to delete.
   *     breakpointId: 'my-breakpoint-id',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.debugger.debuggees.breakpoints.delete(request,
   * function(err) { if (err) { console.error(err); return;
   *     }
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.debugger.debuggees.breakpoints.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.breakpointId ID of the breakpoint to delete.
   * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
   * @param {string} params.debuggeeId ID of the debuggee whose breakpoint to delete.
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
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['debuggeeId', 'breakpointId'],
      pathParams: ['breakpointId', 'debuggeeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * clouddebugger.debugger.debuggees.breakpoints.get
   * @desc Gets breakpoint information.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // ID of the debuggee whose breakpoint to get.
   *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
   *
   *     // ID of the breakpoint to get.
   *     breakpointId: 'my-breakpoint-id',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.debugger.debuggees.breakpoints.get(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.debugger.debuggees.breakpoints.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.breakpointId ID of the breakpoint to get.
   * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
   * @param {string} params.debuggeeId ID of the debuggee whose breakpoint to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GetBreakpointResponse>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetBreakpointResponse>,
      callback?: BodyResponseCallback<Schema$GetBreakpointResponse>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetBreakpointResponse>,
      callback?: BodyResponseCallback<Schema$GetBreakpointResponse>):
      void|AxiosPromise<Schema$GetBreakpointResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['debuggeeId', 'breakpointId'],
      pathParams: ['breakpointId', 'debuggeeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetBreakpointResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetBreakpointResponse>(parameters);
    }
  }


  /**
   * clouddebugger.debugger.debuggees.breakpoints.list
   * @desc Lists all breakpoints for the debuggee.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // ID of the debuggee whose breakpoints to list.
   *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.debugger.debuggees.breakpoints.list(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.debugger.debuggees.breakpoints.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.action.value Only breakpoints with the specified action will pass the filter.
   * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
   * @param {string} params.debuggeeId ID of the debuggee whose breakpoints to list.
   * @param {boolean=} params.includeAllUsers When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller.
   * @param {boolean=} params.includeInactive When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints.
   * @param {boolean=} params.stripResults This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
   * @param {string=} params.waitToken A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired.  The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBreakpointsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBreakpointsResponse>,
      callback?: BodyResponseCallback<Schema$ListBreakpointsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBreakpointsResponse>,
      callback?: BodyResponseCallback<Schema$ListBreakpointsResponse>):
      void|AxiosPromise<Schema$ListBreakpointsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['debuggeeId'],
      pathParams: ['debuggeeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBreakpointsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBreakpointsResponse>(parameters);
    }
  }


  /**
   * clouddebugger.debugger.debuggees.breakpoints.set
   * @desc Sets the breakpoint to the debuggee.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Debugger API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/clouddebugger
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var cloudDebugger = google.clouddebugger('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // ID of the debuggee where the breakpoint is to be set.
   *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudDebugger.debugger.debuggees.breakpoints.set(request, function(err,
   * response) { if (err) { console.error(err); return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias clouddebugger.debugger.debuggees.breakpoints.set
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
   * @param {string} params.debuggeeId ID of the debuggee where the breakpoint is to be set.
   * @param {().Breakpoint} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  set(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$SetBreakpointResponse>;
  set(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SetBreakpointResponse>,
      callback?: BodyResponseCallback<Schema$SetBreakpointResponse>): void;
  set(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SetBreakpointResponse>,
      callback?: BodyResponseCallback<Schema$SetBreakpointResponse>):
      void|AxiosPromise<Schema$SetBreakpointResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v2/debugger/debuggees/{debuggeeId}/breakpoints/set')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['debuggeeId'],
      pathParams: ['debuggeeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SetBreakpointResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SetBreakpointResponse>(parameters);
    }
  }
}
