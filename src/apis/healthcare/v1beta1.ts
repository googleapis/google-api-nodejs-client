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

export namespace healthcare_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Cloud Healthcare API
   *
   * Manage, store, and access healthcare data in Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const healthcare = google.healthcare('v1beta1');
   *
   * @namespace healthcare
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
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
     * Output only. Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string | null;
    /**
     * The default timezone used by this dataset. Must be a either a valid IANA time zone name such as &quot;America/New_York&quot; or empty, which defaults to UTC. This is used for parsing times in resources (e.g., HL7 messages) where no explicit timezone is specified.
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
     * The name of the dataset resource to create and write the redacted data to (e.g.,   * The destination dataset must not exist.  * The destination dataset must be in the same project as the source    dataset. De-identifying data across multiple projects is not supported.
     */
    destinationDataset?: string | null;
  }
  /**
   * Contains the status of the Deidentify operation.
   */
  export interface Schema$DeidentifyErrorDetails {
    /**
     * Number of resources failed to process.
     */
    failureResourceCount?: string | null;
    /**
     * Number of stores failed to process.
     */
    failureStoreCount?: string | null;
    /**
     * Number of resources successfully processed.
     */
    successResourceCount?: string | null;
    /**
     * Number of stores successfully processed.
     */
    successStoreCount?: string | null;
  }
  /**
   * Contains a detailed summary of the Deidentify operation.
   */
  export interface Schema$DeidentifySummary {
    /**
     * Number of resources successfully processed.
     */
    successResourceCount?: string | null;
    /**
     * Number of stores successfully processed.
     */
    successStoreCount?: string | null;
  }
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
   * Represents a DICOM store.
   */
  export interface Schema$DicomStore {
    /**
     * User-supplied key-value pairs used to organize DICOM stores.  Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated with a given store.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
   * Structure to describe the error encountered during batch operation on one resource. This is used both for sample errors in operation response, and for format of errors in error reports.
   */
  export interface Schema$ErrorDetail {
    /**
     * The status of the error.
     */
    error?: Schema$Status;
    /**
     * The identifier of the resource.
     */
    resource?: string | null;
  }
  /**
   * Exports data from the specified DICOM store. If a given resource (e.g., a DICOM object with the same SOPInstance UID) already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data will persist when the DICOM store from which it was exported is deleted.
   */
  export interface Schema$ExportDicomDataRequest {
    /**
     * The BigQuery output destination.  You can only export to a BigQuery dataset that&#39;s in the same project as the DICOM store you&#39;re exporting from.  The BigQuery location requires two IAM roles: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1beta1DicomBigQueryDestination;
    /**
     * The Cloud Storage output destination.  The Cloud Storage location requires the `roles/storage.objectAdmin` Cloud IAM role.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1beta1DicomGcsDestination;
  }
  /**
   * Request to export resources.
   */
  export interface Schema$ExportResourcesRequest {
    /**
     * The BigQuery output destination.  The BigQuery location requires two IAM roles: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.  The output will be one BigQuery table per resource type.
     */
    bigqueryDestination?: Schema$GoogleCloudHealthcareV1beta1FhirBigQueryDestination;
    /**
     * The Cloud Storage output destination.  The Cloud Storage location requires the `roles/storage.objectAdmin` Cloud IAM role.  The exported outputs are organized by FHIR resource types. The server will create one object per resource type. Each object contains newline delimited JSON, and each line is a FHIR resource.
     */
    gcsDestination?: Schema$GoogleCloudHealthcareV1beta1FhirRestGcsDestination;
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
   * Specifies how de-identification of a FHIR store should be handled.
   */
  export interface Schema$FhirConfig {
    /**
     * Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata will be passed through to the output dataset unmodified. All extensions are removed in the output.
     */
    fieldMetadataList?: Schema$FieldMetadata[];
  }
  /**
   * Represents a FHIR store.
   */
  export interface Schema$FhirStore {
    /**
     * Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API will enforce referential integrity and fail the requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API will skip referential integrity check. Consequently, operations that rely on references, such as GetPatientEverything, will not return all the results if broken references exist.
     */
    disableReferentialIntegrity?: boolean | null;
    /**
     * Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations will cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for attempts to read the historical versions.
     */
    disableResourceVersioning?: boolean | null;
    /**
     * Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. Importing resource histories creates resource interactions that appear to have occurred in the past, which clients may not want to allow. If set to false, history bundles within an import will fail with an error.
     */
    enableHistoryImport?: boolean | null;
    /**
     * Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub notifications.
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
     * If non-empty, publish all resource modifications of this FHIR store to this destination. The Cloud Pub/Sub message attributes will contain a map with a string describing the action that has triggered the notification, e.g. &quot;action&quot;:&quot;CreateResource&quot;.
     */
    notificationConfig?: Schema$NotificationConfig;
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
     * List of paths to FHIR fields to be redacted. Each path is a period-separated list where each component is either a field name or FHIR type name, for example: Patient, HumanName. For &quot;choice&quot; types (those defined in the FHIR spec with the form: field[x]) we use two separate components. e.g. &quot;deceasedAge.unit&quot; is matched by &quot;Deceased.Age.unit&quot;. Supported types are: AdministrativeGenderCode, Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, MimeTypeCode, Oid, String, Uri, Uuid, Xhtml.
     */
    paths?: string[] | null;
  }
  /**
   * The BigQuery table where the output should be written.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1DicomBigQueryDestination {
    /**
     * If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of the DICOM store. If the flag is not set and the destination table already exists, the export call returns an error.
     */
    force?: boolean | null;
    /**
     * BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId`
     */
    tableUri?: string | null;
  }
  /**
   * The Cloud Storage location where the output should be written, and the export configuration.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1DicomGcsDestination {
    /**
     * MIME types supported by DICOM spec. Each file will be written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component will exist only for multi-frame instances.  Refer to the DICOM conformance statement for permissible MIME types: https://cloud.google.com/healthcare/docs/dicom#wado-rs  The following extensions will be used for output files:   application/dicom -&gt; .dcm   image/jpeg -&gt; .jpg   image/png -&gt; .png  If unspecified, the instances will be exported in their original DICOM format.
     */
    mimeType?: string | null;
    /**
     * The Cloud Storage destination to export to.  URI for a Cloud Storage directory where result files should be written (in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service will append one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1DicomGcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards:  &#39;*&#39; to match 0 or more non-separator characters  &#39;**&#39; to match 0 or more characters (including separators). Must be used at       the end of a path and with no other wildcards in the       path. Can also be used with a file extension (such as .dcm), which       imports all files with the extension in the specified directory and       its sub-directories. For example,       `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm       extensions in `my-directory/` and its sub-directories.  &#39;?&#39; to match 1 character All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * The configuration for exporting to BigQuery.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirBigQueryDestination {
    /**
     * BigQuery URI to a dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`
     */
    datasetUri?: string | null;
    /**
     * If this flag is `TRUE`, all tables will be deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error.
     */
    force?: boolean | null;
    /**
     * The configuration for the exported BigQuery schema.
     */
    schemaConfig?: Schema$SchemaConfig;
  }
  /**
   * Response when errors occur while exporting resources. This structure is included in the error details to describe the detailed outcome. It is only included when the operation finishes with errors.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirRestExportResourcesErrorDetails {
    /**
     * The number of resources that had errors.
     */
    errorCount?: string | null;
    /**
     * The name of the FHIR store where resources have been exported, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    fhirStore?: string | null;
    /**
     * The total number of resources included in the export operation. This is the sum of the success and error counts.
     */
    resourceCount?: string | null;
    /**
     * The number of resources that were exported.
     */
    successCount?: string | null;
  }
  /**
   * Response when all resources export successfully. This structure will be included in the response to describe the detailed outcome. It will only be included when the operation finishes successfully.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirRestExportResourcesResponse {
    /**
     * The name of the FHIR store where resources have been exported, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    fhirStore?: string | null;
    /**
     * The total number of resources exported from the requested FHIR store.
     */
    resourceCount?: string | null;
  }
  /**
   * The configuration for exporting to Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirRestGcsDestination {
    /**
     * URI for a Cloud Storage directory where result files should be written (in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service will append one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string | null;
  }
  /**
   * Specifies the configuration for importing data from Cloud Storage.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirRestGcsSource {
    /**
     * Points to a Cloud Storage URI containing file(s) to import.  The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards:  *  `*` to match 0 or more non-separator characters *  `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. *  `?` to match 1 character  Files matching the wildcard are expected to contain content only, no metadata.
     */
    uri?: string | null;
  }
  /**
   * Error response of importing resources. This structure will be included in the error details to describe the detailed error. It will only be included when the operation finishes with some failure.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirRestImportResourcesErrorDetails {
    /**
     * The number of resources that had errors.
     */
    errorCount?: string | null;
    /**
     * The name of the FHIR store where resources have been imported, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    fhirStore?: string | null;
    /**
     * The total number of resources included in the source data. This is the sum of the success and error counts.
     */
    inputSize?: string | null;
    /**
     * The number of resources that have been imported.
     */
    successCount?: string | null;
  }
  /**
   * Final response of importing resources. This structure will be included in the response to describe the detailed outcome. It will only be included when the operation finishes successfully.
   */
  export interface Schema$GoogleCloudHealthcareV1beta1FhirRestImportResourcesResponse {
    /**
     * The name of the FHIR store where the resources have been imported, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    fhirStore?: string | null;
    /**
     * The total number of resources included in the source data.
     */
    inputSize?: string | null;
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
     * Output only. Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     */
    name?: string | null;
    /**
     * The notification destination all messages (both Ingest &amp; Create) are published on. Only the message name is sent as part of the notification. If this is unset, no notifications will be sent. Supplied by the client.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * The configuration for the parser. It determines how the server parses the messages.
     */
    parserConfig?: Schema$ParserConfig;
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
   * Specifies how de-identification of image pixel should be handled.
   */
  export interface Schema$ImageConfig {
    /**
     * Determines how to redact text from image.
     */
    textRedactionMode?: string | null;
  }
  /**
   * Returns the errors encountered during DICOM store import.
   */
  export interface Schema$ImportDicomDataErrorDetails {
    /**
     * Deprecated. Use only for debugging purposes.  Contains sample errors encountered in imports of individual resources (for example, a Cloud Storage object).
     */
    sampleErrors?: Schema$ErrorDetail[];
  }
  /**
   * Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API will accept duplicate DICOM instances, by simply ignoring the newly pushed instance (it will not overwrite).
   */
  export interface Schema$ImportDicomDataRequest {
    /**
     * Cloud Storage source data location and import configuration.  The Cloud Storage location requires the `roles/storage.objectViewer` Cloud IAM role.
     */
    gcsSource?: Schema$GoogleCloudHealthcareV1beta1DicomGcsSource;
  }
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
    gcsSource?: Schema$GoogleCloudHealthcareV1beta1FhirRestGcsSource;
  }
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
     * The returned message names. Won&#39;t be more values than the value of page_size in the request.
     */
    messages?: string[] | null;
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
   * A complete HL7v2 message. See http://www.hl7.org/implement/standards/index.cfm?ref=common for details on the standard.
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
     * The message type and trigger event for this message. MSH-9.
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
   * Specifies where notifications should be sent upon changes to a data store.
   */
  export interface Schema$NotificationConfig {
    /**
     * The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. cloud-healthcare@system.gserviceaccount.com must have publisher permissions on the given Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
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
    counter?: Schema$ProgressCounter;
    /**
     * The time at which the operation was created by the API.
     */
    createTime?: string | null;
    /**
     * The time at which execution was completed.
     */
    endTime?: string | null;
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
     * Byte(s) to be used as the segment terminator. If this is unset, &#39;\r&#39; will be used as segment terminator.
     */
    segmentTerminator?: string | null;
  }
  /**
   * A patient identifier and associated type.
   */
  export interface Schema$PatientId {
    /**
     * ID type, e.g. MRN or NHS.
     */
    type?: string | null;
    /**
     * The patient&#39;s unique identifier.
     */
    value?: string | null;
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
   * Define how to redact sensitive values. Default behaviour is erase, e.g. &quot;My name is Jake.&quot; becomes &quot;My name is .&quot;
   */
  export interface Schema$RedactConfig {}
  /**
   * When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, &quot;My name is Jake&quot; becomes &quot;My name is [PERSON_NAME].&quot; The TRANSFORM action is equivalent to redacting.
   */
  export interface Schema$ReplaceWithInfoTypeConfig {}
  /**
   * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
   */
  export interface Schema$SchemaConfig {
    /**
     * The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2.
     */
    recursiveStructureDepth?: string | null;
    /**
     * Specifies the output schema type. If unspecified, the default is `LOSSLESS`.
     */
    schemaType?: string | null;
  }
  /**
   * Request to search the resources in the specified FHIR store.
   */
  export interface Schema$SearchResourcesRequest {
    /**
     * The FHIR resource type to search, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     */
    resourceType?: string | null;
  }
  /**
   * A segment in a structured format.
   */
  export interface Schema$Segment {
    /**
     * A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)?  Examples of (key, value) pairs: - (0.1, &quot;foo&quot;): Component 1 of Field 0 has the value &quot;foo&quot;. - (1.1.2, &quot;bar&quot;): Sub-component 2 of Component 1 of field 1 has the value &quot;bar&quot;. - (1[2].1, &quot;baz&quot;): Component 1 of Instance 2 of Field 1, which is repeated, has the value &quot;baz&quot;.
     */
    fields?: {[key: string]: string} | null;
    /**
     * A string that indicates the type of segment, e.g., EVN, PID.
     */
    segmentId?: string | null;
    /**
     * Set ID for segments that can be in a set. This can be empty if it is missing or it is not applicable.
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
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
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

    /**
     * healthcare.projects.locations.get
     * @desc Gets information about a location.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.get
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

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * healthcare.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',  // TODO: Update placeholder value.
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
     *     var locationsPage = response['locations'];
     *     if (!locationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < locationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `locationsPage`:
     *       console.log(JSON.stringify(locationsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.list
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

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the project in which the dataset should be created (e.g.,
     *     // `projects/{project_id}/locations/{location_id}`).
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.datasetId The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the project in which the dataset should be created (e.g., `projects/{project_id}/locations/{location_id}`).
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+parent}/datasets').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.deidentify
     * @desc Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. If errors occur, details field type is DeidentifyErrorDetails. Errors are also logged to Stackdriver (see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging)).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Source dataset resource name. (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     *     sourceDataset: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.deidentify(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.deidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sourceDataset Source dataset resource name. (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     * @param {().DeidentifyDatasetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deidentify(
      params?: Params$Resource$Projects$Locations$Datasets$Deidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+sourceDataset}:deidentify').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.delete
     * @desc Deletes the specified health dataset and all data contained in the dataset. Deleting a dataset does not affect the sources from which the dataset was imported (if any).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the dataset to delete (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the dataset to delete (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.get
     * @desc Gets any metadata associated with a dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the dataset to read (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the dataset to read (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
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
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.getIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.list
     * @desc Lists the health datasets in the current project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the project whose datasets should be listed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}`).
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
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
     *     var datasetsPage = response['datasets'];
     *     if (!datasetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < datasetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `datasetsPage`:
     *       console.log(JSON.stringify(datasetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.datasets.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Capped to 100 if not specified. May not be larger than 1000.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent The name of the project whose datasets should be listed (e.g., `projects/{project_id}/locations/{location_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Datasets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDatasetsResponse>;
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
        | BodyResponseCallback<Schema$ListDatasetsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatasetsResponse>,
      callback?: BodyResponseCallback<Schema$ListDatasetsResponse>
    ): void | GaxiosPromise<Schema$ListDatasetsResponse> {
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
            url: (rootUrl + '/v1beta1/{+parent}/datasets').replace(
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
        createAPIRequest<Schema$ListDatasetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDatasetsResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.patch
     * @desc Updates dataset metadata.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Output only. Resource name of the dataset, of the form
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
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
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
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
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
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
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Datasets$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     */
    datasetId?: string;
    /**
     * The name of the project in which the dataset should be created (e.g., `projects/{project_id}/locations/{location_id}`).
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Source dataset resource name. (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the dataset to delete (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the dataset to read (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Datasets$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Capped to 100 if not specified. May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the project whose datasets should be listed (e.g., `projects/{project_id}/locations/{location_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
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
  export interface Params$Resource$Projects$Locations$Datasets$Testiampermissions
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
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the dataset this DICOM store belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dicomStoreId The ID of the DICOM store that is being created. Any string value up to 256 characters in length.
     * @param {string} params.parent The name of the dataset this DICOM store belongs to.
     * @param {().DicomStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStore>;
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
        | BodyResponseCallback<Schema$DicomStore>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DicomStore>,
      callback?: BodyResponseCallback<Schema$DicomStore>
    ): void | GaxiosPromise<Schema$DicomStore> {
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
            url: (rootUrl + '/v1beta1/{+parent}/dicomStores').replace(
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
        createAPIRequest<Schema$DicomStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.delete
     * @desc Deletes the specified DICOM store and removes all images that are contained within it.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the DICOM store to delete.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.export
     * @desc Exports data to the specified destination by copying it from the DICOM store. The metadata field type is OperationMetadata.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The DICOM store resource name from which the data should be exported (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.export(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The DICOM store resource name from which the data should be exported (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {().ExportDicomDataRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+name}:export').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.get
     * @desc Gets the specified DICOM store.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the DICOM store to get.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStore>;
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
        | BodyResponseCallback<Schema$DicomStore>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DicomStore>,
      callback?: BodyResponseCallback<Schema$DicomStore>
    ): void | GaxiosPromise<Schema$DicomStore> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DicomStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.getIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.dicomStores.import
     * @desc Imports data into the DICOM store by copying it from the specified source. For errors, the Operation will be populated with error details (in the form of ImportDicomDataErrorDetails in error.details), which will hold finer-grained error information. Errors are also logged to Stackdriver (see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging)). The metadata field type is OperationMetadata.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store resource into which the data is imported (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.import(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the DICOM store resource into which the data is imported (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {().ImportDicomDataRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+name}:import').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.list
     * @desc Lists the DICOM stores in the given dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the dataset.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
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
     *     var dicomStoresPage = response['dicomStores'];
     *     if (!dicomStoresPage) {
     *       return;
     *     }
     *     for (var i = 0; i < dicomStoresPage.length; i++) {
     *       // TODO: Change code below to process each resource in `dicomStoresPage`:
     *       console.log(JSON.stringify(dicomStoresPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.datasets.dicomStores.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
     * @param {integer=} params.pageSize Limit on the number of DICOM stores to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDicomStoresResponse>;
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
        | BodyResponseCallback<Schema$ListDicomStoresResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDicomStoresResponse>,
      callback?: BodyResponseCallback<Schema$ListDicomStoresResponse>
    ): void | GaxiosPromise<Schema$ListDicomStoresResponse> {
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
            url: (rootUrl + '/v1beta1/{+parent}/dicomStores').replace(
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
        createAPIRequest<Schema$ListDicomStoresResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDicomStoresResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.patch
     * @desc Updates the specified DICOM store.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Output only. Resource name of the DICOM store, of the form
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().DicomStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DicomStore>;
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
        | BodyResponseCallback<Schema$DicomStore>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DicomStore>,
      callback?: BodyResponseCallback<Schema$DicomStore>
    ): void | GaxiosPromise<Schema$DicomStore> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DicomStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.searchForInstances
     * @desc SearchForInstances returns a list of matching instances. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the SearchForInstancesRequest DICOMweb request (e.g.,
     *     // `instances` or `series/{series_uid}/instances` or
     *     // `studies/{study_uid}/instances`).
     *     dicomWebPath: 'instances',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.searchForInstances(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.searchForInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForInstancesRequest DICOMweb request (e.g., `instances` or `series/{series_uid}/instances` or `studies/{study_uid}/instances`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.searchForSeries
     * @desc SearchForSeries returns a list of matching series. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the SearchForSeries DICOMweb request(e.g., `series` or
     *     // `studies/{study_uid}/series`).
     *     dicomWebPath: 'series',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.searchForSeries(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.searchForSeries
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForSeries DICOMweb request(e.g., `series` or `studies/{study_uid}/series`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForSeries(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.searchForStudies
     * @desc SearchForStudies returns a list of matching studies. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the SearchForStudies DICOMweb request (e.g., `studies`).
     *     dicomWebPath: 'studies',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.searchForStudies(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.searchForStudies
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForStudies DICOMweb request (e.g., `studies`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForStudies(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.dicomStores.storeInstances
     * @desc StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the StoreInstances DICOMweb request (e.g.,
     *     // `studies/[{study_id}]`). Note that the `study_uid` is optional.
     *     dicomWebPath: 'studies',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.storeInstances(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.storeInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the StoreInstances DICOMweb request (e.g., `studies/[{study_id}]`). Note that the `study_uid` is optional.
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    storeInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
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
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
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
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the DICOM store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Export
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DICOM store resource name from which the data should be exported (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the DICOM store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the DICOM store resource into which the data is imported (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the SearchForInstancesRequest DICOMweb request (e.g., `instances` or `series/{series_uid}/instances` or `studies/{study_uid}/instances`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforseries
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the SearchForSeries DICOMweb request(e.g., `series` or `studies/{study_uid}/series`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Searchforstudies
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the SearchForStudies DICOMweb request (e.g., `studies`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Storeinstances
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the StoreInstances DICOMweb request (e.g., `studies/[{study_id}]`). Note that the `study_uid` is optional.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * @desc DeleteStudy deletes all instances within the given study. Delete requests are equivalent to the GET requests specified in the WADO-RS standard.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the DeleteStudy request (e.g., `studies/{study_id}`).
     *     dicomWebPath: 'studies/my-study',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DeleteStudy request (e.g., `studies/{study_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.retrieveMetadata
     * @desc RetrieveStudyMetadata returns instance associated with the given study presented as metadata with the bulk data removed. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveStudyMetadata DICOMweb request (e.g.,
     *     // `studies/{study_id}/metadata`).
     *     dicomWebPath: 'studies/my-study/metadata',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.retrieveMetadata(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.retrieveMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveStudyMetadata DICOMweb request (e.g., `studies/{study_id}/metadata`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveMetadata(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy
     * @desc RetrieveStudy returns all instances within the given study. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveStudy DICOMweb request (e.g.,
     *     // `studies/{study_id}`).
     *     dicomWebPath: 'studies/my-study',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveStudy DICOMweb request (e.g., `studies/{study_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveStudy(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.searchForInstances
     * @desc SearchForInstances returns a list of matching instances. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the SearchForInstancesRequest DICOMweb request (e.g.,
     *     // `instances` or `series/{series_uid}/instances` or
     *     // `studies/{study_uid}/instances`).
     *     dicomWebPath: 'studies/my-study/instances',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.searchForInstances(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.searchForInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForInstancesRequest DICOMweb request (e.g., `instances` or `series/{series_uid}/instances` or `studies/{study_uid}/instances`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.searchForSeries
     * @desc SearchForSeries returns a list of matching series. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the SearchForSeries DICOMweb request(e.g., `series` or
     *     // `studies/{study_uid}/series`).
     *     dicomWebPath: 'studies/my-study/series',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.searchForSeries(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.searchForSeries
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForSeries DICOMweb request(e.g., `series` or `studies/{study_uid}/series`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForSeries(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.storeInstances
     * @desc StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the StoreInstances DICOMweb request (e.g.,
     *     // `studies/[{study_id}]`). Note that the `study_uid` is optional.
     *     dicomWebPath: 'studies/my-study',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.storeInstances(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.storeInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the StoreInstances DICOMweb request (e.g., `studies/[{study_id}]`). Note that the `study_uid` is optional.
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    storeInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the DeleteStudy request (e.g., `studies/{study_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievemetadata
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveStudyMetadata DICOMweb request (e.g., `studies/{study_id}/metadata`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Retrievestudy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveStudy DICOMweb request (e.g., `studies/{study_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforinstances
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the SearchForInstancesRequest DICOMweb request (e.g., `instances` or `series/{series_uid}/instances` or `studies/{study_uid}/instances`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Searchforseries
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the SearchForSeries DICOMweb request(e.g., `series` or `studies/{study_uid}/series`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Storeinstances
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the StoreInstances DICOMweb request (e.g., `studies/[{study_id}]`). Note that the `study_uid` is optional.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * @desc DeleteSeries deletes all instances within the given study and series. Delete requests are equivalent to the GET requests specified in the WADO-RS standard.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the DeleteSeries request (e.g.,
     *     // `studies/{study_id}/series/{series_id}`).
     *     dicomWebPath: 'studies/my-study/series/my-sery',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DeleteSeries request (e.g., `studies/{study_id}/series/{series_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata
     * @desc RetrieveSeriesMetadata returns instance associated with the given study and series, presented as metadata with the bulk data removed. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveSeriesMetadata DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/metadata`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/metadata',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveSeriesMetadata DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/metadata`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveMetadata(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveSeries
     * @desc RetrieveSeries returns all instances within the given study and series. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveSeries DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}`).
     *     dicomWebPath: 'studies/my-study/series/my-sery',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.retrieveSeries(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.retrieveSeries
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveSeries DICOMweb request (e.g., `studies/{study_id}/series/{series_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveSeries(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.searchForInstances
     * @desc SearchForInstances returns a list of matching instances. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the SearchForInstancesRequest DICOMweb request (e.g.,
     *     // `instances` or `series/{series_uid}/instances` or
     *     // `studies/{study_uid}/instances`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.searchForInstances(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.searchForInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the SearchForInstancesRequest DICOMweb request (e.g., `instances` or `series/{series_uid}/instances` or `studies/{study_uid}/instances`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchForInstances(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the DeleteSeries request (e.g., `studies/{study_id}/series/{series_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrievemetadata
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveSeriesMetadata DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/metadata`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Retrieveseries
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveSeries DICOMweb request (e.g., `studies/{study_id}/series/{series_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Searchforinstances
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the SearchForInstancesRequest DICOMweb request (e.g., `instances` or `series/{series_uid}/instances` or `studies/{study_uid}/instances`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * @desc DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the WADO-RS standard.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the DeleteInstance request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/instances/{instance_id}`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances/my-instance',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DeleteInstance request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance
     * @desc RetrieveInstance returns instance associated with the given study, series, and SOP Instance UID. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveInstance DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/instances/{instance_id}`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances/my-instance',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveInstance DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveInstance(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata
     * @desc RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata with the bulk data removed. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveInstanceMetadata DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/instances/{instance_id}/metadata`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances/my-instance/metadata',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveInstanceMetadata DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/metadata`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveMetadata(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered
     * @desc RetrieveRenderedInstance returns instance associated with the given study, series, and SOP Instance UID in an acceptable Rendered Media Type. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveRenderedInstance DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/instances/{instance_id}/rendered`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances/my-instance/rendered',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveRenderedInstance DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/rendered`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveRendered(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the DeleteInstance request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieveinstance
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveInstance DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrievemetadata
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveInstanceMetadata DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/metadata`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Retrieverendered
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveRenderedInstance DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/rendered`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * @desc RetrieveFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveFrames DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/instances/{instance_id}/frames/{frame_list}`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances/my-instance/frames/my-frame',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveFrames DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/frames/{frame_list}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveFrames(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered
     * @desc RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the DICOM store that is being accessed (e.g.,
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/dicomStores/my-dicom-store',  // TODO: Update placeholder value.
     *
     *     // The path of the RetrieveRenderedFrames DICOMweb request (e.g.,
     *     // `studies/{study_id}/series/{series_id}/instances/{instance_id}/frames/{frame_list}/rendered`).
     *     dicomWebPath: 'studies/my-study/series/my-sery/instances/my-instance/frames/my-frame/rendered',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the RetrieveRenderedFrames DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/frames/{frame_list}/rendered`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retrieveRendered(
      params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (
              rootUrl + '/v1beta1/{+parent}/dicomWeb/{+dicomWebPath}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieveframes
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveFrames DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/frames/{frame_list}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Studies$Series$Instances$Frames$Retrieverendered
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The path of the RetrieveRenderedFrames DICOMweb request (e.g., `studies/{study_id}/series/{series_id}/instances/{instance_id}/frames/{frame_list}/rendered`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the dataset this FHIR store belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fhirStoreId The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the dataset this FHIR store belongs to.
     * @param {().FhirStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStore>;
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
        | BodyResponseCallback<Schema$FhirStore>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FhirStore>,
      callback?: BodyResponseCallback<Schema$FhirStore>
    ): void | GaxiosPromise<Schema$FhirStore> {
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
            url: (rootUrl + '/v1beta1/{+parent}/fhirStores').replace(
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
        createAPIRequest<Schema$FhirStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.delete
     * @desc Deletes the specified FHIR store and removes all resources within it.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the FHIR store to delete.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.export
     * @desc Export resources from the FHIR store to the specified destination.  This method returns an Operation that can be used to track the status of the export by calling GetOperation.  Immediate fatal errors appear in the error field, errors are also logged to Stackdriver (see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging)). Otherwise, when the operation finishes, a detailed response of type ExportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the FHIR store to export resource from. The name should be in
     *     // the format of
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.export(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the FHIR store to export resource from. The name should be in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {().ExportResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+name}:export').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.get
     * @desc Gets the configuration of the specified FHIR store.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the FHIR store to get.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStore>;
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
        | BodyResponseCallback<Schema$FhirStore>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FhirStore>,
      callback?: BodyResponseCallback<Schema$FhirStore>
    ): void | GaxiosPromise<Schema$FhirStore> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FhirStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.getIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.fhirStores.import
     * @desc Import resources to the FHIR store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some FHIR store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty FHIR store that is not being used by other clients. In cases where this method is not appropriate, consider using ExecuteBundle to load data.  Every resource in the input must contain a client-supplied ID, and will be stored using that ID regardless of the enable_update_create setting on the FHIR store.  The import process does not enforce referential integrity, regardless of the disable_referential_integrity setting on the FHIR store. This allows the import of resources with arbitrary interdependencies without considering grouping or ordering, but if the input data contains invalid references or if some resources fail to be imported, the FHIR store might be left in a state that violates referential integrity.  If a resource with the specified ID already exists, the most recent version of the resource is overwritten without creating a new historical version, regardless of the disable_resource_versioning setting on the FHIR store. If transient failures occur during the import, it is possible that successfully imported resources will be overwritten more than once.  The import operation is idempotent unless the input data contains multiple valid resources with the same ID but different contents. In that case, after the import completes, the store will contain exactly one resource with that ID but there is no ordering guarantee on which version of the contents it will have. The operation result counters do not count duplicate IDs as an error and will count one success for each resource in the input, which might result in a success count larger than the number of resources in the FHIR store. This often occurs when importing data organized in bundles produced by Patient-everything where each bundle contains its own copy of a resource such as Practitioner that might be referred to by many patients.  If some resources fail to import, for example due to parsing errors, successfully imported resources are not rolled back.  The location and format of the input data is specified by the parameters below. Note that if no format is specified, this method assumes the `BUNDLE` format. When using the `BUNDLE` format this method ignores the `Bundle.type` field, except for the special case of `history`, and does not apply any of the bundle processing semantics for batch or transaction bundles. Unlike in ExecuteBundle, transaction bundles are not executed as a single transaction and bundle-internal references are not rewritten. The bundle is treated as a collection of resources to be written as provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As an example, this allows the import of `searchset` bundles produced by a FHIR search or Patient-everything operation.  If history imports are enabled by setting enable_history_import in the FHIR store's configuration, this method can import historical versions of a resource by supplying a bundle of type `history` and using the `BUNDLE` format. The historical versions in the bundle must have `lastUpdated` timestamps, and the resulting resource history on the server will appear as if the versions had been created at those timestamps. If a current or historical version with the supplied resource ID already exists, the bundle is rejected to avoid creating an inconsistent sequence of resource versions.  This method returns an Operation that can be used to track the status of the import by calling GetOperation.  Immediate fatal errors appear in the error field, errors are also logged to Stackdriver (see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging)). Otherwise, when the operation finishes, a detailed response of type ImportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the FHIR store to import FHIR resources to. The name should be
     *     // in the format of
     *     // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.import(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the FHIR store to import FHIR resources to. The name should be in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {().ImportResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+name}:import').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.list
     * @desc Lists the FHIR stores in the given dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the dataset.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
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
     *     var fhirStoresPage = response['fhirStores'];
     *     if (!fhirStoresPage) {
     *       return;
     *     }
     *     for (var i = 0; i < fhirStoresPage.length; i++) {
     *       // TODO: Change code below to process each resource in `fhirStoresPage`:
     *       console.log(JSON.stringify(fhirStoresPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.datasets.fhirStores.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFhirStoresResponse>;
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
        | BodyResponseCallback<Schema$ListFhirStoresResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFhirStoresResponse>,
      callback?: BodyResponseCallback<Schema$ListFhirStoresResponse>
    ): void | GaxiosPromise<Schema$ListFhirStoresResponse> {
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
            url: (rootUrl + '/v1beta1/{+parent}/fhirStores').replace(
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
        createAPIRequest<Schema$ListFhirStoresResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFhirStoresResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.patch
     * @desc Updates the configuration of the specified FHIR store.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Output only. Resource name of the FHIR store, of the form
     *     // `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().FhirStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FhirStore>;
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
        | BodyResponseCallback<Schema$FhirStore>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FhirStore>,
      callback?: BodyResponseCallback<Schema$FhirStore>
    ): void | GaxiosPromise<Schema$FhirStore> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FhirStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.fhirStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
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
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
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
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the FHIR store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Export
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the FHIR store to export resource from. The name should be in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the FHIR store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the FHIR store to import FHIR resources to. The name should be in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions
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

  export class Resource$Projects$Locations$Datasets$Fhirstores$Fhir {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.capabilities
     * @desc Gets the FHIR [capability statement](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html) for the store, which contains a description of functionality supported by the server.  Implements the FHIR standard [capabilities interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities).  On success, the response body will contain a JSON-encoded representation of a `CapabilityStatement` resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the FHIR store to retrieve the capabilities for.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.capabilities(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}/fhir/metadata').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete
     * @desc Deletes FHIR resources that match a search query.  Implements the FHIR standard [conditional delete interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.13.1). If multiple resources match, all of them will be deleted.  Search terms are provided as query parameters following the same pattern as the search method.  Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resources will be moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the FHIR store this resource belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     // The FHIR resource type to delete, such as Patient or Observation. For a
     *     // complete list, see the [FHIR Resource
     *     // Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     *     type: 'my-type',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    conditionalDelete(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete;
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
            url: (rootUrl + '/v1beta1/{+parent}/fhir/{+type}').replace(
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.conditionalPatch
     * @desc If a resource is found based on the search criteria specified in the query parameters, updates part of that resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document.  Implements the FHIR standard [conditional patch interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#patch).  Search terms are provided as query parameters following the same pattern as the search method.  If the search criteria identify more than one match, the request will return a `412 Precondition Failed` error.  The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`.  On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the FHIR store this resource belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     // The FHIR resource type to update, such as Patient or Observation. For a
     *     // complete list, see the [FHIR Resource
     *     // Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     *     type: 'my-type',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.conditionalPatch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.conditionalPatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The FHIR resource type to update, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    conditionalPatch(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch;
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
            url: (rootUrl + '/v1beta1/{+parent}/fhir/{+type}').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.conditionalUpdate
     * @desc If a resource is found based on the search criteria specified in the query parameters, updates the entire contents of that resource.  Implements the FHIR standard [conditional update interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#cond-update).  Search terms are provided as query parameters following the same pattern as the search method.  If the search criteria identify more than one match, the request will return a `412 Precondition Failed` error. If the search criteria identify zero matches, and the supplied resource body contains an `id`, and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. If the search criteria identify zero matches, and the supplied resource body does not contain an `id`, the resource will be created with a server-assigned ID as per the create method.  The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`.  On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the FHIR store this resource belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     // The FHIR resource type to update, such as Patient or Observation. For a
     *     // complete list, see the [FHIR Resource
     *     // Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     *     // Must match the resource type in the provided content.
     *     type: 'my-type',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.conditionalUpdate(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.conditionalUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The FHIR resource type to update, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html). Must match the resource type in the provided content.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    conditionalUpdate(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalupdate;
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
            url: (rootUrl + '/v1beta1/{+parent}/fhir/{+type}').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.create
     * @desc Creates a FHIR resource.  Implements the FHIR standard [create interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#create), which creates a new resource with a server-assigned resource ID.  Also supports the FHIR standard [conditional create interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#ccreate), specified by supplying an `If-None-Exist` header containing a FHIR search query. If no resources match this search query, the server processes the create operation as normal.  The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`.  On success, the response body will contain a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the FHIR store this resource belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     // The FHIR resource type to create, such as Patient or Observation. For a
     *     // complete list, see the [FHIR Resource
     *     // Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     *     // Must match the resource type in the provided content.
     *     type: 'my-type',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The FHIR resource type to create, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html). Must match the resource type in the provided content.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+parent}/fhir/{+type}').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.delete
     * @desc Deletes a FHIR resource.  Implements the FHIR standard [delete interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#delete).  Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resources will be moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to delete.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.delete(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle
     * @desc Executes all the requests in the given Bundle.  Implements the FHIR standard [batch/transaction interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#transaction).  Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the [batch processing rules](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1) and [transaction processing rules](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2).  The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`.  For a batch bundle or a successful transaction the response body will contain a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the FHIR store in which this bundle will be executed.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.executeBundle(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store in which this bundle will be executed.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    executeBundle(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+parent}/fhir').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.history
     * @desc Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store.  Implements the per-resource form of the FHIR standard [history interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#history).  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to retrieve.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.history(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.history
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.at Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm]  Clients may specify any of the following:  *  An entire year: `_at=2019` *  An entire month: `_at=2019-01` *  A specific day: `_at=2019-01-20` *  A specific second: `_at=2018-12-31T23:59:58Z`
     * @param {integer=} params.count The maximum number of search results on a page. Defaults to 1000.
     * @param {string} params.name The name of the resource to retrieve.
     * @param {string=} params.page Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of the `link.url` field returned in the response to the previous request, where `link.relation` is "first", "previous", "next" or "last".  Omit `page` if no previous request has been made.
     * @param {string=} params.since Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    history(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$History,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}/_history').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.Observation-lastn
     * @desc Retrieves the N most recent `Observation` resources for a subject matching search criteria specified as query parameters, grouped by `Observation.code`, sorted from most recent to oldest.  Implements the FHIR extended operation [Observation-lastn](http://hl7.org/implement/standards/fhir/STU3/observation-operations.html#lastn).  Search terms are provided as query parameters following the same pattern as the search method. This operation accepts an additional query parameter `max`, which specifies N, the maximum number of Observations to return from each group, with a default of 1.  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the FHIR store to retrieve resources from.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.observationLastn(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.Observation-lastn
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store to retrieve resources from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    ObservationLastn(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    ObservationLastn(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    ObservationLastn(
      params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    ObservationLastn(callback: BodyResponseCallback<Schema$HttpBody>): void;
    ObservationLastn(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn;
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
              rootUrl + '/v1beta1/{+parent}/fhir/Observation/$lastn'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.patch
     * @desc Updates part of an existing resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document.  Implements the FHIR standard [patch interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#patch).  The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`.  On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to update.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to update.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything
     * @desc Retrieves all the resources directly referenced by a patient, as well as all of the resources in the patient compartment.  Implements the FHIR extended operation [Patient-everything](http://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything).  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the `Patient` resource for which the information is required.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.patientEverything(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.end The response includes records prior to the end date. If no end date is provided, all records subsequent to the start date are in scope.
     * @param {string} params.name Name of the `Patient` resource for which the information is required.
     * @param {string=} params.pageToken Used to retrieve the next or previous page of results when using pagination. Value should be set to the value of page_token set in next or previous page links' urls. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next".  Omit `page_token` if no previous request has been made.
     * @param {string=} params.start The response includes records subsequent to the start date. If no start date is provided, all records prior to the end date are in scope.
     * @param {integer=} params._count Maximum number of resources in a page. Defaults to 100.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    PatientEverything(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patienteverything,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}/$everything').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.read
     * @desc Gets the contents of a FHIR resource.  Implements the FHIR standard [read interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#read).  Also supports the FHIR standard [conditional read interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#cread) specified by supplying an `If-Modified-Since` header with a date/time value or an `If-None-Match` header with an ETag value.  On success, the response body will contain a JSON-encoded representation of the resource. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to retrieve.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.read(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.Resource-purge
     * @desc Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method.  This is not a FHIR standard operation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to purge.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.resourcePurge(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (rootUrl + '/v1beta1/{+name}/$purge').replace(
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.search
     * @desc Searches for resources in the given FHIR store according to criteria specified as query parameters.  Implements the FHIR standard [search interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#search) using the search semantics described in the [FHIR Search specification](http://hl7.org/implement/standards/fhir/STU3/search.html).  Supports three methods of search defined by the specification:  *  `GET [base]?[parameters]` to search across all resources. *  `GET [base]/[type]?[parameters]` to search resources of a specified type. *  `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method.  The `GET` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters.  On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.  The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the [FHIR Search Parameter Registry](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html).  Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `:recurse`.  Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`.  The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. If there are additional results, the returned `Bundle` will contain pagination links.  Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases.  Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the FHIR store to retrieve resources from.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset/fhirStores/my-fhir-store',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.search(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store to retrieve resources from.
     * @param {().SearchResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+parent}/fhir/_search').replace(
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.update
     * @desc Updates the entire contents of a resource.  Implements the FHIR standard [update interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#update).  If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID.  The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request.  On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to update.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.update(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.fhirStores.fhir.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to update.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.fhirStores.fhir.vread
     * @desc Gets the contents of a version (current or historical) of a FHIR resource by version ID.  Implements the FHIR standard [vread interaction](http://hl7.org/implement/standards/fhir/STU3/http.html#vread).  On success, the response body will contain a JSON-encoded representation of the resource. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource version to retrieve.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.fhirStores.fhir.vread(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Vread,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
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
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Capabilities
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the FHIR store to retrieve the capabilities for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionaldelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
     */
    type?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Conditionalpatch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The FHIR resource type to update, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The FHIR resource type to update, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html). Must match the resource type in the provided content.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The FHIR resource type to create, such as Patient or Observation. For a complete list, see the [FHIR Resource Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html). Must match the resource type in the provided content.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the resource to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Executebundle
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm]  Clients may specify any of the following:  *  An entire year: `_at=2019` *  An entire month: `_at=2019-01` *  A specific day: `_at=2019-01-20` *  A specific second: `_at=2018-12-31T23:59:58Z`
     */
    at?: string;
    /**
     * The maximum number of search results on a page. Defaults to 1000.
     */
    count?: number;
    /**
     * The name of the resource to retrieve.
     */
    name?: string;
    /**
     * Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of the `link.url` field returned in the response to the previous request, where `link.relation` is "first", "previous", "next" or "last".  Omit `page` if no previous request has been made.
     */
    page?: string;
    /**
     * Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
     */
    since?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Observationlastn
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the FHIR store to retrieve resources from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The response includes records prior to the end date. If no end date is provided, all records subsequent to the start date are in scope.
     */
    end?: string;
    /**
     * Name of the `Patient` resource for which the information is required.
     */
    name?: string;
    /**
     * Used to retrieve the next or previous page of results when using pagination. Value should be set to the value of page_token set in next or previous page links' urls. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next".  Omit `page_token` if no previous request has been made.
     */
    pageToken?: string;
    /**
     * The response includes records subsequent to the start date. If no start date is provided, all records prior to the end date are in scope.
     */
    start?: string;
    /**
     * Maximum number of resources in a page. Defaults to 100.
     */
    _count?: number;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Read
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the resource to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Resourcepurge
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the resource to purge.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Fhir$Search
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the dataset this HL7v2 store belongs to.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl7V2StoreId The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the dataset this HL7v2 store belongs to.
     * @param {().Hl7V2Store} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2Store>;
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
        | BodyResponseCallback<Schema$Hl7V2Store>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Hl7V2Store>,
      callback?: BodyResponseCallback<Schema$Hl7V2Store>
    ): void | GaxiosPromise<Schema$Hl7V2Store> {
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
            url: (rootUrl + '/v1beta1/{+parent}/hl7V2Stores').replace(
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
        createAPIRequest<Schema$Hl7V2Store>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.delete
     * @desc Deletes the specified HL7v2 store and removes all messages that are contained within it.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the HL7v2 store to delete.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.get
     * @desc Gets the specified HL7v2 store.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the HL7v2 store to get.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2Store>;
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
        | BodyResponseCallback<Schema$Hl7V2Store>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Hl7V2Store>,
      callback?: BodyResponseCallback<Schema$Hl7V2Store>
    ): void | GaxiosPromise<Schema$Hl7V2Store> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Hl7V2Store>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.hl7V2Stores.list
     * @desc Lists the HL7v2 stores in the given dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the dataset.
     *     parent: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
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
     *     var hl7V2StoresPage = response['hl7V2Stores'];
     *     if (!hl7V2StoresPage) {
     *       return;
     *     }
     *     for (var i = 0; i < hl7V2StoresPage.length; i++) {
     *       // TODO: Change code below to process each resource in `hl7V2StoresPage`:
     *       console.log(JSON.stringify(hl7V2StoresPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.datasets.hl7V2Stores.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
     * @param {integer=} params.pageSize Limit on the number of HL7v2 stores to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHl7V2StoresResponse>;
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
        | BodyResponseCallback<Schema$ListHl7V2StoresResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHl7V2StoresResponse>,
      callback?: BodyResponseCallback<Schema$ListHl7V2StoresResponse>
    ): void | GaxiosPromise<Schema$ListHl7V2StoresResponse> {
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
            url: (rootUrl + '/v1beta1/{+parent}/hl7V2Stores').replace(
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
        createAPIRequest<Schema$ListHl7V2StoresResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListHl7V2StoresResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.patch
     * @desc Updates the HL7v2 store.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Output only. Resource name of the HL7v2 store, of the form
     *     // `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().Hl7V2Store} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Hl7V2Store>;
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
        | BodyResponseCallback<Schema$Hl7V2Store>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Hl7V2Store>,
      callback?: BodyResponseCallback<Schema$Hl7V2Store>
    ): void | GaxiosPromise<Schema$Hl7V2Store> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Hl7V2Store>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
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
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
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
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the HL7v2 store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the HL7v2 store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
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
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions
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

  export class Resource$Projects$Locations$Datasets$Hl7v2stores$Messages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.create
     * @desc Creates a message and sends a notification to the Cloud Pub/Sub topic. If configured, the MLLP adapter listens to messages created by this method and sends those back to the hospital. A successful response indicates the message has been persisted to storage and a Cloud Pub/Sub notification has been sent. Sending to the hospital by the MLLP adapter happens asynchronously.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the dataset this message belongs to.
     *     parent: 'my-parent',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the dataset this message belongs to.
     * @param {().CreateMessageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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
            url: (rootUrl + '/v1beta1/{+parent}/messages').replace(
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.delete
     * @desc Deletes an HL7v2 message.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the HL7v2 message to delete.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.get
     * @desc Gets an HL7v2 message.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the HL7v2 message to retrieve.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the HL7v2 message to retrieve.
     * @param {string=} params.view Specifies which parts of the Message resource should be returned in the response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest
     * @desc Ingests a new HL7v2 message from the hospital and sends a notification to the Cloud Pub/Sub topic. Return is an HL7v2 ACK message if the message was successfully stored. Otherwise an error is returned.  If an identical HL7v2 message is created twice only one resource is created on the server and no error is reported.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the HL7v2 store this message belongs to.
     *     parent: 'my-parent',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.ingest(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the HL7v2 store this message belongs to.
     * @param {().IngestMessageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    ingest(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IngestMessageResponse>;
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
        | BodyResponseCallback<Schema$IngestMessageResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IngestMessageResponse>,
      callback?: BodyResponseCallback<Schema$IngestMessageResponse>
    ): void | GaxiosPromise<Schema$IngestMessageResponse> {
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
            url: (rootUrl + '/v1beta1/{+parent}/messages:ingest').replace(
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
        createAPIRequest<Schema$IngestMessageResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IngestMessageResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.list
     * @desc Lists all the messages in the given HL7v2 store with support for filtering.  Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the HL7v2 store to retrieve messages from.
     *     parent: 'my-parent',  // TODO: Update placeholder value.
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
     *     var messagesPage = response['messages'];
     *     if (!messagesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < messagesPage.length; i++) {
     *       // TODO: Change code below to process each resource in `messagesPage`:
     *       console.log(JSON.stringify(messagesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts messages returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings  Fields/functions available for filtering are:  *  `message_type`, from the MSH-9 segment; for example `NOT message_type = "ADT"` *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment; for example `send_date < "2017-01-02"` *  `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment; for example `send_time < "2017-01-02T00:00:00-05:00"` *  `send_facility`, the care center that the message came from, from the MSH-4 segment; for example `send_facility = "ABC"` *  `HL7RegExp(expr)`, which does regular expression matching of `expr` against the message payload using re2 (http://code.google.com/p/re2/) syntax; for example `HL7RegExp("^.*\|.*\|EMERG")` *  `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments; for example `PatientId("123456", "MRN")` *  `labels.x`, a string value of the label with key `x` as set using the Message.labels map, for example `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label, for example `labels."priority":*`.  Limitations on conjunctions:  *  Negation on the patient ID function or the labels field is not supported, for example these queries are invalid: `NOT PatientId("123456", "MRN")`, `NOT labels."tag1":*`, `NOT labels."tag2"="val2"`. *  Conjunction of multiple patient ID functions is not supported, for example this query is invalid: `PatientId("123456", "MRN") AND PatientId("456789", "MRN")`. *  Conjunction of multiple labels fields is also not supported, for example this query is invalid: `labels."tag1":* AND labels."tag2"="val2"`. *  Conjunction of one patient ID function, one labels field and conditions on other fields is supported, for example this query is valid: `PatientId("123456", "MRN") AND labels."tag1":* AND message_type = "ADT"`.
     * @param {string=} params.orderBy Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order  Fields available for ordering are:  *  `send_time`
     * @param {integer=} params.pageSize Limit on the number of messages to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the HL7v2 store to retrieve messages from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMessagesResponse>;
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
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void | GaxiosPromise<Schema$ListMessagesResponse> {
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
            url: (rootUrl + '/v1beta1/{+parent}/messages').replace(
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
        createAPIRequest<Schema$ListMessagesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListMessagesResponse>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.patch
     * @desc Update the message.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the Message, of the form
     *     // `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`.
     *     // Assigned by the server.
     *     name: 'my-name',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.hl7V2Stores.messages.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask Only the `labels` field is allowed to be updated. The labels in the request will be merged with the existing set of labels. Existing labels with the same keys will be updated.
     * @param {().Message} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the HL7v2 message to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the HL7v2 message to retrieve.
     */
    name?: string;
    /**
     * Specifies which parts of the Message resource should be returned in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Restricts messages returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings  Fields/functions available for filtering are:  *  `message_type`, from the MSH-9 segment; for example `NOT message_type = "ADT"` *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment; for example `send_date < "2017-01-02"` *  `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment; for example `send_time < "2017-01-02T00:00:00-05:00"` *  `send_facility`, the care center that the message came from, from the MSH-4 segment; for example `send_facility = "ABC"` *  `HL7RegExp(expr)`, which does regular expression matching of `expr` against the message payload using re2 (http://code.google.com/p/re2/) syntax; for example `HL7RegExp("^.*\|.*\|EMERG")` *  `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments; for example `PatientId("123456", "MRN")` *  `labels.x`, a string value of the label with key `x` as set using the Message.labels map, for example `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label, for example `labels."priority":*`.  Limitations on conjunctions:  *  Negation on the patient ID function or the labels field is not supported, for example these queries are invalid: `NOT PatientId("123456", "MRN")`, `NOT labels."tag1":*`, `NOT labels."tag2"="val2"`. *  Conjunction of multiple patient ID functions is not supported, for example this query is invalid: `PatientId("123456", "MRN") AND PatientId("456789", "MRN")`. *  Conjunction of multiple labels fields is also not supported, for example this query is invalid: `labels."tag1":* AND labels."tag2"="val2"`. *  Conjunction of one patient ID function, one labels field and conditions on other fields is supported, for example this query is valid: `PatientId("123456", "MRN") AND labels."tag1":* AND message_type = "ADT"`.
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
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask Only the `labels` field is allowed to be updated. The labels in the request will be merged with the existing set of labels. Existing labels with the same keys will be updated.
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
     * healthcare.projects.locations.datasets.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset/operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.operations.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * healthcare.projects.locations.datasets.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Healthcare API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/healthcare
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var cloudHealthcare = google.cloudhealthcare('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location/datasets/my-dataset',  // TODO: Update placeholder value.
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
     *       // TODO: Change code below to process each resource in `operationsPage`:
     *       console.log(JSON.stringify(operationsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudHealthcare.projects.locations.datasets.operations.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudHealthcare.projects.locations.datasets.operations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
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
      params?: Params$Resource$Projects$Locations$Datasets$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
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
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
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
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Operations$List
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
