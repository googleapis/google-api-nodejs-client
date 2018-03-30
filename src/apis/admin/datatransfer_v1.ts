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
 * Admin Data Transfer API
 *
 * Transfers user data from one user to another.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('datatransfer_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version datatransfer_v1
 * @variation datatransfer_v1
 * @param {object=} options Options for Admin
 */
export class Admin {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  applications: Resource$Applications;
  transfers: Resource$Transfers;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.applications = new Resource$Applications(this);
    this.transfers = new Resource$Transfers(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * The JSON template for an Application resource.
 */
export interface Schema$Application {
  /**
   * Etag of the resource.
   */
  etag: string;
  /**
   * The application&#39;s ID.
   */
  id: string;
  /**
   * Identifies the resource as a DataTransfer Application Resource.
   */
  kind: string;
  /**
   * The application&#39;s name.
   */
  name: string;
  /**
   * The list of all possible transfer parameters for this application. These
   * parameters can be used to select the data of the user in this application
   * to be transfered.
   */
  transferParams: Schema$ApplicationTransferParam[];
}
/**
 * Template to map fields of ApplicationDataTransfer resource.
 */
export interface Schema$ApplicationDataTransfer {
  /**
   * The application&#39;s ID.
   */
  applicationId: string;
  /**
   * The transfer parameters for the application. These parameters are used to
   * select the data which will get transfered in context of this application.
   */
  applicationTransferParams: Schema$ApplicationTransferParam[];
  /**
   * Current status of transfer for this application. (Read-only)
   */
  applicationTransferStatus: string;
}
/**
 * Template for a collection of Applications.
 */
export interface Schema$ApplicationsListResponse {
  /**
   * List of applications that support data transfer and are also installed for
   * the customer.
   */
  applications: Schema$Application[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Identifies the resource as a collection of Applications.
   */
  kind: string;
  /**
   * Continuation token which will be used to specify next page in list API.
   */
  nextPageToken: string;
}
/**
 * Template for application transfer parameters.
 */
export interface Schema$ApplicationTransferParam {
  /**
   * The type of the transfer parameter. eg: &#39;PRIVACY_LEVEL&#39;
   */
  key: string;
  /**
   * The value of the coressponding transfer parameter. eg: &#39;PRIVATE&#39; or
   * &#39;SHARED&#39;
   */
  value: string[];
}
/**
 * The JSON template for a DataTransfer resource.
 */
export interface Schema$DataTransfer {
  /**
   * List of per application data transfer resources. It contains data transfer
   * details of the applications associated with this transfer resource. Note
   * that this list is also used to specify the applications for which data
   * transfer has to be done at the time of the transfer resource creation.
   */
  applicationDataTransfers: Schema$ApplicationDataTransfer[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The transfer&#39;s ID (Read-only).
   */
  id: string;
  /**
   * Identifies the resource as a DataTransfer request.
   */
  kind: string;
  /**
   * ID of the user to whom the data is being transfered.
   */
  newOwnerUserId: string;
  /**
   * ID of the user whose data is being transfered.
   */
  oldOwnerUserId: string;
  /**
   * Overall transfer status (Read-only).
   */
  overallTransferStatusCode: string;
  /**
   * The time at which the data transfer was requested (Read-only).
   */
  requestTime: string;
}
/**
 * Template for a collection of DataTransfer resources.
 */
export interface Schema$DataTransfersListResponse {
  /**
   * List of data transfer requests.
   */
  dataTransfers: Schema$DataTransfer[];
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Identifies the resource as a collection of data transfer requests.
   */
  kind: string;
  /**
   * Continuation token which will be used to specify next page in list API.
   */
  nextPageToken: string;
}

export class Resource$Applications {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * datatransfer.applications.get
   * @desc Retrieves information about an application for the given application
   * ID.
   * @alias datatransfer.applications.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.applicationId ID of the application resource to be retrieved.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Application>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Application>,
      callback?: BodyResponseCallback<Schema$Application>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Application>,
      callback?: BodyResponseCallback<Schema$Application>):
      void|AxiosPromise<Schema$Application> {
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
            url: (rootUrl +
                  '/admin/datatransfer/v1/applications/{applicationId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['applicationId'],
      pathParams: ['applicationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Application>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Application>(parameters);
    }
  }


  /**
   * datatransfer.applications.list
   * @desc Lists the applications available for data transfer for a customer.
   * @alias datatransfer.applications.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.customerId Immutable ID of the Google Apps account.
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 100.
   * @param {string=} params.pageToken Token to specify next page in the list.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ApplicationsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ApplicationsListResponse>,
      callback?: BodyResponseCallback<Schema$ApplicationsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ApplicationsListResponse>,
      callback?: BodyResponseCallback<Schema$ApplicationsListResponse>):
      void|AxiosPromise<Schema$ApplicationsListResponse> {
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
            url: (rootUrl + '/admin/datatransfer/v1/applications')
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
      createAPIRequest<Schema$ApplicationsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ApplicationsListResponse>(parameters);
    }
  }
}

export class Resource$Transfers {
  root: Admin;
  constructor(root: Admin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * datatransfer.transfers.get
   * @desc Retrieves a data transfer request by its resource ID.
   * @alias datatransfer.transfers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.dataTransferId ID of the resource to be retrieved. This is returned in the response from the insert method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$DataTransfer>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataTransfer>,
      callback?: BodyResponseCallback<Schema$DataTransfer>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataTransfer>,
      callback?: BodyResponseCallback<Schema$DataTransfer>):
      void|AxiosPromise<Schema$DataTransfer> {
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
            url: (rootUrl + '/admin/datatransfer/v1/transfers/{dataTransferId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['dataTransferId'],
      pathParams: ['dataTransferId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DataTransfer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DataTransfer>(parameters);
    }
  }


  /**
   * datatransfer.transfers.insert
   * @desc Inserts a data transfer request.
   * @alias datatransfer.transfers.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().DataTransfer} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DataTransfer>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataTransfer>,
      callback?: BodyResponseCallback<Schema$DataTransfer>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataTransfer>,
      callback?: BodyResponseCallback<Schema$DataTransfer>):
      void|AxiosPromise<Schema$DataTransfer> {
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
            url: (rootUrl + '/admin/datatransfer/v1/transfers')
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
      createAPIRequest<Schema$DataTransfer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DataTransfer>(parameters);
    }
  }


  /**
   * datatransfer.transfers.list
   * @desc Lists the transfers for a customer by source user, destination user,
   * or status.
   * @alias datatransfer.transfers.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.customerId Immutable ID of the Google Apps account.
   * @param {integer=} params.maxResults Maximum number of results to return. Default is 100.
   * @param {string=} params.newOwnerUserId Destination user's profile ID.
   * @param {string=} params.oldOwnerUserId Source user's profile ID.
   * @param {string=} params.pageToken Token to specify the next page in the list.
   * @param {string=} params.status Status of the transfer.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DataTransfersListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DataTransfersListResponse>,
      callback?: BodyResponseCallback<Schema$DataTransfersListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DataTransfersListResponse>,
      callback?: BodyResponseCallback<Schema$DataTransfersListResponse>):
      void|AxiosPromise<Schema$DataTransfersListResponse> {
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
            url: (rootUrl + '/admin/datatransfer/v1/transfers')
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
      createAPIRequest<Schema$DataTransfersListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DataTransfersListResponse>(parameters);
    }
  }
}
