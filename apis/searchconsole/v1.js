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
var utils = require('../../lib/utils');

/**
 * Google Search Console URL Testing Tools API
 *
 * Provides tools for running validation tests against single URLs
 *
 * @example
 * var google = require('googleapis');
 * var searchconsole = google.searchconsole('v1');
 *
 * @namespace searchconsole
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Searchconsole
 */
function Searchconsole(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.urlTestingTools = {

    mobileFriendlyTest: {

      /**
       * searchconsole.urlTestingTools.mobileFriendlyTest.run
       *
       * @desc Runs Mobile-Friendly Test for a given URL.
       *
       * @alias searchconsole.urlTestingTools.mobileFriendlyTest.run
       * @memberOf! searchconsole(v1)
       *
       * @param {object} params Parameters for request
       * @param {searchconsole(v1).RunMobileFriendlyTestRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      run: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef ResourceIssue
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {searchconsole(v1).BlockedResource} blockedResource Describes a blocked resource issue.
 */
/**
 * @typedef BlockedResource
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} url URL of the blocked resource.
 */
/**
 * @typedef TestStatus
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} status Status of the test.
 * @property {string} details Error details if applicable.
 */
/**
 * @typedef Image
 * @memberOf! searchconsole(v1)
 * @type object
* @property {string} mimeType The mime-type of the image data.
* @property {string} data Image data in format determined by the mime type. Currently, the format
will always be &quot;image/png&quot;, but this might change in the future.
*/
/**
 * @typedef RunMobileFriendlyTestRequest
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} url URL for inspection.
 * @property {boolean} requestScreenshot Whether or not screenshot is requested. Default is false.
 */
/**
 * @typedef MobileFriendlyIssue
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} rule Rule violated.
 */
/**
 * @typedef RunMobileFriendlyTestResponse
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} mobileFriendliness Test verdict, whether the page is mobile friendly or not.
 * @property {searchconsole(v1).MobileFriendlyIssue[]} mobileFriendlyIssues List of mobile-usability issues.
 * @property {searchconsole(v1).Image} screenshot Screenshot of the requested URL.
 * @property {searchconsole(v1).TestStatus} testStatus Final state of the test, can be either complete or an error.
 * @property {searchconsole(v1).ResourceIssue[]} resourceIssues Information about embedded resources issues.
 */
module.exports = Searchconsole;
