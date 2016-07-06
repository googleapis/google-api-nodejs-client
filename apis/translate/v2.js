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
 * Translate API
 *
 * Translates text from one language to another.
 *
 * @example
 * var google = require('googleapis');
 * var translate = google.translate('v2');
 *
 * @namespace translate
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Translate
 */
function Translate(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.detections = {

    /**
     * language.detections.list
     *
     * @desc Detect the language of text.
     *
     * @alias language.detections.list
     * @memberOf! translate(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.q The text to detect
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/language/translate/v2/detect',
          method: 'GET'
        },
        params: params,
        requiredParams: ['q'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.languages = {

    /**
     * language.languages.list
     *
     * @desc List the source/target languages supported by the API
     *
     * @alias language.languages.list
     * @memberOf! translate(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.target the language and collation in which the localized results should be returned
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/language/translate/v2/languages',
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

  self.translations = {

    /**
     * language.translations.list
     *
     * @desc Returns text translations from one language to another.
     *
     * @alias language.translations.list
     * @memberOf! translate(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cid The customization id for translate
     * @param {string=} params.format The format of the text
     * @param {string} params.q The text to translate
     * @param {string=} params.source The source language of the text
     * @param {string} params.target The target language into which the text should be translated
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/language/translate/v2',
          method: 'GET'
        },
        params: params,
        requiredParams: ['q', 'target'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Translate;
