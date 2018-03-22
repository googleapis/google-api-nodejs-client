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
 * Google Play Custom App Publishing API
 *
 * An API to publish custom Android apps.
 *
 * @example
 * const google = require('googleapis');
 * const playcustomapp = google.playcustomapp('v1');
 *
 * @namespace playcustomapp
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Playcustomapp
 */
export class Playcustomapp {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  accounts: Resource$Accounts;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.accounts = new Resource$Accounts(this);
  }
}

/**
 * This resource represents a custom app.
 */
export interface Schema$CustomApp {
  /**
   * Default listing language in BCP 47 format.
   */
  languageCode: string;
  /**
   * Title for the Android app.
   */
  title: string;
}

export class Resource$Accounts {
  root: Playcustomapp;
  customApps: Resource$Accounts$Customapps;
  constructor(root: Playcustomapp) {
    this.root = root;
    this.customApps = new Resource$Accounts$Customapps(root);
  }
}
export class Resource$Accounts$Customapps {
  root: Playcustomapp;
  constructor(root: Playcustomapp) {
    this.root = root;
  }

  /**
   * playcustomapp.accounts.customApps.create
   * @desc Create and publish a new custom app.
   * @alias playcustomapp.accounts.customApps.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.account Developer account ID.
   * @param  {object} params.resource Media resource metadata
   * @param {object} params.media Media object
   * @param {string} params.media.mimeType Media mime-type
   * @param {string|object} params.media.body Media body contents
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$CustomApp>,
       callback?: BodyResponseCallback<Schema$CustomApp>) => {
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
                      '/playcustomapp/v1/accounts/{account}/customApps')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          mediaUrl: (rootUrl +
                     '/upload/playcustomapp/v1/accounts/{account}/customApps')
                        .replace(/([^:]\/)\/+/g, '$1'),
          requiredParams: ['account'],
          pathParams: ['account'],
          context: this.root
        };
        createAPIRequest<Schema$CustomApp>(parameters, callback!);
      };
}
