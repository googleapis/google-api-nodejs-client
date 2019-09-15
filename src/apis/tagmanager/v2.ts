/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace tagmanager_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Tag Manager API
   *
   * Accesses Tag Manager accounts and containers.
   *
   * @example
   * const {google} = require('googleapis');
   * const tagmanager = google.tagmanager('v2');
   *
   * @namespace tagmanager
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Tagmanager
   */
  export class Tagmanager {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Represents a Google Tag Manager Account.
   */
  export interface Schema$Account {
    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string | null;
    /**
     * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string | null;
    /**
     * Account display name.
     */
    name?: string | null;
    /**
     * GTM Account&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service.
     */
    shareData?: boolean | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
  }
  /**
   * Defines the Google Tag Manager Account access permissions.
   */
  export interface Schema$AccountAccess {
    /**
     * Whether the user has no access, user access, or admin access to an account.
     */
    permission?: string | null;
  }
  /**
   * Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing propeties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
   */
  export interface Schema$BuiltInVariable {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * Name of the built-in variable to be used to refer to the built-in variable.
     */
    name?: string | null;
    /**
     * GTM BuiltInVariable&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Type of built-in variable.
     */
    type?: string | null;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
  }
  /**
   * Represents a predicate.
   */
  export interface Schema$Condition {
    /**
     * A list of named parameters (key/value), depending on the condition&#39;s type. Notes:  - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively.  - At this time, the left operand (arg0) must be a reference to a variable.  - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive.  - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true.
     */
    parameter?: Schema$Parameter[];
    /**
     * The type of operator for this condition.
     */
    type?: string | null;
  }
  /**
   * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
   */
  export interface Schema$Container {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * The Container ID uniquely identifies the GTM Container.
     */
    containerId?: string | null;
    /**
     * List of domain names associated with the Container.
     */
    domainName?: string[] | null;
    /**
     * The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string | null;
    /**
     * Container display name.
     */
    name?: string | null;
    /**
     * Container Notes.
     */
    notes?: string | null;
    /**
     * GTM Container&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Container Public ID.
     */
    publicId?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * List of Usage Contexts for the Container. Valid values include: web, android, or ios.
     */
    usageContext?: string[] | null;
  }
  /**
   * Defines the Google Tag Manager Container access permissions.
   */
  export interface Schema$ContainerAccess {
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * List of Container permissions.
     */
    permission?: string | null;
  }
  /**
   * Represents a Google Tag Manager Container Version.
   */
  export interface Schema$ContainerVersion {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * The built-in variables in the container that this version was taken from.
     */
    builtInVariable?: Schema$BuiltInVariable[];
    /**
     * The container that this version was taken from.
     */
    container?: Schema$Container;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * The Container Version ID uniquely identifies the GTM Container Version.
     */
    containerVersionId?: string | null;
    /**
     * The custom templates in the container that this version was taken from.
     */
    customTemplate?: Schema$CustomTemplate[];
    /**
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean | null;
    /**
     * Container version description.
     */
    description?: string | null;
    /**
     * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
     */
    fingerprint?: string | null;
    /**
     * The folders in the container that this version was taken from.
     */
    folder?: Schema$Folder[];
    /**
     * Container version display name.
     */
    name?: string | null;
    /**
     * GTM ContainerVersions&#39;s API relative path.
     */
    path?: string | null;
    /**
     * The tags in the container that this version was taken from.
     */
    tag?: Schema$Tag[];
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * The triggers in the container that this version was taken from.
     */
    trigger?: Schema$Trigger[];
    /**
     * The variables in the container that this version was taken from.
     */
    variable?: Schema$Variable[];
    /**
     * The zones in the container that this version was taken from.
     */
    zone?: Schema$Zone[];
  }
  /**
   * Represents a Google Tag Manager Container Version Header.
   */
  export interface Schema$ContainerVersionHeader {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * The Container Version ID uniquely identifies the GTM Container Version.
     */
    containerVersionId?: string | null;
    /**
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean | null;
    /**
     * Container version display name.
     */
    name?: string | null;
    /**
     * Number of custom templates in the container version.
     */
    numCustomTemplates?: string | null;
    /**
     * Number of macros in the container version.
     */
    numMacros?: string | null;
    /**
     * Number of rules in the container version.
     */
    numRules?: string | null;
    /**
     * Number of tags in the container version.
     */
    numTags?: string | null;
    /**
     * Number of triggers in the container version.
     */
    numTriggers?: string | null;
    /**
     * Number of variables in the container version.
     */
    numVariables?: string | null;
    /**
     * Number of zones in the container version.
     */
    numZones?: string | null;
    /**
     * GTM Container Versions&#39;s API relative path.
     */
    path?: string | null;
  }
  export interface Schema$CreateBuiltInVariableResponse {
    /**
     * List of created built-in variables.
     */
    builtInVariable?: Schema$BuiltInVariable[];
  }
  /**
   * Options for new container versions.
   */
  export interface Schema$CreateContainerVersionRequestVersionOptions {
    /**
     * The name of the container version to be created.
     */
    name?: string | null;
    /**
     * The notes of the container version to be created.
     */
    notes?: string | null;
  }
  /**
   * Create container versions response.
   */
  export interface Schema$CreateContainerVersionResponse {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean | null;
    /**
     * The container version created.
     */
    containerVersion?: Schema$ContainerVersion;
    /**
     * Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
     */
    newWorkspacePath?: string | null;
    /**
     * Whether version creation failed when syncing the workspace to the latest container version.
     */
    syncStatus?: Schema$SyncStatus;
  }
  /**
   * Represents a Google Tag Manager Custom Template&#39;s contents.
   */
  export interface Schema$CustomTemplate {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.
     */
    fingerprint?: string | null;
    /**
     * Custom Template display name.
     */
    name?: string | null;
    /**
     * GTM Custom Template&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * The custom template in text format.
     */
    templateData?: string | null;
    /**
     * The Custom Template ID uniquely identifies the GTM custom template.
     */
    templateId?: string | null;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
  }
  /**
   * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
   */
  export interface Schema$Entity {
    /**
     * Represents how the entity has been changed in the workspace.
     */
    changeStatus?: string | null;
    /**
     * The Folder being represented by the entity.
     */
    folder?: Schema$Folder;
    /**
     * The tag being represented by the entity.
     */
    tag?: Schema$Tag;
    /**
     * The trigger being represented by the entity.
     */
    trigger?: Schema$Trigger;
    /**
     * The variable being represented by the entity.
     */
    variable?: Schema$Variable;
  }
  /**
   * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
   */
  export interface Schema$Environment {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * The environment authorization code.
     */
    authorizationCode?: string | null;
    /**
     * The last update time-stamp for the authorization code.
     */
    authorizationTimestamp?: Schema$Timestamp;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * Represents a link to a container version.
     */
    containerVersionId?: string | null;
    /**
     * The environment description. Can be set or changed only on USER type environments.
     */
    description?: string | null;
    /**
     * Whether or not to enable debug by default for the environment.
     */
    enableDebug?: boolean | null;
    /**
     * GTM Environment ID uniquely identifies the GTM Environment.
     */
    environmentId?: string | null;
    /**
     * The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
     */
    fingerprint?: string | null;
    /**
     * The environment display name. Can be set or changed only on USER type environments.
     */
    name?: string | null;
    /**
     * GTM Environment&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * The type of this environment.
     */
    type?: string | null;
    /**
     * Default preview page url for the environment.
     */
    url?: string | null;
    /**
     * Represents a link to a quick preview of a workspace.
     */
    workspaceId?: string | null;
  }
  /**
   * Represents a Google Tag Manager Folder.
   */
  export interface Schema$Folder {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
     */
    fingerprint?: string | null;
    /**
     * The Folder ID uniquely identifies the GTM Folder.
     */
    folderId?: string | null;
    /**
     * Folder display name.
     */
    name?: string | null;
    /**
     * User notes on how to apply this folder in the container.
     */
    notes?: string | null;
    /**
     * GTM Folder&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
  }
  /**
   * Represents a Google Tag Manager Folder&#39;s contents.
   */
  export interface Schema$FolderEntities {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of tags inside the folder.
     */
    tag?: Schema$Tag[];
    /**
     * The list of triggers inside the folder.
     */
    trigger?: Schema$Trigger[];
    /**
     * The list of variables inside the folder.
     */
    variable?: Schema$Variable[];
  }
  /**
   * The changes that have occurred in the workspace since the base container version.
   */
  export interface Schema$GetWorkspaceStatusResponse {
    /**
     * The merge conflict after sync.
     */
    mergeConflict?: Schema$MergeConflict[];
    /**
     * Entities that have been changed in the workspace.
     */
    workspaceChange?: Schema$Entity[];
  }
  /**
   * List Accounts Response.
   */
  export interface Schema$ListAccountsResponse {
    /**
     * List of GTM Accounts that a user has access to.
     */
    account?: Schema$Account[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * List Containers Response.
   */
  export interface Schema$ListContainersResponse {
    /**
     * All Containers of a GTM Account.
     */
    container?: Schema$Container[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * List container versions response.
   */
  export interface Schema$ListContainerVersionsResponse {
    /**
     * All container version headers of a GTM Container.
     */
    containerVersionHeader?: Schema$ContainerVersionHeader[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A list of enabled built-in variables.
   */
  export interface Schema$ListEnabledBuiltInVariablesResponse {
    /**
     * All GTM BuiltInVariables of a GTM container.
     */
    builtInVariable?: Schema$BuiltInVariable[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * List Environments Response.
   */
  export interface Schema$ListEnvironmentsResponse {
    /**
     * All Environments of a GTM Container.
     */
    environment?: Schema$Environment[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * List Folders Response.
   */
  export interface Schema$ListFoldersResponse {
    /**
     * All GTM Folders of a GTM Container.
     */
    folder?: Schema$Folder[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * List Tags Response.
   */
  export interface Schema$ListTagsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All GTM Tags of a GTM Container.
     */
    tag?: Schema$Tag[];
  }
  export interface Schema$ListTemplatesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All GTM Custom Templates of a GTM Container.
     */
    template?: Schema$CustomTemplate[];
  }
  /**
   * List triggers response.
   */
  export interface Schema$ListTriggersResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All GTM Triggers of a GTM Container.
     */
    trigger?: Schema$Trigger[];
  }
  /**
   * List user permissions response.
   */
  export interface Schema$ListUserPermissionsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All GTM UserPermissions of a GTM Account.
     */
    userPermission?: Schema$UserPermission[];
  }
  /**
   * List Variables Response.
   */
  export interface Schema$ListVariablesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All GTM Variables of a GTM Container.
     */
    variable?: Schema$Variable[];
  }
  /**
   * A list of workspaces in a container.
   */
  export interface Schema$ListWorkspacesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All Workspaces of a GTM Container.
     */
    workspace?: Schema$Workspace[];
  }
  export interface Schema$ListZonesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * All GTM Zones of a GTM Container.
     */
    zone?: Schema$Zone[];
  }
  /**
   * Represents a merge conflict.
   */
  export interface Schema$MergeConflict {
    /**
     * The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version.
     */
    entityInBaseVersion?: Schema$Entity;
    /**
     * The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status.
     */
    entityInWorkspace?: Schema$Entity;
  }
  /**
   * Represents a Google Tag Manager Parameter.
   */
  export interface Schema$Parameter {
    /**
     * The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values.
     */
    key?: string | null;
    /**
     * This list parameter&#39;s parameters (keys will be ignored).
     */
    list?: Schema$Parameter[];
    /**
     * This map parameter&#39;s parameters (must have keys; keys must be unique).
     */
    map?: Schema$Parameter[];
    /**
     * The parameter type. Valid values are:  - boolean: The value represents a boolean, represented as &#39;true&#39; or &#39;false&#39;  - integer: The value represents a 64-bit signed integer value, in base 10  - list: A list of parameters should be specified  - map: A map of parameters should be specified  - template: The value represents any text; this can include variable references (even variable references that might return non-string types)  - trigger_reference: The value represents a trigger, represented as the trigger id
     */
    type?: string | null;
    /**
     * A parameter&#39;s value (may contain variable references such as &quot;{{myVariable}}&quot;) as appropriate to the specified type.
     */
    value?: string | null;
  }
  /**
   * Publish container version response.
   */
  export interface Schema$PublishContainerVersionResponse {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean | null;
    /**
     * The container version created.
     */
    containerVersion?: Schema$ContainerVersion;
  }
  /**
   * Response to quick previewing a workspace.
   */
  export interface Schema$QuickPreviewResponse {
    /**
     * Were there compiler errors or not.
     */
    compilerError?: boolean | null;
    /**
     * The quick previewed container version.
     */
    containerVersion?: Schema$ContainerVersion;
    /**
     * Whether quick previewing failed when syncing the workspace to the latest container version.
     */
    syncStatus?: Schema$SyncStatus;
  }
  /**
   * The result of reverting a built-in variable in a workspace.
   */
  export interface Schema$RevertBuiltInVariableResponse {
    /**
     * Whether the built-in variable is enabled after reversion.
     */
    enabled?: boolean | null;
  }
  /**
   * The result of reverting folder changes in a workspace.
   */
  export interface Schema$RevertFolderResponse {
    /**
     * Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version.
     */
    folder?: Schema$Folder;
  }
  /**
   * The result of reverting a tag in a workspace.
   */
  export interface Schema$RevertTagResponse {
    /**
     * Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version.
     */
    tag?: Schema$Tag;
  }
  /**
   * The result of reverting a template in a workspace.
   */
  export interface Schema$RevertTemplateResponse {
    /**
     * Template as it appears in the latest container version since the last workspace synchronization operation. If no template is present, that means the template was deleted in the latest container version.
     */
    template?: Schema$CustomTemplate;
  }
  /**
   * The result of reverting a trigger in a workspace.
   */
  export interface Schema$RevertTriggerResponse {
    /**
     * Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version.
     */
    trigger?: Schema$Trigger;
  }
  /**
   * The result of reverting a variable in a workspace.
   */
  export interface Schema$RevertVariableResponse {
    /**
     * Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version.
     */
    variable?: Schema$Variable;
  }
  /**
   * The result of reverting a zone in a workspace.
   */
  export interface Schema$RevertZoneResponse {
    /**
     * Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is present, that means the zone was deleted in the latest container version.
     */
    zone?: Schema$Zone;
  }
  /**
   * Represents a reference to atag that fires before another tag in order to set up dependencies.
   */
  export interface Schema$SetupTag {
    /**
     * If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
     */
    stopOnSetupFailure?: boolean | null;
    /**
     * The name of the setup tag.
     */
    tagName?: string | null;
  }
  /**
   * The status of a workspace after synchronization.
   */
  export interface Schema$SyncStatus {
    /**
     * Synchornization operation detected a merge conflict.
     */
    mergeConflict?: boolean | null;
    /**
     * An error occurred during the synchronization operation.
     */
    syncError?: boolean | null;
  }
  /**
   * A response after synchronizing the workspace to the latest container version.
   */
  export interface Schema$SyncWorkspaceResponse {
    /**
     * The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.
     */
    mergeConflict?: Schema$MergeConflict[];
    /**
     * Indicates whether synchronization caused a merge conflict or sync error.
     */
    syncStatus?: Schema$SyncStatus;
  }
  /**
   * Represents a Google Tag Manager Tag.
   */
  export interface Schema$Tag {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire.
     */
    blockingRuleId?: string[] | null;
    /**
     * Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire.
     */
    blockingTriggerId?: string[] | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
     */
    fingerprint?: string | null;
    /**
     * Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false.
     */
    firingRuleId?: string[] | null;
    /**
     * Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false.
     */
    firingTriggerId?: string[] | null;
    /**
     * If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode).
     */
    liveOnly?: boolean | null;
    /**
     * Tag display name.
     */
    name?: string | null;
    /**
     * User notes on how to apply this tag in the container.
     */
    notes?: string | null;
    /**
     * The tag&#39;s parameters.
     */
    parameter?: Schema$Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string | null;
    /**
     * GTM Tag&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Indicates whether the tag is paused, which prevents the tag from firing.
     */
    paused?: boolean | null;
    /**
     * User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag&#39;s priority can be a positive or negative value. The default value is 0.
     */
    priority?: Schema$Parameter;
    /**
     * The end timestamp in milliseconds to schedule a tag.
     */
    scheduleEndMs?: string | null;
    /**
     * The start timestamp in milliseconds to schedule a tag.
     */
    scheduleStartMs?: string | null;
    /**
     * The list of setup tags. Currently we only allow one.
     */
    setupTag?: Schema$SetupTag[];
    /**
     * Option to fire this tag.
     */
    tagFiringOption?: string | null;
    /**
     * The Tag ID uniquely identifies the GTM Tag.
     */
    tagId?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * The list of teardown tags. Currently we only allow one.
     */
    teardownTag?: Schema$TeardownTag[];
    /**
     * GTM Tag Type.
     */
    type?: string | null;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
  }
  /**
   * Represents a tag that fires after another tag in order to tear down dependencies.
   */
  export interface Schema$TeardownTag {
    /**
     * If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
     */
    stopTeardownOnFailure?: boolean | null;
    /**
     * The name of the teardown tag.
     */
    tagName?: string | null;
  }
  /**
   * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one.  All minutes are 60 seconds long. Leap seconds are &quot;smeared&quot; so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear).  The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.  # Examples  Example 1: Compute Timestamp from POSIX `time()`.  Timestamp timestamp; timestamp.set_seconds(time(NULL)); timestamp.set_nanos(0);  Example 2: Compute Timestamp from POSIX `gettimeofday()`.  struct timeval tv; gettimeofday(&amp;tv, NULL);  Timestamp timestamp; timestamp.set_seconds(tv.tv_sec); timestamp.set_nanos(tv.tv_usec * 1000);  Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.  FILETIME ft; GetSystemTimeAsFileTime(&amp;ft); UINT64 ticks = (((UINT64)ft.dwHighDateTime) &lt;&lt; 32) | ft.dwLowDateTime;  // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z. Timestamp timestamp; timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL)); timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));  Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.  long millis = System.currentTimeMillis();  Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000) .setNanos((int) ((millis % 1000) * 1000000)).build();    Example 5: Compute Timestamp from current time in Python.  timestamp = Timestamp() timestamp.GetCurrentTime()  # JSON Mapping  In JSON format, the Timestamp type is encoded as a string in the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is &quot;{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z&quot; where {year} is always expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution), are optional. The &quot;Z&quot; suffix indicates the timezone (&quot;UTC&quot;); the timezone is required. A proto3 JSON serializer should always use UTC (as indicated by &quot;Z&quot;) when printing the Timestamp type and a proto3 JSON parser should be able to accept both UTC and other timezones (as indicated by an offset).  For example, &quot;2017-01-15T01:30:15.01Z&quot; encodes 15.01 seconds past 01:30 UTC on January 15, 2017.  In JavaScript, one can convert a Date object to this format using the standard [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) method. In Python, a standard `datetime.datetime` object can be converted to this format using [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the time format spec &#39;%Y-%m-%dT%H:%M:%S.%fZ&#39;. Likewise, in Java, one can use the Joda Time&#39;s [`ISODateTimeFormat.dateTime()`]( http://www.joda.org/joda-time/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime%2D%2D ) to obtain a formatter capable of generating timestamps in this format.
   */
  export interface Schema$Timestamp {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    nanos?: number | null;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    seconds?: string | null;
  }
  /**
   * Represents a Google Tag Manager Trigger
   */
  export interface Schema$Trigger {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * Used in the case of auto event tracking.
     */
    autoEventFilter?: Schema$Condition[];
    /**
     * Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers.
     */
    checkValidation?: Schema$Parameter;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger.
     */
    continuousTimeMinMilliseconds?: Schema$Parameter;
    /**
     * Used in the case of custom event, which is fired iff all Conditions are true.
     */
    customEventFilter?: Schema$Condition[];
    /**
     * Name of the GTM event that is fired. Only valid for Timer triggers.
     */
    eventName?: Schema$Parameter;
    /**
     * The trigger will only fire iff all Conditions are true.
     */
    filter?: Schema$Condition[];
    /**
     * The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
     */
    fingerprint?: string | null;
    /**
     * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers.
     */
    horizontalScrollPercentageList?: Schema$Parameter;
    /**
     * Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers.
     */
    interval?: Schema$Parameter;
    /**
     * Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger.
     */
    intervalSeconds?: Schema$Parameter;
    /**
     * Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers.
     */
    limit?: Schema$Parameter;
    /**
     * Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger.
     */
    maxTimerLengthSeconds?: Schema$Parameter;
    /**
     * Trigger display name.
     */
    name?: string | null;
    /**
     * User notes on how to apply this trigger in the container.
     */
    notes?: string | null;
    /**
     * Additional parameters.
     */
    parameter?: Schema$Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string | null;
    /**
     * GTM Trigger&#39;s API relative path.
     */
    path?: string | null;
    /**
     * A click trigger CSS selector (i.e. &quot;a&quot;, &quot;button&quot; etc.). Only valid for AMP Click trigger.
     */
    selector?: Schema$Parameter;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger.
     */
    totalTimeMinMilliseconds?: Schema$Parameter;
    /**
     * The Trigger ID uniquely identifies the GTM Trigger.
     */
    triggerId?: string | null;
    /**
     * Defines the data layer event that causes this trigger.
     */
    type?: string | null;
    /**
     * Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don&#39;t exist until then. Only valid for Form Submit, Link Click and Timer triggers.
     */
    uniqueTriggerId?: Schema$Parameter;
    /**
     * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers.
     */
    verticalScrollPercentageList?: Schema$Parameter;
    /**
     * A visibility trigger CSS selector (i.e. &quot;#id&quot;). Only valid for AMP Visibility trigger.
     */
    visibilitySelector?: Schema$Parameter;
    /**
     * A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger.
     */
    visiblePercentageMax?: Schema$Parameter;
    /**
     * A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger.
     */
    visiblePercentageMin?: Schema$Parameter;
    /**
     * Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers.
     */
    waitForTags?: Schema$Parameter;
    /**
     * How long to wait (in milliseconds) for tags to fire when &#39;waits_for_tags&#39; above evaluates to true. Only valid for Form Submission and Link Click triggers.
     */
    waitForTagsTimeout?: Schema$Parameter;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
  }
  /**
   * Represents a user&#39;s permissions to an account and its container.
   */
  export interface Schema$UserPermission {
    /**
     * GTM Account access permissions.
     */
    accountAccess?: Schema$AccountAccess;
    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string | null;
    /**
     * GTM Container access permissions.
     */
    containerAccess?: Schema$ContainerAccess[];
    /**
     * User&#39;s email address.
     */
    emailAddress?: string | null;
    /**
     * GTM UserPermission&#39;s API relative path.
     */
    path?: string | null;
  }
  /**
   * Represents a Google Tag Manager Variable.
   */
  export interface Schema$Variable {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set.
     */
    disablingTriggerId?: string[] | null;
    /**
     * For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set.
     */
    enablingTriggerId?: string[] | null;
    /**
     * The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
     */
    fingerprint?: string | null;
    /**
     * Option to convert a variable value to other value.
     */
    formatValue?: Schema$VariableFormatValue;
    /**
     * Variable display name.
     */
    name?: string | null;
    /**
     * User notes on how to apply this variable in the container.
     */
    notes?: string | null;
    /**
     * The variable&#39;s parameters.
     */
    parameter?: Schema$Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string | null;
    /**
     * GTM Variable&#39;s API relative path.
     */
    path?: string | null;
    /**
     * The end timestamp in milliseconds to schedule a variable.
     */
    scheduleEndMs?: string | null;
    /**
     * The start timestamp in milliseconds to schedule a variable.
     */
    scheduleStartMs?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * GTM Variable Type.
     */
    type?: string | null;
    /**
     * The Variable ID uniquely identifies the GTM Variable.
     */
    variableId?: string | null;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
  }
  export interface Schema$VariableFormatValue {
    /**
     * The option to convert a string-type variable value to either lowercase or uppercase.
     */
    caseConversionType?: string | null;
    /**
     * The value to convert if a variable value is false.
     */
    convertFalseToValue?: Schema$Parameter;
    /**
     * The value to convert if a variable value is null.
     */
    convertNullToValue?: Schema$Parameter;
    /**
     * The value to convert if a variable value is true.
     */
    convertTrueToValue?: Schema$Parameter;
    /**
     * The value to convert if a variable value is undefined.
     */
    convertUndefinedToValue?: Schema$Parameter;
  }
  /**
   * Represents a Google Tag Manager Container Workspace.
   */
  export interface Schema$Workspace {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * Workspace description.
     */
    description?: string | null;
    /**
     * The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
     */
    fingerprint?: string | null;
    /**
     * Workspace display name.
     */
    name?: string | null;
    /**
     * GTM Workspace&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * The Workspace ID uniquely identifies the GTM Workspace.
     */
    workspaceId?: string | null;
  }
  /**
   * Represents a Google Tag Manager Zone&#39;s contents.
   */
  export interface Schema$Zone {
    /**
     * GTM Account ID.
     */
    accountId?: string | null;
    /**
     * This Zone&#39;s boundary.
     */
    boundary?: Schema$ZoneBoundary;
    /**
     * Containers that are children of this Zone.
     */
    childContainer?: Schema$ZoneChildContainer[];
    /**
     * GTM Container ID.
     */
    containerId?: string | null;
    /**
     * The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
     */
    fingerprint?: string | null;
    /**
     * Zone display name.
     */
    name?: string | null;
    /**
     * User notes on how to apply this zone in the container.
     */
    notes?: string | null;
    /**
     * GTM Zone&#39;s API relative path.
     */
    path?: string | null;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string | null;
    /**
     * This Zone&#39;s type restrictions.
     */
    typeRestriction?: Schema$ZoneTypeRestriction;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string | null;
    /**
     * The Zone ID uniquely identifies the GTM Zone.
     */
    zoneId?: string | null;
  }
  /**
   * Represents a Zone&#39;s boundaries.
   */
  export interface Schema$ZoneBoundary {
    /**
     * The conditions that, when conjoined, make up the boundary.
     */
    condition?: Schema$Condition[];
    /**
     * Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
     */
    customEvaluationTriggerId?: string[] | null;
  }
  /**
   * Represents a child container of a Zone.
   */
  export interface Schema$ZoneChildContainer {
    /**
     * The zone&#39;s nickname for the child container.
     */
    nickname?: string | null;
    /**
     * The child container&#39;s public id.
     */
    publicId?: string | null;
  }
  /**
   * Represents a Zone&#39;s type restrictions.
   */
  export interface Schema$ZoneTypeRestriction {
    /**
     * True if type restrictions have been enabled for this Zone.
     */
    enable?: boolean | null;
    /**
     * List of type public ids that have been whitelisted for use in this Zone.
     */
    whitelistedTypeId?: string[] | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    containers: Resource$Accounts$Containers;
    user_permissions: Resource$Accounts$User_permissions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containers = new Resource$Accounts$Containers(this.context);
      this.user_permissions = new Resource$Accounts$User_permissions(
        this.context
      );
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
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountsResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback?: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void | GaxiosPromise<Schema$ListAccountsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
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
            url: (rootUrl + '/tagmanager/v2/accounts').replace(
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
    update(
      params?: Params$Resource$Accounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    update(
      params: Params$Resource$Accounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(callback: BodyResponseCallback<Schema$Account>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Update
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Accounts's API relative path. Example: accounts/{account_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the account in storage.
     */
    fingerprint?: string;
    /**
     * GTM Accounts's API relative path. Example: accounts/{account_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Accounts$Containers {
    context: APIRequestContext;
    environments: Resource$Accounts$Containers$Environments;
    versions: Resource$Accounts$Containers$Versions;
    version_headers: Resource$Accounts$Containers$Version_headers;
    workspaces: Resource$Accounts$Containers$Workspaces;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.environments = new Resource$Accounts$Containers$Environments(
        this.context
      );
      this.versions = new Resource$Accounts$Containers$Versions(this.context);
      this.version_headers = new Resource$Accounts$Containers$Version_headers(
        this.context
      );
      this.workspaces = new Resource$Accounts$Containers$Workspaces(
        this.context
      );
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
    create(
      params?: Params$Resource$Accounts$Containers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Container>;
    create(
      params: Params$Resource$Accounts$Containers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Container>,
      callback: BodyResponseCallback<Schema$Container>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Create,
      callback: BodyResponseCallback<Schema$Container>
    ): void;
    create(callback: BodyResponseCallback<Schema$Container>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Create
        | BodyResponseCallback<Schema$Container>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>
    ): void | GaxiosPromise<Schema$Container> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/containers').replace(
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
    delete(
      params?: Params$Resource$Accounts$Containers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Container>;
    get(
      params: Params$Resource$Accounts$Containers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Container>,
      callback: BodyResponseCallback<Schema$Container>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Get,
      callback: BodyResponseCallback<Schema$Container>
    ): void;
    get(callback: BodyResponseCallback<Schema$Container>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Get
        | BodyResponseCallback<Schema$Container>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>
    ): void | GaxiosPromise<Schema$Container> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListContainersResponse>;
    list(
      params: Params$Resource$Accounts$Containers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListContainersResponse>,
      callback: BodyResponseCallback<Schema$ListContainersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$List,
      callback: BodyResponseCallback<Schema$ListContainersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$List
        | BodyResponseCallback<Schema$ListContainersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListContainersResponse>,
      callback?: BodyResponseCallback<Schema$ListContainersResponse>
    ): void | GaxiosPromise<Schema$ListContainersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/containers').replace(
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
    update(
      params?: Params$Resource$Accounts$Containers$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Container>;
    update(
      params: Params$Resource$Accounts$Containers$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Container>,
      callback: BodyResponseCallback<Schema$Container>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Update,
      callback: BodyResponseCallback<Schema$Container>
    ): void;
    update(callback: BodyResponseCallback<Schema$Container>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Update
        | BodyResponseCallback<Schema$Container>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Container>,
      callback?: BodyResponseCallback<Schema$Container>
    ): void | GaxiosPromise<Schema$Container> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Container>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Container>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Account's API relative path. Example: accounts/{account_id}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Container;
  }
  export interface Params$Resource$Accounts$Containers$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Accounts's API relative path. Example: accounts/{account_id}.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the container in storage.
     */
    fingerprint?: string;
    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Container;
  }

  export class Resource$Accounts$Containers$Environments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$Containers$Environments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Environment>;
    create(
      params: Params$Resource$Accounts$Containers$Environments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Environments$Create,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Environment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Environments$Create
        | BodyResponseCallback<Schema$Environment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>
    ): void | GaxiosPromise<Schema$Environment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Environments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Environments$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/environments').replace(
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
    delete(
      params?: Params$Resource$Accounts$Containers$Environments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Environments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Environments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Environments$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Environments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Environments$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Environments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Environment>;
    get(
      params: Params$Resource$Accounts$Containers$Environments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Environments$Get,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Environment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Environments$Get
        | BodyResponseCallback<Schema$Environment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>
    ): void | GaxiosPromise<Schema$Environment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Environments$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$Environments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEnvironmentsResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Environments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Environments$List,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Environments$List
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void | GaxiosPromise<Schema$ListEnvironmentsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Environments$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/environments').replace(
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
        createAPIRequest<Schema$ListEnvironmentsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListEnvironmentsResponse>(parameters);
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
    reauthorize(
      params?: Params$Resource$Accounts$Containers$Environments$Reauthorize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Environment>;
    reauthorize(
      params: Params$Resource$Accounts$Containers$Environments$Reauthorize,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    reauthorize(
      params: Params$Resource$Accounts$Containers$Environments$Reauthorize,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    reauthorize(callback: BodyResponseCallback<Schema$Environment>): void;
    reauthorize(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Environments$Reauthorize
        | BodyResponseCallback<Schema$Environment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>
    ): void | GaxiosPromise<Schema$Environment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Environments$Reauthorize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Environments$Reauthorize;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:reauthorize').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Environments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Environment>;
    update(
      params: Params$Resource$Accounts$Containers$Environments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Environments$Update,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Environment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Environments$Update
        | BodyResponseCallback<Schema$Environment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Environment>,
      callback?: BodyResponseCallback<Schema$Environment>
    ): void | GaxiosPromise<Schema$Environment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Environments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Environments$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Environment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Environments$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }
  export interface Params$Resource$Accounts$Containers$Environments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Environments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Environments$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Environments$Reauthorize
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }
  export interface Params$Resource$Accounts$Containers$Environments$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the environment in storage.
     */
    fingerprint?: string;
    /**
     * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }

  export class Resource$Accounts$Containers$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    delete(
      params?: Params$Resource$Accounts$Containers$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Versions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Versions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerVersion>;
    get(
      params: Params$Resource$Accounts$Containers$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Versions$Get,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Get
        | BodyResponseCallback<Schema$ContainerVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>
    ): void | GaxiosPromise<Schema$ContainerVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    live(
      params?: Params$Resource$Accounts$Containers$Versions$Live,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerVersion>;
    live(
      params: Params$Resource$Accounts$Containers$Versions$Live,
      options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    live(
      params: Params$Resource$Accounts$Containers$Versions$Live,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    live(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    live(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Live
        | BodyResponseCallback<Schema$ContainerVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>
    ): void | GaxiosPromise<Schema$ContainerVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Live;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Live;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/versions:live').replace(
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
    publish(
      params?: Params$Resource$Accounts$Containers$Versions$Publish,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PublishContainerVersionResponse>;
    publish(
      params: Params$Resource$Accounts$Containers$Versions$Publish,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PublishContainerVersionResponse>,
      callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>
    ): void;
    publish(
      params: Params$Resource$Accounts$Containers$Versions$Publish,
      callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>
    ): void;
    publish(
      callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>
    ): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Publish
        | BodyResponseCallback<Schema$PublishContainerVersionResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PublishContainerVersionResponse>,
      callback?: BodyResponseCallback<Schema$PublishContainerVersionResponse>
    ): void | GaxiosPromise<Schema$PublishContainerVersionResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Publish;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:publish').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PublishContainerVersionResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PublishContainerVersionResponse>(
          parameters
        );
      }
    }

    /**
     * tagmanager.accounts.containers.versions.set_latest
     * @desc Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
     * @alias tagmanager.accounts.containers.versions.set_latest
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set_latest(
      params?: Params$Resource$Accounts$Containers$Versions$Set_latest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerVersion>;
    set_latest(
      params: Params$Resource$Accounts$Containers$Versions$Set_latest,
      options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    set_latest(
      params: Params$Resource$Accounts$Containers$Versions$Set_latest,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    set_latest(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    set_latest(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Set_latest
        | BodyResponseCallback<Schema$ContainerVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>
    ): void | GaxiosPromise<Schema$ContainerVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Set_latest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Set_latest;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:set_latest').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    undelete(
      params?: Params$Resource$Accounts$Containers$Versions$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerVersion>;
    undelete(
      params: Params$Resource$Accounts$Containers$Versions$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    undelete(
      params: Params$Resource$Accounts$Containers$Versions$Undelete,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Undelete
        | BodyResponseCallback<Schema$ContainerVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>
    ): void | GaxiosPromise<Schema$ContainerVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Undelete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:undelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Versions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerVersion>;
    update(
      params: Params$Resource$Accounts$Containers$Versions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Versions$Update,
      callback: BodyResponseCallback<Schema$ContainerVersion>
    ): void;
    update(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Versions$Update
        | BodyResponseCallback<Schema$ContainerVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersion>,
      callback?: BodyResponseCallback<Schema$ContainerVersion>
    ): void | GaxiosPromise<Schema$ContainerVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Versions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Versions$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContainerVersion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContainerVersion>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Versions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Versions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
     */
    containerVersionId?: string;
    /**
     * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Versions$Live
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Versions$Publish
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the container version in storage.
     */
    fingerprint?: string;
    /**
     * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Versions$Set_latest
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Versions$Undelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Versions$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the container version in storage.
     */
    fingerprint?: string;
    /**
     * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerVersion;
  }

  export class Resource$Accounts$Containers$Version_headers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    latest(
      params?: Params$Resource$Accounts$Containers$Version_headers$Latest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerVersionHeader>;
    latest(
      params: Params$Resource$Accounts$Containers$Version_headers$Latest,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersionHeader>,
      callback: BodyResponseCallback<Schema$ContainerVersionHeader>
    ): void;
    latest(
      params: Params$Resource$Accounts$Containers$Version_headers$Latest,
      callback: BodyResponseCallback<Schema$ContainerVersionHeader>
    ): void;
    latest(callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
    latest(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Version_headers$Latest
        | BodyResponseCallback<Schema$ContainerVersionHeader>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerVersionHeader>,
      callback?: BodyResponseCallback<Schema$ContainerVersionHeader>
    ): void | GaxiosPromise<Schema$ContainerVersionHeader> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Version_headers$Latest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Version_headers$Latest;
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
            url: (
              rootUrl + '/tagmanager/v2/{+parent}/version_headers:latest'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
    list(
      params?: Params$Resource$Accounts$Containers$Version_headers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListContainerVersionsResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Version_headers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListContainerVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Version_headers$List,
      callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Version_headers$List
        | BodyResponseCallback<Schema$ListContainerVersionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListContainerVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListContainerVersionsResponse>
    ): void | GaxiosPromise<Schema$ListContainerVersionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Version_headers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Version_headers$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/version_headers').replace(
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
        createAPIRequest<Schema$ListContainerVersionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListContainerVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Version_headers$Latest
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Version_headers$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Also retrieve deleted (archived) versions when true.
     */
    includeDeleted?: boolean;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;
  }

  export class Resource$Accounts$Containers$Workspaces {
    context: APIRequestContext;
    built_in_variables: Resource$Accounts$Containers$Workspaces$Built_in_variables;
    folders: Resource$Accounts$Containers$Workspaces$Folders;
    tags: Resource$Accounts$Containers$Workspaces$Tags;
    templates: Resource$Accounts$Containers$Workspaces$Templates;
    triggers: Resource$Accounts$Containers$Workspaces$Triggers;
    variables: Resource$Accounts$Containers$Workspaces$Variables;
    zones: Resource$Accounts$Containers$Workspaces$Zones;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.built_in_variables = new Resource$Accounts$Containers$Workspaces$Built_in_variables(
        this.context
      );
      this.folders = new Resource$Accounts$Containers$Workspaces$Folders(
        this.context
      );
      this.tags = new Resource$Accounts$Containers$Workspaces$Tags(
        this.context
      );
      this.templates = new Resource$Accounts$Containers$Workspaces$Templates(
        this.context
      );
      this.triggers = new Resource$Accounts$Containers$Workspaces$Triggers(
        this.context
      );
      this.variables = new Resource$Accounts$Containers$Workspaces$Variables(
        this.context
      );
      this.zones = new Resource$Accounts$Containers$Workspaces$Zones(
        this.context
      );
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
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workspace>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Workspace>,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Create,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    create(callback: BodyResponseCallback<Schema$Workspace>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Create
        | BodyResponseCallback<Schema$Workspace>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>
    ): void | GaxiosPromise<Schema$Workspace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/workspaces').replace(
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
        createAPIRequest<Schema$Workspace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Workspace>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.create_version
     * @desc Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
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
    create_version(
      params?: Params$Resource$Accounts$Containers$Workspaces$Create_version,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreateContainerVersionResponse>;
    create_version(
      params: Params$Resource$Accounts$Containers$Workspaces$Create_version,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateContainerVersionResponse>,
      callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>
    ): void;
    create_version(
      params: Params$Resource$Accounts$Containers$Workspaces$Create_version,
      callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>
    ): void;
    create_version(
      callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>
    ): void;
    create_version(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Create_version
        | BodyResponseCallback<Schema$CreateContainerVersionResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateContainerVersionResponse>,
      callback?: BodyResponseCallback<Schema$CreateContainerVersionResponse>
    ): void | GaxiosPromise<Schema$CreateContainerVersionResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Create_version;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Create_version;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:create_version').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreateContainerVersionResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CreateContainerVersionResponse>(
          parameters
        );
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
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workspace>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Workspace>,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Get,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Workspace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Get
        | BodyResponseCallback<Schema$Workspace>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>
    ): void | GaxiosPromise<Schema$Workspace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Workspace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Workspace>(parameters);
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
    getStatus(
      params?: Params$Resource$Accounts$Containers$Workspaces$Getstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetWorkspaceStatusResponse>;
    getStatus(
      params: Params$Resource$Accounts$Containers$Workspaces$Getstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetWorkspaceStatusResponse>,
      callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>
    ): void;
    getStatus(
      params: Params$Resource$Accounts$Containers$Workspaces$Getstatus,
      callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>
    ): void;
    getStatus(
      callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>
    ): void;
    getStatus(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Getstatus
        | BodyResponseCallback<Schema$GetWorkspaceStatusResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetWorkspaceStatusResponse>,
      callback?: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>
    ): void | GaxiosPromise<Schema$GetWorkspaceStatusResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Getstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Getstatus;
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
            url: (rootUrl + '/tagmanager/v2/{+path}/status').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetWorkspaceStatusResponse>(
          parameters,
          callback
        );
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
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkspacesResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkspacesResponse>,
      callback: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$List,
      callback: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$List
        | BodyResponseCallback<Schema$ListWorkspacesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkspacesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void | GaxiosPromise<Schema$ListWorkspacesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/workspaces').replace(
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
        createAPIRequest<Schema$ListWorkspacesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListWorkspacesResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.quick_preview
     * @desc Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
     * @alias tagmanager.accounts.containers.workspaces.quick_preview
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    quick_preview(
      params?: Params$Resource$Accounts$Containers$Workspaces$Quick_preview,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QuickPreviewResponse>;
    quick_preview(
      params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QuickPreviewResponse>,
      callback: BodyResponseCallback<Schema$QuickPreviewResponse>
    ): void;
    quick_preview(
      params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview,
      callback: BodyResponseCallback<Schema$QuickPreviewResponse>
    ): void;
    quick_preview(
      callback: BodyResponseCallback<Schema$QuickPreviewResponse>
    ): void;
    quick_preview(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Quick_preview
        | BodyResponseCallback<Schema$QuickPreviewResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$QuickPreviewResponse>,
      callback?: BodyResponseCallback<Schema$QuickPreviewResponse>
    ): void | GaxiosPromise<Schema$QuickPreviewResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Quick_preview;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Quick_preview;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:quick_preview').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$QuickPreviewResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$QuickPreviewResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.resolve_conflict
     * @desc Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
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
    resolve_conflict(
      params?: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resolve_conflict(
      params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resolve_conflict(
      params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict,
      callback: BodyResponseCallback<void>
    ): void;
    resolve_conflict(callback: BodyResponseCallback<void>): void;
    resolve_conflict(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:resolve_conflict').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.sync
     * @desc Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
     * @alias tagmanager.accounts.containers.workspaces.sync
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sync(
      params?: Params$Resource$Accounts$Containers$Workspaces$Sync,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SyncWorkspaceResponse>;
    sync(
      params: Params$Resource$Accounts$Containers$Workspaces$Sync,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SyncWorkspaceResponse>,
      callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>
    ): void;
    sync(
      params: Params$Resource$Accounts$Containers$Workspaces$Sync,
      callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>
    ): void;
    sync(callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
    sync(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Sync
        | BodyResponseCallback<Schema$SyncWorkspaceResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SyncWorkspaceResponse>,
      callback?: BodyResponseCallback<Schema$SyncWorkspaceResponse>
    ): void | GaxiosPromise<Schema$SyncWorkspaceResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Sync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Sync;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:sync').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workspace>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Workspace>,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Update,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    update(callback: BodyResponseCallback<Schema$Workspace>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Update
        | BodyResponseCallback<Schema$Workspace>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Workspace>,
      callback?: BodyResponseCallback<Schema$Workspace>
    ): void | GaxiosPromise<Schema$Workspace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Workspace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Workspace>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Workspace;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Create_version
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateContainerVersionRequestVersionOptions;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Getstatus
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Quick_preview
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
     */
    fingerprint?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Sync
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the workspace in storage.
     */
    fingerprint?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Workspace;
  }

  export class Resource$Accounts$Containers$Workspaces$Built_in_variables {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreateBuiltInVariableResponse>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateBuiltInVariableResponse>,
      callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create,
      callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create
        | BodyResponseCallback<Schema$CreateBuiltInVariableResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateBuiltInVariableResponse>,
      callback?: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>
    ): void | GaxiosPromise<Schema$CreateBuiltInVariableResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create;
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
            url: (
              rootUrl + '/tagmanager/v2/{+parent}/built_in_variables'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CreateBuiltInVariableResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CreateBuiltInVariableResponse>(
          parameters
        );
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
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEnabledBuiltInVariablesResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>,
      callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List,
      callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List
        | BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>,
      callback?: BodyResponseCallback<
        Schema$ListEnabledBuiltInVariablesResponse
      >
    ): void | GaxiosPromise<Schema$ListEnabledBuiltInVariablesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List;
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
            url: (
              rootUrl + '/tagmanager/v2/{+parent}/built_in_variables'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListEnabledBuiltInVariablesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListEnabledBuiltInVariablesResponse>(
          parameters
        );
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
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertBuiltInVariableResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertBuiltInVariableResponse>,
      callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert,
      callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>
    ): void;
    revert(
      callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>
    ): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert
        | BodyResponseCallback<Schema$RevertBuiltInVariableResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertBuiltInVariableResponse>,
      callback?: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>
    ): void | GaxiosPromise<Schema$RevertBuiltInVariableResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert;
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
            url: (
              rootUrl + '/tagmanager/v2/{+path}/built_in_variables:revert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RevertBuiltInVariableResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$RevertBuiltInVariableResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
    /**
     * The types of built-in variables to enable.
     */
    type?: string[];
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
     */
    path?: string;
    /**
     * The types of built-in variables to delete.
     */
    type?: string[];
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
     */
    path?: string;
    /**
     * The type of built-in variable to revert.
     */
    type?: string;
  }

  export class Resource$Accounts$Containers$Workspaces$Folders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Folder>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    create(callback: BodyResponseCallback<Schema$Folder>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Create
        | BodyResponseCallback<Schema$Folder>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>
    ): void | GaxiosPromise<Schema$Folder> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/folders').replace(
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
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    entities(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FolderEntities>;
    entities(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities,
      options: MethodOptions | BodyResponseCallback<Schema$FolderEntities>,
      callback: BodyResponseCallback<Schema$FolderEntities>
    ): void;
    entities(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities,
      callback: BodyResponseCallback<Schema$FolderEntities>
    ): void;
    entities(callback: BodyResponseCallback<Schema$FolderEntities>): void;
    entities(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Entities
        | BodyResponseCallback<Schema$FolderEntities>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FolderEntities>,
      callback?: BodyResponseCallback<Schema$FolderEntities>
    ): void | GaxiosPromise<Schema$FolderEntities> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Entities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Entities;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:entities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Folder>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    get(callback: BodyResponseCallback<Schema$Folder>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Get
        | BodyResponseCallback<Schema$Folder>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>
    ): void | GaxiosPromise<Schema$Folder> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFoldersResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListFoldersResponse>,
      callback: BodyResponseCallback<Schema$ListFoldersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$List,
      callback: BodyResponseCallback<Schema$ListFoldersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$List
        | BodyResponseCallback<Schema$ListFoldersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFoldersResponse>,
      callback?: BodyResponseCallback<Schema$ListFoldersResponse>
    ): void | GaxiosPromise<Schema$ListFoldersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/folders').replace(
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
        createAPIRequest<Schema$ListFoldersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFoldersResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
     * @desc Moves entities to a GTM Folder.
     * @alias tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
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
    move_entities_to_folder(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    move_entities_to_folder(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    move_entities_to_folder(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder,
      callback: BodyResponseCallback<void>
    ): void;
    move_entities_to_folder(callback: BodyResponseCallback<void>): void;
    move_entities_to_folder(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder;
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
            url: (
              rootUrl + '/tagmanager/v2/{+path}:move_entities_to_folder'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertFolderResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertFolderResponse>,
      callback: BodyResponseCallback<Schema$RevertFolderResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert,
      callback: BodyResponseCallback<Schema$RevertFolderResponse>
    ): void;
    revert(callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Revert
        | BodyResponseCallback<Schema$RevertFolderResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertFolderResponse>,
      callback?: BodyResponseCallback<Schema$RevertFolderResponse>
    ): void | GaxiosPromise<Schema$RevertFolderResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Revert;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Folder>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update,
      callback: BodyResponseCallback<Schema$Folder>
    ): void;
    update(callback: BodyResponseCallback<Schema$Folder>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Folders$Update
        | BodyResponseCallback<Schema$Folder>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>
    ): void | GaxiosPromise<Schema$Folder> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Folders$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Folders$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Folder>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Folder>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Folder;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Entities
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
     */
    path?: string;
    /**
     * The tags to be moved to the folder.
     */
    tagId?: string[];
    /**
     * The triggers to be moved to the folder.
     */
    triggerId?: string[];
    /**
     * The variables to be moved to the folder.
     */
    variableId?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Folder;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the tag in storage.
     */
    fingerprint?: string;
    /**
     * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the folder in storage.
     */
    fingerprint?: string;
    /**
     * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Folder;
  }

  export class Resource$Accounts$Containers$Workspaces$Tags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tag>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    create(callback: BodyResponseCallback<Schema$Tag>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Tags$Create
        | BodyResponseCallback<Schema$Tag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>
    ): void | GaxiosPromise<Schema$Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Tags$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Tags$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/tags').replace(
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
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Tags$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Tags$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Tags$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tag>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    get(callback: BodyResponseCallback<Schema$Tag>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Tags$Get
        | BodyResponseCallback<Schema$Tag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>
    ): void | GaxiosPromise<Schema$Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Tags$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Tags$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Tags$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTagsResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTagsResponse>,
      callback: BodyResponseCallback<Schema$ListTagsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$List,
      callback: BodyResponseCallback<Schema$ListTagsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Tags$List
        | BodyResponseCallback<Schema$ListTagsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTagsResponse>,
      callback?: BodyResponseCallback<Schema$ListTagsResponse>
    ): void | GaxiosPromise<Schema$ListTagsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Tags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Tags$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/tags').replace(
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
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertTagResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert,
      options: MethodOptions | BodyResponseCallback<Schema$RevertTagResponse>,
      callback: BodyResponseCallback<Schema$RevertTagResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert,
      callback: BodyResponseCallback<Schema$RevertTagResponse>
    ): void;
    revert(callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Tags$Revert
        | BodyResponseCallback<Schema$RevertTagResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertTagResponse>,
      callback?: BodyResponseCallback<Schema$RevertTagResponse>
    ): void | GaxiosPromise<Schema$RevertTagResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Tags$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Tags$Revert;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tag>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    update(callback: BodyResponseCallback<Schema$Tag>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Tags$Update
        | BodyResponseCallback<Schema$Tag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback?: BodyResponseCallback<Schema$Tag>
    ): void | GaxiosPromise<Schema$Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Tags$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Tags$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tag>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Tag>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tag;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Tags$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of thetag in storage.
     */
    fingerprint?: string;
    /**
     * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the tag in storage.
     */
    fingerprint?: string;
    /**
     * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tag;
  }

  export class Resource$Accounts$Containers$Workspaces$Templates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * tagmanager.accounts.containers.workspaces.templates.create
     * @desc Creates a GTM Custom Template.
     * @alias tagmanager.accounts.containers.workspaces.templates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     * @param {().CustomTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomTemplate>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>,
      callback: BodyResponseCallback<Schema$CustomTemplate>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create,
      callback: BodyResponseCallback<Schema$CustomTemplate>
    ): void;
    create(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Templates$Create
        | BodyResponseCallback<Schema$CustomTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomTemplate>,
      callback?: BodyResponseCallback<Schema$CustomTemplate>
    ): void | GaxiosPromise<Schema$CustomTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Templates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Templates$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/templates').replace(
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
        createAPIRequest<Schema$CustomTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomTemplate>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.templates.delete
     * @desc Deletes a GTM Template.
     * @alias tagmanager.accounts.containers.workspaces.templates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Templates$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Templates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Templates$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.templates.get
     * @desc Gets a GTM Template.
     * @alias tagmanager.accounts.containers.workspaces.templates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomTemplate>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>,
      callback: BodyResponseCallback<Schema$CustomTemplate>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get,
      callback: BodyResponseCallback<Schema$CustomTemplate>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Templates$Get
        | BodyResponseCallback<Schema$CustomTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomTemplate>,
      callback?: BodyResponseCallback<Schema$CustomTemplate>
    ): void | GaxiosPromise<Schema$CustomTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Templates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Templates$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomTemplate>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.templates.list
     * @desc Lists all GTM Templates of a GTM container workspace.
     * @alias tagmanager.accounts.containers.workspaces.templates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Templates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTemplatesResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTemplatesResponse>,
      callback: BodyResponseCallback<Schema$ListTemplatesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$List,
      callback: BodyResponseCallback<Schema$ListTemplatesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Templates$List
        | BodyResponseCallback<Schema$ListTemplatesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListTemplatesResponse>
    ): void | GaxiosPromise<Schema$ListTemplatesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Templates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Templates$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/templates').replace(
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
        createAPIRequest<Schema$ListTemplatesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTemplatesResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.templates.revert
     * @desc Reverts changes to a GTM Template in a GTM Workspace.
     * @alias tagmanager.accounts.containers.workspaces.templates.revert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the template in storage.
     * @param {string} params.path GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertTemplateResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertTemplateResponse>,
      callback: BodyResponseCallback<Schema$RevertTemplateResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert,
      callback: BodyResponseCallback<Schema$RevertTemplateResponse>
    ): void;
    revert(callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Templates$Revert
        | BodyResponseCallback<Schema$RevertTemplateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertTemplateResponse>,
      callback?: BodyResponseCallback<Schema$RevertTemplateResponse>
    ): void | GaxiosPromise<Schema$RevertTemplateResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Templates$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Templates$Revert;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RevertTemplateResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RevertTemplateResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.templates.update
     * @desc Updates a GTM Template.
     * @alias tagmanager.accounts.containers.workspaces.templates.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the templates in storage.
     * @param {string} params.path GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     * @param {().CustomTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomTemplate>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>,
      callback: BodyResponseCallback<Schema$CustomTemplate>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update,
      callback: BodyResponseCallback<Schema$CustomTemplate>
    ): void;
    update(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Templates$Update
        | BodyResponseCallback<Schema$CustomTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomTemplate>,
      callback?: BodyResponseCallback<Schema$CustomTemplate>
    ): void | GaxiosPromise<Schema$CustomTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Templates$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Templates$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomTemplate>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomTemplate;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Templates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the template in storage.
     */
    fingerprint?: string;
    /**
     * GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the templates in storage.
     */
    fingerprint?: string;
    /**
     * GTM Custom Template's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/templates/{template_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomTemplate;
  }

  export class Resource$Accounts$Containers$Workspaces$Triggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Trigger>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Trigger>,
      callback: BodyResponseCallback<Schema$Trigger>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create,
      callback: BodyResponseCallback<Schema$Trigger>
    ): void;
    create(callback: BodyResponseCallback<Schema$Trigger>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Triggers$Create
        | BodyResponseCallback<Schema$Trigger>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>
    ): void | GaxiosPromise<Schema$Trigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Triggers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Triggers$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/triggers').replace(
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
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Trigger>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Trigger>,
      callback: BodyResponseCallback<Schema$Trigger>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get,
      callback: BodyResponseCallback<Schema$Trigger>
    ): void;
    get(callback: BodyResponseCallback<Schema$Trigger>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Triggers$Get
        | BodyResponseCallback<Schema$Trigger>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>
    ): void | GaxiosPromise<Schema$Trigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Triggers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Triggers$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTriggersResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTriggersResponse>,
      callback: BodyResponseCallback<Schema$ListTriggersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List,
      callback: BodyResponseCallback<Schema$ListTriggersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Triggers$List
        | BodyResponseCallback<Schema$ListTriggersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTriggersResponse>,
      callback?: BodyResponseCallback<Schema$ListTriggersResponse>
    ): void | GaxiosPromise<Schema$ListTriggersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Triggers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Triggers$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/triggers').replace(
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
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertTriggerResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertTriggerResponse>,
      callback: BodyResponseCallback<Schema$RevertTriggerResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert,
      callback: BodyResponseCallback<Schema$RevertTriggerResponse>
    ): void;
    revert(callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert
        | BodyResponseCallback<Schema$RevertTriggerResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertTriggerResponse>,
      callback?: BodyResponseCallback<Schema$RevertTriggerResponse>
    ): void | GaxiosPromise<Schema$RevertTriggerResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Trigger>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Trigger>,
      callback: BodyResponseCallback<Schema$Trigger>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update,
      callback: BodyResponseCallback<Schema$Trigger>
    ): void;
    update(callback: BodyResponseCallback<Schema$Trigger>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Triggers$Update
        | BodyResponseCallback<Schema$Trigger>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Trigger>,
      callback?: BodyResponseCallback<Schema$Trigger>
    ): void | GaxiosPromise<Schema$Trigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Triggers$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Triggers$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Trigger>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Trigger>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Trigger;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the trigger in storage.
     */
    fingerprint?: string;
    /**
     * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the trigger in storage.
     */
    fingerprint?: string;
    /**
     * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Trigger;
  }

  export class Resource$Accounts$Containers$Workspaces$Variables {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Variable>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Variable>,
      callback: BodyResponseCallback<Schema$Variable>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create,
      callback: BodyResponseCallback<Schema$Variable>
    ): void;
    create(callback: BodyResponseCallback<Schema$Variable>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Variables$Create
        | BodyResponseCallback<Schema$Variable>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>
    ): void | GaxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Variables$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Variables$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/variables').replace(
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
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Variables$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Variables$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Variables$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Variable>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Variable>,
      callback: BodyResponseCallback<Schema$Variable>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get,
      callback: BodyResponseCallback<Schema$Variable>
    ): void;
    get(callback: BodyResponseCallback<Schema$Variable>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Variables$Get
        | BodyResponseCallback<Schema$Variable>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>
    ): void | GaxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Variables$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Variables$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Variables$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVariablesResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVariablesResponse>,
      callback: BodyResponseCallback<Schema$ListVariablesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$List,
      callback: BodyResponseCallback<Schema$ListVariablesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Variables$List
        | BodyResponseCallback<Schema$ListVariablesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVariablesResponse>,
      callback?: BodyResponseCallback<Schema$ListVariablesResponse>
    ): void | GaxiosPromise<Schema$ListVariablesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Variables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Variables$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/variables').replace(
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
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertVariableResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertVariableResponse>,
      callback: BodyResponseCallback<Schema$RevertVariableResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert,
      callback: BodyResponseCallback<Schema$RevertVariableResponse>
    ): void;
    revert(callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Variables$Revert
        | BodyResponseCallback<Schema$RevertVariableResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertVariableResponse>,
      callback?: BodyResponseCallback<Schema$RevertVariableResponse>
    ): void | GaxiosPromise<Schema$RevertVariableResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Variables$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Variables$Revert;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Variable>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Variable>,
      callback: BodyResponseCallback<Schema$Variable>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update,
      callback: BodyResponseCallback<Schema$Variable>
    ): void;
    update(callback: BodyResponseCallback<Schema$Variable>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Variables$Update
        | BodyResponseCallback<Schema$Variable>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Variable>,
      callback?: BodyResponseCallback<Schema$Variable>
    ): void | GaxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Variables$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Variables$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Variable>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variable>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Variable;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Variables$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the variable in storage.
     */
    fingerprint?: string;
    /**
     * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the variable in storage.
     */
    fingerprint?: string;
    /**
     * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Variable;
  }

  export class Resource$Accounts$Containers$Workspaces$Zones {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * tagmanager.accounts.containers.workspaces.zones.create
     * @desc Creates a GTM Zone.
     * @alias tagmanager.accounts.containers.workspaces.zones.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     * @param {().Zone} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Zone>;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Zone>,
      callback: BodyResponseCallback<Schema$Zone>
    ): void;
    create(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create,
      callback: BodyResponseCallback<Schema$Zone>
    ): void;
    create(callback: BodyResponseCallback<Schema$Zone>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Zones$Create
        | BodyResponseCallback<Schema$Zone>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Zone>,
      callback?: BodyResponseCallback<Schema$Zone>
    ): void | GaxiosPromise<Schema$Zone> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Zones$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Zones$Create;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/zones').replace(
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
        createAPIRequest<Schema$Zone>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Zone>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.zones.delete
     * @desc Deletes a GTM Zone.
     * @alias tagmanager.accounts.containers.workspaces.zones.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Zones$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Zones$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Zones$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.zones.get
     * @desc Gets a GTM Zone.
     * @alias tagmanager.accounts.containers.workspaces.zones.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Zone>;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Zone>,
      callback: BodyResponseCallback<Schema$Zone>
    ): void;
    get(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get,
      callback: BodyResponseCallback<Schema$Zone>
    ): void;
    get(callback: BodyResponseCallback<Schema$Zone>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Zones$Get
        | BodyResponseCallback<Schema$Zone>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Zone>,
      callback?: BodyResponseCallback<Schema$Zone>
    ): void | GaxiosPromise<Schema$Zone> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Zones$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Zones$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Zone>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Zone>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.zones.list
     * @desc Lists all GTM Zones of a GTM container workspace.
     * @alias tagmanager.accounts.containers.workspaces.zones.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$Containers$Workspaces$Zones$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListZonesResponse>;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListZonesResponse>,
      callback: BodyResponseCallback<Schema$ListZonesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$List,
      callback: BodyResponseCallback<Schema$ListZonesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Zones$List
        | BodyResponseCallback<Schema$ListZonesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListZonesResponse>,
      callback?: BodyResponseCallback<Schema$ListZonesResponse>
    ): void | GaxiosPromise<Schema$ListZonesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Zones$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Zones$List;
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
            url: (rootUrl + '/tagmanager/v2/{+parent}/zones').replace(
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
        createAPIRequest<Schema$ListZonesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListZonesResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.zones.revert
     * @desc Reverts changes to a GTM Zone in a GTM Workspace.
     * @alias tagmanager.accounts.containers.workspaces.zones.revert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the zone in storage.
     * @param {string} params.path GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    revert(
      params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevertZoneResponse>;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert,
      options: MethodOptions | BodyResponseCallback<Schema$RevertZoneResponse>,
      callback: BodyResponseCallback<Schema$RevertZoneResponse>
    ): void;
    revert(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert,
      callback: BodyResponseCallback<Schema$RevertZoneResponse>
    ): void;
    revert(callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Zones$Revert
        | BodyResponseCallback<Schema$RevertZoneResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevertZoneResponse>,
      callback?: BodyResponseCallback<Schema$RevertZoneResponse>
    ): void | GaxiosPromise<Schema$RevertZoneResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Zones$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Zones$Revert;
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
            url: (rootUrl + '/tagmanager/v2/{+path}:revert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RevertZoneResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RevertZoneResponse>(parameters);
      }
    }

    /**
     * tagmanager.accounts.containers.workspaces.zones.update
     * @desc Updates a GTM Zone.
     * @alias tagmanager.accounts.containers.workspaces.zones.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the zone in storage.
     * @param {string} params.path GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     * @param {().Zone} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Zone>;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Zone>,
      callback: BodyResponseCallback<Schema$Zone>
    ): void;
    update(
      params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update,
      callback: BodyResponseCallback<Schema$Zone>
    ): void;
    update(callback: BodyResponseCallback<Schema$Zone>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Containers$Workspaces$Zones$Update
        | BodyResponseCallback<Schema$Zone>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Zone>,
      callback?: BodyResponseCallback<Schema$Zone>
    ): void | GaxiosPromise<Schema$Zone> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Containers$Workspaces$Zones$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Containers$Workspaces$Zones$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Zone>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Zone>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Zone;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Zones$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Revert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the zone in storage.
     */
    fingerprint?: string;
    /**
     * GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * When provided, this fingerprint must match the fingerprint of the zone in storage.
     */
    fingerprint?: string;
    /**
     * GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Zone;
  }

  export class Resource$Accounts$User_permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Accounts$User_permissions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserPermission>;
    create(
      params: Params$Resource$Accounts$User_permissions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UserPermission>,
      callback: BodyResponseCallback<Schema$UserPermission>
    ): void;
    create(
      params: Params$Resource$Accounts$User_permissions$Create,
      callback: BodyResponseCallback<Schema$UserPermission>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserPermission>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$User_permissions$Create
        | BodyResponseCallback<Schema$UserPermission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>
    ): void | GaxiosPromise<Schema$UserPermission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$User_permissions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$User_permissions$Create;
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
            url: (
              rootUrl + '/tagmanager/v2/{+parent}/user_permissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserPermission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserPermission>(parameters);
      }
    }

    /**
     * tagmanager.accounts.user_permissions.delete
     * @desc Removes a user from the account, revoking access to it and all of its containers.
     * @alias tagmanager.accounts.user_permissions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Accounts$User_permissions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$User_permissions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$User_permissions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$User_permissions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$User_permissions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$User_permissions$Delete;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
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
    get(
      params?: Params$Resource$Accounts$User_permissions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserPermission>;
    get(
      params: Params$Resource$Accounts$User_permissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserPermission>,
      callback: BodyResponseCallback<Schema$UserPermission>
    ): void;
    get(
      params: Params$Resource$Accounts$User_permissions$Get,
      callback: BodyResponseCallback<Schema$UserPermission>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserPermission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$User_permissions$Get
        | BodyResponseCallback<Schema$UserPermission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>
    ): void | GaxiosPromise<Schema$UserPermission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$User_permissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$User_permissions$Get;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserPermission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserPermission>(parameters);
      }
    }

    /**
     * tagmanager.accounts.user_permissions.list
     * @desc List all users that have access to the account along with Account and Container user access granted to each of them.
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
    list(
      params?: Params$Resource$Accounts$User_permissions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUserPermissionsResponse>;
    list(
      params: Params$Resource$Accounts$User_permissions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserPermissionsResponse>,
      callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$User_permissions$List,
      callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$User_permissions$List
        | BodyResponseCallback<Schema$ListUserPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$ListUserPermissionsResponse>
    ): void | GaxiosPromise<Schema$ListUserPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$User_permissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$User_permissions$List;
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
            url: (
              rootUrl + '/tagmanager/v2/{+parent}/user_permissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListUserPermissionsResponse>(
          parameters,
          callback
        );
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
    update(
      params?: Params$Resource$Accounts$User_permissions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserPermission>;
    update(
      params: Params$Resource$Accounts$User_permissions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$UserPermission>,
      callback: BodyResponseCallback<Schema$UserPermission>
    ): void;
    update(
      params: Params$Resource$Accounts$User_permissions$Update,
      callback: BodyResponseCallback<Schema$UserPermission>
    ): void;
    update(callback: BodyResponseCallback<Schema$UserPermission>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$User_permissions$Update
        | BodyResponseCallback<Schema$UserPermission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserPermission>,
      callback?: BodyResponseCallback<Schema$UserPermission>
    ): void | GaxiosPromise<Schema$UserPermission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$User_permissions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$User_permissions$Update;
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
            url: (rootUrl + '/tagmanager/v2/{+path}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['path'],
        pathParams: ['path'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserPermission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserPermission>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$User_permissions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM Account's API relative path. Example: accounts/{account_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserPermission;
  }
  export interface Params$Resource$Accounts$User_permissions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$User_permissions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
     */
    path?: string;
  }
  export interface Params$Resource$Accounts$User_permissions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * GTM Accounts's API relative path. Example: accounts/{account_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$User_permissions$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
     */
    path?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserPermission;
  }
}
