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
 * Consumer Surveys API
 *
 * @classdesc API for Google Consumer Surveys.
 * @namespace consumersurveys
 * @version  v2
 * @variation v2
 * @this Consumersurveys
 * @param {object=} options Options for Consumersurveys
 */
function Consumersurveys(options) {

  var self = this;
  this._options = options || {};

  this.results = {

    /**
     * consumersurveys.results.get
     *
     * @desc Retrieves any survey results that have been produced so far. Results are formatted as an Excel file.
     *
     * @alias consumersurveys.results.get
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.surveyUrlId - External URL ID for the survey.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys/{surveyUrlId}/results',
          method: 'GET'
        },
        params: params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.surveys = {

    /**
     * consumersurveys.surveys.get
     *
     * @desc Retrieves information about the specified survey.
     *
     * @alias consumersurveys.surveys.get
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.surveyUrlId - External URL ID for the survey.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys/{surveyUrlId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * consumersurveys.surveys.insert
     *
     * @desc Creates a survey.
     *
     * @alias consumersurveys.surveys.insert
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys',
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
     * consumersurveys.surveys.list
     *
     * @desc Lists the surveys owned by the authenticated user.
     *
     * @alias consumersurveys.surveys.list
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - 
     * @param  {integer=} params.startIndex - 
     * @param  {string=} params.token - 
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * consumersurveys.surveys.start
     *
     * @desc Begins running a survey.
     *
     * @alias consumersurveys.surveys.start
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resourceId - 
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    start: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys/{resourceId}/start',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * consumersurveys.surveys.stop
     *
     * @desc Stops a running survey.
     *
     * @alias consumersurveys.surveys.stop
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resourceId - 
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys/{resourceId}/stop',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * consumersurveys.surveys.update
     *
     * @desc Updates a survey. Currently the only property that can be updated is the owners property.
     *
     * @alias consumersurveys.surveys.update
     * @memberOf! consumersurveys(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.surveyUrlId - External URL ID for the survey.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/consumersurveys/v2/surveys/{surveyUrlId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Consumersurveys object
 * @type Consumersurveys
 */
module.exports = Consumersurveys;