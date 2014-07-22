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
 * Google Compute Engine Autoscaler API
 *
 * @classdesc The Google Compute Engine Autoscaler API provides autoscaling for groups of Cloud VMs.
 * @namespace autoscaler
 * @version  v1beta2
 * @variation v1beta2
 * @this Autoscaler
 * @param {object=} options Options for Autoscaler
 */
function Autoscaler(options) {

  var self = this;
  this._options = options || {};

  this.autoscalers = {

    /**
     * autoscaler.autoscalers.delete
     *
     * @desc Deletes the specified Autoscaler resource.
     *
     * @alias autoscaler.autoscalers.delete
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.autoscaler - Name of the Autoscaler resource.
     * @param  {string} params.project - Project ID of Autoscaler resource.
     * @param  {string} params.zone - Zone name of Autoscaler resource.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'autoscaler']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/' + params.project + '/zones/' + params.zone + '/autoscalers/' + params.autoscaler,
        method: 'DELETE'
      };

      delete params.autoscaler;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.autoscalers.get
     *
     * @desc Gets the specified Autoscaler resource.
     *
     * @alias autoscaler.autoscalers.get
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.autoscaler - Name of the Autoscaler resource.
     * @param  {string} params.project - Project ID of Autoscaler resource.
     * @param  {string} params.zone - Zone name of Autoscaler resource.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'autoscaler']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/' + params.project + '/zones/' + params.zone + '/autoscalers/' + params.autoscaler,
        method: 'GET'
      };

      delete params.autoscaler;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.autoscalers.insert
     *
     * @desc Adds new Autoscaler resource.
     *
     * @alias autoscaler.autoscalers.insert
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID of Autoscaler resource.
     * @param  {string} params.zone - Zone name of Autoscaler resource.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/' + params.project + '/zones/' + params.zone + '/autoscalers',
        method: 'POST'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.autoscalers.list
     *
     * @desc Lists all Autoscaler resources in this zone.
     *
     * @alias autoscaler.autoscalers.list
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter -
     * @param  {integer=} params.maxResults -
     * @param  {string=} params.pageToken -
     * @param  {string} params.project - Project ID of Autoscaler resource.
     * @param  {string} params.zone - Zone name of Autoscaler resource.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/' + params.project + '/zones/' + params.zone + '/autoscalers',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.autoscalers.patch
     *
     * @desc Update the entire content of the Autoscaler resource. This method supports patch semantics.
     *
     * @alias autoscaler.autoscalers.patch
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.autoscaler - Name of the Autoscaler resource.
     * @param  {string} params.project - Project ID of Autoscaler resource.
     * @param  {string} params.zone - Zone name of Autoscaler resource.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'autoscaler']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/' + params.project + '/zones/' + params.zone + '/autoscalers/' + params.autoscaler,
        method: 'PATCH'
      };

      delete params.autoscaler;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.autoscalers.update
     *
     * @desc Update the entire content of the Autoscaler resource.
     *
     * @alias autoscaler.autoscalers.update
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.autoscaler - Name of the Autoscaler resource.
     * @param  {string} params.project - Project ID of Autoscaler resource.
     * @param  {string} params.zone - Zone name of Autoscaler resource.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'autoscaler']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/' + params.project + '/zones/' + params.zone + '/autoscalers/' + params.autoscaler,
        method: 'PUT'
      };

      delete params.autoscaler;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.zoneOperations = {

    /**
     * autoscaler.zoneOperations.delete
     *
     * @desc Deletes the specified zone-specific operation resource.
     *
     * @alias autoscaler.zoneOperations.delete
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation -
     * @param  {string} params.project -
     * @param  {string} params.zone -
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/' + params.project + '/zones/' + params.zone + '/operations/' + params.operation,
        method: 'DELETE'
      };

      delete params.operation;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific operation resource.
     *
     * @alias autoscaler.zoneOperations.get
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation -
     * @param  {string} params.project -
     * @param  {string} params.zone -
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/' + params.project + '/zones/' + params.zone + '/operations/' + params.operation,
        method: 'GET'
      };

      delete params.operation;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * autoscaler.zoneOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified zone.
     *
     * @alias autoscaler.zoneOperations.list
     * @memberOf! autoscaler(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter -
     * @param  {integer=} params.maxResults -
     * @param  {string=} params.pageToken -
     * @param  {string} params.project -
     * @param  {string} params.zone -
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/autoscaler/v1beta2/' + params.project + '/zones/' + params.zone + '/operations',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Autoscaler object
 * @type Autoscaler
 */
module.exports = Autoscaler;