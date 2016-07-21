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
 * Google Cloud Speech API
 *
 * Google Cloud Speech API.
 *
 * @example
 * var google = require('googleapis');
 * var speech = google.speech('v1beta1');
 *
 * @namespace speech
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Speech
 */
function Speech(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.speech = {

    /**
     * speech.speech.syncrecognize
     *
     * @desc Perform synchronous speech-recognition: receive results after all audio has been sent and processed.
     *
     * @alias speech.speech.syncrecognize
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    syncrecognize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://speech.googleapis.com/v1beta1/speech:syncrecognize',
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
     * speech.speech.asyncrecognize
     *
     * @desc Perform asynchronous speech-recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains an `AsyncRecognizeResponse` message.
     *
     * @alias speech.speech.asyncrecognize
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncrecognize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://speech.googleapis.com/v1beta1/speech:asyncrecognize',
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

  self.operations = {

    /**
     * speech.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias speech.operations.get
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://speech.googleapis.com/v1beta1/operations/{name}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * speech.operations.list
     *
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
     *
     * @alias speech.operations.list
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.filter The standard list filter.
     * @param {string=} params.name The name of the operation collection.
     * @param {string=} params.pageToken The standard list page token.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://speech.googleapis.com/v1beta1/operations',
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
     * speech.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.
     *
     * @alias speech.operations.cancel
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://speech.googleapis.com/v1beta1/operations/{name}:cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * speech.operations.delete
     *
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @alias speech.operations.delete
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://speech.googleapis.com/v1beta1/operations/{name}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Speech;
