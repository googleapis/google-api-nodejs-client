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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace youtubeAnalytics_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  /**
   * YouTube Analytics API
   *
   * Retrieves your YouTube Analytics data.
   *
   * @example
   * const google = require('googleapis');
   * const youtubeAnalytics = google.youtubeAnalytics('v1beta1');
   *
   * @namespace youtubeAnalytics
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Youtubeanalytics
   */
  export class Youtubeanalytics {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    groupItems: Resource$Groupitems;
    groups: Resource$Groups;
    reports: Resource$Reports;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.groupItems = new Resource$Groupitems(this);
      this.groups = new Resource$Groups(this);
      this.reports = new Resource$Reports(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Group {
    contentDetails?: any;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: any;
  }
  export interface Schema$GroupItem {
    etag?: string;
    groupId?: string;
    id?: string;
    kind?: string;
    resource?: any;
  }
  /**
   * A paginated list of grouList resources returned in response to a
   * youtubeAnalytics.groupApi.list request.
   */
  export interface Schema$GroupItemListResponse {
    etag?: string;
    items?: Schema$GroupItem[];
    kind?: string;
  }
  /**
   * A paginated list of grouList resources returned in response to a
   * youtubeAnalytics.groupApi.list request.
   */
  export interface Schema$GroupListResponse {
    etag?: string;
    items?: Schema$Group[];
    kind?: string;
    nextPageToken?: string;
  }
  /**
   * Contains a single result table. The table is returned as an array of rows
   * that contain the values for the cells of the table. Depending on the metric
   * or dimension, the cell can contain a string (video ID, country code) or a
   * number (number of views or number of likes).
   */
  export interface Schema$ResultTable {
    /**
     * This value specifies information about the data returned in the rows
     * fields. Each item in the columnHeaders list identifies a field returned
     * in the rows value, which contains a list of comma-delimited data. The
     * columnHeaders list will begin with the dimensions specified in the API
     * request, which will be followed by the metrics specified in the API
     * request. The order of both dimensions and metrics will match the ordering
     * in the API request. For example, if the API request contains the
     * parameters dimensions=ageGroup,gender&amp;metrics=viewerPercentage, the
     * API response will return columns in this order:
     * ageGroup,gender,viewerPercentage.
     */
    columnHeaders?: any[];
    /**
     * This value specifies the type of data included in the API response. For
     * the query method, the kind property value will be
     * youtubeAnalytics#resultTable.
     */
    kind?: string;
    /**
     * The list contains all rows of the result table. Each item in the list is
     * an array that contains comma-delimited data corresponding to a single row
     * of data. The order of the comma-delimited data fields will match the
     * order of the columns listed in the columnHeaders field. If no data is
     * available for the given query, the rows element will be omitted from the
     * response. The response for a query with the day dimension will not
     * contain rows for the most recent days.
     */
    rows?: any[][];
  }


  export class Resource$Groupitems {
    root: Youtubeanalytics;
    constructor(root: Youtubeanalytics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * youtubeAnalytics.groupItems.delete
     * @desc Removes an item from a group.
     * @alias youtubeAnalytics.groupItems.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube group item ID for the group that is being deleted.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Groupitems$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Groupitems$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Groupitems$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Groupitems$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Groupitems$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groupitems$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groupItems')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * youtubeAnalytics.groupItems.insert
     * @desc Creates a group item.
     * @alias youtubeAnalytics.groupItems.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {().GroupItem} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: Params$Resource$Groupitems$Insert, options?: MethodOptions):
        AxiosPromise<Schema$GroupItem>;
    insert(
        params: Params$Resource$Groupitems$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$GroupItem>,
        callback: BodyResponseCallback<Schema$GroupItem>): void;
    insert(
        params: Params$Resource$Groupitems$Insert,
        callback: BodyResponseCallback<Schema$GroupItem>): void;
    insert(callback: BodyResponseCallback<Schema$GroupItem>): void;
    insert(
        paramsOrCallback?: Params$Resource$Groupitems$Insert|
        BodyResponseCallback<Schema$GroupItem>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GroupItem>,
        callback?: BodyResponseCallback<Schema$GroupItem>):
        void|AxiosPromise<Schema$GroupItem> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Groupitems$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groupitems$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groupItems')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GroupItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GroupItem>(parameters);
      }
    }


    /**
     * youtubeAnalytics.groupItems.list
     * @desc Returns a collection of group items that match the API request
     * parameters.
     * @alias youtubeAnalytics.groupItems.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupId The id parameter specifies the unique ID of the group for which you want to retrieve group items.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Groupitems$List, options?: MethodOptions):
        AxiosPromise<Schema$GroupItemListResponse>;
    list(
        params: Params$Resource$Groupitems$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$GroupItemListResponse>,
        callback: BodyResponseCallback<Schema$GroupItemListResponse>): void;
    list(
        params: Params$Resource$Groupitems$List,
        callback: BodyResponseCallback<Schema$GroupItemListResponse>): void;
    list(callback: BodyResponseCallback<Schema$GroupItemListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Groupitems$List|
        BodyResponseCallback<Schema$GroupItemListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GroupItemListResponse>,
        callback?: BodyResponseCallback<Schema$GroupItemListResponse>):
        void|AxiosPromise<Schema$GroupItemListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groupitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groupitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groupItems')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['groupId'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GroupItemListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GroupItemListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Groupitems$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id parameter specifies the YouTube group item ID for the group that
     * is being deleted.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Groupitems$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupItem;
  }
  export interface Params$Resource$Groupitems$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id parameter specifies the unique ID of the group for which you want
     * to retrieve group items.
     */
    groupId?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }


  export class Resource$Groups {
    root: Youtubeanalytics;
    constructor(root: Youtubeanalytics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * youtubeAnalytics.groups.delete
     * @desc Deletes a group.
     * @alias youtubeAnalytics.groups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube group ID for the group that is being deleted.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Groups$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Groups$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Groups$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Groups$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groups')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * youtubeAnalytics.groups.insert
     * @desc Creates a group.
     * @alias youtubeAnalytics.groups.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {().Group} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: Params$Resource$Groups$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Group>;
    insert(
        params: Params$Resource$Groups$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback: BodyResponseCallback<Schema$Group>): void;
    insert(
        params: Params$Resource$Groups$Insert,
        callback: BodyResponseCallback<Schema$Group>): void;
    insert(callback: BodyResponseCallback<Schema$Group>): void;
    insert(
        paramsOrCallback?: Params$Resource$Groups$Insert|
        BodyResponseCallback<Schema$Group>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback?: BodyResponseCallback<Schema$Group>):
        void|AxiosPromise<Schema$Group> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groups')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }


    /**
     * youtubeAnalytics.groups.list
     * @desc Returns a collection of groups that match the API request
     * parameters. For example, you can retrieve all groups that the
     * authenticated user owns, or you can retrieve one or more groups by their
     * unique IDs.
     * @alias youtubeAnalytics.groups.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube group ID(s) for the resource(s) that are being retrieved. In a group resource, the id property specifies the group's YouTube group ID.
     * @param {boolean=} params.mine Set this parameter's value to true to instruct the API to only return groups owned by the authenticated user.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page that can be retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Groups$List, options?: MethodOptions):
        AxiosPromise<Schema$GroupListResponse>;
    list(
        params: Params$Resource$Groups$List,
        options: MethodOptions|BodyResponseCallback<Schema$GroupListResponse>,
        callback: BodyResponseCallback<Schema$GroupListResponse>): void;
    list(
        params: Params$Resource$Groups$List,
        callback: BodyResponseCallback<Schema$GroupListResponse>): void;
    list(callback: BodyResponseCallback<Schema$GroupListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Groups$List|
        BodyResponseCallback<Schema$GroupListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GroupListResponse>,
        callback?: BodyResponseCallback<Schema$GroupListResponse>):
        void|AxiosPromise<Schema$GroupListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groups')
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
        createAPIRequest<Schema$GroupListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GroupListResponse>(parameters);
      }
    }


    /**
     * youtubeAnalytics.groups.update
     * @desc Modifies a group. For example, you could change a group's title.
     * @alias youtubeAnalytics.groups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {().Group} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: Params$Resource$Groups$Update, options?: MethodOptions):
        AxiosPromise<Schema$Group>;
    update(
        params: Params$Resource$Groups$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback: BodyResponseCallback<Schema$Group>): void;
    update(
        params: Params$Resource$Groups$Update,
        callback: BodyResponseCallback<Schema$Group>): void;
    update(callback: BodyResponseCallback<Schema$Group>): void;
    update(
        paramsOrCallback?: Params$Resource$Groups$Update|
        BodyResponseCallback<Schema$Group>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback?: BodyResponseCallback<Schema$Group>):
        void|AxiosPromise<Schema$Group> {
      let params = (paramsOrCallback || {}) as Params$Resource$Groups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Groups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/groups')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }
  }

  export interface Params$Resource$Groups$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id parameter specifies the YouTube group ID for the group that is
     * being deleted.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Groups$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Groups$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of the YouTube group
     * ID(s) for the resource(s) that are being retrieved. In a group resource,
     * the id property specifies the group's YouTube group ID.
     */
    id?: string;
    /**
     * Set this parameter's value to true to instruct the API to only return
     * groups owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that
     * should be returned. In an API response, the nextPageToken property
     * identifies the next page that can be retrieved.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Groups$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content
     * partners.  The onBehalfOfContentOwner parameter indicates that the
     * request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     * This parameter is intended for YouTube content partners that own and
     * manage many different YouTube channels. It allows content owners to
     * authenticate once and get access to all their video and channel data,
     * without having to provide authentication credentials for each individual
     * channel. The CMS account that the user authenticates with must be linked
     * to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }


  export class Resource$Reports {
    root: Youtubeanalytics;
    constructor(root: Youtubeanalytics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * youtubeAnalytics.reports.query
     * @desc Retrieve your YouTube Analytics reports.
     * @alias youtubeAnalytics.reports.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.currency The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.
     * @param {string=} params.dimensions A comma-separated list of YouTube Analytics dimensions, such as views or ageGroup,gender. See the Available Reports document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the Dimensions document for definitions of those dimensions.
     * @param {string} params.end-date The end date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
     * @param {string=} params.filters A list of filters that should be applied when retrieving YouTube Analytics data. The Available Reports document identifies the dimensions that can be used to filter each report, and the Dimensions document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (;), and the returned result table will satisfy both filters. For example, a filters parameter value of video==dMH0bHeiRNg;country==IT restricts the result set to include data for the given video in Italy.
     * @param {string} params.ids Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the ids parameter value to channel==CHANNEL_ID, where CHANNEL_ID specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the ids parameter value to contentOwner==OWNER_NAME, where OWNER_NAME is the CMS name of the content owner.
     * @param {boolean=} params.include-historical-channel-data If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.
     * @param {integer=} params.max-results The maximum number of rows to include in the response.
     * @param {string} params.metrics A comma-separated list of YouTube Analytics metrics, such as views or likes,dislikes. See the Available Reports document for a list of the reports that you can retrieve and the metrics available in each report, and see the Metrics document for definitions of those metrics.
     * @param {string=} params.sort A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '-' prefix causes descending sort order.
     * @param {string} params.start-date The start date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
     * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(params?: Params$Resource$Reports$Query, options?: MethodOptions):
        AxiosPromise<Schema$ResultTable>;
    query(
        params: Params$Resource$Reports$Query,
        options: MethodOptions|BodyResponseCallback<Schema$ResultTable>,
        callback: BodyResponseCallback<Schema$ResultTable>): void;
    query(
        params: Params$Resource$Reports$Query,
        callback: BodyResponseCallback<Schema$ResultTable>): void;
    query(callback: BodyResponseCallback<Schema$ResultTable>): void;
    query(
        paramsOrCallback?: Params$Resource$Reports$Query|
        BodyResponseCallback<Schema$ResultTable>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ResultTable>,
        callback?: BodyResponseCallback<Schema$ResultTable>):
        void|AxiosPromise<Schema$ResultTable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/youtube/analytics/v1beta1/reports')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ResultTable>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResultTable>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Query {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The currency to which financial metrics should be converted. The default
     * is US Dollar (USD). If the result contains no financial metrics, this
     * flag will be ignored. Responds with an error if the specified currency is
     * not recognized.
     */
    currency?: string;
    /**
     * A comma-separated list of YouTube Analytics dimensions, such as views or
     * ageGroup,gender. See the Available Reports document for a list of the
     * reports that you can retrieve and the dimensions used for those reports.
     * Also see the Dimensions document for definitions of those dimensions.
     */
    dimensions?: string;
    /**
     * The end date for fetching YouTube Analytics data. The value should be in
     * YYYY-MM-DD format.
     */
    'end-date'?: string;
    /**
     * A list of filters that should be applied when retrieving YouTube
     * Analytics data. The Available Reports document identifies the dimensions
     * that can be used to filter each report, and the Dimensions document
     * defines those dimensions. If a request uses multiple filters, join them
     * together with a semicolon (;), and the returned result table will satisfy
     * both filters. For example, a filters parameter value of
     * video==dMH0bHeiRNg;country==IT restricts the result set to include data
     * for the given video in Italy.
     */
    filters?: string;
    /**
     * Identifies the YouTube channel or content owner for which you are
     * retrieving YouTube Analytics data. - To request data for a YouTube user,
     * set the ids parameter value to channel==CHANNEL_ID, where CHANNEL_ID
     * specifies the unique YouTube channel ID. - To request data for a YouTube
     * CMS content owner, set the ids parameter value to
     * contentOwner==OWNER_NAME, where OWNER_NAME is the CMS name of the content
     * owner.
     */
    ids?: string;
    /**
     * If set to true historical data (i.e. channel data from before the linking
     * of the channel to the content owner) will be retrieved.
     */
    'include-historical-channel-data'?: boolean;
    /**
     * The maximum number of rows to include in the response.
     */
    'max-results'?: number;
    /**
     * A comma-separated list of YouTube Analytics metrics, such as views or
     * likes,dislikes. See the Available Reports document for a list of the
     * reports that you can retrieve and the metrics available in each report,
     * and see the Metrics document for definitions of those metrics.
     */
    metrics?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort
     * order for YouTube Analytics data. By default the sort order is ascending.
     * The '-' prefix causes descending sort order.
     */
    sort?: string;
    /**
     * The start date for fetching YouTube Analytics data. The value should be
     * in YYYY-MM-DD format.
     */
    'start-date'?: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a
     * pagination mechanism along with the max-results parameter (one-based,
     * inclusive).
     */
    'start-index'?: number;
  }
}
