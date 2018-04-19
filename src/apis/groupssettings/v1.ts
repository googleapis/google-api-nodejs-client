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
 * Groups Settings API
 *
 * Lets you manage permission levels and related settings of a group.
 *
 * @example
 * const google = require('googleapis');
 * const groupssettings = google.groupssettings('v1');
 *
 * @namespace groupssettings
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Groupssettings
 */
export class Groupssettings {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  groups: Resource$Groups;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.groups = new Resource$Groups(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * JSON template for Group resource
 */
export interface Schema$Groups {
  /**
   * Are external members allowed to join the group.
   */
  allowExternalMembers: string;
  /**
   * Is google allowed to contact admins.
   */
  allowGoogleCommunication: string;
  /**
   * If posting from web is allowed.
   */
  allowWebPosting: string;
  /**
   * If the group is archive only
   */
  archiveOnly: string;
  /**
   * Custom footer text.
   */
  customFooterText: string;
  /**
   * Default email to which reply to any message should go.
   */
  customReplyTo: string;
  /**
   * Default message deny notification message
   */
  defaultMessageDenyNotificationText: string;
  /**
   * Description of the group
   */
  description: string;
  /**
   * Email id of the group
   */
  email: string;
  /**
   * Whether to include custom footer.
   */
  includeCustomFooter: string;
  /**
   * If this groups should be included in global address list or not.
   */
  includeInGlobalAddressList: string;
  /**
   * If the contents of the group are archived.
   */
  isArchived: string;
  /**
   * The type of the resource.
   */
  kind: string;
  /**
   * Maximum message size allowed.
   */
  maxMessageBytes: number;
  /**
   * Can members post using the group email address.
   */
  membersCanPostAsTheGroup: string;
  /**
   * Default message display font. Possible values are: DEFAULT_FONT
   * FIXED_WIDTH_FONT
   */
  messageDisplayFont: string;
  /**
   * Moderation level for messages. Possible values are: MODERATE_ALL_MESSAGES
   * MODERATE_NON_MEMBERS MODERATE_NEW_MEMBERS MODERATE_NONE
   */
  messageModerationLevel: string;
  /**
   * Name of the Group
   */
  name: string;
  /**
   * Primary language for the group.
   */
  primaryLanguage: string;
  /**
   * Whome should the default reply to a message go to. Possible values are:
   * REPLY_TO_CUSTOM REPLY_TO_SENDER REPLY_TO_LIST REPLY_TO_OWNER
   * REPLY_TO_IGNORE REPLY_TO_MANAGERS
   */
  replyTo: string;
  /**
   * Should the member be notified if his message is denied by owner.
   */
  sendMessageDenyNotification: string;
  /**
   * Is the group listed in groups directory
   */
  showInGroupDirectory: string;
  /**
   * Moderation level for messages detected as spam. Possible values are: ALLOW
   * MODERATE SILENTLY_MODERATE REJECT
   */
  spamModerationLevel: string;
  /**
   * Permissions to add members. Possible values are: ALL_MANAGERS_CAN_ADD
   * ALL_OWNERS_CAN_ADD ALL_MEMBERS_CAN_ADD NONE_CAN_ADD
   */
  whoCanAdd: string;
  /**
   * Permission to contact owner of the group via web UI. Possible values are:
   * ANYONE_CAN_CONTACT ALL_IN_DOMAIN_CAN_CONTACT ALL_MEMBERS_CAN_CONTACT
   * ALL_MANAGERS_CAN_CONTACT
   */
  whoCanContactOwner: string;
  /**
   * Permissions to invite members. Possible values are: ALL_MEMBERS_CAN_INVITE
   * ALL_MANAGERS_CAN_INVITE ALL_OWNERS_CAN_INVITE NONE_CAN_INVITE
   */
  whoCanInvite: string;
  /**
   * Permissions to join the group. Possible values are: ANYONE_CAN_JOIN
   * ALL_IN_DOMAIN_CAN_JOIN INVITED_CAN_JOIN CAN_REQUEST_TO_JOIN
   */
  whoCanJoin: string;
  /**
   * Permission to leave the group. Possible values are: ALL_MANAGERS_CAN_LEAVE
   * ALL_OWNERS_CAN_LEAVE ALL_MEMBERS_CAN_LEAVE NONE_CAN_LEAVE
   */
  whoCanLeaveGroup: string;
  /**
   * Permissions to post messages to the group. Possible values are:
   * NONE_CAN_POST ALL_MANAGERS_CAN_POST ALL_MEMBERS_CAN_POST
   * ALL_OWNERS_CAN_POST ALL_IN_DOMAIN_CAN_POST ANYONE_CAN_POST
   */
  whoCanPostMessage: string;
  /**
   * Permissions to view group. Possible values are: ANYONE_CAN_VIEW
   * ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
   * ALL_OWNERS_CAN_VIEW
   */
  whoCanViewGroup: string;
  /**
   * Permissions to view membership. Possible values are: ALL_IN_DOMAIN_CAN_VIEW
   * ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
   */
  whoCanViewMembership: string;
}

export class Resource$Groups {
  root: Groupssettings;
  constructor(root: Groupssettings) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Groups>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>):
      void|AxiosPromise<Schema$Groups> {
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
            url: (rootUrl + '/groups/v1/groups/{groupUniqueId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['groupUniqueId'],
      pathParams: ['groupUniqueId'],
      context: this.getRoot()
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
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Groups>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>):
      void|AxiosPromise<Schema$Groups> {
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
            url: (rootUrl + '/groups/v1/groups/{groupUniqueId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['groupUniqueId'],
      pathParams: ['groupUniqueId'],
      context: this.getRoot()
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Groups>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Groups>,
      callback?: BodyResponseCallback<Schema$Groups>):
      void|AxiosPromise<Schema$Groups> {
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
            url: (rootUrl + '/groups/v1/groups/{groupUniqueId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['groupUniqueId'],
      pathParams: ['groupUniqueId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Groups>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Groups>(parameters);
    }
  }
}
