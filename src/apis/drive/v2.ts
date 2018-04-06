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
 * Drive API
 *
 * Manages files in Drive including uploading, downloading, searching, detecting
 * changes, and updating sharing permissions.
 *
 * @example
 * const google = require('googleapis');
 * const drive = google.drive('v2');
 *
 * @namespace drive
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Drive
 */
export class Drive {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  about: Resource$About;
  apps: Resource$Apps;
  changes: Resource$Changes;
  channels: Resource$Channels;
  children: Resource$Children;
  comments: Resource$Comments;
  files: Resource$Files;
  parents: Resource$Parents;
  permissions: Resource$Permissions;
  properties: Resource$Properties;
  realtime: Resource$Realtime;
  replies: Resource$Replies;
  revisions: Resource$Revisions;
  teamdrives: Resource$Teamdrives;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.about = new Resource$About(this);
    this.apps = new Resource$Apps(this);
    this.changes = new Resource$Changes(this);
    this.channels = new Resource$Channels(this);
    this.children = new Resource$Children(this);
    this.comments = new Resource$Comments(this);
    this.files = new Resource$Files(this);
    this.parents = new Resource$Parents(this);
    this.permissions = new Resource$Permissions(this);
    this.properties = new Resource$Properties(this);
    this.realtime = new Resource$Realtime(this);
    this.replies = new Resource$Replies(this);
    this.revisions = new Resource$Revisions(this);
    this.teamdrives = new Resource$Teamdrives(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * An item with user information and settings.
 */
export interface Schema$About {
  /**
   * Information about supported additional roles per file type. The most
   * specific type takes precedence.
   */
  additionalRoleInfo: any[];
  /**
   * Whether the user can create Team Drives.
   */
  canCreateTeamDrives: boolean;
  /**
   * The domain sharing policy for the current user. Possible values are:   -
   * allowed  - allowedWithWarning  - incomingOnly  - disallowed
   */
  domainSharingPolicy: string;
  /**
   * The ETag of the item.
   */
  etag: string;
  /**
   * The allowable export formats.
   */
  exportFormats: any[];
  /**
   * List of additional features enabled on this account.
   */
  features: any[];
  /**
   * The palette of allowable folder colors as RGB hex strings.
   */
  folderColorPalette: string[];
  /**
   * The allowable import formats.
   */
  importFormats: any[];
  /**
   * A boolean indicating whether the authenticated app is installed by the
   * authenticated user.
   */
  isCurrentAppInstalled: boolean;
  /**
   * This is always drive#about.
   */
  kind: string;
  /**
   * The user&#39;s language or locale code, as defined by BCP 47, with some
   * extensions from Unicode&#39;s LDML format
   * (http://www.unicode.org/reports/tr35/).
   */
  languageCode: string;
  /**
   * The largest change id.
   */
  largestChangeId: string;
  /**
   * List of max upload sizes for each file type. The most specific type takes
   * precedence.
   */
  maxUploadSizes: any[];
  /**
   * The name of the current user.
   */
  name: string;
  /**
   * The current user&#39;s ID as visible in the permissions collection.
   */
  permissionId: string;
  /**
   * The amount of storage quota used by different Google services.
   */
  quotaBytesByService: any[];
  /**
   * The total number of quota bytes.
   */
  quotaBytesTotal: string;
  /**
   * The number of quota bytes used by Google Drive.
   */
  quotaBytesUsed: string;
  /**
   * The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
   */
  quotaBytesUsedAggregate: string;
  /**
   * The number of quota bytes used by trashed items.
   */
  quotaBytesUsedInTrash: string;
  /**
   * The type of the user&#39;s storage quota. Possible values are:   - LIMITED
   * - UNLIMITED
   */
  quotaType: string;
  /**
   * The number of remaining change ids, limited to no more than 2500.
   */
  remainingChangeIds: string;
  /**
   * The id of the root folder.
   */
  rootFolderId: string;
  /**
   * A link back to this item.
   */
  selfLink: string;
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
 * The apps resource provides a list of the apps that a user has installed, with
 * information about each app&#39;s supported MIME types, file extensions, and
 * other details.
 */
export interface Schema$App {
  /**
   * Whether the app is authorized to access data on the user&#39;s Drive.
   */
  authorized: boolean;
  /**
   * The template url to create a new file with this app in a given folder. The
   * template will contain {folderId} to be replaced by the folder to create the
   * new file in.
   */
  createInFolderTemplate: string;
  /**
   * The url to create a new file with this app.
   */
  createUrl: string;
  /**
   * Whether the app has drive-wide scope. An app with drive-wide scope can
   * access all files in the user&#39;s drive.
   */
  hasDriveWideScope: boolean;
  /**
   * The various icons for the app.
   */
  icons: any[];
  /**
   * The ID of the app.
   */
  id: string;
  /**
   * Whether the app is installed.
   */
  installed: boolean;
  /**
   * This is always drive#app.
   */
  kind: string;
  /**
   * A long description of the app.
   */
  longDescription: string;
  /**
   * The name of the app.
   */
  name: string;
  /**
   * The type of object this app creates (e.g. Chart). If empty, the app name
   * should be used instead.
   */
  objectType: string;
  /**
   * The template url for opening files with this app. The template will contain
   * {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open
   * Files  for the full documentation.
   */
  openUrlTemplate: string;
  /**
   * The list of primary file extensions.
   */
  primaryFileExtensions: string[];
  /**
   * The list of primary mime types.
   */
  primaryMimeTypes: string[];
  /**
   * The ID of the product listing for this app.
   */
  productId: string;
  /**
   * A link to the product listing for this app.
   */
  productUrl: string;
  /**
   * The list of secondary file extensions.
   */
  secondaryFileExtensions: string[];
  /**
   * The list of secondary mime types.
   */
  secondaryMimeTypes: string[];
  /**
   * A short description of the app.
   */
  shortDescription: string;
  /**
   * Whether this app supports creating new objects.
   */
  supportsCreate: boolean;
  /**
   * Whether this app supports importing Google Docs.
   */
  supportsImport: boolean;
  /**
   * Whether this app supports opening more than one file.
   */
  supportsMultiOpen: boolean;
  /**
   * Whether this app supports creating new files when offline.
   */
  supportsOfflineCreate: boolean;
  /**
   * Whether the app is selected as the default handler for the types it
   * supports.
   */
  useByDefault: boolean;
}
/**
 * A list of third-party applications which the user has installed or given
 * access to Google Drive.
 */
export interface Schema$AppList {
  /**
   * List of app IDs that the user has specified to use by default. The list is
   * in reverse-priority order (lowest to highest).
   */
  defaultAppIds: string[];
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of apps.
   */
  items: Schema$App[];
  /**
   * This is always drive#appList.
   */
  kind: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * Representation of a change to a file or Team Drive.
 */
export interface Schema$Change {
  /**
   * Whether the file or Team Drive has been removed from this list of changes,
   * for example by deletion or loss of access.
   */
  deleted: boolean;
  /**
   * The updated state of the file. Present if the type is file and the file has
   * not been removed from this list of changes.
   */
  file: Schema$File;
  /**
   * The ID of the file associated with this change.
   */
  fileId: string;
  /**
   * The ID of the change.
   */
  id: string;
  /**
   * This is always drive#change.
   */
  kind: string;
  /**
   * The time of this modification.
   */
  modificationDate: string;
  /**
   * A link back to this change.
   */
  selfLink: string;
  /**
   * The updated state of the Team Drive. Present if the type is teamDrive, the
   * user is still a member of the Team Drive, and the Team Drive has not been
   * deleted.
   */
  teamDrive: Schema$TeamDrive;
  /**
   * The ID of the Team Drive associated with this change.
   */
  teamDriveId: string;
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
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of changes. If nextPageToken is populated, then this list may be
   * incomplete and an additional page of results should be fetched.
   */
  items: Schema$Change[];
  /**
   * This is always drive#changeList.
   */
  kind: string;
  /**
   * The current largest change ID.
   */
  largestChangeId: string;
  /**
   * The starting page token for future changes. This will be present only if
   * the end of the current changes list has been reached.
   */
  newStartPageToken: string;
  /**
   * A link to the next page of changes.
   */
  nextLink: string;
  /**
   * The page token for the next page of changes. This will be absent if the end
   * of the changes list has been reached. If the token is rejected for any
   * reason, it should be discarded, and pagination should be restarted from the
   * first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
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
   * An arbitrary string delivered to the target address with each notification
   * delivered over this channel. Optional.
   */
  token: string;
  /**
   * The type of delivery mechanism used for this channel.
   */
  type: string;
}
/**
 * A list of children of a file.
 */
export interface Schema$ChildList {
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of children. If nextPageToken is populated, then this list may be
   * incomplete and an additional page of results should be fetched.
   */
  items: Schema$ChildReference[];
  /**
   * This is always drive#childList.
   */
  kind: string;
  /**
   * A link to the next page of children.
   */
  nextLink: string;
  /**
   * The page token for the next page of children. This will be absent if the
   * end of the children list has been reached. If the token is rejected for any
   * reason, it should be discarded, and pagination should be restarted from the
   * first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * A reference to a folder&#39;s child.
 */
export interface Schema$ChildReference {
  /**
   * A link to the child.
   */
  childLink: string;
  /**
   * The ID of the child.
   */
  id: string;
  /**
   * This is always drive#childReference.
   */
  kind: string;
  /**
   * A link back to this reference.
   */
  selfLink: string;
}
/**
 * A comment on a file in Google Drive.
 */
export interface Schema$Comment {
  /**
   * A region of the document represented as a JSON string. See anchor
   * documentation for details on how to define and interpret anchor properties.
   */
  anchor: string;
  /**
   * The user who wrote this comment.
   */
  author: Schema$User;
  /**
   * The ID of the comment.
   */
  commentId: string;
  /**
   * The plain text content used to create this comment. This is not HTML safe
   * and should only be used as a starting point to make edits to a
   * comment&#39;s content.
   */
  content: string;
  /**
   * The context of the file which is being commented on.
   */
  context: any;
  /**
   * The date when this comment was first created.
   */
  createdDate: string;
  /**
   * Whether this comment has been deleted. If a comment has been deleted the
   * content will be cleared and this will only represent a comment that once
   * existed.
   */
  deleted: boolean;
  /**
   * The file which this comment is addressing.
   */
  fileId: string;
  /**
   * The title of the file which this comment is addressing.
   */
  fileTitle: string;
  /**
   * HTML formatted content for this comment.
   */
  htmlContent: string;
  /**
   * This is always drive#comment.
   */
  kind: string;
  /**
   * The date when this comment or any of its replies were last modified.
   */
  modifiedDate: string;
  /**
   * Replies to this post.
   */
  replies: Schema$CommentReply[];
  /**
   * A link back to this comment.
   */
  selfLink: string;
  /**
   * The status of this comment. Status can be changed by posting a reply to a
   * comment with the desired status.   - &quot;open&quot; - The comment is
   * still open.  - &quot;resolved&quot; - The comment has been resolved by one
   * of its replies.
   */
  status: string;
}
/**
 * A list of comments on a file in Google Drive.
 */
export interface Schema$CommentList {
  /**
   * The list of comments. If nextPageToken is populated, then this list may be
   * incomplete and an additional page of results should be fetched.
   */
  items: Schema$Comment[];
  /**
   * This is always drive#commentList.
   */
  kind: string;
  /**
   * A link to the next page of comments.
   */
  nextLink: string;
  /**
   * The page token for the next page of comments. This will be absent if the
   * end of the comments list has been reached. If the token is rejected for any
   * reason, it should be discarded, and pagination should be restarted from the
   * first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * A comment on a file in Google Drive.
 */
export interface Schema$CommentReply {
  /**
   * The user who wrote this reply.
   */
  author: Schema$User;
  /**
   * The plain text content used to create this reply. This is not HTML safe and
   * should only be used as a starting point to make edits to a reply&#39;s
   * content. This field is required on inserts if no verb is specified
   * (resolve/reopen).
   */
  content: string;
  /**
   * The date when this reply was first created.
   */
  createdDate: string;
  /**
   * Whether this reply has been deleted. If a reply has been deleted the
   * content will be cleared and this will only represent a reply that once
   * existed.
   */
  deleted: boolean;
  /**
   * HTML formatted content for this reply.
   */
  htmlContent: string;
  /**
   * This is always drive#commentReply.
   */
  kind: string;
  /**
   * The date when this reply was last modified.
   */
  modifiedDate: string;
  /**
   * The ID of the reply.
   */
  replyId: string;
  /**
   * The action this reply performed to the parent comment. When creating a new
   * reply this is the action to be perform to the parent comment. Possible
   * values are:   - &quot;resolve&quot; - To resolve a comment.  -
   * &quot;reopen&quot; - To reopen (un-resolve) a comment.
   */
  verb: string;
}
/**
 * A list of replies to a comment on a file in Google Drive.
 */
export interface Schema$CommentReplyList {
  /**
   * The list of replies. If nextPageToken is populated, then this list may be
   * incomplete and an additional page of results should be fetched.
   */
  items: Schema$CommentReply[];
  /**
   * This is always drive#commentReplyList.
   */
  kind: string;
  /**
   * A link to the next page of replies.
   */
  nextLink: string;
  /**
   * The page token for the next page of replies. This will be absent if the end
   * of the replies list has been reached. If the token is rejected for any
   * reason, it should be discarded, and pagination should be restarted from the
   * first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * The metadata for a file.
 */
export interface Schema$File {
  /**
   * A link for opening the file in a relevant Google editor or viewer.
   */
  alternateLink: string;
  /**
   * Whether this file is in the Application Data folder.
   */
  appDataContents: boolean;
  /**
   * Deprecated: use capabilities/canComment.
   */
  canComment: boolean;
  /**
   * Deprecated: use capabilities/canReadRevisions.
   */
  canReadRevisions: boolean;
  /**
   * Capabilities the current user has on this file. Each capability corresponds
   * to a fine-grained action that a user may take.
   */
  capabilities: any;
  /**
   * Deprecated: use capabilities/canCopy.
   */
  copyable: boolean;
  /**
   * Create time for this file (formatted RFC 3339 timestamp).
   */
  createdDate: string;
  /**
   * A link to open this file with the user&#39;s default app for this file.
   * Only populated when the drive.apps.readonly scope is used.
   */
  defaultOpenWithLink: string;
  /**
   * A short description of the file.
   */
  description: string;
  downloadUrl: string;
  /**
   * Deprecated: use capabilities/canEdit.
   */
  editable: boolean;
  /**
   * A link for embedding the file.
   */
  embedLink: string;
  /**
   * ETag of the file.
   */
  etag: string;
  /**
   * Whether this file has been explicitly trashed, as opposed to recursively
   * trashed.
   */
  explicitlyTrashed: boolean;
  /**
   * Links for exporting Google Docs to specific formats.
   */
  exportLinks: any;
  /**
   * The final component of fullFileExtension with trailing text that does not
   * appear to be part of the extension removed. This field is only populated
   * for files with content stored in Drive; it is not populated for Google Docs
   * or shortcut files.
   */
  fileExtension: string;
  /**
   * The size of the file in bytes. This field is only populated for files with
   * content stored in Drive; it is not populated for Google Docs or shortcut
   * files.
   */
  fileSize: string;
  /**
   * Folder color as an RGB hex string if the file is a folder. The list of
   * supported colors is available in the folderColorPalette field of the About
   * resource. If an unsupported color is specified, it will be changed to the
   * closest color in the palette. Not populated for Team Drive files.
   */
  folderColorRgb: string;
  /**
   * The full file extension; extracted from the title. May contain multiple
   * concatenated extensions, such as &quot;tar.gz&quot;. Removing an extension
   * from the title does not clear this field; however, changing the extension
   * on the title does update this field. This field is only populated for files
   * with content stored in Drive; it is not populated for Google Docs or
   * shortcut files.
   */
  fullFileExtension: string;
  /**
   * Whether any users are granted file access directly on this file. This field
   * is only populated for Team Drive files.
   */
  hasAugmentedPermissions: boolean;
  /**
   * Whether this file has a thumbnail. This does not indicate whether the
   * requesting app has access to the thumbnail. To check access, look for the
   * presence of the thumbnailLink field.
   */
  hasThumbnail: boolean;
  /**
   * The ID of the file&#39;s head revision. This field is only populated for
   * files with content stored in Drive; it is not populated for Google Docs or
   * shortcut files.
   */
  headRevisionId: string;
  /**
   * A link to the file&#39;s icon.
   */
  iconLink: string;
  /**
   * The ID of the file.
   */
  id: string;
  /**
   * Metadata about image media. This will only be present for image types, and
   * its contents will depend on what can be parsed from the image content.
   */
  imageMediaMetadata: any;
  /**
   * Indexable text attributes for the file (can only be written)
   */
  indexableText: any;
  /**
   * Whether the file was created or opened by the requesting app.
   */
  isAppAuthorized: boolean;
  /**
   * The type of file. This is always drive#file.
   */
  kind: string;
  /**
   * A group of labels for the file.
   */
  labels: any;
  /**
   * The last user to modify this file.
   */
  lastModifyingUser: Schema$User;
  /**
   * Name of the last user to modify this file.
   */
  lastModifyingUserName: string;
  /**
   * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
   */
  lastViewedByMeDate: string;
  /**
   * Deprecated.
   */
  markedViewedByMeDate: string;
  /**
   * An MD5 checksum for the content of this file. This field is only populated
   * for files with content stored in Drive; it is not populated for Google Docs
   * or shortcut files.
   */
  md5Checksum: string;
  /**
   * The MIME type of the file. This is only mutable on update when uploading
   * new content. This field can be left blank, and the mimetype will be
   * determined from the uploaded content&#39;s MIME type.
   */
  mimeType: string;
  /**
   * Last time this file was modified by the user (formatted RFC 3339
   * timestamp). Note that setting modifiedDate will also update the
   * modifiedByMe date for the user which set the date.
   */
  modifiedByMeDate: string;
  /**
   * Last time this file was modified by anyone (formatted RFC 3339 timestamp).
   * This is only mutable on update when the setModifiedDate parameter is set.
   */
  modifiedDate: string;
  /**
   * A map of the id of each of the user&#39;s apps to a link to open this file
   * with that app. Only populated when the drive.apps.readonly scope is used.
   */
  openWithLinks: any;
  /**
   * The original filename of the uploaded content if available, or else the
   * original value of the title field. This is only available for files with
   * binary content in Drive.
   */
  originalFilename: string;
  /**
   * Whether the file is owned by the current user. Not populated for Team Drive
   * files.
   */
  ownedByMe: boolean;
  /**
   * Name(s) of the owner(s) of this file. Not populated for Team Drive files.
   */
  ownerNames: string[];
  /**
   * The owner(s) of this file. Not populated for Team Drive files.
   */
  owners: Schema$User[];
  /**
   * Collection of parent folders which contain this file. If not specified as
   * part of an insert request, the file will be placed directly in the
   * user&#39;s My Drive folder. If not specified as part of a copy request, the
   * file will inherit any discoverable parents of the source file. Update
   * requests can also use the addParents and removeParents parameters to modify
   * the parents list.
   */
  parents: Schema$ParentReference[];
  /**
   * List of permission IDs for users with access to this file.
   */
  permissionIds: string[];
  /**
   * The list of permissions for users with access to this file. Not populated
   * for Team Drive files.
   */
  permissions: Schema$Permission[];
  /**
   * The list of properties.
   */
  properties: Schema$Property[];
  /**
   * The number of quota bytes used by this file.
   */
  quotaBytesUsed: string;
  /**
   * A link back to this file.
   */
  selfLink: string;
  /**
   * Deprecated: use capabilities/canShare.
   */
  shareable: boolean;
  /**
   * Whether the file has been shared. Not populated for Team Drive files.
   */
  shared: boolean;
  /**
   * Time at which this file was shared with the user (formatted RFC 3339
   * timestamp).
   */
  sharedWithMeDate: string;
  /**
   * User that shared the item with the current user, if available.
   */
  sharingUser: Schema$User;
  /**
   * The list of spaces which contain the file. Supported values are
   * &#39;drive&#39;, &#39;appDataFolder&#39; and &#39;photos&#39;.
   */
  spaces: string[];
  /**
   * ID of the Team Drive the file resides in.
   */
  teamDriveId: string;
  /**
   * A thumbnail for the file. This will only be used if Drive cannot generate a
   * standard thumbnail.
   */
  thumbnail: any;
  /**
   * A short-lived link to the file&#39;s thumbnail. Typically lasts on the
   * order of hours. Only populated when the requesting app can access the
   * file&#39;s content.
   */
  thumbnailLink: string;
  /**
   * The thumbnail version for use in thumbnail cache invalidation.
   */
  thumbnailVersion: string;
  /**
   * The title of this file. Note that for immutable items such as the top level
   * folders of Team Drives, My Drive root folder, and Application Data folder
   * the title is constant.
   */
  title: string;
  /**
   * The time that the item was trashed (formatted RFC 3339 timestamp). Only
   * populated for Team Drive files.
   */
  trashedDate: string;
  /**
   * If the file has been explicitly trashed, the user who trashed it. Only
   * populated for Team Drive files.
   */
  trashingUser: Schema$User;
  /**
   * The permissions for the authenticated user on this file.
   */
  userPermission: Schema$Permission;
  /**
   * A monotonically increasing version number for the file. This reflects every
   * change made to the file on the server, even those not visible to the
   * requesting user.
   */
  version: string;
  /**
   * Metadata about video media. This will only be present for video types.
   */
  videoMediaMetadata: any;
  /**
   * A link for downloading the content of the file in a browser using cookie
   * based authentication. In cases where the content is shared publicly, the
   * content can be downloaded without any credentials.
   */
  webContentLink: string;
  /**
   * A link only available on public folders for viewing their static web assets
   * (HTML, CSS, JS, etc) via Google Drive&#39;s Website Hosting.
   */
  webViewLink: string;
  /**
   * Whether writers can share the document with other users. Not populated for
   * Team Drive files.
   */
  writersCanShare: boolean;
}
/**
 * A list of files.
 */
export interface Schema$FileList {
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * Whether the search process was incomplete. If true, then some search
   * results may be missing, since all documents were not searched. This may
   * occur when searching multiple Team Drives with the
   * &quot;default,allTeamDrives&quot; corpora, but all corpora could not be
   * searched. When this happens, it is suggested that clients narrow their
   * query by choosing a different corpus such as &quot;default&quot; or
   * &quot;teamDrive&quot;.
   */
  incompleteSearch: boolean;
  /**
   * The list of files. If nextPageToken is populated, then this list may be
   * incomplete and an additional page of results should be fetched.
   */
  items: Schema$File[];
  /**
   * This is always drive#fileList.
   */
  kind: string;
  /**
   * A link to the next page of files.
   */
  nextLink: string;
  /**
   * The page token for the next page of files. This will be absent if the end
   * of the files list has been reached. If the token is rejected for any
   * reason, it should be discarded, and pagination should be restarted from the
   * first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * A list of generated IDs which can be provided in insert requests
 */
export interface Schema$GeneratedIds {
  /**
   * The IDs generated for the requesting user in the specified space.
   */
  ids: string[];
  /**
   * This is always drive#generatedIds
   */
  kind: string;
  /**
   * The type of file that can be created with these IDs.
   */
  space: string;
}
/**
 * A list of a file&#39;s parents.
 */
export interface Schema$ParentList {
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of parents.
   */
  items: Schema$ParentReference[];
  /**
   * This is always drive#parentList.
   */
  kind: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * A reference to a file&#39;s parent.
 */
export interface Schema$ParentReference {
  /**
   * The ID of the parent.
   */
  id: string;
  /**
   * Whether or not the parent is the root folder.
   */
  isRoot: boolean;
  /**
   * This is always drive#parentReference.
   */
  kind: string;
  /**
   * A link to the parent.
   */
  parentLink: string;
  /**
   * A link back to this reference.
   */
  selfLink: string;
}
/**
 * A permission for a file.
 */
export interface Schema$Permission {
  /**
   * Additional roles for this user. Only commenter is currently allowed, though
   * more may be supported in the future.
   */
  additionalRoles: string[];
  /**
   * Deprecated.
   */
  authKey: string;
  /**
   * Whether the account associated with this permission has been deleted. This
   * field only pertains to user and group permissions.
   */
  deleted: boolean;
  /**
   * The domain name of the entity this permission refers to. This is an
   * output-only field which is present when the permission type is user, group
   * or domain.
   */
  domain: string;
  /**
   * The email address of the user or group this permission refers to. This is
   * an output-only field which is present when the permission type is user or
   * group.
   */
  emailAddress: string;
  /**
   * The ETag of the permission.
   */
  etag: string;
  /**
   * The time at which this permission will expire (RFC 3339 date-time).
   * Expiration dates have the following restrictions:   - They can only be set
   * on user and group permissions  - The date must be in the future  - The date
   * cannot be more than a year in the future  - The date can only be set on
   * drive.permissions.update or drive.permissions.patch requests
   */
  expirationDate: string;
  /**
   * The ID of the user this permission refers to, and identical to the
   * permissionId in the About and Files resources. When making a
   * drive.permissions.insert request, exactly one of the id or value fields
   * must be specified unless the permission type is anyone, in which case both
   * id and value are ignored.
   */
  id: string;
  /**
   * This is always drive#permission.
   */
  kind: string;
  /**
   * The name for this permission.
   */
  name: string;
  /**
   * A link to the profile photo, if available.
   */
  photoLink: string;
  /**
   * The primary role for this user. While new values may be supported in the
   * future, the following are currently allowed:   - organizer  - owner  -
   * reader  - writer
   */
  role: string;
  /**
   * A link back to this permission.
   */
  selfLink: string;
  /**
   * Details of whether the permissions on this Team Drive item are inherited or
   * directly on this item. This is an output-only field which is present only
   * for Team Drive items.
   */
  teamDrivePermissionDetails: any[];
  /**
   * The account type. Allowed values are:   - user  - group  - domain  - anyone
   */
  type: string;
  /**
   * The email address or domain name for the entity. This is used during
   * inserts and is not populated in responses. When making a
   * drive.permissions.insert request, exactly one of the id or value fields
   * must be specified unless the permission type is anyone, in which case both
   * id and value are ignored.
   */
  value: string;
  /**
   * Whether the link is required for this permission.
   */
  withLink: boolean;
}
/**
 * An ID for a user or group as seen in Permission items.
 */
export interface Schema$PermissionId {
  /**
   * The permission ID.
   */
  id: string;
  /**
   * This is always drive#permissionId.
   */
  kind: string;
}
/**
 * A list of permissions associated with a file.
 */
export interface Schema$PermissionList {
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of permissions.
   */
  items: Schema$Permission[];
  /**
   * This is always drive#permissionList.
   */
  kind: string;
  /**
   * The page token for the next page of permissions. This field will be absent
   * if the end of the permissions list has been reached. If the token is
   * rejected for any reason, it should be discarded, and pagination should be
   * restarted from the first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
}
/**
 * A key-value pair attached to a file that is either public or private to an
 * application. The following limits apply to file properties:   - Maximum of
 * 100 properties total per file - Maximum of 30 private properties per app -
 * Maximum of 30 public properties - Maximum of 124 bytes size limit on (key +
 * value) string in UTF-8 encoding for a single property.
 */
export interface Schema$Property {
  /**
   * ETag of the property.
   */
  etag: string;
  /**
   * The key of this property.
   */
  key: string;
  /**
   * This is always drive#property.
   */
  kind: string;
  /**
   * The link back to this property.
   */
  selfLink: string;
  /**
   * The value of this property.
   */
  value: string;
  /**
   * The visibility of this property. Allowed values are PRIVATE and PUBLIC.
   * (Default: PRIVATE)
   */
  visibility: string;
}
/**
 * A collection of properties, key-value pairs that are either public or private
 * to an application.
 */
export interface Schema$PropertyList {
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of properties.
   */
  items: Schema$Property[];
  /**
   * This is always drive#propertyList.
   */
  kind: string;
  /**
   * The link back to this list.
   */
  selfLink: string;
}
/**
 * A revision of a file.
 */
export interface Schema$Revision {
  /**
   * Short term download URL for the file. This will only be populated on files
   * with content stored in Drive.
   */
  downloadUrl: string;
  /**
   * The ETag of the revision.
   */
  etag: string;
  /**
   * Links for exporting Google Docs to specific formats.
   */
  exportLinks: any;
  /**
   * The size of the revision in bytes. This will only be populated on files
   * with content stored in Drive.
   */
  fileSize: string;
  /**
   * The ID of the revision.
   */
  id: string;
  /**
   * This is always drive#revision.
   */
  kind: string;
  /**
   * The last user to modify this revision.
   */
  lastModifyingUser: Schema$User;
  /**
   * Name of the last user to modify this revision.
   */
  lastModifyingUserName: string;
  /**
   * An MD5 checksum for the content of this revision. This will only be
   * populated on files with content stored in Drive.
   */
  md5Checksum: string;
  /**
   * The MIME type of the revision.
   */
  mimeType: string;
  /**
   * Last time this revision was modified (formatted RFC 3339 timestamp).
   */
  modifiedDate: string;
  /**
   * The original filename when this revision was created. This will only be
   * populated on files with content stored in Drive.
   */
  originalFilename: string;
  /**
   * Whether this revision is pinned to prevent automatic purging. This will
   * only be populated and can only be modified on files with content stored in
   * Drive which are not Google Docs. Revisions can also be pinned when they are
   * created through the drive.files.insert/update/copy by using the pinned
   * query parameter.
   */
  pinned: boolean;
  /**
   * Whether subsequent revisions will be automatically republished. This is
   * only populated and can only be modified for Google Docs.
   */
  publishAuto: boolean;
  /**
   * Whether this revision is published. This is only populated and can only be
   * modified for Google Docs.
   */
  published: boolean;
  /**
   * A link to the published revision.
   */
  publishedLink: string;
  /**
   * Whether this revision is published outside the domain. This is only
   * populated and can only be modified for Google Docs.
   */
  publishedOutsideDomain: boolean;
  /**
   * A link back to this revision.
   */
  selfLink: string;
}
/**
 * A list of revisions of a file.
 */
export interface Schema$RevisionList {
  /**
   * The ETag of the list.
   */
  etag: string;
  /**
   * The list of revisions. If nextPageToken is populated, then this list may be
   * incomplete and an additional page of results should be fetched.
   */
  items: Schema$Revision[];
  /**
   * This is always drive#revisionList.
   */
  kind: string;
  /**
   * The page token for the next page of revisions. This field will be absent if
   * the end of the revisions list has been reached. If the token is rejected
   * for any reason, it should be discarded and pagination should be restarted
   * from the first page of results.
   */
  nextPageToken: string;
  /**
   * A link back to this list.
   */
  selfLink: string;
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
   * The color of this Team Drive as an RGB hex string. It can only be set on a
   * drive.teamdrives.update request that does not set themeId.
   */
  colorRgb: string;
  /**
   * The time at which the Team Drive was created (RFC 3339 date-time).
   */
  createdDate: string;
  /**
   * The ID of this Team Drive which is also the ID of the top level folder for
   * this Team Drive.
   */
  id: string;
  /**
   * This is always drive#teamDrive
   */
  kind: string;
  /**
   * The name of this Team Drive.
   */
  name: string;
  /**
   * The ID of the theme from which the background image and color will be set.
   * The set of possible teamDriveThemes can be retrieved from a drive.about.get
   * response. When not specified on a drive.teamdrives.insert request, a random
   * theme is chosen from which the background image and color are set. This is
   * a write-only field; it can only be set on requests that don&#39;t set
   * colorRgb or backgroundImageFile.
   */
  themeId: string;
}
/**
 * A list of Team Drives.
 */
export interface Schema$TeamDriveList {
  /**
   * The list of Team Drives.
   */
  items: Schema$TeamDrive[];
  /**
   * This is always drive#teamDriveList
   */
  kind: string;
  /**
   * The page token for the next page of Team Drives.
   */
  nextPageToken: string;
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
   * The email address of the user.
   */
  emailAddress: string;
  /**
   * Whether this user is the same as the authenticated user for whom the
   * request was made.
   */
  isAuthenticatedUser: boolean;
  /**
   * This is always drive#user.
   */
  kind: string;
  /**
   * The user&#39;s ID as visible in the permissions collection.
   */
  permissionId: string;
  /**
   * The user&#39;s profile picture.
   */
  picture: any;
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
   * @desc Gets the information about the current user along with Drive API
   * settings
   * @alias drive.about.get
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {boolean=} params.includeSubscribed Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the maxChangeIdCount.
   * @param {string=} params.maxChangeIdCount Maximum number of remaining change IDs to count
   * @param {string=} params.startChangeId Change ID to start counting from when calculating number of remaining change IDs
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$About>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$About>,
      callback?: BodyResponseCallback<Schema$About>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$About>,
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
            url: (rootUrl + '/drive/v2/about').replace(/([^:]\/)\/+/g, '$1'),
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

export class Resource$Apps {
  root: Drive;
  constructor(root: Drive) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * drive.apps.get
   * @desc Gets a specific app.
   * @alias drive.apps.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.appId The ID of the app.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$App>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$App>,
      callback?: BodyResponseCallback<Schema$App>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$App>,
      callback?: BodyResponseCallback<Schema$App>):
      void|AxiosPromise<Schema$App> {
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
            url: (rootUrl + '/drive/v2/apps/{appId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['appId'],
      pathParams: ['appId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$App>(parameters, callback);
    } else {
      return createAPIRequest<Schema$App>(parameters);
    }
  }


  /**
   * drive.apps.list
   * @desc Lists a user's installed apps.
   * @alias drive.apps.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
   * @param {string=} params.appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
   * @param {string=} params.languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$AppList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppList>,
      callback?: BodyResponseCallback<Schema$AppList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AppList>,
      callback?: BodyResponseCallback<Schema$AppList>):
      void|AxiosPromise<Schema$AppList> {
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
            url: (rootUrl + '/drive/v2/apps').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AppList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AppList>(parameters);
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
   * drive.changes.get
   * @desc Deprecated - Use changes.getStartPageToken and changes.list to
   * retrieve recent changes.
   * @alias drive.changes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.changeId The ID of the change.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {string=} params.teamDriveId The Team Drive from which the change will be returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Change>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>):
      void|AxiosPromise<Schema$Change> {
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
            url: (rootUrl + '/drive/v2/changes/{changeId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['changeId'],
      pathParams: ['changeId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Change>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Change>(parameters);
    }
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
            url: (rootUrl + '/drive/v2/changes/startPageToken')
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
   * @param {object=} params Parameters for request
   * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
   * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
   * @param {boolean=} params.includeSubscribed Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
   * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
   * @param {integer=} params.maxResults Maximum number of changes to return.
   * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
   * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
   * @param {string=} params.startChangeId Deprecated - use pageToken instead.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$ChangeList>;
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
            url: (rootUrl + '/drive/v2/changes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
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
   * @desc Subscribe to changes for a user.
   * @alias drive.changes.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
   * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
   * @param {boolean=} params.includeSubscribed Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
   * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
   * @param {integer=} params.maxResults Maximum number of changes to return.
   * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
   * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
   * @param {string=} params.startChangeId Deprecated - use pageToken instead.
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
            url: (rootUrl + '/drive/v2/changes/watch')
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
            url: (rootUrl + '/drive/v2/channels/stop')
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

export class Resource$Children {
  root: Drive;
  constructor(root: Drive) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * drive.children.delete
   * @desc Removes a child from a folder.
   * @alias drive.children.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.childId The ID of the child.
   * @param {string} params.folderId The ID of the folder.
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
            url: (rootUrl + '/drive/v2/files/{folderId}/children/{childId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['folderId', 'childId'],
      pathParams: ['childId', 'folderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * drive.children.get
   * @desc Gets a specific child reference.
   * @alias drive.children.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.childId The ID of the child.
   * @param {string} params.folderId The ID of the folder.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ChildReference>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChildReference>,
      callback?: BodyResponseCallback<Schema$ChildReference>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChildReference>,
      callback?: BodyResponseCallback<Schema$ChildReference>):
      void|AxiosPromise<Schema$ChildReference> {
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
            url: (rootUrl + '/drive/v2/files/{folderId}/children/{childId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['folderId', 'childId'],
      pathParams: ['childId', 'folderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChildReference>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChildReference>(parameters);
    }
  }


  /**
   * drive.children.insert
   * @desc Inserts a file into a folder.
   * @alias drive.children.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.folderId The ID of the folder.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {().ChildReference} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ChildReference>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChildReference>,
      callback?: BodyResponseCallback<Schema$ChildReference>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChildReference>,
      callback?: BodyResponseCallback<Schema$ChildReference>):
      void|AxiosPromise<Schema$ChildReference> {
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
            url: (rootUrl + '/drive/v2/files/{folderId}/children')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['folderId'],
      pathParams: ['folderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChildReference>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChildReference>(parameters);
    }
  }


  /**
   * drive.children.list
   * @desc Lists a folder's children.
   * @alias drive.children.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.folderId The ID of the folder.
   * @param {integer=} params.maxResults Maximum number of children to return.
   * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
   * @param {string=} params.pageToken Page token for children.
   * @param {string=} params.q Query string for searching children.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$ChildList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChildList>,
      callback?: BodyResponseCallback<Schema$ChildList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChildList>,
      callback?: BodyResponseCallback<Schema$ChildList>):
      void|AxiosPromise<Schema$ChildList> {
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
            url: (rootUrl + '/drive/v2/files/{folderId}/children')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['folderId'],
      pathParams: ['folderId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChildList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChildList>(parameters);
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
            url: (rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}')
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
   * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}')
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
   * drive.comments.insert
   * @desc Creates a new comment on the given file.
   * @alias drive.comments.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {().Comment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>): void;
  insert(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/comments')
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
   * drive.comments.list
   * @desc Lists a file's comments.
   * @alias drive.comments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {boolean=} params.includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
   * @param {integer=} params.maxResults The maximum number of discussions to include in the response, used for paging.
   * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
   * @param {string=} params.updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$CommentList>;
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
            url: (rootUrl + '/drive/v2/files/{fileId}/comments')
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
   * drive.comments.patch
   * @desc Updates an existing comment. This method supports patch semantics.
   * @alias drive.comments.patch
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
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>): void;
  patch(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}')
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


  /**
   * drive.comments.update
   * @desc Updates an existing comment.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/comments/{commentId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
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
   * @desc Creates a copy of the specified file.
   * @alias drive.files.copy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
   * @param {string} params.fileId The ID of the file to copy.
   * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
   * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
   * @param {boolean=} params.pinned Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {string=} params.timedTextLanguage The language of the timed text.
   * @param {string=} params.timedTextTrackName The timed text track name.
   * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/copy')
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
   * drive.files.delete
   * @desc Permanently deletes a file by ID. Skips the trash. The currently
   * authenticated user must own the file or be an organizer on the parent for
   * Team Drive files.
   * @alias drive.files.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file to delete.
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
            url: (rootUrl + '/drive/v2/files/{fileId}')
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
            url: (rootUrl + '/drive/v2/files/trash')
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
   * exported content. Please note that the exported content is limited to 10MB.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/export')
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
   * @desc Generates a set of file IDs which can be provided in insert requests.
   * @alias drive.files.generateIds
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of IDs to return.
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
            url: (rootUrl + '/drive/v2/files/generateIds')
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
   * @desc Gets a file's metadata by ID.
   * @alias drive.files.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
   * @param {string} params.fileId The ID for the file in question.
   * @param {string=} params.projection This parameter is deprecated and has no function.
   * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
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
            url: (rootUrl + '/drive/v2/files/{fileId}')
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
   * drive.files.insert
   * @desc Insert a new file.
   * @alias drive.files.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
   * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
   * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
   * @param {boolean=} params.pinned Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {string=} params.timedTextLanguage The language of the timed text.
   * @param {string=} params.timedTextTrackName The timed text track name.
   * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
   * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when convert=false.
   * @param  {object} params.resource Media resource metadata
   * @param {object} params.media Media object
   * @param {string} params.media.mimeType Media mime-type
   * @param {string|object} params.media.body Media body contents
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>): void;
  insert(
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
            url: (rootUrl + '/drive/v2/files').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl:
          (rootUrl + '/upload/drive/v2/files').replace(/([^:]\/)\/+/g, '$1'),
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
   * drive.files.list
   * @desc Lists the user's files.
   * @alias drive.files.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.corpora Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'default', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'default'; all other values must be used in isolation. Prefer 'default' or 'teamDrive' to 'allTeamDrives' for efficiency.
   * @param {string=} params.corpus The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
   * @param {boolean=} params.includeTeamDriveItems Whether Team Drive items should be included in results.
   * @param {integer=} params.maxResults The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
   * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', 'title', and 'title_natural'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
   * @param {string=} params.pageToken Page token for files.
   * @param {string=} params.projection This parameter is deprecated and has no function.
   * @param {string=} params.q Query string for searching files.
   * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
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
            url: (rootUrl + '/drive/v2/files').replace(/([^:]\/)\/+/g, '$1'),
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
   * drive.files.patch
   * @desc Updates file metadata and/or content. This method supports patch
   * semantics.
   * @alias drive.files.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.addParents Comma-separated list of parent IDs to add.
   * @param {boolean=} params.convert This parameter is deprecated and has no function.
   * @param {string} params.fileId The ID of the file to update.
   * @param {string=} params.modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
   * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
   * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
   * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
   * @param {boolean=} params.pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
   * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
   * @param {boolean=} params.setModifiedDate Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {string=} params.timedTextLanguage The language of the timed text.
   * @param {string=} params.timedTextTrackName The timed text track name.
   * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
   * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
   * @param {().File} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>): void;
  patch(
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
            url: (rootUrl + '/drive/v2/files/{fileId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
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
   * drive.files.touch
   * @desc Set the file's updated time to the current server time.
   * @alias drive.files.touch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file to update.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  touch(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
  touch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>): void;
  touch(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/touch')
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
   * drive.files.trash
   * @desc Moves a file to the trash. The currently authenticated user must own
   * the file or be an organizer on the parent for Team Drive files.
   * @alias drive.files.trash
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file to trash.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  trash(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
  trash(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>): void;
  trash(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/trash')
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
   * drive.files.untrash
   * @desc Restores a file from the trash.
   * @alias drive.files.untrash
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file to untrash.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  untrash(params?: any, options?: MethodOptions): AxiosPromise<Schema$File>;
  untrash(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>): void;
  untrash(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/untrash')
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
   * drive.files.update
   * @desc Updates file metadata and/or content.
   * @alias drive.files.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.addParents Comma-separated list of parent IDs to add.
   * @param {boolean=} params.convert This parameter is deprecated and has no function.
   * @param {string} params.fileId The ID of the file to update.
   * @param {string=} params.modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
   * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
   * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
   * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
   * @param {boolean=} params.pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
   * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
   * @param {boolean=} params.setModifiedDate Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {string=} params.timedTextLanguage The language of the timed text.
   * @param {string=} params.timedTextTrackName The timed text track name.
   * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
   * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
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
            url: (rootUrl + '/drive/v2/files/{fileId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/drive/v2/files/{fileId}')
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
   * @desc Subscribe to changes on a file
   * @alias drive.files.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
   * @param {string} params.fileId The ID for the file in question.
   * @param {string=} params.projection This parameter is deprecated and has no function.
   * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/watch')
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

export class Resource$Parents {
  root: Drive;
  constructor(root: Drive) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * drive.parents.delete
   * @desc Removes a parent from a file.
   * @alias drive.parents.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.parentId The ID of the parent.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/parents/{parentId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['fileId', 'parentId'],
      pathParams: ['fileId', 'parentId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * drive.parents.get
   * @desc Gets a specific parent reference.
   * @alias drive.parents.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.parentId The ID of the parent.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ParentReference>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ParentReference>,
      callback?: BodyResponseCallback<Schema$ParentReference>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ParentReference>,
      callback?: BodyResponseCallback<Schema$ParentReference>):
      void|AxiosPromise<Schema$ParentReference> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/parents/{parentId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['fileId', 'parentId'],
      pathParams: ['fileId', 'parentId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ParentReference>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ParentReference>(parameters);
    }
  }


  /**
   * drive.parents.insert
   * @desc Adds a parent folder for a file.
   * @alias drive.parents.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {().ParentReference} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ParentReference>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ParentReference>,
      callback?: BodyResponseCallback<Schema$ParentReference>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ParentReference>,
      callback?: BodyResponseCallback<Schema$ParentReference>):
      void|AxiosPromise<Schema$ParentReference> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/parents')
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
      createAPIRequest<Schema$ParentReference>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ParentReference>(parameters);
    }
  }


  /**
   * drive.parents.list
   * @desc Lists a file's parents.
   * @alias drive.parents.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$ParentList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ParentList>,
      callback?: BodyResponseCallback<Schema$ParentList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ParentList>,
      callback?: BodyResponseCallback<Schema$ParentList>):
      void|AxiosPromise<Schema$ParentList> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/parents')
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
      createAPIRequest<Schema$ParentList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ParentList>(parameters);
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
   * drive.permissions.delete
   * @desc Deletes a permission from a file or Team Drive.
   * @alias drive.permissions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID for the file or Team Drive.
   * @param {string} params.permissionId The ID for the permission.
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
                  '/drive/v2/files/{fileId}/permissions/{permissionId}')
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
   * @param {string} params.fileId The ID for the file or Team Drive.
   * @param {string} params.permissionId The ID for the permission.
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
                  '/drive/v2/files/{fileId}/permissions/{permissionId}')
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
   * drive.permissions.getIdForEmail
   * @desc Returns the permission ID for an email address.
   * @alias drive.permissions.getIdForEmail
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.email The email address for which to return a permission ID
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIdForEmail(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PermissionId>;
  getIdForEmail(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PermissionId>,
      callback?: BodyResponseCallback<Schema$PermissionId>): void;
  getIdForEmail(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PermissionId>,
      callback?: BodyResponseCallback<Schema$PermissionId>):
      void|AxiosPromise<Schema$PermissionId> {
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
            url: (rootUrl + '/drive/v2/permissionIds/{email}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['email'],
      pathParams: ['email'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PermissionId>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PermissionId>(parameters);
    }
  }


  /**
   * drive.permissions.insert
   * @desc Inserts a permission for a file or Team Drive.
   * @alias drive.permissions.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.emailMessage A plain text custom message to include in notification emails.
   * @param {string} params.fileId The ID for the file or Team Drive.
   * @param {boolean=} params.sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
   * @param {().Permission} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Permission>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>): void;
  insert(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/permissions')
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
   * drive.permissions.list
   * @desc Lists a file's or Team Drive's permissions.
   * @alias drive.permissions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID for the file or Team Drive.
   * @param {integer=} params.maxResults The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/permissions')
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
   * drive.permissions.patch
   * @desc Updates a permission using patch semantics.
   * @alias drive.permissions.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID for the file or Team Drive.
   * @param {string} params.permissionId The ID for the permission.
   * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
   * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
   * @param {().Permission} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Permission>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>): void;
  patch(
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
                  '/drive/v2/files/{fileId}/permissions/{permissionId}')
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


  /**
   * drive.permissions.update
   * @desc Updates a permission.
   * @alias drive.permissions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID for the file or Team Drive.
   * @param {string} params.permissionId The ID for the permission.
   * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
   * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
   * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
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
                  '/drive/v2/files/{fileId}/permissions/{permissionId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
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

export class Resource$Properties {
  root: Drive;
  constructor(root: Drive) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * drive.properties.delete
   * @desc Deletes a property.
   * @alias drive.properties.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.propertyKey The key of the property.
   * @param {string=} params.visibility The visibility of the property.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['fileId', 'propertyKey'],
      pathParams: ['fileId', 'propertyKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * drive.properties.get
   * @desc Gets a property by its key.
   * @alias drive.properties.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.propertyKey The key of the property.
   * @param {string=} params.visibility The visibility of the property.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Property>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>):
      void|AxiosPromise<Schema$Property> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['fileId', 'propertyKey'],
      pathParams: ['fileId', 'propertyKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Property>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Property>(parameters);
    }
  }


  /**
   * drive.properties.insert
   * @desc Adds a property to a file, or updates it if it already exists.
   * @alias drive.properties.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {().Property} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Property>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>):
      void|AxiosPromise<Schema$Property> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/properties')
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
      createAPIRequest<Schema$Property>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Property>(parameters);
    }
  }


  /**
   * drive.properties.list
   * @desc Lists a file's properties.
   * @alias drive.properties.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PropertyList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PropertyList>,
      callback?: BodyResponseCallback<Schema$PropertyList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PropertyList>,
      callback?: BodyResponseCallback<Schema$PropertyList>):
      void|AxiosPromise<Schema$PropertyList> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/properties')
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
      createAPIRequest<Schema$PropertyList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PropertyList>(parameters);
    }
  }


  /**
   * drive.properties.patch
   * @desc Updates a property. This method supports patch semantics.
   * @alias drive.properties.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.propertyKey The key of the property.
   * @param {string=} params.visibility The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
   * @param {().Property} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Property>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>):
      void|AxiosPromise<Schema$Property> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['fileId', 'propertyKey'],
      pathParams: ['fileId', 'propertyKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Property>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Property>(parameters);
    }
  }


  /**
   * drive.properties.update
   * @desc Updates a property.
   * @alias drive.properties.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.propertyKey The key of the property.
   * @param {string=} params.visibility The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
   * @param {().Property} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Property>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Property>,
      callback?: BodyResponseCallback<Schema$Property>):
      void|AxiosPromise<Schema$Property> {
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
            url: (rootUrl + '/drive/v2/files/{fileId}/properties/{propertyKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['fileId', 'propertyKey'],
      pathParams: ['fileId', 'propertyKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Property>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Property>(parameters);
    }
  }
}

export class Resource$Realtime {
  root: Drive;
  constructor(root: Drive) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * drive.realtime.get
   * @desc Exports the contents of the Realtime API data model associated with
   * this file as JSON.
   * @alias drive.realtime.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
   * @param {integer=} params.revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<void>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<void>,
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
            url: (rootUrl + '/drive/v2/files/{fileId}/realtime')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * drive.realtime.update
   * @desc Overwrites the Realtime API data model associated with this file with
   * the provided JSON data model.
   * @alias drive.realtime.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.baseRevision The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
   * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
   * @param {object} params.media Media object
   * @param {string} params.media.mimeType Media mime-type
   * @param {string|object} params.media.body Media body contents
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<void>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  update(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/realtime')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/drive/v2/files/{fileId}/realtime')
                    .replace(/([^:]\/)\/+/g, '$1'),
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
                 '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
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
   * @desc Gets a reply.
   * @alias drive.replies.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.commentId The ID of the comment.
   * @param {string} params.fileId The ID of the file.
   * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted reply.
   * @param {string} params.replyId The ID of the reply.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$CommentReply>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>):
      void|AxiosPromise<Schema$CommentReply> {
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
                 '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
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
      createAPIRequest<Schema$CommentReply>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentReply>(parameters);
    }
  }


  /**
   * drive.replies.insert
   * @desc Creates a new reply to the given comment.
   * @alias drive.replies.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.commentId The ID of the comment.
   * @param {string} params.fileId The ID of the file.
   * @param {().CommentReply} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CommentReply>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>):
      void|AxiosPromise<Schema$CommentReply> {
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
                  '/drive/v2/files/{fileId}/comments/{commentId}/replies')
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
      createAPIRequest<Schema$CommentReply>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentReply>(parameters);
    }
  }


  /**
   * drive.replies.list
   * @desc Lists all of the replies to a comment.
   * @alias drive.replies.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.commentId The ID of the comment.
   * @param {string} params.fileId The ID of the file.
   * @param {boolean=} params.includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.
   * @param {integer=} params.maxResults The maximum number of replies to include in the response, used for paging.
   * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CommentReplyList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReplyList>,
      callback?: BodyResponseCallback<Schema$CommentReplyList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReplyList>,
      callback?: BodyResponseCallback<Schema$CommentReplyList>):
      void|AxiosPromise<Schema$CommentReplyList> {
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
                  '/drive/v2/files/{fileId}/comments/{commentId}/replies')
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
      createAPIRequest<Schema$CommentReplyList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentReplyList>(parameters);
    }
  }


  /**
   * drive.replies.patch
   * @desc Updates an existing reply. This method supports patch semantics.
   * @alias drive.replies.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.commentId The ID of the comment.
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.replyId The ID of the reply.
   * @param {().CommentReply} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CommentReply>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>):
      void|AxiosPromise<Schema$CommentReply> {
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
                 '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
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
      createAPIRequest<Schema$CommentReply>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentReply>(parameters);
    }
  }


  /**
   * drive.replies.update
   * @desc Updates an existing reply.
   * @alias drive.replies.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.commentId The ID of the comment.
   * @param {string} params.fileId The ID of the file.
   * @param {string} params.replyId The ID of the reply.
   * @param {().CommentReply} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CommentReply>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentReply>,
      callback?: BodyResponseCallback<Schema$CommentReply>):
      void|AxiosPromise<Schema$CommentReply> {
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
                 '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['fileId', 'commentId', 'replyId'],
      pathParams: ['commentId', 'fileId', 'replyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CommentReply>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentReply>(parameters);
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
   * @desc Removes a revision.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}')
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
   * @desc Gets a specific revision.
   * @alias drive.revisions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}')
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
   * @param {integer=} params.maxResults Maximum number of revisions to return.
   * @param {string=} params.pageToken Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
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
            url: (rootUrl + '/drive/v2/files/{fileId}/revisions')
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
   * drive.revisions.patch
   * @desc Updates a revision. This method supports patch semantics.
   * @alias drive.revisions.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID for the file.
   * @param {string} params.revisionId The ID for the revision.
   * @param {().Revision} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Revision>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Revision>,
      callback?: BodyResponseCallback<Schema$Revision>): void;
  patch(
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
            url: (rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}')
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


  /**
   * drive.revisions.update
   * @desc Updates a revision.
   * @alias drive.revisions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.fileId The ID for the file.
   * @param {string} params.revisionId The ID for the revision.
   * @param {().Revision} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Revision>;
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
            url: (rootUrl + '/drive/v2/files/{fileId}/revisions/{revisionId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
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
   * drive.teamdrives.delete
   * @desc Permanently deletes a Team Drive for which the user is an organizer.
   * The Team Drive cannot contain any untrashed items.
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
            url: (rootUrl + '/drive/v2/teamdrives/{teamDriveId}')
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
            url: (rootUrl + '/drive/v2/teamdrives/{teamDriveId}')
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
   * drive.teamdrives.insert
   * @desc Creates a new Team Drive.
   * @alias drive.teamdrives.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
   * @param {().TeamDrive} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$TeamDrive>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TeamDrive>,
      callback?: BodyResponseCallback<Schema$TeamDrive>): void;
  insert(
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
            url: (rootUrl + '/drive/v2/teamdrives')
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
   * drive.teamdrives.list
   * @desc Lists the user's Team Drives.
   * @alias drive.teamdrives.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of Team Drives to return.
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
            url: (rootUrl + '/drive/v2/teamdrives')
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$TeamDrive>;
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
            url: (rootUrl + '/drive/v2/teamdrives/{teamDriveId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
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
