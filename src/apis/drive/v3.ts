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
// tslint:disable: no-namespace

export namespace drive_v3 {
  /**
   * Drive API
   *
   * Manages files in Drive including uploading, downloading, searching,
   * detecting changes, and updating sharing permissions.
   *
   * @example
   * const google = require('googleapis');
   * const drive = google.drive('v3');
   *
   * @namespace drive
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Drive
   */
  export class Drive {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    about: Resource$About;
    changes: Resource$Changes;
    channels: Resource$Channels;
    comments: Resource$Comments;
    files: Resource$Files;
    permissions: Resource$Permissions;
    replies: Resource$Replies;
    revisions: Resource$Revisions;
    teamdrives: Resource$Teamdrives;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.about = new Resource$About(this);
      this.changes = new Resource$Changes(this);
      this.channels = new Resource$Channels(this);
      this.comments = new Resource$Comments(this);
      this.files = new Resource$Files(this);
      this.permissions = new Resource$Permissions(this);
      this.replies = new Resource$Replies(this);
      this.revisions = new Resource$Revisions(this);
      this.teamdrives = new Resource$Teamdrives(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Information about the user, the user&#39;s Drive, and system capabilities.
   */
  export interface Schema$About {
    /**
     * Whether the user has installed the requesting app.
     */
    appInstalled: boolean;
    /**
     * Whether the user can create Team Drives.
     */
    canCreateTeamDrives: boolean;
    /**
     * A map of source MIME type to possible targets for all supported exports.
     */
    exportFormats: any;
    /**
     * The currently supported folder colors as RGB hex strings.
     */
    folderColorPalette: string[];
    /**
     * A map of source MIME type to possible targets for all supported imports.
     */
    importFormats: any;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#about&quot;.
     */
    kind: string;
    /**
     * A map of maximum import sizes by MIME type, in bytes.
     */
    maxImportSizes: any;
    /**
     * The maximum upload size in bytes.
     */
    maxUploadSize: string;
    /**
     * The user&#39;s storage quota limits and usage. All fields are measured in
     * bytes.
     */
    storageQuota: any;
    /**
     * A list of themes that are supported for Team Drives.
     */
    teamDriveThemes: any[];
    /**
     * The authenticated user.
     */
    user: Schema$User;
  }
  /**
   * A change to a file or Team Drive.
   */
  export interface Schema$Change {
    /**
     * The updated state of the file. Present if the type is file and the file
     * has not been removed from this list of changes.
     */
    file: Schema$File;
    /**
     * The ID of the file which has changed.
     */
    fileId: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#change&quot;.
     */
    kind: string;
    /**
     * Whether the file or Team Drive has been removed from this list of
     * changes, for example by deletion or loss of access.
     */
    removed: boolean;
    /**
     * The updated state of the Team Drive. Present if the type is teamDrive,
     * the user is still a member of the Team Drive, and the Team Drive has not
     * been removed.
     */
    teamDrive: Schema$TeamDrive;
    /**
     * The ID of the Team Drive associated with this change.
     */
    teamDriveId: string;
    /**
     * The time of this change (RFC 3339 date-time).
     */
    time: string;
    /**
     * The type of the change. Possible values are file and teamDrive.
     */
    type: string;
  }
  /**
   * A list of changes for a user.
   */
  export interface Schema$ChangeList {
    /**
     * The list of changes. If nextPageToken is populated, then this list may be
     * incomplete and an additional page of results should be fetched.
     */
    changes: Schema$Change[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#changeList&quot;.
     */
    kind: string;
    /**
     * The starting page token for future changes. This will be present only if
     * the end of the current changes list has been reached.
     */
    newStartPageToken: string;
    /**
     * The page token for the next page of changes. This will be absent if the
     * end of the changes list has been reached. If the token is rejected for
     * any reason, it should be discarded, and pagination should be restarted
     * from the first page of results.
     */
    nextPageToken: string;
  }
  /**
   * An notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address: string;
    /**
     * Date and time of notification channel expiration, expressed as a Unix
     * timestamp, in milliseconds. Optional.
     */
    expiration: string;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id: string;
    /**
     * Identifies this as a notification channel used to watch for changes to a
     * resource. Value: the fixed string &quot;api#channel&quot;.
     */
    kind: string;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params: any;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload: boolean;
    /**
     * An opaque ID that identifies the resource being watched on this channel.
     * Stable across different API versions.
     */
    resourceId: string;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri: string;
    /**
     * An arbitrary string delivered to the target address with each
     * notification delivered over this channel. Optional.
     */
    token: string;
    /**
     * The type of delivery mechanism used for this channel.
     */
    type: string;
  }
  /**
   * A comment on a file.
   */
  export interface Schema$Comment {
    /**
     * A region of the document represented as a JSON string. See anchor
     * documentation for details on how to define and interpret anchor
     * properties.
     */
    anchor: string;
    /**
     * The user who created the comment.
     */
    author: Schema$User;
    /**
     * The plain text content of the comment. This field is used for setting the
     * content, while htmlContent should be displayed.
     */
    content: string;
    /**
     * The time at which the comment was created (RFC 3339 date-time).
     */
    createdTime: string;
    /**
     * Whether the comment has been deleted. A deleted comment has no content.
     */
    deleted: boolean;
    /**
     * The content of the comment with HTML formatting.
     */
    htmlContent: string;
    /**
     * The ID of the comment.
     */
    id: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#comment&quot;.
     */
    kind: string;
    /**
     * The last time the comment or any of its replies was modified (RFC 3339
     * date-time).
     */
    modifiedTime: string;
    /**
     * The file content to which the comment refers, typically within the anchor
     * region. For a text file, for example, this would be the text at the
     * location of the comment.
     */
    quotedFileContent: any;
    /**
     * The full list of replies to the comment in chronological order.
     */
    replies: Schema$Reply[];
    /**
     * Whether the comment has been resolved by one of its replies.
     */
    resolved: boolean;
  }
  /**
   * A list of comments on a file.
   */
  export interface Schema$CommentList {
    /**
     * The list of comments. If nextPageToken is populated, then this list may
     * be incomplete and an additional page of results should be fetched.
     */
    comments: Schema$Comment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#commentList&quot;.
     */
    kind: string;
    /**
     * The page token for the next page of comments. This will be absent if the
     * end of the comments list has been reached. If the token is rejected for
     * any reason, it should be discarded, and pagination should be restarted
     * from the first page of results.
     */
    nextPageToken: string;
  }
  /**
   * The metadata for a file.
   */
  export interface Schema$File {
    /**
     * A collection of arbitrary key-value pairs which are private to the
     * requesting app. Entries with null values are cleared in update and copy
     * requests.
     */
    appProperties: any;
    /**
     * Capabilities the current user has on this file. Each capability
     * corresponds to a fine-grained action that a user may take.
     */
    capabilities: any;
    /**
     * Additional information about the content of the file. These fields are
     * never populated in responses.
     */
    contentHints: any;
    /**
     * The time at which the file was created (RFC 3339 date-time).
     */
    createdTime: string;
    /**
     * A short description of the file.
     */
    description: string;
    /**
     * Whether the file has been explicitly trashed, as opposed to recursively
     * trashed from a parent folder.
     */
    explicitlyTrashed: boolean;
    /**
     * The final component of fullFileExtension. This is only available for
     * files with binary content in Drive.
     */
    fileExtension: string;
    /**
     * The color for a folder as an RGB hex string. The supported colors are
     * published in the folderColorPalette field of the About resource. If an
     * unsupported color is specified, the closest color in the palette will be
     * used instead.
     */
    folderColorRgb: string;
    /**
     * The full file extension extracted from the name field. May contain
     * multiple concatenated extensions, such as &quot;tar.gz&quot;. This is
     * only available for files with binary content in Drive. This is
     * automatically updated when the name field changes, however it is not
     * cleared if the new name does not contain a valid extension.
     */
    fullFileExtension: string;
    /**
     * Whether any users are granted file access directly on this file. This
     * field is only populated for Team Drive files.
     */
    hasAugmentedPermissions: boolean;
    /**
     * Whether this file has a thumbnail. This does not indicate whether the
     * requesting app has access to the thumbnail. To check access, look for the
     * presence of the thumbnailLink field.
     */
    hasThumbnail: boolean;
    /**
     * The ID of the file&#39;s head revision. This is currently only available
     * for files with binary content in Drive.
     */
    headRevisionId: string;
    /**
     * A static, unauthenticated link to the file&#39;s icon.
     */
    iconLink: string;
    /**
     * The ID of the file.
     */
    id: string;
    /**
     * Additional metadata about image media, if available.
     */
    imageMediaMetadata: any;
    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#file&quot;.
     */
    kind: string;
    /**
     * The last user to modify the file.
     */
    lastModifyingUser: Schema$User;
    /**
     * The MD5 checksum for the content of the file. This is only applicable to
     * files with binary content in Drive.
     */
    md5Checksum: string;
    /**
     * The MIME type of the file. Drive will attempt to automatically detect an
     * appropriate value from uploaded content if no value is provided. The
     * value cannot be changed unless a new revision is uploaded. If a file is
     * created with a Google Doc MIME type, the uploaded content will be
     * imported if possible. The supported import formats are published in the
     * About resource.
     */
    mimeType: string;
    /**
     * Whether the file has been modified by this user.
     */
    modifiedByMe: boolean;
    /**
     * The last time the file was modified by the user (RFC 3339 date-time).
     */
    modifiedByMeTime: string;
    /**
     * The last time the file was modified by anyone (RFC 3339 date-time). Note
     * that setting modifiedTime will also update modifiedByMeTime for the user.
     */
    modifiedTime: string;
    /**
     * The name of the file. This is not necessarily unique within a folder.
     * Note that for immutable items such as the top level folders of Team
     * Drives, My Drive root folder, and Application Data folder the name is
     * constant.
     */
    name: string;
    /**
     * The original filename of the uploaded content if available, or else the
     * original value of the name field. This is only available for files with
     * binary content in Drive.
     */
    originalFilename: string;
    /**
     * Whether the user owns the file. Not populated for Team Drive files.
     */
    ownedByMe: boolean;
    /**
     * The owners of the file. Currently, only certain legacy files may have
     * more than one owner. Not populated for Team Drive files.
     */
    owners: Schema$User[];
    /**
     * The IDs of the parent folders which contain the file. If not specified as
     * part of a create request, the file will be placed directly in the
     * user&#39;s My Drive folder. If not specified as part of a copy request,
     * the file will inherit any discoverable parents of the source file. Update
     * requests must use the addParents and removeParents parameters to modify
     * the parents list.
     */
    parents: string[];
    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds: string[];
    /**
     * The full list of permissions for the file. This is only available if the
     * requesting user can share the file. Not populated for Team Drive files.
     */
    permissions: Schema$Permission[];
    /**
     * A collection of arbitrary key-value pairs which are visible to all apps.
     * Entries with null values are cleared in update and copy requests.
     */
    properties: any;
    /**
     * The number of storage quota bytes used by the file. This includes the
     * head revision as well as previous revisions with keepForever enabled.
     */
    quotaBytesUsed: string;
    /**
     * Whether the file has been shared. Not populated for Team Drive files.
     */
    shared: boolean;
    /**
     * The time at which the file was shared with the user, if applicable (RFC
     * 3339 date-time).
     */
    sharedWithMeTime: string;
    /**
     * The user who shared the file with the requesting user, if applicable.
     */
    sharingUser: Schema$User;
    /**
     * The size of the file&#39;s content in bytes. This is only applicable to
     * files with binary content in Drive.
     */
    size: string;
    /**
     * The list of spaces which contain the file. The currently supported values
     * are &#39;drive&#39;, &#39;appDataFolder&#39; and &#39;photos&#39;.
     */
    spaces: string[];
    /**
     * Whether the user has starred the file.
     */
    starred: boolean;
    /**
     * ID of the Team Drive the file resides in.
     */
    teamDriveId: string;
    /**
     * A short-lived link to the file&#39;s thumbnail, if available. Typically
     * lasts on the order of hours. Only populated when the requesting app can
     * access the file&#39;s content.
     */
    thumbnailLink: string;
    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion: string;
    /**
     * Whether the file has been trashed, either explicitly or from a trashed
     * parent folder. Only the owner may trash a file, and other users cannot
     * see files in the owner&#39;s trash.
     */
    trashed: boolean;
    /**
     * The time that the item was trashed (RFC 3339 date-time). Only populated
     * for Team Drive files.
     */
    trashedTime: string;
    /**
     * If the file has been explicitly trashed, the user who trashed it. Only
     * populated for Team Drive files.
     */
    trashingUser: Schema$User;
    /**
     * A monotonically increasing version number for the file. This reflects
     * every change made to the file on the server, even those not visible to
     * the user.
     */
    version: string;
    /**
     * Additional metadata about video media. This may not be available
     * immediately upon upload.
     */
    videoMediaMetadata: any;
    /**
     * Whether the file has been viewed by this user.
     */
    viewedByMe: boolean;
    /**
     * The last time the file was viewed by the user (RFC 3339 date-time).
     */
    viewedByMeTime: string;
    /**
     * Whether users with only reader or commenter permission can copy the
     * file&#39;s content. This affects copy, download, and print operations.
     */
    viewersCanCopyContent: boolean;
    /**
     * A link for downloading the content of the file in a browser. This is only
     * available for files with binary content in Drive.
     */
    webContentLink: string;
    /**
     * A link for opening the file in a relevant Google editor or viewer in a
     * browser.
     */
    webViewLink: string;
    /**
     * Whether users with only writer permission can modify the file&#39;s
     * permissions. Not populated for Team Drive files.
     */
    writersCanShare: boolean;
  }
  /**
   * A list of files.
   */
  export interface Schema$FileList {
    /**
     * The list of files. If nextPageToken is populated, then this list may be
     * incomplete and an additional page of results should be fetched.
     */
    files: Schema$File[];
    /**
     * Whether the search process was incomplete. If true, then some search
     * results may be missing, since all documents were not searched. This may
     * occur when searching multiple Team Drives with the
     * &quot;user,allTeamDrives&quot; corpora, but all corpora could not be
     * searched. When this happens, it is suggested that clients narrow their
     * query by choosing a different corpus such as &quot;user&quot; or
     * &quot;teamDrive&quot;.
     */
    incompleteSearch: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#fileList&quot;.
     */
    kind: string;
    /**
     * The page token for the next page of files. This will be absent if the end
     * of the files list has been reached. If the token is rejected for any
     * reason, it should be discarded, and pagination should be restarted from
     * the first page of results.
     */
    nextPageToken: string;
  }
  /**
   * A list of generated file IDs which can be provided in create requests.
   */
  export interface Schema$GeneratedIds {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids: string[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#generatedIds&quot;.
     */
    kind: string;
    /**
     * The type of file that can be created with these IDs.
     */
    space: string;
  }
  /**
   * A permission for a file. A permission grants a user, group, domain or the
   * world access to a file or a folder hierarchy.
   */
  export interface Schema$Permission {
    /**
     * Whether the permission allows the file to be discovered through search.
     * This is only applicable for permissions of type domain or anyone.
     */
    allowFileDiscovery: boolean;
    /**
     * Whether the account associated with this permission has been deleted.
     * This field only pertains to user and group permissions.
     */
    deleted: boolean;
    /**
     * A displayable name for users, groups or domains.
     */
    displayName: string;
    /**
     * The domain to which this permission refers.
     */
    domain: string;
    /**
     * The email address of the user or group to which this permission refers.
     */
    emailAddress: string;
    /**
     * The time at which this permission will expire (RFC 3339 date-time).
     * Expiration times have the following restrictions:   - They can only be
     * set on user and group permissions  - The time must be in the future  -
     * The time cannot be more than a year in the future
     */
    expirationTime: string;
    /**
     * The ID of this permission. This is a unique identifier for the grantee,
     * and is published in User resources as permissionId.
     */
    id: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#permission&quot;.
     */
    kind: string;
    /**
     * A link to the user&#39;s profile photo, if available.
     */
    photoLink: string;
    /**
     * The role granted by this permission. While new values may be supported in
     * the future, the following are currently allowed:   - organizer  - owner
     * - writer  - commenter  - reader
     */
    role: string;
    /**
     * Details of whether the permissions on this Team Drive item are inherited
     * or directly on this item. This is an output-only field which is present
     * only for Team Drive items.
     */
    teamDrivePermissionDetails: any[];
    /**
     * The type of the grantee. Valid values are:   - user  - group  - domain  -
     * anyone
     */
    type: string;
  }
  /**
   * A list of permissions for a file.
   */
  export interface Schema$PermissionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#permissionList&quot;.
     */
    kind: string;
    /**
     * The page token for the next page of permissions. This field will be
     * absent if the end of the permissions list has been reached. If the token
     * is rejected for any reason, it should be discarded, and pagination should
     * be restarted from the first page of results.
     */
    nextPageToken: string;
    /**
     * The list of permissions. If nextPageToken is populated, then this list
     * may be incomplete and an additional page of results should be fetched.
     */
    permissions: Schema$Permission[];
  }
  /**
   * A reply to a comment on a file.
   */
  export interface Schema$Reply {
    /**
     * The action the reply performed to the parent comment. Valid values are:
     * - resolve  - reopen
     */
    action: string;
    /**
     * The user who created the reply.
     */
    author: Schema$User;
    /**
     * The plain text content of the reply. This field is used for setting the
     * content, while htmlContent should be displayed. This is required on
     * creates if no action is specified.
     */
    content: string;
    /**
     * The time at which the reply was created (RFC 3339 date-time).
     */
    createdTime: string;
    /**
     * Whether the reply has been deleted. A deleted reply has no content.
     */
    deleted: boolean;
    /**
     * The content of the reply with HTML formatting.
     */
    htmlContent: string;
    /**
     * The ID of the reply.
     */
    id: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#reply&quot;.
     */
    kind: string;
    /**
     * The last time the reply was modified (RFC 3339 date-time).
     */
    modifiedTime: string;
  }
  /**
   * A list of replies to a comment on a file.
   */
  export interface Schema$ReplyList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#replyList&quot;.
     */
    kind: string;
    /**
     * The page token for the next page of replies. This will be absent if the
     * end of the replies list has been reached. If the token is rejected for
     * any reason, it should be discarded, and pagination should be restarted
     * from the first page of results.
     */
    nextPageToken: string;
    /**
     * The list of replies. If nextPageToken is populated, then this list may be
     * incomplete and an additional page of results should be fetched.
     */
    replies: Schema$Reply[];
  }
  /**
   * The metadata for a revision to a file.
   */
  export interface Schema$Revision {
    /**
     * The ID of the revision.
     */
    id: string;
    /**
     * Whether to keep this revision forever, even if it is no longer the head
     * revision. If not set, the revision will be automatically purged 30 days
     * after newer content is uploaded. This can be set on a maximum of 200
     * revisions for a file. This field is only applicable to files with binary
     * content in Drive.
     */
    keepForever: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#revision&quot;.
     */
    kind: string;
    /**
     * The last user to modify this revision.
     */
    lastModifyingUser: Schema$User;
    /**
     * The MD5 checksum of the revision&#39;s content. This is only applicable
     * to files with binary content in Drive.
     */
    md5Checksum: string;
    /**
     * The MIME type of the revision.
     */
    mimeType: string;
    /**
     * The last time the revision was modified (RFC 3339 date-time).
     */
    modifiedTime: string;
    /**
     * The original filename used to create this revision. This is only
     * applicable to files with binary content in Drive.
     */
    originalFilename: string;
    /**
     * Whether subsequent revisions will be automatically republished. This is
     * only applicable to Google Docs.
     */
    publishAuto: boolean;
    /**
     * Whether this revision is published. This is only applicable to Google
     * Docs.
     */
    published: boolean;
    /**
     * Whether this revision is published outside the domain. This is only
     * applicable to Google Docs.
     */
    publishedOutsideDomain: boolean;
    /**
     * The size of the revision&#39;s content in bytes. This is only applicable
     * to files with binary content in Drive.
     */
    size: string;
  }
  /**
   * A list of revisions of a file.
   */
  export interface Schema$RevisionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#revisionList&quot;.
     */
    kind: string;
    /**
     * The page token for the next page of revisions. This will be absent if the
     * end of the revisions list has been reached. If the token is rejected for
     * any reason, it should be discarded, and pagination should be restarted
     * from the first page of results.
     */
    nextPageToken: string;
    /**
     * The list of revisions. If nextPageToken is populated, then this list may
     * be incomplete and an additional page of results should be fetched.
     */
    revisions: Schema$Revision[];
  }
  export interface Schema$StartPageToken {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#startPageToken&quot;.
     */
    kind: string;
    /**
     * The starting page token for listing changes.
     */
    startPageToken: string;
  }
  /**
   * Representation of a Team Drive.
   */
  export interface Schema$TeamDrive {
    /**
     * An image file and cropping parameters from which a background image for
     * this Team Drive is set. This is a write only field; it can only be set on
     * drive.teamdrives.update requests that don&#39;t set themeId. When
     * specified, all fields of the backgroundImageFile must be set.
     */
    backgroundImageFile: any;
    /**
     * A short-lived link to this Team Drive&#39;s background image.
     */
    backgroundImageLink: string;
    /**
     * Capabilities the current user has on this Team Drive.
     */
    capabilities: any;
    /**
     * The color of this Team Drive as an RGB hex string. It can only be set on
     * a drive.teamdrives.update request that does not set themeId.
     */
    colorRgb: string;
    /**
     * The time at which the Team Drive was created (RFC 3339 date-time).
     */
    createdTime: string;
    /**
     * The ID of this Team Drive which is also the ID of the top level folder
     * for this Team Drive.
     */
    id: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#teamDrive&quot;.
     */
    kind: string;
    /**
     * The name of this Team Drive.
     */
    name: string;
    /**
     * The ID of the theme from which the background image and color will be
     * set. The set of possible teamDriveThemes can be retrieved from a
     * drive.about.get response. When not specified on a drive.teamdrives.create
     * request, a random theme is chosen from which the background image and
     * color are set. This is a write-only field; it can only be set on requests
     * that don&#39;t set colorRgb or backgroundImageFile.
     */
    themeId: string;
  }
  /**
   * A list of Team Drives.
   */
  export interface Schema$TeamDriveList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#teamDriveList&quot;.
     */
    kind: string;
    /**
     * The page token for the next page of Team Drives. This will be absent if
     * the end of the Team Drives list has been reached. If the token is
     * rejected for any reason, it should be discarded, and pagination should be
     * restarted from the first page of results.
     */
    nextPageToken: string;
    /**
     * The list of Team Drives. If nextPageToken is populated, then this list
     * may be incomplete and an additional page of results should be fetched.
     */
    teamDrives: Schema$TeamDrive[];
  }
  /**
   * Information about a Drive user.
   */
  export interface Schema$User {
    /**
     * A plain text displayable name for this user.
     */
    displayName: string;
    /**
     * The email address of the user. This may not be present in certain
     * contexts if the user has not made their email address visible to the
     * requester.
     */
    emailAddress: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;drive#user&quot;.
     */
    kind: string;
    /**
     * Whether this user is the requesting user.
     */
    me: boolean;
    /**
     * The user&#39;s ID as visible in Permission resources.
     */
    permissionId: string;
    /**
     * A link to the user&#39;s profile photo, if available.
     */
    photoLink: string;
  }

  export class Resource$About {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.about.get
     * @desc Gets information about the user, the user's Drive, and system
     * capabilities.
     * @alias drive.about.get
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$About>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$About>,
        callback?: BodyResponseCallback<Schema$About>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$About>,
        callback?: BodyResponseCallback<Schema$About>):
        void|AxiosPromise<Schema$About> {
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
              url: (rootUrl + '/drive/v3/about').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$About>(parameters, callback);
      } else {
        return createAPIRequest<Schema$About>(parameters);
      }
    }
  }

  export class Resource$Changes {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.changes.getStartPageToken
     * @desc Gets the starting pageToken for listing future changes.
     * @alias drive.changes.getStartPageToken
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {string=} params.teamDriveId The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getStartPageToken(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$StartPageToken>;
    getStartPageToken(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StartPageToken>,
        callback?: BodyResponseCallback<Schema$StartPageToken>): void;
    getStartPageToken(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$StartPageToken>,
        callback?: BodyResponseCallback<Schema$StartPageToken>):
        void|AxiosPromise<Schema$StartPageToken> {
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
              url: (rootUrl + '/drive/v3/changes/startPageToken')
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
        createAPIRequest<Schema$StartPageToken>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StartPageToken>(parameters);
      }
    }


    /**
     * drive.changes.list
     * @desc Lists the changes for a user or Team Drive.
     * @alias drive.changes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean=} params.includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
     * @param {integer=} params.pageSize The maximum number of changes to return per page.
     * @param {string} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean=} params.restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string=} params.spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ChangeList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ChangeList>,
        callback?: BodyResponseCallback<Schema$ChangeList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ChangeList>,
        callback?: BodyResponseCallback<Schema$ChangeList>):
        void|AxiosPromise<Schema$ChangeList> {
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
              url:
                  (rootUrl + '/drive/v3/changes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['pageToken'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ChangeList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChangeList>(parameters);
      }
    }


    /**
     * drive.changes.watch
     * @desc Subscribes to changes for a user.
     * @alias drive.changes.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean=} params.includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
     * @param {integer=} params.pageSize The maximum number of changes to return per page.
     * @param {string} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean=} params.restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string=} params.spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
    watch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
        callback?: BodyResponseCallback<Schema$Channel>): void;
    watch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
        callback?: BodyResponseCallback<Schema$Channel>):
        void|AxiosPromise<Schema$Channel> {
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
              url: (rootUrl + '/drive/v3/changes/watch')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['pageToken'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export class Resource$Channels {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.channels.stop
     * @desc Stop watching resources through this channel
     * @alias drive.channels.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(params?: any, options?: MethodOptions): AxiosPromise<void>;
    stop(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    stop(
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
              url: (rootUrl + '/drive/v3/channels/stop')
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export class Resource$Comments {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.comments.create
     * @desc Creates a new comment on a file.
     * @alias drive.comments.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {().Comment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>):
        void|AxiosPromise<Schema$Comment> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/comments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }


    /**
     * drive.comments.delete
     * @desc Deletes a comment.
     * @alias drive.comments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
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
              url: (rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.comments.get
     * @desc Gets a comment by ID.
     * @alias drive.comments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted Whether to return deleted comments. Deleted comments will not include their original content.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>):
        void|AxiosPromise<Schema$Comment> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }


    /**
     * drive.comments.list
     * @desc Lists a file's comments.
     * @alias drive.comments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted Whether to include deleted comments. Deleted comments will not include their original content.
     * @param {integer=} params.pageSize The maximum number of comments to return per page.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {string=} params.startModifiedTime The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$CommentList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CommentList>,
        callback?: BodyResponseCallback<Schema$CommentList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CommentList>,
        callback?: BodyResponseCallback<Schema$CommentList>):
        void|AxiosPromise<Schema$CommentList> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/comments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CommentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentList>(parameters);
      }
    }


    /**
     * drive.comments.update
     * @desc Updates a comment with patch semantics.
     * @alias drive.comments.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {().Comment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>):
        void|AxiosPromise<Schema$Comment> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }
  }

  export class Resource$Files {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.files.copy
     * @desc Creates a copy of a file and applies any requested updates with
     * patch semantics.
     * @alias drive.files.copy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
     * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {().File} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copy(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
    copy(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>): void;
    copy(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>):
        void|AxiosPromise<Schema$File> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/copy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }


    /**
     * drive.files.create
     * @desc Creates a new file.
     * @alias drive.files.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
     * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the uploaded content as indexable text.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
    create(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>): void;
    create(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>):
        void|AxiosPromise<Schema$File> {
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
              url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl + '/upload/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }


    /**
     * drive.files.delete
     * @desc Permanently deletes a file owned by the user without moving it to
     * the trash. If the file belongs to a Team Drive the user must be an
     * organizer on the parent. If the target is a folder, all descendants owned
     * by the user are also deleted.
     * @alias drive.files.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
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
              url: (rootUrl + '/drive/v3/files/{fileId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.files.emptyTrash
     * @desc Permanently deletes all of the user's trashed files.
     * @alias drive.files.emptyTrash
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    emptyTrash(params?: any, options?: MethodOptions): AxiosPromise<void>;
    emptyTrash(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    emptyTrash(
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
              url: (rootUrl + '/drive/v3/files/trash')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.files.export
     * @desc Exports a Google Doc to the requested MIME type and returns the
     * exported content. Please note that the exported content is limited to
     * 10MB.
     * @alias drive.files.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.mimeType The MIME type of the format requested for this export.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(params?: any, options?: MethodOptions): AxiosPromise<void>;
    export(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    export(
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
              url: (rootUrl + '/drive/v3/files/{fileId}/export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'mimeType'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.files.generateIds
     * @desc Generates a set of file IDs which can be provided in create
     * requests.
     * @alias drive.files.generateIds
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.count The number of IDs to return.
     * @param {string=} params.space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateIds(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$GeneratedIds>;
    generateIds(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$GeneratedIds>,
        callback?: BodyResponseCallback<Schema$GeneratedIds>): void;
    generateIds(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$GeneratedIds>,
        callback?: BodyResponseCallback<Schema$GeneratedIds>):
        void|AxiosPromise<Schema$GeneratedIds> {
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
              url: (rootUrl + '/drive/v3/files/generateIds')
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
        createAPIRequest<Schema$GeneratedIds>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GeneratedIds>(parameters);
      }
    }


    /**
     * drive.files.get
     * @desc Gets a file's metadata or content by ID.
     * @alias drive.files.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
    get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>): void;
    get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>):
        void|AxiosPromise<Schema$File> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }


    /**
     * drive.files.list
     * @desc Lists or searches files.
     * @alias drive.files.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.corpora Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency.
     * @param {string=} params.corpus The source of files to list. Deprecated: use 'corpora' instead.
     * @param {boolean=} params.includeTeamDriveItems Whether Team Drive items should be included in results.
     * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     * @param {integer=} params.pageSize The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {string=} params.q A query for filtering the file results. See the "Search for Files" guide for supported syntax.
     * @param {string=} params.spaces A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {string=} params.teamDriveId ID of Team Drive to search.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$FileList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$FileList>,
        callback?: BodyResponseCallback<Schema$FileList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$FileList>,
        callback?: BodyResponseCallback<Schema$FileList>):
        void|AxiosPromise<Schema$FileList> {
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
              url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FileList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FileList>(parameters);
      }
    }


    /**
     * drive.files.update
     * @desc Updates a file's metadata and/or content with patch semantics.
     * @alias drive.files.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.addParents A comma-separated list of parent IDs to add.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
     * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {string=} params.removeParents A comma-separated list of parent IDs to remove.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the uploaded content as indexable text.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
    update(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>): void;
    update(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
        callback?: BodyResponseCallback<Schema$File>):
        void|AxiosPromise<Schema$File> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v3/files/{fileId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }


    /**
     * drive.files.watch
     * @desc Subscribes to changes to a file
     * @alias drive.files.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
    watch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
        callback?: BodyResponseCallback<Schema$Channel>): void;
    watch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
        callback?: BodyResponseCallback<Schema$Channel>):
        void|AxiosPromise<Schema$Channel> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/watch')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export class Resource$Permissions {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.permissions.create
     * @desc Creates a permission for a file or Team Drive.
     * @alias drive.permissions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.emailMessage A plain text custom message to include in the notification email.
     * @param {string} params.fileId The ID of the file or Team Drive.
     * @param {boolean=} params.sendNotificationEmail Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
     * @param {().Permission} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Permission>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
        callback?: BodyResponseCallback<Schema$Permission>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
        callback?: BodyResponseCallback<Schema$Permission>):
        void|AxiosPromise<Schema$Permission> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/permissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }


    /**
     * drive.permissions.delete
     * @desc Deletes a permission.
     * @alias drive.permissions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file or Team Drive.
     * @param {string} params.permissionId The ID of the permission.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
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
              url: (rootUrl +
                    '/drive/v3/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.permissions.get
     * @desc Gets a permission by ID.
     * @alias drive.permissions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.permissionId The ID of the permission.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Permission>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
        callback?: BodyResponseCallback<Schema$Permission>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
        callback?: BodyResponseCallback<Schema$Permission>):
        void|AxiosPromise<Schema$Permission> {
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
              url: (rootUrl +
                    '/drive/v3/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }


    /**
     * drive.permissions.list
     * @desc Lists a file's or Team Drive's permissions.
     * @alias drive.permissions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file or Team Drive.
     * @param {integer=} params.pageSize The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$PermissionList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$PermissionList>,
        callback?: BodyResponseCallback<Schema$PermissionList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$PermissionList>,
        callback?: BodyResponseCallback<Schema$PermissionList>):
        void|AxiosPromise<Schema$PermissionList> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/permissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PermissionList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PermissionList>(parameters);
      }
    }


    /**
     * drive.permissions.update
     * @desc Updates a permission with patch semantics.
     * @alias drive.permissions.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file or Team Drive.
     * @param {string} params.permissionId The ID of the permission.
     * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
     * @param {().Permission} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Permission>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
        callback?: BodyResponseCallback<Schema$Permission>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
        callback?: BodyResponseCallback<Schema$Permission>):
        void|AxiosPromise<Schema$Permission> {
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
              url: (rootUrl +
                    '/drive/v3/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }
  }

  export class Resource$Replies {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.replies.create
     * @desc Creates a new reply to a comment.
     * @alias drive.replies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {().Reply} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Reply>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reply>,
        callback?: BodyResponseCallback<Schema$Reply>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reply>,
        callback?: BodyResponseCallback<Schema$Reply>):
        void|AxiosPromise<Schema$Reply> {
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
              url: (rootUrl +
                    '/drive/v3/files/{fileId}/comments/{commentId}/replies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }


    /**
     * drive.replies.delete
     * @desc Deletes a reply.
     * @alias drive.replies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.replyId The ID of the reply.
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
              url:
                  (rootUrl +
                   '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.replies.get
     * @desc Gets a reply by ID.
     * @alias drive.replies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted Whether to return deleted replies. Deleted replies will not include their original content.
     * @param {string} params.replyId The ID of the reply.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Reply>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reply>,
        callback?: BodyResponseCallback<Schema$Reply>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reply>,
        callback?: BodyResponseCallback<Schema$Reply>):
        void|AxiosPromise<Schema$Reply> {
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
              url:
                  (rootUrl +
                   '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }


    /**
     * drive.replies.list
     * @desc Lists a comment's replies.
     * @alias drive.replies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted Whether to include deleted replies. Deleted replies will not include their original content.
     * @param {integer=} params.pageSize The maximum number of replies to return per page.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$ReplyList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReplyList>,
        callback?: BodyResponseCallback<Schema$ReplyList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReplyList>,
        callback?: BodyResponseCallback<Schema$ReplyList>):
        void|AxiosPromise<Schema$ReplyList> {
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
              url: (rootUrl +
                    '/drive/v3/files/{fileId}/comments/{commentId}/replies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ReplyList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReplyList>(parameters);
      }
    }


    /**
     * drive.replies.update
     * @desc Updates a reply with patch semantics.
     * @alias drive.replies.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.replyId The ID of the reply.
     * @param {().Reply} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Reply>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reply>,
        callback?: BodyResponseCallback<Schema$Reply>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reply>,
        callback?: BodyResponseCallback<Schema$Reply>):
        void|AxiosPromise<Schema$Reply> {
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
              url:
                  (rootUrl +
                   '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }
  }

  export class Resource$Revisions {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.revisions.delete
     * @desc Permanently deletes a revision. This method is only applicable to
     * files with binary content in Drive.
     * @alias drive.revisions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.revisionId The ID of the revision.
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
              url: (rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.revisions.get
     * @desc Gets a revision's metadata or content by ID.
     * @alias drive.revisions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.revisionId The ID of the revision.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Revision>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Revision>,
        callback?: BodyResponseCallback<Schema$Revision>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Revision>,
        callback?: BodyResponseCallback<Schema$Revision>):
        void|AxiosPromise<Schema$Revision> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }


    /**
     * drive.revisions.list
     * @desc Lists a file's revisions.
     * @alias drive.revisions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {integer=} params.pageSize The maximum number of revisions to return per page.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$RevisionList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$RevisionList>,
        callback?: BodyResponseCallback<Schema$RevisionList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$RevisionList>,
        callback?: BodyResponseCallback<Schema$RevisionList>):
        void|AxiosPromise<Schema$RevisionList> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/revisions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RevisionList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RevisionList>(parameters);
      }
    }


    /**
     * drive.revisions.update
     * @desc Updates a revision with patch semantics.
     * @alias drive.revisions.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.revisionId The ID of the revision.
     * @param {().Revision} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Revision>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Revision>,
        callback?: BodyResponseCallback<Schema$Revision>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Revision>,
        callback?: BodyResponseCallback<Schema$Revision>):
        void|AxiosPromise<Schema$Revision> {
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
              url: (rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }
  }

  export class Resource$Teamdrives {
    root: Drive;
    constructor(root: Drive) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * drive.teamdrives.create
     * @desc Creates a new Team Drive.
     * @alias drive.teamdrives.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     * @param {().TeamDrive} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$TeamDrive>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
        callback?: BodyResponseCallback<Schema$TeamDrive>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
        callback?: BodyResponseCallback<Schema$TeamDrive>):
        void|AxiosPromise<Schema$TeamDrive> {
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
              url: (rootUrl + '/drive/v3/teamdrives')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }


    /**
     * drive.teamdrives.delete
     * @desc Permanently deletes a Team Drive for which the user is an
     * organizer. The Team Drive cannot contain any untrashed items.
     * @alias drive.teamdrives.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
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
              url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * drive.teamdrives.get
     * @desc Gets a Team Drive's metadata by ID.
     * @alias drive.teamdrives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$TeamDrive>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
        callback?: BodyResponseCallback<Schema$TeamDrive>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
        callback?: BodyResponseCallback<Schema$TeamDrive>):
        void|AxiosPromise<Schema$TeamDrive> {
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
              url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }


    /**
     * drive.teamdrives.list
     * @desc Lists the user's Team Drives.
     * @alias drive.teamdrives.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of Team Drives to return.
     * @param {string=} params.pageToken Page token for Team Drives.
     * @param {string=} params.q Query string for searching Team Drives.
     * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$TeamDriveList>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDriveList>,
        callback?: BodyResponseCallback<Schema$TeamDriveList>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDriveList>,
        callback?: BodyResponseCallback<Schema$TeamDriveList>):
        void|AxiosPromise<Schema$TeamDriveList> {
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
              url: (rootUrl + '/drive/v3/teamdrives')
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
        createAPIRequest<Schema$TeamDriveList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDriveList>(parameters);
      }
    }


    /**
     * drive.teamdrives.update
     * @desc Updates a Team Drive's metadata
     * @alias drive.teamdrives.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
     * @param {().TeamDrive} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$TeamDrive>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
        callback?: BodyResponseCallback<Schema$TeamDrive>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
        callback?: BodyResponseCallback<Schema$TeamDrive>):
        void|AxiosPromise<Schema$TeamDrive> {
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
              url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }
  }
}
