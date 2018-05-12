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
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../shared/api';
import {createAPIRequest} from '../../shared/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace playcustomapp_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Google Play Custom App Publishing API
   *
   * An API to publish custom Android apps.
   *
   * @example
   * const google = require('googleapis');
   * const playcustomapp = google.playcustomapp('v1');
   *
   * @namespace playcustomapp
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Playcustomapp
   */
  export class Playcustomapp {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.accounts = new Resource$Accounts(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * This resource represents a custom app.
   */
  export interface Schema$CustomApp {
    /**
     * Default listing language in BCP 47 format.
     */
    languageCode?: string;
    /**
     * Title for the Android app.
     */
    title?: string;
  }


  export class Resource$Accounts {
    root: Playcustomapp;
    customApps: Resource$Accounts$Customapps;
    constructor(root: Playcustomapp) {
      this.root = root;
      this.getRoot.bind(this);
      this.customApps = new Resource$Accounts$Customapps(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Accounts$Customapps {
    root: Playcustomapp;
    constructor(root: Playcustomapp) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * playcustomapp.accounts.customApps.create
     * @desc Create and publish a new custom app.
     * @alias playcustomapp.accounts.customApps.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.account Developer account ID.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Accounts$Customapps$Create,
        options?: MethodOptions): AxiosPromise<Schema$CustomApp>;
    create(
        params: Params$Resource$Accounts$Customapps$Create,
        options: MethodOptions|BodyResponseCallback<Schema$CustomApp>,
        callback: BodyResponseCallback<Schema$CustomApp>): void;
    create(
        params: Params$Resource$Accounts$Customapps$Create,
        callback: BodyResponseCallback<Schema$CustomApp>): void;
    create(callback: BodyResponseCallback<Schema$CustomApp>): void;
    create(
        paramsOrCallback?: Params$Resource$Accounts$Customapps$Create|
        BodyResponseCallback<Schema$CustomApp>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CustomApp>,
        callback?: BodyResponseCallback<Schema$CustomApp>):
        void|AxiosPromise<Schema$CustomApp> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Customapps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customapps$Create;
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
              url: (rootUrl + '/playcustomapp/v1/accounts/{account}/customApps')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl + '/upload/playcustomapp/v1/accounts/{account}/customApps')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CustomApp>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customapps$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Developer account ID.
     */
    account?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomApp;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}
