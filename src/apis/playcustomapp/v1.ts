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

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace playcustomapp_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  let context: APIRequestContext;

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not
     * exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Play Custom App Publishing API
   *
   * An API to publish custom Android apps.
   *
   * @example
   * const {google} = require('googleapis');
   * const playcustomapp = google.playcustomapp('v1');
   *
   * @namespace playcustomapp
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Playcustomapp
   */
  export class Playcustomapp {
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      context = {_options: options || {}, google};

      this.accounts = new Resource$Accounts();
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
    customApps: Resource$Accounts$Customapps;
    constructor() {
      this.customApps = new Resource$Accounts$Customapps();
    }
  }


  export class Resource$Accounts$Customapps {
    constructor() {}


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
        options?: MethodOptions): GaxiosPromise<Schema$CustomApp>;
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
        void|GaxiosPromise<Schema$CustomApp> {
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
        context
      };
      if (callback) {
        createAPIRequest<Schema$CustomApp>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CustomApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customapps$Create extends
      StandardParameters {
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
