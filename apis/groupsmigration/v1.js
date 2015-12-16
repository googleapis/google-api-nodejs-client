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
 * Groups Migration API
 *
 * @classdesc Groups Migration Api.
 * @namespace groupsmigration
 * @version  v1
 * @variation v1
 * @this Groupsmigration
 * @param {object=} options Options for Groupsmigration
 */
function Groupsmigration(options) {

  var self = this;
  this._options = options || {};

  this.archive = {

    /**
     * groupsmigration.archive.insert
     *
     * @desc Inserts a new mail into the archive of the Google group.
     *
     * @alias groupsmigration.archive.insert
     * @memberOf! groupsmigration(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupId - The group ID
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/groups/v1/groups/{groupId}/archive',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/groups/v1/groups/{groupId}/archive',
        requiredParams: ['groupId'],
        pathParams: ['groupId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Groupsmigration object
 * @type Groupsmigration
 */
module.exports = Groupsmigration;