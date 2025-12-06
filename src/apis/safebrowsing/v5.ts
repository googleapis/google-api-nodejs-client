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
  GaxiosResponseWithHTTP2,
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
    hashList: Resource$Hashlist;
    hashLists: Resource$Hashlists;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.hashes = new Resource$Hashes(this.context);
      this.hashList = new Resource$Hashlist(this.context);
      this.hashLists = new Resource$Hashlists(this.context);
    }
  }

  /**
   * The response containing multiple hash lists.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse {
    /**
     * The hash lists in the same order given in the request.
     */
    hashLists?: Schema$GoogleSecuritySafebrowsingV5HashList[];
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
   * Details about a matching full hash. An important note about forward compatibility: new threat types and threat attributes may be added by the server at any time; those additions are considered minor version changes. It is Google's policy not to expose minor version numbers in APIs (see https://cloud.google.com/apis/design/versioning for the versioning policy), so clients MUST be prepared to receive `FullHashDetail` messages containing `ThreatType` enum values or `ThreatAttribute` enum values that are considered invalid by the client. Therefore, it is the client's responsibility to check for the validity of all `ThreatType` and `ThreatAttribute` enum values; if any value is considered invalid, the client MUST disregard the entire `FullHashDetail` message.
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
   * A list of hashes identified by its name.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5HashList {
    /**
     * The 8-byte additions.
     */
    additionsEightBytes?: Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded64Bit;
    /**
     * The 4-byte additions.
     */
    additionsFourBytes?: Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded32Bit;
    /**
     * The 16-byte additions.
     */
    additionsSixteenBytes?: Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded128Bit;
    /**
     * The 32-byte additions.
     */
    additionsThirtyTwoBytes?: Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded256Bit;
    /**
     * The Rice-delta encoded version of removal indices. Since each hash list definitely has less than 2^32 entries, the indices are treated as 32-bit integers and encoded.
     */
    compressedRemovals?: Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded32Bit;
    /**
     * Metadata about the hash list. This is not populated by the `GetHashList` method, but this is populated by the `ListHashLists` method.
     */
    metadata?: Schema$GoogleSecuritySafebrowsingV5HashListMetadata;
    /**
     * Clients should wait at least this long to get the hash list again. If omitted or zero, clients SHOULD fetch immediately because it indicates that the server has an additional update to be sent to the client, but could not due to the client-specified constraints.
     */
    minimumWaitDuration?: string | null;
    /**
     * The name of the hash list. Note that the Global Cache is also just a hash list and can be referred to here.
     */
    name?: string | null;
    /**
     * When true, this is a partial diff containing additions and removals based on what the client already has. When false, this is the complete hash list. When false, the client MUST delete any locally stored version for this hash list. This means that either the version possessed by the client is seriously out-of-date or the client data is believed to be corrupt. The `compressed_removals` field will be empty. When true, the client MUST apply an incremental update by applying removals and then additions.
     */
    partialUpdate?: boolean | null;
    /**
     * The sorted list of all hashes, hashed again with SHA256. This is the checksum for the sorted list of all hashes present in the database after applying the provided update. In the case that no updates were provided, the server will omit this field to indicate that the client should use the existing checksum.
     */
    sha256Checksum?: string | null;
    /**
     * The version of the hash list. The client MUST NOT manipulate those bytes.
     */
    version?: string | null;
  }
  /**
   * Metadata about a particular hash list.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5HashListMetadata {
    /**
     * A human-readable description about this list. Written in English.
     */
    description?: string | null;
    /**
     * The supported hash length for this hash list. Each hash list will support exactly one length. If a different hash length is introduced for the same set of threat types or safe types, it will be introduced as a separate list with a distinct name and respective hash length set.
     */
    hashLength?: string | null;
    /**
     * Unordered list. If not empty, this specifies that the hash list represents a list of likely safe hashes, and this enumerates the ways they are considered likely safe. This field is mutually exclusive with the threat_types field.
     */
    likelySafeTypes?: string[] | null;
    /**
     * Unordered list. If not empty, this specifies that the hash list is a kind of threat list, and this enumerates the kind of threats associated with hashes or hash prefixes in this hash list. May be empty if the entry does not represent a threat, i.e. in the case that it represents a likely safe type.
     */
    threatTypes?: string[] | null;
  }
  /**
   * The response containing metadata about hash lists.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse {
    /**
     * The hash lists in an arbitrary order. Only metadata about the hash lists will be included, not the contents.
     */
    hashLists?: Schema$GoogleSecuritySafebrowsingV5HashList[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Same as `RiceDeltaEncoded32Bit` except this encodes 128-bit numbers.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded128Bit {
    /**
     * The encoded deltas that are encoded using the Golomb-Rice coder.
     */
    encodedData?: string | null;
    /**
     * The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.
     */
    entriesCount?: number | null;
    /**
     * The upper 64 bits of the first entry in the encoded data (hashes). If the field is empty, the upper 64 bits are all zero.
     */
    firstValueHi?: string | null;
    /**
     * The lower 64 bits of the first entry in the encoded data (hashes). If the field is empty, the lower 64 bits are all zero.
     */
    firstValueLo?: string | null;
    /**
     * The Golomb-Rice parameter. This parameter is guaranteed to be between 99 and 126, inclusive.
     */
    riceParameter?: number | null;
  }
  /**
   * Same as `RiceDeltaEncoded32Bit` except this encodes 256-bit numbers.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded256Bit {
    /**
     * The encoded deltas that are encoded using the Golomb-Rice coder.
     */
    encodedData?: string | null;
    /**
     * The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.
     */
    entriesCount?: number | null;
    /**
     * The first 64 bits of the first entry in the encoded data (hashes). If the field is empty, the first 64 bits are all zero.
     */
    firstValueFirstPart?: string | null;
    /**
     * The last 64 bits of the first entry in the encoded data (hashes). If the field is empty, the last 64 bits are all zero.
     */
    firstValueFourthPart?: string | null;
    /**
     * The 65 through 128th bits of the first entry in the encoded data (hashes). If the field is empty, the 65 through 128th bits are all zero.
     */
    firstValueSecondPart?: string | null;
    /**
     * The 129 through 192th bits of the first entry in the encoded data (hashes). If the field is empty, the 129 through 192th bits are all zero.
     */
    firstValueThirdPart?: string | null;
    /**
     * The Golomb-Rice parameter. This parameter is guaranteed to be between 227 and 254, inclusive.
     */
    riceParameter?: number | null;
  }
  /**
   * The Rice-Golomb encoded data. Used for either hashes or removal indices. It is guaranteed that every hash or index here has the same length, and this length is exactly 32 bits. Generally speaking, if we sort all the entries lexicographically, we will find that the higher order bits tend not to change as frequently as lower order bits. This means that if we also take the adjacent difference between entries, the higher order bits have a high probability of being zero. This exploits this high probability of zero by essentially choosing a certain number of bits; all bits more significant than this are likely to be zero so we use unary encoding. See the `rice_parameter` field. Historical note: the Rice-delta encoding was first used in V4 of this API. In V5, two significant improvements were made: firstly, the Rice-delta encoding is now available with hash prefixes longer than 4 bytes; secondly, the encoded data are now treated as big-endian so as to avoid a costly sorting step.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded32Bit {
    /**
     * The encoded deltas that are encoded using the Golomb-Rice coder.
     */
    encodedData?: string | null;
    /**
     * The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.
     */
    entriesCount?: number | null;
    /**
     * The first entry in the encoded data (hashes or indices), or, if only a single hash prefix or index was encoded, that entry's value. If the field is empty, the entry is zero.
     */
    firstValue?: number | null;
    /**
     * The Golomb-Rice parameter. This parameter is guaranteed to be between 3 and 30, inclusive.
     */
    riceParameter?: number | null;
  }
  /**
   * Same as `RiceDeltaEncoded32Bit` except this encodes 64-bit numbers.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5RiceDeltaEncoded64Bit {
    /**
     * The encoded deltas that are encoded using the Golomb-Rice coder.
     */
    encodedData?: string | null;
    /**
     * The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.
     */
    entriesCount?: number | null;
    /**
     * The first entry in the encoded data (hashes), or, if only a single hash prefix was encoded, that entry's value. If the field is empty, the entry is zero.
     */
    firstValue?: string | null;
    /**
     * The Golomb-Rice parameter. This parameter is guaranteed to be between 35 and 62, inclusive.
     */
    riceParameter?: number | null;
  }
  /**
   * The response returned after searching threat hashes. If nothing is found, the server will return an OK status (HTTP status code 200) with the `full_hashes` field empty, rather than returning a NOT_FOUND status (HTTP status code 404). **What's new in V5**: There is a separation between `FullHash` and `FullHashDetail`. In the case when a hash represents a site having multiple threats (e.g. both MALWARE and SOCIAL_ENGINEERING), the full hash does not need to be sent twice as in V4. Furthermore, the cache duration has been simplified into a single `cache_duration` field.
   */
  export interface Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse {
    /**
     * The client-side cache duration. The client MUST add this duration to the current time to determine the expiration time. The expiration time then applies to every hash prefix queried by the client in the request, regardless of how many full hashes are returned in the response. Even if the server returns no full hashes for a particular hash prefix, this fact MUST also be cached by the client. If and only if the field `full_hashes` is empty, the client MAY increase the `cache_duration` to determine a new expiration that is later than that specified by the server. In any case, the increased cache duration must not be longer than 24 hours. Important: the client MUST NOT assume that the server will return the same cache duration for all responses. The server MAY choose different cache durations for different responses depending on the situation.
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
     * Search for full hashes matching the specified prefixes. This is a custom method as defined by https://google.aip.dev/136 (the custom method refers to this method having a custom name within Google's general API development nomenclature; it does not refer to using a custom HTTP method).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v5');
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
     *   const res = await safebrowsing.hashes.search({
     *     // Required. The hash prefixes to be looked up. Clients MUST NOT send more than 1000 hash prefixes. However, following the URL processing procedure, clients SHOULD NOT need to send more than 30 hash prefixes. Currently each hash prefix is required to be exactly 4 bytes long. This MAY be relaxed in the future.
     *     hashPrefixes: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cacheDuration": "my_cacheDuration",
     *   //   "fullHashes": []
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
    search(
      params: Params$Resource$Hashes$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Hashes$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5SearchHashesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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
     * Required. The hash prefixes to be looked up. Clients MUST NOT send more than 1000 hash prefixes. However, following the URL processing procedure, clients SHOULD NOT need to send more than 30 hash prefixes. Currently each hash prefix is required to be exactly 4 bytes long. This MAY be relaxed in the future.
     */
    hashPrefixes?: string[];
  }

  export class Resource$Hashlist {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the latest contents of a hash list. A hash list may either by a threat list or a non-threat list such as the Global Cache. This is a standard Get method as defined by https://google.aip.dev/131 and the HTTP method is also GET.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v5');
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
     *   const res = await safebrowsing.hashList.get({
     *     // Required. The name of this particular hash list. It may be a threat list, or it may be the Global Cache.
     *     name: 'placeholder-value',
     *     // Sets the maximum number of entries that the client is willing to have in the local database for the list. (The server MAY cause the client to store less than this number of entries.) If omitted or zero, no database size limit is set.
     *     'sizeConstraints.maxDatabaseEntries': 'placeholder-value',
     *     // The maximum size in number of entries. The update will not contain more entries than this value, but it is possible that the update will contain fewer entries than this value. This MUST be at least 1024. If omitted or zero, no update size limit is set.
     *     'sizeConstraints.maxUpdateEntries': 'placeholder-value',
     *     // The version of the hash list that the client already has. If this is the first time the client is fetching the hash list, this field MUST be left empty. Otherwise, the client SHOULD supply the version previously received from the server. The client MUST NOT manipulate those bytes. **What's new in V5**: in V4 of the API, this was called `states`; it is now renamed to `version` for clarity.
     *     version: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionsEightBytes": {},
     *   //   "additionsFourBytes": {},
     *   //   "additionsSixteenBytes": {},
     *   //   "additionsThirtyTwoBytes": {},
     *   //   "compressedRemovals": {},
     *   //   "metadata": {},
     *   //   "minimumWaitDuration": "my_minimumWaitDuration",
     *   //   "name": "my_name",
     *   //   "partialUpdate": false,
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "version": "my_version"
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
    get(
      params: Params$Resource$Hashlist$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Hashlist$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5HashList>
    >;
    get(
      params: Params$Resource$Hashlist$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Hashlist$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>
    ): void;
    get(
      params: Params$Resource$Hashlist$Get,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Hashlist$Get
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5HashList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5HashList>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Hashlist$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Hashlist$Get;
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
            url: (rootUrl + '/v5/hashList/{name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSecuritySafebrowsingV5HashList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSecuritySafebrowsingV5HashList>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Hashlist$Get extends StandardParameters {
    /**
     * Required. The name of this particular hash list. It may be a threat list, or it may be the Global Cache.
     */
    name?: string;
    /**
     * Sets the maximum number of entries that the client is willing to have in the local database for the list. (The server MAY cause the client to store less than this number of entries.) If omitted or zero, no database size limit is set.
     */
    'sizeConstraints.maxDatabaseEntries'?: number;
    /**
     * The maximum size in number of entries. The update will not contain more entries than this value, but it is possible that the update will contain fewer entries than this value. This MUST be at least 1024. If omitted or zero, no update size limit is set.
     */
    'sizeConstraints.maxUpdateEntries'?: number;
    /**
     * The version of the hash list that the client already has. If this is the first time the client is fetching the hash list, this field MUST be left empty. Otherwise, the client SHOULD supply the version previously received from the server. The client MUST NOT manipulate those bytes. **What's new in V5**: in V4 of the API, this was called `states`; it is now renamed to `version` for clarity.
     */
    version?: string;
  }

  export class Resource$Hashlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get multiple hash lists at once. It is very common for a client to need to get multiple hash lists. Using this method is preferred over using the regular Get method multiple times. This is a standard batch Get method as defined by https://google.aip.dev/231 and the HTTP method is also GET.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v5');
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
     *   const res = await safebrowsing.hashLists.batchGet({
     *     // Required. The names of the particular hash lists. The list MAY be a threat list, or it may be the Global Cache. The names MUST NOT contain duplicates; if they did, the client will get an error.
     *     names: 'placeholder-value',
     *     // Sets the maximum number of entries that the client is willing to have in the local database for the list. (The server MAY cause the client to store less than this number of entries.) If omitted or zero, no database size limit is set.
     *     'sizeConstraints.maxDatabaseEntries': 'placeholder-value',
     *     // The maximum size in number of entries. The update will not contain more entries than this value, but it is possible that the update will contain fewer entries than this value. This MUST be at least 1024. If omitted or zero, no update size limit is set.
     *     'sizeConstraints.maxUpdateEntries': 'placeholder-value',
     *     // The versions of the hash list that the client already has. If this is the first time the client is fetching the hash lists, the field should be left empty. Otherwise, the client should supply the versions previously received from the server. The client MUST NOT manipulate those bytes. The client need not send the versions in the same order as the corresponding list names. The client may send fewer or more versions in a request than there are names. However the client MUST NOT send multiple versions that correspond to the same name; if it did, the client will get an error. Historical note: in V4 of the API, this was called `states`; it is now renamed to `version` for clarity.
     *     version: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hashLists": []
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
    batchGet(
      params: Params$Resource$Hashlists$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Hashlists$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
    >;
    batchGet(
      params: Params$Resource$Hashlists$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Hashlists$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Hashlists$Batchget,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Hashlists$Batchget
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Hashlists$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Hashlists$Batchget;
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
            url: (rootUrl + '/v5/hashLists:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSecuritySafebrowsingV5BatchGetHashListsResponse>(
          parameters
        );
      }
    }

    /**
     * List hash lists. In the V5 API, Google will never remove a hash list that has ever been returned by this method. This enables clients to skip using this method and simply hard-code all hash lists they need. This is a standard List method as defined by https://google.aip.dev/132 and the HTTP method is GET.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v5');
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
     *   const res = await safebrowsing.hashLists.list({
     *     // The maximum number of hash lists to return. The service may return fewer than this value. If unspecified, the server will choose a page size, which may be larger than the number of hash lists so that pagination is not necessary.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListHashLists` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hashLists": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
      params: Params$Resource$Hashlists$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Hashlists$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
    >;
    list(
      params: Params$Resource$Hashlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Hashlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
    ): void;
    list(
      params: Params$Resource$Hashlists$List,
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Hashlists$List
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Hashlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Hashlists$List;
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
            url: (rootUrl + '/v5/hashLists').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleSecuritySafebrowsingV5ListHashListsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Hashlists$Batchget extends StandardParameters {
    /**
     * Required. The names of the particular hash lists. The list MAY be a threat list, or it may be the Global Cache. The names MUST NOT contain duplicates; if they did, the client will get an error.
     */
    names?: string[];
    /**
     * Sets the maximum number of entries that the client is willing to have in the local database for the list. (The server MAY cause the client to store less than this number of entries.) If omitted or zero, no database size limit is set.
     */
    'sizeConstraints.maxDatabaseEntries'?: number;
    /**
     * The maximum size in number of entries. The update will not contain more entries than this value, but it is possible that the update will contain fewer entries than this value. This MUST be at least 1024. If omitted or zero, no update size limit is set.
     */
    'sizeConstraints.maxUpdateEntries'?: number;
    /**
     * The versions of the hash list that the client already has. If this is the first time the client is fetching the hash lists, the field should be left empty. Otherwise, the client should supply the versions previously received from the server. The client MUST NOT manipulate those bytes. The client need not send the versions in the same order as the corresponding list names. The client may send fewer or more versions in a request than there are names. However the client MUST NOT send multiple versions that correspond to the same name; if it did, the client will get an error. Historical note: in V4 of the API, this was called `states`; it is now renamed to `version` for clarity.
     */
    version?: string[];
  }
  export interface Params$Resource$Hashlists$List extends StandardParameters {
    /**
     * The maximum number of hash lists to return. The service may return fewer than this value. If unspecified, the server will choose a page size, which may be larger than the number of hash lists so that pagination is not necessary.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListHashLists` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
  }
}
