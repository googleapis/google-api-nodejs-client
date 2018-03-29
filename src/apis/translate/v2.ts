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

import {AxiosPromise} from 'axios';

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
export class Translate {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  detections: Resource$Detections;
  languages: Resource$Languages;
  translations: Resource$Translations;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.detections = new Resource$Detections(this);
    this.languages = new Resource$Languages(this);
    this.translations = new Resource$Translations(this);
  }

  getRoot() {
    return this.root;
  }
}

export interface Schema$DetectionsListResponse {
  /**
   * A detections contains detection results of several text
   */
  detections: Schema$DetectionsResource[];
}
/**
 * An array of languages which we detect for the given text The most likely
 * language list first.
 */
export interface Schema$DetectionsResource {}
/**
 * The request message for language detection.
 */
export interface Schema$DetectLanguageRequest {
  /**
   * The input text upon which to perform language detection. Repeat this
   * parameter to perform language detection on multiple text inputs.
   */
  q: string[];
}
/**
 * The request message for discovering supported languages.
 */
export interface Schema$GetSupportedLanguagesRequest {
  /**
   * The language to use to return localized, human readable names of supported
   * languages.
   */
  target: string;
}
export interface Schema$LanguagesListResponse {
  /**
   * List of source/target languages supported by the translation API. If target
   * parameter is unspecified, the list is sorted by the ASCII code point order
   * of the language code. If target parameter is specified, the list is sorted
   * by the collation order of the language name in the target language.
   */
  languages: Schema$LanguagesResource[];
}
export interface Schema$LanguagesResource {
  /**
   * Supported language code, generally consisting of its ISO 639-1 identifier.
   * (E.g. &#39;en&#39;, &#39;ja&#39;). In certain cases, BCP-47 codes including
   * language + region identifiers are returned (e.g. &#39;zh-TW&#39; and
   * &#39;zh-CH&#39;)
   */
  language: string;
  /**
   * Human readable name of the language localized to the target language.
   */
  name: string;
}
/**
 * The main translation request message for the Cloud Translation API.
 */
export interface Schema$TranslateTextRequest {
  /**
   * The format of the source text, in either HTML (default) or plain-text. A
   * value of &quot;html&quot; indicates HTML and a value of &quot;text&quot;
   * indicates plain-text.
   */
  format: string;
  /**
   * The `model` type requested for this translation. Valid values are listed in
   * public documentation.
   */
  model: string;
  /**
   * The input text to translate. Repeat this parameter to perform translation
   * operations on multiple text inputs.
   */
  q: string[];
  /**
   * The language of the source text, set to one of the language codes listed in
   * Language Support. If the source language is not specified, the API will
   * attempt to identify the source language automatically and return it within
   * the response.
   */
  source: string;
  /**
   * The language to use for translation of the input text, set to one of the
   * language codes listed in Language Support.
   */
  target: string;
}
/**
 * The main language translation response message.
 */
export interface Schema$TranslationsListResponse {
  /**
   * Translations contains list of translation results of given text
   */
  translations: Schema$TranslationsResource[];
}
export interface Schema$TranslationsResource {
  /**
   * The source language of the initial request, detected automatically, if no
   * source language was passed within the initial request. If the source
   * language was passed, auto-detection of the language will not occur and this
   * field will be empty.
   */
  detectedSourceLanguage: string;
  /**
   * The `model` type used for this translation. Valid values are listed in
   * public documentation. Can be different from requested `model`. Present only
   * if specific model type was explicitly requested.
   */
  model: string;
  /**
   * Text translated into the target language.
   */
  translatedText: string;
}

export class Resource$Detections {
  root: Translate;
  constructor(root: Translate) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * language.detections.detect
   * @desc Detects the language of text within a request.
   * @alias language.detections.detect
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().DetectLanguageRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  detect(params: any, options?: MethodOptions):
      AxiosPromise<Schema$DetectionsListResponse>;
  detect(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$DetectionsListResponse>,
      callback?: BodyResponseCallback<Schema$DetectionsListResponse>): void;
  detect(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DetectionsListResponse>,
      callback?: BodyResponseCallback<Schema$DetectionsListResponse>):
      void|AxiosPromise<Schema$DetectionsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
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
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DetectionsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DetectionsListResponse>(parameters);
    }
  }


  /**
   * language.detections.list
   * @desc Detects the language of text within a request.
   * @alias language.detections.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.q The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$DetectionsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$DetectionsListResponse>,
      callback?: BodyResponseCallback<Schema$DetectionsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DetectionsListResponse>,
      callback?: BodyResponseCallback<Schema$DetectionsListResponse>):
      void|AxiosPromise<Schema$DetectionsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
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
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DetectionsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DetectionsListResponse>(parameters);
    }
  }
}

export class Resource$Languages {
  root: Translate;
  constructor(root: Translate) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * language.languages.list
   * @desc Returns a list of supported languages for translation.
   * @alias language.languages.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.model The model type for which supported languages should be returned.
   * @param {string=} params.target The language to use to return localized, human readable names of supported languages.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$LanguagesListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$LanguagesListResponse>,
      callback?: BodyResponseCallback<Schema$LanguagesListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LanguagesListResponse>,
      callback?: BodyResponseCallback<Schema$LanguagesListResponse>):
      void|AxiosPromise<Schema$LanguagesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
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
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LanguagesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LanguagesListResponse>(parameters);
    }
  }
}

export class Resource$Translations {
  root: Translate;
  constructor(root: Translate) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * language.translations.list
   * @desc Translates input text, returning translated text.
   * @alias language.translations.list
   * @memberOf! ()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$TranslationsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$TranslationsListResponse>,
      callback?: BodyResponseCallback<Schema$TranslationsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TranslationsListResponse>,
      callback?: BodyResponseCallback<Schema$TranslationsListResponse>):
      void|AxiosPromise<Schema$TranslationsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
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
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TranslationsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TranslationsListResponse>(parameters);
    }
  }


  /**
   * language.translations.translate
   * @desc Translates input text, returning translated text.
   * @alias language.translations.translate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().TranslateTextRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  translate(params: any, options?: MethodOptions):
      AxiosPromise<Schema$TranslationsListResponse>;
  translate(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$TranslationsListResponse>,
      callback?: BodyResponseCallback<Schema$TranslationsListResponse>): void;
  translate(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TranslationsListResponse>,
      callback?: BodyResponseCallback<Schema$TranslationsListResponse>):
      void|AxiosPromise<Schema$TranslationsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
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
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TranslationsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TranslationsListResponse>(parameters);
    }
  }
}
