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
 * Google Cloud Natural Language API
 *
 * Google Cloud Natural Language API provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, and text annotations.
 *
 * @example
 * var google = require('googleapis');
 * var language = google.language('v1beta1');
 *
 * @namespace language
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Language
 */
function Language(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.documents = {

    /**
     * language.documents.analyzeSentiment
     *
     * @desc Analyzes the sentiment of the provided text.
     *
     * @alias language.documents.analyzeSentiment
     * @memberOf! language(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeSentiment: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://language.googleapis.com/v1beta1/documents:analyzeSentiment',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * language.documents.annotateText
     *
     * @desc Advanced API that analyzes the document and provides a full set of text annotations, including semantic, syntactic, and sentiment information. This API is intended for users who are familiar with machine learning and need in-depth text features to build upon.
     *
     * @alias language.documents.annotateText
     * @memberOf! language(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotateText: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://language.googleapis.com/v1beta1/documents:annotateText',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * language.documents.analyzeEntities
     *
     * @desc Finds named entities (currently finds proper names) in the text, entity types, salience, mentions for each entity, and other properties.
     *
     * @alias language.documents.analyzeEntities
     * @memberOf! language(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeEntities: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://language.googleapis.com/v1beta1/documents:analyzeEntities',
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

module.exports = Language;
