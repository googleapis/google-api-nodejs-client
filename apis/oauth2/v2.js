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
 * Google OAuth2 API
 *
 * Obtains end-user authorization grants for use with other Google APIs.
 *
 * @example
 * var google = require('googleapis');
 * var oauth2 = google.oauth2('v2');
 *
 * @namespace oauth2
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Oauth2
 */
function Oauth2(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  /**
   * oauth2.getCertForOpenIdConnect
   *
   * 
   *
   * @alias oauth2.getCertForOpenIdConnect
   * @memberOf! oauth2(v2)
   *
   * @param {object=} params Parameters for request
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  this.getCertForOpenIdConnect = function (params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/oauth2/v2/certs',
        method: 'GET'
      },
      params: params,
      requiredParams: [],
      pathParams: [],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  /**
   * oauth2.tokeninfo
   *
   * 
   *
   * @alias oauth2.tokeninfo
   * @memberOf! oauth2(v2)
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.access_token 
   * @param {string=} params.id_token 
   * @param {string=} params.token_handle 
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  this.tokeninfo = function (params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/oauth2/v2/tokeninfo',
        method: 'POST'
      },
      params: params,
      requiredParams: [],
      pathParams: [],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  self.userinfo = {

    /**
     * oauth2.userinfo.get
     *
     * 
     *
     * @alias oauth2.userinfo.get
     * @memberOf! oauth2(v2)
     *
     * @param {object=} params Parameters for request
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/oauth2/v2/userinfo',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    v2: {

      me: {

        /**
         * oauth2.userinfo.v2.me.get
         *
         * 
         *
         * @alias oauth2.userinfo.v2.me.get
         * @memberOf! oauth2(v2)
         *
         * @param {object=} params Parameters for request
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/userinfo/v2/me',
              method: 'GET'
            },
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Oauth2;
