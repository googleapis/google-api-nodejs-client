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
   * const {google} = require('googleapis');
   * const healthcare = google.healthcare('v1');
   *
   * @namespace healthcare
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Healthcare
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
     * The condition that is associated with this binding.  If the condition evaluates to `true`, then this binding applies to the current request.  If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
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
     * Character to mask the sensitive values. If not supplied, defaults to &quot;*&quot;.
     */
    maskingCharacter?: string | null;
  }
  /**
   * Creates a new message.
   */
  export interface Schema$CreateMessageRequest {
    /**
     * HL7v2 message.
     */
    message?: Schema$Message;
  }
  /**
   * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).
   */
  export interface Schema$CryptoHashConfig {
    /**
     * An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used wherever crypto_key is not specified.
     */
    cryptoKey?: string | null;
  }
  /**
   * A message representing a health dataset.  A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
   */
  export interface Schema$Dataset {
    /**
     * Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string | null;
    /**
     * The default timezone used by this dataset. Must be a either a valid IANA time zone name such as &quot;America/New_York&quot; or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified.
     */
    timeZone?: string | null;
  }
  /**
   * Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
   */
  export interface Schema$DateShiftConfig {
    /**
     * An AES 128/192/256 bit key. Causes the shift to be computed based on this key and the patient ID. A default key is generated for each Deidentify operation and is used wherever crypto_key is not specified.
     */
    cryptoKey?: string | null;
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
  }
  /**
   * Redacts identifying information from the specified dataset.
   */
  export interface Schema$DeidentifyDatasetRequest {
    /**
     * Deidentify configuration.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * The name of the dataset resource to create and write the redacted data to.   * The destination dataset must not exist.  * The destination dataset must be in the same project and location as the  source dataset. De-identifying data across multiple projects or locations  is not supported.
     */
    destinationDataset?: string | null;
  }
  /**
   * Creates a new DICOM store with sensitive information de-identified.
   */
  export interface Schema$DeidentifyDicomStoreRequest {
    /**
     * De-identify configuration.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.   * The destination dataset must exist.  * The source dataset and destination dataset must both reside in the same    project. De-identifying data across multiple projects is not supported.  * The destination DICOM store must not exist.  * The caller must have the necessary permissions to create the destination    DICOM store.
     */
    destinationStore?: string | null;
    /**
     * Filter configuration.
     */
    filterConfig?: Schema$DicomFilterConfig;
  }
  /**
   * Creates a new FHIR store with sensitive information de-identified.
   */
  export interface Schema$DeidentifyFhirStoreRequest {
    /**
     * Deidentify configuration.
     */
    config?: Schema$DeidentifyConfig;
    /**
     * The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.   * The destination dataset must exist.  * The source dataset and destination dataset must both reside in the same    project. De-identifying data across multiple projects is not supported.  * The destination FHIR store must exist.  * The caller must have the healthcare.fhirResources.update permission to    write to the destination FHIR store.
     */
    destinationStore?: string | null;
    /**
     * A filter specifying the resources to include in the output. If not specified, all resources are included in the output.
     */
    resourceFilter?: Schema$FhirFilter;
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
     * If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard&#39;s reasoning: &quot;Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual&#39;s identity.&quot; http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html
     */
    skipIdRedaction?: boolean | null;
  }
  /**
   * Specifies the filter configuration for DICOM resources.
   */
  export interface Schema$DicomFilterConfig {
    /**
     * The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (x/ or \rx/). Each resource path must be in the format &quot;/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]&quot;  The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location.
     */
    resourcePathsGcsUri?: string | null;
  }
  /**
   * Represents a DICOM store.
   */
  export interface Schema$DicomStore {
    /**
     * User-supplied key-value pairs used to organize DICOM stores.  Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    name?: string | null;
    /**
     * Notification destination for new DICOM instances. Supplied by the client.
     */
    notificationConfig?: Schema$NotificationConfig;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted.
   */
  export interface Schema$ExportDicomDataRequest {
    /**
     * The BigQuery output destination.  You can only export to a BigQuery dataset that&#39;s in the same project as the DICOM store you&#39;re exporting from.  The BigQuery location requires two IAM roles: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1DicomBigQueryDestination;
    /**
     * The Cloud Storage output destination.  The Cloud Storage location requires the `roles/storage.objectAdmin` Cloud IAM role.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1DicomGcsDestination;
  }
  /**
   * Returns additional information in regards to a completed DICOM store export.
   */
  export interface Schema$ExportDicomDataResponse {}
  /**
   * Request to export resources.
   */
  export interface Schema$ExportResourcesRequest {
    /**
     * The BigQuery output destination.  The BigQuery location requires two IAM roles: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.  The output is one BigQuery table per resource type.
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1FhirBigQueryDestination;
    /**
     * The Cloud Storage output destination.  The Cloud Storage location requires the `roles/storage.objectAdmin` Cloud IAM role.  The exported outputs are organized by FHIR resource types. The server creates one object per resource type. Each object contains newline delimited JSON, and each line is a FHIR resource.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1FhirGcsDestination;
  }
  /**
   * Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.
   */
  export interface Schema$ExportResourcesResponse {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.  Example (Comparison):      title: &quot;Summary size limit&quot;     description: &quot;Determines if a summary is less than 100 chars&quot;     expression: &quot;document.summary.size() &lt; 100&quot;  Example (Equality):      title: &quot;Requestor is owner&quot;     description: &quot;Determines if requestor is the document owner&quot;     expression: &quot;document.owner == request.auth.claims.email&quot;  Example (Logic):      title: &quot;Public documents&quot;     description: &quot;Determine whether the document should be publicly visible&quot;     expression: &quot;document.type != &#39;private&#39; &amp;&amp; document.type != &#39;internal&#39;&quot;  Example (Data Manipulation):      title: &quot;Notification string&quot;     description: &quot;Create a notification string with a timestamp.&quot;     expression: &quot;&#39;New message received at &#39; + string(document.create_time)&quot;  The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
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
   * Specifies how to handle de-identification of a FHIR store.
   */
  export interface Schema$FhirConfig {
    /**
     * Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions are removed in the output.
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
   * Represents a FHIR store.
   */
  export interface Schema$FhirStore {
    /**
     * Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.
     */
    disableReferentialIntegrity?: boolean | null;
    /**
     * Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions.
     */
    disableResourceVersioning?: boolean | null;
    /**
     * Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. Please treat the audit logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient identifiers, those IDs are part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub notifications.
     */
    enableUpdateCreate?: boolean | null;
    /**
     * User-supplied key-value pairs used to organize FHIR stores.  Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    name?: string | null;
    /**
     * If non-empty, publish all resource modifications of this FHIR store to this destination. The Cloud Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, &quot;action&quot;:&quot;CreateResource&quot;.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project&#39;s **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.
     */
    streamConfigs?: Schema$StreamConfig[];
    /**
     * The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version.
     */
    version?: string | null;
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
     * List of paths to FHIR fields to be redacted. Each path is a period-separated list where each component is either a field name or FHIR type name, for example: Patient, HumanName. For &quot;choice&quot; types (those defined in the FHIR spec with the form: field[x]) we use two separate components. For example, &quot;deceasedAge.unit&quot; is matched by &quot;Deceased.Age.unit&quot;. Supported types are: AdministrativeGenderCode, Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml. Base64Binary is also supported, but may only be kept as-is or have all the content removed.
     */
    paths?: string[] | null;
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
     * If the destination table already exists and this flag is `TRUE`, the table is overwritten by the contents of the DICOM store. If the flag is not set and the destination table already exists, the export call returns an error.
     */
    force?: boolean | null;
    /**
     * BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId`
     */
    tableUri?: string | null;
  }
  /**
   * The Cloud Storage location where the server writes the output and the export configuration.
   */
  export interface Schema$GoogleCloudHealthcareV1DicomGcsDestination {
    /**
     * MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component exists only for multi-frame instances.  Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported:    - application/dicom; transfer-syntax=1.2.840.10008.1.2.1     (uncompressed DICOM)   - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50     (DICOM with embedded JPEG Baseline)   - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90     (DICOM with embedded JPEG 2000 Lossless Only)   - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91     (DICOM with embedded JPEG 2000)   - application/dicom; transfer-syntax=*     (DICOM with no transcoding)   - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1     (raw uncompressed PixelData)   - application/octet-stream; transfer-syntax=*     (raw PixelData in whatever format it was uploaded in)   - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50     (Consumer JPEG)   - image/png  The following extensions are used for output files:   - application/dicom -&gt; .dcm  - image/jpeg -&gt; .jpg  - image/png -&gt; .png  - application/octet-stream -&gt; no extension  If unspecified, the instances are exported in the original DICOM format they were uploaded in.
     */
    mimeType?: string | null;
    /**
     * The Cloud Storage destination to export to.  URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1DicomGcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards:  &#39;*&#39; to match 0 or more non-separator characters  &#39;**&#39; to match 0 or more characters (including separators). Must be used at       the end of a path and with no other wildcards in the       path. Can also be used with a file extension (such as .dcm), which       imports all files with the extension in the specified directory and       its sub-directories. For example,       `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm       extensions in `my-directory/` and its sub-directories.  &#39;?&#39; to match 1 character All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * The configuration for exporting to BigQuery.
   */
  export interface Schema$GoogleCloudHealthcareV1FhirBigQueryDestination {
    /**
     * BigQuery URI to a dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`
     */
    datasetUri?: string | null;
    /**
     * If this flag is `TRUE`, all tables are deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error.
     */
    force?: boolean | null;
    /**
     * The configuration for the exported BigQuery schema.
     */
    schemaConfig?: Schema$SchemaConfig;
  }
  /**
   * The configuration for exporting to Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1FhirGcsDestination {
    /**
     * URI for a Cloud Storage directory where result files should be written, in the format of `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1FhirGcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) to import.  The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards:  *  `*` to match 0 or more non-separator characters *  `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. *  `?` to match 1 character  Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * Specifies where and whether to send notifications upon changes to a data store.
   */
  export interface Schema$Hl7V2NotificationConfig {
    /**
     * Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings  The following fields and functions are available for filtering:  *  `message_type`, from the MSH-9.1 field. For example, `NOT message_type = &quot;ADT&quot;`. *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset&#39;s time_zone, from the MSH-7 segment. For example, `send_date &lt; &quot;2017-01-02&quot;`. *  `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time &lt; &quot;2017-01-02T00:00:00-05:00&quot;`. *  `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = &quot;ABC&quot;`. *  `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId(&quot;123456&quot;, &quot;MRN&quot;)`. *  `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels.&quot;priority&quot;=&quot;high&quot;`. The operator `:*` can be used to assert the existence of a label. For example, `labels.&quot;priority&quot;:*`.
     */
    filter?: string | null;
    /**
     * The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client.  The notification is a `PubsubMessage` with the following fields:  *  `PubsubMessage.Data` contains the resource name. *  `PubsubMessage.MessageId` is the ID of this notification. It&#39;s    guaranteed to be unique within the topic. *  `PubsubMessage.PublishTime` is the time when the message was    published.  Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project.  The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail.  If a notification cannot be published to Cloud Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](/healthcare/docs/how-tos/logging)).
     */
    pubsubTopic?: string | null;
  }
  /**
   * Represents an HL7v2 store.
   */
  export interface Schema$Hl7V2Store {
    /**
     * User-supplied key-value pairs used to organize HL7v2 stores.  Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     */
    name?: string | null;
    /**
     * A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest &amp; Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client.
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
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can&#39;t be represented as JSON, such as raw binary or an HTML page.   This message can be used both in streaming and non-streaming API methods in the request as well as the response.  It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.  Example:      message GetResourceRequest {       // A unique request id.       string request_id = 1;        // The raw HTTP body is bound to this field.       google.api.HttpBody http_body = 2;     }      service ResourceService {       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc UpdateResource(google.api.HttpBody) returns       (google.protobuf.Empty);     }  Example with streaming methods:      service CaldavService {       rpc GetCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);     }  Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
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
     * Cloud Storage source data location and import configuration.  The Cloud Storage location requires the `roles/storage.objectViewer` Cloud IAM role.
     */
    gcsSource?: Schema$GoogleCloudHealthcareV1DicomGcsSource;
  }
  /**
   * Returns additional information in regards to a completed DICOM store import.
   */
  export interface Schema$ImportDicomDataResponse {}
  /**
   * Request to import resources.
   */
  export interface Schema$ImportResourcesRequest {
    /**
     * The content structure in the source location. If not specified, the server treats the input source files as BUNDLE.
     */
    contentStructure?: string | null;
    /**
     * Cloud Storage source data location and import configuration.  The Cloud Storage location requires the `roles/storage.objectViewer` Cloud IAM role.  Each Cloud Storage object should be a text file that contains the format specified in ContentStructure.
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
     * HL7v2 message to ingest.
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
     * The returned DICOM stores. Won&#39;t be more DICOM stores than the value of page_size in the request.
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
     * The returned FHIR stores. Won&#39;t be more FHIR stores than the value of page_size in the request.
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
     * The returned HL7v2 stores. Won&#39;t be more HL7v2 stores than the value of page_size in the request.
     */
    hl7V2Stores?: Schema$Hl7V2Store[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Lists the messages in the specified HL7v2 store.
   */
  export interface Schema$ListMessagesResponse {
    /**
     * The returned Messages. Won&#39;t be more Messages than the value of page_size in the request. See view for populated fields.
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
  /**
   * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
   */
  export interface Schema$Message {
    /**
     * Output only. The datetime when the message was created. Set by the server.
     */
    createTime?: string | null;
    /**
     * Raw message bytes.
     */
    data?: string | null;
    /**
     * User-supplied key-value pairs used to organize HL7v2 stores.  Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The message type for this message. MSH-9.1.
     */
    messageType?: string | null;
    /**
     * Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
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
     * The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Cloud Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail.  If a notification can&#39;t be published to Cloud Pub/Sub, errors are logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren&#39;t submitted.
     */
    pubsubTopic?: string | null;
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * OperationMetadata provides information about the operation execution. Returned in the long-running operation&#39;s metadata field.
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
     * A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing logs](/healthcare/docs/how-tos/logging).
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
     * Byte(s) to use as the segment terminator. If this is unset, &#39;\r&#39; is used as segment terminator.
     */
    segmentTerminator?: string | null;
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
     * The patient&#39;s unique identifier.
     */
    value?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [             &quot;user:eve@example.com&quot;           ],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * ProgressCounter provides counters to describe an operation&#39;s progress.
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
   * Define how to redact sensitive values. Default behaviour is erase. For example, &quot;My name is Jane.&quot; becomes &quot;My name is .&quot;
   */
  export interface Schema$RedactConfig {}
  /**
   * When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, &quot;My name is Jane&quot; becomes &quot;My name is [PERSON_NAME].&quot; The TRANSFORM action is equivalent to redacting.
   */
  export interface Schema$ReplaceWithInfoTypeConfig {}
  /**
   * A list of FHIR resources.
   */
  export interface Schema$Resources {
    /**
     * List of resources IDs. For example, &quot;Patient/1234&quot;.
     */
    resources?: string[] | null;
  }
  /**
   * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
   */
  export interface Schema$SchemaConfig {
    /**
     * The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5.
     */
    recursiveStructureDepth?: string | null;
    /**
     * Specifies the output schema type.
     */
    schemaType?: string | null;
  }
  /**
   * Request to search the resources in the specified FHIR store.
   */
  export interface Schema$SearchResourcesRequest {
    /**
     * The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
     */
    resourceType?: string | null;
  }
  /**
   * A segment in a structured format.
   */
  export interface Schema$Segment {
    /**
     * A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)?  Examples of (key, value) pairs:  * (0.1, &quot;hemoglobin&quot;) denotes that the first component of Field 0 has the   value &quot;hemoglobin&quot;.  * (1.1.2, &quot;CBC&quot;) denotes that the second sub-component of the first   component of Field 1 has the value &quot;CBC&quot;.  * (1[0].1, &quot;HbA1c&quot;) denotes that the first component of the   first Instance of Field 1, which is repeated, has the value &quot;HbA1c&quot;.
     */
    fields?: {[key: string]: string} | null;
    /**
     * A string that indicates the type of segment. For example, EVN or PID.
     */
    segmentId?: string | null;
    /**
     * Set ID for segments that can be in a set. This can be empty if it&#39;s missing or isn&#39;t applicable.
     */
    setId?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:  `paths: &quot;bindings, etag&quot;`
     */
    updateMask?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
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
     * The destination BigQuery structure that contains both the dataset location and corresponding schema config.  The output is organized in one table per resource type. The server reuses the existing tables (if any) that are named after the resource types. For example, &quot;Patient&quot;, &quot;Observation&quot;. When there is no existing table for a given resource type, the server attempts to create one.  When a table schema doesn&#39;t align with the schema config, either because of existing incompatible schema or out of band incompatible modification, the server does not stream in new data.  BigQuery imposes a 1 MB limit on streaming insert row size, therefore any resource mutation that generates more than 1 MB of BigQuery data is not streamed.  One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation.  Results are appended to the corresponding BigQuery tables. Different versions of the same resource are distinguishable by the meta.versionId and meta.lastUpdated columns. The operation (CREATE/UPDATE/DELETE) that results in the new version is recorded in the meta.tag.  The tables contain all historical resource versions since streaming was enabled. For query convenience, the server also creates one view per table of the same name containing only the current resource version.  The streamed data in the BigQuery dataset is not guaranteed to be completely unique. The combination of the id and meta.versionId columns should ideally identify a single unique row. But in rare cases, duplicates may exist. At query time, users may use the SQL select statement to keep only one of the duplicate rows given an id and meta.versionId pair. Alternatively, the server created view mentioned above also filters out duplicates.  If a resource mutation cannot be streamed to BigQuery, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](/healthcare/docs/how-tos/logging)).
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1FhirBigQueryDestination;
    /**
     * Supply a FHIR resource type (such as &quot;Patient&quot; or &quot;Observation&quot;). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store.
     */
    resourceTypes?: string[] | null;
  }
  /**
   * List of tags to be filtered.
   */
  export interface Schema$TagFilterList {
    /**
     * Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by &quot;Keyword&quot; or &quot;Tag&quot;. For example &quot;PatientID&quot;, &quot;00100010&quot;.
     */
    tags?: string[] | null;
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
  export interface Schema$TextConfig {
    /**
     * The transformations to apply to the detected data.
     */
    transformations?: Schema$InfoTypeTransformation[];
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
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasets = new Resource$Projects$Locations$Datasets(this.context);
    }
  }

  export class Resource$Projects$Locations$Datasets {
    context: APIRequestContext;
    dicomStores: Resource$Projects$Locations$Datasets$Dicomstores;
    fhirStores: Resource$Projects$Locations$Datasets$Fhirstores;
    hl7V2Stores: Resource$Projects$Locations$Datasets$Hl7v2stores;
    operations: Resource$Projects$Locations$Datasets$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
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
     * healthcare.projects.locations.datasets.create
     * @desc Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata. A Google Cloud Platform project can contain up to 500 datasets across all regions.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.create({
     *     // The ID of the dataset that is being created.
     *     // The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     *     datasetId: 'placeholder-value',
     *     // The name of the project where the server creates the dataset. For
     *     // example, `projects/{project_id}/locations/{location_id}`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "timeZone": "my_timeZone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.datasetId The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the project where the server creates the dataset. For example, `projects/{project_id}/locations/{location_id}`.
     * @param {().Dataset} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.deidentify
     * @desc Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The new de-identified dataset will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging. For more information, see [Viewing logs](/healthcare/docs/how-tos/logging).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.deidentify({
     *     // Source dataset resource name. For example,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     *     sourceDataset:
     *       'projects/my-project/locations/my-location/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "destinationDataset": "my_destinationDataset"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.deidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sourceDataset Source dataset resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     * @param {().DeidentifyDatasetRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.delete
     * @desc Deletes the specified health dataset and all data contained in the dataset. Deleting a dataset does not affect the sources from which the dataset was imported (if any).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.delete({
     *     // The name of the dataset to delete. For example,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',
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
     * @alias healthcare.projects.locations.datasets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the dataset to delete. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.get
     * @desc Gets any metadata associated with a dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.get({
     *     // The name of the dataset to read. For example,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "timeZone": "my_timeZone"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the dataset to read. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.getIamPolicy({
     *     // Optional. The policy format version to be returned.
     *     //
     *     // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
     *     // rejected.
     *     //
     *     // Requests for policies with any conditional bindings must specify version 3.
     *     // Policies without any conditional bindings may specify any valid value or
     *     // leave the field unset.
     *     //
     *     // To learn which resources support conditions in their IAM policies, see the
     *     // [IAM
     *     // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.list
     * @desc Lists the health datasets in the current project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.list({
     *     // The maximum number of items to return. Capped to 100 if not specified.
     *     // May not be larger than 1000.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The name of the project whose datasets should be listed.
     *     // For example, `projects/{project_id}/locations/{location_id}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "datasets": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Capped to 100 if not specified. May not be larger than 1000.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent The name of the project whose datasets should be listed. For example, `projects/{project_id}/locations/{location_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDatasetsResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.patch
     * @desc Updates dataset metadata.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.patch({
     *     // Resource name of the dataset, of the form
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *     // The update mask applies to the resource. For the `FieldMask` definition,
     *     // see
     *     // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "timeZone": "my_timeZone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "timeZone": "my_timeZone"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().Dataset} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Testiampermissions;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Create
    extends StandardParameters {
    /**
     * The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     */
    datasetId?: string;
    /**
     * The name of the project where the server creates the dataset. For example, `projects/{project_id}/locations/{location_id}`.
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
     * Source dataset resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
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
     * The name of the dataset to delete. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Get
    extends StandardParameters {
    /**
     * The name of the dataset to read. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$List
    extends StandardParameters {
    /**
     * The maximum number of items to return. Capped to 100 if not specified. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the project whose datasets should be listed. For example, `projects/{project_id}/locations/{location_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Patch
    extends StandardParameters {
    /**
     * Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
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
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores {
    context: APIRequestContext;
    studies: Resource$Projects$Locations$Datasets$Dicomstores$Studies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.studies = new Resource$Projects$Locations$Datasets$Dicomstores$Studies(
        this.context
      );
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.create
     * @desc Creates a new DICOM store within the parent dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.create({
     *     // The ID of the DICOM store that is being created.
     *     // Any string value up to 256 characters in length.
     *     dicomStoreId: 'placeholder-value',
     *     // The name of the dataset this DICOM store belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notificationConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dicomStoreId The ID of the DICOM store that is being created. Any string value up to 256 characters in length.
     * @param {string} params.parent The name of the dataset this DICOM store belongs to.
     * @param {().DicomStore} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Create;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.deidentify
     * @desc De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyDicomStoreSummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The output DICOM store will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.deidentify(
     *     {
     *       // Source DICOM store resource name. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       sourceStore:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "config": {},
     *         //   "destinationStore": "my_destinationStore",
     *         //   "filterConfig": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.deidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sourceStore Source DICOM store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {().DeidentifyDicomStoreRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Deidentify;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.delete
     * @desc Deletes the specified DICOM store and removes all images that are contained within it.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.delete({
     *     // The resource name of the DICOM store to delete.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
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
     * @alias healthcare.projects.locations.datasets.dicomStores.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the DICOM store to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.export
     * @desc Exports data to the specified destination by copying it from the DICOM store. Errors are also logged to Cloud Logging. For more information, see [Viewing logs](/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.export({
     *     // The DICOM store resource name from which to export the data. For
     *     // example,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bigqueryDestination": {},
     *       //   "gcsDestination": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The DICOM store resource name from which to export the data. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {().ExportDicomDataRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Export;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.get
     * @desc Gets the specified DICOM store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.get({
     *     // The resource name of the DICOM store to get.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the DICOM store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Get;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.getIamPolicy(
     *     {
     *       // Optional. The policy format version to be returned.
     *       //
     *       // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
     *       // rejected.
     *       //
     *       // Requests for policies with any conditional bindings must specify version 3.
     *       // Policies without any conditional bindings may specify any valid value or
     *       // leave the field unset.
     *       //
     *       // To learn which resources support conditions in their IAM policies, see the
     *       // [IAM
     *       // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.import
     * @desc Imports data into the DICOM store by copying it from the specified source. Errors are logged to Cloud Logging. For more information, see [Viewing logs](/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.import({
     *     // The name of the DICOM store resource into which the data is imported.
     *     // For example,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "gcsSource": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the DICOM store resource into which the data is imported. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {().ImportDicomDataRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Import;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.list
     * @desc Lists the DICOM stores in the given dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.list({
     *     // Restricts stores returned to those matching a filter. Syntax:
     *     // https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     *     // Only filtering on labels is supported. For example, `labels.key=value`.
     *     filter: 'placeholder-value',
     *     // Limit on the number of DICOM stores to return in a single response.
     *     // If zero the default page size of 100 is used.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from the previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Name of the dataset.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dicomStores": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported. For example, `labels.key=value`.
     * @param {integer=} params.pageSize Limit on the number of DICOM stores to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$List;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDicomStoresResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.patch
     * @desc Updates the specified DICOM store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.patch({
     *     // Resource name of the DICOM store, of the form
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     // The update mask applies to the resource. For the `FieldMask` definition,
     *     // see
     *     // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notificationConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().DicomStore} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.searchForInstances
     * @desc SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.searchForInstances(
     *     {
     *       // The path of the SearchForInstancesRequest DICOMweb request. For example,
     *       // `instances`, `series/{series_uid}/instances`, or
     *       // `studies/{study_uid}/instances`.
     *       dicomWebPath: 'instances',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.searchForInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid}/instances`, or `studies/{study_uid}/instances`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.searchForSeries
     * @desc SearchForSeries returns a list of matching series. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.searchForSeries(
     *     {
     *       // The path of the SearchForSeries DICOMweb request. For example, `series` or
     *       // `studies/{study_uid}/series`.
     *       dicomWebPath: 'series',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.searchForSeries
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForSeries DICOMweb request. For example, `series` or `studies/{study_uid}/series`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.searchForStudies
     * @desc SearchForStudies returns a list of matching studies. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.searchForStudies(
     *     {
     *       // The path of the SearchForStudies DICOMweb request. For example, `studies`.
     *       dicomWebPath: 'studies',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.searchForStudies
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForStudies DICOMweb request. For example, `studies`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.storeInstances
     * @desc StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.storeInstances(
     *     {
     *       // The path of the StoreInstances DICOMweb request. For example,
     *       // `studies/[{study_uid}]`. Note that the `study_uid` is optional.
     *       dicomWebPath: 'studies',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contentType": "my_contentType",
     *         //   "data": "my_data",
     *         //   "extensions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.storeInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {().HttpBody} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Create
    extends StandardParameters {
    /**
     * The ID of the DICOM store that is being created. Any string value up to 256 characters in length.
     */
    dicomStoreId?: string;
    /**
     * The name of the dataset this DICOM store belongs to.
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
     * Source DICOM store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
     * The resource name of the DICOM store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Export
    extends StandardParameters {
    /**
     * The DICOM store resource name from which to export the data. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
     * The resource name of the DICOM store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Import
    extends StandardParameters {
    /**
     * The name of the DICOM store resource into which the data is imported. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
     * Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported. For example, `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of DICOM stores to return in a single response. If zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch
    extends StandardParameters {
    /**
     * Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
     * The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid}/instances`, or `studies/{study_uid}/instances`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries
    extends StandardParameters {
    /**
     * The path of the SearchForSeries DICOMweb request. For example, `series` or `studies/{study_uid}/series`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies
    extends StandardParameters {
    /**
     * The path of the SearchForStudies DICOMweb request. For example, `studies`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
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
     * The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies {
    context: APIRequestContext;
    series: Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.series = new Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series(
        this.context
      );
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.delete
     * @desc DeleteStudy deletes all instances within the given study. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. The method returns an Operation which will be marked successful when the deletion is complete.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.delete(
     *     {
     *       // The path of the DeleteStudy request. For example, `studies/{study_uid}`.
     *       dicomWebPath: 'studies/my-studie',
     *
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DeleteStudy request. For example, `studies/{study_uid}`.
     * @param {string} params.parent
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.retrieveMetadata
     * @desc RetrieveStudyMetadata returns instance associated with the given study presented as metadata with the bulk data removed. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.retrieveMetadata(
     *     {
     *       // The path of the RetrieveStudyMetadata DICOMweb request. For example,
     *       // `studies/{study_uid}/metadata`.
     *       dicomWebPath: 'studies/my-studie/metadata',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.retrieveMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveStudyMetadata DICOMweb request. For example, `studies/{study_uid}/metadata`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy
     * @desc RetrieveStudy returns all instances within the given study. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy(
     *     {
     *       // The path of the RetrieveStudy DICOMweb request. For example,
     *       // `studies/{study_uid}`.
     *       dicomWebPath: 'studies/my-studie',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveStudy DICOMweb request. For example, `studies/{study_uid}`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.searchForInstances
     * @desc SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.searchForInstances(
     *     {
     *       // The path of the SearchForInstancesRequest DICOMweb request. For example,
     *       // `instances`, `series/{series_uid}/instances`, or
     *       // `studies/{study_uid}/instances`.
     *       dicomWebPath: 'studies/my-studie/instances',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.searchForInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid}/instances`, or `studies/{study_uid}/instances`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.searchForSeries
     * @desc SearchForSeries returns a list of matching series. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.searchForSeries(
     *     {
     *       // The path of the SearchForSeries DICOMweb request. For example, `series` or
     *       // `studies/{study_uid}/series`.
     *       dicomWebPath: 'studies/my-studie/series',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.searchForSeries
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForSeries DICOMweb request. For example, `series` or `studies/{study_uid}/series`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.storeInstances
     * @desc StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.storeInstances(
     *     {
     *       // The path of the StoreInstances DICOMweb request. For example,
     *       // `studies/[{study_uid}]`. Note that the `study_uid` is optional.
     *       dicomWebPath: 'studies/my-studie',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contentType": "my_contentType",
     *         //   "data": "my_data",
     *         //   "extensions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.storeInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {().HttpBody} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete
    extends StandardParameters {
    /**
     * The path of the DeleteStudy request. For example, `studies/{study_uid}`.
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
     * The path of the RetrieveStudyMetadata DICOMweb request. For example, `studies/{study_uid}/metadata`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy
    extends StandardParameters {
    /**
     * The path of the RetrieveStudy DICOMweb request. For example, `studies/{study_uid}`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances
    extends StandardParameters {
    /**
     * The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid}/instances`, or `studies/{study_uid}/instances`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries
    extends StandardParameters {
    /**
     * The path of the SearchForSeries DICOMweb request. For example, `series` or `studies/{study_uid}/series`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances
    extends StandardParameters {
    /**
     * The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
      this.instances = new Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances(
        this.context
      );
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.delete
     * @desc DeleteSeries deletes all instances within the given study and series. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. The method returns an Operation which will be marked successful when the deletion is complete.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.delete(
     *     {
     *       // The path of the DeleteSeries request. For example,
     *       // `studies/{study_uid}/series/{series_uid}`.
     *       dicomWebPath: 'studies/my-studie/series/my-serie',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DeleteSeries request. For example, `studies/{study_uid}/series/{series_uid}`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata
     * @desc RetrieveSeriesMetadata returns instance associated with the given study and series, presented as metadata with the bulk data removed. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata(
     *     {
     *       // The path of the RetrieveSeriesMetadata DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/metadata`.
     *       dicomWebPath: 'studies/my-studie/series/my-serie/metadata',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveSeriesMetadata DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/metadata`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveSeries
     * @desc RetrieveSeries returns all instances within the given study and series. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveSeries(
     *     {
     *       // The path of the RetrieveSeries DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}`.
     *       dicomWebPath: 'studies/my-studie/series/my-serie',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveSeries
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveSeries DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.searchForInstances
     * @desc SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.searchForInstances(
     *     {
     *       // The path of the SearchForInstancesRequest DICOMweb request. For example,
     *       // `instances`, `series/{series_uid}/instances`, or
     *       // `studies/{study_uid}/instances`.
     *       dicomWebPath: 'studies/my-studie/series/my-serie/instances',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.searchForInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid}/instances`, or `studies/{study_uid}/instances`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete
    extends StandardParameters {
    /**
     * The path of the DeleteSeries request. For example, `studies/{study_uid}/series/{series_uid}`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata
    extends StandardParameters {
    /**
     * The path of the RetrieveSeriesMetadata DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/metadata`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries
    extends StandardParameters {
    /**
     * The path of the RetrieveSeries DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances
    extends StandardParameters {
    /**
     * The path of the SearchForInstancesRequest DICOMweb request. For example, `instances`, `series/{series_uid}/instances`, or `studies/{study_uid}/instances`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances {
    context: APIRequestContext;
    frames: Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.frames = new Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames(
        this.context
      );
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete
     * @desc DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. Study and series search results can take a few seconds to be updated after an instance is deleted using DeleteInstance.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete(
     *     {
     *       // The path of the DeleteInstance request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
     *       dicomWebPath: 'studies/my-studie/series/my-serie/instances/my-instance',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
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
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DeleteInstance request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance
     * @desc RetrieveInstance returns instance associated with the given study, series, and SOP Instance UID. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance(
     *     {
     *       // The path of the RetrieveInstance DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
     *       dicomWebPath: 'studies/my-studie/series/my-serie/instances/my-instance',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveInstance DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata
     * @desc RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata with the bulk data removed. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata(
     *     {
     *       // The path of the RetrieveInstanceMetadata DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/metadata`.
     *       dicomWebPath:
     *         'studies/my-studie/series/my-serie/instances/my-instance/metadata',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveInstanceMetadata DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/metadata`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered
     * @desc RetrieveRenderedInstance returns instance associated with the given study, series, and SOP Instance UID in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered(
     *     {
     *       // The path of the RetrieveRenderedInstance DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/rendered`.
     *       dicomWebPath:
     *         'studies/my-studie/series/my-serie/instances/my-instance/rendered',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveRenderedInstance DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/rendered`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete
    extends StandardParameters {
    /**
     * The path of the DeleteInstance request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance
    extends StandardParameters {
    /**
     * The path of the RetrieveInstance DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata
    extends StandardParameters {
    /**
     * The path of the RetrieveInstanceMetadata DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/metadata`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered
    extends StandardParameters {
    /**
     * The path of the RetrieveRenderedInstance DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/rendered`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames
     * @desc RetrieveFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4}.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames(
     *     {
     *       // The path of the RetrieveFrames DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}`.
     *       dicomWebPath:
     *         'studies/my-studie/series/my-serie/instances/my-instance/frames/my-frame',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered
     * @desc RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered(
     *     {
     *       // The path of the RetrieveRenderedFrames DICOMweb request. For example,
     *       // `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.
     *       dicomWebPath:
     *         'studies/my-studie/series/my-serie/instances/my-instance/frames/my-frame/rendered',
     *       // The name of the DICOM store that is being accessed. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicomStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.
     * @param {string} params.parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes
    extends StandardParameters {
    /**
     * The path of the RetrieveFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered
    extends StandardParameters {
    /**
     * The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
     * healthcare.projects.locations.datasets.fhirStores.create
     * @desc Creates a new FHIR store within the parent dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.create({
     *     // The ID of the FHIR store that is being created.
     *     // The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     *     fhirStoreId: 'placeholder-value',
     *     // The name of the dataset this FHIR store belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableReferentialIntegrity": false,
     *       //   "disableResourceVersioning": false,
     *       //   "enableUpdateCreate": false,
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notificationConfig": {},
     *       //   "streamConfigs": [],
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableReferentialIntegrity": false,
     *   //   "disableResourceVersioning": false,
     *   //   "enableUpdateCreate": false,
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {},
     *   //   "streamConfigs": [],
     *   //   "version": "my_version"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fhirStoreId The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the dataset this FHIR store belongs to.
     * @param {().FhirStore} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Create;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.deidentify
     * @desc De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. If errors occur, error is set. Error details are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.deidentify(
     *     {
     *       // Source FHIR store resource name. For example,
     *       // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *       sourceStore:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "config": {},
     *         //   "destinationStore": "my_destinationStore",
     *         //   "resourceFilter": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.deidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sourceStore Source FHIR store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {().DeidentifyFhirStoreRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Deidentify;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.delete
     * @desc Deletes the specified FHIR store and removes all resources within it.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.delete({
     *     // The resource name of the FHIR store to delete.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
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
     * @alias healthcare.projects.locations.datasets.fhirStores.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the FHIR store to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.export
     * @desc Export resources from the FHIR store to the specified destination.  This method returns an Operation that can be used to track the status of the export by calling GetOperation.  Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ExportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.export({
     *     // The name of the FHIR store to export resource from, in the format of
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bigqueryDestination": {},
     *       //   "gcsDestination": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the FHIR store to export resource from, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {().ExportResourcesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Export;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.get
     * @desc Gets the configuration of the specified FHIR store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.get({
     *     // The resource name of the FHIR store to get.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableReferentialIntegrity": false,
     *   //   "disableResourceVersioning": false,
     *   //   "enableUpdateCreate": false,
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {},
     *   //   "streamConfigs": [],
     *   //   "version": "my_version"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the FHIR store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Get;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.getIamPolicy(
     *     {
     *       // Optional. The policy format version to be returned.
     *       //
     *       // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
     *       // rejected.
     *       //
     *       // Requests for policies with any conditional bindings must specify version 3.
     *       // Policies without any conditional bindings may specify any valid value or
     *       // leave the field unset.
     *       //
     *       // To learn which resources support conditions in their IAM policies, see the
     *       // [IAM
     *       // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.import
     * @desc Imports resources to the FHIR store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some FHIR store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty FHIR store that is not being used by other clients. In cases where this method is not appropriate, consider using ExecuteBundle to load data.  Every resource in the input must contain a client-supplied ID. Each resource is stored using the supplied ID regardless of the enable_update_create setting on the FHIR store.  The import process does not enforce referential integrity, regardless of the disable_referential_integrity setting on the FHIR store. This allows the import of resources with arbitrary interdependencies without considering grouping or ordering, but if the input data contains invalid references or if some resources fail to be imported, the FHIR store might be left in a state that violates referential integrity.  The import process does not trigger Pub/Sub notification or BigQuery streaming update, regardless of how those are configured on the FHIR store.  If a resource with the specified ID already exists, the most recent version of the resource is overwritten without creating a new historical version, regardless of the disable_resource_versioning setting on the FHIR store. If transient failures occur during the import, it's possible that successfully imported resources will be overwritten more than once.  The import operation is idempotent unless the input data contains multiple valid resources with the same ID but different contents. In that case, after the import completes, the store contains exactly one resource with that ID but there is no ordering guarantee on which version of the contents it will have. The operation result counters do not count duplicate IDs as an error and count one success for each resource in the input, which might result in a success count larger than the number of resources in the FHIR store. This often occurs when importing data organized in bundles produced by Patient-everything where each bundle contains its own copy of a resource such as Practitioner that might be referred to by many patients.  If some resources fail to import, for example due to parsing errors, successfully imported resources are not rolled back.  The location and format of the input data is specified by the parameters below. Note that if no format is specified, this method assumes the `BUNDLE` format. When using the `BUNDLE` format this method ignores the `Bundle.type` field, except that `history` bundles are rejected, and does not apply any of the bundle processing semantics for batch or transaction bundles. Unlike in ExecuteBundle, transaction bundles are not executed as a single transaction and bundle-internal references are not rewritten. The bundle is treated as a collection of resources to be written as provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As an example, this allows the import of `searchset` bundles produced by a FHIR search or Patient-everything operation.  This method returns an Operation that can be used to track the status of the import by calling GetOperation.  Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ImportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.import({
     *     // The name of the FHIR store to import FHIR resources to, in the format of
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentStructure": "my_contentStructure",
     *       //   "gcsSource": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the FHIR store to import FHIR resources to, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {().ImportResourcesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Import;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.list
     * @desc Lists the FHIR stores in the given dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.list({
     *     // Restricts stores returned to those matching a filter. Syntax:
     *     // https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     *     // Only filtering on labels is supported, for example `labels.key=value`.
     *     filter: 'placeholder-value',
     *     // Limit on the number of FHIR stores to return in a single response.  If zero
     *     // the default page size of 100 is used.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from the previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Name of the dataset.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fhirStores": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
     * @param {integer=} params.pageSize Limit on the number of FHIR stores to return in a single response.  If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$List;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListFhirStoresResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.patch
     * @desc Updates the configuration of the specified FHIR store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.patch({
     *     // Output only. Resource name of the FHIR store, of the form
     *     // `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *     // The update mask applies to the resource. For the `FieldMask` definition,
     *     // see
     *     // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableReferentialIntegrity": false,
     *       //   "disableResourceVersioning": false,
     *       //   "enableUpdateCreate": false,
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notificationConfig": {},
     *       //   "streamConfigs": [],
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableReferentialIntegrity": false,
     *   //   "disableResourceVersioning": false,
     *   //   "enableUpdateCreate": false,
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {},
     *   //   "streamConfigs": [],
     *   //   "version": "my_version"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().FhirStore} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Create
    extends StandardParameters {
    /**
     * The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     */
    fhirStoreId?: string;
    /**
     * The name of the dataset this FHIR store belongs to.
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
     * Source FHIR store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
     * The resource name of the FHIR store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Export
    extends StandardParameters {
    /**
     * The name of the FHIR store to export resource from, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
     * The resource name of the FHIR store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Import
    extends StandardParameters {
    /**
     * The name of the FHIR store to import FHIR resources to, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
     * Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of FHIR stores to return in a single response.  If zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FhirStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
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
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
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
     * healthcare.projects.locations.datasets.fhirStores.fhir.capabilities
     * @desc Gets the FHIR capability statement ([STU3](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html), [R4](http://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)), or the [conformance statement](http://hl7.org/implement/standards/fhir/DSTU2/conformance.html) in the DSTU2 case for the store, which contains a description of functionality supported by the server.  Implements the FHIR standard capabilities interaction ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#capabilities)), or the [conformance interaction](http://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance) in the DSTU2 case.  On success, the response body will contain a JSON-encoded representation of a `CapabilityStatement` resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.capabilities(
     *     {
     *       // Name of the FHIR store to retrieve the capabilities for.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.capabilities
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the FHIR store to retrieve the capabilities for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.create
     * @desc Creates a FHIR resource.  Implements the FHIR standard create interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#create), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#create), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#create)), which creates a new resource with a server-assigned resource ID.  The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`.  On success, the response body will contain a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.create(
     *     {
     *       // The name of the FHIR store this resource belongs to.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *       // The FHIR resource type to create, such as Patient or Observation. For a
     *       // complete list, see the FHIR Resource Index
     *       // ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
     *       // [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
     *       // [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
     *       // Must match the resource type in the provided content.
     *       type: '[^/]+',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contentType": "my_contentType",
     *         //   "data": "my_data",
     *         //   "extensions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
     * @param {().HttpBody} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.delete
     * @desc Deletes a FHIR resource.  Implements the FHIR standard delete interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#delete), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#delete), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#delete)).  Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resources will be moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.delete(
     *     {
     *       // The name of the resource to delete.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle
     * @desc Executes all the requests in the given Bundle.  Implements the FHIR standard batch/transaction interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#transaction), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#transaction)).  Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the batch processing rules ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#brules)) and transaction processing rules ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#trules)).  The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`.  For a batch bundle or a successful transaction the response body will contain a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle(
     *     {
     *       // Name of the FHIR store in which this bundle will be executed.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contentType": "my_contentType",
     *         //   "data": "my_data",
     *         //   "extensions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store in which this bundle will be executed.
     * @param {().HttpBody} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.history
     * @desc Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store.  Implements the per-resource form of the FHIR standard history interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#history), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#history), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#history)).  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.history(
     *     {
     *       // The name of the resource to retrieve.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+',
     *       // Only include resource versions that were current at some point during the
     *       // time period specified in the date time value. The date parameter format is
     *       // yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm]
     *       //
     *       // Clients may specify any of the following:
     *       //
     *       // *  An entire year: `_at=2019`
     *       // *  An entire month: `_at=2019-01`
     *       // *  A specific day: `_at=2019-01-20`
     *       // *  A specific second: `_at=2018-12-31T23:59:58Z`
     *       _at: 'placeholder-value',
     *       // The maximum number of search results on a page. Defaults to 1000.
     *       _count: 'placeholder-value',
     *       // Used to retrieve the first, previous, next, or last page of resource
     *       // versions when using pagination. Value should be set to the value of
     *       // `_page_token` set in next or previous page links' URLs. Next and previous
     *       // page are returned in the response bundle's links field, where
     *       // `link.relation` is "previous" or "next".
     *       //
     *       // Omit `_page_token` if no previous request has been made.
     *       _page_token: 'placeholder-value',
     *       // Only include resource versions that were created at or after the given
     *       // instant in time. The instant in time uses the format
     *       // YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or
     *       // 2017-01-01T00:00:00Z). The time must be specified to the second and
     *       // include a time zone.
     *       _since: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.history
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to retrieve.
     * @param {string=} params._at Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm]  Clients may specify any of the following:  *  An entire year: `_at=2019` *  An entire month: `_at=2019-01` *  A specific day: `_at=2019-01-20` *  A specific second: `_at=2018-12-31T23:59:58Z`
     * @param {integer=} params._count The maximum number of search results on a page. Defaults to 1000.
     * @param {string=} params._page_token Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links' URLs. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next".  Omit `_page_token` if no previous request has been made.
     * @param {string=} params._since Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.patch
     * @desc Updates part of an existing resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document.  Implements the FHIR standard patch interaction ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#patch), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#patch)).  DSTU2 doesn't define a patch method, but the server supports it in the same way it supports STU3.  The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`.  On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.patch(
     *     {
     *       // The name of the resource to update.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contentType": "my_contentType",
     *         //   "data": "my_data",
     *         //   "extensions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to update.
     * @param {().HttpBody} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything
     * @desc Retrieves a Patient resource and resources related to that patient.  Implements the FHIR extended operation Patient-everything ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/patient-operations.html#everything), [STU3](http://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything), [R4](http://hl7.org/implement/standards/fhir/R4/patient-operations.html#everything)).  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.  The resources in scope for the response are:  * The patient resource itself. * All the resources directly referenced by the patient resource. * Resources directly referencing the patient resource that meet the   inclusion criteria. The inclusion criteria are based on the membership   rules in the patient compartment definition   ([DSTU2](http://hl7.org/fhir/DSTU2/compartment-patient.html),   [STU3](http://www.hl7.org/fhir/stu3/compartmentdefinition-patient.html),   [R4](http://hl7.org/fhir/R4/compartmentdefinition-patient.html)), which   details the eligible resource types and referencing search parameters.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     (await healthcare.projects.locations.datasets.fhirStores.fhir.Patient) -
     *     everything({
     *       // The response includes records prior to the end date. If no end date is
     *       // provided, all records subsequent to the start date are in scope.
     *       end: 'placeholder-value',
     *       // Name of the `Patient` resource for which the information is required.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/Patient/[^/]+',
     *       // The response includes records subsequent to the start date. If no start
     *       // date is provided, all records prior to the end date are in scope.
     *       start: 'placeholder-value',
     *       // Maximum number of resources in a page. Defaults to 100.
     *       _count: 'placeholder-value',
     *       // Used to retrieve the next or previous page of results
     *       // when using pagination. Value should be set to the value of page_token set
     *       // in next or previous page links' urls. Next and previous page are returned
     *       // in the response bundle's links field, where `link.relation` is "previous"
     *       // or "next".
     *       //
     *       // Omit `page_token` if no previous request has been made.
     *       _page_token: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.end The response includes records prior to the end date. If no end date is provided, all records subsequent to the start date are in scope.
     * @param {string} params.name Name of the `Patient` resource for which the information is required.
     * @param {string=} params.start The response includes records subsequent to the start date. If no start date is provided, all records prior to the end date are in scope.
     * @param {integer=} params._count Maximum number of resources in a page. Defaults to 100.
     * @param {string=} params._page_token Used to retrieve the next or previous page of results when using pagination. Value should be set to the value of page_token set in next or previous page links' urls. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next".  Omit `page_token` if no previous request has been made.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.read
     * @desc Gets the contents of a FHIR resource.  Implements the FHIR standard read interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#read), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#read), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#read)).  Also supports the FHIR standard conditional read interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#cread), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#cread), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#cread)) specified by supplying an `If-Modified-Since` header with a date/time value or an `If-None-Match` header with an ETag value.  On success, the response body will contain a JSON-encoded representation of the resource. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.read(
     *     {
     *       // The name of the resource to retrieve.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.read
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.Resource-purge
     * @desc Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method.  This is not a FHIR standard operation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     (await healthcare.projects.locations.datasets.fhirStores.fhir.Resource) -
     *     purge({
     *       // The name of the resource to purge.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+',
     *     });
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
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.Resource-purge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to purge.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.search
     * @desc Searches for resources in the given FHIR store according to criteria specified as query parameters.  Implements the FHIR standard search interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html), [R4](http://hl7.org/implement/standards/fhir/R4/search.html)).  Supports three methods of search defined by the specification:  *  `GET [base]?[parameters]` to search across all resources. *  `GET [base]/[type]?[parameters]` to search resources of a specified type. *  `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method.  The `GET` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters.  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.  The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page.  Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `:recurse`.  Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`.  The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. If there are additional results, the returned `Bundle` will contain pagination links.  Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases.  Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.search(
     *     {
     *       // Name of the FHIR store to retrieve resources from.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "resourceType": "my_resourceType"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store to retrieve resources from.
     * @param {().SearchResourcesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.update
     * @desc Updates the entire contents of a resource.  Implements the FHIR standard update interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#update), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#update), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#update)).  If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID.  The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request.  On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.update(
     *     {
     *       // The name of the resource to update.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contentType": "my_contentType",
     *         //   "data": "my_data",
     *         //   "extensions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to update.
     * @param {().HttpBody} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.vread
     * @desc Gets the contents of a version (current or historical) of a FHIR resource by version ID.  Implements the FHIR standard vread interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#vread), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#vread), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#vread)).  On success, the response body will contain a JSON-encoded representation of the resource. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.fhirStores.fhir.vread(
     *     {
     *       // The name of the resource version to retrieve.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhirStore/fhir/[^/]+/[^/]+/_history/[^/]+',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.vread
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource version to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities
    extends StandardParameters {
    /**
     * Name of the FHIR store to retrieve the capabilities for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create
    extends StandardParameters {
    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
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
     * The name of the resource to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle
    extends StandardParameters {
    /**
     * Name of the FHIR store in which this bundle will be executed.
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
     * The name of the resource to retrieve.
     */
    name?: string;
    /**
     * Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm]  Clients may specify any of the following:  *  An entire year: `_at=2019` *  An entire month: `_at=2019-01` *  A specific day: `_at=2019-01-20` *  A specific second: `_at=2018-12-31T23:59:58Z`
     */
    _at?: string;
    /**
     * The maximum number of search results on a page. Defaults to 1000.
     */
    _count?: number;
    /**
     * Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links' URLs. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next".  Omit `_page_token` if no previous request has been made.
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
     * The name of the resource to update.
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
     * The response includes records prior to the end date. If no end date is provided, all records subsequent to the start date are in scope.
     */
    end?: string;
    /**
     * Name of the `Patient` resource for which the information is required.
     */
    name?: string;
    /**
     * The response includes records subsequent to the start date. If no start date is provided, all records prior to the end date are in scope.
     */
    start?: string;
    /**
     * Maximum number of resources in a page. Defaults to 100.
     */
    _count?: number;
    /**
     * Used to retrieve the next or previous page of results when using pagination. Value should be set to the value of page_token set in next or previous page links' urls. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next".  Omit `page_token` if no previous request has been made.
     */
    _page_token?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read
    extends StandardParameters {
    /**
     * The name of the resource to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge
    extends StandardParameters {
    /**
     * The name of the resource to purge.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search
    extends StandardParameters {
    /**
     * Name of the FHIR store to retrieve resources from.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchResourcesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update
    extends StandardParameters {
    /**
     * The name of the resource to update.
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
     * The name of the resource version to retrieve.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Datasets$Hl7v2stores {
    context: APIRequestContext;
    messages: Resource$Projects$Locations$Datasets$Hl7v2stores$Messages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.messages = new Resource$Projects$Locations$Datasets$Hl7v2stores$Messages(
        this.context
      );
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.create
     * @desc Creates a new HL7v2 store within the parent dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.create({
     *     // The ID of the HL7v2 store that is being created.
     *     // The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     *     hl7V2StoreId: 'placeholder-value',
     *     // The name of the dataset this HL7v2 store belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notificationConfigs": [],
     *       //   "parserConfig": {},
     *       //   "rejectDuplicateMessage": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfigs": [],
     *   //   "parserConfig": {},
     *   //   "rejectDuplicateMessage": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl7V2StoreId The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the dataset this HL7v2 store belongs to.
     * @param {().Hl7V2Store} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.delete
     * @desc Deletes the specified HL7v2 store and removes all messages that it contains.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.delete({
     *     // The resource name of the HL7v2 store to delete.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
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
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the HL7v2 store to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.get
     * @desc Gets the specified HL7v2 store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.get({
     *     // The resource name of the HL7v2 store to get.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfigs": [],
     *   //   "parserConfig": {},
     *   //   "rejectDuplicateMessage": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the HL7v2 store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy(
     *     {
     *       // Optional. The policy format version to be returned.
     *       //
     *       // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
     *       // rejected.
     *       //
     *       // Requests for policies with any conditional bindings must specify version 3.
     *       // Policies without any conditional bindings may specify any valid value or
     *       // leave the field unset.
     *       //
     *       // To learn which resources support conditions in their IAM policies, see the
     *       // [IAM
     *       // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.list
     * @desc Lists the HL7v2 stores in the given dataset.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.list({
     *     // Restricts stores returned to those matching a filter. Syntax:
     *     // https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     *     // Only filtering on labels is supported. For example, `labels.key=value`.
     *     filter: 'placeholder-value',
     *     // Limit on the number of HL7v2 stores to return in a single response.
     *     // If zero the default page size of 100 is used.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from the previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Name of the dataset.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hl7V2Stores": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported. For example, `labels.key=value`.
     * @param {integer=} params.pageSize Limit on the number of HL7v2 stores to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListHl7V2StoresResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.patch
     * @desc Updates the HL7v2 store.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.patch({
     *     // Resource name of the HL7v2 store, of the form
     *     // `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *     // The update mask applies to the resource. For the `FieldMask` definition,
     *     // see
     *     // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notificationConfigs": [],
     *       //   "parserConfig": {},
     *       //   "rejectDuplicateMessage": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notificationConfigs": [],
     *   //   "parserConfig": {},
     *   //   "rejectDuplicateMessage": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().Hl7V2Store} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create
    extends StandardParameters {
    /**
     * The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     */
    hl7V2StoreId?: string;
    /**
     * The name of the dataset this HL7v2 store belongs to.
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
     * The resource name of the HL7v2 store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get
    extends StandardParameters {
    /**
     * The resource name of the HL7v2 store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List
    extends StandardParameters {
    /**
     * Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported. For example, `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of HL7v2 stores to return in a single response. If zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch
    extends StandardParameters {
    /**
     * Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
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
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
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
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.create
     * @desc Creates a message and sends a notification to the Cloud Pub/Sub topic. If configured, the MLLP adapter listens to messages created by this method and sends those back to the hospital. A successful response indicates the message has been persisted to storage and a Cloud Pub/Sub notification has been sent. Sending to the hospital by the MLLP adapter happens asynchronously.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.messages.create(
     *     {
     *       // The name of the dataset this message belongs to.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "message": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "data": "my_data",
     *   //   "labels": {},
     *   //   "messageType": "my_messageType",
     *   //   "name": "my_name",
     *   //   "parsedData": {},
     *   //   "patientIds": [],
     *   //   "sendFacility": "my_sendFacility",
     *   //   "sendTime": "my_sendTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the dataset this message belongs to.
     * @param {().CreateMessageRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.delete
     * @desc Deletes an HL7v2 message.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.messages.delete(
     *     {
     *       // The resource name of the HL7v2 message to delete.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store/messages/my-message',
     *     }
     *   );
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
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the HL7v2 message to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.get
     * @desc Gets an HL7v2 message.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.messages.get(
     *     {
     *       // The resource name of the HL7v2 message to retrieve.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store/messages/my-message',
     *       // Specifies which parts of the Message resource to return in the response.
     *       // When unspecified, equivalent to FULL.
     *       view: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "data": "my_data",
     *   //   "labels": {},
     *   //   "messageType": "my_messageType",
     *   //   "name": "my_name",
     *   //   "parsedData": {},
     *   //   "patientIds": [],
     *   //   "sendFacility": "my_sendFacility",
     *   //   "sendTime": "my_sendTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the HL7v2 message to retrieve.
     * @param {string=} params.view Specifies which parts of the Message resource to return in the response. When unspecified, equivalent to FULL.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest
     * @desc Ingests a new HL7v2 message from the hospital and sends a notification to the Cloud Pub/Sub topic. Return is an HL7v2 ACK message if the message was successfully stored. Otherwise an error is returned.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest(
     *     {
     *       // The name of the HL7v2 store this message belongs to.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "message": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hl7Ack": "my_hl7Ack",
     *   //   "message": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the HL7v2 store this message belongs to.
     * @param {().IngestMessageRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$IngestMessageResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.list
     * @desc Lists all the messages in the given HL7v2 store with support for filtering.  Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.messages.list(
     *     {
     *       // Restricts messages returned to those matching a filter. Syntax:
     *       // https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     *       //
     *       // Fields/functions available for filtering are:
     *       //
     *       // *  `message_type`, from the MSH-9.1 field. For example,
     *       // `NOT message_type = "ADT"`.
     *       // *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in
     *       // the dataset's time_zone, from the MSH-7 segment. For example,
     *       // `send_date < "2017-01-02"`.
     *       // *  `send_time`, the timestamp when the message was sent, using the
     *       // RFC3339 time format for comparisons, from the MSH-7 segment. For example,
     *       // `send_time < "2017-01-02T00:00:00-05:00"`.
     *       // *  `send_facility`, the care center that the message came from, from the
     *       // MSH-4 segment. For example, `send_facility = "ABC"`.
     *       // *  `PatientId(value, type)`, which matches if the message lists a patient
     *       // having an ID of the given value and type in the PID-2, PID-3, or PID-4
     *       // segments. For example, `PatientId("123456", "MRN")`.
     *       // *  `labels.x`, a string value of the label with key `x` as set using the
     *       // Message.labels
     *       // map. For example, `labels."priority"="high"`. The operator `:*` can be used
     *       // to assert the existence of a label. For example, `labels."priority":*`.
     *       filter: 'placeholder-value',
     *       // Orders messages returned by the specified order_by clause.
     *       // Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order
     *       //
     *       // Fields available for ordering are:
     *       //
     *       // *  `send_time`
     *       orderBy: 'placeholder-value',
     *       // Limit on the number of messages to return in a single response.
     *       // If zero the default page size of 100 is used.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from the previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Name of the HL7v2 store to retrieve messages from.
     *       parent:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store',
     *       // Specifies the parts of the Message to return in the response.
     *       // When unspecified, equivalent to BASIC. Setting this to anything other than
     *       // BASIC with a `page_size` larger than the default can generate a large
     *       // response, which impacts the performance of this method.
     *       view: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hl7V2Messages": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts messages returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings  Fields/functions available for filtering are:  *  `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. *  `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. *  `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. *  `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. *  `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
     * @param {string=} params.orderBy Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order  Fields available for ordering are:  *  `send_time`
     * @param {integer=} params.pageSize Limit on the number of messages to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the HL7v2 store to retrieve messages from.
     * @param {string=} params.view Specifies the parts of the Message to return in the response. When unspecified, equivalent to BASIC. Setting this to anything other than BASIC with a `page_size` larger than the default can generate a large response, which impacts the performance of this method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListMessagesResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.patch
     * @desc Update the message.  The contents of the message in Message.data and data extracted from the contents such as Message.create_time cannot be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.hl7V2Stores.messages.patch(
     *     {
     *       // Resource name of the Message, of the form
     *       // `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`.
     *       // Assigned by the server.
     *       name:
     *         'projects/my-project/locations/my-location/datasets/my-dataset/hl7V2Stores/my-hl7V2Store/messages/my-message',
     *       // The update mask applies to the resource. For the `FieldMask` definition,
     *       // see
     *       // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "data": "my_data",
     *         //   "labels": {},
     *         //   "messageType": "my_messageType",
     *         //   "name": "my_name",
     *         //   "parsedData": {},
     *         //   "patientIds": [],
     *         //   "sendFacility": "my_sendFacility",
     *         //   "sendTime": "my_sendTime"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "data": "my_data",
     *   //   "labels": {},
     *   //   "messageType": "my_messageType",
     *   //   "name": "my_name",
     *   //   "parsedData": {},
     *   //   "patientIds": [],
     *   //   "sendFacility": "my_sendFacility",
     *   //   "sendTime": "my_sendTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().Message} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create
    extends StandardParameters {
    /**
     * The name of the dataset this message belongs to.
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
     * The resource name of the HL7v2 message to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get
    extends StandardParameters {
    /**
     * The resource name of the HL7v2 message to retrieve.
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
     * The name of the HL7v2 store this message belongs to.
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
     * Restricts messages returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings  Fields/functions available for filtering are:  *  `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. *  `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. *  `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. *  `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. *  `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
     */
    filter?: string;
    /**
     * Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order  Fields available for ordering are:  *  `send_time`
     */
    orderBy?: string;
    /**
     * Limit on the number of messages to return in a single response. If zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if any.
     */
    pageToken?: string;
    /**
     * Name of the HL7v2 store to retrieve messages from.
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
     * Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
     * healthcare.projects.locations.datasets.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
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
     * @alias healthcare.projects.locations.datasets.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Operations$Cancel;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.operations.get({
     *     // The name of the operation resource.
     *     name:
     *       'projects/my-project/locations/my-location/datasets/my-dataset/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias healthcare.projects.locations.datasets.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Operations$Get;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/healthcare.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const healthcare = google.healthcare('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await healthcare.projects.locations.datasets.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
     * @alias healthcare.projects.locations.datasets.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        params = {} as Params$Resource$Projects$Locations$Datasets$Operations$List;
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
          callback as BodyResponseCallback<{} | void>
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
}
