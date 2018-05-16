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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace resourceviews_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  /**
   * Resource Views API
   *
   * The Resource View API allows users to create and manage logical sets of
   * Google Compute Engine instances.
   *
   * @example
   * const {google} = require('googleapis');
   * const resourceviews = google.resourceviews('v1beta1');
   *
   * @namespace resourceviews
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Resourceviews
   */
  export class Resourceviews {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    regionViews: Resource$Regionviews;
    zoneViews: Resource$Zoneviews;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.regionViews = new Resource$Regionviews(this);
      this.zoneViews = new Resource$Zoneviews(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * The Label to be applied to the resource views.
   */
  export interface Schema$Label {
    /**
     * Key of the label.
     */
    key?: string;
    /**
     * Value of the label.
     */
    value?: string;
  }
  /**
   * The request to add resources to the resource view.
   */
  export interface Schema$RegionViewsAddResourcesRequest {
    /**
     * The list of resources to be added.
     */
    resources?: string[];
  }
  /**
   * The response to a resource view insert request.
   */
  export interface Schema$RegionViewsInsertResponse {
    /**
     * The resource view object inserted.
     */
    resource?: Schema$ResourceView;
  }
  /**
   * The response to the list resource request.
   */
  export interface Schema$RegionViewsListResourcesResponse {
    /**
     * The resources in the view.
     */
    members?: string[];
    /**
     * A token used for pagination.
     */
    nextPageToken?: string;
  }
  /**
   * The response to the list resource view request.
   */
  export interface Schema$RegionViewsListResponse {
    /**
     * A token used for pagination.
     */
    nextPageToken?: string;
    /**
     * The list of resource views that meet the criteria.
     */
    resourceViews?: Schema$ResourceView[];
  }
  /**
   * The request to remove resources from the resource view.
   */
  export interface Schema$RegionViewsRemoveResourcesRequest {
    /**
     * The list of resources to be removed.
     */
    resources?: string[];
  }
  /**
   * The resource view object.
   */
  export interface Schema$ResourceView {
    /**
     * The creation time of the resource view.
     */
    creationTime?: string;
    /**
     * The detailed description of the resource view.
     */
    description?: string;
    /**
     * [Output Only] The ID of the resource view.
     */
    id?: string;
    /**
     * Type of the resource.
     */
    kind?: string;
    /**
     * The labels for events.
     */
    labels?: Schema$Label[];
    /**
     * The last modified time of the view. Not supported yet.
     */
    lastModified?: string;
    /**
     * A list of all resources in the resource view.
     */
    members?: string[];
    /**
     * The name of the resource view.
     */
    name?: string;
    /**
     * The total number of resources in the resource view.
     */
    numMembers?: number;
    /**
     * [Output Only] A self-link to the resource view.
     */
    selfLink?: string;
  }
  /**
   * The request to add resources to the resource view.
   */
  export interface Schema$ZoneViewsAddResourcesRequest {
    /**
     * The list of resources to be added.
     */
    resources?: string[];
  }
  /**
   * The response to an insert request.
   */
  export interface Schema$ZoneViewsInsertResponse {
    /**
     * The resource view object that has been inserted.
     */
    resource?: Schema$ResourceView;
  }
  /**
   * The response to a list resource request.
   */
  export interface Schema$ZoneViewsListResourcesResponse {
    /**
     * The full URL of resources in the view.
     */
    members?: string[];
    /**
     * A token used for pagination.
     */
    nextPageToken?: string;
  }
  /**
   * The response to a list request.
   */
  export interface Schema$ZoneViewsListResponse {
    /**
     * A token used for pagination.
     */
    nextPageToken?: string;
    /**
     * The result that contains all resource views that meet the criteria.
     */
    resourceViews?: Schema$ResourceView[];
  }
  /**
   * The request to remove resources from the resource view.
   */
  export interface Schema$ZoneViewsRemoveResourcesRequest {
    /**
     * The list of resources to be removed.
     */
    resources?: string[];
  }


  export class Resource$Regionviews {
    root: Resourceviews;
    constructor(root: Resourceviews) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * resourceviews.regionViews.addresources
     * @desc Add resources to the view.
     * @alias resourceviews.regionViews.addresources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {().RegionViewsAddResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addresources(
        params?: Params$Resource$Regionviews$Addresources,
        options?: MethodOptions): AxiosPromise<void>;
    addresources(
        params: Params$Resource$Regionviews$Addresources,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    addresources(
        params: Params$Resource$Regionviews$Addresources,
        callback: BodyResponseCallback<void>): void;
    addresources(callback: BodyResponseCallback<void>): void;
    addresources(
        paramsOrCallback?: Params$Resource$Regionviews$Addresources|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Regionviews$Addresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$Addresources;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/addResources')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * resourceviews.regionViews.delete
     * @desc Delete a resource view.
     * @alias resourceviews.regionViews.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Regionviews$Delete,
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Regionviews$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Regionviews$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Regionviews$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Regionviews$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$Delete;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * resourceviews.regionViews.get
     * @desc Get the information of a resource view.
     * @alias resourceviews.regionViews.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Regionviews$Get,
        options?: MethodOptions): AxiosPromise<Schema$ResourceView>;
    get(params: Params$Resource$Regionviews$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ResourceView>,
        callback: BodyResponseCallback<Schema$ResourceView>): void;
    get(params: Params$Resource$Regionviews$Get,
        callback: BodyResponseCallback<Schema$ResourceView>): void;
    get(callback: BodyResponseCallback<Schema$ResourceView>): void;
    get(paramsOrCallback?: Params$Resource$Regionviews$Get|
        BodyResponseCallback<Schema$ResourceView>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ResourceView>,
        callback?: BodyResponseCallback<Schema$ResourceView>):
        void|AxiosPromise<Schema$ResourceView> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regionviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$Get;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ResourceView>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResourceView>(parameters);
      }
    }


    /**
     * resourceviews.regionViews.insert
     * @desc Create a resource view.
     * @alias resourceviews.regionViews.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {().ResourceView} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Regionviews$Insert, options?: MethodOptions):
        AxiosPromise<Schema$RegionViewsInsertResponse>;
    insert(
        params: Params$Resource$Regionviews$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$RegionViewsInsertResponse>,
        callback: BodyResponseCallback<Schema$RegionViewsInsertResponse>): void;
    insert(
        params: Params$Resource$Regionviews$Insert,
        callback: BodyResponseCallback<Schema$RegionViewsInsertResponse>): void;
    insert(callback: BodyResponseCallback<Schema$RegionViewsInsertResponse>):
        void;
    insert(
        paramsOrCallback?: Params$Resource$Regionviews$Insert|
        BodyResponseCallback<Schema$RegionViewsInsertResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RegionViewsInsertResponse>,
        callback?: BodyResponseCallback<Schema$RegionViewsInsertResponse>):
        void|AxiosPromise<Schema$RegionViewsInsertResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Regionviews$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$Insert;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'region'],
        pathParams: ['projectName', 'region'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RegionViewsInsertResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$RegionViewsInsertResponse>(parameters);
      }
    }


    /**
     * resourceviews.regionViews.list
     * @desc List resource views.
     * @alias resourceviews.regionViews.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param {string=} params.pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Regionviews$List, options?: MethodOptions):
        AxiosPromise<Schema$RegionViewsListResponse>;
    list(
        params: Params$Resource$Regionviews$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$RegionViewsListResponse>,
        callback: BodyResponseCallback<Schema$RegionViewsListResponse>): void;
    list(
        params: Params$Resource$Regionviews$List,
        callback: BodyResponseCallback<Schema$RegionViewsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$RegionViewsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Regionviews$List|
        BodyResponseCallback<Schema$RegionViewsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RegionViewsListResponse>,
        callback?: BodyResponseCallback<Schema$RegionViewsListResponse>):
        void|AxiosPromise<Schema$RegionViewsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regionviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$List;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectName', 'region'],
        pathParams: ['projectName', 'region'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RegionViewsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RegionViewsListResponse>(parameters);
      }
    }


    /**
     * resourceviews.regionViews.listresources
     * @desc List the resources in the view.
     * @alias resourceviews.regionViews.listresources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param {string=} params.pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listresources(
        params?: Params$Resource$Regionviews$Listresources,
        options?: MethodOptions):
        AxiosPromise<Schema$RegionViewsListResourcesResponse>;
    listresources(
        params: Params$Resource$Regionviews$Listresources,
        options: MethodOptions|
        BodyResponseCallback<Schema$RegionViewsListResourcesResponse>,
        callback:
            BodyResponseCallback<Schema$RegionViewsListResourcesResponse>):
        void;
    listresources(
        params: Params$Resource$Regionviews$Listresources,
        callback:
            BodyResponseCallback<Schema$RegionViewsListResourcesResponse>):
        void;
    listresources(
        callback:
            BodyResponseCallback<Schema$RegionViewsListResourcesResponse>):
        void;
    listresources(
        paramsOrCallback?: Params$Resource$Regionviews$Listresources|
        BodyResponseCallback<Schema$RegionViewsListResourcesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RegionViewsListResourcesResponse>,
        callback?:
            BodyResponseCallback<Schema$RegionViewsListResourcesResponse>):
        void|AxiosPromise<Schema$RegionViewsListResourcesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Regionviews$Listresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$Listresources;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/resources')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RegionViewsListResourcesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$RegionViewsListResourcesResponse>(
            parameters);
      }
    }


    /**
     * resourceviews.regionViews.removeresources
     * @desc Remove resources from the view.
     * @alias resourceviews.regionViews.removeresources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.region The region name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {().RegionViewsRemoveResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeresources(
        params?: Params$Resource$Regionviews$Removeresources,
        options?: MethodOptions): AxiosPromise<void>;
    removeresources(
        params: Params$Resource$Regionviews$Removeresources,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    removeresources(
        params: Params$Resource$Regionviews$Removeresources,
        callback: BodyResponseCallback<void>): void;
    removeresources(callback: BodyResponseCallback<void>): void;
    removeresources(
        paramsOrCallback?: Params$Resource$Regionviews$Removeresources|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Regionviews$Removeresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionviews$Removeresources;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/removeResources')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Regionviews$Addresources {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegionViewsAddResourcesRequest;
  }
  export interface Params$Resource$Regionviews$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
  }
  export interface Params$Resource$Regionviews$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
  }
  export interface Params$Resource$Regionviews$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResourceView;
  }
  export interface Params$Resource$Regionviews$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 5000,
     * inclusive. (Default: 5000)
     */
    maxResults?: number;
    /**
     * Specifies a nextPageToken returned by a previous list request. This token
     * can be used to request the next page of results from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;
  }
  export interface Params$Resource$Regionviews$Listresources {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 5000,
     * inclusive. (Default: 5000)
     */
    maxResults?: number;
    /**
     * Specifies a nextPageToken returned by a previous list request. This token
     * can be used to request the next page of results from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
  }
  export interface Params$Resource$Regionviews$Removeresources {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The region name of the resource view.
     */
    region?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegionViewsRemoveResourcesRequest;
  }


  export class Resource$Zoneviews {
    root: Resourceviews;
    constructor(root: Resourceviews) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * resourceviews.zoneViews.addresources
     * @desc Add resources to the view.
     * @alias resourceviews.zoneViews.addresources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {().ZoneViewsAddResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addresources(
        params?: Params$Resource$Zoneviews$Addresources,
        options?: MethodOptions): AxiosPromise<void>;
    addresources(
        params: Params$Resource$Zoneviews$Addresources,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    addresources(
        params: Params$Resource$Zoneviews$Addresources,
        callback: BodyResponseCallback<void>): void;
    addresources(callback: BodyResponseCallback<void>): void;
    addresources(
        paramsOrCallback?: Params$Resource$Zoneviews$Addresources|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Zoneviews$Addresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$Addresources;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/addResources')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * resourceviews.zoneViews.delete
     * @desc Delete a resource view.
     * @alias resourceviews.zoneViews.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Zoneviews$Delete, options?: MethodOptions):
        AxiosPromise<void>;
    delete(
        params: Params$Resource$Zoneviews$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Zoneviews$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Zoneviews$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Zoneviews$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$Delete;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * resourceviews.zoneViews.get
     * @desc Get the information of a zonal resource view.
     * @alias resourceviews.zoneViews.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Zoneviews$Get,
        options?: MethodOptions): AxiosPromise<Schema$ResourceView>;
    get(params: Params$Resource$Zoneviews$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ResourceView>,
        callback: BodyResponseCallback<Schema$ResourceView>): void;
    get(params: Params$Resource$Zoneviews$Get,
        callback: BodyResponseCallback<Schema$ResourceView>): void;
    get(callback: BodyResponseCallback<Schema$ResourceView>): void;
    get(paramsOrCallback?: Params$Resource$Zoneviews$Get|
        BodyResponseCallback<Schema$ResourceView>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ResourceView>,
        callback?: BodyResponseCallback<Schema$ResourceView>):
        void|AxiosPromise<Schema$ResourceView> {
      let params = (paramsOrCallback || {}) as Params$Resource$Zoneviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$Get;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ResourceView>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResourceView>(parameters);
      }
    }


    /**
     * resourceviews.zoneViews.insert
     * @desc Create a resource view.
     * @alias resourceviews.zoneViews.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {().ResourceView} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: Params$Resource$Zoneviews$Insert, options?: MethodOptions):
        AxiosPromise<Schema$ZoneViewsInsertResponse>;
    insert(
        params: Params$Resource$Zoneviews$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$ZoneViewsInsertResponse>,
        callback: BodyResponseCallback<Schema$ZoneViewsInsertResponse>): void;
    insert(
        params: Params$Resource$Zoneviews$Insert,
        callback: BodyResponseCallback<Schema$ZoneViewsInsertResponse>): void;
    insert(callback: BodyResponseCallback<Schema$ZoneViewsInsertResponse>):
        void;
    insert(
        paramsOrCallback?: Params$Resource$Zoneviews$Insert|
        BodyResponseCallback<Schema$ZoneViewsInsertResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ZoneViewsInsertResponse>,
        callback?: BodyResponseCallback<Schema$ZoneViewsInsertResponse>):
        void|AxiosPromise<Schema$ZoneViewsInsertResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Zoneviews$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$Insert;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone'],
        pathParams: ['projectName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ZoneViewsInsertResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ZoneViewsInsertResponse>(parameters);
      }
    }


    /**
     * resourceviews.zoneViews.list
     * @desc List resource views.
     * @alias resourceviews.zoneViews.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param {string=} params.pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Zoneviews$List, options?: MethodOptions):
        AxiosPromise<Schema$ZoneViewsListResponse>;
    list(
        params: Params$Resource$Zoneviews$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ZoneViewsListResponse>,
        callback: BodyResponseCallback<Schema$ZoneViewsListResponse>): void;
    list(
        params: Params$Resource$Zoneviews$List,
        callback: BodyResponseCallback<Schema$ZoneViewsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$ZoneViewsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Zoneviews$List|
        BodyResponseCallback<Schema$ZoneViewsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ZoneViewsListResponse>,
        callback?: BodyResponseCallback<Schema$ZoneViewsListResponse>):
        void|AxiosPromise<Schema$ZoneViewsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Zoneviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$List;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone'],
        pathParams: ['projectName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ZoneViewsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ZoneViewsListResponse>(parameters);
      }
    }


    /**
     * resourceviews.zoneViews.listresources
     * @desc List the resources of the resource view.
     * @alias resourceviews.zoneViews.listresources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param {string=} params.pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listresources(
        params?: Params$Resource$Zoneviews$Listresources,
        options?: MethodOptions):
        AxiosPromise<Schema$ZoneViewsListResourcesResponse>;
    listresources(
        params: Params$Resource$Zoneviews$Listresources,
        options: MethodOptions|
        BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>,
        callback: BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>):
        void;
    listresources(
        params: Params$Resource$Zoneviews$Listresources,
        callback: BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>):
        void;
    listresources(
        callback: BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>):
        void;
    listresources(
        paramsOrCallback?: Params$Resource$Zoneviews$Listresources|
        BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>,
        callback?: BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>):
        void|AxiosPromise<Schema$ZoneViewsListResourcesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Zoneviews$Listresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$Listresources;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/resources')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ZoneViewsListResourcesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ZoneViewsListResourcesResponse>(
            parameters);
      }
    }


    /**
     * resourceviews.zoneViews.removeresources
     * @desc Remove resources from the view.
     * @alias resourceviews.zoneViews.removeresources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project name of the resource view.
     * @param {string} params.resourceViewName The name of the resource view.
     * @param {string} params.zone The zone name of the resource view.
     * @param {().ZoneViewsRemoveResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeresources(
        params?: Params$Resource$Zoneviews$Removeresources,
        options?: MethodOptions): AxiosPromise<void>;
    removeresources(
        params: Params$Resource$Zoneviews$Removeresources,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    removeresources(
        params: Params$Resource$Zoneviews$Removeresources,
        callback: BodyResponseCallback<void>): void;
    removeresources(callback: BodyResponseCallback<void>): void;
    removeresources(
        paramsOrCallback?: Params$Resource$Zoneviews$Removeresources|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Zoneviews$Removeresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneviews$Removeresources;
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
              url:
                  (rootUrl +
                   '/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/removeResources')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Zoneviews$Addresources {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ZoneViewsAddResourcesRequest;
  }
  export interface Params$Resource$Zoneviews$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;
  }
  export interface Params$Resource$Zoneviews$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;
  }
  export interface Params$Resource$Zoneviews$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResourceView;
  }
  export interface Params$Resource$Zoneviews$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 5000,
     * inclusive. (Default: 5000)
     */
    maxResults?: number;
    /**
     * Specifies a nextPageToken returned by a previous list request. This token
     * can be used to request the next page of results from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;
  }
  export interface Params$Resource$Zoneviews$Listresources {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 5000,
     * inclusive. (Default: 5000)
     */
    maxResults?: number;
    /**
     * Specifies a nextPageToken returned by a previous list request. This token
     * can be used to request the next page of results from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;
  }
  export interface Params$Resource$Zoneviews$Removeresources {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project name of the resource view.
     */
    projectName?: string;
    /**
     * The name of the resource view.
     */
    resourceViewName?: string;
    /**
     * The zone name of the resource view.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ZoneViewsRemoveResourcesRequest;
  }
}
