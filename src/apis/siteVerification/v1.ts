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
 * Google Site Verification API
 *
 * Verifies ownership of websites or domains with Google.
 *
 * @example
 * const google = require('googleapis');
 * const siteVerification = google.siteVerification('v1');
 *
 * @namespace siteVerification
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Siteverification
 */
export class Siteverification {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  webResource: Resource$Webresource;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.webResource = new Resource$Webresource(this);
  }

  getRoot() {
    return this.root;
  }
}

export interface Schema$SiteVerificationWebResourceGettokenRequest {
  /**
   * The site for which a verification token will be generated.
   */
  site: any;
  /**
   * The verification method that will be used to verify this site. For sites,
   * &#39;FILE&#39; or &#39;META&#39; methods may be used. For domains, only
   * &#39;DNS&#39; may be used.
   */
  verificationMethod: string;
}
export interface Schema$SiteVerificationWebResourceGettokenResponse {
  /**
   * The verification method to use in conjunction with this token. For FILE,
   * the token should be placed in the top-level directory of the site, stored
   * inside a file of the same name. For META, the token should be placed in the
   * HEAD tag of the default page that is loaded for the site. For DNS, the
   * token should be placed in a TXT record of the domain.
   */
  method: string;
  /**
   * The verification token. The token must be placed appropriately in order for
   * verification to succeed.
   */
  token: string;
}
export interface Schema$SiteVerificationWebResourceListResponse {
  /**
   * The list of sites that are owned by the authenticated user.
   */
  items: Schema$SiteVerificationWebResourceResource[];
}
export interface Schema$SiteVerificationWebResourceResource {
  /**
   * The string used to identify this site. This value should be used in the
   * &quot;id&quot; portion of the REST URL for the Get, Update, and Delete
   * operations.
   */
  id: string;
  /**
   * The email addresses of all verified owners.
   */
  owners: string[];
  /**
   * The address and type of a site that is verified or will be verified.
   */
  site: any;
}

export class Resource$Webresource {
  root: Siteverification;
  constructor(root: Siteverification) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * siteVerification.webResource.delete
   * @desc Relinquish ownership of a website or domain.
   * @alias siteVerification.webResource.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.id The id of a verified site or domain.
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['id'],
      pathParams: ['id'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * siteVerification.webResource.get
   * @desc Get the most current data for a website or domain.
   * @alias siteVerification.webResource.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.id The id of a verified site or domain.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SiteVerificationWebResourceResource>;
  get(params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void;
  get(params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['id'],
      pathParams: ['id'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters);
    }
  }


  /**
   * siteVerification.webResource.getToken
   * @desc Get a verification token for placing on a website or domain.
   * @alias siteVerification.webResource.getToken
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().SiteVerificationWebResourceGettokenRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getToken(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SiteVerificationWebResourceGettokenResponse>;
  getToken(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>,
      callback?: BodyResponseCallback<
          Schema$SiteVerificationWebResourceGettokenResponse>): void;
  getToken(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>,
      callback?: BodyResponseCallback<
          Schema$SiteVerificationWebResourceGettokenResponse>):
      void|AxiosPromise<Schema$SiteVerificationWebResourceGettokenResponse> {
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
            url: (rootUrl + '/siteVerification/v1/token')
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
      createAPIRequest<Schema$SiteVerificationWebResourceGettokenResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$SiteVerificationWebResourceGettokenResponse>(parameters);
    }
  }


  /**
   * siteVerification.webResource.insert
   * @desc Attempt verification of a website or domain.
   * @alias siteVerification.webResource.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.verificationMethod The method to use for verifying a site or domain.
   * @param {().SiteVerificationWebResourceResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SiteVerificationWebResourceResource>;
  insert(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void;
  insert(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
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
            url: (rootUrl + '/siteVerification/v1/webResource')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['verificationMethod'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters);
    }
  }


  /**
   * siteVerification.webResource.list
   * @desc Get the list of your verified websites and domains.
   * @alias siteVerification.webResource.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SiteVerificationWebResourceListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>):
      void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>):
      void|AxiosPromise<Schema$SiteVerificationWebResourceListResponse> {
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
            url: (rootUrl + '/siteVerification/v1/webResource')
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
      createAPIRequest<Schema$SiteVerificationWebResourceListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$SiteVerificationWebResourceListResponse>(
          parameters);
    }
  }


  /**
   * siteVerification.webResource.patch
   * @desc Modify the list of owners for your website or domain. This method
   * supports patch semantics.
   * @alias siteVerification.webResource.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.id The id of a verified site or domain.
   * @param {().SiteVerificationWebResourceResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SiteVerificationWebResourceResource>;
  patch(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void;
  patch(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['id'],
      pathParams: ['id'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters);
    }
  }


  /**
   * siteVerification.webResource.update
   * @desc Modify the list of owners for your website or domain.
   * @alias siteVerification.webResource.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.id The id of a verified site or domain.
   * @param {().SiteVerificationWebResourceResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SiteVerificationWebResourceResource>;
  update(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void;
  update(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback?:
          BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
      void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['id'],
      pathParams: ['id'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters);
    }
  }
}
