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
 * @version  v1.3
 * @variation v1.3
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
     * @desc Submit input and request an output against a hosted model
     *
     * @alias prediction.hostedmodels.predict
     * @memberOf! prediction(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.hostedModelName - The name of a hosted model
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    predict: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['hostedModelName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.3/hostedmodels/' + params.hostedModelName + '/predict',
        method: 'POST'
      };

      delete params.hostedModelName;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.training = {

    /**
     * prediction.training.delete
     *
     * @desc Delete a trained model
     *
     * @alias prediction.training.delete
     * @memberOf! prediction(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['data']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.3/training/' + params.data,
        method: 'DELETE'
      };

      delete params.data;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.training.get
     *
     * @desc Check training status of your model
     *
     * @alias prediction.training.get
     * @memberOf! prediction(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['data']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.3/training/' + params.data,
        method: 'GET'
      };

      delete params.data;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.training.insert
     *
     * @desc Begin training your model
     *
     * @alias prediction.training.insert
     * @memberOf! prediction(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.3/training',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.training.predict
     *
     * @desc Submit data and request a prediction
     *
     * @alias prediction.training.predict
     * @memberOf! prediction(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    predict: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['data']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.3/training/' + params.data + '/predict',
        method: 'POST'
      };

      delete params.data;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * prediction.training.update
     *
     * @desc Add new data to a trained model
     *
     * @alias prediction.training.update
     * @memberOf! prediction(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['data']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/prediction/v1.3/training/' + params.data,
        method: 'PUT'
      };

      delete params.data;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Prediction object
 * @type Prediction
 */
module.exports = Prediction;