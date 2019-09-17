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

export namespace drive_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * Drive API
   *
   * Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
   *
   * @example
   * const {google} = require('googleapis');
   * const drive = google.drive('v3');
   *
   * @namespace drive
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Drive
   */
  export class Drive {
    context: APIRequestContext;
    about: Resource$About;
    changes: Resource$Changes;
    channels: Resource$Channels;
    comments: Resource$Comments;
    drives: Resource$Drives;
    files: Resource$Files;
    permissions: Resource$Permissions;
    replies: Resource$Replies;
    revisions: Resource$Revisions;
    teamdrives: Resource$Teamdrives;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.about = new Resource$About(this.context);
      this.changes = new Resource$Changes(this.context);
      this.channels = new Resource$Channels(this.context);
      this.comments = new Resource$Comments(this.context);
      this.drives = new Resource$Drives(this.context);
      this.files = new Resource$Files(this.context);
      this.permissions = new Resource$Permissions(this.context);
      this.replies = new Resource$Replies(this.context);
      this.revisions = new Resource$Revisions(this.context);
      this.teamdrives = new Resource$Teamdrives(this.context);
    }
  }

  /**
   * Information about the user, the user&#39;s Drive, and system capabilities.
   */
  export interface Schema$About {
    /**
     * Whether the user has installed the requesting app.
     */
    appInstalled?: boolean | null;
    /**
     * Whether the user can create shared drives.
     */
    canCreateDrives?: boolean | null;
    /**
     * Deprecated - use canCreateDrives instead.
     */
    canCreateTeamDrives?: boolean | null;
    /**
     * A list of themes that are supported for shared drives.
     */
    driveThemes?: Array<{
      backgroundImageLink?: string;
      colorRgb?: string;
      id?: string;
    }> | null;
    /**
     * A map of source MIME type to possible targets for all supported exports.
     */
    exportFormats?: {[key: string]: string[]} | null;
    /**
     * The currently supported folder colors as RGB hex strings.
     */
    folderColorPalette?: string[] | null;
    /**
     * A map of source MIME type to possible targets for all supported imports.
     */
    importFormats?: {[key: string]: string[]} | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#about&quot;.
     */
    kind?: string | null;
    /**
     * A map of maximum import sizes by MIME type, in bytes.
     */
    maxImportSizes?: {[key: string]: string} | null;
    /**
     * The maximum upload size in bytes.
     */
    maxUploadSize?: string | null;
    /**
     * The user&#39;s storage quota limits and usage. All fields are measured in bytes.
     */
    storageQuota?: {
      limit?: string;
      usage?: string;
      usageInDrive?: string;
      usageInDriveTrash?: string;
    } | null;
    /**
     * Deprecated - use driveThemes instead.
     */
    teamDriveThemes?: Array<{
      backgroundImageLink?: string;
      colorRgb?: string;
      id?: string;
    }> | null;
    /**
     * The authenticated user.
     */
    user?: Schema$User;
  }
  /**
   * A change to a file or shared drive.
   */
  export interface Schema$Change {
    /**
     * The type of the change. Possible values are file and drive.
     */
    changeType?: string | null;
    /**
     * The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.
     */
    drive?: Schema$Drive;
    /**
     * The ID of the shared drive associated with this change.
     */
    driveId?: string | null;
    /**
     * The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
     */
    file?: Schema$File;
    /**
     * The ID of the file which has changed.
     */
    fileId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#change&quot;.
     */
    kind?: string | null;
    /**
     * Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
     */
    removed?: boolean | null;
    /**
     * Deprecated - use drive instead.
     */
    teamDrive?: Schema$TeamDrive;
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string | null;
    /**
     * The time of this change (RFC 3339 date-time).
     */
    time?: string | null;
    /**
     * Deprecated - use changeType instead.
     */
    type?: string | null;
  }
  /**
   * A list of changes for a user.
   */
  export interface Schema$ChangeList {
    /**
     * The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    changes?: Schema$Change[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#changeList&quot;.
     */
    kind?: string | null;
    /**
     * The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
     */
    newStartPageToken?: string | null;
    /**
     * The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * An notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string | null;
    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string | null;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string | null;
    /**
     * Identifies this as a notification channel used to watch for changes to a resource, which is &quot;api#channel&quot;.
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean | null;
    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string | null;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string | null;
    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string | null;
    /**
     * The type of delivery mechanism used for this channel.
     */
    type?: string | null;
  }
  /**
   * A comment on a file.
   */
  export interface Schema$Comment {
    /**
     * A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
     */
    anchor?: string | null;
    /**
     * The user who created the comment.
     */
    author?: Schema$User;
    /**
     * The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed.
     */
    content?: string | null;
    /**
     * The time at which the comment was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * Whether the comment has been deleted. A deleted comment has no content.
     */
    deleted?: boolean | null;
    /**
     * The content of the comment with HTML formatting.
     */
    htmlContent?: string | null;
    /**
     * The ID of the comment.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#comment&quot;.
     */
    kind?: string | null;
    /**
     * The last time the comment or any of its replies was modified (RFC 3339 date-time).
     */
    modifiedTime?: string | null;
    /**
     * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
     */
    quotedFileContent?: {mimeType?: string; value?: string} | null;
    /**
     * The full list of replies to the comment in chronological order.
     */
    replies?: Schema$Reply[];
    /**
     * Whether the comment has been resolved by one of its replies.
     */
    resolved?: boolean | null;
  }
  /**
   * A list of comments on a file.
   */
  export interface Schema$CommentList {
    /**
     * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    comments?: Schema$Comment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#commentList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Representation of a shared drive.
   */
  export interface Schema$Drive {
    /**
     * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don&#39;t set themeId. When specified, all fields of the backgroundImageFile must be set.
     */
    backgroundImageFile?: {
      id?: string;
      width?: number;
      xCoordinate?: number;
      yCoordinate?: number;
    } | null;
    /**
     * A short-lived link to this shared drive&#39;s background image.
     */
    backgroundImageLink?: string | null;
    /**
     * Capabilities the current user has on this shared drive.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermissionRestriction?: boolean;
      canChangeDomainUsersOnlyRestriction?: boolean;
      canChangeDriveBackground?: boolean;
      canChangeDriveMembersOnlyRestriction?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDeleteChildren?: boolean;
      canDeleteDrive?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canManageMembers?: boolean;
      canReadRevisions?: boolean;
      canRename?: boolean;
      canRenameDrive?: boolean;
      canShare?: boolean;
      canTrashChildren?: boolean;
    } | null;
    /**
     * The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId.
     */
    colorRgb?: string | null;
    /**
     * The time at which the shared drive was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * Whether the shared drive is hidden from default view.
     */
    hidden?: boolean | null;
    /**
     * The ID of this shared drive which is also the ID of the top level folder of this shared drive.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#drive&quot;.
     */
    kind?: string | null;
    /**
     * The name of this shared drive.
     */
    name?: string | null;
    /**
     * A set of restrictions that apply to this shared drive or items inside this shared drive.
     */
    restrictions?: {
      adminManagedRestrictions?: boolean;
      copyRequiresWriterPermission?: boolean;
      domainUsersOnly?: boolean;
      driveMembersOnly?: boolean;
    } | null;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set colorRgb or backgroundImageFile.
     */
    themeId?: string | null;
  }
  /**
   * A list of shared drives.
   */
  export interface Schema$DriveList {
    /**
     * The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    drives?: Schema$Drive[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#driveList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The metadata for a file.
   */
  export interface Schema$File {
    /**
     * A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests.
     */
    appProperties?: {[key: string]: string} | null;
    /**
     * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermission?: boolean;
      canChangeViewersCanCopyContent?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDelete?: boolean;
      canDeleteChildren?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canModifyContent?: boolean;
      canMoveChildrenOutOfDrive?: boolean;
      canMoveChildrenOutOfTeamDrive?: boolean;
      canMoveChildrenWithinDrive?: boolean;
      canMoveChildrenWithinTeamDrive?: boolean;
      canMoveItemIntoTeamDrive?: boolean;
      canMoveItemOutOfDrive?: boolean;
      canMoveItemOutOfTeamDrive?: boolean;
      canMoveItemWithinDrive?: boolean;
      canMoveItemWithinTeamDrive?: boolean;
      canMoveTeamDriveItem?: boolean;
      canReadDrive?: boolean;
      canReadRevisions?: boolean;
      canReadTeamDrive?: boolean;
      canRemoveChildren?: boolean;
      canRename?: boolean;
      canShare?: boolean;
      canTrash?: boolean;
      canTrashChildren?: boolean;
      canUntrash?: boolean;
    } | null;
    /**
     * Additional information about the content of the file. These fields are never populated in responses.
     */
    contentHints?: {
      indexableText?: string;
      thumbnail?: {image?: string; mimeType?: string};
    } | null;
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean | null;
    /**
     * The time at which the file was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * A short description of the file.
     */
    description?: string | null;
    /**
     * ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string | null;
    /**
     * Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
     */
    explicitlyTrashed?: boolean | null;
    /**
     * Links for exporting Google Docs to specific formats.
     */
    exportLinks?: {[key: string]: string} | null;
    /**
     * The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
     */
    fileExtension?: string | null;
    /**
     * The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource. If an unsupported color is specified, the closest color in the palette will be used instead.
     */
    folderColorRgb?: string | null;
    /**
     * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as &quot;tar.gz&quot;. This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.
     */
    fullFileExtension?: string | null;
    /**
     * Whether any users are granted file access directly on this file. This field is only populated for shared drive files.
     */
    hasAugmentedPermissions?: boolean | null;
    /**
     * Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
     */
    hasThumbnail?: boolean | null;
    /**
     * The ID of the file&#39;s head revision. This is currently only available for files with binary content in Google Drive.
     */
    headRevisionId?: string | null;
    /**
     * A static, unauthenticated link to the file&#39;s icon.
     */
    iconLink?: string | null;
    /**
     * The ID of the file.
     */
    id?: string | null;
    /**
     * Additional metadata about image media, if available.
     */
    imageMediaMetadata?: {
      aperture?: number;
      cameraMake?: string;
      cameraModel?: string;
      colorSpace?: string;
      exposureBias?: number;
      exposureMode?: string;
      exposureTime?: number;
      flashUsed?: boolean;
      focalLength?: number;
      height?: number;
      isoSpeed?: number;
      lens?: string;
      location?: {altitude?: number; latitude?: number; longitude?: number};
      maxApertureValue?: number;
      meteringMode?: string;
      rotation?: number;
      sensor?: string;
      subjectDistance?: number;
      time?: string;
      whiteBalance?: string;
      width?: number;
    } | null;
    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#file&quot;.
     */
    kind?: string | null;
    /**
     * The last user to modify the file.
     */
    lastModifyingUser?: Schema$User;
    /**
     * The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
     */
    md5Checksum?: string | null;
    /**
     * The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.
     */
    mimeType?: string | null;
    /**
     * Whether the file has been modified by this user.
     */
    modifiedByMe?: boolean | null;
    /**
     * The last time the file was modified by the user (RFC 3339 date-time).
     */
    modifiedByMeTime?: string | null;
    /**
     * The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.
     */
    modifiedTime?: string | null;
    /**
     * The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.
     */
    name?: string | null;
    /**
     * The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string | null;
    /**
     * Whether the user owns the file. Not populated for items in shared drives.
     */
    ownedByMe?: boolean | null;
    /**
     * The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.
     */
    owners?: Schema$User[];
    /**
     * The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user&#39;s My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.
     */
    parents?: string[] | null;
    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds?: string[] | null;
    /**
     * The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
     */
    permissions?: Schema$Permission[];
    /**
     * A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests.
     */
    properties?: {[key: string]: string} | null;
    /**
     * The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
     */
    quotaBytesUsed?: string | null;
    /**
     * Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean | null;
    /**
     * The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
     */
    sharedWithMeTime?: string | null;
    /**
     * The user who shared the file with the requesting user, if applicable.
     */
    sharingUser?: Schema$User;
    /**
     * The size of the file&#39;s content in bytes. This is only applicable to files with binary content in Google Drive.
     */
    size?: string | null;
    /**
     * The list of spaces which contain the file. The currently supported values are &#39;drive&#39;, &#39;appDataFolder&#39; and &#39;photos&#39;.
     */
    spaces?: string[] | null;
    /**
     * Whether the user has starred the file.
     */
    starred?: boolean | null;
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string | null;
    /**
     * A short-lived link to the file&#39;s thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file&#39;s content.
     */
    thumbnailLink?: string | null;
    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string | null;
    /**
     * Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner&#39;s trash.
     */
    trashed?: boolean | null;
    /**
     * The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
     */
    trashedTime?: string | null;
    /**
     * If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.
     */
    trashingUser?: Schema$User;
    /**
     * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
     */
    version?: string | null;
    /**
     * Additional metadata about video media. This may not be available immediately upon upload.
     */
    videoMediaMetadata?: {
      durationMillis?: string;
      height?: number;
      width?: number;
    } | null;
    /**
     * Whether the file has been viewed by this user.
     */
    viewedByMe?: boolean | null;
    /**
     * The last time the file was viewed by the user (RFC 3339 date-time).
     */
    viewedByMeTime?: string | null;
    /**
     * Deprecated - use copyRequiresWriterPermission instead.
     */
    viewersCanCopyContent?: boolean | null;
    /**
     * A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
     */
    webContentLink?: string | null;
    /**
     * A link for opening the file in a relevant Google editor or viewer in a browser.
     */
    webViewLink?: string | null;
    /**
     * Whether users with only writer permission can modify the file&#39;s permissions. Not populated for items in shared drives.
     */
    writersCanShare?: boolean | null;
  }
  /**
   * A list of files.
   */
  export interface Schema$FileList {
    /**
     * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    files?: Schema$File[];
    /**
     * Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the &quot;allDrives&quot; corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as &quot;user&quot; or &quot;drive&quot;.
     */
    incompleteSearch?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#fileList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A list of generated file IDs which can be provided in create requests.
   */
  export interface Schema$GeneratedIds {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids?: string[] | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#generatedIds&quot;.
     */
    kind?: string | null;
    /**
     * The type of file that can be created with these IDs.
     */
    space?: string | null;
  }
  /**
   * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
   */
  export interface Schema$Permission {
    /**
     * Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
     */
    allowFileDiscovery?: boolean | null;
    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean | null;
    /**
     * A displayable name for users, groups or domains.
     */
    displayName?: string | null;
    /**
     * The domain to which this permission refers.
     */
    domain?: string | null;
    /**
     * The email address of the user or group to which this permission refers.
     */
    emailAddress?: string | null;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:   - They can only be set on user and group permissions  - The time must be in the future  - The time cannot be more than a year in the future
     */
    expirationTime?: string | null;
    /**
     * The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#permission&quot;.
     */
    kind?: string | null;
    /**
     * Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
     */
    permissionDetails?: Array<{
      inherited?: boolean;
      inheritedFrom?: string;
      permissionType?: string;
      role?: string;
    }> | null;
    /**
     * A link to the user&#39;s profile photo, if available.
     */
    photoLink?: string | null;
    /**
     * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:   - owner  - organizer  - fileOrganizer  - writer  - commenter  - reader
     */
    role?: string | null;
    /**
     * Deprecated - use permissionDetails instead.
     */
    teamDrivePermissionDetails?: Array<{
      inherited?: boolean;
      inheritedFrom?: string;
      role?: string;
      teamDrivePermissionType?: string;
    }> | null;
    /**
     * The type of the grantee. Valid values are:   - user  - group  - domain  - anyone
     */
    type?: string | null;
  }
  /**
   * A list of permissions for a file.
   */
  export interface Schema$PermissionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#permissionList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    permissions?: Schema$Permission[];
  }
  /**
   * A reply to a comment on a file.
   */
  export interface Schema$Reply {
    /**
     * The action the reply performed to the parent comment. Valid values are:   - resolve  - reopen
     */
    action?: string | null;
    /**
     * The user who created the reply.
     */
    author?: Schema$User;
    /**
     * The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified.
     */
    content?: string | null;
    /**
     * The time at which the reply was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * Whether the reply has been deleted. A deleted reply has no content.
     */
    deleted?: boolean | null;
    /**
     * The content of the reply with HTML formatting.
     */
    htmlContent?: string | null;
    /**
     * The ID of the reply.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#reply&quot;.
     */
    kind?: string | null;
    /**
     * The last time the reply was modified (RFC 3339 date-time).
     */
    modifiedTime?: string | null;
  }
  /**
   * A list of replies to a comment on a file.
   */
  export interface Schema$ReplyList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#replyList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    replies?: Schema$Reply[];
  }
  /**
   * The metadata for a revision to a file.
   */
  export interface Schema$Revision {
    /**
     * Links for exporting Google Docs to specific formats.
     */
    exportLinks?: {[key: string]: string} | null;
    /**
     * The ID of the revision.
     */
    id?: string | null;
    /**
     * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.
     */
    keepForever?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#revision&quot;.
     */
    kind?: string | null;
    /**
     * The last user to modify this revision.
     */
    lastModifyingUser?: Schema$User;
    /**
     * The MD5 checksum of the revision&#39;s content. This is only applicable to files with binary content in Drive.
     */
    md5Checksum?: string | null;
    /**
     * The MIME type of the revision.
     */
    mimeType?: string | null;
    /**
     * The last time the revision was modified (RFC 3339 date-time).
     */
    modifiedTime?: string | null;
    /**
     * The original filename used to create this revision. This is only applicable to files with binary content in Drive.
     */
    originalFilename?: string | null;
    /**
     * Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs.
     */
    publishAuto?: boolean | null;
    /**
     * Whether this revision is published. This is only applicable to Google Docs.
     */
    published?: boolean | null;
    /**
     * Whether this revision is published outside the domain. This is only applicable to Google Docs.
     */
    publishedOutsideDomain?: boolean | null;
    /**
     * The size of the revision&#39;s content in bytes. This is only applicable to files with binary content in Drive.
     */
    size?: string | null;
  }
  /**
   * A list of revisions of a file.
   */
  export interface Schema$RevisionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#revisionList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    revisions?: Schema$Revision[];
  }
  export interface Schema$StartPageToken {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#startPageToken&quot;.
     */
    kind?: string | null;
    /**
     * The starting page token for listing changes.
     */
    startPageToken?: string | null;
  }
  /**
   * Deprecated: use the drive collection instead.
   */
  export interface Schema$TeamDrive {
    /**
     * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don&#39;t set themeId. When specified, all fields of the backgroundImageFile must be set.
     */
    backgroundImageFile?: {
      id?: string;
      width?: number;
      xCoordinate?: number;
      yCoordinate?: number;
    } | null;
    /**
     * A short-lived link to this Team Drive&#39;s background image.
     */
    backgroundImageLink?: string | null;
    /**
     * Capabilities the current user has on this Team Drive.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermissionRestriction?: boolean;
      canChangeDomainUsersOnlyRestriction?: boolean;
      canChangeTeamDriveBackground?: boolean;
      canChangeTeamMembersOnlyRestriction?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDeleteChildren?: boolean;
      canDeleteTeamDrive?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canManageMembers?: boolean;
      canReadRevisions?: boolean;
      canRemoveChildren?: boolean;
      canRename?: boolean;
      canRenameTeamDrive?: boolean;
      canShare?: boolean;
      canTrashChildren?: boolean;
    } | null;
    /**
     * The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
     */
    colorRgb?: string | null;
    /**
     * The time at which the Team Drive was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#teamDrive&quot;.
     */
    kind?: string | null;
    /**
     * The name of this Team Drive.
     */
    name?: string | null;
    /**
     * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
     */
    restrictions?: {
      adminManagedRestrictions?: boolean;
      copyRequiresWriterPermission?: boolean;
      domainUsersOnly?: boolean;
      teamMembersOnly?: boolean;
    } | null;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set colorRgb or backgroundImageFile.
     */
    themeId?: string | null;
  }
  /**
   * A list of Team Drives.
   */
  export interface Schema$TeamDriveList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#teamDriveList&quot;.
     */
    kind?: string | null;
    /**
     * The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    teamDrives?: Schema$TeamDrive[];
  }
  /**
   * Information about a Drive user.
   */
  export interface Schema$User {
    /**
     * A plain text displayable name for this user.
     */
    displayName?: string | null;
    /**
     * The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
     */
    emailAddress?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;drive#user&quot;.
     */
    kind?: string | null;
    /**
     * Whether this user is the requesting user.
     */
    me?: boolean | null;
    /**
     * The user&#39;s ID as visible in Permission resources.
     */
    permissionId?: string | null;
    /**
     * A link to the user&#39;s profile photo, if available.
     */
    photoLink?: string | null;
  }

  export class Resource$About {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.about.get
     * @desc Gets information about the user, the user's Drive, and system capabilities.
     * @alias drive.about.get
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$About$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$About>;
    get(
      params: Params$Resource$About$Get,
      options: MethodOptions | BodyResponseCallback<Schema$About>,
      callback: BodyResponseCallback<Schema$About>
    ): void;
    get(
      params: Params$Resource$About$Get,
      callback: BodyResponseCallback<Schema$About>
    ): void;
    get(callback: BodyResponseCallback<Schema$About>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$About$Get
        | BodyResponseCallback<Schema$About>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$About>,
      callback?: BodyResponseCallback<Schema$About>
    ): void | GaxiosPromise<Schema$About> {
      let params = (paramsOrCallback || {}) as Params$Resource$About$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$About$Get;
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
            url: (rootUrl + '/drive/v3/about').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$About>(parameters, callback);
      } else {
        return createAPIRequest<Schema$About>(parameters);
      }
    }
  }

  export interface Params$Resource$About$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }

  export class Resource$Changes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.changes.getStartPageToken
     * @desc Gets the starting pageToken for listing future changes.
     * @alias drive.changes.getStartPageToken
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.driveId The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {string=} params.teamDriveId Deprecated use driveId instead.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getStartPageToken(
      params?: Params$Resource$Changes$Getstartpagetoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StartPageToken>;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: MethodOptions | BodyResponseCallback<Schema$StartPageToken>,
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      paramsOrCallback?:
        | Params$Resource$Changes$Getstartpagetoken
        | BodyResponseCallback<Schema$StartPageToken>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$StartPageToken>,
      callback?: BodyResponseCallback<Schema$StartPageToken>
    ): void | GaxiosPromise<Schema$StartPageToken> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Changes$Getstartpagetoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Getstartpagetoken;
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
            url: (rootUrl + '/drive/v3/changes/startPageToken').replace(
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
        createAPIRequest<Schema$StartPageToken>(parameters, callback);
      } else {
        return createAPIRequest<Schema$StartPageToken>(parameters);
      }
    }

    /**
     * drive.changes.list
     * @desc Lists the changes for a user or shared drive.
     * @alias drive.changes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean=} params.includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
     * @param {boolean=} params.includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean=} params.includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
     * @param {integer=} params.pageSize The maximum number of changes to return per page.
     * @param {string} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean=} params.restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string=} params.spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {string=} params.teamDriveId Deprecated use driveId instead.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Changes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChangeList>;
    list(
      params: Params$Resource$Changes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChangeList>,
      callback: BodyResponseCallback<Schema$ChangeList>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      callback: BodyResponseCallback<Schema$ChangeList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChangeList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Changes$List
        | BodyResponseCallback<Schema$ChangeList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChangeList>,
      callback?: BodyResponseCallback<Schema$ChangeList>
    ): void | GaxiosPromise<Schema$ChangeList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$List;
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
            url: (rootUrl + '/drive/v3/changes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['pageToken'],
        pathParams: [],
        context: this.context,
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
     * @param {string=} params.driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean=} params.includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
     * @param {boolean=} params.includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean=} params.includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
     * @param {integer=} params.pageSize The maximum number of changes to return per page.
     * @param {string} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean=} params.restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string=} params.spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {string=} params.teamDriveId Deprecated use driveId instead.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
      params?: Params$Resource$Changes$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watch(
      params: Params$Resource$Changes$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Changes$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Changes$Watch
        | BodyResponseCallback<Schema$Channel>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>
    ): void | GaxiosPromise<Schema$Channel> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Watch;
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
            url: (rootUrl + '/drive/v3/changes/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['pageToken'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Changes$Getstartpagetoken
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     */
    driveId?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated use driveId instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     */
    driveId?: string;
    /**
     * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     */
    includeCorpusRemovals?: boolean;
    /**
     * Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     */
    includeRemoved?: boolean;
    /**
     * Deprecated use includeItemsFromAllDrives instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * The maximum number of changes to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     */
    pageToken?: string;
    /**
     * Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     */
    restrictToMyDrive?: boolean;
    /**
     * A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated use driveId instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$Watch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     */
    driveId?: string;
    /**
     * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     */
    includeCorpusRemovals?: boolean;
    /**
     * Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     */
    includeRemoved?: boolean;
    /**
     * Deprecated use includeItemsFromAllDrives instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * The maximum number of changes to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     */
    pageToken?: string;
    /**
     * Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     */
    restrictToMyDrive?: boolean;
    /**
     * A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated use driveId instead.
     */
    teamDriveId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Channels$Stop
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Stop;
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
            url: (rootUrl + '/drive/v3/channels/stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Comments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    create(
      params: Params$Resource$Comments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(
      params: Params$Resource$Comments$Create,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Comment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Comments$Create
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Create;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
    delete(
      params?: Params$Resource$Comments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Comments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Comments$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Delete;
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
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
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
    get(
      params?: Params$Resource$Comments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    get(
      params: Params$Resource$Comments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Comments$Get
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Get;
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
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
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
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentList>;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentList>,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>
    ): void | GaxiosPromise<Schema$CommentList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
    update(
      params?: Params$Resource$Comments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    update(
      params: Params$Resource$Comments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(
      params: Params$Resource$Comments$Update,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Comment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Comments$Update
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Update;
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
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
  }
  export interface Params$Resource$Comments$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to return deleted comments. Deleted comments will not include their original content.
     */
    includeDeleted?: boolean;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to include deleted comments. Deleted comments will not include their original content.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of comments to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
    /**
     * The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
     */
    startModifiedTime?: string;
  }
  export interface Params$Resource$Comments$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }

  export class Resource$Drives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.drives.create
     * @desc Creates a new shared drive.
     * @alias drive.drives.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     * @param {().Drive} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Drives$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Drive>;
    create(
      params: Params$Resource$Drives$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    create(
      params: Params$Resource$Drives$Create,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    create(callback: BodyResponseCallback<Schema$Drive>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Drives$Create
        | BodyResponseCallback<Schema$Drive>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback?: BodyResponseCallback<Schema$Drive>
    ): void | GaxiosPromise<Schema$Drive> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Create;
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
            url: (rootUrl + '/drive/v3/drives').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * drive.drives.delete
     * @desc Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
     * @alias drive.drives.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.driveId The ID of the shared drive.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Drives$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Drives$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Drives$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Drives$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Delete;
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
            url: (rootUrl + '/drive/v3/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * drive.drives.get
     * @desc Gets a shared drive's metadata by ID.
     * @alias drive.drives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.driveId The ID of the shared drive.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Drives$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Drive>;
    get(
      params: Params$Resource$Drives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    get(
      params: Params$Resource$Drives$Get,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    get(callback: BodyResponseCallback<Schema$Drive>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Drives$Get
        | BodyResponseCallback<Schema$Drive>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback?: BodyResponseCallback<Schema$Drive>
    ): void | GaxiosPromise<Schema$Drive> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Get;
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
            url: (rootUrl + '/drive/v3/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * drive.drives.hide
     * @desc Hides a shared drive from the default view.
     * @alias drive.drives.hide
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.driveId The ID of the shared drive.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    hide(
      params?: Params$Resource$Drives$Hide,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Drive>;
    hide(
      params: Params$Resource$Drives$Hide,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    hide(
      params: Params$Resource$Drives$Hide,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    hide(callback: BodyResponseCallback<Schema$Drive>): void;
    hide(
      paramsOrCallback?:
        | Params$Resource$Drives$Hide
        | BodyResponseCallback<Schema$Drive>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback?: BodyResponseCallback<Schema$Drive>
    ): void | GaxiosPromise<Schema$Drive> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Hide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Hide;
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
            url: (rootUrl + '/drive/v3/drives/{driveId}/hide').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * drive.drives.list
     * @desc Lists the user's shared drives.
     * @alias drive.drives.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of shared drives to return.
     * @param {string=} params.pageToken Page token for shared drives.
     * @param {string=} params.q Query string for searching shared drives.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Drives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DriveList>;
    list(
      params: Params$Resource$Drives$List,
      options: MethodOptions | BodyResponseCallback<Schema$DriveList>,
      callback: BodyResponseCallback<Schema$DriveList>
    ): void;
    list(
      params: Params$Resource$Drives$List,
      callback: BodyResponseCallback<Schema$DriveList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DriveList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Drives$List
        | BodyResponseCallback<Schema$DriveList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DriveList>,
      callback?: BodyResponseCallback<Schema$DriveList>
    ): void | GaxiosPromise<Schema$DriveList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$List;
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
            url: (rootUrl + '/drive/v3/drives').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DriveList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DriveList>(parameters);
      }
    }

    /**
     * drive.drives.unhide
     * @desc Restores a shared drive to the default view.
     * @alias drive.drives.unhide
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.driveId The ID of the shared drive.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unhide(
      params?: Params$Resource$Drives$Unhide,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Drive>;
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    unhide(
      params: Params$Resource$Drives$Unhide,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    unhide(callback: BodyResponseCallback<Schema$Drive>): void;
    unhide(
      paramsOrCallback?:
        | Params$Resource$Drives$Unhide
        | BodyResponseCallback<Schema$Drive>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback?: BodyResponseCallback<Schema$Drive>
    ): void | GaxiosPromise<Schema$Drive> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Unhide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Unhide;
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
            url: (rootUrl + '/drive/v3/drives/{driveId}/unhide').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * drive.drives.update
     * @desc Updates the metadate for a shared drive.
     * @alias drive.drives.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.driveId The ID of the shared drive.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {().Drive} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Drives$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Drive>;
    update(
      params: Params$Resource$Drives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    update(
      params: Params$Resource$Drives$Update,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    update(callback: BodyResponseCallback<Schema$Drive>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Drives$Update
        | BodyResponseCallback<Schema$Drive>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback?: BodyResponseCallback<Schema$Drive>
    ): void | GaxiosPromise<Schema$Drive> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Update;
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
            url: (rootUrl + '/drive/v3/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }
  }

  export interface Params$Resource$Drives$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Drive;
  }
  export interface Params$Resource$Drives$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Hide extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of shared drives to return.
     */
    pageSize?: number;
    /**
     * Page token for shared drives.
     */
    pageToken?: string;
    /**
     * Query string for searching shared drives.
     */
    q?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Unhide extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Drive;
  }

  export class Resource$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.files.copy
     * @desc Creates a copy of a file and applies any requested updates with patch semantics.
     * @alias drive.files.copy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
     * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {().File} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copy(
      params?: Params$Resource$Files$Copy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    copy(
      params: Params$Resource$Files$Copy,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    copy(
      params: Params$Resource$Files$Copy,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    copy(callback: BodyResponseCallback<Schema$File>): void;
    copy(
      paramsOrCallback?:
        | Params$Resource$Files$Copy
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Copy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Copy;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/copy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
     * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
     * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the uploaded content as indexable text.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Files$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    create(
      params: Params$Resource$Files$Create,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    create(
      params: Params$Resource$Files$Create,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    create(callback: BodyResponseCallback<Schema$File>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Files$Create
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Create;
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
            url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v3/files').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * drive.files.delete
     * @desc Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
     * @alias drive.files.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Files$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Files$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Files$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Files$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Delete;
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
            url: (rootUrl + '/drive/v3/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
    emptyTrash(
      params?: Params$Resource$Files$Emptytrash,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      callback: BodyResponseCallback<void>
    ): void;
    emptyTrash(callback: BodyResponseCallback<void>): void;
    emptyTrash(
      paramsOrCallback?:
        | Params$Resource$Files$Emptytrash
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Emptytrash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Emptytrash;
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
            url: (rootUrl + '/drive/v3/files/trash').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * drive.files.export
     * @desc Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
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
    export(
      params?: Params$Resource$Files$Export,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    export(
      params: Params$Resource$Files$Export,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    export(
      params: Params$Resource$Files$Export,
      callback: BodyResponseCallback<void>
    ): void;
    export(callback: BodyResponseCallback<void>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Files$Export
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Export;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/export').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'mimeType'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * drive.files.generateIds
     * @desc Generates a set of file IDs which can be provided in create or copy requests.
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
    generateIds(
      params?: Params$Resource$Files$Generateids,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GeneratedIds>;
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: MethodOptions | BodyResponseCallback<Schema$GeneratedIds>,
      callback: BodyResponseCallback<Schema$GeneratedIds>
    ): void;
    generateIds(
      params: Params$Resource$Files$Generateids,
      callback: BodyResponseCallback<Schema$GeneratedIds>
    ): void;
    generateIds(callback: BodyResponseCallback<Schema$GeneratedIds>): void;
    generateIds(
      paramsOrCallback?:
        | Params$Resource$Files$Generateids
        | BodyResponseCallback<Schema$GeneratedIds>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GeneratedIds>,
      callback?: BodyResponseCallback<Schema$GeneratedIds>
    ): void | GaxiosPromise<Schema$GeneratedIds> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Files$Generateids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Generateids;
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
            url: (rootUrl + '/drive/v3/files/generateIds').replace(
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
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Files$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    get(
      params: Params$Resource$Files$Get,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(
      params: Params$Resource$Files$Get,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(callback: BodyResponseCallback<Schema$File>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Files$Get
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Get;
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
            url: (rootUrl + '/drive/v3/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
     * @param {string=} params.corpora Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive' and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency.
     * @param {string=} params.corpus The source of files to list. Deprecated: use 'corpora' instead.
     * @param {string=} params.driveId ID of the shared drive to search.
     * @param {boolean=} params.includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
     * @param {boolean=} params.includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
     * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     * @param {integer=} params.pageSize The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {string=} params.q A query for filtering the file results. See the "Search for Files" guide for supported syntax.
     * @param {string=} params.spaces A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {string=} params.teamDriveId Deprecated use driveId instead.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FileList>;
    list(
      params: Params$Resource$Files$List,
      options: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(
      params: Params$Resource$Files$List,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(callback: BodyResponseCallback<Schema$FileList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Files$List
        | BodyResponseCallback<Schema$FileList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback?: BodyResponseCallback<Schema$FileList>
    ): void | GaxiosPromise<Schema$FileList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$List;
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
            url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
     * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {string=} params.removeParents A comma-separated list of parent IDs to remove.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the uploaded content as indexable text.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Files$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    update(
      params: Params$Resource$Files$Update,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    update(
      params: Params$Resource$Files$Update,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    update(callback: BodyResponseCallback<Schema$File>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Files$Update
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Update;
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
            url: (rootUrl + '/drive/v3/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v3/files/{fileId}').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
      params?: Params$Resource$Files$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watch(
      params: Params$Resource$Files$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Files$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Files$Watch
        | BodyResponseCallback<Schema$Channel>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>
    ): void | GaxiosPromise<Schema$Channel> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Watch;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Files$Copy extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     */
    ignoreDefaultVisibility?: boolean;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
     */
    keepRevisionForever?: boolean;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;
  }
  export interface Params$Resource$Files$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     */
    ignoreDefaultVisibility?: boolean;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
     */
    keepRevisionForever?: boolean;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to use the uploaded content as indexable text.
     */
    useContentAsIndexableText?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Files$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$Emptytrash extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Files$Export extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The MIME type of the format requested for this export.
     */
    mimeType?: string;
  }
  export interface Params$Resource$Files$Generateids
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The number of IDs to return.
     */
    count?: number;
    /**
     * The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
     */
    space?: string;
  }
  export interface Params$Resource$Files$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive' and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency.
     */
    corpora?: string;
    /**
     * The source of files to list. Deprecated: use 'corpora' instead.
     */
    corpus?: string;
    /**
     * ID of the shared drive to search.
     */
    driveId?: string;
    /**
     * Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * Deprecated use includeItemsFromAllDrives instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     */
    orderBy?: string;
    /**
     * The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
    /**
     * A query for filtering the file results. See the "Search for Files" guide for supported syntax.
     */
    q?: string;
    /**
     * A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated use driveId instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Files$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A comma-separated list of parent IDs to add.
     */
    addParents?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
     */
    keepRevisionForever?: boolean;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
    /**
     * A comma-separated list of parent IDs to remove.
     */
    removeParents?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to use the uploaded content as indexable text.
     */
    useContentAsIndexableText?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Files$Watch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.permissions.create
     * @desc Creates a permission for a file or shared drive.
     * @alias drive.permissions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.emailMessage A plain text custom message to include in the notification email.
     * @param {string} params.fileId The ID of the file or shared drive.
     * @param {boolean=} params.sendNotificationEmail Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {().Permission} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Permissions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Permission>;
    create(
      params: Params$Resource$Permissions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    create(
      params: Params$Resource$Permissions$Create,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    create(callback: BodyResponseCallback<Schema$Permission>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Permissions$Create
        | BodyResponseCallback<Schema$Permission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>
    ): void | GaxiosPromise<Schema$Permission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Create;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
     * @param {string} params.fileId The ID of the file or shared drive.
     * @param {string} params.permissionId The ID of the permission.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Permissions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Permissions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Permissions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Permissions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Delete;
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
              rootUrl + '/drive/v3/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
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
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Permissions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Permission>;
    get(
      params: Params$Resource$Permissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    get(callback: BodyResponseCallback<Schema$Permission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Permissions$Get
        | BodyResponseCallback<Schema$Permission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>
    ): void | GaxiosPromise<Schema$Permission> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Get;
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
              rootUrl + '/drive/v3/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }

    /**
     * drive.permissions.list
     * @desc Lists a file's or shared drive's permissions.
     * @alias drive.permissions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file or shared drive.
     * @param {integer=} params.pageSize The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Permissions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PermissionList>;
    list(
      params: Params$Resource$Permissions$List,
      options: MethodOptions | BodyResponseCallback<Schema$PermissionList>,
      callback: BodyResponseCallback<Schema$PermissionList>
    ): void;
    list(
      params: Params$Resource$Permissions$List,
      callback: BodyResponseCallback<Schema$PermissionList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PermissionList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Permissions$List
        | BodyResponseCallback<Schema$PermissionList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PermissionList>,
      callback?: BodyResponseCallback<Schema$PermissionList>
    ): void | GaxiosPromise<Schema$PermissionList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$List;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
     * @param {string} params.fileId The ID of the file or shared drive.
     * @param {string} params.permissionId The ID of the permission.
     * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
     * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
     * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {().Permission} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Permissions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Permission>;
    update(
      params: Params$Resource$Permissions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    update(callback: BodyResponseCallback<Schema$Permission>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Permissions$Update
        | BodyResponseCallback<Schema$Permission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>
    ): void | GaxiosPromise<Schema$Permission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Update;
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
              rootUrl + '/drive/v3/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }
  }

  export interface Params$Resource$Permissions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A plain text custom message to include in the notification email.
     */
    emailMessage?: string;
    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     */
    sendNotificationEmail?: boolean;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     */
    transferOwnership?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }
  export interface Params$Resource$Permissions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID of the permission.
     */
    permissionId?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the permission.
     */
    permissionId?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID of the permission.
     */
    permissionId?: string;
    /**
     * Whether to remove the expiration date.
     */
    removeExpiration?: boolean;
    /**
     * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     */
    transferOwnership?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }

  export class Resource$Replies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    create(
      params?: Params$Resource$Replies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reply>;
    create(
      params: Params$Resource$Replies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    create(
      params: Params$Resource$Replies$Create,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    create(callback: BodyResponseCallback<Schema$Reply>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Replies$Create
        | BodyResponseCallback<Schema$Reply>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback?: BodyResponseCallback<Schema$Reply>
    ): void | GaxiosPromise<Schema$Reply> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Create;
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
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}/replies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
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
    delete(
      params?: Params$Resource$Replies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Replies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Replies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Replies$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Delete;
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
              rootUrl +
              '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
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
    get(
      params?: Params$Resource$Replies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reply>;
    get(
      params: Params$Resource$Replies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    get(
      params: Params$Resource$Replies$Get,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    get(callback: BodyResponseCallback<Schema$Reply>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Replies$Get
        | BodyResponseCallback<Schema$Reply>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback?: BodyResponseCallback<Schema$Reply>
    ): void | GaxiosPromise<Schema$Reply> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Get;
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
              rootUrl +
              '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
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
    list(
      params?: Params$Resource$Replies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReplyList>;
    list(
      params: Params$Resource$Replies$List,
      options: MethodOptions | BodyResponseCallback<Schema$ReplyList>,
      callback: BodyResponseCallback<Schema$ReplyList>
    ): void;
    list(
      params: Params$Resource$Replies$List,
      callback: BodyResponseCallback<Schema$ReplyList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReplyList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Replies$List
        | BodyResponseCallback<Schema$ReplyList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReplyList>,
      callback?: BodyResponseCallback<Schema$ReplyList>
    ): void | GaxiosPromise<Schema$ReplyList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$List;
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
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}/replies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
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
    update(
      params?: Params$Resource$Replies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reply>;
    update(
      params: Params$Resource$Replies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    update(
      params: Params$Resource$Replies$Update,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    update(callback: BodyResponseCallback<Schema$Reply>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Replies$Update
        | BodyResponseCallback<Schema$Reply>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback?: BodyResponseCallback<Schema$Reply>
    ): void | GaxiosPromise<Schema$Reply> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Update;
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
              rootUrl +
              '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }
  }

  export interface Params$Resource$Replies$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reply;
  }
  export interface Params$Resource$Replies$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;
  }
  export interface Params$Resource$Replies$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to return deleted replies. Deleted replies will not include their original content.
     */
    includeDeleted?: boolean;
    /**
     * The ID of the reply.
     */
    replyId?: string;
  }
  export interface Params$Resource$Replies$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to include deleted replies. Deleted replies will not include their original content.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of replies to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Replies$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reply;
  }

  export class Resource$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.revisions.delete
     * @desc Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
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
    delete(
      params?: Params$Resource$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Revisions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Revisions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Delete;
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
              rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
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
    get(
      params?: Params$Resource$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Revisions$Get
        | BodyResponseCallback<Schema$Revision>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback?: BodyResponseCallback<Schema$Revision>
    ): void | GaxiosPromise<Schema$Revision> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Get;
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
              rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
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
    list(
      params?: Params$Resource$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevisionList>;
    list(
      params: Params$Resource$Revisions$List,
      options: MethodOptions | BodyResponseCallback<Schema$RevisionList>,
      callback: BodyResponseCallback<Schema$RevisionList>
    ): void;
    list(
      params: Params$Resource$Revisions$List,
      callback: BodyResponseCallback<Schema$RevisionList>
    ): void;
    list(callback: BodyResponseCallback<Schema$RevisionList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Revisions$List
        | BodyResponseCallback<Schema$RevisionList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevisionList>,
      callback?: BodyResponseCallback<Schema$RevisionList>
    ): void | GaxiosPromise<Schema$RevisionList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$List;
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
            url: (rootUrl + '/drive/v3/files/{fileId}/revisions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
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
    update(
      params?: Params$Resource$Revisions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    update(
      params: Params$Resource$Revisions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    update(
      params: Params$Resource$Revisions$Update,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    update(callback: BodyResponseCallback<Schema$Revision>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Revisions$Update
        | BodyResponseCallback<Schema$Revision>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback?: BodyResponseCallback<Schema$Revision>
    ): void | GaxiosPromise<Schema$Revision> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Update;
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
              rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }
  }

  export interface Params$Resource$Revisions$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Revisions$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Revisions$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The maximum number of revisions to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Revisions$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Revision;
  }

  export class Resource$Teamdrives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * drive.teamdrives.create
     * @desc Deprecated use drives.create instead.
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
    create(
      params?: Params$Resource$Teamdrives$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TeamDrive>;
    create(
      params: Params$Resource$Teamdrives$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    create(
      params: Params$Resource$Teamdrives$Create,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    create(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Create
        | BodyResponseCallback<Schema$TeamDrive>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TeamDrive>,
      callback?: BodyResponseCallback<Schema$TeamDrive>
    ): void | GaxiosPromise<Schema$TeamDrive> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Create;
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
            url: (rootUrl + '/drive/v3/teamdrives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }

    /**
     * drive.teamdrives.delete
     * @desc Deprecated use drives.delete instead.
     * @alias drive.teamdrives.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Teamdrives$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Delete;
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
            url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * drive.teamdrives.get
     * @desc Deprecated use drives.get instead.
     * @alias drive.teamdrives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Teamdrives$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TeamDrive>;
    get(
      params: Params$Resource$Teamdrives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    get(
      params: Params$Resource$Teamdrives$Get,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    get(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Get
        | BodyResponseCallback<Schema$TeamDrive>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TeamDrive>,
      callback?: BodyResponseCallback<Schema$TeamDrive>
    ): void | GaxiosPromise<Schema$TeamDrive> {
      let params = (paramsOrCallback || {}) as Params$Resource$Teamdrives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Get;
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
            url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }

    /**
     * drive.teamdrives.list
     * @desc Deprecated use drives.list instead.
     * @alias drive.teamdrives.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of Team Drives to return.
     * @param {string=} params.pageToken Page token for Team Drives.
     * @param {string=} params.q Query string for searching Team Drives.
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Teamdrives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TeamDriveList>;
    list(
      params: Params$Resource$Teamdrives$List,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDriveList>,
      callback: BodyResponseCallback<Schema$TeamDriveList>
    ): void;
    list(
      params: Params$Resource$Teamdrives$List,
      callback: BodyResponseCallback<Schema$TeamDriveList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TeamDriveList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$List
        | BodyResponseCallback<Schema$TeamDriveList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TeamDriveList>,
      callback?: BodyResponseCallback<Schema$TeamDriveList>
    ): void | GaxiosPromise<Schema$TeamDriveList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Teamdrives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$List;
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
            url: (rootUrl + '/drive/v3/teamdrives').replace(
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
        createAPIRequest<Schema$TeamDriveList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDriveList>(parameters);
      }
    }

    /**
     * drive.teamdrives.update
     * @desc Deprecated use drives.update instead
     * @alias drive.teamdrives.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
     * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @param {().TeamDrive} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Teamdrives$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TeamDrive>;
    update(
      params: Params$Resource$Teamdrives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    update(
      params: Params$Resource$Teamdrives$Update,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    update(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Update
        | BodyResponseCallback<Schema$TeamDrive>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TeamDrive>,
      callback?: BodyResponseCallback<Schema$TeamDrive>
    ): void | GaxiosPromise<Schema$TeamDrive> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Update;
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
            url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }
  }

  export interface Params$Resource$Teamdrives$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TeamDrive;
  }
  export interface Params$Resource$Teamdrives$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Teamdrives$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Teamdrives$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of Team Drives to return.
     */
    pageSize?: number;
    /**
     * Page token for Team Drives.
     */
    pageToken?: string;
    /**
     * Query string for searching Team Drives.
     */
    q?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Teamdrives$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TeamDrive;
  }
}
