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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Prediction API
 *
 * @classdesc Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
 * @namespace prediction
 * @version  v1.2
 * @variation v1.2
 * @this Prediction
 * @param {object=} options Options for Prediction
 */
function Prediction(options) {

  var self = this;
  this._options = options || {};

  /**
   * prediction.predict
   *
   * @desc Submit data and request a prediction
   *
   * @alias prediction.predict
   * @memberOf! prediction(v1.2)
   *
   * @param  {object} params - Parameters for request
   * @param  {string} params.data - mybucket%2Fmydata resource in Google Storage
   * @param  {object} params.resource - Request body data
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.predict = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/prediction/v1.2/training/{data}/predict',
        method: 'POST'
      },
      params: params,
      requiredParams: ['data'],
      pathParams: ['data'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  this.hostedmodels = {

    /**
     * prediction.hostedmodels.predict
     *
     * @desc Submit input and request an output against a hosted model
     *
     * @alias prediction.hostedmodels.predict
     * @memberOf! prediction(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.hostedModelName - The name of a hosted model
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    predict: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.2/hostedmodels/{hostedModelName}/predict',
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

  this.training = {

    /**
     * prediction.training.delete
     *
     * @desc Delete a trained model
     *
     * @alias prediction.training.delete
     * @memberOf! prediction(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.2/training/{data}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['data'],
        pathParams: ['data'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.training.get
     *
     * @desc Check training status of your model
     *
     * @alias prediction.training.get
     * @memberOf! prediction(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.2/training/{data}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['data'],
        pathParams: ['data'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.training.insert
     *
     * @desc Begin training your model
     *
     * @alias prediction.training.insert
     * @memberOf! prediction(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.data - mybucket/mydata resource in Google Storage
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.2/training',
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
     * prediction.training.update
     *
     * @desc Add new data to a trained model
     *
     * @alias prediction.training.update
     * @memberOf! prediction(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.data - mybucket/mydata resource in Google Storage
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.2/training/{data}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['data'],
        pathParams: ['data'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Prediction object
 * @type Prediction
 */
module.exports = Prediction;