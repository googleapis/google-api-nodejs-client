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

export namespace dev_deltav_pa_sandbox_v1 {
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
   * Delta V Example API (Dev)
   *
   * deltav-pa.googleapis.com API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dev_deltav_pa_sandbox = google.dev_deltav_pa_sandbox('v1');
   * ```
   */
  export class Dev_deltav_pa_sandbox {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A response to the ListMoons RPC.
   */
  export interface Schema$ListMoonsResponse {
    /**
     * The moons from the specified planet.
     */
    moons?: Schema$Moon[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response to the ListPlanets RPC.
   */
  export interface Schema$ListPlanetsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The planets from the specified location.
     */
    planets?: Schema$Planet[];
  }
  /**
   * A representation of a moon.
   */
  export interface Schema$Moon {
    /**
     * The name of the moon. Format: projects/{project\}/locations/{location\}/planets/{planet_id\}/moons/{moon_id\}
     */
    name?: string | null;
  }
  /**
   * A representation of a planet.
   */
  export interface Schema$Planet {
    /**
     * The name of the planet. Format: projects/{project\}/locations/{location\}/planets/{planet_id\}
     */
    name?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    planets: Resource$Projects$Locations$Planets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.planets = new Resource$Projects$Locations$Planets(this.context);
    }
  }

  export class Resource$Projects$Locations$Planets {
    context: APIRequestContext;
    moons: Resource$Projects$Locations$Planets$Moons;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.moons = new Resource$Projects$Locations$Planets$Moons(this.context);
    }

    /**
     * Fetches a planet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Planets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Planets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Planet>;
    get(
      params: Params$Resource$Projects$Locations$Planets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Planets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Planet>,
      callback: BodyResponseCallback<Schema$Planet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Planets$Get,
      callback: BodyResponseCallback<Schema$Planet>
    ): void;
    get(callback: BodyResponseCallback<Schema$Planet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Planets$Get
        | BodyResponseCallback<Schema$Planet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Planet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Planet>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Planet> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Planets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Planets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dev-deltav-pa.sandbox.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Planet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Planet>(parameters);
      }
    }

    /**
     * Fetches a list of planets.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Planets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Planets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPlanetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Planets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Planets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListPlanetsResponse>,
      callback: BodyResponseCallback<Schema$ListPlanetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Planets$List,
      callback: BodyResponseCallback<Schema$ListPlanetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPlanetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Planets$List
        | BodyResponseCallback<Schema$ListPlanetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlanetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlanetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPlanetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Planets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Planets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dev-deltav-pa.sandbox.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/planets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPlanetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlanetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Planets$Get
    extends StandardParameters {
    /**
     * Required. The name of the planet to retrieve. Format: projects/{project\}/locations/{location\}/planets/{planet_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Planets$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of planets to return. The service may return fewer than this value. If unspecified, at most 50 books will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPlanets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlanets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of planets. Format: projects/{project\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Planets$Moons {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches a moon.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Planets$Moons$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Planets$Moons$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Moon>;
    get(
      params: Params$Resource$Projects$Locations$Planets$Moons$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Planets$Moons$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Moon>,
      callback: BodyResponseCallback<Schema$Moon>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Planets$Moons$Get,
      callback: BodyResponseCallback<Schema$Moon>
    ): void;
    get(callback: BodyResponseCallback<Schema$Moon>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Planets$Moons$Get
        | BodyResponseCallback<Schema$Moon>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Moon>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Moon>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Moon> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Planets$Moons$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Planets$Moons$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dev-deltav-pa.sandbox.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Moon>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Moon>(parameters);
      }
    }

    /**
     * Fetches a list of moons.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Planets$Moons$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Planets$Moons$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMoonsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Planets$Moons$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Planets$Moons$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListMoonsResponse>,
      callback: BodyResponseCallback<Schema$ListMoonsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Planets$Moons$List,
      callback: BodyResponseCallback<Schema$ListMoonsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMoonsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Planets$Moons$List
        | BodyResponseCallback<Schema$ListMoonsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMoonsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMoonsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMoonsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Planets$Moons$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Planets$Moons$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dev-deltav-pa.sandbox.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/moons').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMoonsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMoonsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Planets$Moons$Get
    extends StandardParameters {
    /**
     * Required. The name of the moon to retrieve. Format: projects/{project\}/locations/{location\}/planets/{planet_id\}/moons/{moon_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Planets$Moons$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of moons to return. The service may return fewer than this value. If unspecified, at most 50 books will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListMoons` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMoons` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of moons. Format: projects/{project\}/locations/{location\}/planets/{planet_id\}
     */
    parent?: string;
  }
}
