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

export namespace safebrowsing_v4 {
  export interface Options extends GlobalOptions {
    version: 'v4';
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
   * const safebrowsing = google.safebrowsing('v4');
   * ```
   */
  export class Safebrowsing {
    context: APIRequestContext;
    encodedFullHashes: Resource$Encodedfullhashes;
    encodedUpdates: Resource$Encodedupdates;
    fullHashes: Resource$Fullhashes;
    threatHits: Resource$Threathits;
    threatLists: Resource$Threatlists;
    threatListUpdates: Resource$Threatlistupdates;
    threatMatches: Resource$Threatmatches;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.encodedFullHashes = new Resource$Encodedfullhashes(this.context);
      this.encodedUpdates = new Resource$Encodedupdates(this.context);
      this.fullHashes = new Resource$Fullhashes(this.context);
      this.threatHits = new Resource$Threathits(this.context);
      this.threatLists = new Resource$Threatlists(this.context);
      this.threatListUpdates = new Resource$Threatlistupdates(this.context);
      this.threatMatches = new Resource$Threatmatches(this.context);
    }
  }

  /**
   * The expected state of a client's local database.
   */
  export interface Schema$Checksum {
    /**
     * The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.
     */
    sha256?: string | null;
  }
  /**
   * The client metadata associated with Safe Browsing API requests.
   */
  export interface Schema$ClientInfo {
    /**
     * A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
     */
    clientId?: string | null;
    /**
     * The version of the client implementation.
     */
    clientVersion?: string | null;
  }
  /**
   * The constraints for this update.
   */
  export interface Schema$Constraints {
    /**
     * A client's physical location, expressed as a ISO 31166-1 alpha-2 region code.
     */
    deviceLocation?: string | null;
    /**
     * Requests the lists for a specific language. Expects ISO 639 alpha-2 format.
     */
    language?: string | null;
    /**
     * Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.
     */
    maxDatabaseEntries?: number | null;
    /**
     * The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set.
     */
    maxUpdateEntries?: number | null;
    /**
     * Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format.
     */
    region?: string | null;
    /**
     * The compression types supported by the client.
     */
    supportedCompressions?: string[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5
   */
  export interface Schema$FetchThreatListUpdatesRequest {
    /**
     * The client metadata.
     */
    client?: Schema$ClientInfo;
    /**
     * The requested threat list updates.
     */
    listUpdateRequests?: Schema$ListUpdateRequest[];
  }
  export interface Schema$FetchThreatListUpdatesResponse {
    /**
     * The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list.
     */
    listUpdateResponses?: Schema$ListUpdateResponse[];
    /**
     * The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want.
     */
    minimumWaitDuration?: string | null;
  }
  /**
   * Request to return full hashes matched by the provided hash prefixes.
   */
  export interface Schema$FindFullHashesRequest {
    /**
     * Client metadata associated with callers of higher-level APIs built on top of the client's implementation.
     */
    apiClient?: Schema$ClientInfo;
    /**
     * The client metadata.
     */
    client?: Schema$ClientInfo;
    /**
     * The current client states for each of the client's local threat lists.
     */
    clientStates?: string[] | null;
    /**
     * The lists and hashes to be checked.
     */
    threatInfo?: Schema$ThreatInfo;
  }
  export interface Schema$FindFullHashesResponse {
    /**
     * The full hashes that matched the requested prefixes.
     */
    matches?: Schema$ThreatMatch[];
    /**
     * The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want.
     */
    minimumWaitDuration?: string | null;
    /**
     * For requested entities that did not match the threat list, how long to cache the response.
     */
    negativeCacheDuration?: string | null;
  }
  /**
   * Request to check entries against lists.
   */
  export interface Schema$FindThreatMatchesRequest {
    /**
     * The client metadata.
     */
    client?: Schema$ClientInfo;
    /**
     * The lists and entries to be checked for matches.
     */
    threatInfo?: Schema$ThreatInfo;
  }
  export interface Schema$FindThreatMatchesResponse {
    /**
     * The threat list matches.
     */
    matches?: Schema$ThreatMatch[];
  }
  export interface Schema$ListThreatListsResponse {
    /**
     * The lists available for download by the client.
     */
    threatLists?: Schema$ThreatListDescriptor[];
  }
  /**
   * A single list update request.
   */
  export interface Schema$ListUpdateRequest {
    /**
     * The constraints associated with this request.
     */
    constraints?: Schema$Constraints;
    /**
     * The type of platform at risk by entries present in the list.
     */
    platformType?: string | null;
    /**
     * The current state of the client for the requested list (the encrypted client state that was received from the last successful list update).
     */
    state?: string | null;
    /**
     * The types of entries present in the list.
     */
    threatEntryType?: string | null;
    /**
     * The type of threat posed by entries present in the list.
     */
    threatType?: string | null;
  }
  /**
   * An update to an individual list.
   */
  export interface Schema$ListUpdateResponse {
    /**
     * A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response.
     */
    additions?: Schema$ThreatEntrySet[];
    /**
     * The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided update. If the client state doesn't match the expected state, the client must disregard this update and retry later.
     */
    checksum?: Schema$Checksum;
    /**
     * The new client state, in encrypted format. Opaque to clients.
     */
    newClientState?: string | null;
    /**
     * The platform type for which data is returned.
     */
    platformType?: string | null;
    /**
     * A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet.
     */
    removals?: Schema$ThreatEntrySet[];
    /**
     * The type of response. This may indicate that an action is required by the client when the response is received.
     */
    responseType?: string | null;
    /**
     * The format of the threats.
     */
    threatEntryType?: string | null;
    /**
     * The threat type for which data is returned.
     */
    threatType?: string | null;
  }
  /**
   * A single metadata entry.
   */
  export interface Schema$MetadataEntry {
    /**
     * The metadata entry key. For JSON requests, the key is base64-encoded.
     */
    key?: string | null;
    /**
     * The metadata entry value. For JSON requests, the value is base64-encoded.
     */
    value?: string | null;
  }
  /**
   * The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
   */
  export interface Schema$RawHashes {
    /**
     * The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
     */
    prefixSize?: number | null;
    /**
     * The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded.
     */
    rawHashes?: string | null;
  }
  /**
   * A set of raw indices to remove from a local list.
   */
  export interface Schema$RawIndices {
    /**
     * The indices to remove from a lexicographically-sorted local list.
     */
    indices?: number[] | null;
  }
  /**
   * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
   */
  export interface Schema$RiceDeltaEncoding {
    /**
     * The encoded deltas that are encoded using the Golomb-Rice coder.
     */
    encodedData?: string | null;
    /**
     * The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero.
     */
    firstValue?: string | null;
    /**
     * The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.
     */
    numEntries?: number | null;
    /**
     * The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero.
     */
    riceParameter?: number | null;
  }
  /**
   * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
   */
  export interface Schema$ThreatEntry {
    /**
     * The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded.
     */
    digest?: string | null;
    /**
     * A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.
     */
    hash?: string | null;
    /**
     * A URL.
     */
    url?: string | null;
  }
  /**
   * The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
   */
  export interface Schema$ThreatEntryMetadata {
    /**
     * The metadata entries.
     */
    entries?: Schema$MetadataEntry[];
  }
  /**
   * A set of threats that should be added or removed from a client's local database.
   */
  export interface Schema$ThreatEntrySet {
    /**
     * The compression type for the entries in this set.
     */
    compressionType?: string | null;
    /**
     * The raw SHA256-formatted entries.
     */
    rawHashes?: Schema$RawHashes;
    /**
     * The raw removal indices for a local list.
     */
    rawIndices?: Schema$RawIndices;
    /**
     * The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored as encoded_data.
     */
    riceHashes?: Schema$RiceDeltaEncoding;
    /**
     * The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded_data.
     */
    riceIndices?: Schema$RiceDeltaEncoding;
  }
  export interface Schema$ThreatHit {
    /**
     * Client-reported identification.
     */
    clientInfo?: Schema$ClientInfo;
    /**
     * The threat entry responsible for the hit. Full hash should be reported for hash-based hits.
     */
    entry?: Schema$ThreatEntry;
    /**
     * The platform type reported.
     */
    platformType?: string | null;
    /**
     * The resources related to the threat hit.
     */
    resources?: Schema$ThreatSource[];
    /**
     * The threat type reported.
     */
    threatType?: string | null;
    /**
     * Details about the user that encountered the threat.
     */
    userInfo?: Schema$UserInfo;
  }
  /**
   * The information regarding one or more threats that a client submits when checking for matches in threat lists.
   */
  export interface Schema$ThreatInfo {
    /**
     * The platform types to be checked.
     */
    platformTypes?: string[] | null;
    /**
     * The threat entries to be checked.
     */
    threatEntries?: Schema$ThreatEntry[];
    /**
     * The entry types to be checked.
     */
    threatEntryTypes?: string[] | null;
    /**
     * The threat types to be checked.
     */
    threatTypes?: string[] | null;
  }
  /**
   * Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.
   */
  export interface Schema$ThreatListDescriptor {
    /**
     * The platform type targeted by the list's entries.
     */
    platformType?: string | null;
    /**
     * The entry types contained in the list.
     */
    threatEntryType?: string | null;
    /**
     * The threat type posed by the list's entries.
     */
    threatType?: string | null;
  }
  /**
   * A match when checking a threat entry in the Safe Browsing threat lists.
   */
  export interface Schema$ThreatMatch {
    /**
     * The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives.
     */
    cacheDuration?: string | null;
    /**
     * The platform type matching this threat.
     */
    platformType?: string | null;
    /**
     * The threat matching this threat.
     */
    threat?: Schema$ThreatEntry;
    /**
     * Optional metadata associated with this threat.
     */
    threatEntryMetadata?: Schema$ThreatEntryMetadata;
    /**
     * The threat entry type matching this threat.
     */
    threatEntryType?: string | null;
    /**
     * The threat type matching this threat.
     */
    threatType?: string | null;
  }
  /**
   * A single resource related to a threat hit.
   */
  export interface Schema$ThreatSource {
    /**
     * Referrer of the resource. Only set if the referrer is available.
     */
    referrer?: string | null;
    /**
     * The remote IP of the resource in ASCII format. Either IPv4 or IPv6.
     */
    remoteIp?: string | null;
    /**
     * The type of source reported.
     */
    type?: string | null;
    /**
     * The URL of the resource.
     */
    url?: string | null;
  }
  /**
   * Details about the user that encountered the threat.
   */
  export interface Schema$UserInfo {
    /**
     * The UN M.49 region code associated with the user's location.
     */
    regionCode?: string | null;
    /**
     * Unique user identifier defined by the client.
     */
    userId?: string | null;
  }

  export class Resource$Encodedfullhashes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.encodedFullHashes.get({
     *     // A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
     *     clientId: 'placeholder-value',
     *     // The version of the client implementation.
     *     clientVersion: 'placeholder-value',
     *     // A serialized FindFullHashesRequest proto.
     *     encodedRequest: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "matches": [],
     *   //   "minimumWaitDuration": "my_minimumWaitDuration",
     *   //   "negativeCacheDuration": "my_negativeCacheDuration"
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
      params: Params$Resource$Encodedfullhashes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Encodedfullhashes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FindFullHashesResponse>;
    get(
      params: Params$Resource$Encodedfullhashes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Encodedfullhashes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindFullHashesResponse>,
      callback: BodyResponseCallback<Schema$FindFullHashesResponse>
    ): void;
    get(
      params: Params$Resource$Encodedfullhashes$Get,
      callback: BodyResponseCallback<Schema$FindFullHashesResponse>
    ): void;
    get(callback: BodyResponseCallback<Schema$FindFullHashesResponse>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Encodedfullhashes$Get
        | BodyResponseCallback<Schema$FindFullHashesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindFullHashesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindFullHashesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FindFullHashesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Encodedfullhashes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Encodedfullhashes$Get;
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
            url: (rootUrl + '/v4/encodedFullHashes/{encodedRequest}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['encodedRequest'],
        pathParams: ['encodedRequest'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FindFullHashesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindFullHashesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Encodedfullhashes$Get
    extends StandardParameters {
    /**
     * A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
     */
    clientId?: string;
    /**
     * The version of the client implementation.
     */
    clientVersion?: string;
    /**
     * A serialized FindFullHashesRequest proto.
     */
    encodedRequest?: string;
  }

  export class Resource$Encodedupdates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.encodedUpdates.get({
     *     // A client ID that uniquely identifies the client implementation of the Safe Browsing API.
     *     clientId: 'placeholder-value',
     *     // The version of the client implementation.
     *     clientVersion: 'placeholder-value',
     *     // A serialized FetchThreatListUpdatesRequest proto.
     *     encodedRequest: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "listUpdateResponses": [],
     *   //   "minimumWaitDuration": "my_minimumWaitDuration"
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
      params: Params$Resource$Encodedupdates$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Encodedupdates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchThreatListUpdatesResponse>;
    get(
      params: Params$Resource$Encodedupdates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Encodedupdates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>,
      callback: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
    ): void;
    get(
      params: Params$Resource$Encodedupdates$Get,
      callback: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Encodedupdates$Get
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchThreatListUpdatesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Encodedupdates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Encodedupdates$Get;
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
            url: (rootUrl + '/v4/encodedUpdates/{encodedRequest}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['encodedRequest'],
        pathParams: ['encodedRequest'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Encodedupdates$Get
    extends StandardParameters {
    /**
     * A client ID that uniquely identifies the client implementation of the Safe Browsing API.
     */
    clientId?: string;
    /**
     * The version of the client implementation.
     */
    clientVersion?: string;
    /**
     * A serialized FetchThreatListUpdatesRequest proto.
     */
    encodedRequest?: string;
  }

  export class Resource$Fullhashes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finds the full hashes that match the requested hash prefixes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.fullHashes.find({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiClient": {},
     *       //   "client": {},
     *       //   "clientStates": [],
     *       //   "threatInfo": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "matches": [],
     *   //   "minimumWaitDuration": "my_minimumWaitDuration",
     *   //   "negativeCacheDuration": "my_negativeCacheDuration"
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
    find(
      params: Params$Resource$Fullhashes$Find,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    find(
      params?: Params$Resource$Fullhashes$Find,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FindFullHashesResponse>;
    find(
      params: Params$Resource$Fullhashes$Find,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    find(
      params: Params$Resource$Fullhashes$Find,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindFullHashesResponse>,
      callback: BodyResponseCallback<Schema$FindFullHashesResponse>
    ): void;
    find(
      params: Params$Resource$Fullhashes$Find,
      callback: BodyResponseCallback<Schema$FindFullHashesResponse>
    ): void;
    find(callback: BodyResponseCallback<Schema$FindFullHashesResponse>): void;
    find(
      paramsOrCallback?:
        | Params$Resource$Fullhashes$Find
        | BodyResponseCallback<Schema$FindFullHashesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindFullHashesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindFullHashesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FindFullHashesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Fullhashes$Find;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Fullhashes$Find;
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
            url: (rootUrl + '/v4/fullHashes:find').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FindFullHashesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindFullHashesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Fullhashes$Find extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$FindFullHashesRequest;
  }

  export class Resource$Threathits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.threatHits.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientInfo": {},
     *       //   "entry": {},
     *       //   "platformType": "my_platformType",
     *       //   "resources": [],
     *       //   "threatType": "my_threatType",
     *       //   "userInfo": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    create(
      params: Params$Resource$Threathits$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Threathits$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    create(
      params: Params$Resource$Threathits$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Threathits$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    create(
      params: Params$Resource$Threathits$Create,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    create(callback: BodyResponseCallback<Schema$Empty>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Threathits$Create
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Threathits$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Threathits$Create;
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
            url: (rootUrl + '/v4/threatHits').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Threathits$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ThreatHit;
  }

  export class Resource$Threatlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the Safe Browsing threat lists available for download.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.threatLists.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "threatLists": []
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
      params: Params$Resource$Threatlists$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Threatlists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListThreatListsResponse>;
    list(
      params: Params$Resource$Threatlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Threatlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListThreatListsResponse>,
      callback: BodyResponseCallback<Schema$ListThreatListsResponse>
    ): void;
    list(
      params: Params$Resource$Threatlists$List,
      callback: BodyResponseCallback<Schema$ListThreatListsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListThreatListsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Threatlists$List
        | BodyResponseCallback<Schema$ListThreatListsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListThreatListsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListThreatListsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListThreatListsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Threatlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Threatlists$List;
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
            url: (rootUrl + '/v4/threatLists').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListThreatListsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListThreatListsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Threatlists$List
    extends StandardParameters {}

  export class Resource$Threatlistupdates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches the most recent threat list updates. A client can request updates for multiple lists at once.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.threatListUpdates.fetch({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "client": {},
     *       //   "listUpdateRequests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "listUpdateResponses": [],
     *   //   "minimumWaitDuration": "my_minimumWaitDuration"
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
    fetch(
      params: Params$Resource$Threatlistupdates$Fetch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetch(
      params?: Params$Resource$Threatlistupdates$Fetch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchThreatListUpdatesResponse>;
    fetch(
      params: Params$Resource$Threatlistupdates$Fetch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetch(
      params: Params$Resource$Threatlistupdates$Fetch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>,
      callback: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
    ): void;
    fetch(
      params: Params$Resource$Threatlistupdates$Fetch,
      callback: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
    ): void;
    fetch(
      callback: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
    ): void;
    fetch(
      paramsOrCallback?:
        | Params$Resource$Threatlistupdates$Fetch
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchThreatListUpdatesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Threatlistupdates$Fetch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Threatlistupdates$Fetch;
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
            url: (rootUrl + '/v4/threatListUpdates:fetch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Threatlistupdates$Fetch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchThreatListUpdatesRequest;
  }

  export class Resource$Threatmatches {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finds the threat entries that match the Safe Browsing lists.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/safebrowsing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const safebrowsing = google.safebrowsing('v4');
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
     *   const res = await safebrowsing.threatMatches.find({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "client": {},
     *       //   "threatInfo": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "matches": []
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
    find(
      params: Params$Resource$Threatmatches$Find,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    find(
      params?: Params$Resource$Threatmatches$Find,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FindThreatMatchesResponse>;
    find(
      params: Params$Resource$Threatmatches$Find,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    find(
      params: Params$Resource$Threatmatches$Find,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindThreatMatchesResponse>,
      callback: BodyResponseCallback<Schema$FindThreatMatchesResponse>
    ): void;
    find(
      params: Params$Resource$Threatmatches$Find,
      callback: BodyResponseCallback<Schema$FindThreatMatchesResponse>
    ): void;
    find(
      callback: BodyResponseCallback<Schema$FindThreatMatchesResponse>
    ): void;
    find(
      paramsOrCallback?:
        | Params$Resource$Threatmatches$Find
        | BodyResponseCallback<Schema$FindThreatMatchesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindThreatMatchesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindThreatMatchesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FindThreatMatchesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Threatmatches$Find;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Threatmatches$Find;
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
            url: (rootUrl + '/v4/threatMatches:find').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FindThreatMatchesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindThreatMatchesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Threatmatches$Find
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$FindThreatMatchesRequest;
  }
}
