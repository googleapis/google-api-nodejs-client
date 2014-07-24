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
 * Google OAuth2 API
 *
 * @classdesc Lets you access OAuth2 protocol related APIs.
 * @namespace oauth2
 * @version  v1
 * @variation v1
 * @this Oauth2
 * @param {object=} options Options for Oauth2
 */
function Oauth2(options) {

  var self = this;
  this._options = options || {};

  /**
   * oauth2.tokeninfo
   *
   * @desc Get token info
   *
   * @alias oauth2.tokeninfo
   * @memberOf! oauth2(v1)
   *
   * @param  {object=} params - Parameters for request
   * @param  {string=} params.access_token - The oauth2 access token
   * @param  {string=} params.id_token - The ID token
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.tokeninfo = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/oauth2/v1/tokeninfo',
        method: 'POST'
      },
      params: params,
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  this.userinfo = {

    /**
     * oauth2.userinfo.get
     *
     * @desc Get user info
     *
     * @alias oauth2.userinfo.get
     * @memberOf! oauth2(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/oauth2/v1/userinfo',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    v2: {

      me: {

        /**
         * oauth2.userinfo.v2.me.get
         *
         * @desc Get user info
         *
         * @alias oauth2.userinfo.v2.me.get
         * @memberOf! oauth2(v1)
         *
         * @param  {object=} params - Parameters for request
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/userinfo/v2/me',
              method: 'GET'
            },
            params: params,
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * Exports Oauth2 object
 * @type Oauth2
 */
module.exports = Oauth2;