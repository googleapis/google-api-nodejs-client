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

import {createAPIRequest} from '../../lib/apirequest';

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
function Drive(options) {
  const self = this;
  self._options = options || {};
  self.about = {
    /**
     * drive.about.get
     * @desc Gets the information about the current user along with Drive API
     * settings
     * @alias drive.about.get
     * @memberOf! drive(v2)
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.includeSubscribed When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
     * @param {string=} params.maxChangeIdCount Maximum number of remaining change IDs to count
     * @param {string=} params.startChangeId Change ID to start counting from when calculating number of remaining change IDs
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.apps = {
    /**
     * drive.apps.get
     * @desc Gets a specific app.
     * @alias drive.apps.get
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.appId The ID of the app.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.apps.list
        * @desc Lists a user's installed apps.
        * @alias drive.apps.list
        * @memberOf! drive(v2)
        *
        * @param {object=} params Parameters for request
        * @param {string=} params.appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
        * @param {string=} params.appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
        * @param {string=} params.languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.changes = {
    /**
     * drive.changes.get
     * @desc Gets a specific change.
     * @alias drive.changes.get
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.changeId The ID of the change.
     * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
     * @param {string=} params.teamDriveId The Team Drive from which the change will be returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.changes.getStartPageToken
        * @desc Gets the starting pageToken for listing future changes.
        * @alias drive.changes.getStartPageToken
        * @memberOf! drive(v2)
        *
        * @param {object=} params Parameters for request
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {string=} params.teamDriveId The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getStartPageToken(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.changes.list
        * @desc Lists the changes for a user or Team Drive.
        * @alias drive.changes.list
        * @memberOf! drive(v2)
        *
        * @param {object=} params Parameters for request
        * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
        * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
        * @param {boolean=} params.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
        * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
        * @param {integer=} params.maxResults Maximum number of changes to return.
        * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
        * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
        * @param {string=} params.startChangeId Change ID to start listing changes from.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
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
                  (rootUrl + '/drive/v2/changes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.changes.watch
        * @desc Subscribe to changes for a user.
        * @alias drive.changes.watch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
        * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
        * @param {boolean=} params.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
        * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
        * @param {integer=} params.maxResults Maximum number of changes to return.
        * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
        * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
        * @param {string=} params.startChangeId Change ID to start listing changes from.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
        * @param {drive(v2).Channel} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    watch(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.channels = {
    /**
     * drive.channels.stop
     * @desc Stop watching resources through this channel
     * @alias drive.channels.stop
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {drive(v2).Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.children = {
    /**
     * drive.children.delete
     * @desc Removes a child from a folder.
     * @alias drive.children.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.childId The ID of the child.
     * @param {string} params.folderId The ID of the folder.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.children.get
        * @desc Gets a specific child reference.
        * @alias drive.children.get
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.childId The ID of the child.
        * @param {string} params.folderId The ID of the folder.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.children.insert
        * @desc Inserts a file into a folder.
        * @alias drive.children.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.folderId The ID of the folder.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {drive(v2).ChildReference} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.children.list
        * @desc Lists a folder's children.
        * @alias drive.children.list
        * @memberOf! drive(v2)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.comments = {
    /**
     * drive.comments.delete
     * @desc Deletes a comment.
     * @alias drive.comments.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.comments.get
        * @desc Gets a comment by ID.
        * @alias drive.comments.get
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.commentId The ID of the comment.
        * @param {string} params.fileId The ID of the file.
        * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.comments.insert
        * @desc Creates a new comment on the given file.
        * @alias drive.comments.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {drive(v2).Comment} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.comments.list
        * @desc Lists a file's comments.
        * @alias drive.comments.list
        * @memberOf! drive(v2)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.comments.patch
        * @desc Updates an existing comment. This method supports patch
        * semantics.
        * @alias drive.comments.patch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.commentId The ID of the comment.
        * @param {string} params.fileId The ID of the file.
        * @param {drive(v2).Comment} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.comments.update
        * @desc Updates an existing comment.
        * @alias drive.comments.update
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.commentId The ID of the comment.
        * @param {string} params.fileId The ID of the file.
        * @param {drive(v2).Comment} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.files = {
    /**
     * drive.files.copy
     * @desc Creates a copy of the specified file.
     * @alias drive.files.copy
     * @memberOf! drive(v2)
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
     * @param {drive(v2).File} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copy(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.delete
        * @desc Permanently deletes a file by ID. Skips the trash. The currently
        * authenticated user must own the file or be an organizer on the parent
        * for Team Drive files.
        * @alias drive.files.delete
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file to delete.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.emptyTrash
        * @desc Permanently deletes all of the user's trashed files.
        * @alias drive.files.emptyTrash
        * @memberOf! drive(v2)
        *
        * @param {object=} params Parameters for request
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    emptyTrash(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.export
        * @desc Exports a Google Doc to the requested MIME type and returns the
        * exported content. Please note that the exported content is limited to
        * 10MB.
        * @alias drive.files.export
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.mimeType The MIME type of the format requested for this export.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    export(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.generateIds
        * @desc Generates a set of file IDs which can be provided in insert
        * requests.
        * @alias drive.files.generateIds
        * @memberOf! drive(v2)
        *
        * @param {object=} params Parameters for request
        * @param {integer=} params.maxResults Maximum number of IDs to return.
        * @param {string=} params.space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    generateIds(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.get
        * @desc Gets a file's metadata by ID.
        * @alias drive.files.get
        * @memberOf! drive(v2)
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
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.insert
        * @desc Insert a new file.
        * @alias drive.files.insert
        * @memberOf! drive(v2)
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
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.list
        * @desc Lists the user's files.
        * @alias drive.files.list
        * @memberOf! drive(v2)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.patch
        * @desc Updates file metadata and/or content. This method supports patch
        * semantics.
        * @alias drive.files.patch
        * @memberOf! drive(v2)
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
        * @param {boolean=} params.setModifiedDate Whether to set the modified date with the supplied modified date.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {string=} params.timedTextLanguage The language of the timed text.
        * @param {string=} params.timedTextTrackName The timed text track name.
        * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
        * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
        * @param {drive(v2).File} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.touch
        * @desc Set the file's updated time to the current server time.
        * @alias drive.files.touch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file to update.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    touch(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.trash
        * @desc Moves a file to the trash. The currently authenticated user must
        * own the file or be an organizer on the parent for Team Drive files.
        * @alias drive.files.trash
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file to trash.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    trash(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.untrash
        * @desc Restores a file from the trash.
        * @alias drive.files.untrash
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file to untrash.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    untrash(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.update
        * @desc Updates file metadata and/or content.
        * @alias drive.files.update
        * @memberOf! drive(v2)
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
        * @param {boolean=} params.setModifiedDate Whether to set the modified date with the supplied modified date.
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
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.files.watch
        * @desc Subscribe to changes on a file
        * @alias drive.files.watch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
        * @param {string} params.fileId The ID for the file in question.
        * @param {string=} params.projection This parameter is deprecated and has no function.
        * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
        * @param {drive(v2).Channel} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    watch(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.parents = {
    /**
     * drive.parents.delete
     * @desc Removes a parent from a file.
     * @alias drive.parents.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.parentId The ID of the parent.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.parents.get
        * @desc Gets a specific parent reference.
        * @alias drive.parents.get
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.parentId The ID of the parent.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.parents.insert
        * @desc Adds a parent folder for a file.
        * @alias drive.parents.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {drive(v2).ParentReference} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.parents.list
        * @desc Lists a file's parents.
        * @alias drive.parents.list
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.permissions = {
    /**
     * drive.permissions.delete
     * @desc Deletes a permission from a file or Team Drive.
     * @alias drive.permissions.delete
     * @memberOf! drive(v2)
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
    delete (params, options, callback) {
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
                    '/drive/v2/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.permissions.get
        * @desc Gets a permission by ID.
        * @alias drive.permissions.get
        * @memberOf! drive(v2)
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
    get(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.permissions.getIdForEmail
        * @desc Returns the permission ID for an email address.
        * @alias drive.permissions.getIdForEmail
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.email The email address for which to return a permission ID
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getIdForEmail(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.permissions.insert
        * @desc Inserts a permission for a file or Team Drive.
        * @alias drive.permissions.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.emailMessage A custom message to include in notification emails.
        * @param {string} params.fileId The ID for the file or Team Drive.
        * @param {boolean=} params.sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
        * @param {drive(v2).Permission} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.permissions.list
        * @desc Lists a file's or Team Drive's permissions.
        * @alias drive.permissions.list
        * @memberOf! drive(v2)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.permissions.patch
        * @desc Updates a permission using patch semantics.
        * @alias drive.permissions.patch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID for the file or Team Drive.
        * @param {string} params.permissionId The ID for the permission.
        * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
        * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
        * @param {drive(v2).Permission} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.permissions.update
        * @desc Updates a permission.
        * @alias drive.permissions.update
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID for the file or Team Drive.
        * @param {string} params.permissionId The ID for the permission.
        * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
        * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
        * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
        * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
        * @param {drive(v2).Permission} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/permissions/{permissionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.properties = {
    /**
     * drive.properties.delete
     * @desc Deletes a property.
     * @alias drive.properties.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.propertyKey The key of the property.
     * @param {string=} params.visibility The visibility of the property.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
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
                    '/drive/v2/files/{fileId}/properties/{propertyKey}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.properties.get
        * @desc Gets a property by its key.
        * @alias drive.properties.get
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.propertyKey The key of the property.
        * @param {string=} params.visibility The visibility of the property.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/properties/{propertyKey}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.properties.insert
        * @desc Adds a property to a file, or updates it if it already exists.
        * @alias drive.properties.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {drive(v2).Property} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.properties.list
        * @desc Lists a file's properties.
        * @alias drive.properties.list
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.properties.patch
        * @desc Updates a property, or adds it if it doesn't exist. This method
        * supports patch semantics.
        * @alias drive.properties.patch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.propertyKey The key of the property.
        * @param {string=} params.visibility The visibility of the property.
        * @param {drive(v2).Property} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/properties/{propertyKey}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.properties.update
        * @desc Updates a property, or adds it if it doesn't exist.
        * @alias drive.properties.update
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.propertyKey The key of the property.
        * @param {string=} params.visibility The visibility of the property.
        * @param {drive(v2).Property} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/properties/{propertyKey}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.realtime = {
    /**
     * drive.realtime.get
     * @desc Exports the contents of the Realtime API data model associated with
     * this file as JSON.
     * @alias drive.realtime.get
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
     * @param {integer=} params.revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.realtime.update
        * @desc Overwrites the Realtime API data model associated with this file
        * with the provided JSON data model.
        * @alias drive.realtime.update
        * @memberOf! drive(v2)
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
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.replies = {
    /**
     * drive.replies.delete
     * @desc Deletes a reply.
     * @alias drive.replies.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.replyId The ID of the reply.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
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
                   '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.replies.get
        * @desc Gets a reply.
        * @alias drive.replies.get
        * @memberOf! drive(v2)
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
    get(params, options, callback) {
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
                   '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.replies.insert
        * @desc Creates a new reply to the given comment.
        * @alias drive.replies.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.commentId The ID of the comment.
        * @param {string} params.fileId The ID of the file.
        * @param {drive(v2).CommentReply} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/comments/{commentId}/replies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.replies.list
        * @desc Lists all of the replies to a comment.
        * @alias drive.replies.list
        * @memberOf! drive(v2)
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
    list(params, options, callback) {
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
                    '/drive/v2/files/{fileId}/comments/{commentId}/replies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.replies.patch
        * @desc Updates an existing reply. This method supports patch semantics.
        * @alias drive.replies.patch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.commentId The ID of the comment.
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.replyId The ID of the reply.
        * @param {drive(v2).CommentReply} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(params, options, callback) {
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
                   '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.replies.update
        * @desc Updates an existing reply.
        * @alias drive.replies.update
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.commentId The ID of the comment.
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.replyId The ID of the reply.
        * @param {drive(v2).CommentReply} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
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
                   '/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.revisions = {
    /**
     * drive.revisions.delete
     * @desc Removes a revision.
     * @alias drive.revisions.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.revisionId The ID of the revision.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.revisions.get
        * @desc Gets a specific revision.
        * @alias drive.revisions.get
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {string} params.revisionId The ID of the revision.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.revisions.list
        * @desc Lists a file's revisions.
        * @alias drive.revisions.list
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID of the file.
        * @param {integer=} params.maxResults Maximum number of revisions to return.
        * @param {string=} params.pageToken Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.revisions.patch
        * @desc Updates a revision. This method supports patch semantics.
        * @alias drive.revisions.patch
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID for the file.
        * @param {string} params.revisionId The ID for the revision.
        * @param {drive(v2).Revision} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    patch(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.revisions.update
        * @desc Updates a revision.
        * @alias drive.revisions.update
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.fileId The ID for the file.
        * @param {string} params.revisionId The ID for the revision.
        * @param {drive(v2).Revision} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.teamdrives = {
    /**
     * drive.teamdrives.delete
     * @desc Permanently deletes a Team Drive for which the user is an
     * organizer. The Team Drive cannot contain any untrashed items.
     * @alias drive.teamdrives.delete
     * @memberOf! drive(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamDriveId The ID of the Team Drive
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.teamdrives.get
        * @desc Gets a Team Drive's metadata by ID.
        * @alias drive.teamdrives.get
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.teamDriveId The ID of the Team Drive
        * @param {boolean=} params.useDomainAdminAccess Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.teamdrives.insert
        * @desc Creates a new Team Drive.
        * @alias drive.teamdrives.insert
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
        * @param {drive(v2).TeamDrive} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.teamdrives.list
        * @desc Lists the user's Team Drives.
        * @alias drive.teamdrives.list
        * @memberOf! drive(v2)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * drive.teamdrives.update
        * @desc Updates a Team Drive's metadata
        * @alias drive.teamdrives.update
        * @memberOf! drive(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.teamDriveId The ID of the Team Drive
        * @param {drive(v2).TeamDrive} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef About
 * @memberOf! drive(v2)
 * @type object
 * @property {object[]} additionalRoleInfo Information about supported additional roles per file type. The most specific type takes precedence.
 * @property {string} domainSharingPolicy The domain sharing policy for the current user. Possible values are:   - allowed  - allowedWithWarning  - incomingOnly  - disallowed
 * @property {string} etag The ETag of the item.
 * @property {object[]} exportFormats The allowable export formats.
 * @property {object[]} features List of additional features enabled on this account.
 * @property {string[]} folderColorPalette The palette of allowable folder colors as RGB hex strings.
 * @property {object[]} importFormats The allowable import formats.
 * @property {boolean} isCurrentAppInstalled A boolean indicating whether the authenticated app is installed by the authenticated user.
 * @property {string} kind This is always drive#about.
 * @property {string} languageCode The user&#39;s language or locale code, as defined by BCP 47, with some extensions from Unicode&#39;s LDML format (http://www.unicode.org/reports/tr35/).
 * @property {string} largestChangeId The largest change id.
 * @property {object[]} maxUploadSizes List of max upload sizes for each file type. The most specific type takes precedence.
 * @property {string} name The name of the current user.
 * @property {string} permissionId The current user&#39;s ID as visible in the permissions collection.
 * @property {object[]} quotaBytesByService The amount of storage quota used by different Google services.
 * @property {string} quotaBytesTotal The total number of quota bytes.
 * @property {string} quotaBytesUsed The number of quota bytes used by Google Drive.
 * @property {string} quotaBytesUsedAggregate The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
 * @property {string} quotaBytesUsedInTrash The number of quota bytes used by trashed items.
 * @property {string} quotaType The type of the user&#39;s storage quota. Possible values are:   - LIMITED  - UNLIMITED
 * @property {string} remainingChangeIds The number of remaining change ids, limited to no more than 2500.
 * @property {string} rootFolderId The id of the root folder.
 * @property {string} selfLink A link back to this item.
 * @property {object[]} teamDriveThemes A list of themes that are supported for Team Drives.
 * @property {drive(v2).User} user The authenticated user.
 */
/**
 * @typedef App
 * @memberOf! drive(v2)
 * @type object
 * @property {boolean} authorized Whether the app is authorized to access data on the user&#39;s Drive.
 * @property {string} createInFolderTemplate The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
 * @property {string} createUrl The url to create a new file with this app.
 * @property {boolean} hasDriveWideScope Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user&#39;s drive.
 * @property {object[]} icons The various icons for the app.
 * @property {string} id The ID of the app.
 * @property {boolean} installed Whether the app is installed.
 * @property {string} kind This is always drive#app.
 * @property {string} longDescription A long description of the app.
 * @property {string} name The name of the app.
 * @property {string} objectType The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
 * @property {string} openUrlTemplate The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation.
 * @property {string[]} primaryFileExtensions The list of primary file extensions.
 * @property {string[]} primaryMimeTypes The list of primary mime types.
 * @property {string} productId The ID of the product listing for this app.
 * @property {string} productUrl A link to the product listing for this app.
 * @property {string[]} secondaryFileExtensions The list of secondary file extensions.
 * @property {string[]} secondaryMimeTypes The list of secondary mime types.
 * @property {string} shortDescription A short description of the app.
 * @property {boolean} supportsCreate Whether this app supports creating new objects.
 * @property {boolean} supportsImport Whether this app supports importing Google Docs.
 * @property {boolean} supportsMultiOpen Whether this app supports opening more than one file.
 * @property {boolean} supportsOfflineCreate Whether this app supports creating new files when offline.
 * @property {boolean} useByDefault Whether the app is selected as the default handler for the types it supports.
 */
/**
 * @typedef AppList
 * @memberOf! drive(v2)
 * @type object
 * @property {string[]} defaultAppIds List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).App[]} items The list of apps.
 * @property {string} kind This is always drive#appList.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef Change
 * @memberOf! drive(v2)
 * @type object
 * @property {boolean} deleted Whether the file or Team Drive has been removed from this list of changes, for example by deletion or loss of access.
 * @property {drive(v2).File} file The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
 * @property {string} fileId The ID of the file associated with this change.
 * @property {string} id The ID of the change.
 * @property {string} kind This is always drive#change.
 * @property {string} modificationDate The time of this modification.
 * @property {string} selfLink A link back to this change.
 * @property {drive(v2).TeamDrive} teamDrive The updated state of the Team Drive. Present if the type is teamDrive, the user is still a member of the Team Drive, and the Team Drive has not been deleted.
 * @property {string} teamDriveId The ID of the Team Drive associated with this change.
 * @property {string} type The type of the change. Possible values are file and teamDrive.
 */
/**
 * @typedef ChangeList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).Change[]} items The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
 * @property {string} kind This is always drive#changeList.
 * @property {string} largestChangeId The current largest change ID.
 * @property {string} newStartPageToken The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
 * @property {string} nextLink A link to the next page of changes.
 * @property {string} nextPageToken The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef Channel
 * @memberOf! drive(v2)
 * @type object
 * @property {string} address The address where notifications are delivered for this channel.
 * @property {string} expiration Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
 * @property {string} id A UUID or similar unique string that identifies this channel.
 * @property {string} kind Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string &quot;api#channel&quot;.
 * @property {object} params Additional parameters controlling delivery channel behavior. Optional.
 * @property {boolean} payload A Boolean value to indicate whether payload is wanted. Optional.
 * @property {string} resourceId An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
 * @property {string} resourceUri A version-specific identifier for the watched resource.
 * @property {string} token An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
 * @property {string} type The type of delivery mechanism used for this channel.
 */
/**
 * @typedef ChildList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).ChildReference[]} items The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
 * @property {string} kind This is always drive#childList.
 * @property {string} nextLink A link to the next page of children.
 * @property {string} nextPageToken The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef ChildReference
 * @memberOf! drive(v2)
 * @type object
 * @property {string} childLink A link to the child.
 * @property {string} id The ID of the child.
 * @property {string} kind This is always drive#childReference.
 * @property {string} selfLink A link back to this reference.
 */
/**
 * @typedef Comment
 * @memberOf! drive(v2)
 * @type object
 * @property {string} anchor A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
 * @property {drive(v2).User} author The user who wrote this comment.
 * @property {string} commentId The ID of the comment.
 * @property {string} content The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment&#39;s content.
 * @property {object} context The context of the file which is being commented on.
 * @property {string} createdDate The date when this comment was first created.
 * @property {boolean} deleted Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
 * @property {string} fileId The file which this comment is addressing.
 * @property {string} fileTitle The title of the file which this comment is addressing.
 * @property {string} htmlContent HTML formatted content for this comment.
 * @property {string} kind This is always drive#comment.
 * @property {string} modifiedDate The date when this comment or any of its replies were last modified.
 * @property {drive(v2).CommentReply[]} replies Replies to this post.
 * @property {string} selfLink A link back to this comment.
 * @property {string} status The status of this comment. Status can be changed by posting a reply to a comment with the desired status.   - &quot;open&quot; - The comment is still open.  - &quot;resolved&quot; - The comment has been resolved by one of its replies.
 */
/**
 * @typedef CommentList
 * @memberOf! drive(v2)
 * @type object
 * @property {drive(v2).Comment[]} items The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
 * @property {string} kind This is always drive#commentList.
 * @property {string} nextLink A link to the next page of comments.
 * @property {string} nextPageToken The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef CommentReply
 * @memberOf! drive(v2)
 * @type object
 * @property {drive(v2).User} author The user who wrote this reply.
 * @property {string} content The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply&#39;s content. This field is required on inserts if no verb is specified (resolve/reopen).
 * @property {string} createdDate The date when this reply was first created.
 * @property {boolean} deleted Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
 * @property {string} htmlContent HTML formatted content for this reply.
 * @property {string} kind This is always drive#commentReply.
 * @property {string} modifiedDate The date when this reply was last modified.
 * @property {string} replyId The ID of the reply.
 * @property {string} verb The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are:   - &quot;resolve&quot; - To resolve a comment.  - &quot;reopen&quot; - To reopen (un-resolve) a comment.
 */
/**
 * @typedef CommentReplyList
 * @memberOf! drive(v2)
 * @type object
 * @property {drive(v2).CommentReply[]} items The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
 * @property {string} kind This is always drive#commentReplyList.
 * @property {string} nextLink A link to the next page of replies.
 * @property {string} nextPageToken The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef File
 * @memberOf! drive(v2)
 * @type object
 * @property {string} alternateLink A link for opening the file in a relevant Google editor or viewer.
 * @property {boolean} appDataContents Whether this file is in the Application Data folder.
 * @property {boolean} canComment Deprecated: use capabilities/canComment.
 * @property {boolean} canReadRevisions Deprecated: use capabilities/canReadRevisions.
 * @property {object} capabilities Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
 * @property {boolean} copyable Deprecated: use capabilities/canCopy.
 * @property {string} createdDate Create time for this file (formatted RFC 3339 timestamp).
 * @property {string} defaultOpenWithLink A link to open this file with the user&#39;s default app for this file. Only populated when the drive.apps.readonly scope is used.
 * @property {string} description A short description of the file.
 * @property {string} downloadUrl
 * @property {boolean} editable Deprecated: use capabilities/canEdit.
 * @property {string} embedLink A link for embedding the file.
 * @property {string} etag ETag of the file.
 * @property {boolean} explicitlyTrashed Whether this file has been explicitly trashed, as opposed to recursively trashed.
 * @property {object} exportLinks Links for exporting Google Docs to specific formats.
 * @property {string} fileExtension The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
 * @property {string} fileSize The size of the file in bytes. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
 * @property {string} folderColorRgb Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. Not populated for Team Drive files.
 * @property {string} fullFileExtension The full file extension; extracted from the title. May contain multiple concatenated extensions, such as &quot;tar.gz&quot;. Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
 * @property {boolean} hasAugmentedPermissions Whether any users are granted file access directly on this file. This field is only populated for Team Drive files.
 * @property {boolean} hasThumbnail Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
 * @property {string} headRevisionId The ID of the file&#39;s head revision. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
 * @property {string} iconLink A link to the file&#39;s icon.
 * @property {string} id The ID of the file.
 * @property {object} imageMediaMetadata Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
 * @property {object} indexableText Indexable text attributes for the file (can only be written)
 * @property {boolean} isAppAuthorized Whether the file was created or opened by the requesting app.
 * @property {string} kind The type of file. This is always drive#file.
 * @property {object} labels A group of labels for the file.
 * @property {drive(v2).User} lastModifyingUser The last user to modify this file.
 * @property {string} lastModifyingUserName Name of the last user to modify this file.
 * @property {string} lastViewedByMeDate Last time this file was viewed by the user (formatted RFC 3339 timestamp).
 * @property {string} markedViewedByMeDate Deprecated.
 * @property {string} md5Checksum An MD5 checksum for the content of this file. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
 * @property {string} mimeType The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content&#39;s MIME type.
 * @property {string} modifiedByMeDate Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
 * @property {string} modifiedDate Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
 * @property {object} openWithLinks A map of the id of each of the user&#39;s apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
 * @property {string} originalFilename The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Drive.
 * @property {boolean} ownedByMe Whether the file is owned by the current user. Not populated for Team Drive files.
 * @property {string[]} ownerNames Name(s) of the owner(s) of this file. Not populated for Team Drive files.
 * @property {drive(v2).User[]} owners The owner(s) of this file. Not populated for Team Drive files.
 * @property {drive(v2).ParentReference[]} parents Collection of parent folders which contain this file. Setting this field will put the file in all of the provided folders. On insert, if no folders are provided, the file will be placed in the default root folder.
 * @property {string[]} permissionIds List of permission IDs for users with access to this file.
 * @property {drive(v2).Permission[]} permissions The list of permissions for users with access to this file. Not populated for Team Drive files.
 * @property {drive(v2).Property[]} properties The list of properties.
 * @property {string} quotaBytesUsed The number of quota bytes used by this file.
 * @property {string} selfLink A link back to this file.
 * @property {boolean} shareable Deprecated: use capabilities/canShare.
 * @property {boolean} shared Whether the file has been shared. Not populated for Team Drive files.
 * @property {string} sharedWithMeDate Time at which this file was shared with the user (formatted RFC 3339 timestamp).
 * @property {drive(v2).User} sharingUser User that shared the item with the current user, if available.
 * @property {string[]} spaces The list of spaces which contain the file. Supported values are &#39;drive&#39;, &#39;appDataFolder&#39; and &#39;photos&#39;.
 * @property {string} teamDriveId ID of the Team Drive the file resides in.
 * @property {object} thumbnail A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.
 * @property {string} thumbnailLink A short-lived link to the file&#39;s thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file&#39;s content.
 * @property {string} thumbnailVersion The thumbnail version for use in thumbnail cache invalidation.
 * @property {string} title The title of this file. Note that for immutable items such as the top level folders of Team Drives, My Drive root folder, and Application Data folder the title is constant.
 * @property {string} trashedDate The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for Team Drive files.
 * @property {drive(v2).User} trashingUser If the file has been explicitly trashed, the user who trashed it. Only populated for Team Drive files.
 * @property {drive(v2).Permission} userPermission The permissions for the authenticated user on this file.
 * @property {string} version A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
 * @property {object} videoMediaMetadata Metadata about video media. This will only be present for video types.
 * @property {string} webContentLink A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
 * @property {string} webViewLink A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive&#39;s Website Hosting.
 * @property {boolean} writersCanShare Whether writers can share the document with other users. Not populated for Team Drive files.
 */
/**
 * @typedef FileList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {boolean} incompleteSearch Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple Team Drives with the &quot;default,allTeamDrives&quot; corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as &quot;default&quot; or &quot;teamDrive&quot;.
 * @property {drive(v2).File[]} items The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
 * @property {string} kind This is always drive#fileList.
 * @property {string} nextLink A link to the next page of files.
 * @property {string} nextPageToken The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef GeneratedIds
 * @memberOf! drive(v2)
 * @type object
 * @property {string[]} ids The IDs generated for the requesting user in the specified space.
 * @property {string} kind This is always drive#generatedIds
 * @property {string} space The type of file that can be created with these IDs.
 */
/**
 * @typedef ParentList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).ParentReference[]} items The list of parents.
 * @property {string} kind This is always drive#parentList.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef ParentReference
 * @memberOf! drive(v2)
 * @type object
 * @property {string} id The ID of the parent.
 * @property {boolean} isRoot Whether or not the parent is the root folder.
 * @property {string} kind This is always drive#parentReference.
 * @property {string} parentLink A link to the parent.
 * @property {string} selfLink A link back to this reference.
 */
/**
 * @typedef Permission
 * @memberOf! drive(v2)
 * @type object
 * @property {string[]} additionalRoles Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
 * @property {string} authKey Deprecated.
 * @property {boolean} deleted Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
 * @property {string} domain The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
 * @property {string} emailAddress The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
 * @property {string} etag The ETag of the permission.
 * @property {string} expirationDate The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:   - They can only be set on user and group permissions  - The date must be in the future  - The date cannot be more than a year in the future  - The date can only be set on drive.permissions.update requests
 * @property {string} id The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
 * @property {string} kind This is always drive#permission.
 * @property {string} name The name for this permission.
 * @property {string} photoLink A link to the profile photo, if available.
 * @property {string} role The primary role for this user. While new values may be supported in the future, the following are currently allowed:   - organizer  - owner  - reader  - writer
 * @property {string} selfLink A link back to this permission.
 * @property {object[]} teamDrivePermissionDetails Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only for Team Drive items.
 * @property {string} type The account type. Allowed values are:   - user  - group  - domain  - anyone
 * @property {string} value The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
 * @property {boolean} withLink Whether the link is required for this permission.
 */
/**
 * @typedef PermissionId
 * @memberOf! drive(v2)
 * @type object
 * @property {string} id The permission ID.
 * @property {string} kind This is always drive#permissionId.
 */
/**
 * @typedef PermissionList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).Permission[]} items The list of permissions.
 * @property {string} kind This is always drive#permissionList.
 * @property {string} nextPageToken The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef Property
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag ETag of the property.
 * @property {string} key The key of this property.
 * @property {string} kind This is always drive#property.
 * @property {string} selfLink The link back to this property.
 * @property {string} value The value of this property.
 * @property {string} visibility The visibility of this property.
 */
/**
 * @typedef PropertyList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).Property[]} items The list of properties.
 * @property {string} kind This is always drive#propertyList.
 * @property {string} selfLink The link back to this list.
 */
/**
 * @typedef Revision
 * @memberOf! drive(v2)
 * @type object
 * @property {string} downloadUrl Short term download URL for the file. This will only be populated on files with content stored in Drive.
 * @property {string} etag The ETag of the revision.
 * @property {object} exportLinks Links for exporting Google Docs to specific formats.
 * @property {string} fileSize The size of the revision in bytes. This will only be populated on files with content stored in Drive.
 * @property {string} id The ID of the revision.
 * @property {string} kind This is always drive#revision.
 * @property {drive(v2).User} lastModifyingUser The last user to modify this revision.
 * @property {string} lastModifyingUserName Name of the last user to modify this revision.
 * @property {string} md5Checksum An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
 * @property {string} mimeType The MIME type of the revision.
 * @property {string} modifiedDate Last time this revision was modified (formatted RFC 3339 timestamp).
 * @property {string} originalFilename The original filename when this revision was created. This will only be populated on files with content stored in Drive.
 * @property {boolean} pinned Whether this revision is pinned to prevent automatic purging. This will only be populated and can only be modified on files with content stored in Drive which are not Google Docs. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter.
 * @property {boolean} publishAuto Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Google Docs.
 * @property {boolean} published Whether this revision is published. This is only populated and can only be modified for Google Docs.
 * @property {string} publishedLink A link to the published revision.
 * @property {boolean} publishedOutsideDomain Whether this revision is published outside the domain. This is only populated and can only be modified for Google Docs.
 * @property {string} selfLink A link back to this revision.
 */
/**
 * @typedef RevisionList
 * @memberOf! drive(v2)
 * @type object
 * @property {string} etag The ETag of the list.
 * @property {drive(v2).Revision[]} items The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
 * @property {string} kind This is always drive#revisionList.
 * @property {string} nextPageToken The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results.
 * @property {string} selfLink A link back to this list.
 */
/**
 * @typedef StartPageToken
 * @memberOf! drive(v2)
 * @type object
 * @property {string} kind Identifies what kind of resource this is. Value: the fixed string &quot;drive#startPageToken&quot;.
 * @property {string} startPageToken The starting page token for listing changes.
 */
/**
 * @typedef TeamDrive
 * @memberOf! drive(v2)
 * @type object
 * @property {object} backgroundImageFile An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don&#39;t set themeId. When specified, all fields of the backgroundImageFile must be set.
 * @property {string} backgroundImageLink A short-lived link to this Team Drive&#39;s background image.
 * @property {object} capabilities Capabilities the current user has on this Team Drive.
 * @property {string} colorRgb The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
 * @property {string} createdDate The time at which the Team Drive was created (RFC 3339 date-time).
 * @property {string} id The ID of this Team Drive which is also the ID of the top level folder for this Team Drive.
 * @property {string} kind This is always drive#teamDrive
 * @property {string} name The name of this Team Drive.
 * @property {string} themeId The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set colorRgb or backgroundImageFile.
 */
/**
 * @typedef TeamDriveList
 * @memberOf! drive(v2)
 * @type object
 * @property {drive(v2).TeamDrive[]} items The list of Team Drives.
 * @property {string} kind This is always drive#teamDriveList
 * @property {string} nextPageToken The page token for the next page of Team Drives.
 */
/**
 * @typedef User
 * @memberOf! drive(v2)
 * @type object
 * @property {string} displayName A plain text displayable name for this user.
 * @property {string} emailAddress The email address of the user.
 * @property {boolean} isAuthenticatedUser Whether this user is the same as the authenticated user for whom the request was made.
 * @property {string} kind This is always drive#user.
 * @property {string} permissionId The user&#39;s ID as visible in the permissions collection.
 * @property {object} picture The user&#39;s profile picture.
 */

export = Drive;
