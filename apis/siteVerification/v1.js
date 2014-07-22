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
 * Google Site Verification API
 *
 * @classdesc Lets you programatically verify ownership of websites or domains with Google.
 * @namespace siteVerification
 * @version  v1
 * @variation v1
 * @this Siteverification
 * @param {object=} options Options for Siteverification
 */
function Siteverification(options) {

  var self = this;
  this._options = options || {};

  this.webResource = {

    /**
     * siteVerification.webResource.delete
     *
     * @desc Relinquish ownership of a website or domain.
     *
     * @alias siteVerification.webResource.delete
     * @memberOf! siteVerification(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id of a verified site or domain.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/webResource/' + params.id,
        method: 'DELETE'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * siteVerification.webResource.get
     *
     * @desc Get the most current data for a website or domain.
     *
     * @alias siteVerification.webResource.get
     * @memberOf! siteVerification(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id of a verified site or domain.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/webResource/' + params.id,
        method: 'GET'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * siteVerification.webResource.getToken
     *
     * @desc Get a verification token for placing on a website or domain.
     *
     * @alias siteVerification.webResource.getToken
     * @memberOf! siteVerification(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getToken: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/token',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * siteVerification.webResource.insert
     *
     * @desc Attempt verification of a website or domain.
     *
     * @alias siteVerification.webResource.insert
     * @memberOf! siteVerification(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.verificationMethod - The method to use for verifying a site or domain.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['verificationMethod']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/webResource',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * siteVerification.webResource.list
     *
     * @desc Get the list of your verified websites and domains.
     *
     * @alias siteVerification.webResource.list
     * @memberOf! siteVerification(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/webResource',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * siteVerification.webResource.patch
     *
     * @desc Modify the list of owners for your website or domain. This method supports patch semantics.
     *
     * @alias siteVerification.webResource.patch
     * @memberOf! siteVerification(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id of a verified site or domain.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/webResource/' + params.id,
        method: 'PATCH'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * siteVerification.webResource.update
     *
     * @desc Modify the list of owners for your website or domain.
     *
     * @alias siteVerification.webResource.update
     * @memberOf! siteVerification(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id of a verified site or domain.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/siteVerification/v1/webResource/' + params.id,
        method: 'PUT'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Siteverification object
 * @type Siteverification
 */
module.exports = Siteverification;