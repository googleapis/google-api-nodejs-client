/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudkms_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
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
   * Cloud Key Management Service (KMS) API
   *
   * Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudkms = google.cloudkms('v1');
   *
   * @namespace cloudkms
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudkms
   */
  export class Cloudkms {
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
   * Request message for KeyManagementService.AsymmetricDecrypt.
   */
  export interface Schema$AsymmetricDecryptRequest {
    /**
     * Required. The data encrypted with the named CryptoKeyVersion&#39;s public key using OAEP.
     */
    ciphertext?: string | null;
  }
  /**
   * Response message for KeyManagementService.AsymmetricDecrypt.
   */
  export interface Schema$AsymmetricDecryptResponse {
    /**
     * The decrypted data originally encrypted with the matching public key.
     */
    plaintext?: string | null;
  }
  /**
   * Request message for KeyManagementService.AsymmetricSign.
   */
  export interface Schema$AsymmetricSignRequest {
    /**
     * Required. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version&#39;s algorithm.
     */
    digest?: Schema$Digest;
  }
  /**
   * Response message for KeyManagementService.AsymmetricSign.
   */
  export interface Schema$AsymmetricSignResponse {
    /**
     * The created signature.
     */
    signature?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * A CryptoKey represents a logical key that can be used for cryptographic operations.  A CryptoKey is made up of one or more versions, which represent the actual key material used in cryptographic operations.
   */
  export interface Schema$CryptoKey {
    /**
     * Output only. The time at which this CryptoKey was created.
     */
    createTime?: string | null;
    /**
     * Labels with user-defined metadata. For more information, see [Labeling Keys](/kms/docs/labeling-keys).
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x.
     */
    name?: string | null;
    /**
     * At next_rotation_time, the Key Management Service will automatically:  1. Create a new version of this CryptoKey. 2. Mark the new version as primary.  Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time.  Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    nextRotationTime?: string | null;
    /**
     * Output only. A copy of the &quot;primary&quot; CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name.  The CryptoKey&#39;s primary version can be updated via UpdateCryptoKeyPrimaryVersion.  All keys with purpose ENCRYPT_DECRYPT have a primary. For other keys, this field will be omitted.
     */
    primary?: Schema$CryptoKeyVersion;
    /**
     * The immutable purpose of this CryptoKey.
     */
    purpose?: string | null;
    /**
     * next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.  If rotation_period is set, next_rotation_time must also be set.  Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    rotationPeriod?: string | null;
    /**
     * A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.
     */
    versionTemplate?: Schema$CryptoKeyVersionTemplate;
  }
  /**
   * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material.  An ENABLED version can be used for cryptographic operations.  For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
   */
  export interface Schema$CryptoKeyVersion {
    /**
     * Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
     */
    algorithm?: string | null;
    /**
     * Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM.
     */
    attestation?: Schema$KeyOperationAttestation;
    /**
     * Output only. The time at which this CryptoKeyVersion was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time this CryptoKeyVersion&#39;s key material was destroyed. Only present if state is DESTROYED.
     */
    destroyEventTime?: string | null;
    /**
     * Output only. The time this CryptoKeyVersion&#39;s key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.
     */
    destroyTime?: string | null;
    /**
     * Output only. The time this CryptoKeyVersion&#39;s key material was generated.
     */
    generateTime?: string | null;
    /**
     * Output only. The root cause of an import failure. Only present if state is IMPORT_FAILED.
     */
    importFailureReason?: string | null;
    /**
     * Output only. The name of the ImportJob used to import this CryptoKeyVersion. Only present if the underlying key material was imported.
     */
    importJob?: string | null;
    /**
     * Output only. The time at which this CryptoKeyVersion&#39;s key material was imported.
     */
    importTime?: string | null;
    /**
     * Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x.
     */
    name?: string | null;
    /**
     * Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
     */
    protectionLevel?: string | null;
    /**
     * The current state of the CryptoKeyVersion.
     */
    state?: string | null;
  }
  /**
   * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
   */
  export interface Schema$CryptoKeyVersionTemplate {
    /**
     * Required. Algorithm to use when creating a CryptoKeyVersion based on this template.  For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT.
     */
    algorithm?: string | null;
    /**
     * ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE.
     */
    protectionLevel?: string | null;
  }
  /**
   * Request message for KeyManagementService.Decrypt.
   */
  export interface Schema$DecryptRequest {
    /**
     * Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data.
     */
    additionalAuthenticatedData?: string | null;
    /**
     * Required. The encrypted data originally returned in EncryptResponse.ciphertext.
     */
    ciphertext?: string | null;
  }
  /**
   * Response message for KeyManagementService.Decrypt.
   */
  export interface Schema$DecryptResponse {
    /**
     * The decrypted data originally supplied in EncryptRequest.plaintext.
     */
    plaintext?: string | null;
  }
  /**
   * Request message for KeyManagementService.DestroyCryptoKeyVersion.
   */
  export interface Schema$DestroyCryptoKeyVersionRequest {}
  /**
   * A Digest holds a cryptographic message digest.
   */
  export interface Schema$Digest {
    /**
     * A message digest produced with the SHA-256 algorithm.
     */
    sha256?: string | null;
    /**
     * A message digest produced with the SHA-384 algorithm.
     */
    sha384?: string | null;
    /**
     * A message digest produced with the SHA-512 algorithm.
     */
    sha512?: string | null;
  }
  /**
   * Request message for KeyManagementService.Encrypt.
   */
  export interface Schema$EncryptRequest {
    /**
     * Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data.  The maximum size depends on the key version&#39;s protection_level. For SOFTWARE keys, the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
     */
    additionalAuthenticatedData?: string | null;
    /**
     * Required. The data to encrypt. Must be no larger than 64KiB.  The maximum size depends on the key version&#39;s protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
     */
    plaintext?: string | null;
  }
  /**
   * Response message for KeyManagementService.Encrypt.
   */
  export interface Schema$EncryptResponse {
    /**
     * The encrypted data.
     */
    ciphertext?: string | null;
    /**
     * The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
     */
    name?: string | null;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Request message for KeyManagementService.ImportCryptoKeyVersion.
   */
  export interface Schema$ImportCryptoKeyVersionRequest {
    /**
     * Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.
     */
    algorithm?: string | null;
    /**
     * Required. The name of the ImportJob that was used to wrap this key material.
     */
    importJob?: string | null;
    /**
     * Wrapped key material produced with RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256.  This field contains the concatenation of two wrapped keys: &lt;ol&gt;   &lt;li&gt;An ephemeral AES-256 wrapping key wrapped with the       public_key using RSAES-OAEP with SHA-1,       MGF1 with SHA-1, and an empty label.   &lt;/li&gt;   &lt;li&gt;The key to be imported, wrapped with the ephemeral AES-256 key       using AES-KWP (RFC 5649).   &lt;/li&gt; &lt;/ol&gt;  This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP.
     */
    rsaAesWrappedKey?: string | null;
  }
  /**
   * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS.  When an ImportJob is created, Cloud KMS will generate a &quot;wrapping key&quot;, which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material.  Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key.  An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob&#39;s public key.  For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
   */
  export interface Schema$ImportJob {
    /**
     * Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM.
     */
    attestation?: Schema$KeyOperationAttestation;
    /**
     * Output only. The time at which this ImportJob was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time this ImportJob expired. Only present if state is EXPIRED.
     */
    expireEventTime?: string | null;
    /**
     * Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.
     */
    expireTime?: string | null;
    /**
     * Output only. The time this ImportJob&#39;s key material was generated.
     */
    generateTime?: string | null;
    /**
     * Required and immutable. The wrapping method to be used for incoming key material.
     */
    importMethod?: string | null;
    /**
     * Output only. The resource name for this ImportJob in the format `projects/x/locations/x/keyRings/x/importJobs/x.
     */
    name?: string | null;
    /**
     * Required and immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
     */
    protectionLevel?: string | null;
    /**
     * Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE.
     */
    publicKey?: Schema$WrappingPublicKey;
    /**
     * Output only. The current state of the ImportJob, indicating if it can be used.
     */
    state?: string | null;
  }
  /**
   * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
   */
  export interface Schema$KeyOperationAttestation {
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
   * A KeyRing is a toplevel logical grouping of CryptoKeys.
   */
  export interface Schema$KeyRing {
    /**
     * Output only. The time at which this KeyRing was created.
     */
    createTime?: string | null;
    /**
     * Output only. The resource name for the KeyRing in the format `projects/x/locations/x/keyRings/x.
     */
    name?: string | null;
  }
  /**
   * Response message for KeyManagementService.ListCryptoKeys.
   */
  export interface Schema$ListCryptoKeysResponse {
    /**
     * The list of CryptoKeys.
     */
    cryptoKeys?: Schema$CryptoKey[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of CryptoKeys that matched the query.
     */
    totalSize?: number | null;
  }
  /**
   * Response message for KeyManagementService.ListCryptoKeyVersions.
   */
  export interface Schema$ListCryptoKeyVersionsResponse {
    /**
     * The list of CryptoKeyVersions.
     */
    cryptoKeyVersions?: Schema$CryptoKeyVersion[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of CryptoKeyVersions that matched the query.
     */
    totalSize?: number | null;
  }
  /**
   * Response message for KeyManagementService.ListImportJobs.
   */
  export interface Schema$ListImportJobsResponse {
    /**
     * The list of ImportJobs.
     */
    importJobs?: Schema$ImportJob[];
    /**
     * A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of ImportJobs that matched the query.
     */
    totalSize?: number | null;
  }
  /**
   * Response message for KeyManagementService.ListKeyRings.
   */
  export interface Schema$ListKeyRingsResponse {
    /**
     * The list of KeyRings.
     */
    keyRings?: Schema$KeyRing[];
    /**
     * A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of KeyRings that matched the query.
     */
    totalSize?: number | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * Cloud KMS metadata for the given google.cloud.location.Location.
   */
  export interface Schema$LocationMetadata {
    /**
     * Indicates whether CryptoKeys with protection_level HSM can be created in this location.
     */
    hsmAvailable?: boolean | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Deprecated.
     */
    version?: number | null;
  }
  /**
   * The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.
   */
  export interface Schema$PublicKey {
    /**
     * The Algorithm associated with this key.
     */
    algorithm?: string | null;
    /**
     * The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).
     */
    pem?: string | null;
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
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
   */
  export interface Schema$UpdateCryptoKeyPrimaryVersionRequest {
    /**
     * The id of the child CryptoKeyVersion to use as primary.
     */
    cryptoKeyVersionId?: string | null;
  }
  /**
   * The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
   */
  export interface Schema$WrappingPublicKey {
    /**
     * The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).
     */
    pem?: string | null;
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
    keyRings: Resource$Projects$Locations$Keyrings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.keyRings = new Resource$Projects$Locations$Keyrings(this.context);
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
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
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
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Keyrings {
    context: APIRequestContext;
    cryptoKeys: Resource$Projects$Locations$Keyrings$Cryptokeys;
    importJobs: Resource$Projects$Locations$Keyrings$Importjobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cryptoKeys = new Resource$Projects$Locations$Keyrings$Cryptokeys(
        this.context
      );
      this.importJobs = new Resource$Projects$Locations$Keyrings$Importjobs(
        this.context
      );
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
    create(
      params?: Params$Resource$Projects$Locations$Keyrings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$KeyRing>;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$KeyRing>,
      callback: BodyResponseCallback<Schema$KeyRing>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Create,
      callback: BodyResponseCallback<Schema$KeyRing>
    ): void;
    create(callback: BodyResponseCallback<Schema$KeyRing>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Create
        | BodyResponseCallback<Schema$KeyRing>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$KeyRing>,
      callback?: BodyResponseCallback<Schema$KeyRing>
    ): void | GaxiosPromise<Schema$KeyRing> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keyRings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
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
    get(
      params?: Params$Resource$Projects$Locations$Keyrings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$KeyRing>;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$KeyRing>,
      callback: BodyResponseCallback<Schema$KeyRing>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Get,
      callback: BodyResponseCallback<Schema$KeyRing>
    ): void;
    get(callback: BodyResponseCallback<Schema$KeyRing>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Get
        | BodyResponseCallback<Schema$KeyRing>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$KeyRing>,
      callback?: BodyResponseCallback<Schema$KeyRing>
    ): void | GaxiosPromise<Schema$KeyRing> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
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
        createAPIRequest<Schema$KeyRing>(parameters, callback);
      } else {
        return createAPIRequest<Schema$KeyRing>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias cloudkms.projects.locations.keyRings.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Keyrings$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
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
     * @param {string=} params.filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string=} params.orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order.  For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer=} params.pageSize Optional limit on the number of KeyRings to include in the response.  Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
     * @param {string} params.parent Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Keyrings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListKeyRingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListKeyRingsResponse>,
      callback: BodyResponseCallback<Schema$ListKeyRingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$List,
      callback: BodyResponseCallback<Schema$ListKeyRingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListKeyRingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$List
        | BodyResponseCallback<Schema$ListKeyRingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListKeyRingsResponse>,
      callback?: BodyResponseCallback<Schema$ListKeyRingsResponse>
    ): void | GaxiosPromise<Schema$ListKeyRingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keyRings').replace(
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
        createAPIRequest<Schema$ListKeyRingsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListKeyRingsResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
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
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Keyrings$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
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
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Keyrings$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Keyrings$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Keyrings$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Keyrings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     */
    keyRingId?: string;
    /**
     * Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$KeyRing;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the KeyRing to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order.  For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    orderBy?: string;
    /**
     * Optional limit on the number of KeyRings to include in the response.  Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Keyrings$Cryptokeys {
    context: APIRequestContext;
    cryptoKeyVersions: Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cryptoKeyVersions = new Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions(
        this.context
      );
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.create
     * @desc Create a new CryptoKey within a KeyRing.  CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cryptoKeyId Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent Required. The name of the KeyRing associated with the CryptoKeys.
     * @param {boolean=} params.skipInitialVersionCreation If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.
     * @param {().CryptoKey} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKey>;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    create(callback: BodyResponseCallback<Schema$CryptoKey>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create
        | BodyResponseCallback<Schema$CryptoKey>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>
    ): void | GaxiosPromise<Schema$CryptoKey> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeys').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CryptoKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKey>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.decrypt
     * @desc Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
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
    decrypt(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DecryptResponse>;
    decrypt(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt,
      options: MethodOptions | BodyResponseCallback<Schema$DecryptResponse>,
      callback: BodyResponseCallback<Schema$DecryptResponse>
    ): void;
    decrypt(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt,
      callback: BodyResponseCallback<Schema$DecryptResponse>
    ): void;
    decrypt(callback: BodyResponseCallback<Schema$DecryptResponse>): void;
    decrypt(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt
        | BodyResponseCallback<Schema$DecryptResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DecryptResponse>,
      callback?: BodyResponseCallback<Schema$DecryptResponse>
    ): void | GaxiosPromise<Schema$DecryptResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:decrypt').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DecryptResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DecryptResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.encrypt
     * @desc Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
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
    encrypt(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EncryptResponse>;
    encrypt(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt,
      options: MethodOptions | BodyResponseCallback<Schema$EncryptResponse>,
      callback: BodyResponseCallback<Schema$EncryptResponse>
    ): void;
    encrypt(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt,
      callback: BodyResponseCallback<Schema$EncryptResponse>
    ): void;
    encrypt(callback: BodyResponseCallback<Schema$EncryptResponse>): void;
    encrypt(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt
        | BodyResponseCallback<Schema$EncryptResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$EncryptResponse>,
      callback?: BodyResponseCallback<Schema$EncryptResponse>
    ): void | GaxiosPromise<Schema$EncryptResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:encrypt').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EncryptResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EncryptResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.get
     * @desc Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the CryptoKey to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKey>;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    get(callback: BodyResponseCallback<Schema$CryptoKey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get
        | BodyResponseCallback<Schema$CryptoKey>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>
    ): void | GaxiosPromise<Schema$CryptoKey> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
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
        createAPIRequest<Schema$CryptoKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKey>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
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
     * @param {string=} params.filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string=} params.orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer=} params.pageSize Optional limit on the number of CryptoKeys to include in the response.  Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
     * @param {string} params.parent Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
     * @param {string=} params.versionView The fields of the primary version to include in the response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCryptoKeysResponse>;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCryptoKeysResponse>,
      callback: BodyResponseCallback<Schema$ListCryptoKeysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List,
      callback: BodyResponseCallback<Schema$ListCryptoKeysResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCryptoKeysResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List
        | BodyResponseCallback<Schema$ListCryptoKeysResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCryptoKeysResponse>,
      callback?: BodyResponseCallback<Schema$ListCryptoKeysResponse>
    ): void | GaxiosPromise<Schema$ListCryptoKeysResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
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
    patch(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKey>;
    patch(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CryptoKey>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch
        | BodyResponseCallback<Schema$CryptoKey>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>
    ): void | GaxiosPromise<Schema$CryptoKey> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CryptoKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKey>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
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
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
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
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
     * @desc Update the version of a CryptoKey that will be used in Encrypt.  Returns an error if called on an asymmetric key.
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
    updatePrimaryVersion(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKey>;
    updatePrimaryVersion(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKey>,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    updatePrimaryVersion(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion,
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    updatePrimaryVersion(
      callback: BodyResponseCallback<Schema$CryptoKey>
    ): void;
    updatePrimaryVersion(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion
        | BodyResponseCallback<Schema$CryptoKey>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKey>,
      callback?: BodyResponseCallback<Schema$CryptoKey>
    ): void | GaxiosPromise<Schema$CryptoKey> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:updatePrimaryVersion').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CryptoKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKey>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     */
    cryptoKeyId?: string;
    /**
     * Required. The name of the KeyRing associated with the CryptoKeys.
     */
    parent?: string;
    /**
     * If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.
     */
    skipInitialVersionCreation?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CryptoKey;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Decrypt
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DecryptRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Encrypt
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption.  If a CryptoKey is specified, the server will use its primary version.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EncryptRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the CryptoKey to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    orderBy?: string;
    /**
     * Optional limit on the number of CryptoKeys to include in the response.  Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
     */
    parent?: string;
    /**
     * The fields of the primary version to include in the response.
     */
    versionView?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
     */
    name?: string;
    /**
     * Required list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CryptoKey;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Updateprimaryversion
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the CryptoKey to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateCryptoKeyPrimaryVersionRequest;
  }

  export class Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt
     * @desc Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the CryptoKeyVersion to use for decryption.
     * @param {().AsymmetricDecryptRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asymmetricDecrypt(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AsymmetricDecryptResponse>;
    asymmetricDecrypt(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AsymmetricDecryptResponse>,
      callback: BodyResponseCallback<Schema$AsymmetricDecryptResponse>
    ): void;
    asymmetricDecrypt(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt,
      callback: BodyResponseCallback<Schema$AsymmetricDecryptResponse>
    ): void;
    asymmetricDecrypt(
      callback: BodyResponseCallback<Schema$AsymmetricDecryptResponse>
    ): void;
    asymmetricDecrypt(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt
        | BodyResponseCallback<Schema$AsymmetricDecryptResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AsymmetricDecryptResponse>,
      callback?: BodyResponseCallback<Schema$AsymmetricDecryptResponse>
    ): void | GaxiosPromise<Schema$AsymmetricDecryptResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:asymmetricDecrypt').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AsymmetricDecryptResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AsymmetricDecryptResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign
     * @desc Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the CryptoKeyVersion to use for signing.
     * @param {().AsymmetricSignRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asymmetricSign(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AsymmetricSignResponse>;
    asymmetricSign(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AsymmetricSignResponse>,
      callback: BodyResponseCallback<Schema$AsymmetricSignResponse>
    ): void;
    asymmetricSign(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign,
      callback: BodyResponseCallback<Schema$AsymmetricSignResponse>
    ): void;
    asymmetricSign(
      callback: BodyResponseCallback<Schema$AsymmetricSignResponse>
    ): void;
    asymmetricSign(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign
        | BodyResponseCallback<Schema$AsymmetricSignResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AsymmetricSignResponse>,
      callback?: BodyResponseCallback<Schema$AsymmetricSignResponse>
    ): void | GaxiosPromise<Schema$AsymmetricSignResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:asymmetricSign').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AsymmetricSignResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AsymmetricSignResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
     * @desc Create a new CryptoKeyVersion in a CryptoKey.  The server will assign the next sequential id. If unset, state will be set to ENABLED.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the CryptoKey associated with the CryptoKeyVersions.
     * @param {().CryptoKeyVersion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKeyVersion>;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    create(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void | GaxiosPromise<Schema$CryptoKeyVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeyVersions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
     * @desc Schedule a CryptoKeyVersion for destruction.  Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED and destroy_time will be set to a time 24 hours in the future, at which point the state will be changed to DESTROYED, and the key material will be irrevocably destroyed.  Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the CryptoKeyVersion to destroy.
     * @param {().DestroyCryptoKeyVersionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    destroy(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKeyVersion>;
    destroy(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    destroy(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    destroy(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    destroy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void | GaxiosPromise<Schema$CryptoKeyVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:destroy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
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
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the CryptoKeyVersion to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKeyVersion>;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void | GaxiosPromise<Schema$CryptoKeyVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
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
        createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey
     * @desc Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the CryptoKeyVersion public key to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getPublicKey(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PublicKey>;
    getPublicKey(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey,
      options: MethodOptions | BodyResponseCallback<Schema$PublicKey>,
      callback: BodyResponseCallback<Schema$PublicKey>
    ): void;
    getPublicKey(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey,
      callback: BodyResponseCallback<Schema$PublicKey>
    ): void;
    getPublicKey(callback: BodyResponseCallback<Schema$PublicKey>): void;
    getPublicKey(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey
        | BodyResponseCallback<Schema$PublicKey>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PublicKey>,
      callback?: BodyResponseCallback<Schema$PublicKey>
    ): void | GaxiosPromise<Schema$PublicKey> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/publicKey').replace(
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
        createAPIRequest<Schema$PublicKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PublicKey>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import
     * @desc Imports a new CryptoKeyVersion into an existing CryptoKey using the wrapped key material provided in the request.  The version ID will be assigned the next sequential id within the CryptoKey.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the CryptoKey to be imported into.
     * @param {().ImportCryptoKeyVersionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKeyVersion>;
    import(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    import(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void | GaxiosPromise<Schema$CryptoKeyVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeyVersions:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
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
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string=} params.orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer=} params.pageSize Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
     * @param {string} params.parent Required. The resource name of the CryptoKey to list, in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
     * @param {string=} params.view The fields to include in the response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCryptoKeyVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List,
      callback: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List
        | BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>,
      callback?: BodyResponseCallback<Schema$ListCryptoKeyVersionsResponse>
    ): void | GaxiosPromise<Schema$ListCryptoKeyVersionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cryptoKeyVersions').replace(
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
        createAPIRequest<Schema$ListCryptoKeyVersionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListCryptoKeyVersionsResponse>(
          parameters
        );
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
     * @desc Update a CryptoKeyVersion's metadata.  state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
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
    patch(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKeyVersion>;
    patch(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void | GaxiosPromise<Schema$CryptoKeyVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
     * @desc Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state.  Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the CryptoKeyVersion to restore.
     * @param {().RestoreCryptoKeyVersionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restore(
      params?: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CryptoKeyVersion>;
    restore(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore,
      options: MethodOptions | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore,
      callback: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void;
    restore(callback: BodyResponseCallback<Schema$CryptoKeyVersion>): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CryptoKeyVersion>,
      callback?: BodyResponseCallback<Schema$CryptoKeyVersion>
    ): void | GaxiosPromise<Schema$CryptoKeyVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restore').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CryptoKeyVersion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CryptoKeyVersion>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricdecrypt
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the CryptoKeyVersion to use for decryption.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsymmetricDecryptRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Asymmetricsign
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the CryptoKeyVersion to use for signing.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsymmetricSignRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the CryptoKey associated with the CryptoKeyVersions.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CryptoKeyVersion;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Destroy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the CryptoKeyVersion to destroy.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DestroyCryptoKeyVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the CryptoKeyVersion to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Getpublickey
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the CryptoKeyVersion public key to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the CryptoKey to be imported into.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportCryptoKeyVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    orderBy?: string;
    /**
     * Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the CryptoKey to list, in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
     */
    parent?: string;
    /**
     * The fields to include in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`.
     */
    name?: string;
    /**
     * Required list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CryptoKeyVersion;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Cryptokeys$Cryptokeyversions$Restore
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the CryptoKeyVersion to restore.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestoreCryptoKeyVersionRequest;
  }

  export class Resource$Projects$Locations$Keyrings$Importjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudkms.projects.locations.keyRings.importJobs.create
     * @desc Create a new ImportJob within a KeyRing.  ImportJob.import_method is required.
     * @alias cloudkms.projects.locations.keyRings.importJobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.importJobId Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     * @param {string} params.parent Required. The name of the KeyRing associated with the ImportJobs.
     * @param {().ImportJob} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImportJob>;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ImportJob>,
      callback: BodyResponseCallback<Schema$ImportJob>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Create,
      callback: BodyResponseCallback<Schema$ImportJob>
    ): void;
    create(callback: BodyResponseCallback<Schema$ImportJob>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Importjobs$Create
        | BodyResponseCallback<Schema$ImportJob>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImportJob>,
      callback?: BodyResponseCallback<Schema$ImportJob>
    ): void | GaxiosPromise<Schema$ImportJob> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Importjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Importjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/importJobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImportJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImportJob>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.importJobs.get
     * @desc Returns metadata for a given ImportJob.
     * @alias cloudkms.projects.locations.keyRings.importJobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the ImportJob to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImportJob>;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ImportJob>,
      callback: BodyResponseCallback<Schema$ImportJob>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Get,
      callback: BodyResponseCallback<Schema$ImportJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$ImportJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Importjobs$Get
        | BodyResponseCallback<Schema$ImportJob>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImportJob>,
      callback?: BodyResponseCallback<Schema$ImportJob>
    ): void | GaxiosPromise<Schema$ImportJob> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Importjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Importjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
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
        createAPIRequest<Schema$ImportJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImportJob>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.importJobs.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias cloudkms.projects.locations.keyRings.importJobs.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.importJobs.list
     * @desc Lists ImportJobs.
     * @alias cloudkms.projects.locations.keyRings.importJobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {string=} params.orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     * @param {integer=} params.pageSize Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.
     * @param {string} params.parent Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListImportJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListImportJobsResponse>,
      callback: BodyResponseCallback<Schema$ListImportJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$List,
      callback: BodyResponseCallback<Schema$ListImportJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListImportJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Importjobs$List
        | BodyResponseCallback<Schema$ListImportJobsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListImportJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListImportJobsResponse>
    ): void | GaxiosPromise<Schema$ListImportJobsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Importjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Importjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/importJobs').replace(
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
        createAPIRequest<Schema$ListImportJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListImportJobsResponse>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.importJobs.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias cloudkms.projects.locations.keyRings.importJobs.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudkms.projects.locations.keyRings.importJobs.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias cloudkms.projects.locations.keyRings.importJobs.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudkms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
     */
    importJobId?: string;
    /**
     * Required. The name of the KeyRing associated with the ImportJobs.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportJob;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the ImportJob to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
     */
    orderBy?: string;
    /**
     * Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Keyrings$Importjobs$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
