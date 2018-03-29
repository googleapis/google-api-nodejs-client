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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Resource Views API
 *
 * The Resource View API allows users to create and manage logical sets of
 * Google Compute Engine instances.
 *
 * @example
 * const google = require('googleapis');
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
  google: GoogleApis;
  root = this;

  regionViews: Resource$Regionviews;
  zoneViews: Resource$Zoneviews;

  constructor(options: GlobalOptions, google: GoogleApis) {
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
  key: string;
  /**
   * Value of the label.
   */
  value: string;
}
/**
 * The request to add resources to the resource view.
 */
export interface Schema$RegionViewsAddResourcesRequest {
  /**
   * The list of resources to be added.
   */
  resources: string[];
}
/**
 * The response to a resource view insert request.
 */
export interface Schema$RegionViewsInsertResponse {
  /**
   * The resource view object inserted.
   */
  resource: Schema$ResourceView;
}
/**
 * The response to the list resource request.
 */
export interface Schema$RegionViewsListResourcesResponse {
  /**
   * The resources in the view.
   */
  members: string[];
  /**
   * A token used for pagination.
   */
  nextPageToken: string;
}
/**
 * The response to the list resource view request.
 */
export interface Schema$RegionViewsListResponse {
  /**
   * A token used for pagination.
   */
  nextPageToken: string;
  /**
   * The list of resource views that meet the criteria.
   */
  resourceViews: Schema$ResourceView[];
}
/**
 * The request to remove resources from the resource view.
 */
export interface Schema$RegionViewsRemoveResourcesRequest {
  /**
   * The list of resources to be removed.
   */
  resources: string[];
}
/**
 * The resource view object.
 */
export interface Schema$ResourceView {
  /**
   * The creation time of the resource view.
   */
  creationTime: string;
  /**
   * The detailed description of the resource view.
   */
  description: string;
  /**
   * [Output Only] The ID of the resource view.
   */
  id: string;
  /**
   * Type of the resource.
   */
  kind: string;
  /**
   * The labels for events.
   */
  labels: Schema$Label[];
  /**
   * The last modified time of the view. Not supported yet.
   */
  lastModified: string;
  /**
   * A list of all resources in the resource view.
   */
  members: string[];
  /**
   * The name of the resource view.
   */
  name: string;
  /**
   * The total number of resources in the resource view.
   */
  numMembers: number;
  /**
   * [Output Only] A self-link to the resource view.
   */
  selfLink: string;
}
/**
 * The request to add resources to the resource view.
 */
export interface Schema$ZoneViewsAddResourcesRequest {
  /**
   * The list of resources to be added.
   */
  resources: string[];
}
/**
 * The response to an insert request.
 */
export interface Schema$ZoneViewsInsertResponse {
  /**
   * The resource view object that has been inserted.
   */
  resource: Schema$ResourceView;
}
/**
 * The response to a list resource request.
 */
export interface Schema$ZoneViewsListResourcesResponse {
  /**
   * The full URL of resources in the view.
   */
  members: string[];
  /**
   * A token used for pagination.
   */
  nextPageToken: string;
}
/**
 * The response to a list request.
 */
export interface Schema$ZoneViewsListResponse {
  /**
   * A token used for pagination.
   */
  nextPageToken: string;
  /**
   * The result that contains all resource views that meet the criteria.
   */
  resourceViews: Schema$ResourceView[];
}
/**
 * The request to remove resources from the resource view.
 */
export interface Schema$ZoneViewsRemoveResourcesRequest {
  /**
   * The list of resources to be removed.
   */
  resources: string[];
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
  addresources(params: any, options?: MethodOptions): AxiosPromise<void>;
  addresources(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  addresources(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$ResourceView>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ResourceView>,
      callback?: BodyResponseCallback<Schema$ResourceView>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ResourceView>,
      callback?: BodyResponseCallback<Schema$ResourceView>):
      void|AxiosPromise<Schema$ResourceView> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$RegionViewsInsertResponse>;
  insert(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$RegionViewsInsertResponse>,
      callback?: BodyResponseCallback<Schema$RegionViewsInsertResponse>): void;
  insert(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RegionViewsInsertResponse>,
      callback?: BodyResponseCallback<Schema$RegionViewsInsertResponse>):
      void|AxiosPromise<Schema$RegionViewsInsertResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
      createAPIRequest<Schema$RegionViewsInsertResponse>(parameters, callback);
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$RegionViewsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$RegionViewsListResponse>,
      callback?: BodyResponseCallback<Schema$RegionViewsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RegionViewsListResponse>,
      callback?: BodyResponseCallback<Schema$RegionViewsListResponse>):
      void|AxiosPromise<Schema$RegionViewsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  listresources(params: any, options?: MethodOptions):
      AxiosPromise<Schema$RegionViewsListResourcesResponse>;
  listresources(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$RegionViewsListResourcesResponse>,
      callback?: BodyResponseCallback<Schema$RegionViewsListResourcesResponse>):
      void;
  listresources(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$RegionViewsListResourcesResponse>,
      callback?: BodyResponseCallback<Schema$RegionViewsListResourcesResponse>):
      void|AxiosPromise<Schema$RegionViewsListResourcesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  removeresources(params: any, options?: MethodOptions): AxiosPromise<void>;
  removeresources(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  removeresources(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  addresources(params: any, options?: MethodOptions): AxiosPromise<void>;
  addresources(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  addresources(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$ResourceView>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ResourceView>,
      callback?: BodyResponseCallback<Schema$ResourceView>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ResourceView>,
      callback?: BodyResponseCallback<Schema$ResourceView>):
      void|AxiosPromise<Schema$ResourceView> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ZoneViewsInsertResponse>;
  insert(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ZoneViewsInsertResponse>,
      callback?: BodyResponseCallback<Schema$ZoneViewsInsertResponse>): void;
  insert(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ZoneViewsInsertResponse>,
      callback?: BodyResponseCallback<Schema$ZoneViewsInsertResponse>):
      void|AxiosPromise<Schema$ZoneViewsInsertResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ZoneViewsListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ZoneViewsListResponse>,
      callback?: BodyResponseCallback<Schema$ZoneViewsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ZoneViewsListResponse>,
      callback?: BodyResponseCallback<Schema$ZoneViewsListResponse>):
      void|AxiosPromise<Schema$ZoneViewsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  listresources(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ZoneViewsListResourcesResponse>;
  listresources(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>,
      callback?: BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>):
      void;
  listresources(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>,
      callback?: BodyResponseCallback<Schema$ZoneViewsListResourcesResponse>):
      void|AxiosPromise<Schema$ZoneViewsListResourcesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
  removeresources(params: any, options?: MethodOptions): AxiosPromise<void>;
  removeresources(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  removeresources(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
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
