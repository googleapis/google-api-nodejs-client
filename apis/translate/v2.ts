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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud Translation API
 *
 * The Google Cloud Translation API lets websites and programs integrate with
 * Google Translate programmatically.
 *
 * @example
 * const google = require('googleapis');
 * const translate = google.translate('v2');
 *
 * @namespace translate
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Translate
 */
function Translate(options) {
  const self = this;
  self._options = options || {};
  self.detections = {
    /**
     * language.detections.detect
     * @desc Detects the language of text within a request.
     * @alias language.detections.detect
     * @memberOf! translate(v2)
     *
     * @param {object} params Parameters for request
     * @param {translate(v2).DetectLanguageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detect(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/language/translate/v2/detect')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * language.detections.list
        * @desc Detects the language of text within a request.
        * @alias language.detections.list
        * @memberOf! translate(v2)
        *
        * @param {object} params Parameters for request
        * @param {string} params.q The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/language/translate/v2/detect')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
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
     * @desc Returns a list of supported languages for translation.
     * @alias language.languages.list
     * @memberOf! translate(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.model The model type for which supported languages should be returned.
     * @param {string=} params.target The language to use to return localized, human readable names of supported languages.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/language/translate/v2/languages')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
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
     * @desc Translates input text, returning translated text.
     * @alias language.translations.list
     * @memberOf! translate(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cid The customization id for translate
     * @param {string=} params.format The format of the source text, in either HTML (default) or plain-text. A value of "html" indicates HTML and a value of "text" indicates plain-text.
     * @param {string=} params.model The `model` type requested for this translation. Valid values are listed in public documentation.
     * @param {string} params.q The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs.
     * @param {string=} params.source The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response.
     * @param {string} params.target The language to use for translation of the input text, set to one of the language codes listed in Language Support.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/language/translate/v2')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['q', 'target'],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * language.translations.translate
        * @desc Translates input text, returning translated text.
        * @alias language.translations.translate
        * @memberOf! translate(v2)
        *
        * @param {object} params Parameters for request
        * @param {translate(v2).TranslateTextRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    translate(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/language/translate/v2')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef DetectionsListResponse
 * @memberOf! translate(v2)
 * @type object
 * @property {translate(v2).DetectionsResource[]} detections A detections contains detection results of several text
 */
/**
 * @typedef DetectionsResource
 * @memberOf! translate(v2)
 * @type array
 */
/**
 * @typedef DetectLanguageRequest
 * @memberOf! translate(v2)
 * @type object
 * @property {string[]} q The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs.
 */
/**
 * @typedef GetSupportedLanguagesRequest
 * @memberOf! translate(v2)
 * @type object
 * @property {string} target The language to use to return localized, human readable names of supported languages.
 */
/**
 * @typedef LanguagesListResponse
 * @memberOf! translate(v2)
 * @type object
 * @property {translate(v2).LanguagesResource[]} languages List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
 */
/**
 * @typedef LanguagesResource
 * @memberOf! translate(v2)
 * @type object
 * @property {string} language Supported language code, generally consisting of its ISO 639-1 identifier. (E.g. &#39;en&#39;, &#39;ja&#39;). In certain cases, BCP-47 codes including language + region identifiers are returned (e.g. &#39;zh-TW&#39; and &#39;zh-CH&#39;)
 * @property {string} name Human readable name of the language localized to the target language.
 */
/**
 * @typedef TranslateTextRequest
 * @memberOf! translate(v2)
 * @type object
 * @property {string} format The format of the source text, in either HTML (default) or plain-text. A value of &quot;html&quot; indicates HTML and a value of &quot;text&quot; indicates plain-text.
 * @property {string} model The `model` type requested for this translation. Valid values are listed in public documentation.
 * @property {string[]} q The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs.
 * @property {string} source The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response.
 * @property {string} target The language to use for translation of the input text, set to one of the language codes listed in Language Support.
 */
/**
 * @typedef TranslationsListResponse
 * @memberOf! translate(v2)
 * @type object
 * @property {translate(v2).TranslationsResource[]} translations Translations contains list of translation results of given text
 */
/**
 * @typedef TranslationsResource
 * @memberOf! translate(v2)
 * @type object
 * @property {string} detectedSourceLanguage The source language of the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language will not occur and this field will be empty.
 * @property {string} model The `model` type used for this translation. Valid values are listed in public documentation. Can be different from requested `model`. Present only if specific model type was explicitly requested.
 * @property {string} translatedText Text translated into the target language.
 */

export = Translate;
