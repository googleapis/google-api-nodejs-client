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
 * Accelerated Mobile Pages (AMP) URL API
 *
 * This API contains a single method, batchGet. Call this method to retrieve the AMP URL (and equivalent AMP Cache URL) for given public URL(s).

 *
 * @example
 * var google = require('googleapis');
 * var acceleratedmobilepageurl = google.acceleratedmobilepageurl('v1');
 *
 * @namespace acceleratedmobilepageurl
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Acceleratedmobilepageurl
 */
function Acceleratedmobilepageurl(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.ampUrls = {

    /**
     * acceleratedmobilepageurl.ampUrls.batchGet
     *
     * @desc Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
     *
     * @alias acceleratedmobilepageurl.ampUrls.batchGet
     * @memberOf! acceleratedmobilepageurl(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://acceleratedmobilepageurl.googleapis.com/v1/ampUrls:batchGet',
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
}

module.exports = Acceleratedmobilepageurl;
