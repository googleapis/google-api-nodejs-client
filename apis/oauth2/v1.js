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
   * oauth2.getCertForOpenIdConnect
   *
   *
   *
   * @alias oauth2.getCertForOpenIdConnect
   * @memberOf! oauth2(v1)
   *
   * @param  {object=} params - Parameters for request
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.getCertForOpenIdConnect = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/oauth2/v1/certs',
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
   * oauth2.getCertForOpenIdConnectRaw
   *
   *
   *
   * @alias oauth2.getCertForOpenIdConnectRaw
   * @memberOf! oauth2(v1)
   *
   * @param  {object=} params - Parameters for request
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.getCertForOpenIdConnectRaw = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/oauth2/v1/raw_public_keys',
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
   * oauth2.getRobotMetadataRaw
   *
   *
   *
   * @alias oauth2.getRobotMetadataRaw
   * @memberOf! oauth2(v1)
   *
   * @param  {object} params - Parameters for request
   * @param  {string} params.robotEmail - The email of robot account.
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.getRobotMetadataRaw = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/service_accounts/v1/metadata/raw/{robotEmail}',
        method: 'GET'
      },
      params: params,
      requiredParams: ['robotEmail'],
      pathParams: ['robotEmail'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  /**
   * oauth2.getRobotMetadataX509
   *
   *
   *
   * @alias oauth2.getRobotMetadataX509
   * @memberOf! oauth2(v1)
   *
   * @param  {object} params - Parameters for request
   * @param  {string} params.robotEmail - The email of robot account.
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.getRobotMetadataX509 = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/service_accounts/v1/metadata/x509/{robotEmail}',
        method: 'GET'
      },
      params: params,
      requiredParams: ['robotEmail'],
      pathParams: ['robotEmail'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

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
      requiredParams: [],
      pathParams: [],
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

/**
 * Exports Oauth2 object
 * @type Oauth2
 */
module.exports = Oauth2;