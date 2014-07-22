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
 * URL Shortener API
 *
 * @classdesc Lets you create, inspect, and manage goo.gl short URLs
 * @namespace urlshortener
 * @version  v1
 * @variation v1
 * @this Urlshortener
 * @param {object=} options Options for Urlshortener
 */
function Urlshortener(options) {

  var self = this;
  this._options = options || {};

  this.url = {

    /**
     * urlshortener.url.get
     *
     * @desc Expands a short URL or gets creation time and analytics.
     *
     * @alias urlshortener.url.get
     * @memberOf! urlshortener(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.projection - Additional information to return.
     * @param  {string} params.shortUrl - The short URL, including the protocol.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['shortUrl']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * urlshortener.url.insert
     *
     * @desc Creates a new short URL.
     *
     * @alias urlshortener.url.insert
     * @memberOf! urlshortener(v1)
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
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * urlshortener.url.list
     *
     * @desc Retrieves a list of URLs shortened by a user.
     *
     * @alias urlshortener.url.list
     * @memberOf! urlshortener(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.projection - Additional information to return.
     * @param  {string=} params.start-token - Token for requesting successive pages of results.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url/history',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Urlshortener object
 * @type Urlshortener
 */
module.exports = Urlshortener;