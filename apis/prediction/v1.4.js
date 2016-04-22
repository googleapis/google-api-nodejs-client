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
 * Prediction API
 *
 * Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
 *
 * @example
 * var google = require('googleapis');
 * var prediction = google.prediction('v1.4');
 *
 * @namespace prediction
 * @type {Function}
 * @version v1.4
 * @variation v1.4
 * @param {object=} options Options for Prediction
 */
function Prediction(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.hostedmodels = {

    /**
     * prediction.hostedmodels.predict
     *
     * @desc Submit input and request an output against a hosted model.
     *
     * @alias prediction.hostedmodels.predict
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.hostedModelName The name of a hosted model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.4/hostedmodels/{hostedModelName}/predict',
          method: 'POST'
        },
        params: params,
        requiredParams: ['hostedModelName'],
        pathParams: ['hostedModelName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.trainedmodels = {

    /**
     * prediction.trainedmodels.delete
     *
     * @desc Delete a trained model.
     *
     * @alias prediction.trainedmodels.delete
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.4/trainedmodels/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.get
     *
     * @desc Check training status of your model.
     *
     * @alias prediction.trainedmodels.get
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.4/trainedmodels/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.insert
     *
     * @desc Begin training your model.
     *
     * @alias prediction.trainedmodels.insert
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.4/trainedmodels',
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
     * prediction.trainedmodels.predict
     *
     * @desc Submit model id and request a prediction
     *
     * @alias prediction.trainedmodels.predict
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.4/trainedmodels/{id}/predict',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.update
     *
     * @desc Add new data to a trained model.
     *
     * @alias prediction.trainedmodels.update
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.4/trainedmodels/{id}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Prediction;
