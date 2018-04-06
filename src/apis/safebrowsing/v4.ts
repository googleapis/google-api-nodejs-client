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
 * Safe Browsing API
 *
 * Enables client applications to check web resources (most commonly URLs)
 * against Google-generated lists of unsafe web resources.
 *
 * @example
 * const google = require('googleapis');
 * const safebrowsing = google.safebrowsing('v4');
 *
 * @namespace safebrowsing
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Safebrowsing
 */
export class Safebrowsing {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  encodedFullHashes: Resource$Encodedfullhashes;
  encodedUpdates: Resource$Encodedupdates;
  fullHashes: Resource$Fullhashes;
  threatHits: Resource$Threathits;
  threatLists: Resource$Threatlists;
  threatListUpdates: Resource$Threatlistupdates;
  threatMatches: Resource$Threatmatches;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.encodedFullHashes = new Resource$Encodedfullhashes(this);
    this.encodedUpdates = new Resource$Encodedupdates(this);
    this.fullHashes = new Resource$Fullhashes(this);
    this.threatHits = new Resource$Threathits(this);
    this.threatLists = new Resource$Threatlists(this);
    this.threatListUpdates = new Resource$Threatlistupdates(this);
    this.threatMatches = new Resource$Threatmatches(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * The expected state of a client&#39;s local database.
 */
export interface Schema$Checksum {
  /**
   * The SHA256 hash of the client state; that is, of the sorted list of all
   * hashes present in the database.
   */
  sha256: string;
}
/**
 * The client metadata associated with Safe Browsing API requests.
 */
export interface Schema$ClientInfo {
  /**
   * A client ID that (hopefully) uniquely identifies the client implementation
   * of the Safe Browsing API.
   */
  clientId: string;
  /**
   * The version of the client implementation.
   */
  clientVersion: string;
}
/**
 * The constraints for this update.
 */
export interface Schema$Constraints {
  /**
   * A client&#39;s physical location, expressed as a ISO 31166-1 alpha-2 region
   * code.
   */
  deviceLocation: string;
  /**
   * Requests the lists for a specific language. Expects ISO 639 alpha-2 format.
   */
  language: string;
  /**
   * Sets the maximum number of entries that the client is willing to have in
   * the local database. This should be a power of 2 between 2**10 and 2**20. If
   * zero, no database size limit is set.
   */
  maxDatabaseEntries: number;
  /**
   * The maximum size in number of entries. The update will not contain more
   * entries than this value.  This should be a power of 2 between 2**10 and
   * 2**20.  If zero, no update size limit is set.
   */
  maxUpdateEntries: number;
  /**
   * Requests the list for a specific geographic location. If not set the server
   * may pick that value based on the user&#39;s IP address. Expects ISO 3166-1
   * alpha-2 format.
   */
  region: string;
  /**
   * The compression types supported by the client.
   */
  supportedCompressions: string[];
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * Describes a Safe Browsing API update request. Clients can request updates for
 * multiple lists in a single request. NOTE: Field index 2 is unused. NEXT: 5
 */
export interface Schema$FetchThreatListUpdatesRequest {
  /**
   * The client metadata.
   */
  client: Schema$ClientInfo;
  /**
   * The requested threat list updates.
   */
  listUpdateRequests: Schema$ListUpdateRequest[];
}
export interface Schema$FetchThreatListUpdatesResponse {
  /**
   * The list updates requested by the clients.
   */
  listUpdateResponses: Schema$ListUpdateResponse[];
  /**
   * The minimum duration the client must wait before issuing any update
   * request. If this field is not set clients may update as soon as they want.
   */
  minimumWaitDuration: string;
}
/**
 * Request to return full hashes matched by the provided hash prefixes.
 */
export interface Schema$FindFullHashesRequest {
  /**
   * Client metadata associated with callers of higher-level APIs built on top
   * of the client&#39;s implementation.
   */
  apiClient: Schema$ClientInfo;
  /**
   * The client metadata.
   */
  client: Schema$ClientInfo;
  /**
   * The current client states for each of the client&#39;s local threat lists.
   */
  clientStates: string[];
  /**
   * The lists and hashes to be checked.
   */
  threatInfo: Schema$ThreatInfo;
}
export interface Schema$FindFullHashesResponse {
  /**
   * The full hashes that matched the requested prefixes.
   */
  matches: Schema$ThreatMatch[];
  /**
   * The minimum duration the client must wait before issuing any find hashes
   * request. If this field is not set, clients can issue a request as soon as
   * they want.
   */
  minimumWaitDuration: string;
  /**
   * For requested entities that did not match the threat list, how long to
   * cache the response.
   */
  negativeCacheDuration: string;
}
/**
 * Request to check entries against lists.
 */
export interface Schema$FindThreatMatchesRequest {
  /**
   * The client metadata.
   */
  client: Schema$ClientInfo;
  /**
   * The lists and entries to be checked for matches.
   */
  threatInfo: Schema$ThreatInfo;
}
export interface Schema$FindThreatMatchesResponse {
  /**
   * The threat list matches.
   */
  matches: Schema$ThreatMatch[];
}
export interface Schema$ListThreatListsResponse {
  /**
   * The lists available for download by the client.
   */
  threatLists: Schema$ThreatListDescriptor[];
}
/**
 * A single list update request.
 */
export interface Schema$ListUpdateRequest {
  /**
   * The constraints associated with this request.
   */
  constraints: Schema$Constraints;
  /**
   * The type of platform at risk by entries present in the list.
   */
  platformType: string;
  /**
   * The current state of the client for the requested list (the encrypted
   * client state that was received from the last successful list update).
   */
  state: string;
  /**
   * The types of entries present in the list.
   */
  threatEntryType: string;
  /**
   * The type of threat posed by entries present in the list.
   */
  threatType: string;
}
/**
 * An update to an individual list.
 */
export interface Schema$ListUpdateResponse {
  /**
   * A set of entries to add to a local threat type&#39;s list. Repeated to
   * allow for a combination of compressed and raw data to be sent in a single
   * response.
   */
  additions: Schema$ThreatEntrySet[];
  /**
   * The expected SHA256 hash of the client state; that is, of the sorted list
   * of all hashes present in the database after applying the provided update.
   * If the client state doesn&#39;t match the expected state, the client must
   * disregard this update and retry later.
   */
  checksum: Schema$Checksum;
  /**
   * The new client state, in encrypted format. Opaque to clients.
   */
  newClientState: string;
  /**
   * The platform type for which data is returned.
   */
  platformType: string;
  /**
   * A set of entries to remove from a local threat type&#39;s list. In
   * practice, this field is empty or contains exactly one ThreatEntrySet.
   */
  removals: Schema$ThreatEntrySet[];
  /**
   * The type of response. This may indicate that an action is required by the
   * client when the response is received.
   */
  responseType: string;
  /**
   * The format of the threats.
   */
  threatEntryType: string;
  /**
   * The threat type for which data is returned.
   */
  threatType: string;
}
/**
 * A single metadata entry.
 */
export interface Schema$MetadataEntry {
  /**
   * The metadata entry key. For JSON requests, the key is base64-encoded.
   */
  key: string;
  /**
   * The metadata entry value. For JSON requests, the value is base64-encoded.
   */
  value: string;
}
/**
 * The uncompressed threat entries in hash format of a particular prefix length.
 * Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4
 * bytes, but some hashes are lengthened if they collide with the hash of a
 * popular URL.  Used for sending ThreatEntrySet to clients that do not support
 * compression, or when sending non-4-byte hashes to clients that do support
 * compression.
 */
export interface Schema$RawHashes {
  /**
   * The number of bytes for each prefix encoded below.  This field can be
   * anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
   */
  prefixSize: number;
  /**
   * The hashes, in binary format, concatenated into one long string. Hashes are
   * sorted in lexicographic order. For JSON API users, hashes are
   * base64-encoded.
   */
  rawHashes: string;
}
/**
 * A set of raw indices to remove from a local list.
 */
export interface Schema$RawIndices {
  /**
   * The indices to remove from a lexicographically-sorted local list.
   */
  indices: number[];
}
/**
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or
 * compressed removal indices.
 */
export interface Schema$RiceDeltaEncoding {
  /**
   * The encoded deltas that are encoded using the Golomb-Rice coder.
   */
  encodedData: string;
  /**
   * The offset of the first entry in the encoded data, or, if only a single
   * integer was encoded, that single integer&#39;s value. If the field is empty
   * or missing, assume zero.
   */
  firstValue: string;
  /**
   * The number of entries that are delta encoded in the encoded data. If only a
   * single integer was encoded, this will be zero and the single value will be
   * stored in `first_value`.
   */
  numEntries: number;
  /**
   * The Golomb-Rice parameter, which is a number between 2 and 28. This field
   * is missing (that is, zero) if `num_entries` is zero.
   */
  riceParameter: number;
}
/**
 * An individual threat; for example, a malicious URL or its hash
 * representation. Only one of these fields should be set.
 */
export interface Schema$ThreatEntry {
  /**
   * The digest of an executable in SHA256 format. The API supports both binary
   * and hex digests. For JSON requests, digests are base64-encoded.
   */
  digest: string;
  /**
   * A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
   * hash. This field is in binary format. For JSON requests, hashes are
   * base64-encoded.
   */
  hash: string;
  /**
   * A URL.
   */
  url: string;
}
/**
 * The metadata associated with a specific threat entry. The client is expected
 * to know the metadata key/value pairs associated with each threat type.
 */
export interface Schema$ThreatEntryMetadata {
  /**
   * The metadata entries.
   */
  entries: Schema$MetadataEntry[];
}
/**
 * A set of threats that should be added or removed from a client&#39;s local
 * database.
 */
export interface Schema$ThreatEntrySet {
  /**
   * The compression type for the entries in this set.
   */
  compressionType: string;
  /**
   * The raw SHA256-formatted entries.
   */
  rawHashes: Schema$RawHashes;
  /**
   * The raw removal indices for a local list.
   */
  rawIndices: Schema$RawIndices;
  /**
   * The encoded 4-byte prefixes of SHA256-formatted entries, using a
   * Golomb-Rice encoding. The hashes are converted to uint32, sorted in
   * ascending order, then delta encoded and stored as encoded_data.
   */
  riceHashes: Schema$RiceDeltaEncoding;
  /**
   * The encoded local, lexicographically-sorted list indices, using a
   * Golomb-Rice encoding. Used for sending compressed removal indices. The
   * removal indices (uint32) are sorted in ascending order, then delta encoded
   * and stored as encoded_data.
   */
  riceIndices: Schema$RiceDeltaEncoding;
}
export interface Schema$ThreatHit {
  /**
   * Client-reported identification.
   */
  clientInfo: Schema$ClientInfo;
  /**
   * The threat entry responsible for the hit. Full hash should be reported for
   * hash-based hits.
   */
  entry: Schema$ThreatEntry;
  /**
   * The platform type reported.
   */
  platformType: string;
  /**
   * The resources related to the threat hit.
   */
  resources: Schema$ThreatSource[];
  /**
   * The threat type reported.
   */
  threatType: string;
  /**
   * Details about the user that encountered the threat.
   */
  userInfo: Schema$UserInfo;
}
/**
 * The information regarding one or more threats that a client submits when
 * checking for matches in threat lists.
 */
export interface Schema$ThreatInfo {
  /**
   * The platform types to be checked.
   */
  platformTypes: string[];
  /**
   * The threat entries to be checked.
   */
  threatEntries: Schema$ThreatEntry[];
  /**
   * The entry types to be checked.
   */
  threatEntryTypes: string[];
  /**
   * The threat types to be checked.
   */
  threatTypes: string[];
}
/**
 * Describes an individual threat list. A list is defined by three parameters:
 * the type of threat posed, the type of platform targeted by the threat, and
 * the type of entries in the list.
 */
export interface Schema$ThreatListDescriptor {
  /**
   * The platform type targeted by the list&#39;s entries.
   */
  platformType: string;
  /**
   * The entry types contained in the list.
   */
  threatEntryType: string;
  /**
   * The threat type posed by the list&#39;s entries.
   */
  threatType: string;
}
/**
 * A match when checking a threat entry in the Safe Browsing threat lists.
 */
export interface Schema$ThreatMatch {
  /**
   * The cache lifetime for the returned match. Clients must not cache this
   * response for more than this duration to avoid false positives.
   */
  cacheDuration: string;
  /**
   * The platform type matching this threat.
   */
  platformType: string;
  /**
   * The threat matching this threat.
   */
  threat: Schema$ThreatEntry;
  /**
   * Optional metadata associated with this threat.
   */
  threatEntryMetadata: Schema$ThreatEntryMetadata;
  /**
   * The threat entry type matching this threat.
   */
  threatEntryType: string;
  /**
   * The threat type matching this threat.
   */
  threatType: string;
}
/**
 * A single resource related to a threat hit.
 */
export interface Schema$ThreatSource {
  /**
   * Referrer of the resource. Only set if the referrer is available.
   */
  referrer: string;
  /**
   * The remote IP of the resource in ASCII format. Either IPv4 or IPv6.
   */
  remoteIp: string;
  /**
   * The type of source reported.
   */
  type: string;
  /**
   * The URL of the resource.
   */
  url: string;
}
/**
 * Details about the user that encountered the threat.
 */
export interface Schema$UserInfo {
  /**
   * The UN M.49 region code associated with the user&#39;s location.
   */
  regionCode: string;
  /**
   * Unique user identifier defined by the client.
   */
  userId: string;
}

export class Resource$Encodedfullhashes {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.encodedFullHashes.get
   * @alias safebrowsing.encodedFullHashes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientId A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
   * @param {string=} params.clientVersion The version of the client implementation.
   * @param {string} params.encodedRequest A serialized FindFullHashesRequest proto.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$FindFullHashesResponse>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FindFullHashesResponse>,
      callback?: BodyResponseCallback<Schema$FindFullHashesResponse>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FindFullHashesResponse>,
      callback?: BodyResponseCallback<Schema$FindFullHashesResponse>):
      void|AxiosPromise<Schema$FindFullHashesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v4/encodedFullHashes/{encodedRequest}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['encodedRequest'],
      pathParams: ['encodedRequest'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FindFullHashesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FindFullHashesResponse>(parameters);
    }
  }
}

export class Resource$Encodedupdates {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.encodedUpdates.get
   * @alias safebrowsing.encodedUpdates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientId A client ID that uniquely identifies the client implementation of the Safe Browsing API.
   * @param {string=} params.clientVersion The version of the client implementation.
   * @param {string} params.encodedRequest A serialized FetchThreatListUpdatesRequest proto.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$FetchThreatListUpdatesResponse>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>,
      callback?: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>):
      void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>,
      callback?: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>):
      void|AxiosPromise<Schema$FetchThreatListUpdatesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v4/encodedUpdates/{encodedRequest}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['encodedRequest'],
      pathParams: ['encodedRequest'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters);
    }
  }
}

export class Resource$Fullhashes {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.fullHashes.find
   * @desc Finds the full hashes that match the requested hash prefixes.
   * @alias safebrowsing.fullHashes.find
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().FindFullHashesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  find(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$FindFullHashesResponse>;
  find(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FindFullHashesResponse>,
      callback?: BodyResponseCallback<Schema$FindFullHashesResponse>): void;
  find(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FindFullHashesResponse>,
      callback?: BodyResponseCallback<Schema$FindFullHashesResponse>):
      void|AxiosPromise<Schema$FindFullHashesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v4/fullHashes:find').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$FindFullHashesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FindFullHashesResponse>(parameters);
    }
  }
}

export class Resource$Threathits {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.threatHits.create
   * @desc Reports a Safe Browsing threat list hit to Google. Only projects with
   * TRUSTED_REPORTER visibility can use this method.
   * @alias safebrowsing.threatHits.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().ThreatHit} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v4/threatHits').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }
}

export class Resource$Threatlists {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.threatLists.list
   * @desc Lists the Safe Browsing threat lists available for download.
   * @alias safebrowsing.threatLists.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListThreatListsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListThreatListsResponse>,
      callback?: BodyResponseCallback<Schema$ListThreatListsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListThreatListsResponse>,
      callback?: BodyResponseCallback<Schema$ListThreatListsResponse>):
      void|AxiosPromise<Schema$ListThreatListsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v4/threatLists').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListThreatListsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListThreatListsResponse>(parameters);
    }
  }
}

export class Resource$Threatlistupdates {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.threatListUpdates.fetch
   * @desc Fetches the most recent threat list updates. A client can request
   * updates for multiple lists at once.
   * @alias safebrowsing.threatListUpdates.fetch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().FetchThreatListUpdatesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  fetch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$FetchThreatListUpdatesResponse>;
  fetch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>,
      callback?: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>):
      void;
  fetch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>,
      callback?: BodyResponseCallback<Schema$FetchThreatListUpdatesResponse>):
      void|AxiosPromise<Schema$FetchThreatListUpdatesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v4/threatListUpdates:fetch')
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
      createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$FetchThreatListUpdatesResponse>(
          parameters);
    }
  }
}

export class Resource$Threatmatches {
  root: Safebrowsing;
  constructor(root: Safebrowsing) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * safebrowsing.threatMatches.find
   * @desc Finds the threat entries that match the Safe Browsing lists.
   * @alias safebrowsing.threatMatches.find
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().FindThreatMatchesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  find(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$FindThreatMatchesResponse>;
  find(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FindThreatMatchesResponse>,
      callback?: BodyResponseCallback<Schema$FindThreatMatchesResponse>): void;
  find(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$FindThreatMatchesResponse>,
      callback?: BodyResponseCallback<Schema$FindThreatMatchesResponse>):
      void|AxiosPromise<Schema$FindThreatMatchesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://safebrowsing.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v4/threatMatches:find')
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
      createAPIRequest<Schema$FindThreatMatchesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FindThreatMatchesResponse>(parameters);
    }
  }
}
