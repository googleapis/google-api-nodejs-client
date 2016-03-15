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
 * Google People API
 *
 * @classdesc The Google People API service gives access to information about profiles and contacts.
 * @namespace people
 * @version  v1
 * @variation v1
 * @this People
 * @param {object=} options Options for People
 */
function People(options) {

  var self = this;
  this._options = options || {};

  this.people = {

    /**
     * people.people.get
     *
     * @desc Provides information about a person resource for a resource name. Use `people/me` to indicate the authenticated user.
     *
     * @alias people.people.get
     * @memberOf! people(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resourceName - The resource name of the person to provide information about. - To get information about the authenticated user, specify `people/me`. - To get information about any user, specify the resource name that identifies the user, such as the resource names returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).
     * @param  {string=} params.requestMask.includeField - Comma-separated list of fields to be included in the response. Omitting this field will include all fields. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://people.googleapis.com/v1/{resourceName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * people.people.getBatchGet
     *
     * @desc Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user.
     *
     * @alias people.people.getBatchGet
     * @memberOf! people(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.resourceNames - The resource name, such as one returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list), of one of the people to provide information about. You can include this parameter up to 50 times in one request.
     * @param  {string=} params.requestMask.includeField - Comma-separated list of fields to be included in the response. Omitting this field will include all fields. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getBatchGet: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://people.googleapis.com/v1/people:batchGet',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    connections: {

      /**
       * people.people.connections.list
       *
       * @desc Provides a list of the authenticated user's contacts merged with any linked profiles.
       *
       * @alias people.people.connections.list
       * @memberOf! people(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resourceName - The resource name to return connections for. Only `people/me` is valid.
       * @param  {string=} params.pageToken - The token of the page to be returned.
       * @param  {integer=} params.pageSize - The number of connections to include in the response. Valid values are between 1 and 500, inclusive. Defaults to 100.
       * @param  {string=} params.sortOrder - The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
       * @param  {string=} params.syncToken - A sync token, returned by a previous call to `people.connections.list`. Only resources changed since the sync token was created are returned.
       * @param  {string=} params.requestMask.includeField - Comma-separated list of fields to be included in the response. Omitting this field will include all fields. Each path should start with `person.`: for example, `person.names` or `person.photos`.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://people.googleapis.com/v1/{resourceName}/connections',
            method: 'GET'
          },
          params: params,
          requiredParams: ['resourceName'],
          pathParams: ['resourceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports People object
 * @type People
 */
module.exports = People;