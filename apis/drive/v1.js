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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Drive API
 *
 * The API to interact with Drive.
 *
 * @example
 * var google = require('googleapis');
 * var drive = google.drive('v1');
 *
 * @namespace drive
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Drive
 */
function Drive(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.files = {

    /**
     * drive.files.get
     *
     * @desc Gets a file's metadata by id.
     *
     * @alias drive.files.get
     * @memberOf! drive(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id for the file in question.
     * @param {string=} params.projection This parameter is deprecated and has no function.
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully retrieving the file.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v1/files/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.insert
     *
     * @desc Inserts a file, and any settable metadata or blob content sent with the request.
     *
     * @alias drive.files.insert
     * @memberOf! drive(v1)
     *
     * @param {object} params Parameters for request
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v1/files',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/drive/v1/files',
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
     * @memberOf! drive(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id for the file in question.
     * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions.
     * @param {boolean=} params.updateModifiedDate Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v1/files/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * drive.files.update
     *
     * @desc Updates file metadata and/or content
     *
     * @alias drive.files.update
     * @memberOf! drive(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id for the file in question.
     * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions.
     * @param {boolean=} params.updateModifiedDate Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/drive/v1/files/{id}',
          method: 'PUT'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/drive/v1/files/{id}',
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Drive;
