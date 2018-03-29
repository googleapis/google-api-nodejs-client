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
 * Google Cloud DNS API
 *
 * Configures and serves authoritative DNS records.
 *
 * @example
 * const google = require('googleapis');
 * const dns = google.dns('v2beta1');
 *
 * @namespace dns
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dns
 */
export class Dns {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  changes: Resource$Changes;
  dnsKeys: Resource$Dnskeys;
  managedZoneOperations: Resource$Managedzoneoperations;
  managedZones: Resource$Managedzones;
  projects: Resource$Projects;
  resourceRecordSets: Resource$Resourcerecordsets;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.changes = new Resource$Changes(this);
    this.dnsKeys = new Resource$Dnskeys(this);
    this.managedZoneOperations = new Resource$Managedzoneoperations(this);
    this.managedZones = new Resource$Managedzones(this);
    this.projects = new Resource$Projects(this);
    this.resourceRecordSets = new Resource$Resourcerecordsets(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * An atomic update to a collection of ResourceRecordSets.
 */
export interface Schema$Change {
  /**
   * Which ResourceRecordSets to add?
   */
  additions: Schema$ResourceRecordSet[];
  /**
   * Which ResourceRecordSets to remove? Must match existing data exactly.
   */
  deletions: Schema$ResourceRecordSet[];
  /**
   * Unique identifier for the resource; defined by the server (output only).
   */
  id: string;
  /**
   * If the DNS queries for the zone will be served.
   */
  isServing: boolean;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#change&quot;.
   */
  kind: string;
  /**
   * The time that this operation was started by the server (output only). This
   * is in RFC3339 text format.
   */
  startTime: string;
  /**
   * Status of the operation (output only).
   */
  status: string;
}
/**
 * The response to a request to enumerate Changes to a ResourceRecordSets
 * collection.
 */
export interface Schema$ChangesListResponse {
  /**
   * The requested changes.
   */
  changes: Schema$Change[];
  header: Schema$ResponseHeader;
  /**
   * Type of resource.
   */
  kind: string;
  /**
   * The presence of this field indicates that there exist more results
   * following your last page of results in pagination order. To fetch them,
   * make another list request using this value as your pagination token.  In
   * this way you can retrieve the complete contents of even very large
   * collections one page at a time. However, if the contents of the collection
   * change between the first and last paginated list request, the set of all
   * elements returned will be an inconsistent view of the collection. There is
   * no way to retrieve a &quot;snapshot&quot; of collections larger than the
   * maximum page size.
   */
  nextPageToken: string;
}
/**
 * A DNSSEC key pair.
 */
export interface Schema$DnsKey {
  /**
   * String mnemonic specifying the DNSSEC algorithm of this key. Immutable
   * after creation time.
   */
  algorithm: string;
  /**
   * The time that this resource was created in the control plane. This is in
   * RFC3339 text format. Output only.
   */
  creationTime: string;
  /**
   * A mutable string of at most 1024 characters associated with this resource
   * for the user&#39;s convenience. Has no effect on the resource&#39;s
   * function.
   */
  description: string;
  /**
   * Cryptographic hashes of the DNSKEY resource record associated with this
   * DnsKey. These digests are needed to construct a DS record that points at
   * this DNS key. Output only.
   */
  digests: Schema$DnsKeyDigest[];
  /**
   * Unique identifier for the resource; defined by the server (output only).
   */
  id: string;
  /**
   * Active keys will be used to sign subsequent changes to the ManagedZone.
   * Inactive keys will still be present as DNSKEY Resource Records for the use
   * of resolvers validating existing signatures.
   */
  isActive: boolean;
  /**
   * Length of the key in bits. Specified at creation time then immutable.
   */
  keyLength: number;
  /**
   * The key tag is a non-cryptographic hash of the a DNSKEY resource record
   * associated with this DnsKey. The key tag can be used to identify a DNSKEY
   * more quickly (but it is not a unique identifier). In particular, the key
   * tag is used in a parent zone&#39;s DS record to point at the DNSKEY in this
   * child ManagedZone. The key tag is a number in the range [0, 65535] and the
   * algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
   */
  keyTag: number;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#dnsKey&quot;.
   */
  kind: string;
  /**
   * Base64 encoded public half of this key. Output only.
   */
  publicKey: string;
  /**
   * One of &quot;KEY_SIGNING&quot; or &quot;ZONE_SIGNING&quot;. Keys of type
   * KEY_SIGNING have the Secure Entry Point flag set and, when active, will be
   * used to sign only resource record sets of type DNSKEY. Otherwise, the
   * Secure Entry Point flag will be cleared and this key will be used to sign
   * only resource record sets of other types. Immutable after creation time.
   */
  type: string;
}
export interface Schema$DnsKeyDigest {
  /**
   * The base-16 encoded bytes of this digest. Suitable for use in a DS resource
   * record.
   */
  digest: string;
  /**
   * Specifies the algorithm used to calculate this digest.
   */
  type: string;
}
/**
 * The response to a request to enumerate DnsKeys in a ManagedZone.
 */
export interface Schema$DnsKeysListResponse {
  /**
   * The requested resources.
   */
  dnsKeys: Schema$DnsKey[];
  header: Schema$ResponseHeader;
  /**
   * Type of resource.
   */
  kind: string;
  /**
   * The presence of this field indicates that there exist more results
   * following your last page of results in pagination order. To fetch them,
   * make another list request using this value as your pagination token.  In
   * this way you can retrieve the complete contents of even very large
   * collections one page at a time. However, if the contents of the collection
   * change between the first and last paginated list request, the set of all
   * elements returned will be an inconsistent view of the collection. There is
   * no way to retrieve a &quot;snapshot&quot; of collections larger than the
   * maximum page size.
   */
  nextPageToken: string;
}
/**
 * Parameters for DnsKey key generation. Used for generating initial keys for a
 * new ManagedZone and as default when adding a new DnsKey.
 */
export interface Schema$DnsKeySpec {
  /**
   * String mnemonic specifying the DNSSEC algorithm of this key.
   */
  algorithm: string;
  /**
   * Length of the keys in bits.
   */
  keyLength: number;
  /**
   * One of &quot;KEY_SIGNING&quot; or &quot;ZONE_SIGNING&quot;. Keys of type
   * KEY_SIGNING have the Secure Entry Point flag set and, when active, will be
   * used to sign only resource record sets of type DNSKEY. Otherwise, the
   * Secure Entry Point flag will be cleared and this key will be used to sign
   * only resource record sets of other types.
   */
  keyType: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#dnsKeySpec&quot;.
   */
  kind: string;
}
/**
 * A zone is a subtree of the DNS namespace under one administrative
 * responsibility. A ManagedZone is a resource that represents a DNS zone hosted
 * by the Cloud DNS service.
 */
export interface Schema$ManagedZone {
  /**
   * The time that this resource was created on the server. This is in RFC3339
   * text format. Output only.
   */
  creationTime: string;
  /**
   * A mutable string of at most 1024 characters associated with this resource
   * for the user&#39;s convenience. Has no effect on the managed zone&#39;s
   * function.
   */
  description: string;
  /**
   * The DNS name of this managed zone, for instance &quot;example.com.&quot;.
   */
  dnsName: string;
  /**
   * DNSSEC configuration.
   */
  dnssecConfig: Schema$ManagedZoneDnsSecConfig;
  /**
   * Unique identifier for the resource; defined by the server (output only)
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#managedZone&quot;.
   */
  kind: string;
  /**
   * User labels.
   */
  labels: any;
  /**
   * User assigned name for this resource. Must be unique within the project.
   * The name must be 1-63 characters long, must begin with a letter, end with a
   * letter or digit, and only contain lowercase letters, digits or dashes.
   */
  name: string;
  /**
   * Delegate your managed_zone to these virtual name servers; defined by the
   * server (output only)
   */
  nameServers: string[];
  /**
   * Optionally specifies the NameServerSet for this ManagedZone. A
   * NameServerSet is a set of DNS name servers that all host the same
   * ManagedZones. Most users will leave this field unset.
   */
  nameServerSet: string;
}
export interface Schema$ManagedZoneDnsSecConfig {
  /**
   * Specifies parameters that will be used for generating initial DnsKeys for
   * this ManagedZone. Output only while state is not OFF.
   */
  defaultKeySpecs: Schema$DnsKeySpec[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#managedZoneDnsSecConfig&quot;.
   */
  kind: string;
  /**
   * Specifies the mechanism used to provide authenticated denial-of-existence
   * responses. Output only while state is not OFF.
   */
  nonExistence: string;
  /**
   * Specifies whether DNSSEC is enabled, and what mode it is in.
   */
  state: string;
}
export interface Schema$ManagedZoneOperationsListResponse {
  header: Schema$ResponseHeader;
  /**
   * Type of resource.
   */
  kind: string;
  /**
   * The presence of this field indicates that there exist more results
   * following your last page of results in pagination order. To fetch them,
   * make another list request using this value as your page token.  In this way
   * you can retrieve the complete contents of even very large collections one
   * page at a time. However, if the contents of the collection change between
   * the first and last paginated list request, the set of all elements returned
   * will be an inconsistent view of the collection. There is no way to retrieve
   * a consistent snapshot of a collection larger than the maximum page size.
   */
  nextPageToken: string;
  /**
   * The operation resources.
   */
  operations: Schema$Operation[];
}
export interface Schema$ManagedZonesListResponse {
  header: Schema$ResponseHeader;
  /**
   * Type of resource.
   */
  kind: string;
  /**
   * The managed zone resources.
   */
  managedZones: Schema$ManagedZone[];
  /**
   * The presence of this field indicates that there exist more results
   * following your last page of results in pagination order. To fetch them,
   * make another list request using this value as your page token.  In this way
   * you can retrieve the complete contents of even very large collections one
   * page at a time. However, if the contents of the collection change between
   * the first and last paginated list request, the set of all elements returned
   * will be an inconsistent view of the collection. There is no way to retrieve
   * a consistent snapshot of a collection larger than the maximum page size.
   */
  nextPageToken: string;
}
/**
 * An operation represents a successful mutation performed on a Cloud DNS
 * resource. Operations provide: - An audit log of server resource mutations. -
 * A way to recover/retry API calls in the case where the response is never
 * received by the caller. Use the caller specified client_operation_id.
 */
export interface Schema$Operation {
  /**
   * Only populated if the operation targeted a DnsKey (output only).
   */
  dnsKeyContext: Schema$OperationDnsKeyContext;
  /**
   * Unique identifier for the resource. This is the client_operation_id if the
   * client specified it when the mutation was initiated, otherwise, it is
   * generated by the server. The name must be 1-63 characters long and match
   * the regular expression [-a-z0-9]? (output only)
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#operation&quot;.
   */
  kind: string;
  /**
   * The time that this operation was started by the server. This is in RFC3339
   * text format (output only).
   */
  startTime: string;
  /**
   * Status of the operation. Can be one of the following: &quot;PENDING&quot;
   * or &quot;DONE&quot; (output only).
   */
  status: string;
  /**
   * Type of the operation. Operations include insert, update, and delete
   * (output only).
   */
  type: string;
  /**
   * User who requested the operation, for example: user@example.com.
   * cloud-dns-system for operations automatically done by the system. (output
   * only)
   */
  user: string;
  /**
   * Only populated if the operation targeted a ManagedZone (output only).
   */
  zoneContext: Schema$OperationManagedZoneContext;
}
export interface Schema$OperationDnsKeyContext {
  /**
   * The post-operation DnsKey resource.
   */
  newValue: Schema$DnsKey;
  /**
   * The pre-operation DnsKey resource.
   */
  oldValue: Schema$DnsKey;
}
export interface Schema$OperationManagedZoneContext {
  /**
   * The post-operation ManagedZone resource.
   */
  newValue: Schema$ManagedZone;
  /**
   * The pre-operation ManagedZone resource.
   */
  oldValue: Schema$ManagedZone;
}
/**
 * A project resource. The project is a top level container for resources
 * including Cloud DNS ManagedZones. Projects can be created only in the APIs
 * console.
 */
export interface Schema$Project {
  /**
   * User assigned unique identifier for the resource (output only).
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#project&quot;.
   */
  kind: string;
  /**
   * Unique numeric identifier for the resource; defined by the server (output
   * only).
   */
  number: string;
  /**
   * Quotas assigned to this project (output only).
   */
  quota: Schema$Quota;
}
/**
 * Limits associated with a Project.
 */
export interface Schema$Quota {
  /**
   * Maximum allowed number of DnsKeys per ManagedZone.
   */
  dnsKeysPerManagedZone: number;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#quota&quot;.
   */
  kind: string;
  /**
   * Maximum allowed number of managed zones in the project.
   */
  managedZones: number;
  /**
   * Maximum allowed number of ResourceRecords per ResourceRecordSet.
   */
  resourceRecordsPerRrset: number;
  /**
   * Maximum allowed number of ResourceRecordSets to add per
   * ChangesCreateRequest.
   */
  rrsetAdditionsPerChange: number;
  /**
   * Maximum allowed number of ResourceRecordSets to delete per
   * ChangesCreateRequest.
   */
  rrsetDeletionsPerChange: number;
  /**
   * Maximum allowed number of ResourceRecordSets per zone in the project.
   */
  rrsetsPerManagedZone: number;
  /**
   * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
   */
  totalRrdataSizePerChange: number;
  /**
   * DNSSEC algorithm and key length types that can be used for DnsKeys.
   */
  whitelistedKeySpecs: Schema$DnsKeySpec[];
}
/**
 * A unit of data that will be returned by the DNS servers.
 */
export interface Schema$ResourceRecordSet {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;dns#resourceRecordSet&quot;.
   */
  kind: string;
  /**
   * For example, www.example.com.
   */
  name: string;
  /**
   * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
   */
  rrdatas: string[];
  /**
   * As defined in RFC 4034 (section 3.2).
   */
  signatureRrdatas: string[];
  /**
   * Number of seconds that this ResourceRecordSet can be cached by resolvers.
   */
  ttl: number;
  /**
   * The identifier of a supported record type, for example, A, AAAA, MX, TXT,
   * and so on.
   */
  type: string;
}
export interface Schema$ResourceRecordSetsListResponse {
  header: Schema$ResponseHeader;
  /**
   * Type of resource.
   */
  kind: string;
  /**
   * The presence of this field indicates that there exist more results
   * following your last page of results in pagination order. To fetch them,
   * make another list request using this value as your pagination token.  In
   * this way you can retrieve the complete contents of even very large
   * collections one page at a time. However, if the contents of the collection
   * change between the first and last paginated list request, the set of all
   * elements returned will be an inconsistent view of the collection. There is
   * no way to retrieve a consistent snapshot of a collection larger than the
   * maximum page size.
   */
  nextPageToken: string;
  /**
   * The resource record set resources.
   */
  rrsets: Schema$ResourceRecordSet[];
}
/**
 * Elements common to every response.
 */
export interface Schema$ResponseHeader {
  /**
   * For mutating operation requests that completed successfully. This is the
   * client_operation_id if the client specified it, otherwise it is generated
   * by the server (output only).
   */
  operationId: string;
}

export class Resource$Changes {
  root: Dns;
  constructor(root: Dns) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dns.changes.create
   * @desc Atomically update the ResourceRecordSet collection.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   dns.changes.create(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.changes.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {().Change} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params: any, options?: MethodOptions): AxiosPromise<Schema$Change>;
  create(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>): void;
  create(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>):
      void|AxiosPromise<Schema$Change> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Change>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Change>(parameters);
    }
  }


  /**
   * dns.changes.get
   * @desc Fetch the representation of an existing Change.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     // The identifier of the requested change, from a previous
   * ResourceRecordSetsChangeResponse. changeId: 'my-change-id',  // TODO:
   * Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   dns.changes.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.changes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Change>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Change>,
      callback?: BodyResponseCallback<Schema$Change>):
      void|AxiosPromise<Schema$Change> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes/{changeId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone', 'changeId'],
      pathParams: ['changeId', 'managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Change>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Change>(parameters);
    }
  }


  /**
   * dns.changes.list
   * @desc Enumerate Changes to a ResourceRecordSet collection.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var changesPage = response['changes'];
   *     if (!changesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < changesPage.length; i++) {
   *       // TODO: Change code below to process each resource in `changesPage`:
   *       console.log(JSON.stringify(changesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       dns.changes.list(request, handlePage);
   *     }
   *   };
   *
   *   dns.changes.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.changes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
   * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {string=} params.sortBy Sorting criterion. The only supported value is change sequence.
   * @param {string=} params.sortOrder Sorting order direction: 'ascending' or 'descending'.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ChangesListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ChangesListResponse>,
      callback?: BodyResponseCallback<Schema$ChangesListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ChangesListResponse>,
      callback?: BodyResponseCallback<Schema$ChangesListResponse>):
      void|AxiosPromise<Schema$ChangesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ChangesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ChangesListResponse>(parameters);
    }
  }
}

export class Resource$Dnskeys {
  root: Dns;
  constructor(root: Dns) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dns.dnsKeys.get
   * @desc Fetch the representation of an existing DnsKey.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     // The identifier of the requested DnsKey.
   *     dnsKeyId: 'my-dns-key-id',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   dns.dnsKeys.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.dnsKeys.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
   * @param {string} params.dnsKeyId The identifier of the requested DnsKey.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$DnsKey>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$DnsKey>,
      callback?: BodyResponseCallback<Schema$DnsKey>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$DnsKey>,
      callback?: BodyResponseCallback<Schema$DnsKey>):
      void|AxiosPromise<Schema$DnsKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone', 'dnsKeyId'],
      pathParams: ['dnsKeyId', 'managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DnsKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DnsKey>(parameters);
    }
  }


  /**
   * dns.dnsKeys.list
   * @desc Enumerate DnsKeys to a ResourceRecordSet collection.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var dnsKeysPage = response['dnsKeys'];
   *     if (!dnsKeysPage) {
   *       return;
   *     }
   *     for (var i = 0; i < dnsKeysPage.length; i++) {
   *       // TODO: Change code below to process each resource in `dnsKeysPage`:
   *       console.log(JSON.stringify(dnsKeysPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       dns.dnsKeys.list(request, handlePage);
   *     }
   *   };
   *
   *   dns.dnsKeys.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.dnsKeys.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
   * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$DnsKeysListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$DnsKeysListResponse>,
      callback?: BodyResponseCallback<Schema$DnsKeysListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DnsKeysListResponse>,
      callback?: BodyResponseCallback<Schema$DnsKeysListResponse>):
      void|AxiosPromise<Schema$DnsKeysListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DnsKeysListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DnsKeysListResponse>(parameters);
    }
  }
}

export class Resource$Managedzoneoperations {
  root: Dns;
  constructor(root: Dns) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dns.managedZoneOperations.get
   * @desc Fetch the representation of an existing Operation.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request.
   *     managedZone: 'my-managed-zone',  // TODO: Update placeholder value.
   *
   *     // Identifies the operation addressed by this request.
   *     operation: 'my-operation',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   dns.managedZoneOperations.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZoneOperations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request.
   * @param {string} params.operation Identifies the operation addressed by this request.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations/{operation}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone', 'operation'],
      pathParams: ['managedZone', 'operation', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * dns.managedZoneOperations.list
   * @desc Enumerate Operations for the given ManagedZone.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request.
   *     managedZone: 'my-managed-zone',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var operationsPage = response['operations'];
   *     if (!operationsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < operationsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `operationsPage`: console.log(JSON.stringify(operationsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       dns.managedZoneOperations.list(request, handlePage);
   *     }
   *   };
   *
   *   dns.managedZoneOperations.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZoneOperations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.managedZone Identifies the managed zone addressed by this request.
   * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
   * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {string=} params.sortBy Sorting criterion. The only supported values are START_TIME and ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedZoneOperationsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>,
      callback?:
          BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>,
      callback?:
          BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>):
      void|AxiosPromise<Schema$ManagedZoneOperationsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedZoneOperationsListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedZoneOperationsListResponse>(
          parameters);
    }
  }
}

export class Resource$Managedzones {
  root: Dns;
  constructor(root: Dns) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dns.managedZones.create
   * @desc Create a new ManagedZone.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   dns.managedZones.create(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZones.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {().ManagedZone} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedZone>;
  create(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ManagedZone>,
      callback?: BodyResponseCallback<Schema$ManagedZone>): void;
  create(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedZone>,
      callback?: BodyResponseCallback<Schema$ManagedZone>):
      void|AxiosPromise<Schema$ManagedZone> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/dns/v2beta1/projects/{project}/managedZones')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedZone>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedZone>(parameters);
    }
  }


  /**
   * dns.managedZones.delete
   * @desc Delete a previously created ManagedZone.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   dns.managedZones.delete(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZones.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * dns.managedZones.get
   * @desc Fetch the representation of an existing ManagedZone.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   dns.managedZones.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZones.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$ManagedZone>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ManagedZone>,
      callback?: BodyResponseCallback<Schema$ManagedZone>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedZone>,
      callback?: BodyResponseCallback<Schema$ManagedZone>):
      void|AxiosPromise<Schema$ManagedZone> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedZone>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedZone>(parameters);
    }
  }


  /**
   * dns.managedZones.list
   * @desc Enumerate ManagedZones that have been created but not yet deleted.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var managedZonesPage = response['managedZones'];
   *     if (!managedZonesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < managedZonesPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `managedZonesPage`: console.log(JSON.stringify(managedZonesPage[i], null,
   * 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       dns.managedZones.list(request, handlePage);
   *     }
   *   };
   *
   *   dns.managedZones.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZones.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.dnsName Restricts the list to return only zones with this domain name.
   * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
   * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedZonesListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ManagedZonesListResponse>,
      callback?: BodyResponseCallback<Schema$ManagedZonesListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedZonesListResponse>,
      callback?: BodyResponseCallback<Schema$ManagedZonesListResponse>):
      void|AxiosPromise<Schema$ManagedZonesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/dns/v2beta1/projects/{project}/managedZones')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedZonesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedZonesListResponse>(parameters);
    }
  }


  /**
   * dns.managedZones.patch
   * @desc Update an existing ManagedZone. This method supports patch semantics.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   dns.managedZones.patch(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZones.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {().ManagedZone} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * dns.managedZones.update
   * @desc Update an existing ManagedZone.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   dns.managedZones.update(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.managedZones.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {().ManagedZone} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/dns/v2beta1/projects/{project}/managedZones/{managedZone}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
}

export class Resource$Projects {
  root: Dns;
  constructor(root: Dns) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dns.projects.get
   * @desc Fetch the representation of an existing Project.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   dns.projects.get(request, function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     // TODO: Change code below to process the `response` object:
   *     console.log(JSON.stringify(response, null, 2));
   *   });
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.projects.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Project>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>):
      void|AxiosPromise<Schema$Project> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/dns/v2beta1/projects/{project}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Project>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Project>(parameters);
    }
  }
}

export class Resource$Resourcerecordsets {
  root: Dns;
  constructor(root: Dns) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dns.resourceRecordSets.list
   * @desc Enumerate ResourceRecordSets that have been created but not yet
   * deleted.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud DNS API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/dns
   * // 2. This sample uses Application Default Credentials for authentication.
   * //    If not already done, install the gcloud CLI from
   * //    https://cloud.google.com/sdk and run
   * //    `gcloud beta auth application-default login`.
   * //    For more information, see
   * //
   * https://developers.google.com/identity/protocols/application-default-credentials
   * // 3. Install the Node.js client library by running
   * //    `npm install googleapis --save`
   *
   * var google = require('googleapis');
   * var dns = google.dns('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Identifies the project addressed by this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Identifies the managed zone addressed by this request. Can be the
   * managed zone name or id. managedZone: 'my-managed-zone',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var rrsetsPage = response['rrsets'];
   *     if (!rrsetsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < rrsetsPage.length; i++) {
   *       // TODO: Change code below to process each resource in `rrsetsPage`:
   *       console.log(JSON.stringify(rrsetsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       dns.resourceRecordSets.list(request, handlePage);
   *     }
   *   };
   *
   *   dns.resourceRecordSets.list(request, handlePage);
   * });
   *
   * function authorize(callback) {
   *   google.auth.getApplicationDefault(function(err, authClient) {
   *     if (err) {
   *       console.error('authentication failed: ', err);
   *       return;
   *     }
   *     if (authClient.createScopedRequired &&
   * authClient.createScopedRequired()) { var scopes =
   * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
   * authClient.createScoped(scopes);
   *     }
   *     callback(authClient);
   *   });
   * }
   * @alias dns.resourceRecordSets.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
   * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
   * @param {string=} params.name Restricts the list to return only records with this fully qualified domain name.
   * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
   * @param {string} params.project Identifies the project addressed by this request.
   * @param {string=} params.type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ResourceRecordSetsListResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ResourceRecordSetsListResponse>,
      callback?: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>):
      void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResourceRecordSetsListResponse>,
      callback?: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>):
      void|AxiosPromise<Schema$ResourceRecordSetsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/dns/v2beta1/projects/{project}/managedZones/{managedZone}/rrsets')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'managedZone'],
      pathParams: ['managedZone', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResourceRecordSetsListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ResourceRecordSetsListResponse>(
          parameters);
    }
  }
}
