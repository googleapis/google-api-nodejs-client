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

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace groupssettings_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  let context: APIRequestContext;

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
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
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
     * An opaque string that represents a user for quota purposes. Must not
     * exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Groups Settings API
   *
   * Lets you manage permission levels and related settings of a group.
   *
   * @example
   * const {google} = require('googleapis');
   * const groupssettings = google.groupssettings('v1');
   *
   * @namespace groupssettings
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Groupssettings
   */
  export class Groupssettings {
    groups: Resource$Groups;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      context = {_options: options || {}, google};

      this.groups = new Resource$Groups();
    }
  }

  /**
   * JSON template for Group resource
   */
  export interface Schema$Groups {
    /**
     * Are external members allowed to join the group.
     */
    allowExternalMembers?: string;
    /**
     * Is google allowed to contact admins.
     */
    allowGoogleCommunication?: string;
    /**
     * If posting from web is allowed.
     */
    allowWebPosting?: string;
    /**
     * If the group is archive only
     */
    archiveOnly?: string;
    /**
     * Custom footer text.
     */
    customFooterText?: string;
    /**
     * Default email to which reply to any message should go.
     */
    customReplyTo?: string;
    /**
     * Default message deny notification message
     */
    defaultMessageDenyNotificationText?: string;
    /**
     * Description of the group
     */
    description?: string;
    /**
     * Email id of the group
     */
    email?: string;
    /**
     * If favorite replies should be displayed above other replies.
     */
    favoriteRepliesOnTop?: string;
    /**
     * Whether to include custom footer.
     */
    includeCustomFooter?: string;
    /**
     * If this groups should be included in global address list or not.
     */
    includeInGlobalAddressList?: string;
    /**
     * If the contents of the group are archived.
     */
    isArchived?: string;
    /**
     * The type of the resource.
     */
    kind?: string;
    /**
     * Maximum message size allowed.
     */
    maxMessageBytes?: number;
    /**
     * Can members post using the group email address.
     */
    membersCanPostAsTheGroup?: string;
    /**
     * Default message display font. Possible values are: DEFAULT_FONT
     * FIXED_WIDTH_FONT
     */
    messageDisplayFont?: string;
    /**
     * Moderation level for messages. Possible values are: MODERATE_ALL_MESSAGES
     * MODERATE_NON_MEMBERS MODERATE_NEW_MEMBERS MODERATE_NONE
     */
    messageModerationLevel?: string;
    /**
     * Name of the Group
     */
    name?: string;
    /**
     * Primary language for the group.
     */
    primaryLanguage?: string;
    /**
     * Whome should the default reply to a message go to. Possible values are:
     * REPLY_TO_CUSTOM REPLY_TO_SENDER REPLY_TO_LIST REPLY_TO_OWNER
     * REPLY_TO_IGNORE REPLY_TO_MANAGERS
     */
    replyTo?: string;
    /**
     * Should the member be notified if his message is denied by owner.
     */
    sendMessageDenyNotification?: string;
    /**
     * Is the group listed in groups directory
     */
    showInGroupDirectory?: string;
    /**
     * Moderation level for messages detected as spam. Possible values are:
     * ALLOW MODERATE SILENTLY_MODERATE REJECT
     */
    spamModerationLevel?: string;
    /**
     * Permissions to add members. Possible values are: ALL_MANAGERS_CAN_ADD
     * ALL_OWNERS_CAN_ADD ALL_MEMBERS_CAN_ADD NONE_CAN_ADD
     */
    whoCanAdd?: string;
    /**
     * Permission to add references to a topic. Possible values are: NONE
     * OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanAddReferences?: string;
    /**
     * Permission to assign topics in a forum to another user. Possible values
     * are: NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanAssignTopics?: string;
    /**
     * Permission to contact owner of the group via web UI. Possible values are:
     * ANYONE_CAN_CONTACT ALL_IN_DOMAIN_CAN_CONTACT ALL_MEMBERS_CAN_CONTACT
     * ALL_MANAGERS_CAN_CONTACT
     */
    whoCanContactOwner?: string;
    /**
     * Permission to enter free form tags for topics in a forum. Possible values
     * are: NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanEnterFreeFormTags?: string;
    /**
     * Permissions to invite members. Possible values are:
     * ALL_MEMBERS_CAN_INVITE ALL_MANAGERS_CAN_INVITE ALL_OWNERS_CAN_INVITE
     * NONE_CAN_INVITE
     */
    whoCanInvite?: string;
    /**
     * Permissions to join the group. Possible values are: ANYONE_CAN_JOIN
     * ALL_IN_DOMAIN_CAN_JOIN INVITED_CAN_JOIN CAN_REQUEST_TO_JOIN
     */
    whoCanJoin?: string;
    /**
     * Permission to leave the group. Possible values are:
     * ALL_MANAGERS_CAN_LEAVE ALL_OWNERS_CAN_LEAVE ALL_MEMBERS_CAN_LEAVE
     * NONE_CAN_LEAVE
     */
    whoCanLeaveGroup?: string;
    /**
     * Permission to mark a topic as a duplicate of another topic. Possible
     * values are: NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS
     * ALL_MEMBERS
     */
    whoCanMarkDuplicate?: string;
    /**
     * Permission to mark any other user&#39;s post as a favorite reply.
     * Possible values are: NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS
     * ALL_MEMBERS
     */
    whoCanMarkFavoriteReplyOnAnyTopic?: string;
    /**
     * Permission to mark a post for a topic they started as a favorite reply.
     * Possible values are: NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS
     * ALL_MEMBERS
     */
    whoCanMarkFavoriteReplyOnOwnTopic?: string;
    /**
     * Permission to mark a topic as not needing a response. Possible values
     * are: NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanMarkNoResponseNeeded?: string;
    /**
     * Permission to change tags and categories. Possible values are: NONE
     * OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanModifyTagsAndCategories?: string;
    /**
     * Permissions to post messages to the group. Possible values are:
     * NONE_CAN_POST ALL_MANAGERS_CAN_POST ALL_MEMBERS_CAN_POST
     * ALL_OWNERS_CAN_POST ALL_IN_DOMAIN_CAN_POST ANYONE_CAN_POST
     */
    whoCanPostMessage?: string;
    /**
     * Permission to take topics in a forum. Possible values are: NONE
     * OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanTakeTopics?: string;
    /**
     * Permission to unassign any topic in a forum. Possible values are: NONE
     * OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanUnassignTopic?: string;
    /**
     * Permission to unmark any post from a favorite reply. Possible values are:
     * NONE OWNERS_ONLY MANAGERS_ONLY OWNERS_AND_MANAGERS ALL_MEMBERS
     */
    whoCanUnmarkFavoriteReplyOnAnyTopic?: string;
    /**
     * Permissions to view group. Possible values are: ANYONE_CAN_VIEW
     * ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
     * ALL_OWNERS_CAN_VIEW
     */
    whoCanViewGroup?: string;
    /**
     * Permissions to view membership. Possible values are:
     * ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
     */
    whoCanViewMembership?: string;
  }


  export class Resource$Groups {
    constructor() {}


    /**
     * groupsSettings.groups.get
     * @desc Gets one resource by id.
     * @alias groupsSettings.groups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupUniqueId The resource ID
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Groups$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Groups>;
    get(params: Params$Resource$Groups$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback: BodyResponseCallback<Schema$Groups>): void;
    get(params: Params$Resource$Groups$Get,
        callback: BodyResponseCallback<Schema$Groups>): void;
    get(callback: BodyResponseCallback<Schema$Groups>): void;
    get(paramsOrCallback?: Params$Resource$Groups$Get|
        BodyResponseCallback<Schema$Groups>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback?: BodyResponseCallback<Schema$Groups>):
        void|GaxiosPromise<Schema$Groups> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Get;
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
              url: (rootUrl + '/groups/v1/groups/{groupUniqueId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['groupUniqueId'],
        pathParams: ['groupUniqueId'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Groups>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Groups>(parameters);
      }
    }


    /**
     * groupsSettings.groups.patch
     * @desc Updates an existing resource. This method supports patch semantics.
     * @alias groupsSettings.groups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupUniqueId The resource ID
     * @param {().Groups} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Groups$Patch, options?: MethodOptions):
        GaxiosPromise<Schema$Groups>;
    patch(
        params: Params$Resource$Groups$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback: BodyResponseCallback<Schema$Groups>): void;
    patch(
        params: Params$Resource$Groups$Patch,
        callback: BodyResponseCallback<Schema$Groups>): void;
    patch(callback: BodyResponseCallback<Schema$Groups>): void;
    patch(
        paramsOrCallback?: Params$Resource$Groups$Patch|
        BodyResponseCallback<Schema$Groups>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback?: BodyResponseCallback<Schema$Groups>):
        void|GaxiosPromise<Schema$Groups> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Patch;
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
              url: (rootUrl + '/groups/v1/groups/{groupUniqueId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['groupUniqueId'],
        pathParams: ['groupUniqueId'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Groups>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Groups>(parameters);
      }
    }


    /**
     * groupsSettings.groups.update
     * @desc Updates an existing resource.
     * @alias groupsSettings.groups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupUniqueId The resource ID
     * @param {().Groups} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: Params$Resource$Groups$Update, options?: MethodOptions):
        GaxiosPromise<Schema$Groups>;
    update(
        params: Params$Resource$Groups$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback: BodyResponseCallback<Schema$Groups>): void;
    update(
        params: Params$Resource$Groups$Update,
        callback: BodyResponseCallback<Schema$Groups>): void;
    update(callback: BodyResponseCallback<Schema$Groups>): void;
    update(
        paramsOrCallback?: Params$Resource$Groups$Update|
        BodyResponseCallback<Schema$Groups>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback?: BodyResponseCallback<Schema$Groups>):
        void|GaxiosPromise<Schema$Groups> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Update;
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
              url: (rootUrl + '/groups/v1/groups/{groupUniqueId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['groupUniqueId'],
        pathParams: ['groupUniqueId'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Groups>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Groups>(parameters);
      }
    }
  }

  export interface Params$Resource$Groups$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource ID
     */
    groupUniqueId?: string;
  }
  export interface Params$Resource$Groups$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource ID
     */
    groupUniqueId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Groups;
  }
  export interface Params$Resource$Groups$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource ID
     */
    groupUniqueId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Groups;
  }
}
