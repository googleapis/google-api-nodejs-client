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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

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
     * @alias drive.about.get
     * @memberOf! drive(v2)
     * @description Gets the information about the current user along with Drive API settings
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {boolean=} params.includeSubscribed - When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
     * @param  {string=} params.maxChangeIdCount - Maximum number of remaining change IDs to count
     * @param  {string=} params.startChangeId - Change ID to start counting from when calculating number of remaining change IDs
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/about',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.apps = {

    /**
     * drive.apps.get
     * @alias drive.apps.get
     * @memberOf! drive(v2)
     * @description Gets a specific app.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.appId - The ID of the app.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['appId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/apps/' + params.appId,
        method: 'GET'
      };

      delete params.appId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.apps.list
     * @alias drive.apps.list
     * @memberOf! drive(v2)
     * @description Lists a user's installed apps.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string=} params.appFilterExtensions - A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
     * @param  {string=} params.appFilterMimeTypes - A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
     * @param  {string=} params.languageCode - A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/apps',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.changes = {

    /**
     * drive.changes.get
     * @alias drive.changes.get
     * @memberOf! drive(v2)
     * @description Gets a specific change.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.changeId - The ID of the change.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['changeId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/changes/' + params.changeId,
        method: 'GET'
      };

      delete params.changeId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.changes.list
     * @alias drive.changes.list
     * @memberOf! drive(v2)
     * @description Lists the changes for a user.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {boolean=} params.includeDeleted - Whether to include deleted items.
     * @param  {boolean=} params.includeSubscribed - Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
     * @param  {integer=} params.maxResults - Maximum number of changes to return.
     * @param  {string=} params.pageToken - Page token for changes.
     * @param  {string=} params.startChangeId - Change ID to start listing changes from.
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/changes',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.changes.watch
     * @alias drive.changes.watch
     * @memberOf! drive(v2)
     * @description Subscribe to changes for a user.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {boolean=} params.includeDeleted - Whether to include deleted items.
     * @param  {boolean=} params.includeSubscribed - Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
     * @param  {integer=} params.maxResults - Maximum number of changes to return.
     * @param  {string=} params.pageToken - Page token for changes.
     * @param  {string=} params.startChangeId - Change ID to start listing changes from.
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/changes/watch',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.channels = {

    /**
     * drive.channels.stop
     * @alias drive.channels.stop
     * @memberOf! drive(v2)
     * @description Stop watching resources through this channel
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/channels/stop',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.children = {

    /**
     * drive.children.delete
     * @alias drive.children.delete
     * @memberOf! drive(v2)
     * @description Removes a child from a folder.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.childId - The ID of the child.
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['folderId', 'childId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children/' + params.childId,
        method: 'DELETE'
      };

      delete params.childId;
      delete params.folderId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.children.get
     * @alias drive.children.get
     * @memberOf! drive(v2)
     * @description Gets a specific child reference.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.childId - The ID of the child.
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['folderId', 'childId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children/' + params.childId,
        method: 'GET'
      };

      delete params.childId;
      delete params.folderId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.children.insert
     * @alias drive.children.insert
     * @memberOf! drive(v2)
     * @description Inserts a file into a folder.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['folderId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children',
        method: 'POST'
      };

      delete params.folderId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.children.list
     * @alias drive.children.list
     * @memberOf! drive(v2)
     * @description Lists a folder's children.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.folderId - The ID of the folder.
     * @param  {integer=} params.maxResults - Maximum number of children to return.
     * @param  {string=} params.pageToken - Page token for children.
     * @param  {string=} params.q - Query string for searching children.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['folderId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children',
        method: 'GET'
      };

      delete params.folderId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.comments = {

    /**
     * drive.comments.delete
     * @alias drive.comments.delete
     * @memberOf! drive(v2)
     * @description Deletes a comment.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId,
        method: 'DELETE'
      };

      delete params.commentId;
      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.comments.get
     * @alias drive.comments.get
     * @memberOf! drive(v2)
     * @description Gets a comment by ID.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId,
        method: 'GET'
      };

      delete params.commentId;
      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.comments.insert
     * @alias drive.comments.insert
     * @memberOf! drive(v2)
     * @description Creates a new comment on the given file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.comments.list
     * @alias drive.comments.list
     * @memberOf! drive(v2)
     * @description Lists a file's comments.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     * @param  {integer=} params.maxResults - The maximum number of discussions to include in the response, used for paging.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string=} params.updatedMin - Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments',
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.comments.patch
     * @alias drive.comments.patch
     * @memberOf! drive(v2)
     * @description Updates an existing comment. This method supports patch semantics.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId,
        method: 'PATCH'
      };

      delete params.commentId;
      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.comments.update
     * @alias drive.comments.update
     * @memberOf! drive(v2)
     * @description Updates an existing comment.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId,
        method: 'PUT'
      };

      delete params.commentId;
      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.files = {

    /**
     * drive.files.copy
     * @alias drive.files.copy
     * @memberOf! drive(v2)
     * @description Creates a copy of the specified file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {string} params.fileId - The ID of the file to copy.
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the head revision of the new copy.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {string=} params.visibility - The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    copy: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/copy',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.delete
     * @alias drive.files.delete
     * @memberOf! drive(v2)
     * @description Permanently deletes a file by ID. Skips the trash.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to delete.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId,
        method: 'DELETE'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.emptyTrash
     * @alias drive.files.emptyTrash
     * @memberOf! drive(v2)
     * @description Permanently deletes all of the user's trashed files.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    emptyTrash: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/trash',
        method: 'DELETE'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.get
     * @alias drive.files.get
     * @memberOf! drive(v2)
     * @description Gets a file's metadata by ID.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file in question.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully retrieving the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId,
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.insert
     * @alias drive.files.insert
     * @memberOf! drive(v2)
     * @description Insert a new file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the head revision of the uploaded file.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {boolean=} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param  {string=} params.visibility - The visibility of the new file. This parameter is only relevant when convert=false.
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/drive/v2/files',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.list
     * @alias drive.files.list
     * @memberOf! drive(v2)
     * @description Lists the user's files.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string=} params.corpus - The body of items (files/documents) to which the query applies.
     * @param  {integer=} params.maxResults - Maximum number of files to return.
     * @param  {string=} params.pageToken - Page token for files.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {string=} params.q - Query string for searching files.
     * @param  {object} params.resource - Request body data
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.patch
     * @alias drive.files.patch
     * @memberOf! drive(v2)
     * @description Updates file metadata and/or content. This method supports patch semantics.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string=} params.addParents - Comma-separated list of parent IDs to add.
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {string} params.fileId - The ID of the file to update.
     * @param  {boolean=} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the new revision.
     * @param  {string=} params.removeParents - Comma-separated list of parent IDs to remove.
     * @param  {boolean=} params.setModifiedDate - Whether to set the modified date with the supplied modified date.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param  {boolean=} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId,
        method: 'PATCH'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.touch
     * @alias drive.files.touch
     * @memberOf! drive(v2)
     * @description Set the file's updated time to the current server time.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to update.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    touch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/touch',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.trash
     * @alias drive.files.trash
     * @memberOf! drive(v2)
     * @description Moves a file to the trash.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to trash.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    trash: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/trash',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.untrash
     * @alias drive.files.untrash
     * @memberOf! drive(v2)
     * @description Restores a file from the trash.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file to untrash.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    untrash: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/untrash',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.update
     * @alias drive.files.update
     * @memberOf! drive(v2)
     * @description Updates file metadata and/or content.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string=} params.addParents - Comma-separated list of parent IDs to add.
     * @param  {boolean=} params.convert - Whether to convert this file to the corresponding Google Docs format.
     * @param  {string} params.fileId - The ID of the file to update.
     * @param  {boolean=} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
     * @param  {boolean=} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param  {string=} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param  {boolean=} params.pinned - Whether to pin the new revision.
     * @param  {string=} params.removeParents - Comma-separated list of parent IDs to remove.
     * @param  {boolean=} params.setModifiedDate - Whether to set the modified date with the supplied modified date.
     * @param  {string=} params.timedTextLanguage - The language of the timed text.
     * @param  {string=} params.timedTextTrackName - The timed text track name.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param  {boolean=} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/drive/v2/files/' + params.fileId,
        method: 'PUT'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.watch
     * @alias drive.files.watch
     * @memberOf! drive(v2)
     * @description Subscribe to changes on a file
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file in question.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully retrieving the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/watch',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.parents = {

    /**
     * drive.parents.delete
     * @alias drive.parents.delete
     * @memberOf! drive(v2)
     * @description Removes a parent from a file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.parentId - The ID of the parent.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'parentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents/' + params.parentId,
        method: 'DELETE'
      };

      delete params.fileId;
      delete params.parentId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.parents.get
     * @alias drive.parents.get
     * @memberOf! drive(v2)
     * @description Gets a specific parent reference.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.parentId - The ID of the parent.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'parentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents/' + params.parentId,
        method: 'GET'
      };

      delete params.fileId;
      delete params.parentId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.parents.insert
     * @alias drive.parents.insert
     * @memberOf! drive(v2)
     * @description Adds a parent folder for a file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.parents.list
     * @alias drive.parents.list
     * @memberOf! drive(v2)
     * @description Lists a file's parents.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents',
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.permissions = {

    /**
     * drive.permissions.delete
     * @alias drive.permissions.delete
     * @memberOf! drive(v2)
     * @description Deletes a permission from a file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'permissionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId,
        method: 'DELETE'
      };

      delete params.fileId;
      delete params.permissionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.permissions.get
     * @alias drive.permissions.get
     * @memberOf! drive(v2)
     * @description Gets a permission by ID.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'permissionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId,
        method: 'GET'
      };

      delete params.fileId;
      delete params.permissionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.permissions.getIdForEmail
     * @alias drive.permissions.getIdForEmail
     * @memberOf! drive(v2)
     * @description Returns the permission ID for an email address.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.email - The email address for which to return a permission ID
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getIdForEmail: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['email']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/permissionIds/' + params.email,
        method: 'GET'
      };

      delete params.email;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.permissions.insert
     * @alias drive.permissions.insert
     * @memberOf! drive(v2)
     * @description Inserts a permission for a file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string=} params.emailMessage - A custom message to include in notification emails.
     * @param  {string} params.fileId - The ID for the file.
     * @param  {boolean=} params.sendNotificationEmails - Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.permissions.list
     * @alias drive.permissions.list
     * @memberOf! drive(v2)
     * @description Lists a file's permissions.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions',
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.permissions.patch
     * @alias drive.permissions.patch
     * @memberOf! drive(v2)
     * @description Updates a permission. This method supports patch semantics.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {boolean=} params.transferOwnership - Whether changing a role to 'owner' should also downgrade the current owners to writers.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'permissionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId,
        method: 'PATCH'
      };

      delete params.fileId;
      delete params.permissionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.permissions.update
     * @alias drive.permissions.update
     * @memberOf! drive(v2)
     * @description Updates a permission.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.permissionId - The ID for the permission.
     * @param  {boolean=} params.transferOwnership - Whether changing a role to 'owner' should also downgrade the current owners to writers.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'permissionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId,
        method: 'PUT'
      };

      delete params.fileId;
      delete params.permissionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.properties = {

    /**
     * drive.properties.delete
     * @alias drive.properties.delete
     * @memberOf! drive(v2)
     * @description Deletes a property.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'propertyKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey,
        method: 'DELETE'
      };

      delete params.fileId;
      delete params.propertyKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.properties.get
     * @alias drive.properties.get
     * @memberOf! drive(v2)
     * @description Gets a property by its key.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'propertyKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey,
        method: 'GET'
      };

      delete params.fileId;
      delete params.propertyKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.properties.insert
     * @alias drive.properties.insert
     * @memberOf! drive(v2)
     * @description Adds a property to a file.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties',
        method: 'POST'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.properties.list
     * @alias drive.properties.list
     * @memberOf! drive(v2)
     * @description Lists a file's properties.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties',
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.properties.patch
     * @alias drive.properties.patch
     * @memberOf! drive(v2)
     * @description Updates a property. This method supports patch semantics.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'propertyKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey,
        method: 'PATCH'
      };

      delete params.fileId;
      delete params.propertyKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.properties.update
     * @alias drive.properties.update
     * @memberOf! drive(v2)
     * @description Updates a property.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.propertyKey - The key of the property.
     * @param  {string=} params.visibility - The visibility of the property.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'propertyKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey,
        method: 'PUT'
      };

      delete params.fileId;
      delete params.propertyKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.realtime = {

    /**
     * drive.realtime.get
     * @alias drive.realtime.get
     * @memberOf! drive(v2)
     * @description Exports the contents of the Realtime API data model associated with this file as JSON.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file that the Realtime API data model is associated with.
     * @param  {integer=} params.revision - The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/realtime',
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.realtime.update
     * @alias drive.realtime.update
     * @memberOf! drive(v2)
     * @description Overwrites the Realtime API data model associated with this file with the provided JSON data model.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string=} params.baseRevision - The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
     * @param  {string} params.fileId - The ID of the file that the Realtime API data model is associated with.
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/drive/v2/files/' + params.fileId + '/realtime',
        method: 'PUT'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.replies = {

    /**
     * drive.replies.delete
     * @alias drive.replies.delete
     * @memberOf! drive(v2)
     * @description Deletes a reply.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId', 'replyId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId,
        method: 'DELETE'
      };

      delete params.commentId;
      delete params.fileId;
      delete params.replyId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.replies.get
     * @alias drive.replies.get
     * @memberOf! drive(v2)
     * @description Gets a reply.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, this will succeed when retrieving a deleted reply.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId', 'replyId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId,
        method: 'GET'
      };

      delete params.commentId;
      delete params.fileId;

      delete params.replyId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.replies.insert
     * @alias drive.replies.insert
     * @memberOf! drive(v2)
     * @description Creates a new reply to the given comment.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies',
        method: 'POST'
      };

      delete params.commentId;
      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.replies.list
     * @alias drive.replies.list
     * @memberOf! drive(v2)
     * @description Lists all of the replies to a comment.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {boolean=} params.includeDeleted - If set, all replies, including deleted replies (with content stripped) will be returned.
     * @param  {integer=} params.maxResults - The maximum number of replies to include in the response, used for paging.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies',
        method: 'GET'
      };

      delete params.commentId;
      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.replies.patch
     * @alias drive.replies.patch
     * @memberOf! drive(v2)
     * @description Updates an existing reply. This method supports patch semantics.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId', 'replyId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId,
        method: 'PATCH'
      };

      delete params.commentId;
      delete params.fileId;
      delete params.replyId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.replies.update
     * @alias drive.replies.update
     * @memberOf! drive(v2)
     * @description Updates an existing reply.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment.
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.replyId - The ID of the reply.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'commentId', 'replyId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId,
        method: 'PUT'
      };

      delete params.commentId;
      delete params.fileId;
      delete params.replyId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.revisions = {

    /**
     * drive.revisions.delete
     * @alias drive.revisions.delete
     * @memberOf! drive(v2)
     * @description Removes a revision.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.revisionId - The ID of the revision.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'revisionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId,
        method: 'DELETE'
      };

      delete params.fileId;
      delete params.revisionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.revisions.get
     * @alias drive.revisions.get
     * @memberOf! drive(v2)
     * @description Gets a specific revision.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {string} params.revisionId - The ID of the revision.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'revisionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId,
        method: 'GET'
      };

      delete params.fileId;
      delete params.revisionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.revisions.list
     * @alias drive.revisions.list
     * @memberOf! drive(v2)
     * @description Lists a file's revisions.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID of the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions',
        method: 'GET'
      };

      delete params.fileId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.revisions.patch
     * @alias drive.revisions.patch
     * @memberOf! drive(v2)
     * @description Updates a revision. This method supports patch semantics.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.revisionId - The ID for the revision.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'revisionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId,
        method: 'PATCH'
      };

      delete params.fileId;
      delete params.revisionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.revisions.update
     * @alias drive.revisions.update
     * @memberOf! drive(v2)
     * @description Updates a revision.
     *
     * @method
     * @param {object} params - Parameters for request
     * @param  {string} params.fileId - The ID for the file.
     * @param  {string} params.revisionId - The ID for the revision.
     * @param  {object} params.resource - Request body data
     * @throws {Error}  If a required parameter is missing.
     * @param {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['fileId', 'revisionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId,
        method: 'PUT'
      };

      delete params.fileId;
      delete params.revisionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Drive object
 * @type Drive
 */
module.exports = Drive;