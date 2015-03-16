/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Drive API
 *
 * @classdesc The API to interact with Drive.
 * @namespace drive
 * @version  v2
 * @variation v2
 * @this Drive
 * @param {object=} options Options for Drive
 */
function Drive(options) {

  var self = this;
  this._options = options || {};

  this.about = {

    /**
     * drive.about.get
     *
     * @desc Gets the information about the current user along with Drive API settings
     *
     * @alias drive.about.get
     * @memberOf! drive(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {boolean=} params.includeSubscribed - When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
     * @param  {string=} params.maxChangeIdCount - Maximum number of remaining change IDs to count
     * @param  {string=} params.startChangeId - Change ID to start counting from when calculating number of remaining change IDs
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/about',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.apps = {

    /**
     * drive.apps.get
     *
     * @desc Gets a specific app.
     *
     * @alias drive.apps.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.appId - The ID of the app.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/apps/{appId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['appId'],
        pathParams: ['appId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.apps.list
     *
     * @desc Lists a user's installed apps.
     *
     * @alias drive.apps.list
     * @memberOf! drive(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.appFilterExtensions - A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
     * @param  {string=} params.appFilterMimeTypes - A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
     * @param  {string=} params.languageCode - A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/apps',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.changes = {

    /**
     * drive.changes.get
     *
     * @desc Gets a specific change.
     *
     * @alias drive.changes.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.changeId - The ID of the change.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/changes/{changeId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['changeId'],
        pathParams: ['changeId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.changes.list
     *
     * @desc Lists the changes for a user.
     *
     * @alias drive.changes.list
     * @memberOf! drive(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {boolean=} params.includeDeleted - Whether to include deleted items.
     * @param  {boolean=} params.includeSubscribed - Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
     * @param  {integer=} params.maxResults - Maximum number of changes to return.
     * @param  {string=} params.pageToken - Page token for changes.
     * @param  {string=} params.startChangeId - Change ID to start listing changes from.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/changes',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.changes.watch
     *
     * @desc Subscribe to changes for a user.
     *
     * @alias drive.changes.watch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.includeDeleted - Whether to include deleted items.
     * @param  {boolean=} params.includeSubscribed - Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
     * @param  {integer=} params.maxResults - Maximum number of changes to return.
     * @param  {string=} params.pageToken - Page token for changes.
     * @param  {string=} params.startChangeId - Change ID to start listing changes from.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/changes/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channels = {

    /**
     * drive.channels.stop
     *
     * @desc Stop watching resources through this channel
     *
     * @alias drive.channels.stop
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/channels/stop',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.children = {

    /**
     * drive.children.delete
     *
     * @desc Removes a child from a folder.
     *
     * @alias drive.children.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.childId - The ID of the child.
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children/{childId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['folderId', 'childId'],
        pathParams: ['childId', 'folderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.children.get
     *
     * @desc Gets a specific child reference.
     *
     * @alias drive.children.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.childId - The ID of the child.
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children/{childId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['folderId', 'childId'],
        pathParams: ['childId', 'folderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.children.insert
     *
     * @desc Inserts a file into a folder.
     *
     * @alias drive.children.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children',
          method: 'POST'
        },
        params: params,
        requiredParams: ['folderId'],
        pathParams: ['folderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.children.list
     *
     * @desc Lists a folder's children.
     *
     * @alias drive.children.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {integer=} params.maxResults - Maximum number of children to return.
     * @param  {string=} params.pageToken - Page token for children.
     * @param  {string=} params.q - Query string for searching children.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children',
          method: 'GET'
        },
        params: params,
        requiredParams: ['folderId'],
        pathParams: ['folderId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.comments = {

    /**
     * drive.comments.delete
     *
     * @desc Deletes a comment.
     *
     * @alias drive.comments.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.comments.get
     *
     * @desc Gets a comment by ID.
     *
     * @alias drive.comments.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.comments.insert
     *
     * @desc Creates a new comment on the given file.
     *
     * @alias drive.comments.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.comments.list
     *
     * @desc Lists a file's comments.
     *
     * @alias drive.comments.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     * @param  {integer=} params.maxResults - The maximum number of discussions to include in the response, used for paging.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string=} params.updatedMin - Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.comments.patch
     *
     * @desc Updates an existing comment. This method supports patch semantics.
     *
     * @alias drive.comments.patch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.comments.update
     *
     * @desc Updates an existing comment.
     *
     * @alias drive.comments.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.files = {

    /**
     * drive.files.copy
     *
     * @desc Creates a copy of the specified file.
     *
     * @alias drive.files.copy
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {string} params.fileId - The ID of the file to copy.
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {string=} params.visibility - The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    copy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/copy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.delete
     *
     * @desc Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file.
     *
     * @alias drive.files.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.emptyTrash
     *
     * @desc Permanently deletes all of the user's trashed files.
     *
     * @alias drive.files.emptyTrash
     * @memberOf! drive(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    emptyTrash: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/trash',
          method: 'DELETE'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.get
     *
     * @desc Gets a file's metadata by ID.
     *
     * @alias drive.files.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files.
     * @param  {string} params.fileId - The ID for the file in question.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully retrieving the file.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.insert
     *
     * @desc Insert a new file.
     *
     * @alias drive.files.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {boolean=} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param  {string=} params.visibility - The visibility of the new file. This parameter is only relevant when convert=false.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/drive/v2/files',
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.list
     *
     * @desc Lists the user's files.
     *
     * @alias drive.files.list
     * @memberOf! drive(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.corpus - The body of items (files/documents) to which the query applies.
     * @param  {integer=} params.maxResults - Maximum number of files to return.
     * @param  {string=} params.pageToken - Page token for files.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {string=} params.q - Query string for searching files.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.patch
     *
     * @desc Updates file metadata and/or content. This method supports patch semantics.
     *
     * @alias drive.files.patch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.addParents - Comma-separated list of parent IDs to add.
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {string} params.fileId - The ID of the file to update.
     * @param  {boolean=} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
     * @param  {string=} params.removeParents - Comma-separated list of parent IDs to remove.
     * @param  {boolean=} params.setModifiedDate - Whether to set the modified date with the supplied modified date.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param  {boolean=} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.touch
     *
     * @desc Set the file's updated time to the current server time.
     *
     * @alias drive.files.touch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to update.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    touch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/touch',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.trash
     *
     * @desc Moves a file to the trash.
     *
     * @alias drive.files.trash
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to trash.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    trash: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/trash',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.untrash
     *
     * @desc Restores a file from the trash.
     *
     * @alias drive.files.untrash
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to untrash.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    untrash: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/untrash',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.update
     *
     * @desc Updates file metadata and/or content.
     *
     * @alias drive.files.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.addParents - Comma-separated list of parent IDs to add.
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {string} params.fileId - The ID of the file to update.
     * @param  {boolean=} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
     * @param  {string=} params.removeParents - Comma-separated list of parent IDs to remove.
     * @param  {boolean=} params.setModifiedDate - Whether to set the modified date with the supplied modified date.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param  {boolean=} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
          method: 'PUT'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/drive/v2/files/{fileId}',
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.watch
     *
     * @desc Subscribe to changes on a file
     *
     * @alias drive.files.watch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files.
     * @param  {string} params.fileId - The ID for the file in question.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully retrieving the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.parents = {

    /**
     * drive.parents.delete
     *
     * @desc Removes a parent from a file.
     *
     * @alias drive.parents.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.parentId - The ID of the parent.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents/{parentId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId', 'parentId'],
        pathParams: ['fileId', 'parentId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.parents.get
     *
     * @desc Gets a specific parent reference.
     *
     * @alias drive.parents.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.parentId - The ID of the parent.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents/{parentId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'parentId'],
        pathParams: ['fileId', 'parentId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.parents.insert
     *
     * @desc Adds a parent folder for a file.
     *
     * @alias drive.parents.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.parents.list
     *
     * @desc Lists a file's parents.
     *
     * @alias drive.parents.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.permissions = {

    /**
     * drive.permissions.delete
     *
     * @desc Deletes a permission from a file.
     *
     * @alias drive.permissions.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.permissions.get
     *
     * @desc Gets a permission by ID.
     *
     * @alias drive.permissions.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.permissions.getIdForEmail
     *
     * @desc Returns the permission ID for an email address.
     *
     * @alias drive.permissions.getIdForEmail
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.email - The email address for which to return a permission ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getIdForEmail: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/permissionIds/{email}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['email'],
        pathParams: ['email'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.permissions.insert
     *
     * @desc Inserts a permission for a file.
     *
     * @alias drive.permissions.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.emailMessage - A custom message to include in notification emails.
     * @param  {string} params.fileId - The ID for the file.
     * @param  {boolean=} params.sendNotificationEmails - Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.permissions.list
     *
     * @desc Lists a file's permissions.
     *
     * @alias drive.permissions.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.permissions.patch
     *
     * @desc Updates a permission. This method supports patch semantics.
     *
     * @alias drive.permissions.patch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {boolean=} params.transferOwnership - Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.permissions.update
     *
     * @desc Updates a permission.
     *
     * @alias drive.permissions.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {boolean=} params.transferOwnership - Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.properties = {

    /**
     * drive.properties.delete
     *
     * @desc Deletes a property.
     *
     * @alias drive.properties.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.properties.get
     *
     * @desc Gets a property by its key.
     *
     * @alias drive.properties.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.properties.insert
     *
     * @desc Adds a property to a file.
     *
     * @alias drive.properties.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.properties.list
     *
     * @desc Lists a file's properties.
     *
     * @alias drive.properties.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.properties.patch
     *
     * @desc Updates a property. This method supports patch semantics.
     *
     * @alias drive.properties.patch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.properties.update
     *
     * @desc Updates a property.
     *
     * @alias drive.properties.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['fileId', 'propertyKey'],
        pathParams: ['fileId', 'propertyKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.realtime = {

    /**
     * drive.realtime.get
     *
     * @desc Exports the contents of the Realtime API data model associated with this file as JSON.
     *
     * @alias drive.realtime.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file that the Realtime API data model is associated with.
     * @param  {integer=} params.revision - The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/realtime',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.realtime.update
     *
     * @desc Overwrites the Realtime API data model associated with this file with the provided JSON data model.
     *
     * @alias drive.realtime.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.baseRevision - The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
     * @param  {string} params.fileId - The ID of the file that the Realtime API data model is associated with.
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/realtime',
          method: 'PUT'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/drive/v2/files/{fileId}/realtime',
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.replies = {

    /**
     * drive.replies.delete
     *
     * @desc Deletes a reply.
     *
     * @alias drive.replies.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.replies.get
     *
     * @desc Gets a reply.
     *
     * @alias drive.replies.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, this will succeed when retrieving a deleted reply.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.replies.insert
     *
     * @desc Creates a new reply to the given comment.
     *
     * @alias drive.replies.insert
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies',
          method: 'POST'
        },
        params: params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.replies.list
     *
     * @desc Lists all of the replies to a comment.
     *
     * @alias drive.replies.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, all replies, including deleted replies (with content stripped) will be returned.
     * @param  {integer=} params.maxResults - The maximum number of replies to include in the response, used for paging.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.replies.patch
     *
     * @desc Updates an existing reply. This method supports patch semantics.
     *
     * @alias drive.replies.patch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.replies.update
     *
     * @desc Updates an existing reply.
     *
     * @alias drive.replies.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.revisions = {

    /**
     * drive.revisions.delete
     *
     * @desc Removes a revision.
     *
     * @alias drive.revisions.delete
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.revisionId - The ID of the revision.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.revisions.get
     *
     * @desc Gets a specific revision.
     *
     * @alias drive.revisions.get
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.revisionId - The ID of the revision.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.revisions.list
     *
     * @desc Lists a file's revisions.
     *
     * @alias drive.revisions.list
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.revisions.patch
     *
     * @desc Updates a revision. This method supports patch semantics.
     *
     * @alias drive.revisions.patch
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.revisionId - The ID for the revision.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.revisions.update
     *
     * @desc Updates a revision.
     *
     * @alias drive.revisions.update
     * @memberOf! drive(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.revisionId - The ID for the revision.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Drive object
 * @type Drive
 */
module.exports = Drive;