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
 * const tagmanager = google.tagmanager('v1');
 *
 * @namespace tagmanager
 * @type {Function}
 * @version v1
 * @variation v1
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

    this.accounts = new Resource$Accounts(this);
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
   * Whether the account shares data anonymously with Google and others.
   */
  shareData: boolean;
}
/**
 * Defines the Google Tag Manager Account access permissions.
 */
export interface Schema$AccountAccess {
  /**
   * List of Account permissions. Valid account permissions are read and manage.
   */
  permission: string[];
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
 * Represents a Google Tag Manager Container.
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
   * Optional list of domain names associated with the Container.
   */
  domainName: string[];
  /**
   * List of enabled built-in variables. Valid values include: pageUrl,
   * pageHostname, pagePath, referrer, event, clickElement, clickClasses,
   * clickId, clickTarget, clickUrl, clickText, formElement, formClasses,
   * formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine,
   * newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState,
   * historySource, containerVersion, debugMode, randomNumber, containerId.
   */
  enabledBuiltInVariable: string[];
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
   * Container Public ID.
   */
  publicId: string;
  /**
   * Container Country ID.
   */
  timeZoneCountryId: string;
  /**
   * Container Time Zone ID.
   */
  timeZoneId: string;
  /**
   * List of Usage Contexts for the Container. Valid values include: web,
   * android, ios.
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
   * List of Container permissions. Valid container permissions are: read, edit,
   * delete, publish.
   */
  permission: string[];
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
   * The fingerprint of the GTM Container Version as computed at storage time.
   * This value is recomputed whenever the container version is modified.
   */
  fingerprint: string;
  /**
   * The folders in the container that this version was taken from.
   */
  folder: Schema$Folder[];
  /**
   * The macros in the container that this version was taken from.
   */
  macro: Schema$Macro[];
  /**
   * Container version display name.
   */
  name: string;
  /**
   * User notes on how to apply this container version in the container.
   */
  notes: string;
  /**
   * The rules in the container that this version was taken from.
   */
  rule: Schema$Rule[];
  /**
   * The tags in the container that this version was taken from.
   */
  tag: Schema$Tag[];
  /**
   * The triggers in the container that this version was taken from.
   */
  trigger: Schema$Trigger[];
  /**
   * The variables in the container that this version was taken from.
   */
  variable: Schema$Variable[];
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
  /**
   * The creation of this version may be for quick preview and shouldn&#39;t be
   * saved.
   */
  quickPreview: boolean;
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
  authorizationTimestampMs: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  containerVersionId: string;
  /**
   * The environment description. Can be set or changed only on USER type
   * environments.
   */
  description: string;
  /**
   * Whether or not to enable debug by default on for the environment.
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
   * The type of this environment.
   */
  type: string;
  /**
   * Default preview page url for the environment.
   */
  url: string;
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
}
/**
 * Represents a Google Tag Manager Folder&#39;s contents.
 */
export interface Schema$FolderEntities {
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
 * List Accounts Response.
 */
export interface Schema$ListAccountsResponse {
  /**
   * List of GTM Accounts that a user has access to.
   */
  accounts: Schema$Account[];
}
/**
 * List AccountUsers Response.
 */
export interface Schema$ListAccountUsersResponse {
  /**
   * All GTM AccountUsers of a GTM Account.
   */
  userAccess: Schema$UserAccess[];
}
/**
 * List Containers Response.
 */
export interface Schema$ListContainersResponse {
  /**
   * All Containers of a GTM Account.
   */
  containers: Schema$Container[];
}
/**
 * List container versions response.
 */
export interface Schema$ListContainerVersionsResponse {
  /**
   * All versions of a GTM Container.
   */
  containerVersion: Schema$ContainerVersion[];
  /**
   * All container version headers of a GTM Container.
   */
  containerVersionHeader: Schema$ContainerVersionHeader[];
}
/**
 * List Environments Response.
 */
export interface Schema$ListEnvironmentsResponse {
  /**
   * All Environments of a GTM Container.
   */
  environments: Schema$Environment[];
}
/**
 * List Folders Response.
 */
export interface Schema$ListFoldersResponse {
  /**
   * All GTM Folders of a GTM Container.
   */
  folders: Schema$Folder[];
}
/**
 * List Tags Response.
 */
export interface Schema$ListTagsResponse {
  /**
   * All GTM Tags of a GTM Container.
   */
  tags: Schema$Tag[];
}
/**
 * List triggers response.
 */
export interface Schema$ListTriggersResponse {
  /**
   * All GTM Triggers of a GTM Container.
   */
  triggers: Schema$Trigger[];
}
/**
 * List Variables Response.
 */
export interface Schema$ListVariablesResponse {
  /**
   * All GTM Variables of a GTM Container.
   */
  variables: Schema$Variable[];
}
/**
 * Represents a Google Tag Manager Macro.
 */
export interface Schema$Macro {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * For mobile containers only: A list of rule IDs for disabling conditional
   * macros; the macro is enabled if one of the enabling rules is true while all
   * the disabling rules are false. Treated as an unordered set.
   */
  disablingRuleId: string[];
  /**
   * For mobile containers only: A list of rule IDs for enabling conditional
   * macros; the macro is enabled if one of the enabling rules is true while all
   * the disabling rules are false. Treated as an unordered set.
   */
  enablingRuleId: string[];
  /**
   * The fingerprint of the GTM Macro as computed at storage time. This value is
   * recomputed whenever the macro is modified.
   */
  fingerprint: string;
  /**
   * The Macro ID uniquely identifies the GTM Macro.
   */
  macroId: string;
  /**
   * Macro display name.
   */
  name: string;
  /**
   * User notes on how to apply this macro in the container.
   */
  notes: string;
  /**
   * The macro&#39;s parameters.
   */
  parameter: Schema$Parameter[];
  /**
   * Parent folder id.
   */
  parentFolderId: string;
  /**
   * The end timestamp in milliseconds to schedule a macro.
   */
  scheduleEndMs: string;
  /**
   * The start timestamp in milliseconds to schedule a macro.
   */
  scheduleStartMs: string;
  /**
   * GTM Macro Type.
   */
  type: string;
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
 * Represents a Google Tag Manager Rule.
 */
export interface Schema$Rule {
  /**
   * GTM Account ID.
   */
  accountId: string;
  /**
   * The list of conditions that make up this rule (implicit AND between them).
   */
  condition: Schema$Condition[];
  /**
   * GTM Container ID.
   */
  containerId: string;
  /**
   * The fingerprint of the GTM Rule as computed at storage time. This value is
   * recomputed whenever the rule is modified.
   */
  fingerprint: string;
  /**
   * Rule display name.
   */
  name: string;
  /**
   * User notes on how to apply this rule in the container.
   */
  notes: string;
  /**
   * The Rule ID uniquely identifies the GTM Rule.
   */
  ruleId: string;
}
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
   * True if the tag is paused.
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
   * The list of teardown tags. Currently we only allow one.
   */
  teardownTag: Schema$TeardownTag[];
  /**
   * GTM Tag Type.
   */
  type: string;
}
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
   * Additional parameters.
   */
  parameter: Schema$Parameter[];
  /**
   * Parent folder id.
   */
  parentFolderId: string;
  /**
   * A click trigger CSS selector (i.e. &quot;a&quot;, &quot;button&quot; etc.).
   * Only valid for AMP Click trigger.
   */
  selector: Schema$Parameter;
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
}
/**
 * Represents a user&#39;s permissions to an account and its container.
 */
export interface Schema$UserAccess {
  /**
   * GTM Account access permissions.
   */
  accountAccess: Schema$AccountAccess;
  /**
   * GTM Account ID.
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
   * Account Permission ID.
   */
  permissionId: string;
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
   * The end timestamp in milliseconds to schedule a variable.
   */
  scheduleEndMs: string;
  /**
   * The start timestamp in milliseconds to schedule a variable.
   */
  scheduleStartMs: string;
  /**
   * GTM Variable Type.
   */
  type: string;
  /**
   * The Variable ID uniquely identifies the GTM Variable.
   */
  variableId: string;
}

export class Resource$Accounts {
  root: Tagmanager;
  containers: Resource$Accounts$Containers;
  permissions: Resource$Accounts$Permissions;
  constructor(root: Tagmanager) {
    this.root = root;
    this.containers = new Resource$Accounts$Containers(root);
    this.permissions = new Resource$Accounts$Permissions(root);
  }

  /**
   * tagmanager.accounts.get
   * @desc Gets a GTM Account.
   * @alias tagmanager.accounts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Account>,
       callback?: BodyResponseCallback<Schema$Account>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/tagmanager/v1/accounts/{accountId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$Account>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.list
   * @desc Lists all GTM Accounts that a user has access to.
   * @alias tagmanager.accounts.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ListAccountsResponse>,
       callback?: BodyResponseCallback<Schema$ListAccountsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/tagmanager/v1/accounts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$ListAccountsResponse>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.update
   * @desc Updates a GTM Account.
   * @alias tagmanager.accounts.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the account in storage.
   * @param {().Account} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Account>,
       callback?: BodyResponseCallback<Schema$Account>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/tagmanager/v1/accounts/{accountId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$Account>(parameters, callback!);
      };
}
export class Resource$Accounts$Containers {
  root: Tagmanager;
  environments: Resource$Accounts$Containers$Environments;
  folders: Resource$Accounts$Containers$Folders;
  move_folders: Resource$Accounts$Containers$Move_folders;
  reauthorize_environments:
      Resource$Accounts$Containers$Reauthorize_environments;
  tags: Resource$Accounts$Containers$Tags;
  triggers: Resource$Accounts$Containers$Triggers;
  variables: Resource$Accounts$Containers$Variables;
  versions: Resource$Accounts$Containers$Versions;
  constructor(root: Tagmanager) {
    this.root = root;
    this.environments = new Resource$Accounts$Containers$Environments(root);
    this.folders = new Resource$Accounts$Containers$Folders(root);
    this.move_folders = new Resource$Accounts$Containers$Move_folders(root);
    this.reauthorize_environments =
        new Resource$Accounts$Containers$Reauthorize_environments(root);
    this.tags = new Resource$Accounts$Containers$Tags(root);
    this.triggers = new Resource$Accounts$Containers$Triggers(root);
    this.variables = new Resource$Accounts$Containers$Variables(root);
    this.versions = new Resource$Accounts$Containers$Versions(root);
  }

  /**
   * tagmanager.accounts.containers.create
   * @desc Creates a Container.
   * @alias tagmanager.accounts.containers.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {().Container} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Container>,
       callback?: BodyResponseCallback<Schema$Container>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/tagmanager/v1/accounts/{accountId}/containers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$Container>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.delete
   * @desc Deletes a Container.
   * @alias tagmanager.accounts.containers.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.get
   * @desc Gets a Container.
   * @alias tagmanager.accounts.containers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Container>,
       callback?: BodyResponseCallback<Schema$Container>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Container>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.list
   * @desc Lists all Containers that belongs to a GTM Account.
   * @alias tagmanager.accounts.containers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$ListContainersResponse>,
       callback?: BodyResponseCallback<Schema$ListContainersResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/tagmanager/v1/accounts/{accountId}/containers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$ListContainersResponse>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.update
   * @desc Updates a Container.
   * @alias tagmanager.accounts.containers.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container in storage.
   * @param {().Container} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Container>,
       callback?: BodyResponseCallback<Schema$Container>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Container>(parameters, callback!);
      };
}
export class Resource$Accounts$Containers$Environments {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.environments.create
   * @desc Creates a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Environment>,
       callback?: BodyResponseCallback<Schema$Environment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Environment>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.environments.delete
   * @desc Deletes a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.environmentId The GTM Environment ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'environmentId'],
          pathParams: ['accountId', 'containerId', 'environmentId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.environments.get
   * @desc Gets a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.environmentId The GTM Environment ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Environment>,
       callback?: BodyResponseCallback<Schema$Environment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'environmentId'],
          pathParams: ['accountId', 'containerId', 'environmentId'],
          context: this.root
        };
        createAPIRequest<Schema$Environment>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.environments.list
   * @desc Lists all GTM Environments of a GTM Container.
   * @alias tagmanager.accounts.containers.environments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$ListEnvironmentsResponse>,
       callback?: BodyResponseCallback<Schema$ListEnvironmentsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$ListEnvironmentsResponse>(
            parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.environments.patch
   * @desc Updates a GTM Environment. This method supports patch semantics.
   * @alias tagmanager.accounts.containers.environments.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.environmentId The GTM Environment ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Environment>,
       callback?: BodyResponseCallback<Schema$Environment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'environmentId'],
          pathParams: ['accountId', 'containerId', 'environmentId'],
          context: this.root
        };
        createAPIRequest<Schema$Environment>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.environments.update
   * @desc Updates a GTM Environment.
   * @alias tagmanager.accounts.containers.environments.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.environmentId The GTM Environment ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Environment>,
       callback?: BodyResponseCallback<Schema$Environment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'environmentId'],
          pathParams: ['accountId', 'containerId', 'environmentId'],
          context: this.root
        };
        createAPIRequest<Schema$Environment>(parameters, callback!);
      };
}

export class Resource$Accounts$Containers$Folders {
  root: Tagmanager;
  entities: Resource$Accounts$Containers$Folders$Entities;
  constructor(root: Tagmanager) {
    this.root = root;
    this.entities = new Resource$Accounts$Containers$Folders$Entities(root);
  }

  /**
   * tagmanager.accounts.containers.folders.create
   * @desc Creates a GTM Folder.
   * @alias tagmanager.accounts.containers.folders.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
       callback?: BodyResponseCallback<Schema$Folder>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Folder>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.folders.delete
   * @desc Deletes a GTM Folder.
   * @alias tagmanager.accounts.containers.folders.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.folderId The GTM Folder ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'folderId'],
          pathParams: ['accountId', 'containerId', 'folderId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.folders.get
   * @desc Gets a GTM Folder.
   * @alias tagmanager.accounts.containers.folders.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.folderId The GTM Folder ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
       callback?: BodyResponseCallback<Schema$Folder>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'folderId'],
          pathParams: ['accountId', 'containerId', 'folderId'],
          context: this.root
        };
        createAPIRequest<Schema$Folder>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.folders.list
   * @desc Lists all GTM Folders of a Container.
   * @alias tagmanager.accounts.containers.folders.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ListFoldersResponse>,
       callback?: BodyResponseCallback<Schema$ListFoldersResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$ListFoldersResponse>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.folders.update
   * @desc Updates a GTM Folder.
   * @alias tagmanager.accounts.containers.folders.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the folder in storage.
   * @param {string} params.folderId The GTM Folder ID.
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
       callback?: BodyResponseCallback<Schema$Folder>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'folderId'],
          pathParams: ['accountId', 'containerId', 'folderId'],
          context: this.root
        };
        createAPIRequest<Schema$Folder>(parameters, callback!);
      };
}
export class Resource$Accounts$Containers$Folders$Entities {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.folders.entities.list
   * @desc List all entities in a GTM Folder.
   * @alias tagmanager.accounts.containers.folders.entities.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.folderId The GTM Folder ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$FolderEntities>,
       callback?: BodyResponseCallback<Schema$FolderEntities>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'folderId'],
          pathParams: ['accountId', 'containerId', 'folderId'],
          context: this.root
        };
        createAPIRequest<Schema$FolderEntities>(parameters, callback!);
      };
}


export class Resource$Accounts$Containers$Move_folders {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.move_folders.update
   * @desc Moves entities to a GTM Folder.
   * @alias tagmanager.accounts.containers.move_folders.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.folderId The GTM Folder ID.
   * @param {string=} params.tagId The tags to be moved to the folder.
   * @param {string=} params.triggerId The triggers to be moved to the folder.
   * @param {string=} params.variableId The variables to be moved to the folder.
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'folderId'],
          pathParams: ['accountId', 'containerId', 'folderId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };
}

export class Resource$Accounts$Containers$Reauthorize_environments {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.reauthorize_environments.update
   * @desc Re-generates the authorization code for a GTM Environment.
   * @alias tagmanager.accounts.containers.reauthorize_environments.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.environmentId The GTM Environment ID.
   * @param {().Environment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Environment>,
       callback?: BodyResponseCallback<Schema$Environment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'environmentId'],
          pathParams: ['accountId', 'containerId', 'environmentId'],
          context: this.root
        };
        createAPIRequest<Schema$Environment>(parameters, callback!);
      };
}

export class Resource$Accounts$Containers$Tags {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.tags.create
   * @desc Creates a GTM Tag.
   * @alias tagmanager.accounts.containers.tags.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {().Tag} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Tag>,
       callback?: BodyResponseCallback<Schema$Tag>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Tag>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.tags.delete
   * @desc Deletes a GTM Tag.
   * @alias tagmanager.accounts.containers.tags.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.tagId The GTM Tag ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'tagId'],
          pathParams: ['accountId', 'containerId', 'tagId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.tags.get
   * @desc Gets a GTM Tag.
   * @alias tagmanager.accounts.containers.tags.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.tagId The GTM Tag ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Tag>,
       callback?: BodyResponseCallback<Schema$Tag>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'tagId'],
          pathParams: ['accountId', 'containerId', 'tagId'],
          context: this.root
        };
        createAPIRequest<Schema$Tag>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.tags.list
   * @desc Lists all GTM Tags of a Container.
   * @alias tagmanager.accounts.containers.tags.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ListTagsResponse>,
       callback?: BodyResponseCallback<Schema$ListTagsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$ListTagsResponse>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.tags.update
   * @desc Updates a GTM Tag.
   * @alias tagmanager.accounts.containers.tags.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
   * @param {string} params.tagId The GTM Tag ID.
   * @param {().Tag} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Tag>,
       callback?: BodyResponseCallback<Schema$Tag>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'tagId'],
          pathParams: ['accountId', 'containerId', 'tagId'],
          context: this.root
        };
        createAPIRequest<Schema$Tag>(parameters, callback!);
      };
}

export class Resource$Accounts$Containers$Triggers {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.triggers.create
   * @desc Creates a GTM Trigger.
   * @alias tagmanager.accounts.containers.triggers.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {().Trigger} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Trigger>,
       callback?: BodyResponseCallback<Schema$Trigger>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Trigger>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.triggers.delete
   * @desc Deletes a GTM Trigger.
   * @alias tagmanager.accounts.containers.triggers.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.triggerId The GTM Trigger ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'triggerId'],
          pathParams: ['accountId', 'containerId', 'triggerId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.triggers.get
   * @desc Gets a GTM Trigger.
   * @alias tagmanager.accounts.containers.triggers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.triggerId The GTM Trigger ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Trigger>,
       callback?: BodyResponseCallback<Schema$Trigger>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'triggerId'],
          pathParams: ['accountId', 'containerId', 'triggerId'],
          context: this.root
        };
        createAPIRequest<Schema$Trigger>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.triggers.list
   * @desc Lists all GTM Triggers of a Container.
   * @alias tagmanager.accounts.containers.triggers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ListTriggersResponse>,
       callback?: BodyResponseCallback<Schema$ListTriggersResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$ListTriggersResponse>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.triggers.update
   * @desc Updates a GTM Trigger.
   * @alias tagmanager.accounts.containers.triggers.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
   * @param {string} params.triggerId The GTM Trigger ID.
   * @param {().Trigger} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Trigger>,
       callback?: BodyResponseCallback<Schema$Trigger>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'triggerId'],
          pathParams: ['accountId', 'containerId', 'triggerId'],
          context: this.root
        };
        createAPIRequest<Schema$Trigger>(parameters, callback!);
      };
}

export class Resource$Accounts$Containers$Variables {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.variables.create
   * @desc Creates a GTM Variable.
   * @alias tagmanager.accounts.containers.variables.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {().Variable} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Variable>,
       callback?: BodyResponseCallback<Schema$Variable>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$Variable>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.variables.delete
   * @desc Deletes a GTM Variable.
   * @alias tagmanager.accounts.containers.variables.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.variableId The GTM Variable ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'variableId'],
          pathParams: ['accountId', 'containerId', 'variableId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.variables.get
   * @desc Gets a GTM Variable.
   * @alias tagmanager.accounts.containers.variables.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.variableId The GTM Variable ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Variable>,
       callback?: BodyResponseCallback<Schema$Variable>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'variableId'],
          pathParams: ['accountId', 'containerId', 'variableId'],
          context: this.root
        };
        createAPIRequest<Schema$Variable>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.variables.list
   * @desc Lists all GTM Variables of a Container.
   * @alias tagmanager.accounts.containers.variables.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$ListVariablesResponse>,
       callback?: BodyResponseCallback<Schema$ListVariablesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$ListVariablesResponse>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.variables.update
   * @desc Updates a GTM Variable.
   * @alias tagmanager.accounts.containers.variables.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
   * @param {string} params.variableId The GTM Variable ID.
   * @param {().Variable} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Variable>,
       callback?: BodyResponseCallback<Schema$Variable>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'variableId'],
          pathParams: ['accountId', 'containerId', 'variableId'],
          context: this.root
        };
        createAPIRequest<Schema$Variable>(parameters, callback!);
      };
}

export class Resource$Accounts$Containers$Versions {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.containers.versions.create
   * @desc Creates a Container Version.
   * @alias tagmanager.accounts.containers.versions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {().CreateContainerVersionRequestVersionOptions} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$CreateContainerVersionResponse>,
       callback?:
           BodyResponseCallback<Schema$CreateContainerVersionResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$CreateContainerVersionResponse>(
            parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.delete
   * @desc Deletes a Container Version.
   * @alias tagmanager.accounts.containers.versions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.containerVersionId The GTM Container Version ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'containerVersionId'],
          pathParams: ['accountId', 'containerId', 'containerVersionId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.get
   * @desc Gets a Container Version.
   * @alias tagmanager.accounts.containers.versions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.containerVersionId The GTM Container Version ID. Specify published to retrieve the currently published version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
       callback?: BodyResponseCallback<Schema$ContainerVersion>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'containerVersionId'],
          pathParams: ['accountId', 'containerId', 'containerVersionId'],
          context: this.root
        };
        createAPIRequest<Schema$ContainerVersion>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.list
   * @desc Lists all Container Versions of a GTM Container.
   * @alias tagmanager.accounts.containers.versions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {boolean=} params.headers Retrieve headers only when true.
   * @param {boolean=} params.includeDeleted Also retrieve deleted (archived) versions when true.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$ListContainerVersionsResponse>,
       callback?:
           BodyResponseCallback<Schema$ListContainerVersionsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: this.root
        };
        createAPIRequest<Schema$ListContainerVersionsResponse>(
            parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.publish
   * @desc Publishes a Container Version.
   * @alias tagmanager.accounts.containers.versions.publish
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.containerVersionId The GTM Container Version ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publish =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$PublishContainerVersionResponse>,
       callback?:
           BodyResponseCallback<Schema$PublishContainerVersionResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'containerVersionId'],
          pathParams: ['accountId', 'containerId', 'containerVersionId'],
          context: this.root
        };
        createAPIRequest<Schema$PublishContainerVersionResponse>(
            parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.restore
   * @desc Restores a Container Version. This will overwrite the container's
   * current configuration (including its variables, triggers and tags). The
   * operation will not have any effect on the version that is being served
   * (i.e. the published version).
   * @alias tagmanager.accounts.containers.versions.restore
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.containerVersionId The GTM Container Version ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  restore =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
       callback?: BodyResponseCallback<Schema$ContainerVersion>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'containerVersionId'],
          pathParams: ['accountId', 'containerId', 'containerVersionId'],
          context: this.root
        };
        createAPIRequest<Schema$ContainerVersion>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.undelete
   * @desc Undeletes a Container Version.
   * @alias tagmanager.accounts.containers.versions.undelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.containerVersionId The GTM Container Version ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  undelete =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
       callback?: BodyResponseCallback<Schema$ContainerVersion>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'containerVersionId'],
          pathParams: ['accountId', 'containerId', 'containerVersionId'],
          context: this.root
        };
        createAPIRequest<Schema$ContainerVersion>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.containers.versions.update
   * @desc Updates a Container Version.
   * @alias tagmanager.accounts.containers.versions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.containerId The GTM Container ID.
   * @param {string} params.containerVersionId The GTM Container Version ID.
   * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
   * @param {().ContainerVersion} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ContainerVersion>,
       callback?: BodyResponseCallback<Schema$ContainerVersion>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'containerId', 'containerVersionId'],
          pathParams: ['accountId', 'containerId', 'containerVersionId'],
          context: this.root
        };
        createAPIRequest<Schema$ContainerVersion>(parameters, callback!);
      };
}


export class Resource$Accounts$Permissions {
  root: Tagmanager;
  constructor(root: Tagmanager) {
    this.root = root;
  }

  /**
   * tagmanager.accounts.permissions.create
   * @desc Creates a user's Account & Container Permissions.
   * @alias tagmanager.accounts.permissions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {().UserAccess} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UserAccess>,
       callback?: BodyResponseCallback<Schema$UserAccess>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/tagmanager/v1/accounts/{accountId}/permissions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$UserAccess>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.permissions.delete
   * @desc Removes a user from the account, revoking access to it and all of its
   * containers.
   * @alias tagmanager.accounts.permissions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.permissionId The GTM User ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['accountId', 'permissionId'],
          pathParams: ['accountId', 'permissionId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.permissions.get
   * @desc Gets a user's Account & Container Permissions.
   * @alias tagmanager.accounts.permissions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.permissionId The GTM User ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UserAccess>,
       callback?: BodyResponseCallback<Schema$UserAccess>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId', 'permissionId'],
          pathParams: ['accountId', 'permissionId'],
          context: this.root
        };
        createAPIRequest<Schema$UserAccess>(parameters, callback!);
      };


  /**
   * tagmanager.accounts.permissions.list
   * @desc List all users that have access to the account along with Account and
   * Container Permissions granted to each of them.
   * @alias tagmanager.accounts.permissions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID. @required tagmanager.accounts.permissions.list
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$ListAccountUsersResponse>,
       callback?: BodyResponseCallback<Schema$ListAccountUsersResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/tagmanager/v1/accounts/{accountId}/permissions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: this.root
        };
        createAPIRequest<Schema$ListAccountUsersResponse>(
            parameters, callback!);
      };


  /**
   * tagmanager.accounts.permissions.update
   * @desc Updates a user's Account & Container Permissions.
   * @alias tagmanager.accounts.permissions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The GTM Account ID.
   * @param {string} params.permissionId The GTM User ID.
   * @param {().UserAccess} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$UserAccess>,
       callback?: BodyResponseCallback<Schema$UserAccess>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['accountId', 'permissionId'],
          pathParams: ['accountId', 'permissionId'],
          context: this.root
        };
        createAPIRequest<Schema$UserAccess>(parameters, callback!);
      };
}
