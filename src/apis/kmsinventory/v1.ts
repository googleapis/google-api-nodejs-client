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

export namespace kmsinventory_v1 {
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
   * KMS Inventory API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const kmsinventory = google.kmsinventory('v1');
   * ```
   */
  export class Kmsinventory {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Response message for KeyDashboardService.ListCryptoKeys.
   */
  export interface Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse {
    /**
     * The list of CryptoKeys.
     */
    cryptoKeys?: Schema$GoogleCloudKmsV1CryptoKey[];
    /**
     * The page token returned from the previous response if the next page is desired.
     */
    nextPageToken?: string | null;
  }
  /**
   * Metadata about a resource protected by a Cloud KMS key.
   */
  export interface Schema$GoogleCloudKmsInventoryV1ProtectedResource {
    /**
     * The Cloud product that owns the resource. Example: `compute`
     */
    cloudProduct?: string | null;
    /**
     * Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.
     */
    createTime?: string | null;
    /**
     * The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions.
     */
    cryptoKeyVersion?: string | null;
    /**
     * The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto_key_version.
     */
    cryptoKeyVersions?: string[] | null;
    /**
     * A key-value pair of the resource's labels (v1) to their values.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.
     */
    location?: string | null;
    /**
     * The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
     */
    name?: string | null;
    /**
     * Format: `projects/{PROJECT_NUMBER\}`.
     */
    project?: string | null;
    /**
     * The ID of the project that owns the resource.
     */
    projectId?: string | null;
    /**
     * Example: `compute.googleapis.com/Disk`
     */
    resourceType?: string | null;
  }
  /**
   * Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.
   */
  export interface Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary {
    /**
     * The number of resources protected by the key grouped by Cloud product.
     */
    cloudProducts?: {[key: string]: string} | null;
    /**
     * The number of resources protected by the key grouped by region.
     */
    locations?: {[key: string]: string} | null;
    /**
     * The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary
     */
    name?: string | null;
    /**
     * The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.
     */
    projectCount?: number | null;
    /**
     * The total number of protected resources in the same Cloud organization as the key.
     */
    resourceCount?: string | null;
    /**
     * The number of resources protected by the key grouped by resource type.
     */
    resourceTypes?: {[key: string]: string} | null;
  }
  /**
   * Response message for KeyTrackingService.SearchProtectedResources.
   */
  export interface Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Protected resources for this page.
     */
    protectedResources?: Schema$GoogleCloudKmsInventoryV1ProtectedResource[];
  }
  /**
   * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
   */
  export interface Schema$GoogleCloudKmsV1CryptoKey {
    /**
     * Output only. The time at which this CryptoKey was created.
     */
    createTime?: string | null;
    /**
     * Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/x/locations/x/ekmConnections/x`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
     */
    cryptoKeyBackend?: string | null;
    /**
     * Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.
     */
    destroyScheduledDuration?: string | null;
    /**
     * Immutable. Whether this key may contain imported versions only.
     */
    importOnly?: boolean | null;
    /**
     * Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
     */
    name?: string | null;
    /**
     * At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    nextRotationTime?: string | null;
    /**
     * Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The CryptoKey's primary version can be updated via UpdateCryptoKeyPrimaryVersion. Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.
     */
    primary?: Schema$GoogleCloudKmsV1CryptoKeyVersion;
    /**
     * Immutable. The immutable purpose of this CryptoKey.
     */
    purpose?: string | null;
    /**
     * next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    rotationPeriod?: string | null;
    /**
     * A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.
     */
    versionTemplate?: Schema$GoogleCloudKmsV1CryptoKeyVersionTemplate;
  }
  /**
   * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
   */
  export interface Schema$GoogleCloudKmsV1CryptoKeyVersion {
    /**
     * Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
     */
    algorithm?: string | null;
    /**
     * Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM.
     */
    attestation?: Schema$GoogleCloudKmsV1KeyOperationAttestation;
    /**
     * Output only. The time at which this CryptoKeyVersion was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.
     */
    destroyEventTime?: string | null;
    /**
     * Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.
     */
    destroyTime?: string | null;
    /**
     * Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.
     */
    externalDestructionFailureReason?: string | null;
    /**
     * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
     */
    externalProtectionLevelOptions?: Schema$GoogleCloudKmsV1ExternalProtectionLevelOptions;
    /**
     * Output only. The time this CryptoKeyVersion's key material was generated.
     */
    generateTime?: string | null;
    /**
     * Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED.
     */
    generationFailureReason?: string | null;
    /**
     * Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED.
     */
    importFailureReason?: string | null;
    /**
     * Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported.
     */
    importJob?: string | null;
    /**
     * Output only. The time at which this CryptoKeyVersion's key material was most recently imported.
     */
    importTime?: string | null;
    /**
     * Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`.
     */
    name?: string | null;
    /**
     * Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
     */
    protectionLevel?: string | null;
    /**
     * Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version.
     */
    reimportEligible?: boolean | null;
    /**
     * The current state of the CryptoKeyVersion.
     */
    state?: string | null;
  }
  /**
   * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
   */
  export interface Schema$GoogleCloudKmsV1CryptoKeyVersionTemplate {
    /**
     * Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT.
     */
    algorithm?: string | null;
    /**
     * ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE.
     */
    protectionLevel?: string | null;
  }
  /**
   * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
   */
  export interface Schema$GoogleCloudKmsV1ExternalProtectionLevelOptions {
    /**
     * The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection.
     */
    ekmConnectionKeyPath?: string | null;
    /**
     * The URI for an external resource that this CryptoKeyVersion represents.
     */
    externalKeyUri?: string | null;
  }
  /**
   * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
   */
  export interface Schema$GoogleCloudKmsV1KeyOperationAttestation {
    /**
     * Output only. The certificate chains needed to validate the attestation
     */
    certChains?: Schema$GoogleCloudKmsV1KeyOperationAttestationCertificateChains;
    /**
     * Output only. The attestation data provided by the HSM when the key operation was performed.
     */
    content?: string | null;
    /**
     * Output only. The format of the attestation data.
     */
    format?: string | null;
  }
  /**
   * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
   */
  export interface Schema$GoogleCloudKmsV1KeyOperationAttestationCertificateChains {
    /**
     * Cavium certificate chain corresponding to the attestation.
     */
    caviumCerts?: string[] | null;
    /**
     * Google card certificate chain corresponding to the attestation.
     */
    googleCardCerts?: string[] | null;
    /**
     * Google partition certificate chain corresponding to the attestation.
     */
    googlePartitionCerts?: string[] | null;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    protectedResources: Resource$Organizations$Protectedresources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.protectedResources = new Resource$Organizations$Protectedresources(
        this.context
      );
    }
  }

  export class Resource$Organizations$Protectedresources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Organizations$Protectedresources$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Organizations$Protectedresources$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>;
    search(
      params: Params$Resource$Organizations$Protectedresources$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Organizations$Protectedresources$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
    ): void;
    search(
      params: Params$Resource$Organizations$Protectedresources$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Organizations$Protectedresources$Search
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Protectedresources$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Protectedresources$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://kmsinventory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+scope}/protectedResources:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scope'],
        pathParams: ['scope'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Protectedresources$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the CryptoKey.
     */
    cryptoKey?: string;
    /**
     * The maximum number of resources to return. The service may return fewer than this value. If unspecified, at most 500 resources will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous KeyTrackingService.SearchProtectedResources call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to KeyTrackingService.SearchProtectedResources must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Optional. A list of resource types that this request searches for. If empty, it will search all the [trackable resource types](https://cloud.google.com/kms/docs/view-key-usage#tracked-resource-types). Regular expressions are also supported. For example: * `compute.googleapis.com.*` snapshots resources whose type starts with `compute.googleapis.com`. * `.*Image` snapshots resources whose type ends with `Image`. * `.*Image.*` snapshots resources whose type contains `Image`. See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported resource type, an INVALID_ARGUMENT error will be returned.
     */
    resourceTypes?: string[];
    /**
     * Required. Resource name of the organization. Example: organizations/123
     */
    scope?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    cryptoKeys: Resource$Projects$Cryptokeys;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cryptoKeys = new Resource$Projects$Cryptokeys(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Cryptokeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Cryptokeys$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Cryptokeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>;
    list(
      params: Params$Resource$Projects$Cryptokeys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Cryptokeys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Cryptokeys$List,
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Cryptokeys$List
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Cryptokeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Cryptokeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://kmsinventory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeys').replace(
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
        createAPIRequest<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudKmsInventoryV1ListCryptoKeysResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Cryptokeys$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of keys to return. The service may return fewer than this value. If unspecified, at most 1000 keys will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Pass this into a subsequent request in order to receive the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/x`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    keyRings: Resource$Projects$Locations$Keyrings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.keyRings = new Resource$Projects$Locations$Keyrings(this.context);
    }
  }

  export class Resource$Projects$Locations$Keyrings {
    context: APIRequestContext;
    cryptoKeys: Resource$Projects$Locations$Keyrings$Cryptokeys;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cryptoKeys = new Resource$Projects$Locations$Keyrings$Cryptokeys(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Keyrings$Cryptokeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getProtectedResourcesSummary(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getProtectedResourcesSummary(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>;
    getProtectedResourcesSummary(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getProtectedResourcesSummary(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>,
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
    ): void;
    getProtectedResourcesSummary(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary,
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
    ): void;
    getProtectedResourcesSummary(
      callback: BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
    ): void;
    getProtectedResourcesSummary(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://kmsinventory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/protectedResourcesSummary').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudKmsInventoryV1ProtectedResourcesSummary>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getprotectedresourcessummary
    extends StandardParameters {
    /**
     * Required. The resource name of the CryptoKey.
     */
    name?: string;
  }
}
