// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace playcustomapp_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Google Play Custom App Publishing API
   *
   * API to create and publish custom Android apps
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const playcustomapp = google.playcustomapp('v1');
   * ```
   */
  export class Playcustomapp {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * This resource represents a custom app.
   */
  export interface Schema$CustomApp {
    /**
     * Default listing language in BCP 47 format.
     */
    languageCode?: string | null;
    /**
     * Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account.
     */
    organizations?: Schema$Organization[];
    /**
     * Output only. Package name of the created Android app. Only present in the API response.
     */
    packageName?: string | null;
    /**
     * Title for the Android app.
     */
    title?: string | null;
  }
  /**
   * Represents an organization that can access a custom app.
   */
  export interface Schema$Organization {
    /**
     * Required. ID of the organization.
     */
    organizationId?: string | null;
    /**
     * Optional. A human-readable name of the organization, to help recognize the organization.
     */
    organizationName?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    customApps: Resource$Accounts$Customapps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customApps = new Resource$Accounts$Customapps(this.context);
    }
  }

  export class Resource$Accounts$Customapps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new custom app.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Customapps$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Customapps$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomApp>;
    create(
      params: Params$Resource$Accounts$Customapps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Customapps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CustomApp>,
      callback: BodyResponseCallback<Schema$CustomApp>
    ): void;
    create(
      params: Params$Resource$Accounts$Customapps$Create,
      callback: BodyResponseCallback<Schema$CustomApp>
    ): void;
    create(callback: BodyResponseCallback<Schema$CustomApp>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customapps$Create
        | BodyResponseCallback<Schema$CustomApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customapps$Create;
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

      const rootUrl =
        options.rootUrl || 'https://playcustomapp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/playcustomapp/v1/accounts/{account}/customApps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/playcustomapp/v1/accounts/{account}/customApps'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customapps$Create
    extends StandardParameters {
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
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}
