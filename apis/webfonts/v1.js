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
 * Google Fonts Developer API
 *
 * Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).
 *
 * @example
 * var google = require('googleapis');
 * var webfonts = google.webfonts('v1');
 *
 * @namespace webfonts
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Webfonts
 */
function Webfonts(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.webfonts = {

    /**
     * webfonts.webfonts.list
     *
     * @desc Retrieves the list of fonts currently served by the Google Fonts Developer API
     *
     * @alias webfonts.webfonts.list
     * @memberOf! webfonts(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.sort Enables sorting of the list
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webfonts/v1/webfonts',
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
}

module.exports = Webfonts;
