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
 * @version  v1
 * @variation v1
 * @this Drive
 * @param {object=} options Options for Drive
 */
function Drive(options) {

  var self = this;
  this._options = options || {};

  this.files = {

    /**
     * drive.files.get
     *
     * @desc Gets a file's metadata by id.
     *
     * @alias drive.files.get
     * @memberOf! drive(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id for the file in question.
     * @param  {string=} params.projection - This parameter is deprecated and has no function.
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully retrieving the file.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v1/files/' + params.id,
        method: 'GET'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.insert
     *
     * @desc Inserts a file, and any settable metadata or blob content sent with the request.
     *
     * @alias drive.files.insert
     * @memberOf! drive(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/drive/v1/files',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.patch
     *
     * @desc Updates file metadata and/or content. This method supports patch semantics.
     *
     * @alias drive.files.patch
     * @memberOf! drive(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id for the file in question.
     * @param  {boolean=} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
     * @param  {boolean=} params.updateModifiedDate - Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/drive/v1/files/' + params.id,
        method: 'PATCH'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * drive.files.update
     *
     * @desc Updates file metadata and/or content
     *
     * @alias drive.files.update
     * @memberOf! drive(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id for the file in question.
     * @param  {boolean=} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
     * @param  {boolean=} params.updateModifiedDate - Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
     * @param  {boolean=} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/drive/v1/files/' + params.id,
        method: 'PUT'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Drive object
 * @type Drive
 */
module.exports = Drive;