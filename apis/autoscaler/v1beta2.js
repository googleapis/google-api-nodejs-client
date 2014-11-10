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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/{project}/zones/{zone}/autoscalers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/{project}/zones/{zone}/autoscalers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/{project}/zones/{zone}/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/{project}/zones/{zone}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/autoscaler/v1beta2/{project}/zones/{zone}/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Autoscaler object
 * @type Autoscaler
 */
module.exports = Autoscaler;