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
 * Groups Settings API
 *
 * @classdesc Lets you manage permission levels and related settings of a group.
 * @namespace groupssettings
 * @version  v1
 * @variation v1
 * @this Groupssettings
 * @param {object=} options Options for Groupssettings
 */
function Groupssettings(options) {

  var self = this;
  this._options = options || {};

  this.groups = {

    /**
     * groupsSettings.groups.get
     *
     * @desc Gets one resource by id.
     *
     * @alias groupsSettings.groups.get
     * @memberOf! groupssettings(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupUniqueId - The resource ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/groups/v1/groups/' + params.groupUniqueId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['groupUniqueId'],
        pathParams: ['groupUniqueId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * groupsSettings.groups.patch
     *
     * @desc Updates an existing resource. This method supports patch semantics.
     *
     * @alias groupsSettings.groups.patch
     * @memberOf! groupssettings(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupUniqueId - The resource ID
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/groups/v1/groups/' + params.groupUniqueId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['groupUniqueId'],
        pathParams: ['groupUniqueId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * groupsSettings.groups.update
     *
     * @desc Updates an existing resource.
     *
     * @alias groupsSettings.groups.update
     * @memberOf! groupssettings(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupUniqueId - The resource ID
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/groups/v1/groups/' + params.groupUniqueId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['groupUniqueId'],
        pathParams: ['groupUniqueId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Groupssettings object
 * @type Groupssettings
 */
module.exports = Groupssettings;