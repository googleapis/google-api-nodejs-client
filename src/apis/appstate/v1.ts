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
 * Google App State API
 *
 * The Google App State API.
 *
 * @example
 * const google = require('googleapis');
 * const appstate = google.appstate('v1');
 *
 * @namespace appstate
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Appstate
 */
export class Appstate {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  states: Resource$States;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.states = new Resource$States(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * This is a JSON template for an app state resource.
 */
export interface Schema$GetResponse {
  /**
   * The current app state version.
   */
  currentStateVersion: string;
  /**
   * The requested data.
   */
  data: string;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string appstate#getResponse.
   */
  kind: string;
  /**
   * The key for the data.
   */
  stateKey: number;
}
/**
 * This is a JSON template to convert a list-response for app state.
 */
export interface Schema$ListResponse {
  /**
   * The app state data.
   */
  items: Schema$GetResponse[];
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string appstate#listResponse.
   */
  kind: string;
  /**
   * The maximum number of keys allowed for this user.
   */
  maximumKeyCount: number;
}
/**
 * This is a JSON template for a requests which update app state
 */
export interface Schema$UpdateRequest {
  /**
   * The new app state data that your application is trying to update with.
   */
  data: string;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string appstate#updateRequest.
   */
  kind: string;
}
/**
 * This is a JSON template for an app state write result.
 */
export interface Schema$WriteResult {
  /**
   * The version of the data for this key on the server.
   */
  currentStateVersion: string;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string appstate#writeResult.
   */
  kind: string;
  /**
   * The written key.
   */
  stateKey: number;
}

export class Resource$States {
  root: Appstate;
  constructor(root: Appstate) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * appstate.states.clear
   * @desc Clears (sets to empty) the data for the passed key if and only if the
   * passed version matches the currently stored version. This method results in
   * a conflict error on version mismatch.
   * @alias appstate.states.clear
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.currentDataVersion The version of the data to be cleared. Version strings are returned by the server.
   * @param {integer} params.stateKey The key for the data to be retrieved.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  clear(params: any, options?: MethodOptions): AxiosPromise<Schema$WriteResult>;
  clear(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$WriteResult>,
      callback?: BodyResponseCallback<Schema$WriteResult>): void;
  clear(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WriteResult>,
      callback?: BodyResponseCallback<Schema$WriteResult>):
      void|AxiosPromise<Schema$WriteResult> {
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
            url: (rootUrl + '/appstate/v1/states/{stateKey}/clear')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['stateKey'],
      pathParams: ['stateKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WriteResult>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WriteResult>(parameters);
    }
  }


  /**
   * appstate.states.delete
   * @desc Deletes a key and the data associated with it. The key is removed and
   * no longer counts against the key quota. Note that since this method is not
   * safe in the face of concurrent modifications, it should only be used for
   * development and testing purposes. Invoking this method in shipping code can
   * result in data loss and data corruption.
   * @alias appstate.states.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.stateKey The key for the data to be retrieved.
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
            url: (rootUrl + '/appstate/v1/states/{stateKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['stateKey'],
      pathParams: ['stateKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * appstate.states.get
   * @desc Retrieves the data corresponding to the passed key. If the key does
   * not exist on the server, an HTTP 404 will be returned.
   * @alias appstate.states.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.stateKey The key for the data to be retrieved.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$GetResponse>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$GetResponse>,
      callback?: BodyResponseCallback<Schema$GetResponse>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GetResponse>,
      callback?: BodyResponseCallback<Schema$GetResponse>):
      void|AxiosPromise<Schema$GetResponse> {
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
            url: (rootUrl + '/appstate/v1/states/{stateKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['stateKey'],
      pathParams: ['stateKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetResponse>(parameters);
    }
  }


  /**
   * appstate.states.list
   * @desc Lists all the states keys, and optionally the state data.
   * @alias appstate.states.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {boolean=} params.includeData Whether to include the full data in addition to the version number
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$ListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListResponse>,
      callback?: BodyResponseCallback<Schema$ListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListResponse>,
      callback?: BodyResponseCallback<Schema$ListResponse>):
      void|AxiosPromise<Schema$ListResponse> {
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
                (rootUrl + '/appstate/v1/states').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListResponse>(parameters);
    }
  }


  /**
   * appstate.states.update
   * @desc Update the data associated with the input key if and only if the
   * passed version matches the currently stored version. This method is safe in
   * the face of concurrent writes. Maximum per-key size is 128KB.
   * @alias appstate.states.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.currentStateVersion The version of the app state your application is attempting to update. If this does not match the current version, this method will return a conflict error. If there is no data stored on the server for this key, the update will succeed irrespective of the value of this parameter.
   * @param {integer} params.stateKey The key for the data to be retrieved.
   * @param {().UpdateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$WriteResult>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$WriteResult>,
      callback?: BodyResponseCallback<Schema$WriteResult>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WriteResult>,
      callback?: BodyResponseCallback<Schema$WriteResult>):
      void|AxiosPromise<Schema$WriteResult> {
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
            url: (rootUrl + '/appstate/v1/states/{stateKey}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['stateKey'],
      pathParams: ['stateKey'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WriteResult>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WriteResult>(parameters);
    }
  }
}
