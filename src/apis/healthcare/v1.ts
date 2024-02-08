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

export namespace healthcare_v1 {
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
   * Cloud Healthcare API
   *
   * Manage, store, and access healthcare data in Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const healthcare = google.healthcare('v1');
   * ```
   */
  export class Healthcare {
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
   * Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state.
   */
  export interface Schema$ActivateConsentRequest {
    /**
     * Required. The resource name of the Consent artifact that contains documentation of the user's consent, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consentArtifacts/{consent_artifact_id\}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.
     */
    consentArtifact?: string | null;
    /**
     * Timestamp in UTC of when this Consent is considered expired.
     */
    expireTime?: string | null;
    /**
     * The time to live for this Consent from when it is marked as active.
     */
    ttl?: string | null;
  }
  /**
   * The request to analyze healthcare entities in a document.
   */
  export interface Schema$AnalyzeEntitiesRequest {
    /**
     * Optional. Alternative output format to be generated based on the results of analysis.
     */
    alternativeOutputFormat?: string | null;
    /**
     * document_content is a document to be annotated.
     */
    documentContent?: string | null;
    /**
     * A list of licensed vocabularies to use in the request, in addition to the default unlicensed vocabularies.
     */
    licensedVocabularies?: string[] | null;
  }
  /**
   * Includes recognized entity mentions and relationships between them.
   */
  export interface Schema$AnalyzeEntitiesResponse {
    /**
     * The union of all the candidate entities that the entity_mentions in this response could link to. These are UMLS concepts or normalized mention content.
     */
    entities?: Schema$Entity[];
    /**
     * The `entity_mentions` field contains all the annotated medical entities that were mentioned in the provided document.
     */
    entityMentions?: Schema$EntityMention[];
    /**
     * The FHIR bundle ([`R4`](http://hl7.org/fhir/R4/bundle.html)) that includes all the entities, the entity mentions, and the relationships in JSON format.
     */
    fhirBundle?: string | null;
    /**
     * relationships contains all the binary relationships that were identified between entity mentions within the provided document.
     */
    relationships?: Schema$EntityMentionRelationship[];
  }
  /**
   * Archives the specified User data mapping.
   */
  export interface Schema$ArchiveUserDataMappingRequest {}
  /**
   * Archives the specified User data mapping.
   */
  export interface Schema$ArchiveUserDataMappingResponse {}
  /**
   * An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.
   */
  export interface Schema$Attribute {
    /**
     * Indicates the name of an attribute defined in the consent store.
     */
    attributeDefinitionId?: string | null;
    /**
     * Required. The value of the attribute. Must be an acceptable value as defined in the consent store. For example, if the consent store defines "data type" with acceptable values "questionnaire" and "step-count", when the attribute name is data type, this field must contain one of those values.
     */
    values?: string[] | null;
  }
  /**
   * A client-defined consent attribute.
   */
  export interface Schema$AttributeDefinition {
    /**
     * Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation.
     */
    allowedValues?: string[] | null;
    /**
     * Required. The category of the attribute. The value of this field cannot be changed after creation.
     */
    category?: string | null;
    /**
     * Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value.
     */
    consentDefaultValues?: string[] | null;
    /**
     * Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`.
     */
    dataMappingDefaultValue?: string | null;
    /**
     * Optional. A description of the attribute.
     */
    description?: string | null;
    /**
     * Identifier. Resource name of the Attribute definition, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/attributeDefinitions/{attribute_definition_id\}`. Cannot be changed after creation.
     */
    name?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
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
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
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
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Mask a string by replacing its characters with a fixed character.
   */
  export interface Schema$CharacterMaskConfig {
    /**
     * Character to mask the sensitive values. If not supplied, defaults to "*".
     */
    maskingCharacter?: string | null;
  }
  /**
   * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
   */
  export interface Schema$CheckDataAccessRequest {
    /**
     * Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the evaluated User data mapping, must exist in the current `consent_store`, and have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If no selection is specified, the access request is evaluated against all `ACTIVE` unexpired Consents with the same `user_id` as the evaluated User data mapping.
     */
    consentList?: Schema$ConsentList;
    /**
     * Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store.
     */
    dataId?: string | null;
    /**
     * The values of request attributes associated with this access request.
     */
    requestAttributes?: {[key: string]: string} | null;
    /**
     * Optional. The view for CheckDataAccessResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.
     */
    responseView?: string | null;
  }
  /**
   * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
   */
  export interface Schema$CheckDataAccessResponse {
    /**
     * The resource names of all evaluated Consents mapped to their evaluation.
     */
    consentDetails?: {[key: string]: Schema$ConsentEvaluation} | null;
    /**
     * Whether the requested resource is consented for the given use.
     */
    consented?: boolean | null;
  }
  /**
   * Represents a user's consent.
   */
  export interface Schema$Consent {
    /**
     * Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consentArtifacts/{consent_artifact_id\}`.
     */
    consentArtifact?: string | null;
    /**
     * Timestamp in UTC of when this Consent is considered expired.
     */
    expireTime?: string | null;
    /**
     * Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Identifier. Resource name of the Consent, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. Cannot be changed after creation.
     */
    name?: string | null;
    /**
     * Optional. Represents a user's consent in terms of the resources that can be accessed and under what conditions.
     */
    policies?: Schema$GoogleCloudHealthcareV1ConsentPolicy[];
    /**
     * Output only. The timestamp that the revision was created.
     */
    revisionCreateTime?: string | null;
    /**
     * Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending `@{revision_id\}` to the Consent's resource name.
     */
    revisionId?: string | null;
    /**
     * Required. Indicates the current state of this Consent.
     */
    state?: string | null;
    /**
     * Input only. The time to live for this Consent from when it is created.
     */
    ttl?: string | null;
    /**
     * Required. User's UUID provided by the client.
     */
    userId?: string | null;
  }
  /**
   * Documentation of a user's consent.
   */
  export interface Schema$ConsentArtifact {
    /**
     * Optional. Screenshots, PDFs, or other binary information documenting the user's consent.
     */
    consentContentScreenshots?: Schema$Image[];
    /**
     * Optional. An string indicating the version of the consent information shown to the user.
     */
    consentContentVersion?: string | null;
    /**
     * Optional. A signature from a guardian.
     */
    guardianSignature?: Schema$Signature;
    /**
     * Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Identifier. Resource name of the Consent artifact, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consentArtifacts/{consent_artifact_id\}`. Cannot be changed after creation.
     */
    name?: string | null;
    /**
     * Required. User's UUID provided by the client.
     */
    userId?: string | null;
    /**
     * Optional. User's signature.
     */
    userSignature?: Schema$Signature;
    /**
     * Optional. A signature from a witness.
     */
    witnessSignature?: Schema$Signature;
  }
  /**
   * The detailed evaluation of a particular Consent.
   */
  export interface Schema$ConsentEvaluation {
    /**
     * The evaluation result.
     */
    evaluationResult?: string | null;
  }
  /**
   * List of resource names of Consent resources.
   */
  export interface Schema$ConsentList {
    /**
     * The resource names of the Consents to evaluate against, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`.
     */
    consents?: string[] | null;
  }
  /**
   * Represents a consent store.
   */
  export interface Schema$ConsentStore {
    /**
     * Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.
     */
    defaultConsentTtl?: string | null;
    /**
     * Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.
     */
    enableConsentCreateOnUpdate?: boolean | null;
    /**
     * Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll\}\p{Lo\}{0,62\}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Resource name of the consent store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}`. Cannot be changed after creation.
     */
    name?: string | null;
  }
  /**
   * Creates a new message.
   */
  export interface Schema$CreateMessageRequest {
    /**
     * Required. HL7v2 message.
     */
    message?: Schema$Message;
  }
  /**
   * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).
   */
  export interface Schema$CryptoHashConfig {
    /**
     * An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used when neither `crypto_key` nor `kms_wrapped` is specified. Must not be set if `kms_wrapped` is set.
     */
    cryptoKey?: string | null;
    /**
     * KMS wrapped key. Must not be set if `crypto_key` is set.
     */
    kmsWrapped?: Schema$KmsWrappedCryptoKey;
  }
  /**
   * A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
   */
  export interface Schema$Dataset {
    /**
     * Identifier. Resource name of the dataset, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}`.
     */
    name?: string | null;
    /**
     * The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified.
     */
    timeZone?: string | null;
  }
  /**
   * Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
   */
  export interface Schema$DateShiftConfig {
    /**
     * An AES 128/192/256 bit key. The date shift is computed based on this key and the patient ID. If the patient ID is empty for a DICOM resource, the date shift is computed based on this key and the study instance UID. If `crypto_key` is not set, then `kms_wrapped` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `kms_wrapped` is set.
     */
    cryptoKey?: string | null;
    /**
     * KMS wrapped key. If `kms_wrapped` is not set, then `crypto_key` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `crypto_key` is set.
     */
    kmsWrapped?: Schema$KmsWrappedCryptoKey;
  }
  /**
   * Contains configuration for streaming de-identified FHIR export.
   */
  export interface Schema$DeidentifiedStoreDestination {
    /**
     * The configuration to use when de-identifying resources that are added to this store.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * The full resource name of a Cloud Healthcare FHIR store, for example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    store?: string | null;
  }
  /**
   * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
   */
  export interface Schema$DeidentifyConfig {
    /**
     * Configures de-id of application/DICOM content.
     */
    dicom?: Schema$DicomConfig;
    /**
     * Configures de-id of application/FHIR content.
     */
    fhir?: Schema$FhirConfig;
    /**
     * Configures de-identification of image pixels wherever they are found in the source_dataset.
     */
    image?: Schema$ImageConfig;
    /**
     * Configures de-identification of text wherever it is found in the source_dataset.
     */
    text?: Schema$TextConfig;
    /**
     * Ensures in-flight data remains in the region of origin during de-identification. Using this option results in a significant reduction of throughput, and is not compatible with `LOCATION` or `ORGANIZATION_NAME` infoTypes. `LOCATION` must be excluded within TextConfig, and must also be excluded within ImageConfig if image redaction is required.
     */
    useRegionalDataProcessing?: boolean | null;
  }
  /**
   * Redacts identifying information from the specified dataset.
   */
  export interface Schema$DeidentifyDatasetRequest {
    /**
     * Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * Required. The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported.
     */
    destinationDataset?: string | null;
    /**
     * Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id\}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.
     */
    gcsConfigUri?: string | null;
  }
  /**
   * Creates a new DICOM store with sensitive information de-identified.
   */
  export interface Schema$DeidentifyDicomStoreRequest {
    /**
     * Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * Required. The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store.
     */
    destinationStore?: string | null;
    /**
     * Filter configuration.
     */
    filterConfig?: Schema$DicomFilterConfig;
    /**
     * Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id\}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.
     */
    gcsConfigUri?: string | null;
  }
  /**
   * Creates a new FHIR store with sensitive information de-identified.
   */
  export interface Schema$DeidentifyFhirStoreRequest {
    /**
     * Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * Required. The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store.
     */
    destinationStore?: string | null;
    /**
     * Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id\}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.
     */
    gcsConfigUri?: string | null;
    /**
     * A filter specifying the resources to include in the output. If not specified, all resources are included in the output.
     */
    resourceFilter?: Schema$FhirFilter;
    /**
     * If true, skips resources that are created or modified after the de-identify operation is created.
     */
    skipModifiedResources?: boolean | null;
  }
  /**
   * Contains a summary of the Deidentify operation.
   */
  export interface Schema$DeidentifySummary {}
  /**
   * Specifies the parameters needed for de-identification of DICOM stores.
   */
  export interface Schema$DicomConfig {
    /**
     * Tag filtering profile that determines which tags to keep/remove.
     */
    filterProfile?: string | null;
    /**
     * List of tags to keep. Remove all other tags.
     */
    keepList?: Schema$TagFilterList;
    /**
     * List of tags to remove. Keep all other tags.
     */
    removeList?: Schema$TagFilterList;
    /**
     * If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard's reasoning: "Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual's identity." http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html
     */
    skipIdRedaction?: boolean | null;
  }
  /**
   * Specifies the filter configuration for DICOM resources.
   */
  export interface Schema$DicomFilterConfig {
    /**
     * The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (\n or \r\n). Each resource path must be in the format "/studies/{studyUID\}[/series/{seriesUID\}[/instances/{instanceUID\}]]" The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location.
     */
    resourcePathsGcsUri?: string | null;
  }
  /**
   * Represents a DICOM store.
   */
  export interface Schema$DicomStore {
    /**
     * User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll\}\p{Lo\}{0,62\} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\} No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Resource name of the DICOM store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    name?: string | null;
    /**
     * Notification destination for new DICOM instances. Supplied by the client.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * Optional. A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.
     */
    streamConfigs?: Schema$GoogleCloudHealthcareV1DicomStreamConfig[];
  }
  /**
   * DicomStoreMetrics contains metrics describing a DICOM store.
   */
  export interface Schema$DicomStoreMetrics {
    /**
     * Total blob storage bytes for all instances in the store.
     */
    blobStorageSizeBytes?: string | null;
    /**
     * Number of instances in the store.
     */
    instanceCount?: string | null;
    /**
     * Resource name of the DICOM store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    name?: string | null;
    /**
     * Number of series in the store.
     */
    seriesCount?: string | null;
    /**
     * Total structured storage bytes for all instances in the store.
     */
    structuredStorageSizeBytes?: string | null;
    /**
     * Number of studies in the store.
     */
    studyCount?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The candidate entities that an entity mention could link to.
   */
  export interface Schema$Entity {
    /**
     * entity_id is a first class field entity_id uniquely identifies this concept and its meta-vocabulary. For example, "UMLS/C0000970".
     */
    entityId?: string | null;
    /**
     * preferred_term is the preferred term for this concept. For example, "Acetaminophen". For ad hoc entities formed by normalization, this is the most popular unnormalized string.
     */
    preferredTerm?: string | null;
    /**
     * Vocabulary codes are first-class fields and differentiated from the concept unique identifier (entity_id). vocabulary_codes contains the representation of this concept in particular vocabularies, such as ICD-10, SNOMED-CT and RxNORM. These are prefixed by the name of the vocabulary, followed by the unique code within that vocabulary. For example, "RXNORM/A10334543".
     */
    vocabularyCodes?: string[] | null;
  }
  /**
   * An entity mention in the document.
   */
  export interface Schema$EntityMention {
    /**
     * The certainty assessment of the entity mention. Its value is one of: LIKELY, SOMEWHAT_LIKELY, UNCERTAIN, SOMEWHAT_UNLIKELY, UNLIKELY, CONDITIONAL
     */
    certaintyAssessment?: Schema$Feature;
    /**
     * The model's confidence in this entity mention annotation. A number between 0 and 1.
     */
    confidence?: number | null;
    /**
     * linked_entities are candidate ontological concepts that this entity mention may refer to. They are sorted by decreasing confidence.
     */
    linkedEntities?: Schema$LinkedEntity[];
    /**
     * mention_id uniquely identifies each entity mention in a single response.
     */
    mentionId?: string | null;
    /**
     * The subject this entity mention relates to. Its value is one of: PATIENT, FAMILY_MEMBER, OTHER
     */
    subject?: Schema$Feature;
    /**
     * How this entity mention relates to the subject temporally. Its value is one of: CURRENT, CLINICAL_HISTORY, FAMILY_HISTORY, UPCOMING, ALLERGY
     */
    temporalAssessment?: Schema$Feature;
    /**
     * text is the location of the entity mention in the document.
     */
    text?: Schema$TextSpan;
    /**
     * The semantic type of the entity: UNKNOWN_ENTITY_TYPE, ALONE, ANATOMICAL_STRUCTURE, ASSISTED_LIVING, BF_RESULT, BM_RESULT, BM_UNIT, BM_VALUE, BODY_FUNCTION, BODY_MEASUREMENT, COMPLIANT, DOESNOT_FOLLOWUP, FAMILY, FOLLOWSUP, LABORATORY_DATA, LAB_RESULT, LAB_UNIT, LAB_VALUE, MEDICAL_DEVICE, MEDICINE, MED_DOSE, MED_DURATION, MED_FORM, MED_FREQUENCY, MED_ROUTE, MED_STATUS, MED_STRENGTH, MED_TOTALDOSE, MED_UNIT, NON_COMPLIANT, OTHER_LIVINGSTATUS, PROBLEM, PROCEDURE, PROCEDURE_RESULT, PROC_METHOD, REASON_FOR_NONCOMPLIANCE, SEVERITY, SUBSTANCE_ABUSE, UNCLEAR_FOLLOWUP.
     */
    type?: string | null;
  }
  /**
   * Defines directed relationship from one entity mention to another.
   */
  export interface Schema$EntityMentionRelationship {
    /**
     * The model's confidence in this annotation. A number between 0 and 1.
     */
    confidence?: number | null;
    /**
     * object_id is the id of the object entity mention.
     */
    objectId?: string | null;
    /**
     * subject_id is the id of the subject entity mention.
     */
    subjectId?: string | null;
  }
  /**
   * Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
   */
  export interface Schema$EvaluateUserConsentsRequest {
    /**
     * Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the User data mappings being evalauted, must exist in the current `consent_store`, and must have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If unspecified, all `ACTIVE` unexpired Consents in the current `consent_store` will be evaluated.
     */
    consentList?: Schema$ConsentList;
    /**
     * Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. Token to retrieve the next page of results, or empty to get the first page.
     */
    pageToken?: string | null;
    /**
     * Required. The values of request attributes associated with this access request.
     */
    requestAttributes?: {[key: string]: string} | null;
    /**
     * Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried.
     */
    resourceAttributes?: {[key: string]: string} | null;
    /**
     * Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.
     */
    responseView?: string | null;
    /**
     * Required. User ID to evaluate consents for.
     */
    userId?: string | null;
  }
  export interface Schema$EvaluateUserConsentsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list. This token is valid for 72 hours after it is created.
     */
    nextPageToken?: string | null;
    /**
     * The consent evaluation result for each `data_id`.
     */
    results?: Schema$Result[];
  }
  /**
   * Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted.
   */
  export interface Schema$ExportDicomDataRequest {
    /**
     * The BigQuery output destination. You can only export to a BigQuery dataset that's in the same project as the DICOM store you're exporting from. The Cloud Healthcare Service Agent requires two IAM roles on the BigQuery location: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1DicomBigQueryDestination;
    /**
     * The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1DicomGcsDestination;
  }
  /**
   * Returns additional information in regards to a completed DICOM store export.
   */
  export interface Schema$ExportDicomDataResponse {}
  /**
   * Request to schedule an export.
   */
  export interface Schema$ExportMessagesRequest {
    /**
     * The end of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the `start_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.
     */
    endTime?: string | null;
    /**
     * Restricts messages exported to those matching a filter, only applicable to PubsubDestination. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in the `yyyy-mm-dd` format. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, and is just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the `yyyy-mm-dd` date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. Note: The filter will be applied to every message in the HL7v2 store whose `send_time` lies in the range defined by the `start_time` and the `end_time`. Even if the filter only matches a small set of messages, the export operation can still take a long time to finish when a lot of messages are between the specified `start_time` and `end_time` range.
     */
    filter?: string | null;
    /**
     * Export to a Cloud Storage destination.
     */
    gcsDestination?: Schema$GcsDestination;
    /**
     * Export messages to a Pub/Sub topic.
     */
    pubsubDestination?: Schema$PubsubDestination;
    /**
     * The start of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the `end_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.
     */
    startTime?: string | null;
  }
  /**
   * Final response for the export operation. This structure is included in the response to describe the detailed outcome.
   */
  export interface Schema$ExportMessagesResponse {}
  /**
   * Request to export resources.
   */
  export interface Schema$ExportResourcesRequest {
    /**
     * The BigQuery output destination. The Cloud Healthcare Service Agent requires two IAM roles on the BigQuery location: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`. The output is one BigQuery table per resource type. Unlike when setting `BigQueryDestination` for `StreamConfig`, `ExportResources` does not create BigQuery views.
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1FhirBigQueryDestination;
    /**
     * The Cloud Storage output destination. The Healthcare Service Agent account requires the `roles/storage.objectAdmin` role on the Cloud Storage location. The exported outputs are organized by FHIR resource types. The server creates one object per resource type. Each object contains newline delimited JSON, and each line is a FHIR resource.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1FhirGcsDestination;
    /**
     * If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.
     */
    _since?: string | null;
    /**
     * String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported.
     */
    _type?: string | null;
  }
  /**
   * Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.
   */
  export interface Schema$ExportResourcesResponse {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * A feature of an entity mention.
   */
  export interface Schema$Feature {
    /**
     * The model's confidence in this feature annotation. A number between 0 and 1.
     */
    confidence?: number | null;
    /**
     * The value of this feature annotation. Its range depends on the type of the feature.
     */
    value?: string | null;
  }
  /**
   * Specifies how to handle de-identification of a FHIR store.
   */
  export interface Schema$FhirConfig {
    /**
     * The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If true, all extensions are preserved during de-identification by default. If false or unspecified, all extensions are removed during de-identification by default.
     */
    defaultKeepExtensions?: boolean | null;
    /**
     * Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions will be processed according to `default_keep_extensions`.
     */
    fieldMetadataList?: Schema$FieldMetadata[];
  }
  /**
   * Filter configuration.
   */
  export interface Schema$FhirFilter {
    /**
     * List of resources to include in the output. If this list is empty or not specified, all resources are included in the output.
     */
    resources?: Schema$Resources;
  }
  /**
   * Contains the configuration for FHIR notifications.
   */
  export interface Schema$FhirNotificationConfig {
    /**
     * The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail (https://cloud.google.com/healthcare-api/docs/permissions-healthcare-api-gcp-products#dicom_fhir_and_hl7v2_store_cloud_pubsub_permissions). If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare-api/docs/how-tos/logging).
     */
    pubsubTopic?: string | null;
    /**
     * Whether to send full FHIR resource to this Pub/Sub topic.
     */
    sendFullResource?: boolean | null;
    /**
     * Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous resource as a separate operation.
     */
    sendPreviousResourceOnDelete?: boolean | null;
  }
  /**
   * Represents a FHIR store.
   */
  export interface Schema$FhirStore {
    /**
     * Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.
     */
    complexDataTypeReferenceParsing?: string | null;
    /**
     * If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`.
     */
    defaultSearchHandlingStrict?: boolean | null;
    /**
     * Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.
     */
    disableReferentialIntegrity?: boolean | null;
    /**
     * Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions.
     */
    disableResourceVersioning?: boolean | null;
    /**
     * Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources.
     */
    enableUpdateCreate?: boolean | null;
    /**
     * User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll\}\p{Lo\}{0,62\} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\} No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Identifier. Resource name of the FHIR store, of the form `projects/{project_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    name?: string | null;
    /**
     * Deprecated. Use `notification_configs` instead. If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource".
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * Specifies where and whether to send notifications upon changes to a FHIR store.
     */
    notificationConfigs?: Schema$FhirNotificationConfig[];
    /**
     * A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.
     */
    streamConfigs?: Schema$StreamConfig[];
    /**
     * Configuration for how to validate incoming FHIR resources against configured profiles.
     */
    validationConfig?: Schema$ValidationConfig;
    /**
     * Required. Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.
     */
    version?: string | null;
  }
  /**
   * Count of resources and total storage size by type for a given FHIR store.
   */
  export interface Schema$FhirStoreMetric {
    /**
     * The total count of FHIR resources in the store of this resource type.
     */
    count?: string | null;
    /**
     * The FHIR resource type this metric applies to.
     */
    resourceType?: string | null;
    /**
     * The total amount of structured storage used by FHIR resources of this resource type in the store.
     */
    structuredStorageSizeBytes?: string | null;
  }
  /**
   * List of metrics for a given FHIR store.
   */
  export interface Schema$FhirStoreMetrics {
    /**
     * List of FhirStoreMetric by resource type.
     */
    metrics?: Schema$FhirStoreMetric[];
    /**
     * The resource name of the FHIR store to get metrics for, in the format `projects/{project_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    name?: string | null;
  }
  /**
   * A (sub) field of a type.
   */
  export interface Schema$Field {
    /**
     * The maximum number of times this field can be repeated. 0 or -1 means unbounded.
     */
    maxOccurs?: number | null;
    /**
     * The minimum number of times this field must be present/repeated.
     */
    minOccurs?: number | null;
    /**
     * The name of the field. For example, "PID-1" or just "1".
     */
    name?: string | null;
    /**
     * The HL7v2 table this field refers to. For example, PID-15 (Patient's Primary Language) usually refers to table "0296".
     */
    table?: string | null;
    /**
     * The type of this field. A Type with this name must be defined in an Hl7TypesConfig.
     */
    type?: string | null;
  }
  /**
   * Specifies FHIR paths to match, and how to handle de-identification of matching fields.
   */
  export interface Schema$FieldMetadata {
    /**
     * Deidentify action for one field.
     */
    action?: string | null;
    /**
     * List of paths to FHIR fields to be redacted. Each path is a period-separated list where each component is either a field name or FHIR type name, for example: Patient, HumanName. For "choice" types (those defined in the FHIR spec with the form: field[x]) we use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported types are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml.
     */
    paths?: string[] | null;
  }
  /**
   * The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.
   */
  export interface Schema$GcsDestination {
    /**
     * The format of the exported HL7v2 message files.
     */
    contentStructure?: string | null;
    /**
     * Specifies the parts of the Message resource to include in the export. If not specified, FULL is used.
     */
    messageView?: string | null;
    /**
     * URI of an existing Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id\}/{path/to/destination/dir\}`. If there is no trailing slash, the service appends one when composing the object path.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id\}/{object_id\}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/x*.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * The Cloud Storage location for export.
   */
  export interface Schema$GoogleCloudHealthcareV1ConsentGcsDestination {
    /**
     * URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id\}/{path/to/destination/dir\}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket and directory referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Represents a user's consent in terms of the resources that can be accessed and under what conditions.
   */
  export interface Schema$GoogleCloudHealthcareV1ConsentPolicy {
    /**
     * Required. The request conditions to meet to grant access. In addition to any supported comparison operators, authorization rules may have `IN` operator as well as at most 10 logical operators that are limited to `AND` (`&&`), `OR` (`||`).
     */
    authorizationRule?: Schema$Expr;
    /**
     * The resources that this policy applies to. A resource is a match if it matches all the attributes listed here. If empty, this policy applies to all User data mappings for the given user.
     */
    resourceAttributes?: Schema$Attribute[];
  }
  /**
   * Contains a summary of the DeidentifyDicomStore operation.
   */
  export interface Schema$GoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummary {}
  /**
   * Contains a summary of the DeidentifyFhirStore operation.
   */
  export interface Schema$GoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummary {}
  /**
   * The BigQuery table where the server writes the output.
   */
  export interface Schema$GoogleCloudHealthcareV1DicomBigQueryDestination {
    /**
     * Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.
     */
    force?: boolean | null;
    /**
     * BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId`
     */
    tableUri?: string | null;
    /**
     * Determines whether the existing table in the destination is to be overwritten or appended to. If a write_disposition is specified, the `force` parameter is ignored.
     */
    writeDisposition?: string | null;
  }
  /**
   * The Cloud Storage location where the server writes the output and the export configuration.
   */
  export interface Schema$GoogleCloudHealthcareV1DicomGcsDestination {
    /**
     * MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id\}/{series_id\}/{instance_id\}[/{frame_number\}].{extension\}` The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax=1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000) - application/dicom; transfer-syntax=* (DICOM with no transcoding) - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax=* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -\> .dcm - image/jpeg -\> .jpg - image/png -\> .png - application/octet-stream -\> no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in.
     */
    mimeType?: string | null;
    /**
     * The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id\}/{path/to/destination/dir\}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1DicomGcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id\}/{object_id\}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * '*' to match 0 or more non-separator characters * '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/x*.dcm` imports all files with .dcm extensions in `my-directory/` and its sub-directories. * '?' to match 1 character. All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * StreamConfig specifies configuration for a streaming DICOM export.
   */
  export interface Schema$GoogleCloudHealthcareV1DicomStreamConfig {
    /**
     * Results are appended to this table. The server creates a new table in the given BigQuery dataset if the specified table does not exist. To enable the Cloud Healthcare API to write to your BigQuery table, you must give the Cloud Healthcare API service account the bigquery.dataEditor role. The service account is: `service-{PROJECT_NUMBER\}@gcp-sa-healthcare.iam.gserviceaccount.com`. The PROJECT_NUMBER identifies the project that the DICOM store resides in. To get the project number, go to the Cloud Console Dashboard. It is recommended to not have a custom schema in the destination table which could conflict with the schema created by the Cloud Healthcare API. Instance deletions are not applied to the destination table. The destination's table schema will be automatically updated in case a new instance's data is incompatible with the current schema. The schema should not be updated manually as this can cause incompatibilies that cannot be resolved automatically. One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation. BigQuery imposes a 1 MB limit on streaming insert row size, therefore any instance that generates more than 1 MB of BigQuery data will not be streamed. If an instance cannot be streamed to BigQuery, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1DicomBigQueryDestination;
  }
  /**
   * The configuration for exporting to BigQuery.
   */
  export interface Schema$GoogleCloudHealthcareV1FhirBigQueryDestination {
    /**
     * BigQuery URI to an existing dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`.
     */
    datasetUri?: string | null;
    /**
     * If this flag is `TRUE`, all tables are deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.
     */
    force?: boolean | null;
    /**
     * The configuration for the exported BigQuery schema.
     */
    schemaConfig?: Schema$SchemaConfig;
    /**
     * Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored.
     */
    writeDisposition?: string | null;
  }
  /**
   * The configuration for exporting to Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1FhirGcsDestination {
    /**
     * URI for a Cloud Storage directory where result files should be written, in the format of `gs://{bucket-id\}/{path/to/destination/dir\}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1FhirGcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id\}/{object_id\}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/x*.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * Construct representing a logical group or a segment.
   */
  export interface Schema$GroupOrSegment {
    group?: Schema$SchemaGroup;
    segment?: Schema$SchemaSegment;
  }
  /**
   * Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.
   */
  export interface Schema$Hl7SchemaConfig {
    /**
     * Map from each HL7v2 message type and trigger event pair, such as ADT_A04, to its schema configuration root group.
     */
    messageSchemaConfigs?: {[key: string]: Schema$SchemaGroup} | null;
    /**
     * Each VersionSource is tested and only if they all match is the schema used for the message.
     */
    version?: Schema$VersionSource[];
  }
  /**
   * Root config for HL7v2 datatype definitions for a specific HL7v2 version.
   */
  export interface Schema$Hl7TypesConfig {
    /**
     * The HL7v2 type definitions.
     */
    type?: Schema$Type[];
    /**
     * The version selectors that this config applies to. A message must match ALL version sources to apply.
     */
    version?: Schema$VersionSource[];
  }
  /**
   * Specifies where and whether to send notifications upon changes to a data store.
   */
  export interface Schema$Hl7V2NotificationConfig {
    /**
     * Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
     */
    filter?: string | null;
    /**
     * The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It's guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification cannot be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
     */
    pubsubTopic?: string | null;
  }
  /**
   * Represents an HL7v2 store.
   */
  export interface Schema$Hl7V2Store {
    /**
     * User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll\}\p{Lo\}{0,62\} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\} No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Resource name of the HL7v2 store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7V2Stores/{hl7v2_store_id\}`.
     */
    name?: string | null;
    /**
     * A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client.
     */
    notificationConfigs?: Schema$Hl7V2NotificationConfig[];
    /**
     * The configuration for the parser. It determines how the server parses the messages.
     */
    parserConfig?: Schema$ParserConfig;
    /**
     * Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection.
     */
    rejectDuplicateMessage?: boolean | null;
  }
  /**
   * Count of messages and total storage size by type for a given HL7 store.
   */
  export interface Schema$Hl7V2StoreMetric {
    /**
     * The total count of HL7v2 messages in the store for the given message type.
     */
    count?: string | null;
    /**
     * The Hl7v2 message type this metric applies to, such as `ADT` or `ORU`.
     */
    messageType?: string | null;
    /**
     * The total amount of structured storage used by HL7v2 messages of this message type in the store.
     */
    structuredStorageSizeBytes?: string | null;
  }
  /**
   * List of metrics for a given HL7v2 store.
   */
  export interface Schema$Hl7V2StoreMetrics {
    /**
     * List of HL7v2 store metrics by message type.
     */
    metrics?: Schema$Hl7V2StoreMetric[];
    /**
     * The resource name of the HL7v2 store to get metrics for, in the format `projects/{project_id\}/datasets/{dataset_id\}/hl7V2Stores/{hl7v2_store_id\}`.
     */
    name?: string | null;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * Raw bytes representing consent artifact content.
   */
  export interface Schema$Image {
    /**
     * Input only. Points to a Cloud Storage URI containing the consent artifact content. The URI must be in the following format: `gs://{bucket_id\}/{object_id\}`. The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. The consent artifact content at this URI is copied to a Cloud Storage location managed by the Cloud Healthcare API. Responses to fetching requests return the consent artifact content in raw_bytes.
     */
    gcsUri?: string | null;
    /**
     * Consent artifact content represented as a stream of bytes. This field is populated when returned in GetConsentArtifact response, but not included in CreateConsentArtifact and ListConsentArtifact response.
     */
    rawBytes?: string | null;
  }
  /**
   * Specifies how to handle de-identification of image pixels.
   */
  export interface Schema$ImageConfig {
    /**
     * Determines how to redact text from image.
     */
    textRedactionMode?: string | null;
  }
  /**
   * Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite.
   */
  export interface Schema$ImportDicomDataRequest {
    /**
     * Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.
     */
    gcsSource?: Schema$GoogleCloudHealthcareV1DicomGcsSource;
  }
  /**
   * Returns additional information in regards to a completed DICOM store import.
   */
  export interface Schema$ImportDicomDataResponse {}
  /**
   * Request to import messages.
   */
  export interface Schema$ImportMessagesRequest {
    /**
     * Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.
     */
    gcsSource?: Schema$GcsSource;
  }
  /**
   * Final response of importing messages. This structure is included in the response to describe the detailed outcome. It is only included when the operation finishes successfully.
   */
  export interface Schema$ImportMessagesResponse {}
  /**
   * Request to import resources.
   */
  export interface Schema$ImportResourcesRequest {
    /**
     * The content structure in the source location. If not specified, the server treats the input source files as BUNDLE.
     */
    contentStructure?: string | null;
    /**
     * Cloud Storage source data location and import configuration. The Healthcare Service Agent account requires the `roles/storage.objectAdmin` role on the Cloud Storage location. Each Cloud Storage object should be a text file that contains the format specified in ContentStructure.
     */
    gcsSource?: Schema$GoogleCloudHealthcareV1FhirGcsSource;
  }
  /**
   * Final response of importing resources. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.
   */
  export interface Schema$ImportResourcesResponse {}
  /**
   * A transformation to apply to text that is identified as a specific info_type.
   */
  export interface Schema$InfoTypeTransformation {
    /**
     * Config for character mask.
     */
    characterMaskConfig?: Schema$CharacterMaskConfig;
    /**
     * Config for crypto hash.
     */
    cryptoHashConfig?: Schema$CryptoHashConfig;
    /**
     * Config for date shift.
     */
    dateShiftConfig?: Schema$DateShiftConfig;
    /**
     * InfoTypes to apply this transformation to. If this is not specified, the transformation applies to any info_type.
     */
    infoTypes?: string[] | null;
    /**
     * Config for text redaction.
     */
    redactConfig?: Schema$RedactConfig;
    /**
     * Config for replace with InfoType.
     */
    replaceWithInfoTypeConfig?: Schema$ReplaceWithInfoTypeConfig;
  }
  /**
   * Ingests a message into the specified HL7v2 store.
   */
  export interface Schema$IngestMessageRequest {
    /**
     * Required. HL7v2 message to ingest.
     */
    message?: Schema$Message;
  }
  /**
   * Acknowledges that a message has been ingested into the specified HL7v2 store.
   */
  export interface Schema$IngestMessageResponse {
    /**
     * HL7v2 ACK message.
     */
    hl7Ack?: string | null;
    /**
     * Created message resource.
     */
    message?: Schema$Message;
  }
  /**
   * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key).
   */
  export interface Schema$KmsWrappedCryptoKey {
    /**
     * Required. The resource name of the KMS CryptoKey to use for unwrapping. For example, `projects/{project_id\}/locations/{location_id\}/keyRings/{keyring\}/cryptoKeys/{key\}`.
     */
    cryptoKey?: string | null;
    /**
     * Required. The wrapped data crypto key.
     */
    wrappedKey?: string | null;
  }
  /**
   * EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.
   */
  export interface Schema$LinkedEntity {
    /**
     * entity_id is a concept unique identifier. These are prefixed by a string that identifies the entity coding system, followed by the unique identifier within that system. For example, "UMLS/C0000970". This also supports ad hoc entities, which are formed by normalizing entity mention content.
     */
    entityId?: string | null;
  }
  export interface Schema$ListAttributeDefinitionsResponse {
    /**
     * The returned Attribute definitions. The maximum number of attributes returned is determined by the value of page_size in the ListAttributeDefinitionsRequest.
     */
    attributeDefinitions?: Schema$AttributeDefinition[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListConsentArtifactsResponse {
    /**
     * The returned Consent artifacts. The maximum number of artifacts returned is determined by the value of page_size in the ListConsentArtifactsRequest.
     */
    consentArtifacts?: Schema$ConsentArtifact[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListConsentRevisionsResponse {
    /**
     * The returned Consent revisions. The maximum number of revisions returned is determined by the value of `page_size` in the ListConsentRevisionsRequest.
     */
    consents?: Schema$Consent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListConsentsResponse {
    /**
     * The returned Consents. The maximum number of Consents returned is determined by the value of page_size in the ListConsentsRequest.
     */
    consents?: Schema$Consent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListConsentStoresResponse {
    /**
     * The returned consent stores. The maximum number of stores returned is determined by the value of page_size in the ListConsentStoresRequest.
     */
    consentStores?: Schema$ConsentStore[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Lists the available datasets.
   */
  export interface Schema$ListDatasetsResponse {
    /**
     * The first page of datasets.
     */
    datasets?: Schema$Dataset[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Lists the DICOM stores in the given dataset.
   */
  export interface Schema$ListDicomStoresResponse {
    /**
     * The returned DICOM stores. Won't be more DICOM stores than the value of page_size in the request.
     */
    dicomStores?: Schema$DicomStore[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Lists the FHIR stores in the given dataset.
   */
  export interface Schema$ListFhirStoresResponse {
    /**
     * The returned FHIR stores. Won't be more FHIR stores than the value of page_size in the request.
     */
    fhirStores?: Schema$FhirStore[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Lists the HL7v2 stores in the given dataset.
   */
  export interface Schema$ListHl7V2StoresResponse {
    /**
     * The returned HL7v2 stores. Won't be more HL7v2 stores than the value of page_size in the request.
     */
    hl7V2Stores?: Schema$Hl7V2Store[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
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
   * Lists the messages in the specified HL7v2 store.
   */
  export interface Schema$ListMessagesResponse {
    /**
     * The returned Messages. Won't be more Messages than the value of page_size in the request. See view for populated fields.
     */
    hl7V2Messages?: Schema$Message[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  export interface Schema$ListUserDataMappingsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The returned User data mappings. The maximum number of User data mappings returned is determined by the value of page_size in the ListUserDataMappingsRequest.
     */
    userDataMappings?: Schema$UserDataMapping[];
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
   */
  export interface Schema$Message {
    /**
     * Output only. The datetime when the message was created. Set by the server.
     */
    createTime?: string | null;
    /**
     * Required. Raw message bytes.
     */
    data?: string | null;
    /**
     * User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll\}\p{Lo\}{0,62\} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\} No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The message type for this message. MSH-9.1.
     */
    messageType?: string | null;
    /**
     * Output only. Resource name of the Message, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7V2Stores/{hl7_v2_store_id\}/messages/{message_id\}`. Assigned by the server.
     */
    name?: string | null;
    /**
     * Output only. The parsed version of the raw message data.
     */
    parsedData?: Schema$ParsedData;
    /**
     * All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.
     */
    patientIds?: Schema$PatientId[];
    /**
     * The parsed version of the raw message data schematized according to this store's schemas and type definitions.
     */
    schematizedData?: Schema$SchematizedData;
    /**
     * The hospital that this message came from. MSH-4.
     */
    sendFacility?: string | null;
    /**
     * The datetime the sending application sent this message. MSH-7.
     */
    sendTime?: string | null;
  }
  /**
   * Specifies where to send notifications upon changes to a data store.
   */
  export interface Schema$NotificationConfig {
    /**
     * The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren't submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details.
     */
    pubsubTopic?: string | null;
    /**
     * Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.
     */
    sendForBulkImport?: boolean | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field.
   */
  export interface Schema$OperationMetadata {
    /**
     * The name of the API method that initiated the operation.
     */
    apiMethodName?: string | null;
    /**
     * Specifies if cancellation was requested for the operation.
     */
    cancelRequested?: boolean | null;
    counter?: Schema$ProgressCounter;
    /**
     * The time at which the operation was created by the API.
     */
    createTime?: string | null;
    /**
     * The time at which execution was completed.
     */
    endTime?: string | null;
    /**
     * A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).
     */
    logsUrl?: string | null;
  }
  /**
   * The content of a HL7v2 message in a structured format.
   */
  export interface Schema$ParsedData {
    segments?: Schema$Segment[];
  }
  /**
   * The configuration for the parser. It determines how the server parses the messages.
   */
  export interface Schema$ParserConfig {
    /**
     * Determines whether messages with no header are allowed.
     */
    allowNullHeader?: boolean | null;
    /**
     * Schemas used to parse messages in this store, if schematized parsing is desired.
     */
    schema?: Schema$SchemaPackage;
    /**
     * Byte(s) to use as the segment terminator. If this is unset, '\r' is used as segment terminator, matching the HL7 version 2 specification.
     */
    segmentTerminator?: string | null;
    /**
     * Immutable. Determines the version of both the default parser to be used when `schema` is not given, as well as the schematized parser used when `schema` is specified. This field is immutable after HL7v2 store creation.
     */
    version?: string | null;
  }
  /**
   * A patient identifier and associated type.
   */
  export interface Schema$PatientId {
    /**
     * ID type. For example, MRN or NHS.
     */
    type?: string | null;
    /**
     * The patient's unique identifier.
     */
    value?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * ProgressCounter provides counters to describe an operation's progress.
   */
  export interface Schema$ProgressCounter {
    /**
     * The number of units that failed in the operation.
     */
    failure?: string | null;
    /**
     * The number of units that are pending in the operation.
     */
    pending?: string | null;
    /**
     * The number of units that succeeded in the operation.
     */
    success?: string | null;
  }
  /**
   * The Pub/Sub output destination. The Cloud Healthcare Service Agent requires the `roles/pubsub.publisher` Cloud IAM role on the Pub/Sub topic.
   */
  export interface Schema$PubsubDestination {
    /**
     * The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that Pub/Sub messages are published on. Supplied by the client. The `PubsubMessage` contains the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail.
     */
    pubsubTopic?: string | null;
  }
  /**
   * Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).
   */
  export interface Schema$QueryAccessibleDataRequest {
    /**
     * The Cloud Storage destination. The Cloud Healthcare API service account must have the `roles/storage.objectAdmin` Cloud IAM role for this Cloud Storage location.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1ConsentGcsDestination;
    /**
     * The values of request attributes associated with this access request.
     */
    requestAttributes?: {[key: string]: string} | null;
    /**
     * Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output.
     */
    resourceAttributes?: {[key: string]: string} | null;
  }
  /**
   * Response for successful QueryAccessibleData operations. This structure is included in the response upon operation completion.
   */
  export interface Schema$QueryAccessibleDataResponse {
    /**
     * List of files, each of which contains a list of data_id(s) that are consented for a specified use in the request.
     */
    gcsUris?: string[] | null;
  }
  /**
   * Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ."
   */
  export interface Schema$RedactConfig {}
  /**
   * Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.
   */
  export interface Schema$RejectConsentRequest {
    /**
     * Optional. The resource name of the Consent artifact that contains documentation of the user's rejection of the draft Consent, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consentArtifacts/{consent_artifact_id\}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.
     */
    consentArtifact?: string | null;
  }
  /**
   * When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting.
   */
  export interface Schema$ReplaceWithInfoTypeConfig {}
  /**
   * A list of FHIR resources.
   */
  export interface Schema$Resources {
    /**
     * List of resources IDs. For example, "Patient/1234".
     */
    resources?: string[] | null;
  }
  /**
   * The consent evaluation result for a single `data_id`.
   */
  export interface Schema$Result {
    /**
     * The resource names of all evaluated Consents mapped to their evaluation.
     */
    consentDetails?: {[key: string]: Schema$ConsentEvaluation} | null;
    /**
     * Whether the resource is consented for the given use.
     */
    consented?: boolean | null;
    /**
     * The unique identifier of the evaluated resource.
     */
    dataId?: string | null;
  }
  /**
   * Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.
   */
  export interface Schema$RevokeConsentRequest {
    /**
     * Optional. The resource name of the Consent artifact that contains proof of the user's revocation of the Consent, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consentArtifacts/{consent_artifact_id\}`.
     */
    consentArtifact?: string | null;
  }
  export interface Schema$RollbackFhirResourceFilteringFields {
    /**
     * Optional. A filter expression that matches data in the `Resource.meta` element. Supports all filters in [AIP-160](https://google.aip.dev/160) except the "has" (`:`) operator. Supports the following custom functions: * `tag("") = ""` for tag filtering. * `extension_value_ts("") = ` for filtering extensions with a timestamp, where `` is a Unix timestamp. Supports the `\>`, `<`, `<=`, `\>=`, and `!=` comparison operators.
     */
    metadataFilter?: string | null;
    /**
     * Optional. A list of operation IDs to roll back.
     */
    operationIds?: string[] | null;
  }
  export interface Schema$RollbackFhirResourcesRequest {
    /**
     * Optional. CREATE/UPDATE/DELETE/ALL for reverting all txns of a certain type.
     */
    changeType?: string | null;
    /**
     * Optional. Specifies whether to exclude earlier rollbacks.
     */
    excludeRollbacks?: boolean | null;
    /**
     * Optional. Parameters for filtering resources
     */
    filteringFields?: Schema$RollbackFhirResourceFilteringFields;
    /**
     * Optional. When enabled, changes will be reverted without explicit confirmation
     */
    force?: boolean | null;
    /**
     * Optional. GCS object containing list of {resourceType\}/{resourceId\} lines, identifying resources to be reverted
     */
    inputGcsObject?: string | null;
    /**
     * Required. Bucket to deposit result
     */
    resultGcsBucket?: string | null;
    /**
     * Required. Time point to rollback to.
     */
    rollbackTime?: string | null;
    /**
     * Optional. If specified, revert only resources of these types
     */
    type?: string[] | null;
  }
  /**
   * Final response of rollback FIHR resources request.
   */
  export interface Schema$RollbackFhirResourcesResponse {
    /**
     * The name of the FHIR store to rollback, in the format of "projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\} /fhirStores/{fhir_store_id\}".
     */
    fhirStore?: string | null;
  }
  /**
   * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
   */
  export interface Schema$SchemaConfig {
    /**
     * The configuration for exported BigQuery tables to be partitioned by FHIR resource's last updated time column.
     */
    lastUpdatedPartitionConfig?: Schema$TimePartitioning;
    /**
     * The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5.
     */
    recursiveStructureDepth?: string | null;
    /**
     * Specifies the output schema type. Schema type is required.
     */
    schemaType?: string | null;
  }
  /**
   * An HL7v2 logical group construct.
   */
  export interface Schema$SchemaGroup {
    /**
     * True indicates that this is a choice group, meaning that only one of its segments can exist in a given message.
     */
    choice?: boolean | null;
    /**
     * The maximum number of times this group can be repeated. 0 or -1 means unbounded.
     */
    maxOccurs?: number | null;
    /**
     * Nested groups and/or segments.
     */
    members?: Schema$GroupOrSegment[];
    /**
     * The minimum number of times this group must be present/repeated.
     */
    minOccurs?: number | null;
    /**
     * The name of this group. For example, "ORDER_DETAIL".
     */
    name?: string | null;
  }
  /**
   * A schema package contains a set of schemas and type definitions.
   */
  export interface Schema$SchemaPackage {
    /**
     * Flag to ignore all min_occurs restrictions in the schema. This means that incoming messages can omit any group, segment, field, component, or subcomponent.
     */
    ignoreMinOccurs?: boolean | null;
    /**
     * Schema configs that are layered based on their VersionSources that match the incoming message. Schema configs present in higher indices override those in lower indices with the same message type and trigger event if their VersionSources all match an incoming message.
     */
    schemas?: Schema$Hl7SchemaConfig[];
    /**
     * Determines how messages that fail to parse are handled.
     */
    schematizedParsingType?: string | null;
    /**
     * Schema type definitions that are layered based on their VersionSources that match the incoming message. Type definitions present in higher indices override those in lower indices with the same type name if their VersionSources all match an incoming message.
     */
    types?: Schema$Hl7TypesConfig[];
    /**
     * Determines how unexpected segments (segments not matched to the schema) are handled.
     */
    unexpectedSegmentHandling?: string | null;
  }
  /**
   * An HL7v2 Segment.
   */
  export interface Schema$SchemaSegment {
    /**
     * The maximum number of times this segment can be present in this group. 0 or -1 means unbounded.
     */
    maxOccurs?: number | null;
    /**
     * The minimum number of times this segment can be present in this group.
     */
    minOccurs?: number | null;
    /**
     * The Segment type. For example, "PID".
     */
    type?: string | null;
  }
  /**
   * The content of an HL7v2 message in a structured format as specified by a schema.
   */
  export interface Schema$SchematizedData {
    /**
     * JSON output of the parser.
     */
    data?: string | null;
    /**
     * The error output of the parser.
     */
    error?: string | null;
  }
  /**
   * Request to search the resources in the specified FHIR store.
   */
  export interface Schema$SearchResourcesRequest {
    /**
     * Required. The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
     */
    resourceType?: string | null;
  }
  /**
   * A segment in a structured format.
   */
  export interface Schema$Segment {
    /**
     * A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)? Examples of (key, value) pairs: * (0.1, "hemoglobin") denotes that the first component of Field 0 has the value "hemoglobin". * (1.1.2, "CBC") denotes that the second sub-component of the first component of Field 1 has the value "CBC". * (1[0].1, "HbA1c") denotes that the first component of the first Instance of Field 1, which is repeated, has the value "HbA1c".
     */
    fields?: {[key: string]: string} | null;
    /**
     * A string that indicates the type of segment. For example, EVN or PID.
     */
    segmentId?: string | null;
    /**
     * Set ID for segments that can be in a set. This can be empty if it's missing or isn't applicable.
     */
    setId?: string | null;
  }
  /**
   * SeriesMetrics contains metrics describing a DICOM series.
   */
  export interface Schema$SeriesMetrics {
    /**
     * Total blob storage bytes for all instances in the series.
     */
    blobStorageSizeBytes?: string | null;
    /**
     * Number of instances in the series.
     */
    instanceCount?: string | null;
    /**
     * The series resource path. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}/dicomWeb/studies/{study_uid\}/series/{series_uid\}`.
     */
    series?: string | null;
    /**
     * Total structured storage bytes for all instances in the series.
     */
    structuredStorageSizeBytes?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * User signature.
   */
  export interface Schema$Signature {
    /**
     * Optional. An image of the user's signature.
     */
    image?: Schema$Image;
    /**
     * Optional. Metadata associated with the user's signature. For example, the user's name or the user's title.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Optional. Timestamp of the signature.
     */
    signatureTime?: string | null;
    /**
     * Required. User's UUID provided by the client.
     */
    userId?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Contains configuration for streaming FHIR export.
   */
  export interface Schema$StreamConfig {
    /**
     * The destination BigQuery structure that contains both the dataset location and corresponding schema config. The output is organized in one table per resource type. The server reuses the existing tables (if any) that are named after the resource types. For example, "Patient", "Observation". When there is no existing table for a given resource type, the server attempts to create one. When a table schema doesn't align with the schema config, either because of existing incompatible schema or out of band incompatible modification, the server does not stream in new data. BigQuery imposes a 1 MB limit on streaming insert row size, therefore any resource mutation that generates more than 1 MB of BigQuery data is not streamed. One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation. Results are written to BigQuery tables according to the parameters in BigQueryDestination.WriteDisposition. Different versions of the same resource are distinguishable by the meta.versionId and meta.lastUpdated columns. The operation (CREATE/UPDATE/DELETE) that results in the new version is recorded in the meta.tag. The tables contain all historical resource versions since streaming was enabled. For query convenience, the server also creates one view per table of the same name containing only the current resource version. The streamed data in the BigQuery dataset is not guaranteed to be completely unique. The combination of the id and meta.versionId columns should ideally identify a single unique row. But in rare cases, duplicates may exist. At query time, users may use the SQL select statement to keep only one of the duplicate rows given an id and meta.versionId pair. Alternatively, the server created view mentioned above also filters out duplicates. If a resource mutation cannot be streamed to BigQuery, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1FhirBigQueryDestination;
    /**
     * The destination FHIR store for de-identified resources. After this field is added, all subsequent creates/updates/patches to the source store will be de-identified using the provided configuration and applied to the destination store. Importing resources to the source store will not trigger the streaming. If the source store already contains resources when this option is enabled, those resources will not be copied to the destination store unless they are subsequently updated. This may result in invalid references in the destination store. Before adding this config, you must grant the healthcare.fhirResources.update permission on the destination store to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/healthcare/docs/how-tos/permissions-healthcare-api-gcp-products#the_cloud_healthcare_service_agent). The destination store must set enable_update_create to true. The destination store must have disable_referential_integrity set to true. If a resource cannot be de-identified, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
     */
    deidentifiedStoreDestination?: Schema$DeidentifiedStoreDestination;
    /**
     * Supply a FHIR resource type (such as "Patient" or "Observation"). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store.
     */
    resourceTypes?: string[] | null;
  }
  /**
   * StudyMetrics contains metrics describing a DICOM study.
   */
  export interface Schema$StudyMetrics {
    /**
     * Total blob storage bytes for all instances in the study.
     */
    blobStorageSizeBytes?: string | null;
    /**
     * Number of instances in the study.
     */
    instanceCount?: string | null;
    /**
     * Number of series in the study.
     */
    seriesCount?: string | null;
    /**
     * Total structured storage bytes for all instances in the study.
     */
    structuredStorageSizeBytes?: string | null;
    /**
     * The study resource path. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}/dicomWeb/studies/{study_uid\}`.
     */
    study?: string | null;
  }
  /**
   * List of tags to be filtered.
   */
  export interface Schema$TagFilterList {
    /**
     * Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example "PatientID", "00100010".
     */
    tags?: string[] | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
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
  export interface Schema$TextConfig {
    /**
     * Transformations to apply to the detected data, overridden by `exclude_info_types`.
     */
    additionalTransformations?: Schema$InfoTypeTransformation[];
    /**
     * InfoTypes to skip transforming, overriding `additional_transformations`.
     */
    excludeInfoTypes?: string[] | null;
    /**
     * The transformations to apply to the detected data. Deprecated. Use `additional_transformations` instead.
     */
    transformations?: Schema$InfoTypeTransformation[];
  }
  /**
   * A span of text in the provided document.
   */
  export interface Schema$TextSpan {
    /**
     * The unicode codepoint index of the beginning of this span.
     */
    beginOffset?: number | null;
    /**
     * The original text contained in this span.
     */
    content?: string | null;
  }
  /**
   * Configuration for FHIR BigQuery time-partitioned tables.
   */
  export interface Schema$TimePartitioning {
    /**
     * Number of milliseconds for which to keep the storage for a partition.
     */
    expirationMs?: string | null;
    /**
     * Type of partitioning.
     */
    type?: string | null;
  }
  /**
   * A type definition for some HL7v2 type (incl. Segments and Datatypes).
   */
  export interface Schema$Type {
    /**
     * The (sub) fields this type has (if not primitive).
     */
    fields?: Schema$Field[];
    /**
     * The name of this type. This would be the segment or datatype name. For example, "PID" or "XPN".
     */
    name?: string | null;
    /**
     * If this is a primitive type then this field is the type of the primitive For example, STRING. Leave unspecified for composite types.
     */
    primitive?: string | null;
  }
  /**
   * Maps a resource to the associated user and Attributes.
   */
  export interface Schema$UserDataMapping {
    /**
     * Output only. Indicates whether this mapping is archived.
     */
    archived?: boolean | null;
    /**
     * Output only. Indicates the time when this mapping was archived.
     */
    archiveTime?: string | null;
    /**
     * Required. A unique identifier for the mapped resource.
     */
    dataId?: string | null;
    /**
     * Resource name of the User data mapping, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/userDataMappings/{user_data_mapping_id\}`.
     */
    name?: string | null;
    /**
     * Attributes of the resource. Only explicitly set attributes are displayed here. Attribute definitions with defaults set implicitly apply to these User data mappings. Attributes listed here must be single valued, that is, exactly one value is specified for the field "values" in each Attribute.
     */
    resourceAttributes?: Schema$Attribute[];
    /**
     * Required. User's UUID provided by the client.
     */
    userId?: string | null;
  }
  /**
   * Contains the configuration for FHIR profiles and validation.
   */
  export interface Schema$ValidationConfig {
    /**
     * Whether to disable FHIRPath validation for incoming resources. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.
     */
    disableFhirpathValidation?: boolean | null;
    /**
     * Whether to disable profile validation for this FHIR store. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store.
     */
    disableProfileValidation?: boolean | null;
    /**
     * Whether to disable reference type validation for incoming resources. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.
     */
    disableReferenceTypeValidation?: boolean | null;
    /**
     * Whether to disable required fields validation for incoming resources. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.
     */
    disableRequiredFieldValidation?: boolean | null;
    /**
     * A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation. For example, to use the US Core profiles for validation, set `enabled_implementation_guides` to `["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]`. If `enabled_implementation_guides` is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the `global` property of one of the enabled ImplementationGuides. The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported: - min/max - minValue/maxValue - maxLength - type - fixed[x] - pattern[x] on simple types - slicing, when using "value" as the discriminator type When a URL cannot be resolved (for example, in a type assertion), the server does not return an error.
     */
    enabledImplementationGuides?: string[] | null;
  }
  /**
   * Describes a selector for extracting and matching an MSH field to a value.
   */
  export interface Schema$VersionSource {
    /**
     * The field to extract from the MSH segment. For example, "3.1" or "18[1].1".
     */
    mshField?: string | null;
    /**
     * The value to match with the field. For example, "My Application Name" or "2.3".
     */
    value?: string | null;
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
    datasets: Resource$Projects$Locations$Datasets;
    services: Resource$Projects$Locations$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasets = new Resource$Projects$Locations$Datasets(this.context);
      this.services = new Resource$Projects$Locations$Services(this.context);
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Datasets {
    context: APIRequestContext;
    consentStores: Resource$Projects$Locations$Datasets$Consentstores;
    dicomStores: Resource$Projects$Locations$Datasets$Dicomstores;
    fhirStores: Resource$Projects$Locations$Datasets$Fhirstores;
    hl7V2Stores: Resource$Projects$Locations$Datasets$Hl7v2stores;
    operations: Resource$Projects$Locations$Datasets$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.consentStores =
        new Resource$Projects$Locations$Datasets$Consentstores(this.context);
      this.dicomStores = new Resource$Projects$Locations$Datasets$Dicomstores(
        this.context
      );
      this.fhirStores = new Resource$Projects$Locations$Datasets$Fhirstores(
        this.context
      );
      this.hl7V2Stores = new Resource$Projects$Locations$Datasets$Hl7v2stores(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Datasets$Operations(
        this.context
      );
    }

    /**
     * Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/datasets').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The new de-identified dataset will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Deidentify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deidentify(
      params?: Params$Resource$Projects$Locations$Datasets$Deidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Deidentify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Deidentify,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Deidentify,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deidentify(callback: BodyResponseCallback<Schema$Operation>): void;
    deidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Deidentify
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Deidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Deidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+sourceDataset}:deidentify').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['sourceDataset'],
        pathParams: ['sourceDataset'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes the specified health dataset and all data contained in the dataset. Deleting a dataset does not affect the sources from which the dataset was imported (if any).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Gets any metadata associated with a dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Get,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Get
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists the health datasets in the current project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDatasetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatasetsResponse>,
      callback: BodyResponseCallback<Schema$ListDatasetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$List,
      callback: BodyResponseCallback<Schema$ListDatasetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$List
        | BodyResponseCallback<Schema$ListDatasetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDatasetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDatasetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDatasetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/datasets').replace(
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
        createAPIRequest<Schema$ListDatasetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDatasetsResponse>(parameters);
      }
    }

    /**
     * Updates dataset metadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Patch,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Patch
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Create
    extends StandardParameters {
    /**
     * Required. The ID of the dataset that is being created. The string must match the following regex: `[\p{L\}\p{N\}_\-\.]{1,256\}`.
     */
    datasetId?: string;
    /**
     * Required. The name of the project where the server creates the dataset. For example, `projects/{project_id\}/locations/{location_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Deidentify
    extends StandardParameters {
    /**
     * Required. Source dataset resource name. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}`.
     */
    sourceDataset?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeidentifyDatasetRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the dataset to delete. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Get
    extends StandardParameters {
    /**
     * Required. The name of the dataset to read. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$List
    extends StandardParameters {
    /**
     * The maximum number of items to return. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the project whose datasets should be listed. For example, `projects/{project_id\}/locations/{location_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the dataset, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}`.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Consentstores {
    context: APIRequestContext;
    attributeDefinitions: Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions;
    consentArtifacts: Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts;
    consents: Resource$Projects$Locations$Datasets$Consentstores$Consents;
    userDataMappings: Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attributeDefinitions =
        new Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions(
          this.context
        );
      this.consentArtifacts =
        new Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts(
          this.context
        );
      this.consents =
        new Resource$Projects$Locations$Datasets$Consentstores$Consents(
          this.context
        );
      this.userDataMappings =
        new Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings(
          this.context
        );
    }

    /**
     * Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    checkDataAccess(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkDataAccess(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckDataAccessResponse>;
    checkDataAccess(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkDataAccess(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckDataAccessResponse>,
      callback: BodyResponseCallback<Schema$CheckDataAccessResponse>
    ): void;
    checkDataAccess(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess,
      callback: BodyResponseCallback<Schema$CheckDataAccessResponse>
    ): void;
    checkDataAccess(
      callback: BodyResponseCallback<Schema$CheckDataAccessResponse>
    ): void;
    checkDataAccess(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess
        | BodyResponseCallback<Schema$CheckDataAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckDataAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckDataAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CheckDataAccessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+consentStore}:checkDataAccess').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['consentStore'],
        pathParams: ['consentStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckDataAccessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckDataAccessResponse>(parameters);
      }
    }

    /**
     * Creates a new consent store in the parent dataset. Attempting to create a consent store with the same ID as an existing store fails with an ALREADY_EXISTS error.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConsentStore>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ConsentStore>,
      callback: BodyResponseCallback<Schema$ConsentStore>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Create,
      callback: BodyResponseCallback<Schema$ConsentStore>
    ): void;
    create(callback: BodyResponseCallback<Schema$ConsentStore>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Create
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConsentStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consentStores').replace(
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
        createAPIRequest<Schema$ConsentStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsentStore>(parameters);
      }
    }

    /**
     * Deletes the specified consent store and removes all the consent store's data.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Evaluates the user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, which can cause a slight delay between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    evaluateUserConsents(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    evaluateUserConsents(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EvaluateUserConsentsResponse>;
    evaluateUserConsents(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    evaluateUserConsents(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EvaluateUserConsentsResponse>,
      callback: BodyResponseCallback<Schema$EvaluateUserConsentsResponse>
    ): void;
    evaluateUserConsents(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents,
      callback: BodyResponseCallback<Schema$EvaluateUserConsentsResponse>
    ): void;
    evaluateUserConsents(
      callback: BodyResponseCallback<Schema$EvaluateUserConsentsResponse>
    ): void;
    evaluateUserConsents(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents
        | BodyResponseCallback<Schema$EvaluateUserConsentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluateUserConsentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluateUserConsentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EvaluateUserConsentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+consentStore}:evaluateUserConsents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['consentStore'],
        pathParams: ['consentStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluateUserConsentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluateUserConsentsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the specified consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConsentStore>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConsentStore>,
      callback: BodyResponseCallback<Schema$ConsentStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Get,
      callback: BodyResponseCallback<Schema$ConsentStore>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConsentStore>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Get
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConsentStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$ConsentStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsentStore>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists the consent stores in the specified dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConsentStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConsentStoresResponse>,
      callback: BodyResponseCallback<Schema$ListConsentStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$List,
      callback: BodyResponseCallback<Schema$ListConsentStoresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConsentStoresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$List
        | BodyResponseCallback<Schema$ListConsentStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConsentStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConsentStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConsentStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consentStores').replace(
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
        createAPIRequest<Schema$ListConsentStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConsentStoresResponse>(parameters);
      }
    }

    /**
     * Updates the specified consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConsentStore>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ConsentStore>,
      callback: BodyResponseCallback<Schema$ConsentStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Patch,
      callback: BodyResponseCallback<Schema$ConsentStore>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ConsentStore>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Patch
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsentStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConsentStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$ConsentStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsentStore>(parameters);
      }
    }

    /**
     * Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. If the request is successful, a detailed response is returned of type QueryAccessibleDataResponse, contained in the response field when the operation finishes. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). For example, the following sample log entry shows a `failed to evaluate consent policy` error that occurred during a QueryAccessibleData call to consent store `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}`. ```json jsonPayload: { @type: "type.googleapis.com/google.cloud.healthcare.logging.QueryAccessibleDataLogEntry" error: { code: 9 message: "failed to evaluate consent policy" \} resourceName: "projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}" \} logName: "projects/{project_id\}/logs/healthcare.googleapis.com%2Fquery_accessible_data" operation: { id: "projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/operations/{operation_id\}" producer: "healthcare.googleapis.com/QueryAccessibleData" \} receiveTimestamp: "TIMESTAMP" resource: { labels: { consent_store_id: "{consent_store_id\}" dataset_id: "{dataset_id\}" location: "{location_id\}" project_id: "{project_id\}" \} type: "healthcare_consent_store" \} severity: "ERROR" timestamp: "TIMESTAMP" ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    queryAccessibleData(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryAccessibleData(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    queryAccessibleData(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryAccessibleData(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    queryAccessibleData(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    queryAccessibleData(callback: BodyResponseCallback<Schema$Operation>): void;
    queryAccessibleData(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+consentStore}:queryAccessibleData').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['consentStore'],
        pathParams: ['consentStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Checkdataaccess
    extends StandardParameters {
    /**
     * Required. Name of the consent store where the requested data_id is stored, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}`.
     */
    consentStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckDataAccessRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Create
    extends StandardParameters {
    /**
     * Required. The ID of the consent store to create. The string must match the following regex: `[\p{L\}\p{N\}_\-\.]{1,256\}`. Cannot be changed after creation.
     */
    consentStoreId?: string;
    /**
     * Required. The name of the dataset this consent store belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConsentStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the consent store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Evaluateuserconsents
    extends StandardParameters {
    /**
     * Required. Name of the consent store to retrieve User data mappings from.
     */
    consentStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EvaluateUserConsentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the consent store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$List
    extends StandardParameters {
    /**
     * Optional. Restricts the stores returned to those matching a filter. Only filtering on labels is supported. For example, `filter=labels.key=value`.
     */
    filter?: string;
    /**
     * Optional. Limit on the number of consent stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token to retrieve the next page of results, or empty to get the first page.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the consent store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}`. Cannot be changed after creation.
     */
    name?: string;
    /**
     * Required. The update mask that applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Only the `labels`, `default_consent_ttl`, and `enable_consent_create_on_update` fields are allowed to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConsentStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Queryaccessibledata
    extends StandardParameters {
    /**
     * Required. Name of the consent store to retrieve User data mappings from.
     */
    consentStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryAccessibleDataRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Attribute definition in the parent consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AttributeDefinition>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AttributeDefinition>,
      callback: BodyResponseCallback<Schema$AttributeDefinition>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create,
      callback: BodyResponseCallback<Schema$AttributeDefinition>
    ): void;
    create(callback: BodyResponseCallback<Schema$AttributeDefinition>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AttributeDefinition>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attributeDefinitions').replace(
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
        createAPIRequest<Schema$AttributeDefinition>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AttributeDefinition>(parameters);
      }
    }

    /**
     * Deletes the specified Attribute definition. Fails if the Attribute definition is referenced by any User data mapping, or the latest revision of any Consent.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Gets the specified Attribute definition.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AttributeDefinition>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AttributeDefinition>,
      callback: BodyResponseCallback<Schema$AttributeDefinition>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get,
      callback: BodyResponseCallback<Schema$AttributeDefinition>
    ): void;
    get(callback: BodyResponseCallback<Schema$AttributeDefinition>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AttributeDefinition>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$AttributeDefinition>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AttributeDefinition>(parameters);
      }
    }

    /**
     * Lists the Attribute definitions in the specified consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttributeDefinitionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>,
      callback: BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List,
      callback: BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List
        | BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttributeDefinitionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAttributeDefinitionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attributeDefinitions').replace(
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
        createAPIRequest<Schema$ListAttributeDefinitionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttributeDefinitionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified Attribute definition.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AttributeDefinition>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AttributeDefinition>,
      callback: BodyResponseCallback<Schema$AttributeDefinition>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch,
      callback: BodyResponseCallback<Schema$AttributeDefinition>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AttributeDefinition>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AttributeDefinition>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AttributeDefinition>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$AttributeDefinition>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AttributeDefinition>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Create
    extends StandardParameters {
    /**
     * Required. The ID of the Attribute definition to create. The string must match the following regex: `_a-zA-Z{0,255\}` and must not be a reserved keyword within the Common Expression Language as listed on https://github.com/google/cel-spec/blob/master/doc/langdef.md.
     */
    attributeDefinitionId?: string;
    /**
     * Required. The name of the consent store that this Attribute definition belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AttributeDefinition;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Attribute definition to delete. To preserve referential integrity, Attribute definitions referenced by a User data mapping or the latest revision of a Consent cannot be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Attribute definition to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$List
    extends StandardParameters {
    /**
     * Optional. Restricts the attributes returned to those matching a filter. The only field available for filtering is `category`. For example, `filter=category=\"REQUEST\"`.
     */
    filter?: string;
    /**
     * Optional. Limit on the number of Attribute definitions to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token to retrieve the next page of results or empty to get the first page.
     */
    pageToken?: string;
    /**
     * Required. Name of the consent store to retrieve Attribute definitions from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Attributedefinitions$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the Attribute definition, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/attributeDefinitions/{attribute_definition_id\}`. Cannot be changed after creation.
     */
    name?: string;
    /**
     * Required. The update mask that applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Only the `description`, `allowed_values`, `consent_default_values` and `data_mapping_default_value` fields can be updated. The updated `allowed_values` must contain all values from the previous `allowed_values`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AttributeDefinition;
  }

  export class Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Consent artifact in the parent consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConsentArtifact>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ConsentArtifact>,
      callback: BodyResponseCallback<Schema$ConsentArtifact>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create,
      callback: BodyResponseCallback<Schema$ConsentArtifact>
    ): void;
    create(callback: BodyResponseCallback<Schema$ConsentArtifact>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create
        | BodyResponseCallback<Schema$ConsentArtifact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsentArtifact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsentArtifact>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConsentArtifact> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consentArtifacts').replace(
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
        createAPIRequest<Schema$ConsentArtifact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsentArtifact>(parameters);
      }
    }

    /**
     * Deletes the specified Consent artifact. Fails if the artifact is referenced by the latest revision of any Consent.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Gets the specified Consent artifact.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConsentArtifact>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConsentArtifact>,
      callback: BodyResponseCallback<Schema$ConsentArtifact>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get,
      callback: BodyResponseCallback<Schema$ConsentArtifact>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConsentArtifact>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get
        | BodyResponseCallback<Schema$ConsentArtifact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsentArtifact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsentArtifact>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConsentArtifact> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$ConsentArtifact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsentArtifact>(parameters);
      }
    }

    /**
     * Lists the Consent artifacts in the specified consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConsentArtifactsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConsentArtifactsResponse>,
      callback: BodyResponseCallback<Schema$ListConsentArtifactsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List,
      callback: BodyResponseCallback<Schema$ListConsentArtifactsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConsentArtifactsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List
        | BodyResponseCallback<Schema$ListConsentArtifactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConsentArtifactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConsentArtifactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConsentArtifactsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consentArtifacts').replace(
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
        createAPIRequest<Schema$ListConsentArtifactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConsentArtifactsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Create
    extends StandardParameters {
    /**
     * Required. The name of the consent store this Consent artifact belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConsentArtifact;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent artifact to delete. To preserve referential integrity, Consent artifacts referenced by the latest revision of a Consent cannot be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent artifact to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consentartifacts$List
    extends StandardParameters {
    /**
     * Optional. Restricts the artifacts returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter=user_id=\"user123\"`. - consent_content_version - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.
     */
    filter?: string;
    /**
     * Optional. Limit on the number of consent artifacts to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Name of the consent store to retrieve consent artifacts from.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Datasets$Consentstores$Consents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the specified Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `REJECTED` or `REVOKED` state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    activate(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Consent>;
    activate(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$Consent>,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    activate(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    activate(callback: BodyResponseCallback<Schema$Consent>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Consent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
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
        createAPIRequest<Schema$Consent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Consent>(parameters);
      }
    }

    /**
     * Creates a new Consent in the parent consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Consent>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Consent>,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    create(callback: BodyResponseCallback<Schema$Consent>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Consent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consents').replace(
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
        createAPIRequest<Schema$Consent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Consent>(parameters);
      }
    }

    /**
     * Deletes the Consent and its revisions. To keep a record of the Consent but mark it inactive, see [RevokeConsent]. To delete a revision of a Consent, see [DeleteConsentRevision]. This operation does not delete the related Consent artifact.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Deletes the specified revision of a Consent. An INVALID_ARGUMENT error occurs if the specified revision is the latest revision.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteRevision(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteRevision(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    deleteRevision(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteRevision(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteRevision(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteRevision(callback: BodyResponseCallback<Schema$Empty>): void;
    deleteRevision(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision
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
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deleteRevision').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Gets the specified revision of a Consent, or the latest revision if `revision_id` is not specified in the resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Consent>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Consent>,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    get(callback: BodyResponseCallback<Schema$Consent>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Consent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Consent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Consent>(parameters);
      }
    }

    /**
     * Lists the Consent in the given consent store, returning each Consent's latest revision.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConsentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConsentsResponse>,
      callback: BodyResponseCallback<Schema$ListConsentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List,
      callback: BodyResponseCallback<Schema$ListConsentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListConsentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List
        | BodyResponseCallback<Schema$ListConsentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConsentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConsentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConsentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consents').replace(
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
        createAPIRequest<Schema$ListConsentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConsentsResponse>(parameters);
      }
    }

    /**
     * Lists the revisions of the specified Consent in reverse chronological order.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listRevisions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listRevisions(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConsentRevisionsResponse>;
    listRevisions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listRevisions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConsentRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListConsentRevisionsResponse>
    ): void;
    listRevisions(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions,
      callback: BodyResponseCallback<Schema$ListConsentRevisionsResponse>
    ): void;
    listRevisions(
      callback: BodyResponseCallback<Schema$ListConsentRevisionsResponse>
    ): void;
    listRevisions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions
        | BodyResponseCallback<Schema$ListConsentRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConsentRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConsentRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConsentRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:listRevisions').replace(
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
        createAPIRequest<Schema$ListConsentRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConsentRevisionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the latest revision of the specified Consent by committing a new revision with the changes. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `REJECTED` or `REVOKED` state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Consent>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Consent>,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Consent>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Consent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Consent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Consent>(parameters);
      }
    }

    /**
     * Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the specified Consent is in the `REJECTED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `ACTIVE` or `REVOKED` state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reject(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reject(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Consent>;
    reject(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reject(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject,
      options: MethodOptions | BodyResponseCallback<Schema$Consent>,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    reject(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    reject(callback: BodyResponseCallback<Schema$Consent>): void;
    reject(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Consent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reject').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Consent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Consent>(parameters);
      }
    }

    /**
     * Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the specified Consent is in the `REVOKED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in `DRAFT` or `REJECTED` state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    revoke(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    revoke(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Consent>;
    revoke(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke,
      options: MethodOptions | BodyResponseCallback<Schema$Consent>,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke,
      callback: BodyResponseCallback<Schema$Consent>
    ): void;
    revoke(callback: BodyResponseCallback<Schema$Consent>): void;
    revoke(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Consent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Consent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:revoke').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Consent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Consent>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Activate
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent to activate, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateConsentRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Create
    extends StandardParameters {
    /**
     * Required. Name of the consent store.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Consent;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent to delete, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Deleterevision
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent revision to delete, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}@{revision_id\}`. An INVALID_ARGUMENT error occurs if `revision_id` is not specified in the name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent to retrieve, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. In order to retrieve a previous revision of the Consent, also provide the revision ID: `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}@{revision_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$List
    extends StandardParameters {
    /**
     * Optional. Restricts the Consents returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter='user_id="user123"'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.
     */
    filter?: string;
    /**
     * Optional. Limit on the number of Consents to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Name of the consent store to retrieve Consents from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Listrevisions
    extends StandardParameters {
    /**
     * Optional. Restricts the revisions returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields available for filtering are: - user_id. For example, `filter='user_id="user123"'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.
     */
    filter?: string;
    /**
     * Required. The resource name of the Consent to retrieve revisions for.
     */
    name?: string;
    /**
     * Optional. Limit on the number of revisions to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the Consent, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. Cannot be changed after creation.
     */
    name?: string;
    /**
     * Required. The update mask to apply to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Only the `user_id`, `policies`, `consent_artifact`, and `metadata` fields can be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Consent;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Reject
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent to reject, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RejectConsentRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Consents$Revoke
    extends StandardParameters {
    /**
     * Required. The resource name of the Consent to revoke, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/consents/{consent_id\}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RevokeConsentRequest;
  }

  export class Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Archives the specified User data mapping.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    archive(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ArchiveUserDataMappingResponse>;
    archive(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>,
      callback: BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>
    ): void;
    archive(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive,
      callback: BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>
    ): void;
    archive(
      callback: BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>
    ): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive
        | BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ArchiveUserDataMappingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ArchiveUserDataMappingResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:archive').replace(
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
        createAPIRequest<Schema$ArchiveUserDataMappingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ArchiveUserDataMappingResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a new User data mapping in the parent consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserDataMapping>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UserDataMapping>,
      callback: BodyResponseCallback<Schema$UserDataMapping>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create,
      callback: BodyResponseCallback<Schema$UserDataMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserDataMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserDataMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userDataMappings').replace(
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
        createAPIRequest<Schema$UserDataMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserDataMapping>(parameters);
      }
    }

    /**
     * Deletes the specified User data mapping.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Gets the specified User data mapping.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserDataMapping>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserDataMapping>,
      callback: BodyResponseCallback<Schema$UserDataMapping>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get,
      callback: BodyResponseCallback<Schema$UserDataMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserDataMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserDataMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$UserDataMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserDataMapping>(parameters);
      }
    }

    /**
     * Lists the User data mappings in the specified consent store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUserDataMappingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserDataMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListUserDataMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List,
      callback: BodyResponseCallback<Schema$ListUserDataMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserDataMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List
        | BodyResponseCallback<Schema$ListUserDataMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserDataMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserDataMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUserDataMappingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userDataMappings').replace(
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
        createAPIRequest<Schema$ListUserDataMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserDataMappingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified User data mapping.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserDataMapping>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UserDataMapping>,
      callback: BodyResponseCallback<Schema$UserDataMapping>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch,
      callback: BodyResponseCallback<Schema$UserDataMapping>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserDataMapping>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserDataMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserDataMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$UserDataMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserDataMapping>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Archive
    extends StandardParameters {
    /**
     * Required. The resource name of the User data mapping to archive.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ArchiveUserDataMappingRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Create
    extends StandardParameters {
    /**
     * Required. Name of the consent store.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserDataMapping;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the User data mapping to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the User data mapping to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$List
    extends StandardParameters {
    /**
     * Optional. Restricts the User data mappings returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - data_id - user_id. For example, `filter=user_id=\"user123\"`. - archived - archive_time
     */
    filter?: string;
    /**
     * Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * Optional. Token to retrieve the next page of results, or empty to get the first page.
     */
    pageToken?: string;
    /**
     * Required. Name of the consent store to retrieve User data mappings from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Consentstores$Userdatamappings$Patch
    extends StandardParameters {
    /**
     * Resource name of the User data mapping, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/consentStores/{consent_store_id\}/userDataMappings/{user_data_mapping_id\}`.
     */
    name?: string;
    /**
     * Required. The update mask that applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Only the `data_id`, `user_id` and `resource_attributes` fields can be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserDataMapping;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores {
    context: APIRequestContext;
    dicomWeb: Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb;
    studies: Resource$Projects$Locations$Datasets$Dicomstores$Studies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dicomWeb =
        new Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb(
          this.context
        );
      this.studies =
        new Resource$Projects$Locations$Datasets$Dicomstores$Studies(
          this.context
        );
    }

    /**
     * Creates a new DICOM store within the parent dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStore>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DicomStore>,
      callback: BodyResponseCallback<Schema$DicomStore>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
      callback: BodyResponseCallback<Schema$DicomStore>
    ): void;
    create(callback: BodyResponseCallback<Schema$DicomStore>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Create
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DicomStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomStores').replace(
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
        createAPIRequest<Schema$DicomStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyDicomStoreSummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The output DICOM store will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deidentify(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deidentify(callback: BodyResponseCallback<Schema$Operation>): void;
    deidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+sourceStore}:deidentify').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['sourceStore'],
        pathParams: ['sourceStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes the specified DICOM store and removes all images that are contained within it.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Exports data to the specified destination by copying it from the DICOM store. Errors are also logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Export
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:export').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the specified DICOM store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStore>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DicomStore>,
      callback: BodyResponseCallback<Schema$DicomStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
      callback: BodyResponseCallback<Schema$DicomStore>
    ): void;
    get(callback: BodyResponseCallback<Schema$DicomStore>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Get
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DicomStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$DicomStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * Gets metrics associated with the DICOM store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDICOMStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDICOMStoreMetrics(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStoreMetrics>;
    getDICOMStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDICOMStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics,
      options: MethodOptions | BodyResponseCallback<Schema$DicomStoreMetrics>,
      callback: BodyResponseCallback<Schema$DicomStoreMetrics>
    ): void;
    getDICOMStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics,
      callback: BodyResponseCallback<Schema$DicomStoreMetrics>
    ): void;
    getDICOMStoreMetrics(
      callback: BodyResponseCallback<Schema$DicomStoreMetrics>
    ): void;
    getDICOMStoreMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics
        | BodyResponseCallback<Schema$DicomStoreMetrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DicomStoreMetrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DicomStoreMetrics>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DicomStoreMetrics>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getDICOMStoreMetrics').replace(
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
        createAPIRequest<Schema$DicomStoreMetrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DicomStoreMetrics>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Imports data into the DICOM store by copying it from the specified source. Errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Import
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:import').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists the DICOM stores in the given dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDicomStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDicomStoresResponse>,
      callback: BodyResponseCallback<Schema$ListDicomStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
      callback: BodyResponseCallback<Schema$ListDicomStoresResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDicomStoresResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$List
        | BodyResponseCallback<Schema$ListDicomStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDicomStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDicomStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDicomStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomStores').replace(
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
        createAPIRequest<Schema$ListDicomStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDicomStoresResponse>(parameters);
      }
    }

    /**
     * Updates the specified DICOM store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStore>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DicomStore>,
      callback: BodyResponseCallback<Schema$DicomStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
      callback: BodyResponseCallback<Schema$DicomStore>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DicomStore>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DicomStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DicomStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$DicomStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForInstances, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForInstances, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchForInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForInstances(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchForInstances(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * SearchForSeries returns a list of matching series. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForSeries, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForSeries, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchForSeries(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForSeries(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchForSeries(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * SearchForStudies returns a list of matching studies. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForStudies, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForStudies, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchForStudies(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchForStudies(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchForStudies(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForStudies(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForStudies(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForStudies(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchForStudies(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Store DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#store-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    storeInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    storeInstances(callback: BodyResponseCallback<Schema$HttpBody>): void;
    storeInstances(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Create
    extends StandardParameters {
    /**
     * Required. The ID of the DICOM store that is being created. Any string value up to 256 characters in length.
     */
    dicomStoreId?: string;
    /**
     * Required. The name of the dataset this DICOM store belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DicomStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify
    extends StandardParameters {
    /**
     * Required. Source DICOM store resource name. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    sourceStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeidentifyDicomStoreRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the DICOM store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Export
    extends StandardParameters {
    /**
     * Required. The DICOM store resource name from which to export the data. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportDicomDataRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the DICOM store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Getdicomstoremetrics
    extends StandardParameters {
    /**
     * Required. The resource name of the DICOM store to get metrics for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Import
    extends StandardParameters {
    /**
     * Required. The name of the DICOM store resource into which the data is imported. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportDicomDataRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$List
    extends StandardParameters {
    /**
     * Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of DICOM stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the DICOM store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DicomStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances
    extends StandardParameters {
    /**
     * Required. The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid\}/instances`, or `studies/{study_uid\}/instances`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries
    extends StandardParameters {
    /**
     * Required. The path of the SearchForSeries DICOMweb request. For example, `series` or `studies/{study_uid\}/series`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies
    extends StandardParameters {
    /**
     * Required. The path of the SearchForStudies DICOMweb request. For example, `studies`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances
    extends StandardParameters {
    /**
     * Required. The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid\}]`. Note that the `study_uid` is optional.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb {
    context: APIRequestContext;
    studies: Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.studies =
        new Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies {
    context: APIRequestContext;
    series: Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.series =
        new Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series(
          this.context
        );
    }

    /**
     * GetStudyMetrics returns metrics for a study.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getStudyMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getStudyMetrics(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StudyMetrics>;
    getStudyMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getStudyMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics,
      options: MethodOptions | BodyResponseCallback<Schema$StudyMetrics>,
      callback: BodyResponseCallback<Schema$StudyMetrics>
    ): void;
    getStudyMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics,
      callback: BodyResponseCallback<Schema$StudyMetrics>
    ): void;
    getStudyMetrics(callback: BodyResponseCallback<Schema$StudyMetrics>): void;
    getStudyMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics
        | BodyResponseCallback<Schema$StudyMetrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StudyMetrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StudyMetrics>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$StudyMetrics> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+study}:getStudyMetrics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['study'],
        pathParams: ['study'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StudyMetrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StudyMetrics>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Getstudymetrics
    extends StandardParameters {
    /**
     * Required. The study resource path. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}/dicomWeb/studies/{study_uid\}`.
     */
    study?: string;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * GetSeriesMetrics returns metrics for a series.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSeriesMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSeriesMetrics(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SeriesMetrics>;
    getSeriesMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSeriesMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics,
      options: MethodOptions | BodyResponseCallback<Schema$SeriesMetrics>,
      callback: BodyResponseCallback<Schema$SeriesMetrics>
    ): void;
    getSeriesMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics,
      callback: BodyResponseCallback<Schema$SeriesMetrics>
    ): void;
    getSeriesMetrics(
      callback: BodyResponseCallback<Schema$SeriesMetrics>
    ): void;
    getSeriesMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics
        | BodyResponseCallback<Schema$SeriesMetrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SeriesMetrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SeriesMetrics>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SeriesMetrics> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+series}:getSeriesMetrics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['series'],
        pathParams: ['series'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SeriesMetrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SeriesMetrics>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Studies$Series$Getseriesmetrics
    extends StandardParameters {
    /**
     * Required. The series resource path. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}/dicomWeb/studies/{study_uid\}/series/{series_uid\}`.
     */
    series?: string;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies {
    context: APIRequestContext;
    series: Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.series =
        new Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series(
          this.context
        );
    }

    /**
     * DeleteStudy deletes all instances within the given study. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. The method returns an Operation which will be marked successful when the deletion is complete. Warning: Instances cannot be inserted into a study that is being deleted by an operation until the operation completes. For samples that show how to call DeleteStudy, see [Delete a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#delete-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * RetrieveStudyMetadata returns instance associated with the given study presented as metadata with the bulk data removed. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveStudyMetadata, see [Metadata resources](https://cloud.google.com/healthcare/docs/dicom#metadata_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveStudyMetadata, see [Retrieve metadata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-metadata).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveMetadata(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveMetadata(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * RetrieveStudy returns all instances within the given study. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveStudy, see [DICOM study/series/instances](https://cloud.google.com/healthcare/docs/dicom#dicom_studyseriesinstances) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveStudy, see [Retrieve DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveStudy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveStudy(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveStudy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveStudy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveStudy(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveStudy(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveStudy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForInstances, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForInstances, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchForInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForInstances(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchForInstances(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * SearchForSeries returns a list of matching series. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForSeries, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForSeries, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchForSeries(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForSeries(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchForSeries(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Store DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#store-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    storeInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    storeInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    storeInstances(callback: BodyResponseCallback<Schema$HttpBody>): void;
    storeInstances(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete
    extends StandardParameters {
    /**
     * Required. The path of the DeleteStudy request. For example, `studies/{study_uid\}`.
     */
    dicomWebPath?: string;
    /**
     *
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveStudyMetadata DICOMweb request. For example, `studies/{study_uid\}/metadata`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveStudy DICOMweb request. For example, `studies/{study_uid\}`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances
    extends StandardParameters {
    /**
     * Required. The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid\}/instances`, or `studies/{study_uid\}/instances`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries
    extends StandardParameters {
    /**
     * Required. The path of the SearchForSeries DICOMweb request. For example, `series` or `studies/{study_uid\}/series`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances
    extends StandardParameters {
    /**
     * Required. The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid\}]`. Note that the `study_uid` is optional.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series {
    context: APIRequestContext;
    instances: Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances =
        new Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances(
          this.context
        );
    }

    /**
     * DeleteSeries deletes all instances within the given study and series. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. The method returns an Operation which will be marked successful when the deletion is complete. Warning: Instances cannot be inserted into a series that is being deleted by an operation until the operation completes. For samples that show how to call DeleteSeries, see [Delete a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#delete-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * RetrieveSeriesMetadata returns instance associated with the given study and series, presented as metadata with the bulk data removed. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveSeriesMetadata, see [Metadata resources](https://cloud.google.com/healthcare/docs/dicom#metadata_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveSeriesMetadata, see [Retrieve metadata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-metadata).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveMetadata(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveMetadata(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * RetrieveSeries returns all instances within the given study and series. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveSeries, see [DICOM study/series/instances](https://cloud.google.com/healthcare/docs/dicom#dicom_studyseriesinstances) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveSeries, see [Retrieve DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveSeries(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveSeries(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveSeries(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveSeries(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForInstances, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForInstances, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchForInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForInstances(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchForInstances(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchForInstances(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete
    extends StandardParameters {
    /**
     * Required. The path of the DeleteSeries request. For example, `studies/{study_uid\}/series/{series_uid\}`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveSeriesMetadata DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}/metadata`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveSeries DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances
    extends StandardParameters {
    /**
     * Required. The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid\}/instances`, or `studies/{study_uid\}/instances`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances {
    context: APIRequestContext;
    frames: Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.frames =
        new Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames(
          this.context
        );
    }

    /**
     * DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. Study and series search results can take a few seconds to be updated after an instance is deleted using DeleteInstance. For samples that show how to call DeleteInstance, see [Delete a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#delete-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
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

    /**
     * RetrieveInstance returns instance associated with the given study, series, and SOP Instance UID. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveInstance, see [DICOM study/series/instances](https://cloud.google.com/healthcare/docs/dicom#dicom_studyseriesinstances) and [DICOM instances](https://cloud.google.com/healthcare/docs/dicom#dicom_instances) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveInstance, see [Retrieve an instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-instance).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveInstance(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveInstance(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveInstance(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveInstance(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveInstance(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveInstance(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveInstance(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata with the bulk data removed. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveInstanceMetadata, see [Metadata resources](https://cloud.google.com/healthcare/docs/dicom#metadata_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveInstanceMetadata, see [Retrieve metadata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-metadata).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveMetadata(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveMetadata(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveMetadata(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * RetrieveRenderedInstance returns instance associated with the given study, series, and SOP Instance UID in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedInstance, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedInstance, see [Retrieve consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-consumer).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveRendered(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveRendered(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveRendered(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete
    extends StandardParameters {
    /**
     * Required. The path of the DeleteInstance request. For example, `studies/{study_uid\}/series/{series_uid\}/instances/{instance_uid\}`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveInstance DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}/instances/{instance_uid\}`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveInstanceMetadata DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}/instances/{instance_uid\}/metadata`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveRenderedInstance DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}/instances/{instance_uid\}/rendered`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * RetrieveFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4\}. For details on the implementation of RetrieveFrames, see [DICOM frames](https://cloud.google.com/healthcare/docs/dicom#dicom_frames) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveFrames, see [Retrieve DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-dicom).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveFrames(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveFrames(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveFrames(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveFrames(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveFrames(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveFrames(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveFrames(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieve consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-consumer).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveRendered(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveRendered(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    retrieveRendered(callback: BodyResponseCallback<Schema$HttpBody>): void;
    retrieveRendered(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dicomWeb/{+dicomWebPath}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveFrames DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}/instances/{instance_uid\}/frames/{frame_list\}`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered
    extends StandardParameters {
    /**
     * Required. The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid\}/series/{series_uid\}/instances/{instance_uid\}/frames/{frame_list\}/rendered`.
     */
    dicomWebPath?: string;
    /**
     * Required. The name of the DICOM store that is being accessed. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/dicomStores/{dicom_store_id\}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Datasets$Fhirstores {
    context: APIRequestContext;
    fhir: Resource$Projects$Locations$Datasets$Fhirstores$Fhir;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.fhir = new Resource$Projects$Locations$Datasets$Fhirstores$Fhir(
        this.context
      );
    }

    /**
     * Creates a new FHIR store within the parent dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStore>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
      options: MethodOptions | BodyResponseCallback<Schema$FhirStore>,
      callback: BodyResponseCallback<Schema$FhirStore>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
      callback: BodyResponseCallback<Schema$FhirStore>
    ): void;
    create(callback: BodyResponseCallback<Schema$FhirStore>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Create
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FhirStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhirStores').replace(
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
        createAPIRequest<Schema$FhirStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. If errors occur, error is set. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deidentify(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deidentify(callback: BodyResponseCallback<Schema$Operation>): void;
    deidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+sourceStore}:deidentify').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['sourceStore'],
        pathParams: ['sourceStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes the specified FHIR store and removes all resources within it.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Export resources from the FHIR store to the specified destination. This method returns an Operation that can be used to track the status of the export by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ExportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Export
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:export').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the configuration of the specified FHIR store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStore>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FhirStore>,
      callback: BodyResponseCallback<Schema$FhirStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
      callback: BodyResponseCallback<Schema$FhirStore>
    ): void;
    get(callback: BodyResponseCallback<Schema$FhirStore>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Get
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FhirStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$FhirStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * Gets metrics associated with the FHIR store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getFHIRStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getFHIRStoreMetrics(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStoreMetrics>;
    getFHIRStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getFHIRStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics,
      options: MethodOptions | BodyResponseCallback<Schema$FhirStoreMetrics>,
      callback: BodyResponseCallback<Schema$FhirStoreMetrics>
    ): void;
    getFHIRStoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics,
      callback: BodyResponseCallback<Schema$FhirStoreMetrics>
    ): void;
    getFHIRStoreMetrics(
      callback: BodyResponseCallback<Schema$FhirStoreMetrics>
    ): void;
    getFHIRStoreMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics
        | BodyResponseCallback<Schema$FhirStoreMetrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FhirStoreMetrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FhirStoreMetrics>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FhirStoreMetrics> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getFHIRStoreMetrics').replace(
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
        createAPIRequest<Schema$FhirStoreMetrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FhirStoreMetrics>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Imports resources to the FHIR store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some FHIR store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty FHIR store that is not being used by other clients. In cases where this method is not appropriate, consider using ExecuteBundle to load data. Every resource in the input must contain a client-supplied ID. Each resource is stored using the supplied ID regardless of the enable_update_create setting on the FHIR store. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Cloud Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The import process does not enforce referential integrity, regardless of the disable_referential_integrity setting on the FHIR store. This allows the import of resources with arbitrary interdependencies without considering grouping or ordering, but if the input data contains invalid references or if some resources fail to be imported, the FHIR store might be left in a state that violates referential integrity. The import process does not trigger Pub/Sub notification or BigQuery streaming update, regardless of how those are configured on the FHIR store. If a resource with the specified ID already exists, the most recent version of the resource is overwritten without creating a new historical version, regardless of the disable_resource_versioning setting on the FHIR store. If transient failures occur during the import, it's possible that successfully imported resources will be overwritten more than once. The import operation is idempotent unless the input data contains multiple valid resources with the same ID but different contents. In that case, after the import completes, the store contains exactly one resource with that ID but there is no ordering guarantee on which version of the contents it will have. The operation result counters do not count duplicate IDs as an error and count one success for each resource in the input, which might result in a success count larger than the number of resources in the FHIR store. This often occurs when importing data organized in bundles produced by Patient-everything where each bundle contains its own copy of a resource such as Practitioner that might be referred to by many patients. If some resources fail to import, for example due to parsing errors, successfully imported resources are not rolled back. The location and format of the input data is specified by the parameters in ImportResourcesRequest. Note that if no format is specified, this method assumes the `BUNDLE` format. When using the `BUNDLE` format this method ignores the `Bundle.type` field, except that `history` bundles are rejected, and does not apply any of the bundle processing semantics for batch or transaction bundles. Unlike in ExecuteBundle, transaction bundles are not executed as a single transaction and bundle-internal references are not rewritten. The bundle is treated as a collection of resources to be written as provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As an example, this allows the import of `searchset` bundles produced by a FHIR search or Patient-everything operation. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ImportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Import
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:import').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists the FHIR stores in the given dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFhirStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFhirStoresResponse>,
      callback: BodyResponseCallback<Schema$ListFhirStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
      callback: BodyResponseCallback<Schema$ListFhirStoresResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFhirStoresResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$List
        | BodyResponseCallback<Schema$ListFhirStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFhirStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFhirStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFhirStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhirStores').replace(
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
        createAPIRequest<Schema$ListFhirStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFhirStoresResponse>(parameters);
      }
    }

    /**
     * Updates the configuration of the specified FHIR store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStore>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$FhirStore>,
      callback: BodyResponseCallback<Schema$FhirStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
      callback: BodyResponseCallback<Schema$FhirStore>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FhirStore>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FhirStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FhirStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$FhirStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * Rolls back resources from the FHIR store to the specified time. This method returns an Operation that can be used to track the status of the rollback by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type RollbackFhirResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rollback(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:rollback').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Create
    extends StandardParameters {
    /**
     * Required. The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L\}\p{N\}_\-\.]{1,256\}`.
     */
    fhirStoreId?: string;
    /**
     * Required. The name of the dataset this FHIR store belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FhirStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify
    extends StandardParameters {
    /**
     * Required. Source FHIR store resource name. For example, `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    sourceStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeidentifyFhirStoreRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the FHIR store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Export
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store to export resource from, in the format of `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportResourcesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the FHIR store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Getfhirstoremetrics
    extends StandardParameters {
    /**
     * Required. The resource name of the FHIR store to get metrics for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Import
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store to import FHIR resources to, in the format of `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportResourcesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$List
    extends StandardParameters {
    /**
     * Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported, for example `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of FHIR stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch
    extends StandardParameters {
    /**
     * Output only. Identifier. Resource name of the FHIR store, of the form `projects/{project_id\}/datasets/{dataset_id\}/fhirStores/{fhir_store_id\}`.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FhirStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Rollback
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store to rollback, in the format of "projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\} /fhirStores/{fhir_store_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackFhirResourcesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Fhirstores$Fhir {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the FHIR capability statement ([STU3](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html), [R4](http://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)), or the [conformance statement](http://hl7.org/implement/standards/fhir/DSTU2/conformance.html) in the DSTU2 case for the store, which contains a description of functionality supported by the server. Implements the FHIR standard capabilities interaction ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#capabilities)), or the [conformance interaction](http://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance) in the DSTU2 case. On success, the response body contains a JSON-encoded representation of a `CapabilityStatement` resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    capabilities(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    capabilities(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    capabilities(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    capabilities(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    capabilities(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    capabilities(callback: BodyResponseCallback<Schema$HttpBody>): void;
    capabilities(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/fhir/metadata').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Deletes a FHIR resource that match an identifier search query. Implements the FHIR standard conditional delete interaction, limited to searching by resource identifier. If multiple resources match, 412 Precondition Failed error will be returned. Search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resource is moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method. For samples that show how to call `conditionalDelete`, see [Conditionally deleting a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_deleting_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    conditionalDelete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    conditionalDelete(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    conditionalDelete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    conditionalDelete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    conditionalDelete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    conditionalDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    conditionalDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir/{+type}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
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

    /**
     * If a resource is found with the identifier specified in the query parameters, updates part of that resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document. Implements the FHIR standard conditional patch interaction, limited to searching by resource identifier. DSTU2 doesn't define a conditional patch method, but the server supports it in the same way it supports STU3. Search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `conditionalPatch`, see [Conditionally patching a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_patching_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    conditionalPatch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    conditionalPatch(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    conditionalPatch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    conditionalPatch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    conditionalPatch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    conditionalPatch(callback: BodyResponseCallback<Schema$HttpBody>): void;
    conditionalPatch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir/{+type}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * If a resource is found with the identifier specified in the query parameters, updates the entire contents of that resource. Implements the FHIR standard conditional update interaction, limited to searching by resource identifier. Search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. If the search criteria identify zero matches, and the supplied resource body contains an `id`, and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. If the search criteria identify zero matches, and the supplied resource body does not contain an `id`, the resource is created with a server-assigned ID as per the create method. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `conditionalUpdate`, see [Conditionally updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_updating_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    conditionalUpdate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    conditionalUpdate(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    conditionalUpdate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    conditionalUpdate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    conditionalUpdate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    conditionalUpdate(callback: BodyResponseCallback<Schema$HttpBody>): void;
    conditionalUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir/{+type}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Creates a FHIR resource. Implements the FHIR standard create interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#create), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#create), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#create)), which creates a new resource with a server-assigned resource ID. Also supports the FHIR standard conditional create interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#ccreate), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#ccreate), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#ccreate)), specified by supplying an `If-None-Exist` header containing a FHIR search query, limited to searching by resource identifier. If no resources match this search query, the server processes the create operation as normal. When using conditional create, the search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `create`, see [Creating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#creating_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    create(callback: BodyResponseCallback<Schema$HttpBody>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir/{+type}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Deletes a FHIR resource. Implements the FHIR standard delete interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#delete), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#delete), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#delete)). Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resources will be moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method. For samples that show how to call `delete`, see [Deleting a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#deleting_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Executes all the requests in the given Bundle. Implements the FHIR standard batch/transaction interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#transaction), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#transaction)). Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the batch processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#brules)) and transaction processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#trules)). The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`. For a batch bundle or a successful transaction, the response body contains a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body contains a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method checks permissions for each request in the bundle. The `executeBundle` permission is required to call this method, but you must also grant sufficient permissions to execute the individual requests in the bundle. For example, if the bundle contains a request to create a FHIR resource, the caller must also have been granted the `healthcare.fhirResources.create` permission. You can use audit logs to view the permissions for `executeBundle` and each request in the bundle. For more information, see [Viewing Cloud Audit logs](https://cloud.google.com/healthcare-api/docs/how-tos/audit-logging). For samples that show how to call `executeBundle`, see [Managing FHIR resources using FHIR bundles](https://cloud.google.com/healthcare/docs/how-tos/fhir-bundles).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    executeBundle(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    executeBundle(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    executeBundle(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    executeBundle(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    executeBundle(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    executeBundle(callback: BodyResponseCallback<Schema$HttpBody>): void;
    executeBundle(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. Implements the per-resource form of the FHIR standard history interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#history), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#history), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#history)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `history`, see [Listing FHIR resource versions](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#listing_fhir_resource_versions).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    history(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    history(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    history(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    history(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    history(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    history(callback: BodyResponseCallback<Schema$HttpBody>): void;
    history(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/_history').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Updates part of an existing resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document. Implements the FHIR standard patch interaction ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#patch), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#patch)). DSTU2 doesn't define a patch method, but the server supports it in the same way it supports STU3. The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `patch`, see [Patching a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#patching_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    patch(callback: BodyResponseCallback<Schema$HttpBody>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Retrieves a Patient resource and resources related to that patient. Implements the FHIR extended operation Patient-everything ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/patient-operations.html#everything), [STU3](http://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything), [R4](http://hl7.org/implement/standards/fhir/R4/patient-operations.html#everything)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The resources in scope for the response are: * The patient resource itself. * All the resources directly referenced by the patient resource. * Resources directly referencing the patient resource that meet the inclusion criteria. The inclusion criteria are based on the membership rules in the patient compartment definition ([DSTU2](http://hl7.org/fhir/DSTU2/compartment-patient.html), [STU3](http://www.hl7.org/fhir/stu3/compartmentdefinition-patient.html), [R4](http://hl7.org/fhir/R4/compartmentdefinition-patient.html)), which details the eligible resource types and referencing search parameters. For samples that show how to call `Patient-everything`, see [Getting all patient compartment resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#getting_all_patient_compartment_resources).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    PatientEverything(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    PatientEverything(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    PatientEverything(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    PatientEverything(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    PatientEverything(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    PatientEverything(callback: BodyResponseCallback<Schema$HttpBody>): void;
    PatientEverything(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/$everything').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Gets the contents of a FHIR resource. Implements the FHIR standard read interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#read), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#read), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#read)). Also supports the FHIR standard conditional read interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#cread), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#cread), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#cread)) specified by supplying an `If-Modified-Since` header with a date/time value or an `If-None-Match` header with an ETag value. On success, the response body contains a JSON-encoded representation of the resource. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `read`, see [Getting a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#getting_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    read(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    read(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    read(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    read(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    read(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    read(callback: BodyResponseCallback<Schema$HttpBody>): void;
    read(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method. This is not a FHIR standard operation. For samples that show how to call `Resource-purge`, see [Deleting historical versions of a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#deleting_historical_versions_of_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    ResourcePurge(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    ResourcePurge(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    ResourcePurge(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ResourcePurge(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    ResourcePurge(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    ResourcePurge(callback: BodyResponseCallback<Schema$Empty>): void;
    ResourcePurge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge
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
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/$purge').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Validates an input FHIR resource's conformance to its profiles and the profiles configured on the FHIR store. Implements the FHIR extended operation $validate ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resource-operations.html#validate), [STU3](http://hl7.org/implement/standards/fhir/STU3/resource-operations.html#validate), or [R4](http://hl7.org/implement/standards/fhir/R4/resource-operation-validate.html)). The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The `Parameters` input syntax is not supported. The `profile` query parameter can be used to request that the resource only be validated against a specific profile. If a profile with the given URL cannot be found in the FHIR store then an error is returned. Errors generated by validation contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    ResourceValidate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    ResourceValidate(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    ResourceValidate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ResourceValidate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    ResourceValidate(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    ResourceValidate(callback: BodyResponseCallback<Schema$HttpBody>): void;
    ResourceValidate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir/{+type}/$validate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html), [R4](http://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changed, and the time when the change reflects in search results. The only exception is resource identifier data, which is indexed synchronously as a special index. As a result, searching using resource identifier is not subject to indexing delay. To use the special synchronous index, the search term for identifier should be in the pattern `identifier=[system]|[value]` or `identifier=[value]`, and any of the following search result parameters can be used: * `_count` * `_include` * `_revinclude` * `_summary` * `_elements` If your query contains any other search parameters, the standard asynchronous index will be used instead. Note that searching against the special index is optimized for resolving a small number of matches. The search isn't optimized if your identifier search criteria matches a large number (i.e. more than 2,000) of resources. For a search query that will match a large number of resources, you can avoiding using the special synchronous index by including an additional `_sort` parameter in your query. Use `_sort=-_lastUpdated` if you want to keep the default sorting order. Note: The special synchronous identifier index are currently disabled for DocumentReference and DocumentManifest searches. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    search(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    search(callback: BodyResponseCallback<Schema$HttpBody>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fhir/_search').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html), [R4](http://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changed, and the time when the change reflects in search results. The only exception is resource identifier data, which is indexed synchronously as a special index. As a result, searching using resource identifier is not subject to indexing delay. To use the special synchronous index, the search term for identifier should be in the pattern `identifier=[system]|[value]` or `identifier=[value]`, and any of the following search result parameters can be used: * `_count` * `_include` * `_revinclude` * `_summary` * `_elements` If your query contains any other search parameters, the standard asynchronous index will be used instead. Note that searching against the special index is optimized for resolving a small number of matches. The search isn't optimized if your identifier search criteria matches a large number (i.e. more than 2,000) of resources. For a search query that will match a large number of resources, you can avoiding using the special synchronous index by including an additional `_sort` parameter in your query. Use `_sort=-_lastUpdated` if you want to keep the default sorting order. Note: The special synchronous identifier index are currently disabled for DocumentReference and DocumentManifest searches. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchType(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchType(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    searchType(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchType(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchType(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    searchType(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchType(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/fhir/{resourceType}/_search'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'resourceType'],
        pathParams: ['parent', 'resourceType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Updates the entire contents of a resource. Implements the FHIR standard update interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#update), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#update), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#update)). If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `update`, see [Updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#updating_a_fhir_resource).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    update(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    update(callback: BodyResponseCallback<Schema$HttpBody>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Gets the contents of a version (current or historical) of a FHIR resource by version ID. Implements the FHIR standard vread interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#vread), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#vread), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#vread)). On success, the response body contains a JSON-encoded representation of the resource. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `vread`, see [Retrieving a FHIR resource version](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#retrieving_a_fhir_resource_version).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    vread(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    vread(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    vread(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    vread(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    vread(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    vread(callback: BodyResponseCallback<Schema$HttpBody>): void;
    vread(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HttpBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities
    extends StandardParameters {
    /**
     * Required. Name of the FHIR store to retrieve the capabilities for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * Required. The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
     */
    type?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * Required. The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * Required. The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * Required. The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete
    extends StandardParameters {
    /**
     * Required. The name of the resource to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle
    extends StandardParameters {
    /**
     * Required. Name of the FHIR store in which this bundle will be executed.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History
    extends StandardParameters {
    /**
     * Required. The name of the resource to retrieve.
     */
    name?: string;
    /**
     * Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] Clients may specify any of the following: * An entire year: `_at=2019` * An entire month: `_at=2019-01` * A specific day: `_at=2019-01-20` * A specific second: `_at=2018-12-31T23:59:58Z`
     */
    _at?: string;
    /**
     * The maximum number of search results on a page. If not specified, 100 is used. May not be larger than 1000.
     */
    _count?: number;
    /**
     * Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links' URLs. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.
     */
    _page_token?: string;
    /**
     * Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
     */
    _since?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch
    extends StandardParameters {
    /**
     * Required. The name of the resource to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything
    extends StandardParameters {
    /**
     * Optional. The response includes records prior to the end date. The date uses the format YYYY-MM-DD. If no end date is provided, all records subsequent to the start date are in scope.
     */
    end?: string;
    /**
     * Required. Name of the `Patient` resource for which the information is required.
     */
    name?: string;
    /**
     * Optional. The response includes records subsequent to the start date. The date uses the format YYYY-MM-DD. If no start date is provided, all records prior to the end date are in scope.
     */
    start?: string;
    /**
     * Optional. Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.
     */
    _count?: number;
    /**
     * Used to retrieve the next or previous page of results when using pagination. Set `_page_token` to the value of _page_token set in next or previous page links' url. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.
     */
    _page_token?: string;
    /**
     * Optional. If provided, only resources updated after this time are returned. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.
     */
    _since?: string;
    /**
     * Optional. String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned. Specifying multiple `_type` parameters isn't supported. For example, the result of `_type=Observation&_type=Encounter` is undefined. Use `_type=Observation,Encounter` instead.
     */
    _type?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read
    extends StandardParameters {
    /**
     * Required. The name of the resource to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge
    extends StandardParameters {
    /**
     * Required. The name of the resource to purge.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcevalidate
    extends StandardParameters {
    /**
     * Required. The name of the FHIR store that holds the profiles being used for validation.
     */
    parent?: string;
    /**
     * Required. The canonical URL of a profile that this resource should be validated against. For example, to validate a Patient resource against the US Core Patient profile this parameter would be `http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient`. A StructureDefinition with this canonical URL must exist in the FHIR store.
     */
    profile?: string;
    /**
     * Required. The FHIR resource type of the resource being validated. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), or [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search
    extends StandardParameters {
    /**
     * Required. Name of the FHIR store to retrieve resources from.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchResourcesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Searchtype
    extends StandardParameters {
    /**
     * Required. Name of the FHIR store to retrieve resources from.
     */
    parent?: string;
    /**
     * Required. The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
     */
    resourceType?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchResourcesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update
    extends StandardParameters {
    /**
     * Required. The name of the resource to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread
    extends StandardParameters {
    /**
     * Required. The name of the resource version to retrieve.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Datasets$Hl7v2stores {
    context: APIRequestContext;
    messages: Resource$Projects$Locations$Datasets$Hl7v2stores$Messages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.messages =
        new Resource$Projects$Locations$Datasets$Hl7v2stores$Messages(
          this.context
        );
    }

    /**
     * Creates a new HL7v2 store within the parent dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2Store>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Hl7V2Store>,
      callback: BodyResponseCallback<Schema$Hl7V2Store>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
      callback: BodyResponseCallback<Schema$Hl7V2Store>
    ): void;
    create(callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Hl7V2Store> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/hl7V2Stores').replace(
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
        createAPIRequest<Schema$Hl7V2Store>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * Deletes the specified HL7v2 store and removes all messages that it contains.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Exports the messages to a destination. To filter messages to be exported, define a filter using the start and end time, relative to the message generation time (MSH.7). This API returns an Operation that can be used to track the status of the job by calling GetOperation. Immediate fatal errors appear in the error field. Otherwise, when the operation finishes, a detailed response of type ExportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:export').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the specified HL7v2 store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2Store>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Hl7V2Store>,
      callback: BodyResponseCallback<Schema$Hl7V2Store>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
      callback: BodyResponseCallback<Schema$Hl7V2Store>
    ): void;
    get(callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Hl7V2Store> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Hl7V2Store>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * Gets metrics associated with the HL7v2 store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getHL7v2StoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getHL7v2StoreMetrics(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2StoreMetrics>;
    getHL7v2StoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getHL7v2StoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics,
      options: MethodOptions | BodyResponseCallback<Schema$Hl7V2StoreMetrics>,
      callback: BodyResponseCallback<Schema$Hl7V2StoreMetrics>
    ): void;
    getHL7v2StoreMetrics(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics,
      callback: BodyResponseCallback<Schema$Hl7V2StoreMetrics>
    ): void;
    getHL7v2StoreMetrics(
      callback: BodyResponseCallback<Schema$Hl7V2StoreMetrics>
    ): void;
    getHL7v2StoreMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics
        | BodyResponseCallback<Schema$Hl7V2StoreMetrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hl7V2StoreMetrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hl7V2StoreMetrics>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$Hl7V2StoreMetrics>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getHL7v2StoreMetrics').replace(
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
        createAPIRequest<Schema$Hl7V2StoreMetrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2StoreMetrics>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Import messages to the HL7v2 store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some HL7v2 store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty HL7v2 store that is not being used by other clients. An existing message will be overwritten if a duplicate message is imported. A duplicate message is a message with the same raw bytes as a message that already exists in this HL7v2 store. When a message is overwritten, its labels will also be overwritten. The import operation is idempotent unless the input data contains multiple valid messages with the same raw bytes but different labels. In that case, after the import completes, the store contains exactly one message with those raw bytes but there is no ordering guarantee on which version of the labels it has. The operation result counters do not count duplicated raw bytes as an error and count one success for each message in the input, which might result in a success count larger than the number of messages in the HL7v2 store. If some messages fail to import, for example due to parsing errors, successfully imported messages are not rolled back. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a response of type ImportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:import').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists the HL7v2 stores in the given dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHl7V2StoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHl7V2StoresResponse>,
      callback: BodyResponseCallback<Schema$ListHl7V2StoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
      callback: BodyResponseCallback<Schema$ListHl7V2StoresResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHl7V2StoresResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List
        | BodyResponseCallback<Schema$ListHl7V2StoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHl7V2StoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHl7V2StoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListHl7V2StoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/hl7V2Stores').replace(
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
        createAPIRequest<Schema$ListHl7V2StoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHl7V2StoresResponse>(parameters);
      }
    }

    /**
     * Updates the HL7v2 store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2Store>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Hl7V2Store>,
      callback: BodyResponseCallback<Schema$Hl7V2Store>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
      callback: BodyResponseCallback<Schema$Hl7V2Store>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Hl7V2Store>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Hl7V2Store> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Hl7V2Store>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create
    extends StandardParameters {
    /**
     * Required. The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L\}\p{N\}_\-\.]{1,256\}`.
     */
    hl7V2StoreId?: string;
    /**
     * Required. The name of the dataset this HL7v2 store belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hl7V2Store;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the HL7v2 store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Export
    extends StandardParameters {
    /**
     * Required. The name of the source HL7v2 store, in the format `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7v2Stores/{hl7v2_store_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportMessagesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the HL7v2 store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Gethl7v2storemetrics
    extends StandardParameters {
    /**
     * Required. The resource name of the HL7v2 store to get metrics for, in the format `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7V2Stores/{hl7v2_store_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Import
    extends StandardParameters {
    /**
     * Required. The name of the target HL7v2 store, in the format `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7v2Stores/{hl7v2_store_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportMessagesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List
    extends StandardParameters {
    /**
     * Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of HL7v2 stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the HL7v2 store, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7V2Stores/{hl7v2_store_id\}`.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Hl7V2Store;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Hl7v2stores$Messages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    create(callback: BodyResponseCallback<Schema$Message>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/messages').replace(
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
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * Deletes an HL7v2 message.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete
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
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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

    /**
     * Gets an HL7v2 message.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    get(callback: BodyResponseCallback<Schema$Message>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received. If the method is successful, it generates a response containing an HL7v2 acknowledgment (`ACK`) message. If the method encounters an error, it returns a negative acknowledgment (`NACK`) message. This behavior is suitable for replying to HL7v2 interface systems that expect these acknowledgments.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    ingest(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    ingest(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IngestMessageResponse>;
    ingest(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ingest(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IngestMessageResponse>,
      callback: BodyResponseCallback<Schema$IngestMessageResponse>
    ): void;
    ingest(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
      callback: BodyResponseCallback<Schema$IngestMessageResponse>
    ): void;
    ingest(callback: BodyResponseCallback<Schema$IngestMessageResponse>): void;
    ingest(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest
        | BodyResponseCallback<Schema$IngestMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IngestMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IngestMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$IngestMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/messages:ingest').replace(
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
        createAPIRequest<Schema$IngestMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IngestMessageResponse>(parameters);
      }
    }

    /**
     * Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMessagesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      callback: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
      callback: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMessagesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List
        | BodyResponseCallback<Schema$ListMessagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMessagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMessagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/messages').replace(
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
        createAPIRequest<Schema$ListMessagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMessagesResponse>(parameters);
      }
    }

    /**
     * Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time cannot be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Message>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create
    extends StandardParameters {
    /**
     * Required. The name of the HL7v2 store this message belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateMessageRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the HL7v2 message to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the HL7v2 message to retrieve.
     */
    name?: string;
    /**
     * Specifies which parts of the Message resource to return in the response. When unspecified, equivalent to FULL.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest
    extends StandardParameters {
    /**
     * Required. The name of the HL7v2 store this message belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IngestMessageRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List
    extends StandardParameters {
    /**
     * Restricts messages returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `\>`, `\>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
     */
    filter?: string;
    /**
     * Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order Fields available for ordering are: * `send_time`
     */
    orderBy?: string;
    /**
     * Limit on the number of messages to return in a single response. If not specified, 100 is used. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Name of the HL7v2 store to retrieve messages from.
     */
    parent?: string;
    /**
     * Specifies the parts of the Message to return in the response. When unspecified, equivalent to BASIC. Setting this to anything other than BASIC with a `page_size` larger than the default can generate a large response, which impacts the performance of this method.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the Message, of the form `projects/{project_id\}/locations/{location_id\}/datasets/{dataset_id\}/hl7V2Stores/{hl7_v2_store_id\}/messages/{message_id\}`. Assigned by the server.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }

  export class Resource$Projects$Locations$Datasets$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Datasets$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Datasets$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasets$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datasets$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasets$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datasets$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
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

  export class Resource$Projects$Locations$Services {
    context: APIRequestContext;
    nlp: Resource$Projects$Locations$Services$Nlp;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.nlp = new Resource$Projects$Locations$Services$Nlp(this.context);
    }
  }

  export class Resource$Projects$Locations$Services$Nlp {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Analyze heathcare entity in a document. Its response includes the recognized entity mentions and the relationships between them. AnalyzeEntities uses context aware models to detect entities.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeEntities(
      params: Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeEntities(
      params?: Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeEntitiesResponse>;
    analyzeEntities(
      params: Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeEntities(
      params: Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      params: Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities,
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzeEntitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+nlpService}:analyzeEntities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['nlpService'],
        pathParams: ['nlpService'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnalyzeEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeEntitiesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Services$Nlp$Analyzeentities
    extends StandardParameters {
    /**
     * The resource name of the service of the form: "projects/{project_id\}/locations/{location_id\}/services/nlp".
     */
    nlpService?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitiesRequest;
  }
}
