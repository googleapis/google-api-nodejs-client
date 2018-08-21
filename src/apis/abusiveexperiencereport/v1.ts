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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace abusiveexperiencereport_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Abusive Experience Report API
   *
   * View Abusive Experience Report data, and get a list of sites that have a
   * significant number of abusive experiences.
   *
   * @example
   * const {google} = require('googleapis');
   * const abusiveexperiencereport = google.abusiveexperiencereport('v1');
   *
   * @namespace abusiveexperiencereport
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Abusiveexperiencereport
   */
  export class Abusiveexperiencereport {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    sites: Resource$Sites;
    violatingSites: Resource$Violatingsites;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.sites = new Resource$Sites(this);
      this.violatingSites = new Resource$Violatingsites(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Response message for GetSiteSummary. Do not confuse with same message in
   * google.ads.experiencereport.v1
   */
  export interface Schema$SiteSummaryResponse {
    /**
     * The status of the site reviewed for the abusive experiences.
     */
    abusiveStatus?: string;
    /**
     * The date on which enforcement begins.
     */
    enforcementTime?: string;
    /**
     * The abusive experience enforcement status of the site.
     */
    filterStatus?: string;
    /**
     * The last time that the site changed status.
     */
    lastChangeTime?: string;
    /**
     * A link that leads to a full abusive experience report.
     */
    reportUrl?: string;
    /**
     * The name of the site reviewed.
     */
    reviewedSite?: string;
    /**
     * Whether the site is currently under review.
     */
    underReview?: boolean;
  }
  /**
   * Response message for ListViolatingSites.
   */
  export interface Schema$ViolatingSitesResponse {
    /**
     * A list of summaries of violating sites.
     */
    violatingSites?: Schema$SiteSummaryResponse[];
  }


  export class Resource$Sites {
    root: Abusiveexperiencereport;
    constructor(root: Abusiveexperiencereport) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * abusiveexperiencereport.sites.get
     * @desc Gets a summary of the abusive experience rating of a site.
     * @alias abusiveexperiencereport.sites.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The required site name. This is the site
     *     property whose abusive experiences have been reviewed, and it must be
     *     URL-encoded. For example, sites/https%3A%2F%2Fwww.google.com. The
     *     server will return an error of BAD_REQUEST if this field is not
     *     filled in. Note that if the site property is not yet verified in
     *     Search Console, the reportUrl field returned by the API will lead to
     *     the verification page, prompting the user to go through that process
     *     before they can gain access to the Abusive Experience Report.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Sites$Get,
        options?: MethodOptions): AxiosPromise<Schema$SiteSummaryResponse>;
    get(params: Params$Resource$Sites$Get,
        options: MethodOptions|BodyResponseCallback<Schema$SiteSummaryResponse>,
        callback: BodyResponseCallback<Schema$SiteSummaryResponse>): void;
    get(params: Params$Resource$Sites$Get,
        callback: BodyResponseCallback<Schema$SiteSummaryResponse>): void;
    get(callback: BodyResponseCallback<Schema$SiteSummaryResponse>): void;
    get(paramsOrCallback?: Params$Resource$Sites$Get|
        BodyResponseCallback<Schema$SiteSummaryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SiteSummaryResponse>,
        callback?: BodyResponseCallback<Schema$SiteSummaryResponse>):
        void|AxiosPromise<Schema$SiteSummaryResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://abusiveexperiencereport.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteSummaryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteSummaryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The required site name. This is the site property whose abusive
     * experiences have been reviewed, and it must be URL-encoded. For example,
     * sites/https%3A%2F%2Fwww.google.com. The server will return an error of
     * BAD_REQUEST if this field is not filled in. Note that if the site
     * property is not yet verified in Search Console, the reportUrl field
     * returned by the API will lead to the verification page, prompting the
     * user to go through that process before they can gain access to the
     * Abusive Experience Report.
     */
    name?: string;
  }


  export class Resource$Violatingsites {
    root: Abusiveexperiencereport;
    constructor(root: Abusiveexperiencereport) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * abusiveexperiencereport.violatingSites.list
     * @desc Lists sites with Abusive Experience Report statuses of "Failing".
     * @alias abusiveexperiencereport.violatingSites.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Violatingsites$List, options?: MethodOptions):
        AxiosPromise<Schema$ViolatingSitesResponse>;
    list(
        params: Params$Resource$Violatingsites$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ViolatingSitesResponse>,
        callback: BodyResponseCallback<Schema$ViolatingSitesResponse>): void;
    list(
        params: Params$Resource$Violatingsites$List,
        callback: BodyResponseCallback<Schema$ViolatingSitesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ViolatingSitesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Violatingsites$List|
        BodyResponseCallback<Schema$ViolatingSitesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ViolatingSitesResponse>,
        callback?: BodyResponseCallback<Schema$ViolatingSitesResponse>):
        void|AxiosPromise<Schema$ViolatingSitesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Violatingsites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Violatingsites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

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
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ViolatingSitesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ViolatingSitesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Violatingsites$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
}
