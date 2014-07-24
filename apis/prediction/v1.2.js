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
        url: 'https://www.googleapis.com/prediction/v1.2/training/' + params.data + '/predict',
        method: 'POST'
      },
      params: params,
      requiredParams: ['data'],
      pathParams: ['data'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

}

/**
 * Exports Prediction object
 * @type Prediction
 */
module.exports = Prediction;