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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';

export namespace dns_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
  }

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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Cloud DNS API
   *
   * Configures and serves authoritative DNS records.
   *
   * @example
   * const {google} = require('googleapis');
   * const dns = google.dns('v1beta2');
   *
   * @namespace dns
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Dns
   */
  export class Dns {
    context: APIRequestContext;
    changes: Resource$Changes;
    dnsKeys: Resource$Dnskeys;
    managedZoneOperations: Resource$Managedzoneoperations;
    managedZones: Resource$Managedzones;
    policies: Resource$Policies;
    projects: Resource$Projects;
    resourceRecordSets: Resource$Resourcerecordsets;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.changes = new Resource$Changes(this.context);
      this.dnsKeys = new Resource$Dnskeys(this.context);
      this.managedZoneOperations = new Resource$Managedzoneoperations(
        this.context
      );
      this.managedZones = new Resource$Managedzones(this.context);
      this.policies = new Resource$Policies(this.context);
      this.projects = new Resource$Projects(this.context);
      this.resourceRecordSets = new Resource$Resourcerecordsets(this.context);
    }
  }

  export interface Schema$Change {
    additions?: Schema$ResourceRecordSet[];
    deletions?: Schema$ResourceRecordSet[];
    id?: string | null;
    isServing?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#change&quot;.
     */
    kind?: string | null;
    startTime?: string | null;
    status?: string | null;
  }
  export interface Schema$ChangesListResponse {
    changes?: Schema$Change[];
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    nextPageToken?: string | null;
  }
  export interface Schema$DnsKey {
    algorithm?: string | null;
    creationTime?: string | null;
    description?: string | null;
    digests?: Schema$DnsKeyDigest[];
    id?: string | null;
    isActive?: boolean | null;
    keyLength?: number | null;
    keyTag?: number | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#dnsKey&quot;.
     */
    kind?: string | null;
    publicKey?: string | null;
    type?: string | null;
  }
  export interface Schema$DnsKeyDigest {
    digest?: string | null;
    type?: string | null;
  }
  export interface Schema$DnsKeysListResponse {
    dnsKeys?: Schema$DnsKey[];
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    nextPageToken?: string | null;
  }
  export interface Schema$DnsKeySpec {
    algorithm?: string | null;
    keyLength?: number | null;
    keyType?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#dnsKeySpec&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$ManagedZone {
    creationTime?: string | null;
    description?: string | null;
    dnsName?: string | null;
    dnssecConfig?: Schema$ManagedZoneDnsSecConfig;
    forwardingConfig?: Schema$ManagedZoneForwardingConfig;
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZone&quot;.
     */
    kind?: string | null;
    labels?: {[key: string]: string} | null;
    name?: string | null;
    nameServers?: string[] | null;
    nameServerSet?: string | null;
    peeringConfig?: Schema$ManagedZonePeeringConfig;
    privateVisibilityConfig?: Schema$ManagedZonePrivateVisibilityConfig;
    reverseLookupConfig?: Schema$ManagedZoneReverseLookupConfig;
    serviceDirectoryConfig?: Schema$ManagedZoneServiceDirectoryConfig;
    visibility?: string | null;
  }
  export interface Schema$ManagedZoneDnsSecConfig {
    defaultKeySpecs?: Schema$DnsKeySpec[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZoneDnsSecConfig&quot;.
     */
    kind?: string | null;
    nonExistence?: string | null;
    state?: string | null;
  }
  export interface Schema$ManagedZoneForwardingConfig {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZoneForwardingConfig&quot;.
     */
    kind?: string | null;
    targetNameServers?: Schema$ManagedZoneForwardingConfigNameServerTarget[];
  }
  export interface Schema$ManagedZoneForwardingConfigNameServerTarget {
    forwardingPath?: string | null;
    ipv4Address?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZoneForwardingConfigNameServerTarget&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$ManagedZoneOperationsListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    nextPageToken?: string | null;
    operations?: Schema$Operation[];
  }
  export interface Schema$ManagedZonePeeringConfig {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZonePeeringConfig&quot;.
     */
    kind?: string | null;
    targetNetwork?: Schema$ManagedZonePeeringConfigTargetNetwork;
  }
  export interface Schema$ManagedZonePeeringConfigTargetNetwork {
    deactivateTime?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZonePeeringConfigTargetNetwork&quot;.
     */
    kind?: string | null;
    networkUrl?: string | null;
  }
  export interface Schema$ManagedZonePrivateVisibilityConfig {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZonePrivateVisibilityConfig&quot;.
     */
    kind?: string | null;
    networks?: Schema$ManagedZonePrivateVisibilityConfigNetwork[];
  }
  export interface Schema$ManagedZonePrivateVisibilityConfigNetwork {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZonePrivateVisibilityConfigNetwork&quot;.
     */
    kind?: string | null;
    networkUrl?: string | null;
  }
  export interface Schema$ManagedZoneReverseLookupConfig {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZoneReverseLookupConfig&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$ManagedZoneServiceDirectoryConfig {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZoneServiceDirectoryConfig&quot;.
     */
    kind?: string | null;
    namespace?: Schema$ManagedZoneServiceDirectoryConfigNamespace;
  }
  export interface Schema$ManagedZoneServiceDirectoryConfigNamespace {
    deletionTime?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#managedZoneServiceDirectoryConfigNamespace&quot;.
     */
    kind?: string | null;
    namespaceUrl?: string | null;
  }
  export interface Schema$ManagedZonesListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    managedZones?: Schema$ManagedZone[];
    nextPageToken?: string | null;
  }
  export interface Schema$Operation {
    dnsKeyContext?: Schema$OperationDnsKeyContext;
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#operation&quot;.
     */
    kind?: string | null;
    startTime?: string | null;
    status?: string | null;
    type?: string | null;
    user?: string | null;
    zoneContext?: Schema$OperationManagedZoneContext;
  }
  export interface Schema$OperationDnsKeyContext {
    newValue?: Schema$DnsKey;
    oldValue?: Schema$DnsKey;
  }
  export interface Schema$OperationManagedZoneContext {
    newValue?: Schema$ManagedZone;
    oldValue?: Schema$ManagedZone;
  }
  export interface Schema$PoliciesListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    nextPageToken?: string | null;
    policies?: Schema$Policy[];
  }
  export interface Schema$PoliciesPatchResponse {
    header?: Schema$ResponseHeader;
    policy?: Schema$Policy;
  }
  export interface Schema$PoliciesUpdateResponse {
    header?: Schema$ResponseHeader;
    policy?: Schema$Policy;
  }
  export interface Schema$Policy {
    alternativeNameServerConfig?: Schema$PolicyAlternativeNameServerConfig;
    description?: string | null;
    enableInboundForwarding?: boolean | null;
    enableLogging?: boolean | null;
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#policy&quot;.
     */
    kind?: string | null;
    name?: string | null;
    networks?: Schema$PolicyNetwork[];
  }
  export interface Schema$PolicyAlternativeNameServerConfig {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#policyAlternativeNameServerConfig&quot;.
     */
    kind?: string | null;
    targetNameServers?: Schema$PolicyAlternativeNameServerConfigTargetNameServer[];
  }
  export interface Schema$PolicyAlternativeNameServerConfigTargetNameServer {
    forwardingPath?: string | null;
    ipv4Address?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#policyAlternativeNameServerConfigTargetNameServer&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$PolicyNetwork {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#policyNetwork&quot;.
     */
    kind?: string | null;
    networkUrl?: string | null;
  }
  export interface Schema$Project {
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#project&quot;.
     */
    kind?: string | null;
    number?: string | null;
    quota?: Schema$Quota;
  }
  export interface Schema$Quota {
    dnsKeysPerManagedZone?: number | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#quota&quot;.
     */
    kind?: string | null;
    managedZones?: number | null;
    managedZonesPerNetwork?: number | null;
    networksPerManagedZone?: number | null;
    networksPerPolicy?: number | null;
    policies?: number | null;
    resourceRecordsPerRrset?: number | null;
    rrsetAdditionsPerChange?: number | null;
    rrsetDeletionsPerChange?: number | null;
    rrsetsPerManagedZone?: number | null;
    targetNameServersPerManagedZone?: number | null;
    targetNameServersPerPolicy?: number | null;
    totalRrdataSizePerChange?: number | null;
    whitelistedKeySpecs?: Schema$DnsKeySpec[];
  }
  export interface Schema$ResourceRecordSet {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dns#resourceRecordSet&quot;.
     */
    kind?: string | null;
    name?: string | null;
    rrdatas?: string[] | null;
    signatureRrdatas?: string[] | null;
    ttl?: number | null;
    type?: string | null;
  }
  export interface Schema$ResourceRecordSetsListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    nextPageToken?: string | null;
    rrsets?: Schema$ResourceRecordSet[];
  }
  export interface Schema$ResponseHeader {
    operationId?: string | null;
  }

  export class Resource$Changes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.changes.create
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.changes.create({
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additions": [],
     *       //   "deletions": [],
     *       //   "id": "my_id",
     *       //   "isServing": false,
     *       //   "kind": "my_kind",
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additions": [],
     *   //   "deletions": [],
     *   //   "id": "my_id",
     *   //   "isServing": false,
     *   //   "kind": "my_kind",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.changes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {().Change} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Changes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Change>;
    create(
      params: Params$Resource$Changes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    create(
      params: Params$Resource$Changes$Create,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    create(callback: BodyResponseCallback<Schema$Change>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Changes$Create
        | BodyResponseCallback<Schema$Change>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>
    ): void | GaxiosPromise<Schema$Change> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Change>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Change>(parameters);
      }
    }

    /**
     * dns.changes.get
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.changes.get({
     *     changeId: 'placeholder-value',
     *
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additions": [],
     *   //   "deletions": [],
     *   //   "id": "my_id",
     *   //   "isServing": false,
     *   //   "kind": "my_kind",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.changes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.changeId
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Changes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Change>;
    get(
      params: Params$Resource$Changes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    get(
      params: Params$Resource$Changes$Get,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    get(callback: BodyResponseCallback<Schema$Change>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Changes$Get
        | BodyResponseCallback<Schema$Change>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>
    ): void | GaxiosPromise<Schema$Change> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes/{changeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'changeId'],
        pathParams: ['changeId', 'managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Change>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Change>(parameters);
      }
    }

    /**
     * dns.changes.list
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.changes.list({
     *     managedZone: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     sortBy: 'placeholder-value',
     *
     *     sortOrder: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "changes": [],
     *   //   "header": {},
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.changes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string} params.project
     * @param {string=} params.sortBy
     * @param {string=} params.sortOrder
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Changes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChangesListResponse>;
    list(
      params: Params$Resource$Changes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChangesListResponse>,
      callback: BodyResponseCallback<Schema$ChangesListResponse>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      callback: BodyResponseCallback<Schema$ChangesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChangesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Changes$List
        | BodyResponseCallback<Schema$ChangesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChangesListResponse>,
      callback?: BodyResponseCallback<Schema$ChangesListResponse>
    ): void | GaxiosPromise<Schema$ChangesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChangesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChangesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Changes$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Change;
  }
  export interface Params$Resource$Changes$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    changeId?: string;
    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Changes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    project?: string;
    /**
     *
     */
    sortBy?: string;
    /**
     *
     */
    sortOrder?: string;
  }

  export class Resource$Dnskeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.dnsKeys.get
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.dnsKeys.get({
     *     clientOperationId: 'placeholder-value',
     *
     *     digestType: 'placeholder-value',
     *
     *     dnsKeyId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "algorithm": "my_algorithm",
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "digests": [],
     *   //   "id": "my_id",
     *   //   "isActive": false,
     *   //   "keyLength": 0,
     *   //   "keyTag": 0,
     *   //   "kind": "my_kind",
     *   //   "publicKey": "my_publicKey",
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.dnsKeys.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string=} params.digestType
     * @param {string} params.dnsKeyId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Dnskeys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DnsKey>;
    get(
      params: Params$Resource$Dnskeys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DnsKey>,
      callback: BodyResponseCallback<Schema$DnsKey>
    ): void;
    get(
      params: Params$Resource$Dnskeys$Get,
      callback: BodyResponseCallback<Schema$DnsKey>
    ): void;
    get(callback: BodyResponseCallback<Schema$DnsKey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Dnskeys$Get
        | BodyResponseCallback<Schema$DnsKey>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$DnsKey>,
      callback?: BodyResponseCallback<Schema$DnsKey>
    ): void | GaxiosPromise<Schema$DnsKey> {
      let params = (paramsOrCallback || {}) as Params$Resource$Dnskeys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dnskeys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'dnsKeyId'],
        pathParams: ['dnsKeyId', 'managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DnsKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DnsKey>(parameters);
      }
    }

    /**
     * dns.dnsKeys.list
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.dnsKeys.list({
     *     digestType: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dnsKeys": [],
     *   //   "header": {},
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.dnsKeys.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.digestType
     * @param {string} params.managedZone
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Dnskeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DnsKeysListResponse>;
    list(
      params: Params$Resource$Dnskeys$List,
      options: MethodOptions | BodyResponseCallback<Schema$DnsKeysListResponse>,
      callback: BodyResponseCallback<Schema$DnsKeysListResponse>
    ): void;
    list(
      params: Params$Resource$Dnskeys$List,
      callback: BodyResponseCallback<Schema$DnsKeysListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DnsKeysListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Dnskeys$List
        | BodyResponseCallback<Schema$DnsKeysListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DnsKeysListResponse>,
      callback?: BodyResponseCallback<Schema$DnsKeysListResponse>
    ): void | GaxiosPromise<Schema$DnsKeysListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Dnskeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dnskeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/dnsKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DnsKeysListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DnsKeysListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Dnskeys$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    digestType?: string;
    /**
     *
     */
    dnsKeyId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Dnskeys$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    digestType?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    project?: string;
  }

  export class Resource$Managedzoneoperations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.managedZoneOperations.get
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZoneOperations.get({
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     operation: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dnsKeyContext": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "type": "my_type",
     *   //   "user": "my_user",
     *   //   "zoneContext": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZoneOperations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.operation
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Managedzoneoperations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Managedzoneoperations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Managedzoneoperations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Managedzoneoperations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzoneoperations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzoneoperations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations/{operation}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'operation'],
        pathParams: ['managedZone', 'operation', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dns.managedZoneOperations.list
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZoneOperations.list({
     *     managedZone: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     sortBy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "header": {},
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZoneOperations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string} params.project
     * @param {string=} params.sortBy
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Managedzoneoperations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZoneOperationsListResponse>;
    list(
      params: Params$Resource$Managedzoneoperations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>,
      callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void;
    list(
      params: Params$Resource$Managedzoneoperations$List,
      callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Managedzoneoperations$List
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>,
      callback?: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void | GaxiosPromise<Schema$ManagedZoneOperationsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzoneoperations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzoneoperations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZoneOperationsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ManagedZoneOperationsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Managedzoneoperations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    operation?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Managedzoneoperations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    project?: string;
    /**
     *
     */
    sortBy?: string;
  }

  export class Resource$Managedzones {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.managedZones.create
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZones.create({
     *     clientOperationId: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "description": "my_description",
     *       //   "dnsName": "my_dnsName",
     *       //   "dnssecConfig": {},
     *       //   "forwardingConfig": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "nameServerSet": "my_nameServerSet",
     *       //   "nameServers": [],
     *       //   "peeringConfig": {},
     *       //   "privateVisibilityConfig": {},
     *       //   "reverseLookupConfig": {},
     *       //   "serviceDirectoryConfig": {},
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "dnsName": "my_dnsName",
     *   //   "dnssecConfig": {},
     *   //   "forwardingConfig": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "nameServerSet": "my_nameServerSet",
     *   //   "nameServers": [],
     *   //   "peeringConfig": {},
     *   //   "privateVisibilityConfig": {},
     *   //   "reverseLookupConfig": {},
     *   //   "serviceDirectoryConfig": {},
     *   //   "visibility": "my_visibility"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZones.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.project
     * @param {().ManagedZone} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Managedzones$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZone>;
    create(
      params: Params$Resource$Managedzones$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    create(
      params: Params$Resource$Managedzones$Create,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    create(callback: BodyResponseCallback<Schema$ManagedZone>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Create
        | BodyResponseCallback<Schema$ManagedZone>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZone>,
      callback?: BodyResponseCallback<Schema$ManagedZone>
    ): void | GaxiosPromise<Schema$ManagedZone> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/managedZones'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZone>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ManagedZone>(parameters);
      }
    }

    /**
     * dns.managedZones.delete
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZones.delete({
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZones.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Managedzones$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Managedzones$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Managedzones$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dns.managedZones.get
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZones.get({
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "dnsName": "my_dnsName",
     *   //   "dnssecConfig": {},
     *   //   "forwardingConfig": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "nameServerSet": "my_nameServerSet",
     *   //   "nameServers": [],
     *   //   "peeringConfig": {},
     *   //   "privateVisibilityConfig": {},
     *   //   "reverseLookupConfig": {},
     *   //   "serviceDirectoryConfig": {},
     *   //   "visibility": "my_visibility"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZones.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Managedzones$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZone>;
    get(
      params: Params$Resource$Managedzones$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    get(
      params: Params$Resource$Managedzones$Get,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    get(callback: BodyResponseCallback<Schema$ManagedZone>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Get
        | BodyResponseCallback<Schema$ManagedZone>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZone>,
      callback?: BodyResponseCallback<Schema$ManagedZone>
    ): void | GaxiosPromise<Schema$ManagedZone> {
      let params = (paramsOrCallback || {}) as Params$Resource$Managedzones$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZone>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ManagedZone>(parameters);
      }
    }

    /**
     * dns.managedZones.list
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZones.list({
     *     dnsName: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "header": {},
     *   //   "kind": "my_kind",
     *   //   "managedZones": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZones.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dnsName
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Managedzones$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZonesListResponse>;
    list(
      params: Params$Resource$Managedzones$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZonesListResponse>,
      callback: BodyResponseCallback<Schema$ManagedZonesListResponse>
    ): void;
    list(
      params: Params$Resource$Managedzones$List,
      callback: BodyResponseCallback<Schema$ManagedZonesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ManagedZonesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Managedzones$List
        | BodyResponseCallback<Schema$ManagedZonesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZonesListResponse>,
      callback?: BodyResponseCallback<Schema$ManagedZonesListResponse>
    ): void | GaxiosPromise<Schema$ManagedZonesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/managedZones'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZonesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ManagedZonesListResponse>(parameters);
      }
    }

    /**
     * dns.managedZones.patch
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZones.patch({
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "description": "my_description",
     *       //   "dnsName": "my_dnsName",
     *       //   "dnssecConfig": {},
     *       //   "forwardingConfig": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "nameServerSet": "my_nameServerSet",
     *       //   "nameServers": [],
     *       //   "peeringConfig": {},
     *       //   "privateVisibilityConfig": {},
     *       //   "reverseLookupConfig": {},
     *       //   "serviceDirectoryConfig": {},
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dnsKeyContext": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "type": "my_type",
     *   //   "user": "my_user",
     *   //   "zoneContext": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZones.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {().ManagedZone} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Managedzones$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Managedzones$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Managedzones$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dns.managedZones.update
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.managedZones.update({
     *     clientOperationId: 'placeholder-value',
     *
     *     managedZone: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "description": "my_description",
     *       //   "dnsName": "my_dnsName",
     *       //   "dnssecConfig": {},
     *       //   "forwardingConfig": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "nameServerSet": "my_nameServerSet",
     *       //   "nameServers": [],
     *       //   "peeringConfig": {},
     *       //   "privateVisibilityConfig": {},
     *       //   "reverseLookupConfig": {},
     *       //   "serviceDirectoryConfig": {},
     *       //   "visibility": "my_visibility"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dnsKeyContext": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "type": "my_type",
     *   //   "user": "my_user",
     *   //   "zoneContext": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.managedZones.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.managedZone
     * @param {string} params.project
     * @param {().ManagedZone} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Managedzones$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Managedzones$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Managedzones$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Managedzones$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }
  export interface Params$Resource$Managedzones$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Managedzones$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Managedzones$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    dnsName?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Managedzones$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }
  export interface Params$Resource$Managedzones$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }

  export class Resource$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.policies.create
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.policies.create({
     *     clientOperationId: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternativeNameServerConfig": {},
     *       //   "description": "my_description",
     *       //   "enableInboundForwarding": false,
     *       //   "enableLogging": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "networks": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternativeNameServerConfig": {},
     *   //   "description": "my_description",
     *   //   "enableInboundForwarding": false,
     *   //   "enableLogging": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "networks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.policies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.project
     * @param {().Policy} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Policies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    create(
      params: Params$Resource$Policies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    create(
      params: Params$Resource$Policies$Create,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    create(callback: BodyResponseCallback<Schema$Policy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Policies$Create
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/projects/{project}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * dns.policies.delete
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.policies.delete({
     *     clientOperationId: 'placeholder-value',
     *
     *     policy: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.policies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.policy
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Policies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Policies$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dns.policies.get
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.policies.get({
     *     clientOperationId: 'placeholder-value',
     *
     *     policy: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternativeNameServerConfig": {},
     *   //   "description": "my_description",
     *   //   "enableInboundForwarding": false,
     *   //   "enableLogging": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "networks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.policies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.policy
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    get(
      params: Params$Resource$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(callback: BodyResponseCallback<Schema$Policy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Policies$Get
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * dns.policies.list
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.policies.list({
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "header": {},
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policies": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.policies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoliciesListResponse>;
    list(
      params: Params$Resource$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesListResponse>,
      callback: BodyResponseCallback<Schema$PoliciesListResponse>
    ): void;
    list(
      params: Params$Resource$Policies$List,
      callback: BodyResponseCallback<Schema$PoliciesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PoliciesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Policies$List
        | BodyResponseCallback<Schema$PoliciesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesListResponse>,
      callback?: BodyResponseCallback<Schema$PoliciesListResponse>
    ): void | GaxiosPromise<Schema$PoliciesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/projects/{project}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoliciesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PoliciesListResponse>(parameters);
      }
    }

    /**
     * dns.policies.patch
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.policies.patch({
     *     clientOperationId: 'placeholder-value',
     *
     *     policy: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternativeNameServerConfig": {},
     *       //   "description": "my_description",
     *       //   "enableInboundForwarding": false,
     *       //   "enableLogging": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "networks": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "header": {},
     *   //   "policy": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.policies.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.policy
     * @param {string} params.project
     * @param {().Policy} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoliciesPatchResponse>;
    patch(
      params: Params$Resource$Policies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesPatchResponse>,
      callback: BodyResponseCallback<Schema$PoliciesPatchResponse>
    ): void;
    patch(
      params: Params$Resource$Policies$Patch,
      callback: BodyResponseCallback<Schema$PoliciesPatchResponse>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PoliciesPatchResponse>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Policies$Patch
        | BodyResponseCallback<Schema$PoliciesPatchResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesPatchResponse>,
      callback?: BodyResponseCallback<Schema$PoliciesPatchResponse>
    ): void | GaxiosPromise<Schema$PoliciesPatchResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoliciesPatchResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PoliciesPatchResponse>(parameters);
      }
    }

    /**
     * dns.policies.update
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.policies.update({
     *     clientOperationId: 'placeholder-value',
     *
     *     policy: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternativeNameServerConfig": {},
     *       //   "description": "my_description",
     *       //   "enableInboundForwarding": false,
     *       //   "enableLogging": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "networks": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "header": {},
     *   //   "policy": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.policies.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.policy
     * @param {string} params.project
     * @param {().Policy} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Policies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoliciesUpdateResponse>;
    update(
      params: Params$Resource$Policies$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>,
      callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>
    ): void;
    update(callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Policies$Update
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>,
      callback?: BodyResponseCallback<Schema$PoliciesUpdateResponse>
    ): void | GaxiosPromise<Schema$PoliciesUpdateResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoliciesUpdateResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PoliciesUpdateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Policies$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Policies$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    policy?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Policies$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    policy?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Policies$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    project?: string;
  }
  export interface Params$Resource$Policies$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    policy?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Policies$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    policy?: string;
    /**
     *
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.projects.get
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.projects.get({
     *     clientOperationId: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "number": "my_number",
     *   //   "quota": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.projects.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId
     * @param {string} params.project
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    get(
      params: Params$Resource$Projects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(callback: BodyResponseCallback<Schema$Project>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Get
        | BodyResponseCallback<Schema$Project>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>
    ): void | GaxiosPromise<Schema$Project> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/projects/{project}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    clientOperationId?: string;
    /**
     *
     */
    project?: string;
  }

  export class Resource$Resourcerecordsets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dns.resourceRecordSets.list
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dns.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dns = google.dns('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readonly',
     *       'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dns.resourceRecordSets.list({
     *     managedZone: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     name: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     project: 'placeholder-value',
     *
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "header": {},
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rrsets": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dns.resourceRecordSets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone
     * @param {integer=} params.maxResults
     * @param {string=} params.name
     * @param {string=} params.pageToken
     * @param {string} params.project
     * @param {string=} params.type
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Resourcerecordsets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResourceRecordSetsListResponse>;
    list(
      params: Params$Resource$Resourcerecordsets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>,
      callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void;
    list(
      params: Params$Resource$Resourcerecordsets$List,
      callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Resourcerecordsets$List
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>,
      callback?: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void | GaxiosPromise<Schema$ResourceRecordSetsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resourcerecordsets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resourcerecordsets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResourceRecordSetsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ResourceRecordSetsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Resourcerecordsets$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    managedZone?: string;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    name?: string;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    project?: string;
    /**
     *
     */
    type?: string;
  }
}
