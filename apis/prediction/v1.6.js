/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Prediction API
 *
 * @classdesc Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
 * @namespace prediction
 * @version  v1.6
 * @variation v1.6
 * @this Prediction
 * @param {object=} options Options for Prediction
 */
function Prediction(options) {

  var self = this;
  this._options = options || {};

  this.hostedmodels = {

    /**
     * prediction.hostedmodels.predict
     *
     * @desc Submit input and request an output against a hosted model.
     *
     * @alias prediction.hostedmodels.predict
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.hostedModelName - The name of a hosted model.
     * @param  {string} params.project - The project associated with the model.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    predict: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'hostedModelName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/hostedmodels/' + params.hostedModelName + '/predict',
        method: 'POST'
      };

      delete params.hostedModelName;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.trainedmodels = {

    /**
     * prediction.trainedmodels.analyze
     *
     * @desc Get analysis of the model and the data the model was trained on.
     *
     * @alias prediction.trainedmodels.analyze
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The unique name for the predictive model.
     * @param  {string} params.project - The project associated with the model.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    analyze: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels/' + params.id + '/analyze',
        method: 'GET'
      };

      delete params.id;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.trainedmodels.delete
     *
     * @desc Delete a trained model.
     *
     * @alias prediction.trainedmodels.delete
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The unique name for the predictive model.
     * @param  {string} params.project - The project associated with the model.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels/' + params.id,
        method: 'DELETE'
      };

      delete params.id;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.trainedmodels.get
     *
     * @desc Check training status of your model.
     *
     * @alias prediction.trainedmodels.get
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The unique name for the predictive model.
     * @param  {string} params.project - The project associated with the model.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels/' + params.id,
        method: 'GET'
      };

      delete params.id;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.trainedmodels.insert
     *
     * @desc Train a Prediction API model.
     *
     * @alias prediction.trainedmodels.insert
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project associated with the model.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.trainedmodels.list
     *
     * @desc List available models.
     *
     * @alias prediction.trainedmodels.list
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.pageToken - Pagination token.
     * @param  {string} params.project - The project associated with the model.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels/list',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.trainedmodels.predict
     *
     * @desc Submit model id and request a prediction.
     *
     * @alias prediction.trainedmodels.predict
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The unique name for the predictive model.
     * @param  {string} params.project - The project associated with the model.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    predict: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels/' + params.id + '/predict',
        method: 'POST'
      };

      delete params.id;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.trainedmodels.update
     *
     * @desc Add new data to a trained model.
     *
     * @alias prediction.trainedmodels.update
     * @memberOf! prediction(v1.6)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The unique name for the predictive model.
     * @param  {string} params.project - The project associated with the model.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.6/projects/' + params.project + '/trainedmodels/' + params.id,
        method: 'PUT'
      };

      delete params.id;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Prediction object
 * @type Prediction
 */
module.exports = Prediction;