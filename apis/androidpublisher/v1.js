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
 * Google Play Android Developer API
 *
 * @classdesc Lets Android application developers access their Google Play accounts.
 * @namespace androidpublisher
 * @version  v1
 * @variation v1
 * @this Androidpublisher
 * @param {object=} options Options for Androidpublisher
 */
function Androidpublisher(options) {

  var self = this;
  this._options = options || {};

  this.purchases = {

    /**
     * androidpublisher.purchases.cancel
     *
     * @desc Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     *
     * @alias androidpublisher.purchases.cancel
     * @memberOf! androidpublisher(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
     * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['packageName', 'subscriptionId', 'token']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/androidpublisher/v1/applications/' + params.packageName + '/subscriptions/' + params.subscriptionId + '/purchases/' + params.token + '/cancel',
        method: 'POST'
      };

      delete params.packageName;
      delete params.subscriptionId;
      delete params.token;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * androidpublisher.purchases.get
     *
     * @desc Checks whether a user's subscription purchase is valid and returns its expiry time.
     *
     * @alias androidpublisher.purchases.get
     * @memberOf! androidpublisher(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
     * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['packageName', 'subscriptionId', 'token']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/androidpublisher/v1/applications/' + params.packageName + '/subscriptions/' + params.subscriptionId + '/purchases/' + params.token,
        method: 'GET'
      };

      delete params.packageName;
      delete params.subscriptionId;
      delete params.token;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Androidpublisher object
 * @type Androidpublisher
 */
module.exports = Androidpublisher;