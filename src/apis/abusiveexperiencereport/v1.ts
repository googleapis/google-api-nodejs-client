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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Abusive Experience Report API
 *
 * View Abusive Experience Report data, and get a list of sites that have a
 * significant number of abusive experiences.
 *
 * @example
 * const google = require('googleapis');
 * const abusiveexperiencereport = google.abusiveexperiencereport('v1');
 *
 * @namespace abusiveexperiencereport
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Abusiveexperiencereport
 */
function Abusiveexperiencereport(options) {
  const self = this;
  self._options = options || {};
  self.sites = {
    /**
     * abusiveexperiencereport.sites.get
     * @desc Gets a summary of the abusive experience rating of a site.
     * @alias abusiveexperiencereport.sites.get
     * @memberOf! abusiveexperiencereport(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The required site name. This is the site property whose abusive experiences have been reviewed, and it must be URL-encoded. For example, sites/https%3A%2F%2Fwww.google.com. The server will return an error of BAD_REQUEST if this field is not filled in. Note that if the site property is not yet verified in Search Console, the reportUrl field returned by the API will lead to the verification page, prompting the user to go through that process before they can gain access to the Abusive Experience Report.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://abusiveexperiencereport.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.violatingSites = {
    /**
     * abusiveexperiencereport.violatingSites.list
     * @desc Lists sites with Abusive Experience Report statuses of "Failing".
     * @alias abusiveexperiencereport.violatingSites.list
     * @memberOf! abusiveexperiencereport(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://abusiveexperiencereport.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/violatingSites')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef SiteSummaryResponse
 * @memberOf! abusiveexperiencereport(v1)
 * @type object
 * @property {string} abusiveStatus The status of the site reviewed for the abusive experiences.
 * @property {string} enforcementTime The date on which enforcement begins.
 * @property {string} filterStatus The abusive experience enforcement status of the site.
 * @property {string} lastChangeTime The last time that the site changed status.
 * @property {string} reportUrl A link that leads to a full abusive experience report.
 * @property {string} reviewedSite The name of the site reviewed.
 * @property {boolean} underReview Whether the site is currently under review.
 */
/**
 * @typedef ViolatingSitesResponse
 * @memberOf! abusiveexperiencereport(v1)
 * @type object
 * @property {abusiveexperiencereport(v1).SiteSummaryResponse[]} violatingSites A list of summaries of violating sites.
 */

export = Abusiveexperiencereport;
