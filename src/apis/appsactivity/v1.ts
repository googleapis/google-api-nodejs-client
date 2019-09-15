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

export namespace appsactivity_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Drive Activity API
   *
   * Provides a historical view of activity.
   *
   * @example
   * const {google} = require('googleapis');
   * const appsactivity = google.appsactivity('v1');
   *
   * @namespace appsactivity
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Appsactivity
   */
  export class Appsactivity {
    context: APIRequestContext;
    activities: Resource$Activities;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.activities = new Resource$Activities(this.context);
    }
  }

  /**
   * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
   */
  export interface Schema$Activity {
    /**
     * The fields common to all of the singleEvents that make up the Activity.
     */
    combinedEvent?: Schema$Event;
    /**
     * A list of all the Events that make up the Activity.
     */
    singleEvents?: Schema$Event[];
  }
  /**
   * Represents the changes associated with an action taken by a user.
   */
  export interface Schema$Event {
    /**
     * Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event.
     */
    additionalEventTypes?: string[] | null;
    /**
     * The time at which the event occurred formatted as Unix time in milliseconds.
     */
    eventTimeMillis?: string | null;
    /**
     * Whether this event is caused by a user being deleted.
     */
    fromUserDeletion?: boolean | null;
    /**
     * Extra information for move type events, such as changes in an object&#39;s parents.
     */
    move?: Schema$Move;
    /**
     * Extra information for permissionChange type events, such as the user or group the new permission applies to.
     */
    permissionChanges?: Schema$PermissionChange[];
    /**
     * The main type of event that occurred.
     */
    primaryEventType?: string | null;
    /**
     * Extra information for rename type events, such as the old and new names.
     */
    rename?: Schema$Rename;
    /**
     * Information specific to the Target object modified by the event.
     */
    target?: Schema$Target;
    /**
     * Represents the user responsible for the event.
     */
    user?: Schema$User;
  }
  /**
   * The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
   */
  export interface Schema$ListActivitiesResponse {
    /**
     * List of activities.
     */
    activities?: Schema$Activity[];
    /**
     * Token for the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Contains information about changes in an object&#39;s parents as a result of a move type event.
   */
  export interface Schema$Move {
    /**
     * The added parent(s).
     */
    addedParents?: Schema$Parent[];
    /**
     * The removed parent(s).
     */
    removedParents?: Schema$Parent[];
  }
  /**
   * Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
   */
  export interface Schema$Parent {
    /**
     * The parent&#39;s ID.
     */
    id?: string | null;
    /**
     * Whether this is the root folder.
     */
    isRoot?: boolean | null;
    /**
     * The parent&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
   */
  export interface Schema$Permission {
    /**
     * The name of the user or group the permission applies to.
     */
    name?: string | null;
    /**
     * The ID for this permission. Corresponds to the Drive API&#39;s permission ID returned as part of the Drive Permissions resource.
     */
    permissionId?: string | null;
    /**
     * Indicates the Google Drive permissions role. The role determines a user&#39;s ability to read, write, or comment on the file.
     */
    role?: string | null;
    /**
     * Indicates how widely permissions are granted.
     */
    type?: string | null;
    /**
     * The user&#39;s information if the type is USER.
     */
    user?: Schema$User;
    /**
     * Whether the permission requires a link to the file.
     */
    withLink?: boolean | null;
  }
  /**
   * Contains information about a Drive object&#39;s permissions that changed as a result of a permissionChange type event.
   */
  export interface Schema$PermissionChange {
    /**
     * Lists all Permission objects added.
     */
    addedPermissions?: Schema$Permission[];
    /**
     * Lists all Permission objects removed.
     */
    removedPermissions?: Schema$Permission[];
  }
  /**
   * Photo information for a user.
   */
  export interface Schema$Photo {
    /**
     * The URL of the photo.
     */
    url?: string | null;
  }
  /**
   * Contains information about a renametype event.
   */
  export interface Schema$Rename {
    /**
     * The new title.
     */
    newTitle?: string | null;
    /**
     * The old title.
     */
    oldTitle?: string | null;
  }
  /**
   * Information about the object modified by the event.
   */
  export interface Schema$Target {
    /**
     * The ID of the target. For example, in Google Drive, this is the file or folder ID.
     */
    id?: string | null;
    /**
     * The MIME type of the target.
     */
    mimeType?: string | null;
    /**
     * The name of the target. For example, in Google Drive, this is the title of the file.
     */
    name?: string | null;
  }
  /**
   * A representation of a user.
   */
  export interface Schema$User {
    /**
     * A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted.
     */
    isDeleted?: boolean | null;
    /**
     * Whether the user is the authenticated user.
     */
    isMe?: boolean | null;
    /**
     * The displayable name of the user.
     */
    name?: string | null;
    /**
     * The permission ID associated with this user. Equivalent to the Drive API&#39;s permission ID for this user, returned as part of the Drive Permissions resource.
     */
    permissionId?: string | null;
    /**
     * The profile photo of the user. Not present if the user has no profile photo.
     */
    photo?: Schema$Photo;
  }

  export class Resource$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * appsactivity.activities.list
     * @desc Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
     * @alias appsactivity.activities.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.drive.ancestorId Identifies the Drive folder containing the items for which to return activities.
     * @param {string=} params.drive.fileId Identifies the Drive item to return activities for.
     * @param {string=} params.groupingStrategy Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
     * @param {integer=} params.pageSize The maximum number of events to return on a page. The response includes a continuation token if there are more events.
     * @param {string=} params.pageToken A token to retrieve a specific page of results.
     * @param {string=} params.source The Google service from which to return activities. Possible values of source are:  - drive.google.com
     * @param {string=} params.userId The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListActivitiesResponse>;
    list(
      params: Params$Resource$Activities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListActivitiesResponse>,
      callback: BodyResponseCallback<Schema$ListActivitiesResponse>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      callback: BodyResponseCallback<Schema$ListActivitiesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListActivitiesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Activities$List
        | BodyResponseCallback<Schema$ListActivitiesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListActivitiesResponse>,
      callback?: BodyResponseCallback<Schema$ListActivitiesResponse>
    ): void | GaxiosPromise<Schema$ListActivitiesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$List;
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
            url: (rootUrl + '/appsactivity/v1/activities').replace(
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
        createAPIRequest<Schema$ListActivitiesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListActivitiesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Identifies the Drive folder containing the items for which to return activities.
     */
    'drive.ancestorId'?: string;
    /**
     * Identifies the Drive item to return activities for.
     */
    'drive.fileId'?: string;
    /**
     * Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
     */
    groupingStrategy?: string;
    /**
     * The maximum number of events to return on a page. The response includes a continuation token if there are more events.
     */
    pageSize?: number;
    /**
     * A token to retrieve a specific page of results.
     */
    pageToken?: string;
    /**
     * The Google service from which to return activities. Possible values of source are:  - drive.google.com
     */
    source?: string;
    /**
     * The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user.
     */
    userId?: string;
  }
}
