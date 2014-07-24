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
 * Freebase Search
 *
 * @classdesc Find Freebase entities using textual queries and other constraints.
 * @namespace freebase
 * @version  v1-sandbox
 * @variation v1-sandbox
 * @this Freebase
 * @param {object=} options Options for Freebase
 */
function Freebase(options) {

  var self = this;
  this._options = options || {};

  /**
   * freebase.reconcile
   *
   * @desc Reconcile entities to Freebase open data.
   *
   * @alias freebase.reconcile
   * @memberOf! freebase(v1-sandbox)
   *
   * @param  {object=} params - Parameters for request
   * @param  {number=} params.confidence - Required confidence for a candidate to match. Must be between .5 and 1.0
   * @param  {string=} params.kind - Classifications of entity e.g. type, category, title.
   * @param  {string=} params.lang - Languages for names and values. First language is used for display. Default is 'en'.
   * @param  {integer=} params.limit - Maximum number of candidates to return.
   * @param  {string=} params.name - Name of entity.
   * @param  {string=} params.prop - Property values for entity formatted as :
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.reconcile = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/freebase/v1-sandbox/reconcile',
        method: 'GET'
      },
      params: params,
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  /**
   * freebase.search
   *
   * @desc Search Freebase open data.
   *
   * @alias freebase.search
   * @memberOf! freebase(v1-sandbox)
   *
   * @param  {object=} params - Parameters for request
   * @param  {string=} params.as_of_time - A mql as_of_time value to use with mql_output queries.
   * @param  {string=} params.callback - JS method name for JSONP callbacks.
   * @param  {integer=} params.cursor - The cursor value to use for the next page of results.
   * @param  {string=} params.domain - Restrict to topics with this Freebase domain id.
   * @param  {string=} params.encode - The encoding of the response. You can use this parameter to enable html encoding.
   * @param  {boolean=} params.exact - Query on exact name and keys only.
   * @param  {string=} params.filter - A filter to apply to the query.
   * @param  {string=} params.format - Structural format of the json response.
   * @param  {string=} params.help - The keyword to request help on.
   * @param  {boolean=} params.indent - Whether to indent the json results or not.
   * @param  {string=} params.lang - The code of the language to run the query with. Default is 'en'.
   * @param  {integer=} params.limit - Maximum number of results to return.
   * @param  {string=} params.mid - A mid to use instead of a query.
   * @param  {string=} params.mql_output - The MQL query to run againist the results to extract more data.
   * @param  {string=} params.output - An output expression to request data from matches.
   * @param  {boolean=} params.prefixed - Prefix match against names and aliases.
   * @param  {string=} params.query - Query term to search for.
   * @param  {string=} params.scoring - Relevance scoring algorithm to use.
   * @param  {string=} params.spell - Request 'did you mean' suggestions
   * @param  {boolean=} params.stemmed - Query on stemmed names and aliases. May not be used with prefixed.
   * @param  {string=} params.type - Restrict to topics with this Freebase type id.
   * @param  {string=} params.with - A rule to match against.
   * @param  {string=} params.without - A rule to not match against.
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.search = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://www.googleapis.com/freebase/v1-sandbox/search',
        method: 'GET'
      },
      params: params,
      context: self
    };

    return createAPIRequest(parameters, callback);
  };
}

/**
 * Exports Freebase object
 * @type Freebase
 */
module.exports = Freebase;