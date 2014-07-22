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
 * Google Civic Information API
 *
 * @classdesc An API for accessing civic information.
 * @namespace civicinfo
 * @version  v1
 * @variation v1
 * @this Civicinfo
 * @param {object=} options Options for Civicinfo
 */
function Civicinfo(options) {

  var self = this;
  this._options = options || {};

  this.divisions = {

    /**
     * civicinfo.divisions.search
     *
     * @desc Searches for political divisions by their natural name or OCD ID.
     *
     * @alias civicinfo.divisions.search
     * @memberOf! civicinfo(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.query - The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/civicinfo/v1/representatives/division_search',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.elections = {

    /**
     * civicinfo.elections.electionQuery
     *
     * @desc List of available elections to query.
     *
     * @alias civicinfo.elections.electionQuery
     * @memberOf! civicinfo(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    electionQuery: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/civicinfo/v1/elections',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * civicinfo.elections.voterInfoQuery
     *
     * @desc Looks up information relevant to a voter based on the voter's registered address.
     *
     * @alias civicinfo.elections.voterInfoQuery
     * @memberOf! civicinfo(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.electionId - The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections
     * @param  {boolean=} params.officialOnly - If set to true, only data from official state sources will be returned.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    voterInfoQuery: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['electionId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/civicinfo/v1/voterinfo/' + params.electionId + '/lookup',
        method: 'POST'
      };

      delete params.electionId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.representatives = {

    /**
     * civicinfo.representatives.representativeInfoQuery
     *
     * @desc Looks up political geography and representative information based on an address or Open Civic Data division identifier.
     *
     * @alias civicinfo.representatives.representativeInfoQuery
     * @memberOf! civicinfo(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.includeOffices - Whether to return information about offices and officials. If false, only the top-level district information will be returned.
     * @param  {string=} params.ocdId - The division to look up. May only be specified if the address field is not given in the request body.
     * @param  {boolean=} params.recursive - When ocd_id is supplied, return all divisions which are hierarchically nested within the queried division. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    representativeInfoQuery: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/civicinfo/v1/representatives/lookup',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Civicinfo object
 * @type Civicinfo
 */
module.exports = Civicinfo;