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
 * Google Site Verification API
 *
 * Verifies ownership of websites or domains with Google.
 *
 * @example
 * var google = require('googleapis');
 * var siteVerification = google.siteVerification('v1');
 *
 * @namespace siteVerification
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Siteverification
 */
function Siteverification(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.webResource = {

    /**
     * siteVerification.webResource.delete
     *
     * @desc Relinquish ownership of a website or domain.
     *
     * @alias siteVerification.webResource.delete
     * @memberOf! siteVerification(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/webResource/{id}',
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
     * siteVerification.webResource.get
     *
     * @desc Get the most current data for a website or domain.
     *
     * @alias siteVerification.webResource.get
     * @memberOf! siteVerification(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/webResource/{id}',
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
     * siteVerification.webResource.getToken
     *
     * @desc Get a verification token for placing on a website or domain.
     *
     * @alias siteVerification.webResource.getToken
     * @memberOf! siteVerification(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getToken: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/token',
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
     * siteVerification.webResource.insert
     *
     * @desc Attempt verification of a website or domain.
     *
     * @alias siteVerification.webResource.insert
     * @memberOf! siteVerification(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.verificationMethod The method to use for verifying a site or domain.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/webResource',
          method: 'POST'
        },
        params: params,
        requiredParams: ['verificationMethod'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * siteVerification.webResource.list
     *
     * @desc Get the list of your verified websites and domains.
     *
     * @alias siteVerification.webResource.list
     * @memberOf! siteVerification(v1)
     *
     * @param {object=} params Parameters for request
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/webResource',
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
     * siteVerification.webResource.patch
     *
     * @desc Modify the list of owners for your website or domain. This method supports patch semantics.
     *
     * @alias siteVerification.webResource.patch
     * @memberOf! siteVerification(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/webResource/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * siteVerification.webResource.update
     *
     * @desc Modify the list of owners for your website or domain.
     *
     * @alias siteVerification.webResource.update
     * @memberOf! siteVerification(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/siteVerification/v1/webResource/{id}',
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

module.exports = Siteverification;
