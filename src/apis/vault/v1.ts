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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../shared/api';
import {createAPIRequest} from '../../shared/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace vault_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * G Suite Vault API
   *
   * Archiving and eDiscovery for G Suite.
   *
   * @example
   * const google = require('googleapis');
   * const vault = google.vault('v1');
   *
   * @namespace vault
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Vault
   */
  export class Vault {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    matters: Resource$Matters;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.matters = new Resource$Matters(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Add an account with the permission specified. The role cannot be owner. If
   * an account already has a role in the matter, it will be overwritten.
   */
  export interface Schema$AddMatterPermissionsRequest {
    /**
     * Only relevant if send_emails is true. True to CC requestor in the email
     * message. False to not CC requestor.
     */
    ccMe?: boolean;
    /**
     * The MatterPermission to add.
     */
    matterPermission?: Schema$MatterPermission;
    /**
     * True to send notification email to the added account. False to not send
     * notification email.
     */
    sendEmails?: boolean;
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
     * Details pertaining to Hangouts Chat holds. If set, corpus must be
     * Hangouts Chat.
     */
    hangoutsChatQuery?: Schema$HeldHangoutsChatQuery;
    /**
     * Details pertaining to mail holds. If set, corpus must be mail.
     */
    mailQuery?: Schema$HeldMailQuery;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An account being held in a particular hold. This structure is immutable.
   * This can be either a single user or a google group, depending on the
   * corpus.
   */
  export interface Schema$HeldAccount {
    /**
     * The account&#39;s ID as provided by the &lt;a
     * href=&quot;https://developers.google.com/admin-sdk/&quot;&gt;Admin
     * SDK&lt;/a&gt;.
     */
    accountId?: string;
    /**
     * When the account was put on hold.
     */
    holdTime?: string;
  }
  /**
   * Query options for Drive holds.
   */
  export interface Schema$HeldDriveQuery {
    /**
     * If true, include files in Team Drives in the hold.
     */
    includeTeamDriveFiles?: boolean;
  }
  /**
   * Query options for group holds.
   */
  export interface Schema$HeldGroupsQuery {
    /**
     * The end time range for the search query. These timestamps are in GMT and
     * rounded down to the start of the given date.
     */
    endTime?: string;
    /**
     * The start time range for the search query. These timestamps are in GMT
     * and rounded down to the start of the given date.
     */
    startTime?: string;
    /**
     * The search terms for the hold.
     */
    terms?: string;
  }
  /**
   * Query options for hangouts chat holds.
   */
  export interface Schema$HeldHangoutsChatQuery {
    /**
     * If true, include rooms the user has participated in.
     */
    includeRooms?: boolean;
  }
  /**
   * Query options for mail holds.
   */
  export interface Schema$HeldMailQuery {
    /**
     * The end time range for the search query. These timestamps are in GMT and
     * rounded down to the start of the given date.
     */
    endTime?: string;
    /**
     * The start time range for the search query. These timestamps are in GMT
     * and rounded down to the start of the given date.
     */
    startTime?: string;
    /**
     * The search terms for the hold.
     */
    terms?: string;
  }
  /**
   * A organizational unit being held in a particular hold. This structure is
   * immutable.
   */
  export interface Schema$HeldOrgUnit {
    /**
     * When the org unit was put on hold. This property is immutable.
     */
    holdTime?: string;
    /**
     * The org unit&#39;s immutable ID as provided by the Admin SDK.
     */
    orgUnitId?: string;
  }
  /**
   * Represents a hold within Vault. A hold restricts purging of artifacts based
   * on the combination of the query and accounts restrictions. A hold can be
   * configured to either apply to an explicitly configured set of accounts, or
   * can be applied to all members of an organizational unit.
   */
  export interface Schema$Hold {
    /**
     * If set, the hold applies to the enumerated accounts and org_unit must be
     * empty.
     */
    accounts?: Schema$HeldAccount[];
    /**
     * The corpus to be searched.
     */
    corpus?: string;
    /**
     * The unique immutable ID of the hold. Assigned during creation.
     */
    holdId?: string;
    /**
     * The name of the hold.
     */
    name?: string;
    /**
     * If set, the hold applies to all members of the organizational unit and
     * accounts must be empty. This property is mutable. For groups holds, set
     * the accounts field.
     */
    orgUnit?: Schema$HeldOrgUnit;
    /**
     * The corpus-specific query. If set, the corpusQuery must match corpus
     * type.
     */
    query?: Schema$CorpusQuery;
    /**
     * The last time this hold was modified.
     */
    updateTime?: string;
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
     * Page token to retrieve the next page of results in the list. If this is
     * empty, then there are no more holds to list.
     */
    nextPageToken?: string;
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
    nextPageToken?: string;
  }
  /**
   * Represents a matter.
   */
  export interface Schema$Matter {
    /**
     * The description of the matter.
     */
    description?: string;
    /**
     * The matter ID which is generated by the server. Should be blank when
     * creating a new matter.
     */
    matterId?: string;
    /**
     * List of users and access to the matter. Currently there is no programmer
     * defined limit on the number of permissions a matter can have.
     */
    matterPermissions?: Schema$MatterPermission[];
    /**
     * The name of the matter.
     */
    name?: string;
    /**
     * The state of the matter.
     */
    state?: string;
  }
  /**
   * Currently each matter only has one owner, and all others are collaborators.
   * When an account is purged, its corresponding MatterPermission resources
   * cease to exist.
   */
  export interface Schema$MatterPermission {
    /**
     * The account id, as provided by &lt;a
     * href=&quot;https://developers.google.com/admin-sdk/&quot;&gt;Admin
     * SDK&lt;/a&gt;.
     */
    accountId?: string;
    /**
     * The user&#39;s role in this matter.
     */
    role?: string;
  }
  /**
   * Remove an account as a matter collaborator.
   */
  export interface Schema$RemoveMatterPermissionsRequest {
    /**
     * The account ID.
     */
    accountId?: string;
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
   * Undelete a matter by ID.
   */
  export interface Schema$UndeleteMatterRequest {}


  export class Resource$Matters {
    root: Vault;
    holds: Resource$Matters$Holds;
    constructor(root: Vault) {
      this.root = root;
      this.getRoot.bind(this);
      this.holds = new Resource$Matters$Holds(root);
    }

    getRoot() {
      return this.root;
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
        options?: MethodOptions): AxiosPromise<Schema$MatterPermission>;
    addPermissions(
        params: Params$Resource$Matters$Addpermissions,
        options: MethodOptions|BodyResponseCallback<Schema$MatterPermission>,
        callback: BodyResponseCallback<Schema$MatterPermission>): void;
    addPermissions(
        params: Params$Resource$Matters$Addpermissions,
        callback: BodyResponseCallback<Schema$MatterPermission>): void;
    addPermissions(callback: BodyResponseCallback<Schema$MatterPermission>):
        void;
    addPermissions(
        paramsOrCallback?: Params$Resource$Matters$Addpermissions|
        BodyResponseCallback<Schema$MatterPermission>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MatterPermission>,
        callback?: BodyResponseCallback<Schema$MatterPermission>):
        void|AxiosPromise<Schema$MatterPermission> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Addpermissions;
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
              url: (rootUrl + '/v1/matters/{matterId}:addPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
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
    close(params?: Params$Resource$Matters$Close, options?: MethodOptions):
        AxiosPromise<Schema$CloseMatterResponse>;
    close(
        params: Params$Resource$Matters$Close,
        options: MethodOptions|BodyResponseCallback<Schema$CloseMatterResponse>,
        callback: BodyResponseCallback<Schema$CloseMatterResponse>): void;
    close(
        params: Params$Resource$Matters$Close,
        callback: BodyResponseCallback<Schema$CloseMatterResponse>): void;
    close(callback: BodyResponseCallback<Schema$CloseMatterResponse>): void;
    close(
        paramsOrCallback?: Params$Resource$Matters$Close|
        BodyResponseCallback<Schema$CloseMatterResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CloseMatterResponse>,
        callback?: BodyResponseCallback<Schema$CloseMatterResponse>):
        void|AxiosPromise<Schema$CloseMatterResponse> {
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
              url: (rootUrl + '/v1/matters/{matterId}:close')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CloseMatterResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CloseMatterResponse>(parameters);
      }
    }


    /**
     * vault.matters.create
     * @desc Creates a new matter with the given name and description. The
     * initial state is open, and the owner is the method caller. Returns the
     * created matter with default view.
     * @alias vault.matters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Matter} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Matters$Create, options?: MethodOptions):
        AxiosPromise<Schema$Matter>;
    create(
        params: Params$Resource$Matters$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback: BodyResponseCallback<Schema$Matter>): void;
    create(
        params: Params$Resource$Matters$Create,
        callback: BodyResponseCallback<Schema$Matter>): void;
    create(callback: BodyResponseCallback<Schema$Matter>): void;
    create(
        paramsOrCallback?: Params$Resource$Matters$Create|
        BodyResponseCallback<Schema$Matter>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback?: BodyResponseCallback<Schema$Matter>):
        void|AxiosPromise<Schema$Matter> {
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
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
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
    delete(params?: Params$Resource$Matters$Delete, options?: MethodOptions):
        AxiosPromise<Schema$Matter>;
    delete(
        params: Params$Resource$Matters$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback: BodyResponseCallback<Schema$Matter>): void;
    delete(
        params: Params$Resource$Matters$Delete,
        callback: BodyResponseCallback<Schema$Matter>): void;
    delete(callback: BodyResponseCallback<Schema$Matter>): void;
    delete(
        paramsOrCallback?: Params$Resource$Matters$Delete|
        BodyResponseCallback<Schema$Matter>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback?: BodyResponseCallback<Schema$Matter>):
        void|AxiosPromise<Schema$Matter> {
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
              url: (rootUrl + '/v1/matters/{matterId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
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
    get(params?: Params$Resource$Matters$Get,
        options?: MethodOptions): AxiosPromise<Schema$Matter>;
    get(params: Params$Resource$Matters$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback: BodyResponseCallback<Schema$Matter>): void;
    get(params: Params$Resource$Matters$Get,
        callback: BodyResponseCallback<Schema$Matter>): void;
    get(callback: BodyResponseCallback<Schema$Matter>): void;
    get(paramsOrCallback?: Params$Resource$Matters$Get|
        BodyResponseCallback<Schema$Matter>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback?: BodyResponseCallback<Schema$Matter>):
        void|AxiosPromise<Schema$Matter> {
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
              url: (rootUrl + '/v1/matters/{matterId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
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
    list(params?: Params$Resource$Matters$List, options?: MethodOptions):
        AxiosPromise<Schema$ListMattersResponse>;
    list(
        params: Params$Resource$Matters$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListMattersResponse>,
        callback: BodyResponseCallback<Schema$ListMattersResponse>): void;
    list(
        params: Params$Resource$Matters$List,
        callback: BodyResponseCallback<Schema$ListMattersResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListMattersResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Matters$List|
        BodyResponseCallback<Schema$ListMattersResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListMattersResponse>,
        callback?: BodyResponseCallback<Schema$ListMattersResponse>):
        void|AxiosPromise<Schema$ListMattersResponse> {
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    removePermissions(
        params: Params$Resource$Matters$Removepermissions,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    removePermissions(
        params: Params$Resource$Matters$Removepermissions,
        callback: BodyResponseCallback<Schema$Empty>): void;
    removePermissions(callback: BodyResponseCallback<Schema$Empty>): void;
    removePermissions(
        paramsOrCallback?: Params$Resource$Matters$Removepermissions|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Removepermissions;
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
              url: (rootUrl + '/v1/matters/{matterId}:removePermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
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
    reopen(params?: Params$Resource$Matters$Reopen, options?: MethodOptions):
        AxiosPromise<Schema$ReopenMatterResponse>;
    reopen(
        params: Params$Resource$Matters$Reopen,
        options: MethodOptions|
        BodyResponseCallback<Schema$ReopenMatterResponse>,
        callback: BodyResponseCallback<Schema$ReopenMatterResponse>): void;
    reopen(
        params: Params$Resource$Matters$Reopen,
        callback: BodyResponseCallback<Schema$ReopenMatterResponse>): void;
    reopen(callback: BodyResponseCallback<Schema$ReopenMatterResponse>): void;
    reopen(
        paramsOrCallback?: Params$Resource$Matters$Reopen|
        BodyResponseCallback<Schema$ReopenMatterResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ReopenMatterResponse>,
        callback?: BodyResponseCallback<Schema$ReopenMatterResponse>):
        void|AxiosPromise<Schema$ReopenMatterResponse> {
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
              url: (rootUrl + '/v1/matters/{matterId}:reopen')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
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
        options?: MethodOptions): AxiosPromise<Schema$Matter>;
    undelete(
        params: Params$Resource$Matters$Undelete,
        options: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback: BodyResponseCallback<Schema$Matter>): void;
    undelete(
        params: Params$Resource$Matters$Undelete,
        callback: BodyResponseCallback<Schema$Matter>): void;
    undelete(callback: BodyResponseCallback<Schema$Matter>): void;
    undelete(
        paramsOrCallback?: Params$Resource$Matters$Undelete|
        BodyResponseCallback<Schema$Matter>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback?: BodyResponseCallback<Schema$Matter>):
        void|AxiosPromise<Schema$Matter> {
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
              url: (rootUrl + '/v1/matters/{matterId}:undelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }


    /**
     * vault.matters.update
     * @desc Updates the specified matter. This updates only the name and
     * description of the matter, identified by matter id. Changes to any other
     * fields are ignored. Returns the default view of the matter.
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
    update(params?: Params$Resource$Matters$Update, options?: MethodOptions):
        AxiosPromise<Schema$Matter>;
    update(
        params: Params$Resource$Matters$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback: BodyResponseCallback<Schema$Matter>): void;
    update(
        params: Params$Resource$Matters$Update,
        callback: BodyResponseCallback<Schema$Matter>): void;
    update(callback: BodyResponseCallback<Schema$Matter>): void;
    update(
        paramsOrCallback?: Params$Resource$Matters$Update|
        BodyResponseCallback<Schema$Matter>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Matter>,
        callback?: BodyResponseCallback<Schema$Matter>):
        void|AxiosPromise<Schema$Matter> {
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
              url: (rootUrl + '/v1/matters/{matterId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Matter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Matter>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Addpermissions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMatterPermissionsRequest;
  }
  export interface Params$Resource$Matters$Close {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseMatterRequest;
  }
  export interface Params$Resource$Matters$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Matter;
  }
  export interface Params$Resource$Matters$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * Specifies which parts of the Matter to return in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The number of matters to return in the response. Default and maximum are
     * 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response.
     */
    pageToken?: string;
    /**
     * If set, list only matters with that specific state. The default is
     * listing matters of all states.
     */
    state?: string;
    /**
     * Specifies which parts of the matter to return in response.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Removepermissions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveMatterPermissionsRequest;
  }
  export interface Params$Resource$Matters$Reopen {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReopenMatterRequest;
  }
  export interface Params$Resource$Matters$Undelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteMatterRequest;
  }
  export interface Params$Resource$Matters$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Matter;
  }

  export class Resource$Matters$Holds {
    root: Vault;
    accounts: Resource$Matters$Holds$Accounts;
    constructor(root: Vault) {
      this.root = root;
      this.getRoot.bind(this);
      this.accounts = new Resource$Matters$Holds$Accounts(root);
    }

    getRoot() {
      return this.root;
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
        options?: MethodOptions): AxiosPromise<Schema$Hold>;
    create(
        params: Params$Resource$Matters$Holds$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Hold>,
        callback: BodyResponseCallback<Schema$Hold>): void;
    create(
        params: Params$Resource$Matters$Holds$Create,
        callback: BodyResponseCallback<Schema$Hold>): void;
    create(callback: BodyResponseCallback<Schema$Hold>): void;
    create(
        paramsOrCallback?: Params$Resource$Matters$Holds$Create|
        BodyResponseCallback<Schema$Hold>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Hold>,
        callback?: BodyResponseCallback<Schema$Hold>):
        void|AxiosPromise<Schema$Hold> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Holds$Create;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }


    /**
     * vault.matters.holds.delete
     * @desc Removes a hold by ID. This will release any HeldAccounts on this
     * Hold.
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
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Matters$Holds$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Matters$Holds$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Matters$Holds$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Holds$Delete;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.getRoot()
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
    get(params?: Params$Resource$Matters$Holds$Get,
        options?: MethodOptions): AxiosPromise<Schema$Hold>;
    get(params: Params$Resource$Matters$Holds$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Hold>,
        callback: BodyResponseCallback<Schema$Hold>): void;
    get(params: Params$Resource$Matters$Holds$Get,
        callback: BodyResponseCallback<Schema$Hold>): void;
    get(callback: BodyResponseCallback<Schema$Hold>): void;
    get(paramsOrCallback?: Params$Resource$Matters$Holds$Get|
        BodyResponseCallback<Schema$Hold>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Hold>,
        callback?: BodyResponseCallback<Schema$Hold>):
        void|AxiosPromise<Schema$Hold> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Holds$Get;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }


    /**
     * vault.matters.holds.list
     * @desc Lists holds within a matter. An empty page token in
     * ListHoldsResponse denotes no more holds to list.
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
    list(params?: Params$Resource$Matters$Holds$List, options?: MethodOptions):
        AxiosPromise<Schema$ListHoldsResponse>;
    list(
        params: Params$Resource$Matters$Holds$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListHoldsResponse>,
        callback: BodyResponseCallback<Schema$ListHoldsResponse>): void;
    list(
        params: Params$Resource$Matters$Holds$List,
        callback: BodyResponseCallback<Schema$ListHoldsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListHoldsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Matters$Holds$List|
        BodyResponseCallback<Schema$ListHoldsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListHoldsResponse>,
        callback?: BodyResponseCallback<Schema$ListHoldsResponse>):
        void|AxiosPromise<Schema$ListHoldsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Holds$List;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListHoldsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListHoldsResponse>(parameters);
      }
    }


    /**
     * vault.matters.holds.update
     * @desc Updates the OU and/or query parameters of a hold. You cannot add
     * accounts to a hold that covers an OU, nor can you add OUs to a hold that
     * covers individual accounts. Accounts listed in the hold will be ignored.
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
        options?: MethodOptions): AxiosPromise<Schema$Hold>;
    update(
        params: Params$Resource$Matters$Holds$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Hold>,
        callback: BodyResponseCallback<Schema$Hold>): void;
    update(
        params: Params$Resource$Matters$Holds$Update,
        callback: BodyResponseCallback<Schema$Hold>): void;
    update(callback: BodyResponseCallback<Schema$Hold>): void;
    update(
        paramsOrCallback?: Params$Resource$Matters$Holds$Update|
        BodyResponseCallback<Schema$Hold>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Hold>,
        callback?: BodyResponseCallback<Schema$Hold>):
        void|AxiosPromise<Schema$Hold> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Matters$Holds$Update;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Hold>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hold>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Holds$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hold;
  }
  export interface Params$Resource$Matters$Holds$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
  export interface Params$Resource$Matters$Holds$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Matters$Holds$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The matter ID.
     */
    matterId?: string;
    /**
     * The number of holds to return in the response, between 0 and 100
     * inclusive. Leaving this empty, or as 0, is the same as page_size = 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response. An empty token means
     * start from the beginning.
     */
    pageToken?: string;
    /**
     * Specifies which parts of the Hold to return.
     */
    view?: string;
  }
  export interface Params$Resource$Matters$Holds$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Vault;
    constructor(root: Vault) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * vault.matters.holds.accounts.create
     * @desc Adds a HeldAccount to a hold. Accounts can only be added to a hold
     * that has no held_org_unit set. Attempting to add an account to an
     * OU-based hold will result in an error.
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
        options?: MethodOptions): AxiosPromise<Schema$HeldAccount>;
    create(
        params: Params$Resource$Matters$Holds$Accounts$Create,
        options: MethodOptions|BodyResponseCallback<Schema$HeldAccount>,
        callback: BodyResponseCallback<Schema$HeldAccount>): void;
    create(
        params: Params$Resource$Matters$Holds$Accounts$Create,
        callback: BodyResponseCallback<Schema$HeldAccount>): void;
    create(callback: BodyResponseCallback<Schema$HeldAccount>): void;
    create(
        paramsOrCallback?: Params$Resource$Matters$Holds$Accounts$Create|
        BodyResponseCallback<Schema$HeldAccount>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$HeldAccount>,
        callback?: BodyResponseCallback<Schema$HeldAccount>):
        void|AxiosPromise<Schema$HeldAccount> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Matters$Holds$Accounts$Create;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$HeldAccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HeldAccount>(parameters);
      }
    }


    /**
     * vault.matters.holds.accounts.delete
     * @desc Removes a HeldAccount from a hold. If this request leaves the hold
     * with no held accounts, the hold will not apply to any accounts.
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
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Matters$Holds$Accounts$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Matters$Holds$Accounts$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Matters$Holds$Accounts$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Matters$Holds$Accounts$Delete;
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
              url:
                  (rootUrl +
                   '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['matterId', 'holdId', 'accountId'],
        pathParams: ['accountId', 'holdId', 'matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * vault.matters.holds.accounts.list
     * @desc Lists HeldAccounts for a hold. This will only list individually
     * specified held accounts. If the hold is on an OU, then use <a
     * href="https://developers.google.com/admin-sdk/">Admin SDK</a> to
     * enumerate its members.
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
        options?: MethodOptions): AxiosPromise<Schema$ListHeldAccountsResponse>;
    list(
        params: Params$Resource$Matters$Holds$Accounts$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListHeldAccountsResponse>,
        callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>): void;
    list(
        params: Params$Resource$Matters$Holds$Accounts$List,
        callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListHeldAccountsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Matters$Holds$Accounts$List|
        BodyResponseCallback<Schema$ListHeldAccountsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListHeldAccountsResponse>,
        callback?: BodyResponseCallback<Schema$ListHeldAccountsResponse>):
        void|AxiosPromise<Schema$ListHeldAccountsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Matters$Holds$Accounts$List;
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
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['matterId', 'holdId'],
        pathParams: ['holdId', 'matterId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListHeldAccountsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListHeldAccountsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Matters$Holds$Accounts$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Matters$Holds$Accounts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Matters$Holds$Accounts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The hold ID.
     */
    holdId?: string;
    /**
     * The matter ID.
     */
    matterId?: string;
  }
}
