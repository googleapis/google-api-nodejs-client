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
 * Tag Manager API
 *
 * Accesses Tag Manager accounts and containers.
 *
 * @example
 * const google = require('googleapis');
 * const tagmanager = google.tagmanager('v2');
 *
 * @namespace tagmanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Tagmanager
 */
export class Tagmanager {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.accounts = new Resource$Accounts(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Represents a Google Tag Manager Account.
 */
export interface Schema$Account {
  /**
   * The Account ID uniquely identifies the GTM Account.
   */
  accountId: string;
  /**
   * The fingerprint of the GTM Account as computed at storage time. This value
   * is recomputed whenever the account is modified.
   */
  fingerprint: string;
  /**
   * Account display name.
   */
  name: string;
  /**
   * GTM Account&#39;s API relative path.
   */
  path: string;
  /**
   * Whether the account shares data anonymously with Google and others. This
   * flag enables benchmarking by sharing your data in an anonymous form. Google
   * will remove all identifiable information about your website, combine the
   * data with hundreds of other anonymous sites and report aggregate trends in
   * the benchmarking service.
   */
  shareData: boolean;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
}
/**
 * Defines the Google Tag Manager Account access permissions.
 */
export interface Schema$AccountAccess {
  /**
   * Whether the user has no access, user access, or admin access to an account.
   */
  permission: string;
}
/**
 * Built-in variables are a special category of variables that are pre-created
 * and non-customizable. They provide common functionality like accessing
 * propeties of the gtm data layer, monitoring clicks, or accessing elements of
 * a page URL.
 */
export interface Schema$BuiltInVariable {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * Name of the built-in variable to be used to refer to the built-in variable.
   */
  name: string;
  /**
   * GTM BuiltInVariable&#39;s API relative path.
   */
  path: string;
  /**
   * Type of built-in variable.
   */
  type: string;
  /**
   * GTM Workspace ID.
   */
  workspaceId: string;
}
/**
 * Represents a predicate.
 */
export interface Schema$Condition {
  /**
   * A list of named parameters (key/value), depending on the condition&#39;s
   * type. Notes:  - For binary operators, include parameters named arg0 and
   * arg1 for specifying the left and right operands, respectively.  - At this
   * time, the left operand (arg0) must be a reference to a variable.  - For
   * case-insensitive Regex matching, include a boolean parameter named
   * ignore_case that is set to true. If not specified or set to any other
   * value, the matching will be case sensitive.  - To negate an operator,
   * include a boolean parameter named negate boolean parameter that is set to
   * true.
   */
  parameter: Schema$Parameter[];
  /**
   * The type of operator for this condition.
   */
  type: string;
}
/**
 * Represents a Google Tag Manager Container, which specifies the platform tags
 * will run on, manages workspaces, and retains container versions.
 */
export interface Schema$Container {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * The Container ID uniquely identifies the GTM Container.
   */
  containerId: string;
  /**
   * List of domain names associated with the Container.
   */
  domainName: string[];
  /**
   * The fingerprint of the GTM Container as computed at storage time. This
   * value is recomputed whenever the account is modified.
   */
  fingerprint: string;
  /**
   * Container display name.
   */
  name: string;
  /**
   * Container Notes.
   */
  notes: string;
  /**
   * GTM Container&#39;s API relative path.
   */
  path: string;
  /**
   * Container Public ID.
   */
  publicId: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * List of Usage Contexts for the Container. Valid values include: web,
   * android, or ios.
   */
  usageContext: string[];
}
/**
 * Defines the Google Tag Manager Container access permissions.
 */
export interface Schema$ContainerAccess {
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * List of Container permissions.
   */
  permission: string;
}
/**
 * Represents a Google Tag Manager Container Version.
 */
export interface Schema$ContainerVersion {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * The built-in variables in the container that this version was taken from.
   */
  builtInVariable: Schema$BuiltInVariable[];
  /**
   * The container that this version was taken from.
   */
  container: Schema$Container;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * The Container Version ID uniquely identifies the GTM Container Version.
   */
  containerVersionId: string;
  /**
   * A value of true indicates this container version has been deleted.
   */
  deleted: boolean;
  /**
   * Container version description.
   */
  description: string;
  /**
   * The fingerprint of the GTM Container Version as computed at storage time.
   * This value is recomputed whenever the container version is modified.
   */
  fingerprint: string;
  /**
   * The folders in the container that this version was taken from.
   */
  folder: Schema$Folder[];
  /**
   * Container version display name.
   */
  name: string;
  /**
   * GTM ContainerVersions&#39;s API relative path.
   */
  path: string;
  /**
   * The tags in the container that this version was taken from.
   */
  tag: Schema$Tag[];
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * The triggers in the container that this version was taken from.
   */
  trigger: Schema$Trigger[];
  /**
   * The variables in the container that this version was taken from.
   */
  variable: Schema$Variable[];
  /**
   * The zones in the container that this version was taken from.
   */
  zone: Schema$Zone[];
}
/**
 * Represents a Google Tag Manager Container Version Header.
 */
export interface Schema$ContainerVersionHeader {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * The Container Version ID uniquely identifies the GTM Container Version.
   */
  containerVersionId: string;
  /**
   * A value of true indicates this container version has been deleted.
   */
  deleted: boolean;
  /**
   * Container version display name.
   */
  name: string;
  /**
   * Number of macros in the container version.
   */
  numMacros: string;
  /**
   * Number of rules in the container version.
   */
  numRules: string;
  /**
   * Number of tags in the container version.
   */
  numTags: string;
  /**
   * Number of triggers in the container version.
   */
  numTriggers: string;
  /**
   * Number of variables in the container version.
   */
  numVariables: string;
  /**
   * Number of zones in the container version.
   */
  numZones: string;
  /**
   * GTM Container Versions&#39;s API relative path.
   */
  path: string;
}
export interface Schema$CreateBuiltInVariableResponse {
  /**
   * List of created built-in variables.
   */
  builtInVariable: Schema$BuiltInVariable[];
}
/**
 * Options for new container versions.
 */
export interface Schema$CreateContainerVersionRequestVersionOptions {
  /**
   * The name of the container version to be created.
   */
  name: string;
  /**
   * The notes of the container version to be created.
   */
  notes: string;
}
/**
 * Create container versions response.
 */
export interface Schema$CreateContainerVersionResponse {
  /**
   * Compiler errors or not.
   */
  compilerError: boolean;
  /**
   * The container version created.
   */
  containerVersion: Schema$ContainerVersion;
  /**
   * Auto generated workspace path created as a result of version creation. This
   * field should only be populated if the created version was not a quick
   * preview.
   */
  newWorkspacePath: string;
  /**
   * Whether version creation failed when syncing the workspace to the latest
   * container version.
   */
  syncStatus: Schema$SyncStatus;
}
/**
 * Creates a workspace proposal to start a review of a workspace.
 */
export interface Schema$CreateWorkspaceProposalRequest {
  /**
   * If present, an initial comment to associate with the workspace proposal.
   */
  initialComment: Schema$WorkspaceProposalHistoryComment;
  /**
   * List of users to review the workspace proposal.
   */
  reviewers: Schema$WorkspaceProposalUser[];
}
/**
 * A workspace entity that may represent a tag, trigger, variable, or folder in
 * addition to its status in the workspace.
 */
export interface Schema$Entity {
  /**
   * Represents how the entity has been changed in the workspace.
   */
  changeStatus: string;
  /**
   * The Folder being represented by the entity.
   */
  folder: Schema$Folder;
  /**
   * The tag being represented by the entity.
   */
  tag: Schema$Tag;
  /**
   * The trigger being represented by the entity.
   */
  trigger: Schema$Trigger;
  /**
   * The variable being represented by the entity.
   */
  variable: Schema$Variable;
}
/**
 * Represents a Google Tag Manager Environment. Note that a user can create,
 * delete and update environments of type USER, but can only update the
 * enable_debug and url fields of environments of other types.
 */
export interface Schema$Environment {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * The environment authorization code.
   */
  authorizationCode: string;
  /**
   * The last update time-stamp for the authorization code.
   */
  authorizationTimestamp: Schema$Timestamp;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * Represents a link to a container version.
   */
  containerVersionId: string;
  /**
   * The environment description. Can be set or changed only on USER type
   * environments.
   */
  description: string;
  /**
   * Whether or not to enable debug by default for the environment.
   */
  enableDebug: boolean;
  /**
   * GTM Environment ID uniquely identifies the GTM Environment.
   */
  environmentId: string;
  /**
   * The fingerprint of the GTM environment as computed at storage time. This
   * value is recomputed whenever the environment is modified.
   */
  fingerprint: string;
  /**
   * The environment display name. Can be set or changed only on USER type
   * environments.
   */
  name: string;
  /**
   * GTM Environment&#39;s API relative path.
   */
  path: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * The type of this environment.
   */
  type: string;
  /**
   * Default preview page url for the environment.
   */
  url: string;
  /**
   * Represents a link to a quick preview of a workspace.
   */
  workspaceId: string;
}
/**
 * Represents a Google Tag Manager Folder.
 */
export interface Schema$Folder {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * The fingerprint of the GTM Folder as computed at storage time. This value
   * is recomputed whenever the folder is modified.
   */
  fingerprint: string;
  /**
   * The Folder ID uniquely identifies the GTM Folder.
   */
  folderId: string;
  /**
   * Folder display name.
   */
  name: string;
  /**
   * User notes on how to apply this folder in the container.
   */
  notes: string;
  /**
   * GTM Folder&#39;s API relative path.
   */
  path: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * GTM Workspace ID.
   */
  workspaceId: string;
}
/**
 * Represents a Google Tag Manager Folder&#39;s contents.
 */
export interface Schema$FolderEntities {
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
  /**
   * The list of tags inside the folder.
   */
  tag: Schema$Tag[];
  /**
   * The list of triggers inside the folder.
   */
  trigger: Schema$Trigger[];
  /**
   * The list of variables inside the folder.
   */
  variable: Schema$Variable[];
}
/**
 * The changes that have occurred in the workspace since the base container
 * version.
 */
export interface Schema$GetWorkspaceStatusResponse {
  /**
   * The merge conflict after sync.
   */
  mergeConflict: Schema$MergeConflict[];
  /**
   * Entities that have been changed in the workspace.
   */
  workspaceChange: Schema$Entity[];
}
/**
 * List Accounts Response.
 */
export interface Schema$ListAccountsResponse {
  /**
   * List of GTM Accounts that a user has access to.
   */
  account: Schema$Account[];
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
}
/**
 * List Containers Response.
 */
export interface Schema$ListContainersResponse {
  /**
   * All Containers of a GTM Account.
   */
  container: Schema$Container[];
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
}
/**
 * List container versions response.
 */
export interface Schema$ListContainerVersionsResponse {
  /**
   * All container version headers of a GTM Container.
   */
  containerVersionHeader: Schema$ContainerVersionHeader[];
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
}
/**
 * A list of enabled built-in variables.
 */
export interface Schema$ListEnabledBuiltInVariablesResponse {
  /**
   * All GTM BuiltInVariables of a GTM container.
   */
  builtInVariable: Schema$BuiltInVariable[];
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
}
/**
 * List Environments Response.
 */
export interface Schema$ListEnvironmentsResponse {
  /**
   * All Environments of a GTM Container.
   */
  environment: Schema$Environment[];
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
}
/**
 * List Folders Response.
 */
export interface Schema$ListFoldersResponse {
  /**
   * All GTM Folders of a GTM Container.
   */
  folder: Schema$Folder[];
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
}
/**
 * List Tags Response.
 */
export interface Schema$ListTagsResponse {
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
  /**
   * All GTM Tags of a GTM Container.
   */
  tag: Schema$Tag[];
}
/**
 * List triggers response.
 */
export interface Schema$ListTriggersResponse {
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
  /**
   * All GTM Triggers of a GTM Container.
   */
  trigger: Schema$Trigger[];
}
/**
 * List user permissions response.
 */
export interface Schema$ListUserPermissionsResponse {
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
  /**
   * All GTM UserPermissions of a GTM Account.
   */
  userPermission: Schema$UserPermission[];
}
/**
 * List Variables Response.
 */
export interface Schema$ListVariablesResponse {
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
  /**
   * All GTM Variables of a GTM Container.
   */
  variable: Schema$Variable[];
}
/**
 * A list of workspaces in a container.
 */
export interface Schema$ListWorkspacesResponse {
  /**
   * Continuation token for fetching the next page of results.
   */
  nextPageToken: string;
  /**
   * All Workspaces of a GTM Container.
   */
  workspace: Schema$Workspace[];
}
/**
 * Represents a merge conflict.
 */
export interface Schema$MergeConflict {
  /**
   * The base version entity (since the latest sync operation) that has
   * conflicting changes compared to the workspace. If this field is missing, it
   * means the workspace entity is deleted from the base version.
   */
  entityInBaseVersion: Schema$Entity;
  /**
   * The workspace entity that has conflicting changes compared to the base
   * version. If an entity is deleted in a workspace, it will still appear with
   * a deleted change status.
   */
  entityInWorkspace: Schema$Entity;
}
/**
 * Represents a Google Tag Manager Parameter.
 */
export interface Schema$Parameter {
  /**
   * The named key that uniquely identifies a parameter. Required for top-level
   * parameters, as well as map values. Ignored for list values.
   */
  key: string;
  /**
   * This list parameter&#39;s parameters (keys will be ignored).
   */
  list: Schema$Parameter[];
  /**
   * This map parameter&#39;s parameters (must have keys; keys must be unique).
   */
  map: Schema$Parameter[];
  /**
   * The parameter type. Valid values are:  - boolean: The value represents a
   * boolean, represented as &#39;true&#39; or &#39;false&#39;  - integer: The
   * value represents a 64-bit signed integer value, in base 10  - list: A list
   * of parameters should be specified  - map: A map of parameters should be
   * specified  - template: The value represents any text; this can include
   * variable references (even variable references that might return non-string
   * types)
   */
  type: string;
  /**
   * A parameter&#39;s value (may contain variable references such as
   * &quot;{{myVariable}}&quot;) as appropriate to the specified type.
   */
  value: string;
}
/**
 * Publish container version response.
 */
export interface Schema$PublishContainerVersionResponse {
  /**
   * Compiler errors or not.
   */
  compilerError: boolean;
  /**
   * The container version created.
   */
  containerVersion: Schema$ContainerVersion;
}
/**
 * Response to quick previewing a workspace.
 */
export interface Schema$QuickPreviewResponse {
  /**
   * Were there compiler errors or not.
   */
  compilerError: boolean;
  /**
   * The quick previewed container version.
   */
  containerVersion: Schema$ContainerVersion;
  /**
   * Whether quick previewing failed when syncing the workspace to the latest
   * container version.
   */
  syncStatus: Schema$SyncStatus;
}
/**
 * The result of reverting a built-in variable in a workspace.
 */
export interface Schema$RevertBuiltInVariableResponse {
  /**
   * Whether the built-in variable is enabled after reversion.
   */
  enabled: boolean;
}
/**
 * The result of reverting folder changes in a workspace.
 */
export interface Schema$RevertFolderResponse {
  /**
   * Folder as it appears in the latest container version since the last
   * workspace synchronization operation. If no folder is present, that means
   * the folder was deleted in the latest container version.
   */
  folder: Schema$Folder;
}
/**
 * The result of reverting a tag in a workspace.
 */
export interface Schema$RevertTagResponse {
  /**
   * Tag as it appears in the latest container version since the last workspace
   * synchronization operation. If no tag is present, that means the tag was
   * deleted in the latest container version.
   */
  tag: Schema$Tag;
}
/**
 * The result of reverting a trigger in a workspace.
 */
export interface Schema$RevertTriggerResponse {
  /**
   * Trigger as it appears in the latest container version since the last
   * workspace synchronization operation. If no trigger is present, that means
   * the trigger was deleted in the latest container version.
   */
  trigger: Schema$Trigger;
}
/**
 * The result of reverting a variable in a workspace.
 */
export interface Schema$RevertVariableResponse {
  /**
   * Variable as it appears in the latest container version since the last
   * workspace synchronization operation. If no variable is present, that means
   * the variable was deleted in the latest container version.
   */
  variable: Schema$Variable;
}
/**
 * Represents a reference to atag that fires before another tag in order to set
 * up dependencies.
 */
export interface Schema$SetupTag {
  /**
   * If true, fire the main tag if and only if the setup tag fires successfully.
   * If false, fire the main tag regardless of setup tag firing status.
   */
  stopOnSetupFailure: boolean;
  /**
   * The name of the setup tag.
   */
  tagName: string;
}
/**
 * The status of a workspace after synchronization.
 */
export interface Schema$SyncStatus {
  /**
   * Synchornization operation detected a merge conflict.
   */
  mergeConflict: boolean;
  /**
   * An error occurred during the synchronization operation.
   */
  syncError: boolean;
}
/**
 * A response after synchronizing the workspace to the latest container version.
 */
export interface Schema$SyncWorkspaceResponse {
  /**
   * The merge conflict after sync. If this field is not empty, the sync is
   * still treated as successful. But a version cannot be created until all
   * conflicts are resolved.
   */
  mergeConflict: Schema$MergeConflict[];
  /**
   * Indicates whether synchronization caused a merge conflict or sync error.
   */
  syncStatus: Schema$SyncStatus;
}
/**
 * Represents a Google Tag Manager Tag.
 */
export interface Schema$Tag {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * Blocking rule IDs. If any of the listed rules evaluate to true, the tag
   * will not fire.
   */
  blockingRuleId: string[];
  /**
   * Blocking trigger IDs. If any of the listed triggers evaluate to true, the
   * tag will not fire.
   */
  blockingTriggerId: string[];
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * The fingerprint of the GTM Tag as computed at storage time. This value is
   * recomputed whenever the tag is modified.
   */
  fingerprint: string;
  /**
   * Firing rule IDs. A tag will fire when any of the listed rules are true and
   * all of its blockingRuleIds (if any specified) are false.
   */
  firingRuleId: string[];
  /**
   * Firing trigger IDs. A tag will fire when any of the listed triggers are
   * true and all of its blockingTriggerIds (if any specified) are false.
   */
  firingTriggerId: string[];
  /**
   * If set to true, this tag will only fire in the live environment (e.g. not
   * in preview or debug mode).
   */
  liveOnly: boolean;
  /**
   * Tag display name.
   */
  name: string;
  /**
   * User notes on how to apply this tag in the container.
   */
  notes: string;
  /**
   * The tag&#39;s parameters.
   */
  parameter: Schema$Parameter[];
  /**
   * Parent folder id.
   */
  parentFolderId: string;
  /**
   * GTM Tag&#39;s API relative path.
   */
  path: string;
  /**
   * Indicates whether the tag is paused, which prevents the tag from firing.
   */
  paused: boolean;
  /**
   * User defined numeric priority of the tag. Tags are fired asynchronously in
   * order of priority. Tags with higher numeric value fire first. A tag&#39;s
   * priority can be a positive or negative value. The default value is 0.
   */
  priority: Schema$Parameter;
  /**
   * The end timestamp in milliseconds to schedule a tag.
   */
  scheduleEndMs: string;
  /**
   * The start timestamp in milliseconds to schedule a tag.
   */
  scheduleStartMs: string;
  /**
   * The list of setup tags. Currently we only allow one.
   */
  setupTag: Schema$SetupTag[];
  /**
   * Option to fire this tag.
   */
  tagFiringOption: string;
  /**
   * The Tag ID uniquely identifies the GTM Tag.
   */
  tagId: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * The list of teardown tags. Currently we only allow one.
   */
  teardownTag: Schema$TeardownTag[];
  /**
   * GTM Tag Type.
   */
  type: string;
  /**
   * GTM Workspace ID.
   */
  workspaceId: string;
}
/**
 * Represents a tag that fires after another tag in order to tear down
 * dependencies.
 */
export interface Schema$TeardownTag {
  /**
   * If true, fire the teardown tag if and only if the main tag fires
   * successfully. If false, fire the teardown tag regardless of main tag firing
   * status.
   */
  stopTeardownOnFailure: boolean;
  /**
   * The name of the teardown tag.
   */
  tagName: string;
}
/**
 * A Timestamp represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time. It is encoded using the Proleptic Gregorian
 * Calendar which extends the Gregorian calendar backwards to year one. It is
 * encoded assuming all minutes are 60 seconds long, i.e. leap seconds are
 * &quot;smeared&quot; so that no leap second table is needed for
 * interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that
 * we can convert to and from RFC 3339 date strings. See
 * [https://www.ietf.org/rfc/rfc3339.txt](https://www.ietf.org/rfc/rfc3339.txt).
 * # Examples  Example 1: Compute Timestamp from POSIX `time()`.  Timestamp
 * timestamp; timestamp.set_seconds(time(NULL)); timestamp.set_nanos(0); Example
 * 2: Compute Timestamp from POSIX `gettimeofday()`.  struct timeval tv;
 * gettimeofday(&amp;tv, NULL);  Timestamp timestamp;
 * timestamp.set_seconds(tv.tv_sec); timestamp.set_nanos(tv.tv_usec * 1000);
 * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`. FILETIME
 * ft; GetSystemTimeAsFileTime(&amp;ft); UINT64 ticks =
 * (((UINT64)ft.dwHighDateTime) &lt;&lt; 32) | ft.dwLowDateTime;  // A Windows
 * tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z // is 11644473600
 * seconds before Unix epoch 1970-01-01T00:00:00Z. Timestamp timestamp;
 * timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
 * timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));  Example 4: Compute
 * Timestamp from Java `System.currentTimeMillis()`.  long millis =
 * System.currentTimeMillis();  Timestamp timestamp =
 * Timestamp.newBuilder().setSeconds(millis / 1000) .setNanos((int) ((millis %
 * 1000) * 1000000)).build();    Example 5: Compute Timestamp from current time
 * in Python.  timestamp = Timestamp() timestamp.GetCurrentTime()  # JSON
 * Mapping  In JSON format, the Timestamp type is encoded as a string in the
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format
 * is &quot;{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z&quot; where
 * {year} is always expressed using four digits while {month}, {day}, {hour},
 * {min}, and {sec} are zero-padded to two digits each. The fractional seconds,
 * which can go up to 9 digits (i.e. up to 1 nanosecond resolution), are
 * optional. The &quot;Z&quot; suffix indicates the timezone (&quot;UTC&quot;);
 * the timezone is required, though only UTC (as indicated by &quot;Z&quot;) is
 * presently supported.  For example, &quot;2017-01-15T01:30:15.01Z&quot;
 * encodes 15.01 seconds past 01:30 UTC on January 15, 2017.  In JavaScript, one
 * can convert a Date object to this format using the standard
 * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString]
 * method. In Python, a standard `datetime.datetime` object can be converted to
 * this format using
 * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with
 * the time format spec &#39;%Y-%m-%dT%H:%M:%S.%fZ&#39;. Likewise, in Java, one
 * can use the Joda Time&#39;s [`ISODateTimeFormat.dateTime()`](
 * http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime())
 * to obtain a formatter capable of generating timestamps in this format.
 */
export interface Schema$Timestamp {
  /**
   * Non-negative fractions of a second at nanosecond resolution. Negative
   * second values with fractions must still have non-negative nanos values that
   * count forward in time. Must be from 0 to 999,999,999 inclusive.
   */
  nanos: number;
  /**
   * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must
   * be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
   */
  seconds: string;
}
/**
 * Represents a Google Tag Manager Trigger
 */
export interface Schema$Trigger {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * Used in the case of auto event tracking.
   */
  autoEventFilter: Schema$Condition[];
  /**
   * Whether or not we should only fire tags if the form submit or link click
   * event is not cancelled by some other event handler (e.g. because of
   * validation). Only valid for Form Submission and Link Click triggers.
   */
  checkValidation: Schema$Parameter;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * A visibility trigger minimum continuous visible time (in milliseconds).
   * Only valid for AMP Visibility trigger.
   */
  continuousTimeMinMilliseconds: Schema$Parameter;
  /**
   * Used in the case of custom event, which is fired iff all Conditions are
   * true.
   */
  customEventFilter: Schema$Condition[];
  /**
   * Name of the GTM event that is fired. Only valid for Timer triggers.
   */
  eventName: Schema$Parameter;
  /**
   * The trigger will only fire iff all Conditions are true.
   */
  filter: Schema$Condition[];
  /**
   * The fingerprint of the GTM Trigger as computed at storage time. This value
   * is recomputed whenever the trigger is modified.
   */
  fingerprint: string;
  /**
   * List of integer percentage values for scroll triggers. The trigger will
   * fire when each percentage is reached when the view is scrolled
   * horizontally. Only valid for AMP scroll triggers.
   */
  horizontalScrollPercentageList: Schema$Parameter;
  /**
   * Time between triggering recurring Timer Events (in milliseconds). Only
   * valid for Timer triggers.
   */
  interval: Schema$Parameter;
  /**
   * Time between Timer Events to fire (in seconds). Only valid for AMP Timer
   * trigger.
   */
  intervalSeconds: Schema$Parameter;
  /**
   * Limit of the number of GTM events this Timer Trigger will fire. If no limit
   * is set, we will continue to fire GTM events until the user leaves the page.
   * Only valid for Timer triggers.
   */
  limit: Schema$Parameter;
  /**
   * Max time to fire Timer Events (in seconds). Only valid for AMP Timer
   * trigger.
   */
  maxTimerLengthSeconds: Schema$Parameter;
  /**
   * Trigger display name.
   */
  name: string;
  /**
   * User notes on how to apply this trigger in the container.
   */
  notes: string;
  /**
   * Additional parameters.
   */
  parameter: Schema$Parameter[];
  /**
   * Parent folder id.
   */
  parentFolderId: string;
  /**
   * GTM Trigger&#39;s API relative path.
   */
  path: string;
  /**
   * A click trigger CSS selector (i.e. &quot;a&quot;, &quot;button&quot; etc.).
   * Only valid for AMP Click trigger.
   */
  selector: Schema$Parameter;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * A visibility trigger minimum total visible time (in milliseconds). Only
   * valid for AMP Visibility trigger.
   */
  totalTimeMinMilliseconds: Schema$Parameter;
  /**
   * The Trigger ID uniquely identifies the GTM Trigger.
   */
  triggerId: string;
  /**
   * Defines the data layer event that causes this trigger.
   */
  type: string;
  /**
   * Globally unique id of the trigger that auto-generates this (a Form Submit,
   * Link Click or Timer listener) if any. Used to make incompatible auto-events
   * work together with trigger filtering based on trigger ids. This value is
   * populated during output generation since the tags implied by triggers
   * don&#39;t exist until then. Only valid for Form Submit, Link Click and
   * Timer triggers.
   */
  uniqueTriggerId: Schema$Parameter;
  /**
   * List of integer percentage values for scroll triggers. The trigger will
   * fire when each percentage is reached when the view is scrolled vertically.
   * Only valid for AMP scroll triggers.
   */
  verticalScrollPercentageList: Schema$Parameter;
  /**
   * A visibility trigger CSS selector (i.e. &quot;#id&quot;). Only valid for
   * AMP Visibility trigger.
   */
  visibilitySelector: Schema$Parameter;
  /**
   * A visibility trigger maximum percent visibility. Only valid for AMP
   * Visibility trigger.
   */
  visiblePercentageMax: Schema$Parameter;
  /**
   * A visibility trigger minimum percent visibility. Only valid for AMP
   * Visibility trigger.
   */
  visiblePercentageMin: Schema$Parameter;
  /**
   * Whether or not we should delay the form submissions or link opening until
   * all of the tags have fired (by preventing the default action and later
   * simulating the default action). Only valid for Form Submission and Link
   * Click triggers.
   */
  waitForTags: Schema$Parameter;
  /**
   * How long to wait (in milliseconds) for tags to fire when
   * &#39;waits_for_tags&#39; above evaluates to true. Only valid for Form
   * Submission and Link Click triggers.
   */
  waitForTagsTimeout: Schema$Parameter;
  /**
   * GTM Workspace ID.
   */
  workspaceId: string;
}
/**
 * Updates a workspace proposal with patch-like semantics.
 */
export interface Schema$UpdateWorkspaceProposalRequest {
  /**
   * When provided, this fingerprint must match the fingerprint of the proposal
   * in storage.
   */
  fingerprint: string;
  /**
   * If present, a new comment is added to the workspace proposal history.
   */
  newComment: Schema$WorkspaceProposalHistoryComment;
  /**
   * If present, the list of reviewers of the workspace proposal is updated.
   */
  reviewers: Schema$WorkspaceProposalUser[];
  /**
   * If present, the status of the workspace proposal is updated.
   */
  status: string;
}
/**
 * Represents a user&#39;s permissions to an account and its container.
 */
export interface Schema$UserPermission {
  /**
   * GTM Account access permissions.
   */
  accountAccess: Schema$AccountAccess;
  /**
   * The Account ID uniquely identifies the GTM Account.
   */
  accountId: string;
  /**
   * GTM Container access permissions.
   */
  containerAccess: Schema$ContainerAccess[];
  /**
   * User&#39;s email address.
   */
  emailAddress: string;
  /**
   * GTM UserPermission&#39;s API relative path.
   */
  path: string;
}
/**
 * Represents a Google Tag Manager Variable.
 */
export interface Schema$Variable {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * For mobile containers only: A list of trigger IDs for disabling conditional
   * variables; the variable is enabled if one of the enabling trigger is true
   * while all the disabling trigger are false. Treated as an unordered set.
   */
  disablingTriggerId: string[];
  /**
   * For mobile containers only: A list of trigger IDs for enabling conditional
   * variables; the variable is enabled if one of the enabling triggers is true
   * while all the disabling triggers are false. Treated as an unordered set.
   */
  enablingTriggerId: string[];
  /**
   * The fingerprint of the GTM Variable as computed at storage time. This value
   * is recomputed whenever the variable is modified.
   */
  fingerprint: string;
  /**
   * Variable display name.
   */
  name: string;
  /**
   * User notes on how to apply this variable in the container.
   */
  notes: string;
  /**
   * The variable&#39;s parameters.
   */
  parameter: Schema$Parameter[];
  /**
   * Parent folder id.
   */
  parentFolderId: string;
  /**
   * GTM Variable&#39;s API relative path.
   */
  path: string;
  /**
   * The end timestamp in milliseconds to schedule a variable.
   */
  scheduleEndMs: string;
  /**
   * The start timestamp in milliseconds to schedule a variable.
   */
  scheduleStartMs: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * GTM Variable Type.
   */
  type: string;
  /**
   * The Variable ID uniquely identifies the GTM Variable.
   */
  variableId: string;
  /**
   * GTM Workspace ID.
   */
  workspaceId: string;
}
/**
 * Represents a Google Tag Manager Container Workspace.
 */
export interface Schema$Workspace {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * Workspace description.
   */
  description: string;
  /**
   * The fingerprint of the GTM Workspace as computed at storage time. This
   * value is recomputed whenever the workspace is modified.
   */
  fingerprint: string;
  /**
   * Workspace display name.
   */
  name: string;
  /**
   * GTM Workspace&#39;s API relative path.
   */
  path: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * The Workspace ID uniquely identifies the GTM Workspace.
   */
  workspaceId: string;
}
/**
 * A workspace proposal represents an ongoing review of workspace changes in an
 * effort to gain approval for container version creation.
 */
export interface Schema$WorkspaceProposal {
  /**
   * List of authors for the workspace proposal.
   */
  authors: Schema$WorkspaceProposalUser[];
  /**
   * The fingerprint of the GTM workspace proposal as computed at storage time.
   * This value is recomputed whenever the proposal is modified.
   */
  fingerprint: string;
  /**
   * Records the history of comments and status changes.
   */
  history: Schema$WorkspaceProposalHistory[];
  /**
   * GTM workspace proposal&#39;s relative path.
   */
  path: string;
  /**
   * Lists of reviewers for the workspace proposal.
   */
  reviewers: Schema$WorkspaceProposalUser[];
  /**
   * The status of the workspace proposal as it goes through review.
   */
  status: string;
}
/**
 * A history event that represents a comment or status change in the proposal.
 */
export interface Schema$WorkspaceProposalHistory {
  /**
   * A user or reviewer comment.
   */
  comment: Schema$WorkspaceProposalHistoryComment;
  /**
   * The party responsible for the change in history.
   */
  createdBy: Schema$WorkspaceProposalUser;
  /**
   * When this history event was added to the workspace proposal.
   */
  createdTimestamp: Schema$Timestamp;
  /**
   * A change in the proposal&#39;s status.
   */
  statusChange: Schema$WorkspaceProposalHistoryStatusChange;
  /**
   * The history type distinguishing between comments and status changes.
   */
  type: string;
}
/**
 * A comment from the reviewer or author.
 */
export interface Schema$WorkspaceProposalHistoryComment {
  /**
   * The contents of the reviewer or author comment.
   */
  content: string;
}
/**
 * A change in the proposal&#39;s status.
 */
export interface Schema$WorkspaceProposalHistoryStatusChange {
  /**
   * The new proposal status after that status change.
   */
  newStatus: string;
  /**
   * The old proposal status before the status change.
   */
  oldStatus: string;
}
/**
 * Represents an external user or internal Google Tag Manager system.
 */
export interface Schema$WorkspaceProposalUser {
  /**
   * Gaia id associated with a user, absent for the Google Tag Manager system.
   */
  gaiaId: string;
  /**
   * User type distinguishes between a user and the Google Tag Manager system.
   */
  type: string;
}
/**
 * Represents a Google Tag Manager Zone&#39;s contents.
 */
export interface Schema$Zone {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * This Zone&#39;s boundary.
   */
  boundary: Schema$ZoneBoundary;
  /**
   * Containers that are children of this Zone.
   */
  childContainer: Schema$ZoneChildContainer[];
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * The fingerprint of the GTM Zone as computed at storage time. This value is
   * recomputed whenever the zone is modified.
   */
  fingerprint: string;
  /**
   * Zone display name.
   */
  name: string;
  /**
   * User notes on how to apply this zone in the container.
   */
  notes: string;
  /**
   * GTM Zone&#39;s API relative path.
   */
  path: string;
  /**
   * Auto generated link to the tag manager UI
   */
  tagManagerUrl: string;
  /**
   * This Zone&#39;s type restrictions.
   */
  typeRestriction: Schema$ZoneTypeRestriction;
  /**
   * GTM Workspace ID.
   */
  workspaceId: string;
  /**
   * The Zone ID uniquely identifies the GTM Zone.
   */
  zoneId: string;
}
/**
 * Represents a Zone&#39;s boundaries.
 */
export interface Schema$ZoneBoundary {
  /**
   * The conditions that, when conjoined, make up the boundary.
   */
  condition: Schema$Condition[];
  /**
   * Custom evaluation trigger IDs. A zone will evaluate its boundary conditions
   * when any of the listed triggers are true.
   */
  customEvaluationTriggerId: string[];
}
/**
 * Represents a child container of a Zone.
 */
export interface Schema$ZoneChildContainer {
  /**
   * The zone&#39;s nickname for the child container.
   */
  nickname: string;
  /**
   * The child container&#39;s public id.
   */
  publicId: string;
}
/**
 * Represents a Zone&#39;s type restrictions.
 */
export interface Schema$ZoneTypeRestriction {
  /**
   * True if type restrictions have been enabled for this Zone.
   */
  enable: boolean;
  /**
   * List of type public ids that have been whitelisted for use in this Zone.
   */
  whitelistedTypeId: string[];
}

export class Resource$Accounts {
  root: Tagmanager;
  containers: Resource$Accounts$Containers;
  user_permissions: Resource$Accounts$User_permissions;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
    this.containers = new Resource$Accounts$Containers(root);
    this.user_permissions = new Resource$Accounts$User_permissions(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.get
   * @desc Gets a GTM Account.
   * @alias tagmanager.accounts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Account>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>):
      void|AxiosPromise<Schema$Account> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Account>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Account>(parameters);
    }
  }


  /**
   * tagmanager.accounts.list
   * @desc Lists all GTM Accounts that a user has access to.
   * @alias tagmanager.accounts.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListAccountsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListAccountsResponse>,
      callback?: BodyResponseCallback<Schema$ListAccountsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListAccountsResponse>,
      callback?: BodyResponseCallback<Schema$ListAccountsResponse>):
      void|AxiosPromise<Schema$ListAccountsResponse> {
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
            url: (rootUrl + '/tagmanager/v2/accounts')
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
      createAPIRequest<Schema$ListAccountsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListAccountsResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.update
   * @desc Updates a GTM Account.
   * @alias tagmanager.accounts.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the account in storage.
   * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
   * @param {().Account} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Account>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>):
      void|AxiosPromise<Schema$Account> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Account>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Account>(parameters);
    }
  }
}
export class Resource$Accounts$Containers {
  root: Tagmanager;
  environments: Resource$Accounts$Containers$Environments;
  versions: Resource$Accounts$Containers$Versions;
  version_headers: Resource$Accounts$Containers$Version_headers;
  workspaces: Resource$Accounts$Containers$Workspaces;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
    this.environments = new Resource$Accounts$Containers$Environments(root);
    this.versions = new Resource$Accounts$Containers$Versions(root);
    this.version_headers =
        new Resource$Accounts$Containers$Version_headers(root);
    this.workspaces = new Resource$Accounts$Containers$Workspaces(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.create
   * @desc Creates a Container.
   * @alias tagmanager.accounts.containers.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}.
   * @param {().Container} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Container>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>):
      void|AxiosPromise<Schema$Container> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/containers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Container>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Container>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.delete
   * @desc Deletes a Container.
   * @alias tagmanager.accounts.containers.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.get
   * @desc Gets a Container.
   * @alias tagmanager.accounts.containers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Container>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>):
      void|AxiosPromise<Schema$Container> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Container>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Container>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.list
   * @desc Lists all Containers that belongs to a GTM Account.
   * @alias tagmanager.accounts.containers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Accounts's API relative path. Example: accounts/{account_id}.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListContainersResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListContainersResponse>,
      callback?: BodyResponseCallback<Schema$ListContainersResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListContainersResponse>,
      callback?: BodyResponseCallback<Schema$ListContainersResponse>):
      void|AxiosPromise<Schema$ListContainersResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/containers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListContainersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListContainersResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.update
   * @desc Updates a Container.
   * @alias tagmanager.accounts.containers.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container in storage.
   * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {().Container} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Container>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>):
      void|AxiosPromise<Schema$Container> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Container>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Container>(parameters);
    }
  }
}
export class Resource$Accounts$Containers$Environments {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.environments.create
   * @desc Creates a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Environment>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>):
      void|AxiosPromise<Schema$Environment> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/environments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Environment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Environment>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.environments.delete
   * @desc Deletes a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.environments.get
   * @desc Gets a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Environment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>):
      void|AxiosPromise<Schema$Environment> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Environment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Environment>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.environments.list
   * @desc Lists all GTM Environments of a GTM Container.
   * @alias tagmanager.accounts.containers.environments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListEnvironmentsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListEnvironmentsResponse>):
      void|AxiosPromise<Schema$ListEnvironmentsResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/environments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListEnvironmentsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListEnvironmentsResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.environments.patch
   * @desc Updates a GTM Environment. This method supports patch semantics.
   * @alias tagmanager.accounts.containers.environments.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
   * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Environment>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>):
      void|AxiosPromise<Schema$Environment> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Environment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Environment>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.environments.reauthorize
   * @desc Re-generates the authorization code for a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.reauthorize
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reauthorize(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Environment>;
  reauthorize(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>): void;
  reauthorize(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>):
      void|AxiosPromise<Schema$Environment> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:reauthorize')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Environment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Environment>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.environments.update
   * @desc Updates a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
   * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Environment>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>):
      void|AxiosPromise<Schema$Environment> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Environment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Environment>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Versions {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.versions.delete
   * @desc Deletes a Container Version.
   * @alias tagmanager.accounts.containers.versions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.versions.get
   * @desc Gets a Container Version.
   * @alias tagmanager.accounts.containers.versions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.containerVersionId The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
   * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ContainerVersion>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>):
      void|AxiosPromise<Schema$ContainerVersion> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ContainerVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ContainerVersion>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.versions.live
   * @desc Gets the live (i.e. published) container version
   * @alias tagmanager.accounts.containers.versions.live
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  live(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ContainerVersion>;
  live(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>): void;
  live(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>):
      void|AxiosPromise<Schema$ContainerVersion> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/versions:live')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ContainerVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ContainerVersion>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.versions.publish
   * @desc Publishes a Container Version.
   * @alias tagmanager.accounts.containers.versions.publish
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
   * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publish(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PublishContainerVersionResponse>;
  publish(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$PublishContainerVersionResponse>,
      callback?: BodyResponseCallback<Schema$PublishContainerVersionResponse>):
      void;
  publish(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$PublishContainerVersionResponse>,
      callback?: BodyResponseCallback<Schema$PublishContainerVersionResponse>):
      void|AxiosPromise<Schema$PublishContainerVersionResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:publish')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PublishContainerVersionResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$PublishContainerVersionResponse>(
          parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.versions.set_latest
   * @desc Sets the latest version used for synchronization of workspaces when
   * detecting conflicts and errors.
   * @alias tagmanager.accounts.containers.versions.set_latest
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  set_latest(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ContainerVersion>;
  set_latest(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>): void;
  set_latest(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>):
      void|AxiosPromise<Schema$ContainerVersion> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:set_latest')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ContainerVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ContainerVersion>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.versions.undelete
   * @desc Undeletes a Container Version.
   * @alias tagmanager.accounts.containers.versions.undelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  undelete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ContainerVersion>;
  undelete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>): void;
  undelete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>):
      void|AxiosPromise<Schema$ContainerVersion> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:undelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ContainerVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ContainerVersion>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.versions.update
   * @desc Updates a Container Version.
   * @alias tagmanager.accounts.containers.versions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
   * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
   * @param {().ContainerVersion} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ContainerVersion>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>):
      void|AxiosPromise<Schema$ContainerVersion> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ContainerVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ContainerVersion>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Version_headers {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.version_headers.latest
   * @desc Gets the latest container version header
   * @alias tagmanager.accounts.containers.version_headers.latest
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  latest(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ContainerVersionHeader>;
  latest(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ContainerVersionHeader>,
      callback?: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
  latest(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ContainerVersionHeader>,
      callback?: BodyResponseCallback<Schema$ContainerVersionHeader>):
      void|AxiosPromise<Schema$ContainerVersionHeader> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/version_headers:latest')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ContainerVersionHeader>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ContainerVersionHeader>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.version_headers.list
   * @desc Lists all Container Versions of a GTM Container.
   * @alias tagmanager.accounts.containers.version_headers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.includeDeleted Also retrieve deleted (archived) versions when true.
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListContainerVersionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListContainerVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListContainerVersionsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListContainerVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListContainerVersionsResponse>):
      void|AxiosPromise<Schema$ListContainerVersionsResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/version_headers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListContainerVersionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListContainerVersionsResponse>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Workspaces {
  root: Tagmanager;
  built_in_variables:
      Resource$Accounts$Containers$Workspaces$Built_in_variables;
  folders: Resource$Accounts$Containers$Workspaces$Folders;
  proposal: Resource$Accounts$Containers$Workspaces$Proposal;
  tags: Resource$Accounts$Containers$Workspaces$Tags;
  triggers: Resource$Accounts$Containers$Workspaces$Triggers;
  variables: Resource$Accounts$Containers$Workspaces$Variables;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
    this.built_in_variables =
        new Resource$Accounts$Containers$Workspaces$Built_in_variables(root);
    this.folders = new Resource$Accounts$Containers$Workspaces$Folders(root);
    this.proposal = new Resource$Accounts$Containers$Workspaces$Proposal(root);
    this.tags = new Resource$Accounts$Containers$Workspaces$Tags(root);
    this.triggers = new Resource$Accounts$Containers$Workspaces$Triggers(root);
    this.variables =
        new Resource$Accounts$Containers$Workspaces$Variables(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.create
   * @desc Creates a Workspace.
   * @alias tagmanager.accounts.containers.workspaces.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {().Workspace} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Workspace>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>):
      void|AxiosPromise<Schema$Workspace> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/workspaces')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Workspace>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Workspace>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.create_version
   * @desc Creates a Container Version from the entities present in the
   * workspace, deletes the workspace, and sets the base container version to
   * the newly created version.
   * @alias tagmanager.accounts.containers.workspaces.create_version
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().CreateContainerVersionRequestVersionOptions} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create_version(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CreateContainerVersionResponse>;
  create_version(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateContainerVersionResponse>,
      callback?: BodyResponseCallback<Schema$CreateContainerVersionResponse>):
      void;
  create_version(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateContainerVersionResponse>,
      callback?: BodyResponseCallback<Schema$CreateContainerVersionResponse>):
      void|AxiosPromise<Schema$CreateContainerVersionResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:create_version')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CreateContainerVersionResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$CreateContainerVersionResponse>(
          parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.delete
   * @desc Deletes a Workspace.
   * @alias tagmanager.accounts.containers.workspaces.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.get
   * @desc Gets a Workspace.
   * @alias tagmanager.accounts.containers.workspaces.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Workspace>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>):
      void|AxiosPromise<Schema$Workspace> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Workspace>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Workspace>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.getProposal
   * @desc Gets a GTM Workspace Proposal.
   * @alias tagmanager.accounts.containers.workspaces.getProposal
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getProposal(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkspaceProposal>;
  getProposal(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkspaceProposal>,
      callback?: BodyResponseCallback<Schema$WorkspaceProposal>): void;
  getProposal(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkspaceProposal>,
      callback?: BodyResponseCallback<Schema$WorkspaceProposal>):
      void|AxiosPromise<Schema$WorkspaceProposal> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkspaceProposal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkspaceProposal>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.getStatus
   * @desc Finds conflicting and modified entities in the workspace.
   * @alias tagmanager.accounts.containers.workspaces.getStatus
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getStatus(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetWorkspaceStatusResponse>;
  getStatus(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetWorkspaceStatusResponse>,
      callback?: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
  getStatus(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetWorkspaceStatusResponse>,
      callback?: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>):
      void|AxiosPromise<Schema$GetWorkspaceStatusResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}/status')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetWorkspaceStatusResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetWorkspaceStatusResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.list
   * @desc Lists all Workspaces that belong to a GTM Container.
   * @alias tagmanager.accounts.containers.workspaces.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListWorkspacesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListWorkspacesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListWorkspacesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkspacesResponse>):
      void|AxiosPromise<Schema$ListWorkspacesResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/workspaces')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListWorkspacesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListWorkspacesResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.quick_preview
   * @desc Quick previews a workspace by creating a fake container version from
   * all entities in the provided workspace.
   * @alias tagmanager.accounts.containers.workspaces.quick_preview
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  quick_preview(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$QuickPreviewResponse>;
  quick_preview(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$QuickPreviewResponse>,
      callback?: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
  quick_preview(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$QuickPreviewResponse>,
      callback?: BodyResponseCallback<Schema$QuickPreviewResponse>):
      void|AxiosPromise<Schema$QuickPreviewResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:quick_preview')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$QuickPreviewResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$QuickPreviewResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.resolve_conflict
   * @desc Resolves a merge conflict for a workspace entity by updating it to
   * the resolved entity passed in the request.
   * @alias tagmanager.accounts.containers.workspaces.resolve_conflict
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().Entity} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resolve_conflict(params?: any, options?: MethodOptions): AxiosPromise<void>;
  resolve_conflict(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resolve_conflict(
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
            url: (rootUrl + '/tagmanager/v2/{+path}:resolve_conflict')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.sync
   * @desc Syncs a workspace to the latest container version by updating all
   * unmodified workspace entities and displaying conflicts for modified
   * entities.
   * @alias tagmanager.accounts.containers.workspaces.sync
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  sync(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SyncWorkspaceResponse>;
  sync(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SyncWorkspaceResponse>,
      callback?: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
  sync(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SyncWorkspaceResponse>,
      callback?: BodyResponseCallback<Schema$SyncWorkspaceResponse>):
      void|AxiosPromise<Schema$SyncWorkspaceResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:sync')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SyncWorkspaceResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SyncWorkspaceResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.update
   * @desc Updates a Workspace.
   * @alias tagmanager.accounts.containers.workspaces.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the workspace in storage.
   * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().Workspace} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Workspace>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>):
      void|AxiosPromise<Schema$Workspace> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Workspace>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Workspace>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.updateProposal
   * @desc Updates a GTM Workspace Proposal.
   * @alias tagmanager.accounts.containers.workspaces.updateProposal
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
   * @param {().UpdateWorkspaceProposalRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updateProposal(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkspaceProposal>;
  updateProposal(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkspaceProposal>,
      callback?: BodyResponseCallback<Schema$WorkspaceProposal>): void;
  updateProposal(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkspaceProposal>,
      callback?: BodyResponseCallback<Schema$WorkspaceProposal>):
      void|AxiosPromise<Schema$WorkspaceProposal> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkspaceProposal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkspaceProposal>(parameters);
    }
  }
}
export class Resource$Accounts$Containers$Workspaces$Built_in_variables {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.built_in_variables.create
   * @desc Creates one or more GTM Built-In Variables.
   * @alias tagmanager.accounts.containers.workspaces.built_in_variables.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {string=} params.type The types of built-in variables to enable.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CreateBuiltInVariableResponse>;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateBuiltInVariableResponse>,
      callback?: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>):
      void;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateBuiltInVariableResponse>,
      callback?: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>):
      void|AxiosPromise<Schema$CreateBuiltInVariableResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/built_in_variables')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CreateBuiltInVariableResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$CreateBuiltInVariableResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.built_in_variables.delete
   * @desc Deletes one or more GTM Built-In Variables.
   * @alias tagmanager.accounts.containers.workspaces.built_in_variables.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
   * @param {string=} params.type The types of built-in variables to delete.
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.built_in_variables.list
   * @desc Lists all the enabled Built-In Variables of a GTM Container.
   * @alias tagmanager.accounts.containers.workspaces.built_in_variables.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListEnabledBuiltInVariablesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>,
      callback?:
          BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>,
      callback?:
          BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>):
      void|AxiosPromise<Schema$ListEnabledBuiltInVariablesResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/built_in_variables')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListEnabledBuiltInVariablesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListEnabledBuiltInVariablesResponse>(
          parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.built_in_variables.revert
   * @desc Reverts changes to a GTM Built-In Variables in a GTM Workspace.
   * @alias tagmanager.accounts.containers.workspaces.built_in_variables.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
   * @param {string=} params.type The type of built-in variable to revert.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RevertBuiltInVariableResponse>;
  revert(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RevertBuiltInVariableResponse>,
      callback?: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>):
      void;
  revert(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RevertBuiltInVariableResponse>,
      callback?: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>):
      void|AxiosPromise<Schema$RevertBuiltInVariableResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}/built_in_variables:revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RevertBuiltInVariableResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$RevertBuiltInVariableResponse>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Workspaces$Folders {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.create
   * @desc Creates a GTM Folder.
   * @alias tagmanager.accounts.containers.workspaces.folders.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/folders')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.delete
   * @desc Deletes a GTM Folder.
   * @alias tagmanager.accounts.containers.workspaces.folders.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.entities
   * @desc List all entities in a GTM Folder.
   * @alias tagmanager.accounts.containers.workspaces.folders.entities
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  entities(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$FolderEntities>;
  entities(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FolderEntities>,
      callback?: BodyResponseCallback<Schema$FolderEntities>): void;
  entities(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FolderEntities>,
      callback?: BodyResponseCallback<Schema$FolderEntities>):
      void|AxiosPromise<Schema$FolderEntities> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:entities')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FolderEntities>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FolderEntities>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.get
   * @desc Gets a GTM Folder.
   * @alias tagmanager.accounts.containers.workspaces.folders.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.list
   * @desc Lists all GTM Folders of a Container.
   * @alias tagmanager.accounts.containers.workspaces.folders.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFoldersResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListFoldersResponse>,
      callback?: BodyResponseCallback<Schema$ListFoldersResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListFoldersResponse>,
      callback?: BodyResponseCallback<Schema$ListFoldersResponse>):
      void|AxiosPromise<Schema$ListFoldersResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/folders')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFoldersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFoldersResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
   * @desc Moves entities to a GTM Folder.
   * @alias
   * tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
   * @param {string=} params.tagId The tags to be moved to the folder.
   * @param {string=} params.triggerId The triggers to be moved to the folder.
   * @param {string=} params.variableId The variables to be moved to the folder.
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  move_entities_to_folder(params?: any, options?: MethodOptions):
      AxiosPromise<void>;
  move_entities_to_folder(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  move_entities_to_folder(
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
            url: (rootUrl + '/tagmanager/v2/{+path}:move_entities_to_folder')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.revert
   * @desc Reverts changes to a GTM Folder in a GTM Workspace.
   * @alias tagmanager.accounts.containers.workspaces.folders.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
   * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RevertFolderResponse>;
  revert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RevertFolderResponse>,
      callback?: BodyResponseCallback<Schema$RevertFolderResponse>): void;
  revert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RevertFolderResponse>,
      callback?: BodyResponseCallback<Schema$RevertFolderResponse>):
      void|AxiosPromise<Schema$RevertFolderResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RevertFolderResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RevertFolderResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.folders.update
   * @desc Updates a GTM Folder.
   * @alias tagmanager.accounts.containers.workspaces.folders.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the folder in storage.
   * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Workspaces$Proposal {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.proposal.create
   * @desc Creates a GTM Workspace Proposal.
   * @alias tagmanager.accounts.containers.workspaces.proposal.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{aid}/containers/{cid}/workspace/{wid}
   * @param {().CreateWorkspaceProposalRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkspaceProposal>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkspaceProposal>,
      callback?: BodyResponseCallback<Schema$WorkspaceProposal>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkspaceProposal>,
      callback?: BodyResponseCallback<Schema$WorkspaceProposal>):
      void|AxiosPromise<Schema$WorkspaceProposal> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/proposal')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkspaceProposal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkspaceProposal>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.proposal.delete
   * @desc Deletes a GTM Workspace Proposal.
   * @alias tagmanager.accounts.containers.workspaces.proposal.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Workspaces$Tags {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.tags.create
   * @desc Creates a GTM Tag.
   * @alias tagmanager.accounts.containers.workspaces.tags.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().Tag} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Tag>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>):
      void|AxiosPromise<Schema$Tag> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/tags')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Tag>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Tag>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.tags.delete
   * @desc Deletes a GTM Tag.
   * @alias tagmanager.accounts.containers.workspaces.tags.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.tags.get
   * @desc Gets a GTM Tag.
   * @alias tagmanager.accounts.containers.workspaces.tags.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Tag>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>):
      void|AxiosPromise<Schema$Tag> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Tag>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Tag>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.tags.list
   * @desc Lists all GTM Tags of a Container.
   * @alias tagmanager.accounts.containers.workspaces.tags.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTagsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTagsResponse>,
      callback?: BodyResponseCallback<Schema$ListTagsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTagsResponse>,
      callback?: BodyResponseCallback<Schema$ListTagsResponse>):
      void|AxiosPromise<Schema$ListTagsResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/tags')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTagsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTagsResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.tags.revert
   * @desc Reverts changes to a GTM Tag in a GTM Workspace.
   * @alias tagmanager.accounts.containers.workspaces.tags.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of thetag in storage.
   * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RevertTagResponse>;
  revert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RevertTagResponse>,
      callback?: BodyResponseCallback<Schema$RevertTagResponse>): void;
  revert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RevertTagResponse>,
      callback?: BodyResponseCallback<Schema$RevertTagResponse>):
      void|AxiosPromise<Schema$RevertTagResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RevertTagResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RevertTagResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.tags.update
   * @desc Updates a GTM Tag.
   * @alias tagmanager.accounts.containers.workspaces.tags.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
   * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
   * @param {().Tag} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Tag>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>):
      void|AxiosPromise<Schema$Tag> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Tag>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Tag>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Workspaces$Triggers {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.triggers.create
   * @desc Creates a GTM Trigger.
   * @alias tagmanager.accounts.containers.workspaces.triggers.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().Trigger} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Trigger>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>):
      void|AxiosPromise<Schema$Trigger> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/triggers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Trigger>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Trigger>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.triggers.delete
   * @desc Deletes a GTM Trigger.
   * @alias tagmanager.accounts.containers.workspaces.triggers.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.triggers.get
   * @desc Gets a GTM Trigger.
   * @alias tagmanager.accounts.containers.workspaces.triggers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Trigger>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>):
      void|AxiosPromise<Schema$Trigger> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Trigger>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Trigger>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.triggers.list
   * @desc Lists all GTM Triggers of a Container.
   * @alias tagmanager.accounts.containers.workspaces.triggers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTriggersResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTriggersResponse>,
      callback?: BodyResponseCallback<Schema$ListTriggersResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTriggersResponse>,
      callback?: BodyResponseCallback<Schema$ListTriggersResponse>):
      void|AxiosPromise<Schema$ListTriggersResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/triggers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTriggersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTriggersResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.triggers.revert
   * @desc Reverts changes to a GTM Trigger in a GTM Workspace.
   * @alias tagmanager.accounts.containers.workspaces.triggers.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
   * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RevertTriggerResponse>;
  revert(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RevertTriggerResponse>,
      callback?: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
  revert(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RevertTriggerResponse>,
      callback?: BodyResponseCallback<Schema$RevertTriggerResponse>):
      void|AxiosPromise<Schema$RevertTriggerResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RevertTriggerResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RevertTriggerResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.triggers.update
   * @desc Updates a GTM Trigger.
   * @alias tagmanager.accounts.containers.workspaces.triggers.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
   * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
   * @param {().Trigger} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Trigger>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>):
      void|AxiosPromise<Schema$Trigger> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Trigger>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Trigger>(parameters);
    }
  }
}

export class Resource$Accounts$Containers$Workspaces$Variables {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.containers.workspaces.variables.create
   * @desc Creates a GTM Variable.
   * @alias tagmanager.accounts.containers.workspaces.variables.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {().Variable} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Variable>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>):
      void|AxiosPromise<Schema$Variable> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/variables')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Variable>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Variable>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.variables.delete
   * @desc Deletes a GTM Variable.
   * @alias tagmanager.accounts.containers.workspaces.variables.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.variables.get
   * @desc Gets a GTM Variable.
   * @alias tagmanager.accounts.containers.workspaces.variables.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Variable>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>):
      void|AxiosPromise<Schema$Variable> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Variable>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Variable>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.variables.list
   * @desc Lists all GTM Variables of a Container.
   * @alias tagmanager.accounts.containers.workspaces.variables.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListVariablesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListVariablesResponse>,
      callback?: BodyResponseCallback<Schema$ListVariablesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListVariablesResponse>,
      callback?: BodyResponseCallback<Schema$ListVariablesResponse>):
      void|AxiosPromise<Schema$ListVariablesResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/variables')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListVariablesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListVariablesResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.variables.revert
   * @desc Reverts changes to a GTM Variable in a GTM Workspace.
   * @alias tagmanager.accounts.containers.workspaces.variables.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
   * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RevertVariableResponse>;
  revert(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RevertVariableResponse>,
      callback?: BodyResponseCallback<Schema$RevertVariableResponse>): void;
  revert(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RevertVariableResponse>,
      callback?: BodyResponseCallback<Schema$RevertVariableResponse>):
      void|AxiosPromise<Schema$RevertVariableResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RevertVariableResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RevertVariableResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.containers.workspaces.variables.update
   * @desc Updates a GTM Variable.
   * @alias tagmanager.accounts.containers.workspaces.variables.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
   * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
   * @param {().Variable} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Variable>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>):
      void|AxiosPromise<Schema$Variable> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Variable>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Variable>(parameters);
    }
  }
}



export class Resource$Accounts$User_permissions {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * tagmanager.accounts.user_permissions.create
   * @desc Creates a user's Account & Container access.
   * @alias tagmanager.accounts.user_permissions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}
   * @param {().UserPermission} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UserPermission>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>):
      void|AxiosPromise<Schema$UserPermission> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/user_permissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserPermission>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserPermission>(parameters);
    }
  }


  /**
   * tagmanager.accounts.user_permissions.delete
   * @desc Removes a user from the account, revoking access to it and all of its
   * containers.
   * @alias tagmanager.accounts.user_permissions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * tagmanager.accounts.user_permissions.get
   * @desc Gets a user's Account & Container access.
   * @alias tagmanager.accounts.user_permissions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$UserPermission>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>):
      void|AxiosPromise<Schema$UserPermission> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserPermission>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserPermission>(parameters);
    }
  }


  /**
   * tagmanager.accounts.user_permissions.list
   * @desc List all users that have access to the account along with Account and
   * Container user access granted to each of them.
   * @alias tagmanager.accounts.user_permissions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.pageToken Continuation token for fetching the next page of results.
   * @param {string} params.parent GTM Accounts's API relative path. Example: accounts/{account_id}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListUserPermissionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListUserPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$ListUserPermissionsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListUserPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$ListUserPermissionsResponse>):
      void|AxiosPromise<Schema$ListUserPermissionsResponse> {
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/user_permissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListUserPermissionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListUserPermissionsResponse>(parameters);
    }
  }


  /**
   * tagmanager.accounts.user_permissions.update
   * @desc Updates a user's Account & Container access.
   * @alias tagmanager.accounts.user_permissions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
   * @param {().UserPermission} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UserPermission>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>):
      void|AxiosPromise<Schema$UserPermission> {
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
            url: (rootUrl + '/tagmanager/v2/{+path}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['path'],
      pathParams: ['path'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserPermission>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserPermission>(parameters);
    }
  }
}
