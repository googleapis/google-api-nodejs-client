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
 * Google Cloud Vision API
 *
 * Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
 *
 * @example
 * var google = require('googleapis');
 * var vision = google.vision('v1');
 *
 * @namespace vision
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Vision
 */
function Vision(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.images = {

    /**
     * vision.images.annotate
     *
     * @desc Run image detection and annotation for a batch of images.
     *
     * @alias vision.images.annotate
     * @memberOf! vision(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://vision.googleapis.com/v1/images:annotate',
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

module.exports = Vision;
