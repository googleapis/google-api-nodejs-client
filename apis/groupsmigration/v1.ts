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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Groups Migration API
 *
 * Groups Migration Api.
 *
 * @example
 * const google = require('googleapis');
 * const groupsmigration = google.groupsmigration('v1');
 *
 * @namespace groupsmigration
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Groupsmigration
 */
function Groupsmigration(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.archive = {

    /**
     * groupsmigration.archive.insert
     *
     * @desc Inserts a new mail into the archive of the Google group.
     *
     * @alias groupsmigration.archive.insert
     * @memberOf! groupsmigration(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupId The group ID
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/groups/v1/groups/{groupId}/archive').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        mediaUrl: (rootUrl + '/upload/groups/v1/groups/{groupId}/archive').replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['groupId'],
        pathParams: ['groupId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef Groups
 * @memberOf! groupsmigration(v1)
 * @type object
 * @property {string} kind The kind of insert resource this is.
 * @property {string} responseCode The status of the insert request.
 */
export = Groupsmigration;
