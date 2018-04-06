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
 * Google Cloud Key Management Service (KMS) API
 *
 * Manages encryption for your cloud services the same way you do on-premises.
 * You can generate, use, rotate, and destroy AES256 encryption keys.
 *
 * @example
 * const google = require('googleapis');
 * const cloudkms = google.cloudkms('v1');
 *
 * @namespace cloudkms
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudkms
 */
export class Cloudkms {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Specifies the audit configuration for a service. The configuration determines
 * which permission types are logged, and what identities, if any, are exempted
 * from logging. An AuditConfig must have one or more AuditLogConfigs.  If there
 * are AuditConfigs for both `allServices` and a specific service, the union of
 * the two AuditConfigs is used for that service: the log_types specified in
 * each AuditConfig are enabled, and the exempted_members in each AuditLogConfig
 * are exempted.  Example Policy with multiple AuditConfigs:      {
 * &quot;audit_configs&quot;: [         {           &quot;service&quot;:
 * &quot;allServices&quot;           &quot;audit_log_configs&quot;: [ {
 * &quot;log_type&quot;: &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;               ]             },             {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
 * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] }, {
 * &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
 * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
 * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
 * &quot;user:bar@gmail.com&quot;               ]             }           ] } ]
 * }  For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
 * logging. It also exempts foo@gmail.com from DATA_READ logging, and
 * bar@gmail.com from DATA_WRITE logging.
 */
export interface Schema$AuditConfig {
  /**
   * The configuration for logging of each type of permission.
   */
  auditLogConfigs: Schema$AuditLogConfig[];
  /**
   * Specifies a service that will be enabled for audit logging. For example,
   * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
   * special value that covers all services.
   */
  service: string;
}
/**
 * Provides the configuration for logging a type of permissions. Example:      {
 * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;           ]         },         {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
 * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting
 * foo@gmail.com from DATA_READ logging.
 */
export interface Schema$AuditLogConfig {
  /**
   * Specifies the identities that do not cause logging for this type of
   * permission. Follows the same format of Binding.members.
   */
  exemptedMembers: string[];
  /**
   * The log type that this config enables.
   */
  logType: string;
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is    on the internet; with or
   * without a Google account.  * `allAuthenticatedUsers`: A special identifier
   * that represents anyone    who is authenticated with a Google account or a
   * service account.  * `user:{emailid}`: An email address that represents a
   * specific Google    account. For example, `alice@gmail.com` or
   * `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that
   * represents a service    account. For example,
   * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email
   * address that represents a Google group.    For example,
   * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that
   * represents all the    users of that domain. For example, `google.com` or
   * `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * A CryptoKey represents a logical key that can be used for cryptographic
 * operations.  A CryptoKey is made up of one or more versions, which represent
 * the actual key material used in cryptographic operations.
 */
export interface Schema$CryptoKey {
  /**
   * Output only. The time at which this CryptoKey was created.
   */
  createTime: string;
  /**
   * Labels with user-defined metadata. For more information, see [Labeling
   * Keys](/kms/docs/labeling-keys).
   */
  labels: any;
  /**
   * Output only. The resource name for this CryptoKey in the format
   * `projects/x/locations/x/keyRings/x/cryptoKeys/x.
   */
  name: string;
  /**
   * At next_rotation_time, the Key Management Service will automatically:  1.
   * Create a new version of this CryptoKey. 2. Mark the new version as primary.
   * Key rotations performed manually via CreateCryptoKeyVersion and
   * UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time.
   */
  nextRotationTime: string;
  /**
   * Output only. A copy of the &quot;primary&quot; CryptoKeyVersion that will
   * be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The
   * CryptoKey&#39;s primary version can be updated via
   * UpdateCryptoKeyPrimaryVersion.
   */
  primary: Schema$CryptoKeyVersion;
  /**
   * The immutable purpose of this CryptoKey. Currently, the only acceptable
   * purpose is ENCRYPT_DECRYPT.
   */
  purpose: string;
  /**
   * next_rotation_time will be advanced by this period when the service
   * automatically rotates a key. Must be at least one day.  If rotation_period
   * is set, next_rotation_time must also be set.
   */
  rotationPeriod: string;
}
/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the
 * associated key material.  It can be used for cryptographic operations either
 * directly, or via its parent CryptoKey, in which case the server will choose
 * the appropriate version for the operation.  For security reasons, the raw
 * cryptographic key material represented by a CryptoKeyVersion can never be
 * viewed or exported. It can only be used to encrypt or decrypt data when an
 * authorized user or application invokes Cloud KMS.
 */
export interface Schema$CryptoKeyVersion {
  /**
   * Output only. The time at which this CryptoKeyVersion was created.
   */
  createTime: string;
  /**
   * Output only. The time this CryptoKeyVersion&#39;s key material was
   * destroyed. Only present if state is DESTROYED.
   */
  destroyEventTime: string;
  /**
   * Output only. The time this CryptoKeyVersion&#39;s key material is scheduled
   * for destruction. Only present if state is DESTROY_SCHEDULED.
   */
  destroyTime: string;
  /**
   * Output only. The resource name for this CryptoKeyVersion in the format
   * `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x.
   */
  name: string;
  /**
   * The current state of the CryptoKeyVersion.
   */
  state: string;
}
/**
 * Request message for KeyManagementService.Decrypt.
 */
export interface Schema$DecryptRequest {
  /**
   * Optional data that must match the data originally supplied in
   * EncryptRequest.additional_authenticated_data.
   */
  additionalAuthenticatedData: string;
  /**
   * Required. The encrypted data originally returned in
   * EncryptResponse.ciphertext.
   */
  ciphertext: string;
}
/**
 * Response message for KeyManagementService.Decrypt.
 */
export interface Schema$DecryptResponse {
  /**
   * The decrypted data originally supplied in EncryptRequest.plaintext.
   */
  plaintext: string;
}
/**
 * Request message for KeyManagementService.DestroyCryptoKeyVersion.
 */
export interface Schema$DestroyCryptoKeyVersionRequest {}
/**
 * Request message for KeyManagementService.Encrypt.
 */
export interface Schema$EncryptRequest {
  /**
   * Optional data that, if specified, must also be provided during decryption
   * through DecryptRequest.additional_authenticated_data.  Must be no larger
   * than 64KiB.
   */
  additionalAuthenticatedData: string;
  /**
   * Required. The data to encrypt. Must be no larger than 64KiB.
   */
  plaintext: string;
}
/**
 * Response message for KeyManagementService.Encrypt.
 */
export interface Schema$EncryptResponse {
  /**
   * The encrypted data.
   */
  ciphertext: string;
  /**
   * The resource name of the CryptoKeyVersion used in encryption.
   */
  name: string;
}
/**
 * A KeyRing is a toplevel logical grouping of CryptoKeys.
 */
export interface Schema$KeyRing {
  /**
   * Output only. The time at which this KeyRing was created.
   */
  createTime: string;
  /**
   * Output only. The resource name for the KeyRing in the format
   * `projects/x/locations/x/keyRings/x.
   */
  name: string;
}
/**
 * Response message for KeyManagementService.ListCryptoKeys.
 */
export interface Schema$ListCryptoKeysResponse {
  /**
   * The list of CryptoKeys.
   */
  cryptoKeys: Schema$CryptoKey[];
  /**
   * A token to retrieve next page of results. Pass this value in
   * ListCryptoKeysRequest.page_token to retrieve the next page of results.
   */
  nextPageToken: string;
  /**
   * The total number of CryptoKeys that matched the query.
   */
  totalSize: number;
}
/**
 * Response message for KeyManagementService.ListCryptoKeyVersions.
 */
export interface Schema$ListCryptoKeyVersionsResponse {
  /**
   * The list of CryptoKeyVersions.
   */
  cryptoKeyVersions: Schema$CryptoKeyVersion[];
  /**
   * A token to retrieve next page of results. Pass this value in
   * ListCryptoKeyVersionsRequest.page_token to retrieve the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * The total number of CryptoKeyVersions that matched the query.
   */
  totalSize: number;
}
/**
 * Response message for KeyManagementService.ListKeyRings.
 */
export interface Schema$ListKeyRingsResponse {
  /**
   * The list of KeyRings.
   */
  keyRings: Schema$KeyRing[];
  /**
   * A token to retrieve next page of results. Pass this value in
   * ListKeyRingsRequest.page_token to retrieve the next page of results.
   */
  nextPageToken: string;
  /**
   * The total number of KeyRings that matched the query.
   */
  totalSize: number;
}
/**
 * The response message for Locations.ListLocations.
 */
export interface Schema$ListLocationsResponse {
  /**
   * A list of locations that matches the specified filter in the request.
   */
  locations: Schema$Location[];
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
}
/**
 * A resource that represents Google Cloud Platform location.
 */
export interface Schema$Location {
  /**
   * The friendly name for this location, typically a nearby city name. For
   * example, &quot;Tokyo&quot;.
   */
  displayName: string;
  /**
   * Cross-service attributes for the location. For example
   * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
   */
  labels: any;
  /**
   * The canonical id for this location. For example: `&quot;us-east1&quot;`.
   */
  locationId: string;
  /**
   * Service-specific metadata. For example the available capacity at the given
   * location.
   */
  metadata: any;
  /**
   * Resource name for the location, which may vary between implementations. For
   * example: `&quot;projects/example-project/locations/us-east1&quot;`
   */
  name: string;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.   A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**      {       &quot;bindings&quot;: [         { &quot;role&quot;:
 * &quot;roles/owner&quot;,           &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] }, {
 * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
 * [&quot;user:sean@example.com&quot;]         }       ]     }  For a
 * description of IAM and its features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Specifies cloud audit logging configuration for this policy.
   */
  auditConfigs: Schema$AuditConfig[];
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * Request message for KeyManagementService.RestoreCryptoKeyVersion.
 */
export interface Schema$RestoreCryptoKeyVersionRequest {}
/**
 * Request message for `SetIamPolicy` method.
 */
export interface Schema$SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$Policy;
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
   * the fields in the mask will be modified. If no mask is provided, the
   * following default mask is used: paths: &quot;bindings, etag&quot; This
   * field is only used by Cloud IAM.
   */
  updateMask: string;
}
/**
 * Request message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsRequest {
  /**
   * The set of permissions to check for the `resource`. Permissions with
   * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For
   * more information see [IAM
   * Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions: string[];
}
/**
 * Response message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
 */
export interface Schema$UpdateCryptoKeyPrimaryVersionRequest {
  /**
   * The id of the child CryptoKeyVersion to use as primary.
   */
  cryptoKeyVersionId: string;
}

export class Resource$Projects {
  root: Cloudkms;
  locations: Resource$Projects$Locations;
  constructor(root: Cloudkms) {
    this.root = root;
    this.getRoot.bind(this);
    this.locations = new Resource$Projects$Locations(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Locations {
  root: Cloudkms;
  keyRings: Resource$Projects$Locations$Keyrings;
  constructor(root: Cloudkms) {
    this.root = root;
    this.getRoot.bind(this);
    this.keyRings = new Resource$Projects$Locations$Keyrings(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudkms.projects.locations.get
   * @desc Gets information about a location.
   * @alias cloudkms.projects.locations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the location.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Location>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>):
      void|AxiosPromise<Schema$Location> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Location>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Location>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.list
   * @desc Lists information about the supported locations for this service.
   * @alias cloudkms.projects.locations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The standard list filter.
   * @param {string} params.name The resource that owns the locations collection, if applicable.
   * @param {integer=} params.pageSize The standard list page size.
   * @param {string=} params.pageToken The standard list page token.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLocationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
      void|AxiosPromise<Schema$ListLocationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLocationsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Keyrings {
  root: Cloudkms;
  cryptoKeys: Resource$Projects$Locations$Keyrings$Cryptokeys;
  constructor(root: Cloudkms) {
    this.root = root;
    this.getRoot.bind(this);
    this.cryptoKeys = new Resource$Projects$Locations$Keyrings$Cryptokeys(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudkms.projects.locations.keyRings.create
   * @desc Create a new KeyRing in a given Project and Location.
   * @alias cloudkms.projects.locations.keyRings.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.keyRingId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
   * @param {string} params.parent Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
   * @param {().KeyRing} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$KeyRing>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$KeyRing>,
      callback?: BodyResponseCallback<Schema$KeyRing>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$KeyRing>,
      callback?: BodyResponseCallback<Schema$KeyRing>):
      void|AxiosPromise<Schema$KeyRing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keyRings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$KeyRing>(parameters, callback);
    } else {
      return createAPIRequest<Schema$KeyRing>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.get
   * @desc Returns metadata for a given KeyRing.
   * @alias cloudkms.projects.locations.keyRings.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the KeyRing to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$KeyRing>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$KeyRing>,
      callback?: BodyResponseCallback<Schema$KeyRing>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$KeyRing>,
      callback?: BodyResponseCallback<Schema$KeyRing>):
      void|AxiosPromise<Schema$KeyRing> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$KeyRing>(parameters, callback);
    } else {
      return createAPIRequest<Schema$KeyRing>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias cloudkms.projects.locations.keyRings.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.list
   * @desc Lists KeyRings.
   * @alias cloudkms.projects.locations.keyRings.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional limit on the number of KeyRings to include in the response.  Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
   * @param {string} params.parent Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListKeyRingsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListKeyRingsResponse>,
      callback?: BodyResponseCallback<Schema$ListKeyRingsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListKeyRingsResponse>,
      callback?: BodyResponseCallback<Schema$ListKeyRingsResponse>):
      void|AxiosPromise<Schema$ListKeyRingsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keyRings')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListKeyRingsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListKeyRingsResponse>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @alias cloudkms.projects.locations.keyRings.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
   * @param {().SetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @alias cloudkms.projects.locations.keyRings.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().TestIamPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Keyrings$Cryptokeys {
  root: Cloudkms;
  cryptoKeyVersions:
      Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions;
  constructor(root: Cloudkms) {
    this.root = root;
    this.getRoot.bind(this);
    this.cryptoKeyVersions =
        new Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions(
            root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.create
   * @desc Create a new CryptoKey within a KeyRing.  CryptoKey.purpose is
   * required.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.cryptoKeyId Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
   * @param {string} params.parent Required. The name of the KeyRing associated with the CryptoKeys.
   * @param {().CryptoKey} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$CryptoKey>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>):
      void|AxiosPromise<Schema$CryptoKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeys')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKey>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.decrypt
   * @desc Decrypts data that was protected by Encrypt.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.decrypt
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
   * @param {().DecryptRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  decrypt(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DecryptResponse>;
  decrypt(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DecryptResponse>,
      callback?: BodyResponseCallback<Schema$DecryptResponse>): void;
  decrypt(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DecryptResponse>,
      callback?: BodyResponseCallback<Schema$DecryptResponse>):
      void|AxiosPromise<Schema$DecryptResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+name}:decrypt').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DecryptResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DecryptResponse>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.encrypt
   * @desc Encrypts data, so that it can only be recovered by a call to Decrypt.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.encrypt
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption.  If a CryptoKey is specified, the server will use its primary version.
   * @param {().EncryptRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  encrypt(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EncryptResponse>;
  encrypt(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EncryptResponse>,
      callback?: BodyResponseCallback<Schema$EncryptResponse>): void;
  encrypt(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EncryptResponse>,
      callback?: BodyResponseCallback<Schema$EncryptResponse>):
      void|AxiosPromise<Schema$EncryptResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+name}:encrypt').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EncryptResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EncryptResponse>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.get
   * @desc Returns metadata for a given CryptoKey, as well as its primary
   * CryptoKeyVersion.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the CryptoKey to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$CryptoKey>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>):
      void|AxiosPromise<Schema$CryptoKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKey>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.list
   * @desc Lists CryptoKeys.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional limit on the number of CryptoKeys to include in the response.  Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
   * @param {string} params.parent Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCryptoKeysResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCryptoKeysResponse>,
      callback?: BodyResponseCallback<Schema$ListCryptoKeysResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCryptoKeysResponse>,
      callback?: BodyResponseCallback<Schema$ListCryptoKeysResponse>):
      void|AxiosPromise<Schema$ListCryptoKeysResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeys')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCryptoKeysResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListCryptoKeysResponse>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.patch
   * @desc Update a CryptoKey.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
   * @param {string=} params.updateMask Required list of fields to be updated in this request.
   * @param {().CryptoKey} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$CryptoKey>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>):
      void|AxiosPromise<Schema$CryptoKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKey>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
   * @param {().SetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().TestIamPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
   * @desc Update the version of a CryptoKey that will be used in Encrypt
   * @alias cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the CryptoKey to update.
   * @param {().UpdateCryptoKeyPrimaryVersionRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updatePrimaryVersion(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CryptoKey>;
  updatePrimaryVersion(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>): void;
  updatePrimaryVersion(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>):
      void|AxiosPromise<Schema$CryptoKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:updatePrimaryVersion')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKey>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions {
  root: Cloudkms;
  constructor(root: Cloudkms) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
   * @desc Create a new CryptoKeyVersion in a CryptoKey.  The server will assign
   * the next sequential id. If unset, state will be set to ENABLED.
   * @alias
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the CryptoKey associated with the CryptoKeyVersions.
   * @param {().CryptoKeyVersion} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CryptoKeyVersion>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>):
      void|AxiosPromise<Schema$CryptoKeyVersion> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeyVersions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
   * @desc Schedule a CryptoKeyVersion for destruction.  Upon calling this
   * method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED and
   * destroy_time will be set to a time 24 hours in the future, at which point
   * the state will be changed to DESTROYED, and the key material will be
   * irrevocably destroyed.  Before the destroy_time is reached,
   * RestoreCryptoKeyVersion may be called to reverse the process.
   * @alias
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the CryptoKeyVersion to destroy.
   * @param {().DestroyCryptoKeyVersionRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  destroy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CryptoKeyVersion>;
  destroy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
  destroy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>):
      void|AxiosPromise<Schema$CryptoKeyVersion> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+name}:destroy').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
   * @desc Returns metadata for a given CryptoKeyVersion.
   * @alias
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the CryptoKeyVersion to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$CryptoKeyVersion>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>):
      void|AxiosPromise<Schema$CryptoKeyVersion> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
   * @desc Lists CryptoKeyVersions.
   * @alias
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
   * @param {string=} params.pageToken Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
   * @param {string} params.parent Required. The resource name of the CryptoKey to list, in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListCryptoKeyVersionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>):
      void|AxiosPromise<Schema$ListCryptoKeyVersionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeyVersions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListCryptoKeyVersionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListCryptoKeyVersionsResponse>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
   * @desc Update a CryptoKeyVersion's metadata.  state may be changed between
   * ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and
   * RestoreCryptoKeyVersion to move between other states.
   * @alias
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`.
   * @param {string=} params.updateMask Required list of fields to be updated in this request.
   * @param {().CryptoKeyVersion} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CryptoKeyVersion>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>):
      void|AxiosPromise<Schema$CryptoKeyVersion> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
    }
  }


  /**
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
   * @desc Restore a CryptoKeyVersion in the DESTROY_SCHEDULED, state.  Upon
   * restoration of the CryptoKeyVersion, state will be set to DISABLED, and
   * destroy_time will be cleared.
   * @alias
   * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the CryptoKeyVersion to restore.
   * @param {().RestoreCryptoKeyVersionRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  restore(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CryptoKeyVersion>;
  restore(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
  restore(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>):
      void|AxiosPromise<Schema$CryptoKeyVersion> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+name}:restore').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
    }
  }
}
