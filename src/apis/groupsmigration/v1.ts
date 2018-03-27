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
export class Groupsmigration {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  archive: Resource$Archive;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.archive = new Resource$Archive(this);
  }
}

/**
 * JSON response template for groups migration API.
 */
export interface Schema$Groups {
  /**
   * The kind of insert resource this is.
   */
  kind: string;
  /**
   * The status of the insert request.
   */
  responseCode: string;
}

export class Resource$Archive {
  root: Groupsmigration;
  constructor(root: Groupsmigration) {
    this.root = root;
  }

  /**
   * groupsmigration.archive.insert
   * @desc Inserts a new mail into the archive of the Google group.
   * @alias groupsmigration.archive.insert
   * @memberOf! ()
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
  insert =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Groups>,
       callback?: BodyResponseCallback<Schema$Groups>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/groups/v1/groups/{groupId}/archive')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          mediaUrl: (rootUrl + '/upload/groups/v1/groups/{groupId}/archive')
                        .replace(/([^:]\/)\/+/g, '$1'),
          requiredParams: ['groupId'],
          pathParams: ['groupId'],
          context: this.root
        };
        createAPIRequest<Schema$Groups>(parameters, callback!);
      };
}
