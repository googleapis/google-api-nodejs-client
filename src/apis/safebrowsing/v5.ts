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

export namespace safebrowsing_v5 {
  export interface Options extends GlobalOptions {
    version: 'v5';
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
   * Safe Browsing API
   *
   * Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources. The Safe Browsing APIs are for non-commercial use only. If you need to use APIs to detect malicious URLs for commercial purposes – meaning “for sale or revenue-generating purposes” – please refer to the Web Risk API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const safebrowsing = google.safebrowsing('v5');
   * ```
   */
  export class Safebrowsing {
    context: APIRequestContext;
    hashes: Resource$Hashes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.hashes = new Resource$Hashes(this.context);
    }
  }

  /**
   * The full hash identified with one or more matches.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5FullHash {
    /**
     * The matching full hash. This is the SHA256 hash. The length will be exactly 32 bytes.
     */
    fullHash?: string | null;
    /**
     * Unordered list. A repeated field identifying the details relevant to this full hash.
     */
    fullHashDetails?: Schema$GoogleSecuritySafebrowsingV5FullHashFullHashDetail[];
  }
  /**
   * Details about a matching full hash. An important note about forward compatibility: new threat types and threat attributes may be added by the server at any time; those additions are considered minor version changes. It is Google's policy not to expose minor version numbers in APIs (see https://cloud.google.com/apis/design/versioning), so clients MUST be prepared to receive FullHashDetail messages containing ThreatType enum values or ThreatAttribute enum values that are considered invalid by the client. Therefore, it is the client's responsibility to check for the validity of all ThreatType and ThreatAttribute enum values; if any value is considered invalid, the client MUST disregard the entire FullHashDetail message.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5FullHashFullHashDetail {
    /**
     * Unordered list. Additional attributes about those full hashes. This may be empty.
     */
    attributes?: string[] | null;
    /**
     * The type of threat. This field will never be empty.
     */
    threatType?: string | null;
  }
  /**
   * The response returned after searching threat hashes. Note that if nothing is found, the server will return an OK status (HTTP status code 200) with the `full_hashes` field empty, rather than returning a NOT_FOUND status (HTTP status code 404).
   */
  export interface Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse {
    /**
     * The client-side cache duration. The client shall add this duration to the current time to determine the expiration time. The expiration time then applies to every hash prefix queried by the client in the request, regardless of how many full hashes are returned in the response. Even if the server returns no full hashes for a particular hash prefix, this fact should also be cached by the client. Important: the client must not assume that the server will return the same cache duration for all responses. The server may choose different cache durations for different responses depending on the situation.
     */
    cacheDuration?: string | null;
    /**
     * Unordered list. The unordered list of full hashes found.
     */
    fullHashes?: Schema$GoogleSecuritySafebrowsingV5FullHash[];
  }

  export class Resource$Hashes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Search for full hashes matching the specified prefixes. This is a custom method as described by guidance at https://google.aip.dev/136
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Hashes$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Hashes$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>;
    search(
      params: Params$Resource$Hashes$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Hashes$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
    ): void;
    search(
      params: Params$Resource$Hashes$Search,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Hashes$Search
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Hashes$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Hashes$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v5/hashes:search').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Hashes$Search extends StandardParameters {
    /**
     * Required. The hash prefixes to be looked up.
     */
    hashPrefixes?: string[];
  }
}
