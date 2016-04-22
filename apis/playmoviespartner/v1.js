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
 * Google Play Movies Partner API
 *
 * Lets Google Play Movies Partners get the delivery status of their titles.
 *
 * @example
 * var google = require('googleapis');
 * var playmoviespartner = google.playmoviespartner('v1');
 *
 * @namespace playmoviespartner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Playmoviespartner
 */
function Playmoviespartner(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.accounts = {

    avails: {

      /**
       * playmoviespartner.accounts.avails.list
       *
       * @desc List Avails owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.avails.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string=} params.title Filter Avails that match a case-insensitive substring of the default Title name.
       * @param {string=} params.territories Filter Avails that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
       * @param {string=} params.altId Filter Avails that match a case-insensitive, partner-specific custom id.
       * @param {string=} params.videoIds Filter Avails that match any of the given `video_id`s.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/avails',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    orders: {

      /**
       * playmoviespartner.accounts.orders.get
       *
       * @desc Get an Order given its id. See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.orders.get
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {string} params.orderId REQUIRED. Order ID.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/orders/{orderId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'orderId'],
          pathParams: ['accountId', 'orderId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * playmoviespartner.accounts.orders.list
       *
       * @desc List Orders owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.orders.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string=} params.name Filter Orders that match a title name (case-insensitive, sub-string match).
       * @param {string=} params.status Filter Orders that match one of the given status.
       * @param {string=} params.customId Filter Orders that match a case-insensitive, partner-specific custom id.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/orders',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    experienceLocales: {

      /**
       * playmoviespartner.accounts.experienceLocales.get
       *
       * @desc Get an ExperienceLocale given its id. See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.experienceLocales.get
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {string} params.elId REQUIRED. ExperienceLocale ID, as defined by Google.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/experienceLocales/{elId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'elId'],
          pathParams: ['accountId', 'elId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * playmoviespartner.accounts.experienceLocales.list
       *
       * @desc List ExperienceLocales owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.experienceLocales.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string=} params.titleLevelEidr Filter ExperienceLocales that match a given title-level EIDR.
       * @param {string=} params.editLevelEidr Filter ExperienceLocales that match a given edit-level EIDR.
       * @param {string=} params.status Filter ExperienceLocales that match one of the given status.
       * @param {string=} params.customId Filter ExperienceLocales that match a case-insensitive, partner-specific custom id.
       * @param {string=} params.altCutId Filter ExperienceLocales that match a case-insensitive, partner-specific Alternative Cut ID.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/experienceLocales',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    storeInfos: {

      /**
       * playmoviespartner.accounts.storeInfos.list
       *
       * @desc List StoreInfos owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.storeInfos.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string=} params.videoId Filter StoreInfos that match a given `video_id`. NOTE: this field is deprecated and will be removed on V2; `video_ids` should be used instead.
       * @param {string=} params.countries Filter StoreInfos that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
       * @param {string=} params.name Filter StoreInfos that match a case-insensitive substring of the default name.
       * @param {string=} params.videoIds Filter StoreInfos that match any of the given `video_id`s.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/storeInfos',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      country: {

        /**
         * playmoviespartner.accounts.storeInfos.country.get
         *
         * @desc Get a StoreInfo given its video id and country. See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
         *
         * @alias playmoviespartner.accounts.storeInfos.country.get
         * @memberOf! playmoviespartner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
         * @param {string} params.videoId REQUIRED. Video ID.
         * @param {string} params.country REQUIRED. Edit country.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://playmoviespartner.googleapis.com/v1/accounts/{accountId}/storeInfos/{videoId}/country/{country}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'videoId', 'country'],
            pathParams: ['accountId', 'videoId', 'country'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Playmoviespartner;
