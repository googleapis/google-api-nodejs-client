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
 * Google Spectrum Database API
 *
 * API for spectrum-management functions.
 *
 * @example
 * var google = require('googleapis');
 * var spectrum = google.spectrum('v1explorer');
 *
 * @namespace spectrum
 * @type {Function}
 * @version v1explorer
 * @variation v1explorer
 * @param {object=} options Options for Spectrum
 */
function Spectrum(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.paws = {

    /**
     * spectrum.paws.getSpectrum
     *
     * @desc Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database.
     *
     * @alias spectrum.paws.getSpectrum
     * @memberOf! spectrum(v1explorer)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSpectrum: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/spectrum/v1explorer/paws/getSpectrum',
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
     * spectrum.paws.getSpectrumBatch
     *
     * @desc The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error.
     *
     * @alias spectrum.paws.getSpectrumBatch
     * @memberOf! spectrum(v1explorer)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSpectrumBatch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/spectrum/v1explorer/paws/getSpectrumBatch',
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
     * spectrum.paws.init
     *
     * @desc Initializes the connection between a white space device and the database.
     *
     * @alias spectrum.paws.init
     * @memberOf! spectrum(v1explorer)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    init: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/spectrum/v1explorer/paws/init',
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
     * spectrum.paws.notifySpectrumUse
     *
     * @desc Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error.
     *
     * @alias spectrum.paws.notifySpectrumUse
     * @memberOf! spectrum(v1explorer)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    notifySpectrumUse: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/spectrum/v1explorer/paws/notifySpectrumUse',
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
     * spectrum.paws.register
     *
     * @desc The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error.
     *
     * @alias spectrum.paws.register
     * @memberOf! spectrum(v1explorer)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    register: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/spectrum/v1explorer/paws/register',
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
     * spectrum.paws.verifyDevice
     *
     * @desc Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error.
     *
     * @alias spectrum.paws.verifyDevice
     * @memberOf! spectrum(v1explorer)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verifyDevice: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/spectrum/v1explorer/paws/verifyDevice',
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

module.exports = Spectrum;
