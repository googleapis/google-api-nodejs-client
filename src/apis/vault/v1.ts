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

export namespace vault_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
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
   * G Suite Vault API
   *
   * Archiving and eDiscovery for G Suite.
   *
   * @example
   * const {google} = require('googleapis');
   * const vault = google.vault('v1');
   *
   * @namespace vault
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Vault
   */
  export class Vault {
    context: APIRequestContext;
    matters: Resource$Matters;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.matters = new Resource$Matters(this.context);
    }
  }

  /**
   * Accounts to search
   */
  export interface Schema$AccountInfo {
    /**
     * A set of accounts to search.
     */
    emails?: string[] | null;
  }
  /**
   * A status detailing the status of each account creation, and the HeldAccount, if successful.
   */
  export interface Schema$AddHeldAccountResult {
    /**
     * If present, this account was successfully created.
     */
    account?: Schema$HeldAccount;
    /**
     * This represents the success status. If failed, check message.
     */
    status?: Schema$Status;
  }
  /**
   * Add a list of accounts to a hold.
   */
  export interface Schema$AddHeldAccountsRequest {
    /**
     * Account ids to identify which accounts to add. Only account_ids or only emails should be specified, but not both.
     */
    accountIds?: string[] | null;
    /**
     * Emails to identify which accounts to add. Only emails or only account_ids should be specified, but not both.
     */
    emails?: string[] | null;
  }
  /**
   * Response for batch create held accounts.
   */
  export interface Schema$AddHeldAccountsResponse {
    /**
     * The list of responses, in the same order as the batch request.
     */
    responses?: Schema$AddHeldAccountResult[];
  }
  /**
   * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, it will be overwritten.
   */
  export interface Schema$AddMatterPermissionsRequest {
    /**
     * Only relevant if send_emails is true. True to CC requestor in the email message. False to not CC requestor.
     */
    ccMe?: boolean | null;
    /**
     * The MatterPermission to add.
     */
    matterPermission?: Schema$MatterPermission;
    /**
     * True to send notification email to the added account. False to not send notification email.
     */
    sendEmails?: boolean | null;
  }
  /**
   * Close a matter by ID.
   */
  export interface Schema$CloseMatterRequest {}
  /**
   * Response to a CloseMatterRequest.
   */
  export interface Schema$CloseMatterResponse {
    /**
     * The updated matter, with state CLOSED.
     */
    matter?: Schema$Matter;
  }
  /**
   * An export file on cloud storage
   */
  export interface Schema$CloudStorageFile {
    /**
     * The cloud storage bucket name of this export file. Can be used in cloud storage JSON/XML API.
     */
    bucketName?: string | null;
    /**
     * The md5 hash of the file.
     */
    md5Hash?: string | null;
    /**
     * The cloud storage object name of this export file. Can be used in cloud storage JSON/XML API.
     */
    objectName?: string | null;
    /**
     * The size of the export file.
     */
    size?: string | null;
  }
  /**
   * Export sink for cloud storage files.
   */
  export interface Schema$CloudStorageSink {
    /**
     * Output only. The exported files on cloud storage.
     */
    files?: Schema$CloudStorageFile[];
  }
  /**
   * Corpus specific queries.
   */
  export interface Schema$CorpusQuery {
    /**
     * Details pertaining to Drive holds. If set, corpus must be Drive.
     */
    driveQuery?: Schema$HeldDriveQuery;
    /**
     * Details pertaining to Groups holds. If set, corpus must be Groups.
     */
    groupsQuery?: Schema$HeldGroupsQuery;
    /**
     * Details pertaining to Hangouts Chat holds. If set, corpus must be Hangouts Chat.
     */
    hangoutsChatQuery?: Schema$HeldHangoutsChatQuery;
    /**
     * Details pertaining to mail holds. If set, corpus must be mail.
     */
    mailQuery?: Schema$HeldMailQuery;
  }
  /**
   * The options for Drive export.
   */
  export interface Schema$DriveExportOptions {
    /**
     * Set to true to include access level information for users with &lt;a href=&quot;https://support.google.com/vault/answer/6099459#metadata&quot;&gt;indirect access&lt;/a&gt; to files.
     */
    includeAccessInfo?: boolean | null;
  }
  /**
   * Drive search advanced options
   */
  export interface Schema$DriveOptions {
    /**
     * Set to true to include shared drive.
     */
    includeSharedDrives?: boolean | null;
    /**
     * Set to true to include Team Drive.
     */
    includeTeamDrives?: boolean | null;
    /**
     * Search the versions of the Drive file as of the reference date. These timestamps are in GMT and rounded down to the given date.
     */
    versionDate?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An export
   */
  export interface Schema$Export {
    /**
     * Output only. Export sink for cloud storage files.
     */
    cloudStorageSink?: Schema$CloudStorageSink;
    /**
     * Output only. The time when the export was created.
     */
    createTime?: string | null;
    /**
     * Advanced options of the export.
     */
    exportOptions?: Schema$ExportOptions;
    /**
     * Output only. The generated export ID.
     */
    id?: string | null;
    /**
     * Output only. The matter ID.
     */
    matterId?: string | null;
    /**
     * The export name.
     */
    name?: string | null;
    /**
     * The search query being exported.
     */
    query?: Schema$Query;
    /**
     * Output only. The requester of the export.
     */
    requester?: Schema$UserInfo;
    /**
     * Output only. Export statistics.
     */
    stats?: Schema$ExportStats;
    /**
     * Output only. The export status.
     */
    status?: string | null;
  }
  /**
   * Export advanced options
   */
  export interface Schema$ExportOptions {
    /**
     * Option available for Drive export.
     */
    driveOptions?: Schema$DriveExportOptions;
    /**
     * Option available for groups export.
     */
    groupsOptions?: Schema$GroupsExportOptions;
    /**
     * Option available for hangouts chat export.
     */
    hangoutsChatOptions?: Schema$HangoutsChatExportOptions;
    /**
     * Option available for mail export.
     */
    mailOptions?: Schema$MailExportOptions;
    /**
     * The requested export location.
     */
    region?: string | null;
  }
  /**
   * Stats of an export.
   */
  export interface Schema$ExportStats {
    /**
     * The number of documents already processed by the export.
     */
    exportedArtifactCount?: string | null;
    /**
     * The size of export in bytes.
     */
    sizeInBytes?: string | null;
    /**
     * The number of documents to be exported.
     */
    totalArtifactCount?: string | null;
  }
  /**
   * The options for groups export.
   */
  export interface Schema$GroupsExportOptions {
    /**
     * The export format for groups export.
     */
    exportFormat?: string | null;
  }
  /**
   * The options for hangouts chat export.
   */
  export interface Schema$HangoutsChatExportOptions {
    /**
     * The export format for hangouts chat export.
     */
    exportFormat?: string | null;
  }
  /**
   * Accounts to search
   */
  export interface Schema$HangoutsChatInfo {
    /**
     * A set of rooms to search.
     */
    roomId?: string[] | null;
  }
  /**
   * Hangouts chat search advanced options
   */
  export interface Schema$HangoutsChatOptions {
    /**
     * Set to true to include rooms.
     */
    includeRooms?: boolean | null;
  }
  /**
   * An account being held in a particular hold. This structure is immutable. This can be either a single user or a google group, depending on the corpus.
   */
  export interface Schema$HeldAccount {
    /**
     * The account&#39;s ID as provided by the &lt;a href=&quot;https://developers.google.com/admin-sdk/&quot;&gt;Admin SDK&lt;/a&gt;.
     */
    accountId?: string | null;
    /**
     * The primary email address of the account. If used as an input, this takes precedence over account ID.
     */
    email?: string | null;
    /**
     * Output only. The first name of the account holder.
     */
    firstName?: string | null;
    /**
     * Output only. When the account was put on hold.
     */
    holdTime?: string | null;
    /**
     * Output only. The last name of the account holder.
     */
    lastName?: string | null;
  }
  /**
   * Query options for Drive holds.
   */
  export interface Schema$HeldDriveQuery {
    /**
     * If true, include files in shared drives in the hold.
     */
    includeSharedDriveFiles?: boolean | null;
    /**
     * If true, include files in Team Drives in the hold.
     */
    includeTeamDriveFiles?: boolean | null;
  }
  /**
   * Query options for group holds.
   */
  export interface Schema$HeldGroupsQuery {
    /**
     * The end time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
     */
    endTime?: string | null;
    /**
     * The start time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
     */
    startTime?: string | null;
    /**
     * The search terms for the hold.
     */
    terms?: string | null;
  }
  /**
   * Query options for hangouts chat holds.
   */
  export interface Schema$HeldHangoutsChatQuery {
    /**
     * If true, include rooms the user has participated in.
     */
    includeRooms?: boolean | null;
  }
  /**
   * Query options for mail holds.
   */
  export interface Schema$HeldMailQuery {
    /**
     * The end time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
     */
    endTime?: string | null;
    /**
     * The start time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
     */
    startTime?: string | null;
    /**
     * The search terms for the hold.
     */
    terms?: string | null;
  }
  /**
   * A organizational unit being held in a particular hold. This structure is immutable.
   */
  export interface Schema$HeldOrgUnit {
    /**
     * When the org unit was put on hold. This property is immutable.
     */
    holdTime?: string | null;
    /**
     * The org unit&#39;s immutable ID as provided by the Admin SDK.
     */
    orgUnitId?: string | null;
  }
  /**
   * Represents a hold within Vault. A hold restricts purging of artifacts based on the combination of the query and accounts restrictions. A hold can be configured to either apply to an explicitly configured set of accounts, or can be applied to all members of an organizational unit.
   */
  export interface Schema$Hold {
    /**
     * If set, the hold applies to the enumerated accounts and org_unit must be empty.
     */
    accounts?: Schema$HeldAccount[];
    /**
     * The corpus to be searched.
     */
    corpus?: string | null;
    /**
     * The unique immutable ID of the hold. Assigned during creation.
     */
    holdId?: string | null;
    /**
     * The name of the hold.
     */
    name?: string | null;
    /**
     * If set, the hold applies to all members of the organizational unit and accounts must be empty. This property is mutable. For groups holds, set the accounts field.
     */
    orgUnit?: Schema$HeldOrgUnit;
    /**
     * The corpus-specific query. If set, the corpusQuery must match corpus type.
     */
    query?: Schema$CorpusQuery;
    /**
     * The last time this hold was modified.
     */
    updateTime?: string | null;
  }
  /**
   * The holds for a matter.
   */
  export interface Schema$ListExportsResponse {
    /**
     * The list of exports.
     */
    exports?: Schema$Export[];
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Returns a list of held accounts for a hold.
   */
  export interface Schema$ListHeldAccountsResponse {
    /**
     * The held accounts on a hold.
     */
    accounts?: Schema$HeldAccount[];
  }
  /**
   * The holds for a matter.
   */
  export interface Schema$ListHoldsResponse {
    /**
     * The list of holds.
     */
    holds?: Schema$Hold[];
    /**
     * Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Provides the list of matters.
   */
  export interface Schema$ListMattersResponse {
    /**
     * List of matters.
     */
    matters?: Schema$Matter[];
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Definition of the response for method ListSaveQuery.
   */
  export interface Schema$ListSavedQueriesResponse {
    /**
     * Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.
     */
    nextPageToken?: string | null;
    /**
     * List of output saved queries.
     */
    savedQueries?: Schema$SavedQuery[];
  }
  /**
   * The options for mail export.
   */
  export interface Schema$MailExportOptions {
    /**
     * The export file format.
     */
    exportFormat?: string | null;
    /**
     * Set to true to export confidential mode content.
     */
    showConfidentialModeContent?: boolean | null;
  }
  /**
   * Mail search advanced options
   */
  export interface Schema$MailOptions {
    /**
     * Set to true to exclude drafts.
     */
    excludeDrafts?: boolean | null;
  }
  /**
   * Represents a matter.
   */
  export interface Schema$Matter {
    /**
     * The description of the matter.
     */
    description?: string | null;
    /**
     * The matter ID which is generated by the server. Should be blank when creating a new matter.
     */
    matterId?: string | null;
    /**
     * List of users and access to the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.
     */
    matterPermissions?: Schema$MatterPermission[];
    /**
     * The name of the matter.
     */
    name?: string | null;
    /**
     * The state of the matter.
     */
    state?: string | null;
  }
  /**
   * Currently each matter only has one owner, and all others are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
   */
  export interface Schema$MatterPermission {
    /**
     * The account id, as provided by &lt;a href=&quot;https://developers.google.com/admin-sdk/&quot;&gt;Admin SDK&lt;/a&gt;.
     */
    accountId?: string | null;
    /**
     * The user&#39;s role in this matter.
     */
    role?: string | null;
  }
  /**
   * Org Unit to search
   */
  export interface Schema$OrgUnitInfo {
    /**
     * Org unit to search, as provided by the &lt;a href=&quot;https://developers.google.com/admin-sdk/directory/&quot;&gt;Admin SDK Directory API&lt;/a&gt;.
     */
    orgUnitId?: string | null;
  }
  /**
   * A query definition relevant for search &amp; export.
   */
  export interface Schema$Query {
    /**
     * When &#39;ACCOUNT&#39; is chosen as search method, account_info needs to be specified.
     */
    accountInfo?: Schema$AccountInfo;
    /**
     * The corpus to search.
     */
    corpus?: string | null;
    /**
     * The data source to search from.
     */
    dataScope?: string | null;
    /**
     * For Drive search, specify more options in this field.
     */
    driveOptions?: Schema$DriveOptions;
    /**
     * The end time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
     */
    endTime?: string | null;
    /**
     * When &#39;ROOM&#39; is chosen as search method, hangout_chats_info needs to be specified. (read-only)
     */
    hangoutsChatInfo?: Schema$HangoutsChatInfo;
    /**
     * For hangouts chat search, specify more options in this field. (read-only)
     */
    hangoutsChatOptions?: Schema$HangoutsChatOptions;
    /**
     * For mail search, specify more options in this field.
     */
    mailOptions?: Schema$MailOptions;
    /**
     * The search method to use. This field is similar to the search_method field but is introduced to support shared drives. It supports all search method types. In case the search_method is TEAM_DRIVE the response of this field will be SHARED_DRIVE only.
     */
    method?: string | null;
    /**
     * When &#39;ORG_UNIT&#39; is chosen as as search method, org_unit_info needs to be specified.
     */
    orgUnitInfo?: Schema$OrgUnitInfo;
    /**
     * The search method to use.
     */
    searchMethod?: string | null;
    /**
     * When &#39;SHARED_DRIVE&#39; is chosen as search method, shared_drive_info needs to be specified.
     */
    sharedDriveInfo?: Schema$SharedDriveInfo;
    /**
     * The start time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
     */
    startTime?: string | null;
    /**
     * When &#39;TEAM_DRIVE&#39; is chosen as search method, team_drive_info needs to be specified.
     */
    teamDriveInfo?: Schema$TeamDriveInfo;
    /**
     * The corpus-specific &lt;a href=&quot;https://support.google.com/vault/answer/2474474&quot;&gt;search operators&lt;/a&gt; used to generate search results.
     */
    terms?: string | null;
    /**
     * The time zone name. It should be an IANA TZ name, such as &quot;America/Los_Angeles&quot;. For more information, see &lt;a href=&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones&quot;&gt;Time Zone&lt;/a&gt;.
     */
    timeZone?: string | null;
  }
  /**
   * Remove a list of accounts from a hold.
   */
  export interface Schema$RemoveHeldAccountsRequest {
    /**
     * Account ids to identify HeldAccounts to remove.
     */
    accountIds?: string[] | null;
  }
  /**
   * Response for batch delete held accounts.
   */
  export interface Schema$RemoveHeldAccountsResponse {
    /**
     * A list of statuses for deleted accounts. Results have the same order as the request.
     */
    statuses?: Schema$Status[];
  }
  /**
   * Remove an account as a matter collaborator.
   */
  export interface Schema$RemoveMatterPermissionsRequest {
    /**
     * The account ID.
     */
    accountId?: string | null;
  }
  /**
   * Reopen a matter by ID.
   */
  export interface Schema$ReopenMatterRequest {}
  /**
   * Response to a ReopenMatterRequest.
   */
  export interface Schema$ReopenMatterResponse {
    /**
     * The updated matter, with state OPEN.
     */
    matter?: Schema$Matter;
  }
  /**
   * Definition of the saved query.
   */
  export interface Schema$SavedQuery {
    /**
     * Output only. The server generated timestamp at which saved query was created.
     */
    createTime?: string | null;
    /**
     * Name of the saved query.
     */
    displayName?: string | null;
    /**
     * Output only. The matter id of the associated matter. The server does not look at this field during create and always uses matter id in the URL.
     */
    matterId?: string | null;
    /**
     * The underlying Query object which contains all the information of the saved query.
     */
    query?: Schema$Query;
    /**
     * A unique identifier for the saved query.
     */
    savedQueryId?: string | null;
  }
  /**
   * Shared drives to search
   */
  export interface Schema$SharedDriveInfo {
    /**
     * List of Shared drive ids, as provided by &lt;a href=&quot;https://developers.google.com/drive&quot;&gt;Drive API&lt;/a&gt;.
     */
    sharedDriveIds?: string[] | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Team Drives to search
   */
  export interface Schema$TeamDriveInfo {
    /**
     * List of Team Drive ids, as provided by &lt;a href=&quot;https://developers.google.com/drive&quot;&gt;Drive API&lt;/a&gt;.
     */
    teamDriveIds?: string[] | null;
  }
  /**
   * Undelete a matter by ID.
   */
  export interface Schema$UndeleteMatterRequest {}
  /**
   * User&#39;s information.
   */
  export interface Schema$UserInfo {
    /**
     * The displayed name of the user.
     */
    displayName?: string | null;
    /**
     * The email address of the user.
     */
    email?: string | null;
  }

  export class Resource$Matters {
    context: APIRequestContext;
    exports: Resource$Matters$Exports;
    holds: Resource$Matters$Holds;
    savedQueries: Resource$Matters$Savedqueries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exports = new Resource$Matters$Exports(this.context);
      this.holds = new Resource$Matters$Holds(this.context);
      this.savedQueries = new Resource$Matters$Savedqueries(this.context);
    }

    /**
     * vault.matters.addPermissions
     * @desc Adds an account as a matter collaborator.
     * @alias vault.matters.addPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().AddMatterPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addPermissions(
      params?: Params$Resource$Matters$Addpermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MatterPermission>;
    addPermissions(
      params: Params$Resource$Matters$Addpermissions,
      options: MethodOptions | BodyResponseCallback<Schema$MatterPermission>,
      callback: BodyResponseCallback<Schema$MatterPermission>
    ): void;
    addPermissions(
      params: Params$Resource$Matters$Addpermissions,
      callback: BodyResponseCallback<Schema$MatterPermission>
    ): void;
    addPermissions(
      callback: BodyResponseCallback<Schema$MatterPermission>
    ): void;
    addPermissions(
      paramsOrCallback?:
        | Params$Resource$Matters$Addpermissions
        | BodyResponseCallback<Schema$MatterPermission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MatterPermission>,
      callback?: BodyResponseCallback<Schema$MatterPermission>
    ): void | GaxiosPromise<Schema$MatterPermission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Addpermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Addpermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:addPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MatterPermission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MatterPermission>(parameters);
      }
    }

    /**
     * vault.matters.close
     * @desc Closes the specified matter. Returns matter with updated state.
     * @alias vault.matters.close
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().CloseMatterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    close(
      params?: Params$Resource$Matters$Close,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CloseMatterResponse>;
    close(
      params: Params$Resource$Matters$Close,
      options: MethodOptions | BodyResponseCallback<Schema$CloseMatterResponse>,
      callback: BodyResponseCallback<Schema$CloseMatterResponse>
    ): void;
    close(
      params: Params$Resource$Matters$Close,
      callback: BodyResponseCallback<Schema$CloseMatterResponse>
    ): void;
    close(callback: BodyResponseCallback<Schema$CloseMatterResponse>): void;
    close(
      paramsOrCallback?:
        | Params$Resource$Matters$Close
        | BodyResponseCallback<Schema$CloseMatterResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CloseMatterResponse>,
      callback?: BodyResponseCallback<Schema$CloseMatterResponse>
    ): void | GaxiosPromise<Schema$CloseMatterResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Close;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Close;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:close').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CloseMatterResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CloseMatterResponse>(parameters);
      }
    }

    /**
     * vault.matters.create
     * @desc Creates a new matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
     * @alias vault.matters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Matter} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Matters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Matter>;
    create(
      params: Params$Resource$Matters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    create(
      params: Params$Resource$Matters$Create,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    create(callback: BodyResponseCallback<Schema$Matter>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Create
        | BodyResponseCallback<Schema$Matter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback?: BodyResponseCallback<Schema$Matter>
    ): void | GaxiosPromise<Schema$Matter> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * vault.matters.delete
     * @desc Deletes the specified matter. Returns matter with updated state.
     * @alias vault.matters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Matters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Matter>;
    delete(
      params: Params$Resource$Matters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    delete(
      params: Params$Resource$Matters$Delete,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Matter>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Delete
        | BodyResponseCallback<Schema$Matter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback?: BodyResponseCallback<Schema$Matter>
    ): void | GaxiosPromise<Schema$Matter> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * vault.matters.get
     * @desc Gets the specified matter.
     * @alias vault.matters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {string=} params.view Specifies which parts of the Matter to return in the response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Matters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Matter>;
    get(
      params: Params$Resource$Matters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    get(
      params: Params$Resource$Matters$Get,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    get(callback: BodyResponseCallback<Schema$Matter>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Get
        | BodyResponseCallback<Schema$Matter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback?: BodyResponseCallback<Schema$Matter>
    ): void | GaxiosPromise<Schema$Matter> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * vault.matters.list
     * @desc Lists matters the user has access to.
     * @alias vault.matters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The number of matters to return in the response. Default and maximum are 100.
     * @param {string=} params.pageToken The pagination token as returned in the response.
     * @param {string=} params.state If set, list only matters with that specific state. The default is listing matters of all states.
     * @param {string=} params.view Specifies which parts of the matter to return in response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Matters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMattersResponse>;
    list(
      params: Params$Resource$Matters$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListMattersResponse>,
      callback: BodyResponseCallback<Schema$ListMattersResponse>
    ): void;
    list(
      params: Params$Resource$Matters$List,
      callback: BodyResponseCallback<Schema$ListMattersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMattersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$List
        | BodyResponseCallback<Schema$ListMattersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMattersResponse>,
      callback?: BodyResponseCallback<Schema$ListMattersResponse>
    ): void | GaxiosPromise<Schema$ListMattersResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListMattersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListMattersResponse>(parameters);
      }
    }

    /**
     * vault.matters.removePermissions
     * @desc Removes an account as a matter collaborator.
     * @alias vault.matters.removePermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().RemoveMatterPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removePermissions(
      params?: Params$Resource$Matters$Removepermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removePermissions(
      params: Params$Resource$Matters$Removepermissions,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removePermissions(
      params: Params$Resource$Matters$Removepermissions,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removePermissions(callback: BodyResponseCallback<Schema$Empty>): void;
    removePermissions(
      paramsOrCallback?:
        | Params$Resource$Matters$Removepermissions
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Removepermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Removepermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:removePermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vault.matters.reopen
     * @desc Reopens the specified matter. Returns matter with updated state.
     * @alias vault.matters.reopen
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().ReopenMatterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reopen(
      params?: Params$Resource$Matters$Reopen,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReopenMatterResponse>;
    reopen(
      params: Params$Resource$Matters$Reopen,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReopenMatterResponse>,
      callback: BodyResponseCallback<Schema$ReopenMatterResponse>
    ): void;
    reopen(
      params: Params$Resource$Matters$Reopen,
      callback: BodyResponseCallback<Schema$ReopenMatterResponse>
    ): void;
    reopen(callback: BodyResponseCallback<Schema$ReopenMatterResponse>): void;
    reopen(
      paramsOrCallback?:
        | Params$Resource$Matters$Reopen
        | BodyResponseCallback<Schema$ReopenMatterResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReopenMatterResponse>,
      callback?: BodyResponseCallback<Schema$ReopenMatterResponse>
    ): void | GaxiosPromise<Schema$ReopenMatterResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Reopen;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Reopen;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:reopen').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReopenMatterResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReopenMatterResponse>(parameters);
      }
    }

    /**
     * vault.matters.undelete
     * @desc Undeletes the specified matter. Returns matter with updated state.
     * @alias vault.matters.undelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().UndeleteMatterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete(
      params?: Params$Resource$Matters$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Matter>;
    undelete(
      params: Params$Resource$Matters$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    undelete(
      params: Params$Resource$Matters$Undelete,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Matter>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Matters$Undelete
        | BodyResponseCallback<Schema$Matter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback?: BodyResponseCallback<Schema$Matter>
    ): void | GaxiosPromise<Schema$Matter> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}:undelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }

    /**
     * vault.matters.update
     * @desc Updates the specified matter. This updates only the name and description of the matter, identified by matter id. Changes to any other fields are ignored. Returns the default view of the matter.
     * @alias vault.matters.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().Matter} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Matters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Matter>;
    update(
      params: Params$Resource$Matters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    update(
      params: Params$Resource$Matters$Update,
      callback: BodyResponseCallback<Schema$Matter>
    ): void;
    update(callback: BodyResponseCallback<Schema$Matter>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Matters$Update
        | BodyResponseCallback<Schema$Matter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Matter>,
      callback?: BodyResponseCallback<Schema$Matter>
    ): void | GaxiosPromise<Schema$Matter> {
      let params = (paramsOrCallback || {}) as Params$Resource$Matters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Addpermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMatterPermissionsRequest;
  }
  export interface Params$Resource$Matters$Close extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseMatterRequest;
  }
  export interface Params$Resource$Matters$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Matter;
  }
  export interface Params$Resource$Matters$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * Specifies which parts of the Matter to return in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The number of matters to return in the response. Default and maximum are 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response.
     */
    pageToken?: string;
    /**
     * If set, list only matters with that specific state. The default is listing matters of all states.
     */
    state?: string;
    /**
     * Specifies which parts of the matter to return in response.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Removepermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveMatterPermissionsRequest;
  }
  export interface Params$Resource$Matters$Reopen extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReopenMatterRequest;
  }
  export interface Params$Resource$Matters$Undelete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteMatterRequest;
  }
  export interface Params$Resource$Matters$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Matter;
  }

  export class Resource$Matters$Exports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vault.matters.exports.create
     * @desc Creates an Export.
     * @alias vault.matters.exports.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().Export} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Matters$Exports$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Export>;
    create(
      params: Params$Resource$Matters$Exports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Export>,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    create(
      params: Params$Resource$Matters$Exports$Create,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    create(callback: BodyResponseCallback<Schema$Export>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$Create
        | BodyResponseCallback<Schema$Export>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Export>,
      callback?: BodyResponseCallback<Schema$Export>
    ): void | GaxiosPromise<Schema$Export> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/exports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Export>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Export>(parameters);
      }
    }

    /**
     * vault.matters.exports.delete
     * @desc Deletes an Export.
     * @alias vault.matters.exports.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.exportId The export ID.
     * @param {string} params.matterId The matter ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Matters$Exports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Matters$Exports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Exports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/exports/{exportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'exportId'],
        pathParams: ['exportId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vault.matters.exports.get
     * @desc Gets an Export.
     * @alias vault.matters.exports.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.exportId The export ID.
     * @param {string} params.matterId The matter ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Matters$Exports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Export>;
    get(
      params: Params$Resource$Matters$Exports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Export>,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    get(
      params: Params$Resource$Matters$Exports$Get,
      callback: BodyResponseCallback<Schema$Export>
    ): void;
    get(callback: BodyResponseCallback<Schema$Export>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$Get
        | BodyResponseCallback<Schema$Export>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Export>,
      callback?: BodyResponseCallback<Schema$Export>
    ): void | GaxiosPromise<Schema$Export> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/exports/{exportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'exportId'],
        pathParams: ['exportId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Export>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Export>(parameters);
      }
    }

    /**
     * vault.matters.exports.list
     * @desc Lists Exports.
     * @alias vault.matters.exports.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {integer=} params.pageSize The number of exports to return in the response.
     * @param {string=} params.pageToken The pagination token as returned in the response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Matters$Exports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExportsResponse>;
    list(
      params: Params$Resource$Matters$Exports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListExportsResponse>,
      callback: BodyResponseCallback<Schema$ListExportsResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Exports$List,
      callback: BodyResponseCallback<Schema$ListExportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Exports$List
        | BodyResponseCallback<Schema$ListExportsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExportsResponse>,
      callback?: BodyResponseCallback<Schema$ListExportsResponse>
    ): void | GaxiosPromise<Schema$ListExportsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Exports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Exports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/exports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListExportsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListExportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Exports$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Export;
  }
  export interface Params$Resource$Matters$Exports$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The export ID.
     */
    exportId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Exports$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The export ID.
     */
    exportId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Exports$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * The number of exports to return in the response.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response.
     */
    pageToken?: string;
  }

  export class Resource$Matters$Holds {
    context: APIRequestContext;
    accounts: Resource$Matters$Holds$Accounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Matters$Holds$Accounts(this.context);
    }

    /**
     * vault.matters.holds.addHeldAccounts
     * @desc Adds HeldAccounts to a hold. Returns a list of accounts that have been successfully added. Accounts can only be added to an existing account-based hold.
     * @alias vault.matters.holds.addHeldAccounts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {().AddHeldAccountsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addHeldAccounts(
      params?: Params$Resource$Matters$Holds$Addheldaccounts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AddHeldAccountsResponse>;
    addHeldAccounts(
      params: Params$Resource$Matters$Holds$Addheldaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>,
      callback: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void;
    addHeldAccounts(
      params: Params$Resource$Matters$Holds$Addheldaccounts,
      callback: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void;
    addHeldAccounts(
      callback: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void;
    addHeldAccounts(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Addheldaccounts
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AddHeldAccountsResponse>,
      callback?: BodyResponseCallback<Schema$AddHeldAccountsResponse>
    ): void | GaxiosPromise<Schema$AddHeldAccountsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Addheldaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Addheldaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/holds/{holdId}:addHeldAccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AddHeldAccountsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AddHeldAccountsResponse>(parameters);
      }
    }

    /**
     * vault.matters.holds.create
     * @desc Creates a hold in the given matter.
     * @alias vault.matters.holds.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {().Hold} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Matters$Holds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hold>;
    create(
      params: Params$Resource$Matters$Holds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    create(
      params: Params$Resource$Matters$Holds$Create,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    create(callback: BodyResponseCallback<Schema$Hold>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Create
        | BodyResponseCallback<Schema$Hold>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback?: BodyResponseCallback<Schema$Hold>
    ): void | GaxiosPromise<Schema$Hold> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }

    /**
     * vault.matters.holds.delete
     * @desc Removes a hold by ID. This will release any HeldAccounts on this Hold.
     * @alias vault.matters.holds.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Matters$Holds$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Matters$Holds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Holds$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vault.matters.holds.get
     * @desc Gets a hold by ID.
     * @alias vault.matters.holds.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {string=} params.view Specifies which parts of the Hold to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Matters$Holds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hold>;
    get(
      params: Params$Resource$Matters$Holds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    get(
      params: Params$Resource$Matters$Holds$Get,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    get(callback: BodyResponseCallback<Schema$Hold>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Get
        | BodyResponseCallback<Schema$Hold>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback?: BodyResponseCallback<Schema$Hold>
    ): void | GaxiosPromise<Schema$Hold> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }

    /**
     * vault.matters.holds.list
     * @desc Lists holds within a matter. An empty page token in ListHoldsResponse denotes no more holds to list.
     * @alias vault.matters.holds.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {integer=} params.pageSize The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as page_size = 100.
     * @param {string=} params.pageToken The pagination token as returned in the response. An empty token means start from the beginning.
     * @param {string=} params.view Specifies which parts of the Hold to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Matters$Holds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHoldsResponse>;
    list(
      params: Params$Resource$Matters$Holds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListHoldsResponse>,
      callback: BodyResponseCallback<Schema$ListHoldsResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Holds$List,
      callback: BodyResponseCallback<Schema$ListHoldsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHoldsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$List
        | BodyResponseCallback<Schema$ListHoldsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHoldsResponse>,
      callback?: BodyResponseCallback<Schema$ListHoldsResponse>
    ): void | GaxiosPromise<Schema$ListHoldsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListHoldsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListHoldsResponse>(parameters);
      }
    }

    /**
     * vault.matters.holds.removeHeldAccounts
     * @desc Removes HeldAccounts from a hold. Returns a list of statuses in the same order as the request. If this request leaves the hold with no held accounts, the hold will not apply to any accounts.
     * @alias vault.matters.holds.removeHeldAccounts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {().RemoveHeldAccountsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeHeldAccounts(
      params?: Params$Resource$Matters$Holds$Removeheldaccounts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemoveHeldAccountsResponse>;
    removeHeldAccounts(
      params: Params$Resource$Matters$Holds$Removeheldaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>,
      callback: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void;
    removeHeldAccounts(
      params: Params$Resource$Matters$Holds$Removeheldaccounts,
      callback: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void;
    removeHeldAccounts(
      callback: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void;
    removeHeldAccounts(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Removeheldaccounts
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemoveHeldAccountsResponse>,
      callback?: BodyResponseCallback<Schema$RemoveHeldAccountsResponse>
    ): void | GaxiosPromise<Schema$RemoveHeldAccountsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Removeheldaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Removeheldaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemoveHeldAccountsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$RemoveHeldAccountsResponse>(parameters);
      }
    }

    /**
     * vault.matters.holds.update
     * @desc Updates the OU and/or query parameters of a hold. You cannot add accounts to a hold that covers an OU, nor can you add OUs to a hold that covers individual accounts. Accounts listed in the hold will be ignored.
     * @alias vault.matters.holds.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The ID of the hold.
     * @param {string} params.matterId The matter ID.
     * @param {().Hold} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Matters$Holds$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hold>;
    update(
      params: Params$Resource$Matters$Holds$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    update(
      params: Params$Resource$Matters$Holds$Update,
      callback: BodyResponseCallback<Schema$Hold>
    ): void;
    update(callback: BodyResponseCallback<Schema$Hold>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Update
        | BodyResponseCallback<Schema$Hold>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Hold>,
      callback?: BodyResponseCallback<Schema$Hold>
    ): void | GaxiosPromise<Schema$Hold> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Holds$Addheldaccounts
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddHeldAccountsRequest;
  }
  export interface Params$Resource$Matters$Holds$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hold;
  }
  export interface Params$Resource$Matters$Holds$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Holds$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * Specifies which parts of the Hold to return.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Holds$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as page_size = 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response. An empty token means start from the beginning.
     */
    pageToken?: string;
    /**
     * Specifies which parts of the Hold to return.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Holds$Removeheldaccounts
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveHeldAccountsRequest;
  }
  export interface Params$Resource$Matters$Holds$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the hold.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hold;
  }

  export class Resource$Matters$Holds$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vault.matters.holds.accounts.create
     * @desc Adds a HeldAccount to a hold. Accounts can only be added to a hold that has no held_org_unit set. Attempting to add an account to an OU-based hold will result in an error.
     * @alias vault.matters.holds.accounts.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {().HeldAccount} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Matters$Holds$Accounts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HeldAccount>;
    create(
      params: Params$Resource$Matters$Holds$Accounts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$HeldAccount>,
      callback: BodyResponseCallback<Schema$HeldAccount>
    ): void;
    create(
      params: Params$Resource$Matters$Holds$Accounts$Create,
      callback: BodyResponseCallback<Schema$HeldAccount>
    ): void;
    create(callback: BodyResponseCallback<Schema$HeldAccount>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Accounts$Create
        | BodyResponseCallback<Schema$HeldAccount>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$HeldAccount>,
      callback?: BodyResponseCallback<Schema$HeldAccount>
    ): void | GaxiosPromise<Schema$HeldAccount> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Accounts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Accounts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HeldAccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HeldAccount>(parameters);
      }
    }

    /**
     * vault.matters.holds.accounts.delete
     * @desc Removes a HeldAccount from a hold. If this request leaves the hold with no held accounts, the hold will not apply to any accounts.
     * @alias vault.matters.holds.accounts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The ID of the account to remove from the hold.
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Matters$Holds$Accounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Matters$Holds$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Holds$Accounts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Accounts$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Accounts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId', 'accountId'],
        pathParams: ['accountId', 'holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vault.matters.holds.accounts.list
     * @desc Lists HeldAccounts for a hold. This will only list individually specified held accounts. If the hold is on an OU, then use <a href="https://developers.google.com/admin-sdk/">Admin SDK</a> to enumerate its members.
     * @alias vault.matters.holds.accounts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.holdId The hold ID.
     * @param {string} params.matterId The matter ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Matters$Holds$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHeldAccountsResponse>;
    list(
      params: Params$Resource$Matters$Holds$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Holds$Accounts$List,
      callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Holds$Accounts$List
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHeldAccountsResponse>,
      callback?: BodyResponseCallback<Schema$ListHeldAccountsResponse>
    ): void | GaxiosPromise<Schema$ListHeldAccountsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Holds$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Holds$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListHeldAccountsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListHeldAccountsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Holds$Accounts$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HeldAccount;
  }
  export interface Params$Resource$Matters$Holds$Accounts$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the account to remove from the hold.
     */
    accountId?: string;
    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Holds$Accounts$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }

  export class Resource$Matters$Savedqueries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vault.matters.savedQueries.create
     * @desc Creates a saved query.
     * @alias vault.matters.savedQueries.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter id of the parent matter for which the saved query is to be created.
     * @param {().SavedQuery} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Matters$Savedqueries$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SavedQuery>;
    create(
      params: Params$Resource$Matters$Savedqueries$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SavedQuery>,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    create(
      params: Params$Resource$Matters$Savedqueries$Create,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    create(callback: BodyResponseCallback<Schema$SavedQuery>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$Create
        | BodyResponseCallback<Schema$SavedQuery>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SavedQuery>,
      callback?: BodyResponseCallback<Schema$SavedQuery>
    ): void | GaxiosPromise<Schema$SavedQuery> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/savedQueries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SavedQuery>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SavedQuery>(parameters);
      }
    }

    /**
     * vault.matters.savedQueries.delete
     * @desc Deletes a saved query by Id.
     * @alias vault.matters.savedQueries.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter id of the parent matter for which the saved query is to be deleted.
     * @param {string} params.savedQueryId Id of the saved query to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Matters$Savedqueries$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Matters$Savedqueries$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Matters$Savedqueries$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/savedQueries/{savedQueryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'savedQueryId'],
        pathParams: ['matterId', 'savedQueryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vault.matters.savedQueries.get
     * @desc Retrieves a saved query by Id.
     * @alias vault.matters.savedQueries.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter id of the parent matter for which the saved query is to be retrieved.
     * @param {string} params.savedQueryId Id of the saved query to be retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Matters$Savedqueries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SavedQuery>;
    get(
      params: Params$Resource$Matters$Savedqueries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SavedQuery>,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    get(
      params: Params$Resource$Matters$Savedqueries$Get,
      callback: BodyResponseCallback<Schema$SavedQuery>
    ): void;
    get(callback: BodyResponseCallback<Schema$SavedQuery>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$Get
        | BodyResponseCallback<Schema$SavedQuery>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SavedQuery>,
      callback?: BodyResponseCallback<Schema$SavedQuery>
    ): void | GaxiosPromise<Schema$SavedQuery> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/matters/{matterId}/savedQueries/{savedQueryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId', 'savedQueryId'],
        pathParams: ['matterId', 'savedQueryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SavedQuery>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SavedQuery>(parameters);
      }
    }

    /**
     * vault.matters.savedQueries.list
     * @desc Lists saved queries within a matter. An empty page token in ListSavedQueriesResponse denotes no more saved queries to list.
     * @alias vault.matters.savedQueries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter id of the parent matter for which the saved queries are to be retrieved.
     * @param {integer=} params.pageSize The maximum number of saved queries to return.
     * @param {string=} params.pageToken The pagination token as returned in the previous response. An empty token means start from the beginning.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Matters$Savedqueries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSavedQueriesResponse>;
    list(
      params: Params$Resource$Matters$Savedqueries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>,
      callback: BodyResponseCallback<Schema$ListSavedQueriesResponse>
    ): void;
    list(
      params: Params$Resource$Matters$Savedqueries$List,
      callback: BodyResponseCallback<Schema$ListSavedQueriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSavedQueriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Matters$Savedqueries$List
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSavedQueriesResponse>,
      callback?: BodyResponseCallback<Schema$ListSavedQueriesResponse>
    ): void | GaxiosPromise<Schema$ListSavedQueriesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Matters$Savedqueries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Matters$Savedqueries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/matters/{matterId}/savedQueries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSavedQueriesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSavedQueriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Savedqueries$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter id of the parent matter for which the saved query is to be created.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SavedQuery;
  }
  export interface Params$Resource$Matters$Savedqueries$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter id of the parent matter for which the saved query is to be deleted.
     */
    matterId?: string;
    /**
     * Id of the saved query to be deleted.
     */
    savedQueryId?: string;
  }
  export interface Params$Resource$Matters$Savedqueries$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter id of the parent matter for which the saved query is to be retrieved.
     */
    matterId?: string;
    /**
     * Id of the saved query to be retrieved.
     */
    savedQueryId?: string;
  }
  export interface Params$Resource$Matters$Savedqueries$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The matter id of the parent matter for which the saved queries are to be retrieved.
     */
    matterId?: string;
    /**
     * The maximum number of saved queries to return.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the previous response. An empty token means start from the beginning.
     */
    pageToken?: string;
  }
}
