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

export namespace webfonts_v1 {
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
   * Web Fonts Developer API
   *
   * The Google Web Fonts Developer API lets you retrieve information about web fonts served by Google.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const webfonts = google.webfonts('v1');
   * ```
   */
  export class Webfonts {
    context: APIRequestContext;
    webfonts: Resource$Webfonts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.webfonts = new Resource$Webfonts(this.context);
    }
  }

  /**
   * Metadata for a variable font axis.
   */
  export interface Schema$Axis {
    /**
     * maximum value
     */
    end?: number | null;
    /**
     * minimum value
     */
    start?: number | null;
    /**
     * tag name.
     */
    tag?: string | null;
  }
  /**
   * Metadata describing a family of fonts.
   */
  export interface Schema$Webfont {
    /**
     * Axis for variable fonts.
     */
    axes?: Schema$Axis[];
    /**
     * The category of the font.
     */
    category?: string | null;
    /**
     * The name of the font.
     */
    family?: string | null;
    /**
     * The font files (with all supported scripts) for each one of the available variants, as a key : value map.
     */
    files?: {[key: string]: string} | null;
    /**
     * This kind represents a webfont object in the webfonts service.
     */
    kind?: string | null;
    /**
     * The date (format "yyyy-MM-dd") the font was modified for the last time.
     */
    lastModified?: string | null;
    /**
     * Font URL for menu subset, a subset of the font that is enough to display the font name
     */
    menu?: string | null;
    /**
     * The scripts supported by the font.
     */
    subsets?: string[] | null;
    /**
     * The available variants for the font.
     */
    variants?: string[] | null;
    /**
     * The font version.
     */
    version?: string | null;
  }
  /**
   * Response containing the list of fonts currently served by the Google Fonts API.
   */
  export interface Schema$WebfontList {
    /**
     * The list of fonts currently served by the Google Fonts API.
     */
    items?: Schema$Webfont[];
    /**
     * This kind represents a list of webfont objects in the webfonts service.
     */
    kind?: string | null;
  }

  export class Resource$Webfonts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the list of fonts currently served by the Google Fonts Developer API.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webfonts.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const webfonts = google.webfonts('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webfonts.webfonts.list({
     *     // Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent.
     *     capability: 'placeholder-value',
     *     // Filters by Webfont.family, using literal match. If not set, returns all families
     *     family: 'placeholder-value',
     *     // Enables sorting of the list.
     *     sort: 'placeholder-value',
     *     // Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families.
     *     subset: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Webfonts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Webfonts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebfontList>;
    list(
      params: Params$Resource$Webfonts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Webfonts$List,
      options: MethodOptions | BodyResponseCallback<Schema$WebfontList>,
      callback: BodyResponseCallback<Schema$WebfontList>
    ): void;
    list(
      params: Params$Resource$Webfonts$List,
      callback: BodyResponseCallback<Schema$WebfontList>
    ): void;
    list(callback: BodyResponseCallback<Schema$WebfontList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Webfonts$List
        | BodyResponseCallback<Schema$WebfontList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebfontList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebfontList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebfontList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Webfonts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webfonts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://webfonts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/webfonts').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WebfontList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebfontList>(parameters);
      }
    }
  }

  export interface Params$Resource$Webfonts$List extends StandardParameters {
    /**
     * Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent.
     */
    capability?: string[];
    /**
     * Filters by Webfont.family, using literal match. If not set, returns all families
     */
    family?: string[];
    /**
     * Enables sorting of the list.
     */
    sort?: string;
    /**
     * Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families.
     */
    subset?: string;
  }
}
