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

import createAPIRequest from '../../lib/apirequest';

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
function Playcustomapp(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.accounts = {
    customApps: {

      /**
       * playcustomapp.accounts.customApps.create
       *
       * @desc Create and publish a new custom app.
       *
       * @alias playcustomapp.accounts.customApps.create
       * @memberOf! playcustomapp(v1)
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
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/playcustomapp/v1/accounts/{account}/customApps').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          mediaUrl: (rootUrl + '/upload/playcustomapp/v1/accounts/{account}/customApps').replace(/([^:]\/)\/+/g, '$1'),
          requiredParams: ['account'],
          pathParams: ['account'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef CustomApp
 * @memberOf! playcustomapp(v1)
 * @type object
 * @property {string} languageCode Default listing language in BCP 47 format.
 * @property {string} title Title for the Android app.
 */
export = Playcustomapp;
