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
 * CustomSearch API
 *
 * @classdesc Lets you search over a website or collection of websites
 * @namespace customsearch
 * @version  v1
 * @variation v1
 * @this Customsearch
 * @param {object=} options Options for Customsearch
 */
function Customsearch(options) {

  var self = this;
  this._options = options || {};

  this.cse = {

    /**
     * search.cse.list
     *
     * @desc Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.
     *
     * @alias search.cse.list
     * @memberOf! customsearch(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.c2coff - Turns off the translation between zh-CN and zh-TW.
     * @param  {string=} params.cr - Country restrict(s).
     * @param  {string=} params.cref - The URL of a linked custom search engine
     * @param  {string=} params.cx - The custom search engine ID to scope this search query
     * @param  {string=} params.dateRestrict - Specifies all search results are from a time period
     * @param  {string=} params.exactTerms - Identifies a phrase that all documents in the search results must contain
     * @param  {string=} params.excludeTerms - Identifies a word or phrase that should not appear in any documents in the search results
     * @param  {string=} params.fileType - Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
     * @param  {string=} params.filter - Controls turning on or off the duplicate content filter.
     * @param  {string=} params.gl - Geolocation of end user.
     * @param  {string=} params.googlehost - The local Google domain to use to perform the search.
     * @param  {string=} params.highRange - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param  {string=} params.hl - Sets the user interface language.
     * @param  {string=} params.hq - Appends the extra query terms to the query.
     * @param  {string=} params.imgColorType - Returns black and white, grayscale, or color images: mono, gray, and color.
     * @param  {string=} params.imgDominantColor - Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
     * @param  {string=} params.imgSize - Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
     * @param  {string=} params.imgType - Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
     * @param  {string=} params.linkSite - Specifies that all search results should contain a link to a particular URL
     * @param  {string=} params.lowRange - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
     * @param  {string=} params.lr - The language restriction for the search results
     * @param  {integer=} params.num - Number of search results to return
     * @param  {string=} params.orTerms - Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
     * @param  {string} params.q - Query
     * @param  {string=} params.relatedSite - Specifies that all search results should be pages that are related to the specified URL
     * @param  {string=} params.rights - Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
     * @param  {string=} params.safe - Search safety level
     * @param  {string=} params.searchType - Specifies the search type: image.
     * @param  {string=} params.siteSearch - Specifies all search results should be pages from a given site
     * @param  {string=} params.siteSearchFilter - Controls whether to include or exclude results from the site named in the as_sitesearch parameter
     * @param  {string=} params.sort - The sort expression to apply to the results
     * @param  {integer=} params.start - The index of the first result to return
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/customsearch/v1',
          method: 'GET'
        },
        params: params,
        requiredParams: ['q'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Customsearch object
 * @type Customsearch
 */
module.exports = Customsearch;