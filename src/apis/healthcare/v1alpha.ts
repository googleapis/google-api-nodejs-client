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

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace healthcare_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
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
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
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
   * const healthcare = google.healthcare('v1alpha');
   *
   * @namespace healthcare
   * @type {Function}
   * @version v1alpha
   * @variation v1alpha
   * @param {object=} options Options for Healthcare
   */
  export class Healthcare {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {_options: options || {}, google};

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * An annotation record.
   */
  export interface Schema$Annotation {
    /**
     * Details of the source.
     */
    annotationSource?: Schema$AnnotationSource;
    /**
     * Annnotations for images, e.g., bounding polygons.
     */
    imageAnnotation?: Schema$ImageAnnotation;
    /**
     * Output only. Resource name of the Annotation, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}`.
     */
    name?: string;
    /**
     * Annotations for resource, e.g., classification tags.
     */
    resourceAnnotation?: Schema$ResourceAnnotation;
    /**
     * Annotations for sentitive texts, e.g., range of such texts.
     */
    textAnnotation?: Schema$SensitiveTextAnnotation;
  }
  /**
   * AnnotationSource holds the source information of the annotation.
   */
  export interface Schema$AnnotationSource {
    /**
     * Cloud Healthcare API resource.
     */
    cloudHealthcareSource?: Schema$CloudHealthcareSource;
  }
  /**
   * An Annotation store that can store annotation resources such as labels and
   * tags for text, image and audio.
   */
  export interface Schema$AnnotationStore {
    /**
     * User-supplied key-value pairs used to organize Annotation stores.  Label
     * keys must be between 1 and 63 characters long, have a UTF-8 encoding of
     * maximum 128 bytes, and must conform to the following PCRE regular
     * expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be
     * between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
     * bytes, and must conform to the following PCRE regular expression:
     * [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated
     * with a given store.
     */
    labels?: {[key: string]: string;};
    /**
     * Output only. Resource name of the Annotation store, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.
     */
    name?: string;
  }
  /**
   * Specifies the audit configuration for a service. The configuration
   * determines which permission types are logged, and what identities, if any,
   * are exempted from logging. An AuditConfig must have one or more
   * AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a
   * specific service, the union of the two AuditConfigs is used for that
   * service: the log_types specified in each AuditConfig are enabled, and the
   * exempted_members in each AuditLogConfig are exempted.  Example Policy with
   * multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {
   * &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;:
   * [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
   * &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
   * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] },
   * {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
   * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
   * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
   * &quot;user:bar@gmail.com&quot;               ]             }           ] }
   * ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and
   * ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
   * and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example,
     * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
     * special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: {
   * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
   * &quot;user:foo@gmail.com&quot;           ]         },         {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
   * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while
   * exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
  }
  /**
   * The BigQuery table to which the output should be written.
   */
  export interface Schema$BigQueryDestination {
    /**
     * Required. The BigQuery dataset to which the DICOM store should be
     * exported. If this dataset does not exist, the export call returns an
     * error.
     */
    dataset?: string;
    /**
     * If the destination table already exists and this flag is `TRUE`, the
     * table will be overwritten by the contents of the DICOM store. If the flag
     * is not set and the destination table already exists, the export call
     * returns an error.
     */
    overwriteTable?: boolean;
    /**
     * Required. The BigQuery table to which the DICOM store should be written.
     * If this table does not exist, a new table with the given name will be
     * created.
     */
    table?: string;
  }
  /**
   * BigQuery dataset location.
   */
  export interface Schema$BigQueryLocation {
    /**
     * ID of the dataset that houses the BigQuery tables.
     */
    datasetId?: string;
    /**
     * ID of the project that owns the BigQuery datasets.
     */
    projectId?: string;
    /**
     * The configuration for the exported BigQuery schema.
     */
    schemaConfig?: Schema$SchemaConfig;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: an unsatisfied
     * condition will not allow user access via current binding. Different
     * bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain
     * (primary) that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$BoundingPoly {
    label?: string;
    vertices?: Schema$Vertex[];
  }
  /**
   * Cloud Healthcare API resource.
   */
  export interface Schema$CloudHealthcareSource {
    /**
     * Full path of a Cloud Healthcare API resource.
     */
    name?: string;
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
   * A message representing a health dataset.  A health dataset represents a
   * collection of healthcare data pertaining to one or more patients. This may
   * include multiple modalities of healthcare data, such as electronic medical
   * records or medical imaging data.
   */
  export interface Schema$Dataset {
    /**
     * Output only. Resource name of the dataset, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string;
    /**
     * The default timezone used by this dataset. Must be a either a valid IANA
     * time zone name such as &quot;America/New_York&quot; or empty, which
     * defaults to UTC. This is used for parsing times in resources (e.g., HL7
     * messages) where no explicit timezone is specified.
     */
    timeZone?: string;
  }
  /**
   * Configures de-id options specific to different types of content. Each
   * submessage customizes the handling of an
   * https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are
   * applied in a nested manner at runtime.
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
     * Configures de-identification of image pixels wherever they are found in
     * the source_dataset.
     */
    image?: Schema$ImageConfig;
  }
  /**
   * Redacts identifying information from the specified dataset.
   */
  export interface Schema$DeidentifyDatasetRequest {
    /**
     * Deidentify configuration
     */
    config?: Schema$DeidentifyConfig;
    /**
     * The name of the dataset resource to which the redacted data should be
     * written (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     * The new dataset must not exist, or the request will fail.
     */
    destinationDataset?: string;
  }
  /**
   * Contains multiple sensitive information findings for each resource slice.
   */
  export interface Schema$Detail {
    findings?: Schema$Finding[];
  }
  /**
   * Specifies the parameters needed for de-identification of DICOM stores.
   */
  export interface Schema$DicomConfig {
    /**
     * Tags to be whitelisted, for example &quot;PatientID&quot;,
     * &quot;0010,0010&quot;. Any tag that is whitelisted will copied as is. All
     * other tags will be omitted.
     */
    whitelistTags?: string[];
  }
  /**
   * Represents a DICOM store.
   */
  export interface Schema$DicomStore {
    /**
     * Output only. Resource name of the DICOM store, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    name?: string;
    /**
     * Notification destination for new DICOM instances. Supplied by the client.
     */
    notificationConfig?: Schema$NotificationConfig;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Exports data from the specified DICOM store. If a given resource (e.g., a
   * DICOM object with the same SOPInstance UID) already exists in the output,
   * it is overwritten with the version in the source dataset. Exported DICOM
   * data will persist when the DICOM store from which it was exported is
   * deleted.
   */
  export interface Schema$ExportDicomDataRequest {
    /**
     * Specifies where the exported data should be placed.
     */
    outputConfig?: Schema$OutputConfig;
  }
  /**
   * Request to export resources.
   */
  export interface Schema$ExportResourcesRequest {
    /**
     * The BigQuery destination location. The output will be one BigQuery table
     * per resource type.
     */
    bigqueryDestinationLocation?: Schema$BigQueryLocation;
    /**
     * The Cloud Storage destination location. Specify a path to a Cloud Storage
     * bucket or folder rather than a concrete object. The exported outputs are
     * organized by FHIR resource types. The server will create one object per
     * resource type. Each object contains newline delimited JSON, and each line
     * is a FHIR resource.
     */
    gcsDestinationLocation?: Schema$GcsDataLocation;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account
   * presence&quot;     description: &quot;Determines whether the request has a
   * user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in Common Expression Language
     * syntax.  The application context of the containing message determines
     * which well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing its
     * purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
  }
  /**
   * Specifies how de-identification of a FHIR store should be handled.
   */
  export interface Schema$FhirConfig {}
  /**
   * Represents a FHIR store.
   */
  export interface Schema$FhirStore {
    /**
     * Whether to disable referential integrity in this FHIR store. This field
     * is immutable after FHIR store creation. The default value is false,
     * meaning that the API will enforce referential integrity and fail the
     * requests that will result in inconsistent state in the FHIR store. When
     * this field is set to true, the API will skip referential integrity check.
     * Consequently, operations that rely on references, such as
     * GetPatientEverything, will not return all the results if broken
     * references exist.
     */
    disableReferentialIntegrity?: boolean;
    /**
     * Whether to disable resource versioning for this FHIR store. This field
     * can not be changed after the creation of FHIR store. If set to false,
     * which is the default behavior, all write operations will cause historical
     * versions to be recorded automatically. The historical versions can be
     * fetched through the history APIs, but cannot be updated. If set to true,
     * no historical versions will be kept. The server will send back errors for
     * attempts to read the historical versions.
     */
    disableResourceVersioning?: boolean;
    /**
     * Whether this FHIR store has the [updateCreate
     * capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate).
     * This determines if the client can use an Update operation to create a new
     * resource with a client-specified ID. If false, all IDs are
     * server-assigned through the Create operation and attempts to Update a
     * non-existent resource will return errors. Please treat the audit logs
     * with appropriate levels of care if client-specified resource IDs contain
     * sensitive data such as patient identifiers, those IDs will be part of the
     * FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
     * notifications.
     */
    enableUpdateCreate?: boolean;
    /**
     * Output only. Resource name of the FHIR store, of the form
     * `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    name?: string;
    /**
     * If non-empty, publish all resource modifications of this FHIR store to
     * this destination. The Cloud Pub/Sub message attributes will contain a map
     * with a string describing the action that has triggered the notification,
     * e.g. &quot;action&quot;:&quot;CreateResource&quot;.
     */
    notificationConfig?: Schema$NotificationConfig;
  }
  export interface Schema$Finding {
    /**
     * Zero-based ending index of the found text, exclusively.
     */
    end?: string;
    /**
     * The type of information stored in this text range (e.g. HumanName,
     * BirthDate, Address, etc.)
     */
    infoType?: string;
    /**
     * Zero-based starting index of the found text, inclusively.
     */
    start?: string;
  }
  /**
   * Google Cloud Storage location.
   */
  export interface Schema$GcsDataLocation {
    /**
     * The gcs_uri must be in the format &quot;gs://bucket/path/to/object&quot;.
     * The gcs_uri may include wildcards in the &quot;path/to/object&quot; part
     * to to indicate potential matching of multiple objects. Supported
     * wildcards:   &#39;*&#39; to match 0 or more non-separator characters
     * &#39;**&#39; to match 0 or more characters (including separators). Only
     * supported at the end of a path and with no other wildcards.   &#39;?&#39;
     * to match 1 character.
     */
    gcsUri?: string;
  }
  /**
   * The Google Cloud Storage location to which the output should be written.
   */
  export interface Schema$GcsDestination {
    /**
     * MIME types supported by DICOM spec. Each file will be written in the
     * following format:
     * `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}`
     * The frame_number component will exist only for multi-frame instances.
     * Refer to the DICOM conformance statement for permissible MIME types:
     * https://cloud.google.com/healthcare/docs/dicom#wado-rs  The following
     * extensions will be used for output files:   application/dicom -&gt; .dcm
     * image/jpeg -&gt; .jpg   image/png -&gt; .png  If unspecified, the
     * instances will be exported in their original DICOM format.
     */
    mimeType?: string;
    /**
     * URI for a Google Cloud Storage directory to which result files should be
     * written (e.g., `gs://bucket-id/path/to/destination/dir`). If there is no
     * trailing slash, the service will append one when composing the object
     * path. The user is responsible for creating the Google Cloud Storage
     * bucket referenced in `uri_prefix`.
     */
    uriPrefix?: string;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {}
  /**
   * Final response of exporting resources. This structure will be included in
   * the response to describe the detailed outcome. It will only be included
   * when the operation finishes.
   */
  export interface Schema$GoogleCloudHealthcareV1alphaFhirRestExportResourcesResponse {
    /**
     * The FHIR store name of the resources that have been exported, in the
     * format
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    name?: string;
    /**
     * The total number of resources exported from the requested FHIR store.
     */
    resourceCount?: string;
  }
  /**
   * Final response of importing resources. This structure will be included in
   * the response to describe the detailed outcome. It will only be included
   * when the operation finishes.
   */
  export interface Schema$GoogleCloudHealthcareV1alphaFhirRestImportResourcesResponse {
    /**
     * The number of resources that had errors.
     */
    errorCount?: string;
    /**
     * The total number of resources included in the source data. This is the
     * sum of the success and error counts.
     */
    inputSize?: string;
    /**
     * The FHIR store name the resources have been imported to, in the format
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    name?: string;
    /**
     * The number of resources that have been imported.
     */
    successCount?: string;
  }
  /**
   * The Google Cloud Storage location for the input content.
   */
  export interface Schema$GoogleCloudHealthcareV1alphaGcsSource {
    /**
     * Points to a [Google Cloud Storage](https://cloud.google.com/storage/) URI
     * containing file(s) with content only. The URI must be in the following
     * format: `gs://bucket-id/object-id`. The URI can include wildcards in
     * `object-id` and thus identify multiple files. Supported wildcards:
     * &#39;*&#39; to match 0 or more non-separator characters  &#39;**&#39; to
     * match 0 or more characters (including separators). Must be used at the
     * end of a path and with no other wildcards in the       path. Can also be
     * used with a file extension (such as .dcm), which       imports all files
     * with the extension in the specified directory and       its
     * sub-directories. For example,       `gs://bucket-id/directory-id/**.dcm`
     * imports all files with .dcm       extensions in `directory-id/` and its
     * sub-directories.  &#39;?&#39; to match 1 character Returns
     * [google.rpc.Code.INVALID_ARGUMENT] for all other URI formats. Files
     * matching the wildcard are expected to contain content only, no metadata.
     */
    contentUri?: string;
  }
  /**
   * Represents an HL7v2 store.
   */
  export interface Schema$Hl7V2Store {
    /**
     * Output only. Resource name of the HL7v2 store, of the form
     * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     */
    name?: string;
    /**
     * The notification destination all messages (both Ingest &amp; Create) are
     * published on. Only the message name is sent as part of the notification.
     * If this is unset, no notifications will be sent. Supplied by the client.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * The configuration for the parser. It determines how the server parses the
     * messages.
     */
    parserConfig?: Schema$ParserConfig;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for
   * payload formats that can&#39;t be represented as JSON, such as raw binary
   * or an HTML page.   This message can be used both in streaming and
   * non-streaming API methods in the request as well as the response.  It can
   * be used as a top-level request field, which is convenient if one wants to
   * extract parameters from either the URL or HTTP template into the request
   * fields and also want access to the raw HTTP body.  Example:      message
   * GetResourceRequest {       // A unique request id.       string request_id
   * = 1;        // The raw HTTP body is bound to this field.
   * google.api.HttpBody http_body = 2;     }      service ResourceService { rpc
   * GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc
   * UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty);     }
   * Example with streaming methods:      service CaldavService {       rpc
   * GetCalendar(stream google.api.HttpBody)         returns (stream
   * google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)
   * returns (stream google.api.HttpBody);     }  Use of this type only changes
   * how the request and response bodies are handled, all other features will
   * continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the
     * body.
     */
    contentType?: string;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string;
    /**
     * Application specific response metadata. Must be set in the first response
     * for streaming APIs.
     */
    extensions?: Array<{[key: string]: any;}>;
  }
  /**
   * Image annotation.
   */
  export interface Schema$ImageAnnotation {
    /**
     * The list of polygons outlining the sensitive regions in the image.
     */
    boundingPolys?: Schema$BoundingPoly[];
  }
  /**
   * Specifies how de-identification of image pixel should be handled.
   */
  export interface Schema$ImageConfig {
    /**
     * If true, all text found in the image is redacted.
     */
    redactAllText?: boolean;
  }
  /**
   * Returns the errors encountered during DICOM store import.
   */
  export interface Schema$ImportDicomDataErrorDetails {
    /**
     * Contains errors encountered in imports of individual resources (e.g., a
     * Google Cloud Storage object).
     */
    errors?: Schema$ImportError[];
  }
  /**
   * Imports data into the specified DICOM store. Returns an error if any of the
   * files to import are not DICOM files. This API will accept duplicate DICOM
   * instances, by simply ignoring the newly pushed instance (it will not
   * overwrite).
   */
  export interface Schema$ImportDicomDataRequest {
    /**
     * Specifies where the imported data resides.
     */
    inputConfig?: Schema$InputConfig;
  }
  /**
   * Contains error status for each import failure.
   */
  export interface Schema$ImportError {
    /**
     * Resource name.
     */
    resource?: string;
    /**
     * Error status associated with resource.
     */
    status?: Schema$Status;
  }
  /**
   * Request to import resources. The FHIR resources to be imported must have
   * client supplied IDs. The server will retain the resource IDs. The import
   * operation is idempotent. Retry will overwrite existing data identified by
   * client supplied IDs. The import operation is not transactional. The server
   * will not roll back any committed changes upon partial failures.
   */
  export interface Schema$ImportResourcesRequest {
    /**
     * The content structure in the source location. The default is BUNDLE.
     */
    contentStructure?: string;
    /**
     * The Cloud Storage bucket/folder path to write files that contain error
     * details.
     */
    gcsErrorLocation?: Schema$GcsDataLocation;
    /**
     * Cloud Storage source data locations. Each Cloud Storage object should be
     * a text file that contains newline delimited JSON structures conforming to
     * FHIR standard.
     */
    gcsSourceLocation?: Schema$GcsDataLocation;
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
   * Acknowledges that a message has been ingested into the specified HL7v2
   * store.
   */
  export interface Schema$IngestMessageResponse {
    /**
     * HL7v2 ACK message.
     */
    hl7Ack?: string;
    /**
     * Created message resource.
     */
    message?: Schema$Message;
  }
  /**
   * Specifies the location(s) from which data should be imported.
   */
  export interface Schema$InputConfig {
    /**
     * Files on Google Cloud Storage. To enable the Cloud Healthcare API to read
     * from resources in your project (e.g. Google Cloud Storage buckets), you
     * must give the consumer Cloud Healthcare API service account the proper
     * permissions. The service account is:
     * `service-{PROJECT_NUMBER}@gcp-sa-healthcare.iam.gserviceaccount.com`. The
     * PROJECT_NUMBER identifies the project that contains the source Google
     * Cloud Storage bucket. To get the project number, go to the GCP Console
     * Dashboard.  GcsSource requires the `roles/storage.objectViewer` Cloud IAM
     * role.
     */
    gcsSource?: Schema$GoogleCloudHealthcareV1alphaGcsSource;
  }
  /**
   * Lists the Annotations in the specified Annotation store.
   */
  export interface Schema$ListAnnotationsResponse {
    /**
     * The returned Annotations names. Won&#39;t be more values than the value
     * of page_size in the request.
     */
    annotations?: string[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Lists the Annotation stores in the given dataset.
   */
  export interface Schema$ListAnnotationStoresResponse {
    /**
     * The returned Annotation stores. Won&#39;t be more Annotation stores than
     * the value of page_size in the request.
     */
    annotationStores?: Schema$AnnotationStore[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
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
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Lists the DICOM stores in the given dataset.
   */
  export interface Schema$ListDicomStoresResponse {
    /**
     * The returned DICOM stores. Won&#39;t be more DICOM stores than the value
     * of page_size in the request.
     */
    dicomStores?: Schema$DicomStore[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Lists the FHIR stores in the given dataset.
   */
  export interface Schema$ListFhirStoresResponse {
    /**
     * The returned FHIR stores. Won&#39;t be more FHIR stores than the value of
     * page_size in the request.
     */
    fhirStores?: Schema$FhirStore[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Lists the HL7v2 stores in the given dataset.
   */
  export interface Schema$ListHl7V2StoresResponse {
    /**
     * The returned HL7v2 stores. Won&#39;t be more HL7v2 stores than the value
     * of page_size in the request.
     */
    hl7V2Stores?: Schema$Hl7V2Store[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
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
    nextPageToken?: string;
  }
  /**
   * Lists the messages in the specified HL7v2 store.
   */
  export interface Schema$ListMessagesResponse {
    /**
     * The returned message names. Won&#39;t be more values than the value of
     * page_size in the request.
     */
    messages?: string[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
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
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string;};
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: {[key: string]: any;};
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * A complete HL7v2 message. See
   * http://www.hl7.org/implement/standards/index.cfm?ref=common for details on
   * the standard.
   */
  export interface Schema$Message {
    /**
     * The datetime when the message was created. Set by the server.
     */
    createTime?: string;
    /**
     * Raw message bytes.
     */
    data?: string;
    /**
     * User-supplied key-value pairs used to organize HL7v2 stores.  Label keys
     * must be between 1 and 63 characters long, have a UTF-8 encoding of
     * maximum 128 bytes, and must conform to the following PCRE regular
     * expression: \p{Ll}\p{Lo}{0,62}  Label values are optional, must be
     * between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
     * bytes, and must conform to the following PCRE regular expression:
     * [\p{Ll}\p{Lo}\p{N}_-]{0,63}  No more than 64 labels can be associated
     * with a given store.
     */
    labels?: {[key: string]: string;};
    /**
     * The message type and trigger event for this message. MSH-9.
     */
    messageType?: string;
    /**
     * Resource name of the Message, of the form
     * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`.
     * Assigned by the server.
     */
    name?: string;
    /**
     * The parsed version of the raw message data.
     */
    parsedData?: Schema$ParsedData;
    /**
     * All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this
     * message.
     */
    patientIds?: Schema$PatientId[];
    /**
     * The hospital that this message came from. MSH-4.
     */
    sendFacility?: string;
    /**
     * The datetime the sending application sent this message. MSH-7.
     */
    sendTime?: string;
  }
  /**
   * Specifies where notifications should be sent upon changes to a data store.
   */
  export interface Schema$NotificationConfig {
    /**
     * The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that
     * notifications of changes are published on. Supplied by the client.
     * PubsubMessage.Data will contain the resource name.
     * PubsubMessage.MessageId is the ID of this message. It is guaranteed to be
     * unique within the topic. PubsubMessage.PublishTime is the time at which
     * the message was published. Notifications are only sent if the topic is
     * non-empty. [Topic
     * names](https://cloud.google.com/pubsub/docs/overview#names) must be
     * scoped to a project. cloud-healthcare@system.gserviceaccount.com must
     * have publisher permissions on the given Cloud Pub/Sub topic. Not having
     * adequate permissions will cause the calls that send notifications to
     * fail.
     */
    pubsubTopic?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any;};
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any;};
  }
  /**
   * OperationMetadata provides information about the operation execution.
   * Returned in the long-running operation&#39;s metadata field.
   */
  export interface Schema$OperationMetadata {
    /**
     * The name of the API method that initiated the operation.
     */
    apiMethodName?: string;
    counter?: Schema$ProgressCounter;
    /**
     * The time at which the operation was created by the API.
     */
    createTime?: string;
    /**
     * The time at which execution was completed.
     */
    endTime?: string;
  }
  /**
   * Specifies the location(s) to which data should be exported.
   */
  export interface Schema$OutputConfig {
    /**
     * BigQueryDestination requires two IAM roles: `roles/bigquery.dataEditor`
     * and `roles/bigquery.jobUser`.
     */
    bigQueryDestination?: Schema$BigQueryDestination;
    /**
     * GcsDestination requires `roles/storage.objectAdmin` Cloud IAM role. Note
     * that writing a file to the same destination multiple times will result in
     * the previous version of the file being overwritten.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * The content of a HL7v2 message in a structured format.
   */
  export interface Schema$ParsedData {
    segments?: Schema$Segment[];
  }
  /**
   * The configuration for the parser. It determines how the server parses the
   * messages.
   */
  export interface Schema$ParserConfig {
    /**
     * Determines whether messages with no header are allowed.
     */
    allowNullHeader?: boolean;
    /**
     * Byte(s) to be used as the segment terminator. If this is unset,
     * &#39;\r&#39; will be used as segment terminator.
     */
    segmentTerminator?: string;
  }
  /**
   * A patient identifier and associated type.
   */
  export interface Schema$PatientId {
    /**
     * ID type, e.g. MRN or NHS.
     */
    type?: string;
    /**
     * The patient&#39;s unique identifier.
     */
    value?: string;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * ProgressCounter provides counters to describe an operation&#39;s progress.
   */
  export interface Schema$ProgressCounter {
    /**
     * The number of units that failed in the operation.
     */
    failure?: string;
    /**
     * The number of units that are pending in the operation.
     */
    pending?: string;
    /**
     * The number of units that succeeded in the operation.
     */
    success?: string;
  }
  /**
   * Resource level annotation.
   */
  export interface Schema$ResourceAnnotation {
    label?: string;
  }
  /**
   * Configuration for the FHIR BigQuery schema. Determines how the server
   * generates the schema.
   */
  export interface Schema$SchemaConfig {
    /**
     * The depth for all recursive structures in the output analytics schema.
     * For example, concept in the CodeSystem resource is a recursive structure;
     * when the depth is 2, the CodeSystem table will have a column called
     * `concept.concept` but not `concept.concept.concept`. If not specified or
     * set to 0, the server will use the default value 2.
     */
    recursiveStructureDepth?: string;
    /**
     * Specifies the output schema type. If unspecified, the default is
     * `LOSSLESS`.
     */
    schemaType?: string;
  }
  /**
   * Request to search the resources in the specified FHIR store.
   */
  export interface Schema$SearchResourcesRequest {
    /**
     * The type of the resource to search.
     */
    resourceType?: string;
  }
  /**
   * A segment in a structured format.
   */
  export interface Schema$Segment {
    /**
     * A mapping from the positional location to the value. The key string uses
     * indexes separated by dots to identify Fields, components and
     * sub-components. To be consistent with how the standard refers to
     * different parts of message, we use zero-based indexes for fields and
     * one-based indexes for components and sub-components. A bracket notation
     * is also used to identify different instances of a repeated field.
     * Zero-based indexes are used to refer to each instance. Regex for key:
     * (\d+)(\[\d+\])?(.\d+)?(.\d+)?  Examples of (key, value) pairs:  (0.1,
     * &quot;foo&quot;) denotes First component of Field 0 has the value
     * &quot;foo&quot;.  (1.1.2, &quot;bar&quot;) denotes Second sub-component
     * of the first component of Field 1 has the value &quot;bar&quot;. (1[0].1,
     * &quot;baz&quot;) denotes First component of the first Instance of Field
     * 1, which is repeated, has the value &quot;baz&quot;.
     */
    fields?: {[key: string]: string;};
    /**
     * A string that indicates the type of segment, e.g., EVN, PID.
     */
    segmentId?: string;
    /**
     * Set ID for segments that can be in a set. This can be empty if it is
     * missing or it is not applicable.
     */
    setId?: string;
  }
  /**
   * A TextAnnotation specifies a text range that includes sensitive
   * information.
   */
  export interface Schema$SensitiveTextAnnotation {
    /**
     * Maps from a resource slice (e.g. FHIR resource field path) to a set of
     * sensitive text findings. For example, Appointment.Narrative text1 --&gt;
     * {findings_1, findings_2, findings_3}
     */
    details?: {[key: string]: Schema$Detail;};
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify.
     * Only the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used: paths: &quot;bindings, etag&quot; This
     * field is only used by Cloud IAM.
     */
    updateMask?: string;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     * For more information see [IAM
     * Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }
  /**
   * A 2D coordinate in an image. The origin is the top-left.
   */
  export interface Schema$Vertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
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
     * @alias healthcare.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Location>;
    get(params: Params$Resource$Projects$Locations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(params: Params$Resource$Projects$Locations$Get,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Get|
        BodyResponseCallback<Schema$Location>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback?: BodyResponseCallback<Schema$Location>):
        void|GaxiosPromise<Schema$Location> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Get;
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
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
        options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|GaxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$List;
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
              url: (rootUrl + '/v1alpha/{+name}/locations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    annotationStores: Resource$Projects$Locations$Datasets$Annotationstores;
    dicomStores: Resource$Projects$Locations$Datasets$Dicomstores;
    fhirStores: Resource$Projects$Locations$Datasets$Fhirstores;
    hl7V2Stores: Resource$Projects$Locations$Datasets$Hl7v2stores;
    operations: Resource$Projects$Locations$Datasets$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotationStores =
          new Resource$Projects$Locations$Datasets$Annotationstores(
              this.context);
      this.dicomStores =
          new Resource$Projects$Locations$Datasets$Dicomstores(this.context);
      this.fhirStores =
          new Resource$Projects$Locations$Datasets$Fhirstores(this.context);
      this.hl7V2Stores =
          new Resource$Projects$Locations$Datasets$Hl7v2stores(this.context);
      this.operations =
          new Resource$Projects$Locations$Datasets$Operations(this.context);
    }


    /**
     * healthcare.projects.locations.datasets.create
     * @desc Creates a new health dataset.
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
        options?: MethodOptions): GaxiosPromise<Schema$Dataset>;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Create,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    create(callback: BodyResponseCallback<Schema$Dataset>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Create|
        BodyResponseCallback<Schema$Dataset>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Create;
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
              url: (rootUrl + '/v1alpha/{+parent}/datasets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.deidentify
     * @desc Creates a new dataset containing de-identified data from the source
     * dataset. The metadata field type is OperationMetadata. If the request is
     * successful, the response field type is DeidentifySummary. If errors
     * occur, details field type is DeidentifyErrorDetails.
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
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    deidentify(
        params: Params$Resource$Projects$Locations$Datasets$Deidentify,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    deidentify(
        params: Params$Resource$Projects$Locations$Datasets$Deidentify,
        callback: BodyResponseCallback<Schema$Operation>): void;
    deidentify(callback: BodyResponseCallback<Schema$Operation>): void;
    deidentify(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Deidentify|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Deidentify;
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
              url: (rootUrl + '/v1alpha/{+sourceDataset}:deidentify')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['sourceDataset'],
        pathParams: ['sourceDataset'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.delete
     * @desc Deletes the specified health dataset and all data contained in the
     * dataset. Deleting a dataset does not affect the sources from which the
     * dataset was imported (if any).
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
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Delete;
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
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
     * @alias healthcare.projects.locations.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the dataset to read (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Datasets$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Dataset>;
    get(params: Params$Resource$Projects$Locations$Datasets$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    get(params: Params$Resource$Projects$Locations$Datasets$Get,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Get|
        BodyResponseCallback<Schema$Dataset>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Get;
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
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty
     * policy if the resource exists and does not have a policy set.
     * @alias healthcare.projects.locations.datasets.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
        params: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params: Params$Resource$Projects$Locations$Datasets$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Getiampolicy;
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
              url: (rootUrl + '/v1alpha/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
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
        options?: MethodOptions): GaxiosPromise<Schema$ListDatasetsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Datasets$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Datasets$List,
        callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$List|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        callback?: BodyResponseCallback<Schema$ListDatasetsResponse>):
        void|GaxiosPromise<Schema$ListDatasetsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$List;
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
              url: (rootUrl + '/v1alpha/{+parent}/datasets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
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
        options?: MethodOptions): GaxiosPromise<Schema$Dataset>;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Patch,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Patch|
        BodyResponseCallback<Schema$Dataset>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Patch;
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
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces
     * any existing policy.
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
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
        params: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params: Params$Resource$Projects$Locations$Datasets$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Setiampolicy;
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
              url: (rootUrl + '/v1alpha/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
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
        options?: MethodOptions):
        GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Locations$Datasets$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the dataset that is being created. The string must match the
     * following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     */
    datasetId?: string;
    /**
     * The name of the project in which the dataset should be created (e.g.,
     * `projects/{project_id}/locations/{location_id}`).
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Source dataset resource name. (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     */
    sourceDataset?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeidentifyDatasetRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the dataset to delete (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the dataset to read (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Getiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of items to return. Capped to 100 if not specified.
     * May not be larger than 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the project whose datasets should be listed (e.g.,
     * `projects/{project_id}/locations/{location_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Patch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Resource name of the dataset, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Annotationstores {
    context: APIRequestContext;
    annotations:
        Resource$Projects$Locations$Datasets$Annotationstores$Annotations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotations =
          new Resource$Projects$Locations$Datasets$Annotationstores$Annotations(
              this.context);
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.create
     * @desc Creates a new Annotation store within the parent dataset.
     * @alias healthcare.projects.locations.datasets.annotationStores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.annotationStoreId The ID of the Annotation store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the dataset this Annotation store belongs to.
     * @param {().AnnotationStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Create,
        options?: MethodOptions): GaxiosPromise<Schema$AnnotationStore>;
    create(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Create,
        options: MethodOptions|BodyResponseCallback<Schema$AnnotationStore>,
        callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    create(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Create,
        callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    create(callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Create|
        BodyResponseCallback<Schema$AnnotationStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnnotationStore>,
        callback?: BodyResponseCallback<Schema$AnnotationStore>):
        void|GaxiosPromise<Schema$AnnotationStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/annotationStores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$AnnotationStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.delete
     * @desc Deletes the specified Annotation store and removes all annotations
     * that are contained within it.
     * @alias healthcare.projects.locations.datasets.annotationStores.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Annotation store to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.get
     * @desc Gets the specified Annotation store or returns NOT_FOUND if it does
     * not exist.
     * @alias healthcare.projects.locations.datasets.annotationStores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Annotation store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Get,
        options?: MethodOptions): GaxiosPromise<Schema$AnnotationStore>;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Get,
        options: MethodOptions|BodyResponseCallback<Schema$AnnotationStore>,
        callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Get,
        callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    get(callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Get|
        BodyResponseCallback<Schema$AnnotationStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnnotationStore>,
        callback?: BodyResponseCallback<Schema$AnnotationStore>):
        void|GaxiosPromise<Schema$AnnotationStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$AnnotationStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns NOT_FOUND
     * error if the resource does not exist. Returns an empty policy if the
     * resource exists but does not have a policy set.  Authorization requires
     * the Google IAM permission `healthcare.AnnotationStores.getIamPolicy` on
     * the specified resource
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.list
     * @desc Lists the Annotation stores in the given dataset for a source
     * store.
     * @alias healthcare.projects.locations.datasets.annotationStores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
     * @param {integer=} params.pageSize Limit on the number of Annotation stores to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$List,
        options?: MethodOptions):
        GaxiosPromise<Schema$ListAnnotationStoresResponse>;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAnnotationStoresResponse>,
        callback: BodyResponseCallback<Schema$ListAnnotationStoresResponse>):
        void;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$List,
        callback: BodyResponseCallback<Schema$ListAnnotationStoresResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListAnnotationStoresResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$List|
        BodyResponseCallback<Schema$ListAnnotationStoresResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAnnotationStoresResponse>,
        callback?: BodyResponseCallback<Schema$ListAnnotationStoresResponse>):
        void|GaxiosPromise<Schema$ListAnnotationStoresResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/annotationStores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$ListAnnotationStoresResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAnnotationStoresResponse>(
            parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.patch
     * @desc Updates the specified Annotation store.
     * @alias healthcare.projects.locations.datasets.annotationStores.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the Annotation store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().AnnotationStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch,
        options?: MethodOptions): GaxiosPromise<Schema$AnnotationStore>;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$AnnotationStore>,
        callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch,
        callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    patch(callback: BodyResponseCallback<Schema$AnnotationStore>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch|
        BodyResponseCallback<Schema$AnnotationStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnnotationStore>,
        callback?: BodyResponseCallback<Schema$AnnotationStore>):
        void|GaxiosPromise<Schema$AnnotationStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$AnnotationStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.setIamPolicy
     * @desc POLICIES Sets the access control policy for a resource. Replaces
     * any existing policy.  Authorization requires the Google IAM permission
     * 'healthcare.annotationStores.setIamPolicy' on the specified resource
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.setIamPolicy
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  There is no permission required to
     * make this API call.
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.testIamPermissions
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions,
        options?: MethodOptions):
        GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Create
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the Annotation store that is being created. The string must
     * match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     */
    annotationStoreId?: string;
    /**
     * The name of the dataset this Annotation store belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnnotationStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Delete
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the Annotation store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Get
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the Annotation store to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Getiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Restricts stores returned to those matching a filter. Syntax:
     * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     * Only filtering on labels is supported, for example `labels.key=value`.
     */
    filter?: string;
    /**
     * Limit on the number of Annotation stores to return in a single response.
     * If zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if
     * any.
     */
    pageToken?: string;
    /**
     * Name of the dataset.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Patch
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Resource name of the Annotation store, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnnotationStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Setiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Testiampermissions
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class
      Resource$Projects$Locations$Datasets$Annotationstores$Annotations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.annotations.create
     * @desc Creates a new Annotation record. It is valid to create Annotation
     * objects for the same source more than once since a unique ID is assigned
     * to each record by this service.
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.annotations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the Annotation store this annotation belongs to. For example, `projects/my-project/locations/us-central1/datasets/mydataset/annotationStores/myannotationstore`.
     * @param {().Annotation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create,
        options?: MethodOptions): GaxiosPromise<Schema$Annotation>;
    create(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    create(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    create(callback: BodyResponseCallback<Schema$Annotation>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create|
        BodyResponseCallback<Schema$Annotation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|GaxiosPromise<Schema$Annotation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/annotations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.annotations.delete
     * @desc Deletes an Annotation or returns NOT_FOUND if it does not exist.
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.annotations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Annotation to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.annotations.get
     * @desc Gets an Annotation.
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.annotations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Annotation to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Annotation>;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    get(callback: BodyResponseCallback<Schema$Annotation>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get|
        BodyResponseCallback<Schema$Annotation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|GaxiosPromise<Schema$Annotation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.annotations.list
     * @desc Lists the Annotations in the given Annotation store for a source
     * resource.
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.annotations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts Annotations returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Fields/functions available for filtering are: - source_version
     * @param {integer=} params.pageSize Limit on the number of Annotations to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the Annotation store to retrieve Annotations from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List,
        options?: MethodOptions): GaxiosPromise<Schema$ListAnnotationsResponse>;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAnnotationsResponse>,
        callback: BodyResponseCallback<Schema$ListAnnotationsResponse>): void;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List,
        callback: BodyResponseCallback<Schema$ListAnnotationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListAnnotationsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List|
        BodyResponseCallback<Schema$ListAnnotationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAnnotationsResponse>,
        callback?: BodyResponseCallback<Schema$ListAnnotationsResponse>):
        void|GaxiosPromise<Schema$ListAnnotationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/annotations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$ListAnnotationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAnnotationsResponse>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.annotationStores.annotations.patch
     * @desc Updates the Annotation.
     * @alias
     * healthcare.projects.locations.datasets.annotationStores.annotations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the Annotation, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}`.
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().Annotation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch,
        options?: MethodOptions): GaxiosPromise<Schema$Annotation>;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    patch(callback: BodyResponseCallback<Schema$Annotation>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch|
        BodyResponseCallback<Schema$Annotation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|GaxiosPromise<Schema$Annotation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Create
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the Annotation store this annotation belongs to. For example,
     * `projects/my-project/locations/us-central1/datasets/mydataset/annotationStores/myannotationstore`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Annotation;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Delete
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the Annotation to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Get
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the Annotation to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Restricts Annotations returned to those matching a filter. Syntax:
     * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     * Fields/functions available for filtering are: - source_version
     */
    filter?: string;
    /**
     * Limit on the number of Annotations to return in a single response. If
     * zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if
     * any.
     */
    pageToken?: string;
    /**
     * Name of the Annotation store to retrieve Annotations from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Annotationstores$Annotations$Patch
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Resource name of the Annotation, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Annotation;
  }



  export class Resource$Projects$Locations$Datasets$Dicomstores {
    context: APIRequestContext;
    dicomWeb: Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dicomWeb =
          new Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb(
              this.context);
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.create
     * @desc Creates a new DICOM store within the parent dataset.
     * @alias healthcare.projects.locations.datasets.dicomStores.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dicomStoreId The ID of the DICOM store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
     * @param {string} params.parent The name of the dataset this DICOM store belongs to.
     * @param {().DicomStore} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
        options?: MethodOptions): GaxiosPromise<Schema$DicomStore>;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
        options: MethodOptions|BodyResponseCallback<Schema$DicomStore>,
        callback: BodyResponseCallback<Schema$DicomStore>): void;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Create,
        callback: BodyResponseCallback<Schema$DicomStore>): void;
    create(callback: BodyResponseCallback<Schema$DicomStore>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Create|
        BodyResponseCallback<Schema$DicomStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DicomStore>,
        callback?: BodyResponseCallback<Schema$DicomStore>):
        void|GaxiosPromise<Schema$DicomStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/dicomStores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$DicomStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.delete
     * @desc Deletes the specified DICOM store and removes all images that are
     * contained within it.
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
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.export
     * @desc Exports data to the specified destination by copying it from the
     * DICOM store. The metadata field type is OperationMetadata.
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
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    export(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    export(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Export,
        callback: BodyResponseCallback<Schema$Operation>): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Export|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
     * @alias healthcare.projects.locations.datasets.dicomStores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the DICOM store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
        options?: MethodOptions): GaxiosPromise<Schema$DicomStore>;
    get(params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
        options: MethodOptions|BodyResponseCallback<Schema$DicomStore>,
        callback: BodyResponseCallback<Schema$DicomStore>): void;
    get(params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Get,
        callback: BodyResponseCallback<Schema$DicomStore>): void;
    get(callback: BodyResponseCallback<Schema$DicomStore>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Get|
        BodyResponseCallback<Schema$DicomStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DicomStore>,
        callback?: BodyResponseCallback<Schema$DicomStore>):
        void|GaxiosPromise<Schema$DicomStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$DicomStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty
     * policy if the resource exists and does not have a policy set.
     * @alias healthcare.projects.locations.datasets.dicomStores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


/**
 * healthcare.projects.locations.datasets.dicomStores.import
 * @desc Imports data into the DICOM store by copying it from the specified
 * source. For errors, the Operation will be populated with error details (in
 * the form of ImportDicomDataErrorDetails in error.details), which will hold
 * finer-grained error information. The metadata field type is
 * OperationMetadata.
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
import(params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
import(params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import, options: MethodOptions|BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
import(params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import, callback: BodyResponseCallback<Schema$Operation>): void;
import(callback: BodyResponseCallback<Schema$Operation>): void;
import(paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Dicomstores$Import|BodyResponseCallback<Schema$Operation>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void|GaxiosPromise<Schema$Operation> {let params = (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Datasets$Dicomstores$Import; let options = (optionsOrCallback || {}) as MethodOptions;

                                                                                                                                                                                                                                                                                                         if(typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Projects$Locations$Datasets$Dicomstores$Import;
    options = {};
                                                                                                                                                                                                                                                                                                         }

                                                                                                                                                                                                                                                                                                         if(typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
                                                                                                                                                                                                                                                                                                         }

                                                                                                                                                                                                                                                                                                         const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v1alpha/{+name}:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['name'], pathParams: ['name'], context: this.context}; if(callback) {
    createAPIRequest<Schema$Operation>(parameters, callback);
                                                                                                                                                                                                                                                                                                         } else {
    return createAPIRequest<Schema$Operation>(parameters);
                                                                                                                                                                                                                                                                                                         }}


    /**
 * healthcare.projects.locations.datasets.dicomStores.list
 * @desc Lists the DICOM stores in the given dataset.
 * @alias healthcare.projects.locations.datasets.dicomStores.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {integer=} params.pageSize Limit on the number of DICOM stores to return in a single response. If zero the default page size of 100 is used.
 * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
 * @param {string} params.parent Name of the dataset.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    list(params?: Params$Resource$Projects$Locations$Datasets$Dicomstores$List, options?: MethodOptions): GaxiosPromise<Schema$ListDicomStoresResponse>;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListDicomStoresResponse>,
        callback: BodyResponseCallback<Schema$ListDicomStoresResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$List,
        callback: BodyResponseCallback<Schema$ListDicomStoresResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListDicomStoresResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$List|
        BodyResponseCallback<Schema$ListDicomStoresResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDicomStoresResponse>,
        callback?: BodyResponseCallback<Schema$ListDicomStoresResponse>):
        void|GaxiosPromise<Schema$ListDicomStoresResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/dicomStores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
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
        options?: MethodOptions): GaxiosPromise<Schema$DicomStore>;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$DicomStore>,
        callback: BodyResponseCallback<Schema$DicomStore>): void;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch,
        callback: BodyResponseCallback<Schema$DicomStore>): void;
    patch(callback: BodyResponseCallback<Schema$DicomStore>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch|
        BodyResponseCallback<Schema$DicomStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DicomStore>,
        callback?: BodyResponseCallback<Schema$DicomStore>):
        void|GaxiosPromise<Schema$DicomStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$DicomStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DicomStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces
     * any existing policy.
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias
     * healthcare.projects.locations.datasets.dicomStores.testIamPermissions
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
        options?: MethodOptions):
        GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the DICOM store that is being created. The string must match
     * the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The DICOM store resource name from which the data should be exported
     * (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Import
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the DICOM store resource into which the data is imported
     * (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Limit on the number of DICOM stores to return in a single response. If
     * zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if
     * any.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Resource name of the DICOM store, of the form
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DicomStore;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Setiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Testiampermissions
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.dicomWeb.dicomWebDelete
     * @desc Handles DELETE requests equivalent to the GET requests specified in
     * the WADO-RS standard. Since this implements an industry standard API, the
     * dicom_web_path is interpreted directly by the serving binary. For
     * example, if the request is for
     * `/v1alpha/projects/{project_id}/locations/{location_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/1.2`,
     * then `/studies/1.2` is passed to the serving binary as the
     * dicom_web_path.
     * @alias
     * healthcare.projects.locations.datasets.dicomStores.dicomWeb.dicomWebDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DICOMweb request, as specified in the WADO-RS standard.
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dicomWebDelete(
        params?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    dicomWebDelete(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    dicomWebDelete(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    dicomWebDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    dicomWebDelete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/dicomWeb/{+dicomWebPath}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.dicomWeb.dicomWebGet
     * @desc Handles the GET requests specified in the STOW-RS, WADO-RS, or
     * QIDO-RS standard. Since this implements an industry standard API, the
     * dicom_web_path is interpreted directly by the serving binary. For
     * example, if the request is for
     * `/v1alpha/projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_id}/series?PatientName={patient_name}`,
     * then `studies/{study_id}/series` is passed to the serving binary as the
     * dicom_web_path.
     * @alias
     * healthcare.projects.locations.datasets.dicomStores.dicomWeb.dicomWebGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DICOMweb request, as specified in the STOW-RS, WADO-RS, or QIDO-RS standard (e.g., studies/{study_id}/series`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dicomWebGet(
        params?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    dicomWebGet(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    dicomWebGet(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    dicomWebGet(callback: BodyResponseCallback<Schema$HttpBody>): void;
    dicomWebGet(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/dicomWeb/{+dicomWebPath}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.dicomStores.dicomWeb.dicomWebPost
     * @desc Handles the POST requests specified in the STOW-RS, WADO-RS, or
     * QIDO-RS standard. Since this implements an industry standard API, the
     * dicom_web_path is interpreted directly by the serving binary. For
     * example, if the request is for
     * `/v1alpha/projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_id}`,
     * then `/studies/{study_id}` is passed to the serving binary as the
     * dicom_web_path.
     * @alias
     * healthcare.projects.locations.datasets.dicomStores.dicomWeb.dicomWebPost
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dicomWebPath The path of the DICOMweb request, as specified in the STOW-RS, WADO-RS, or QIDO-RS standard (e.g., studies/{study_id}`).
     * @param {string} params.parent The name of the DICOM store that is being accessed (e.g., `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dicomWebPost(
        params?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    dicomWebPost(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    dicomWebPost(
        params:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    dicomWebPost(callback: BodyResponseCallback<Schema$HttpBody>): void;
    dicomWebPost(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/dicomWeb/{+dicomWebPath}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent', 'dicomWebPath'],
        pathParams: ['dicomWebPath', 'parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebdelete
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The path of the DICOMweb request, as specified in the WADO-RS standard.
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebget
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The path of the DICOMweb request, as specified in the STOW-RS, WADO-RS,
     * or QIDO-RS standard (e.g., studies/{study_id}/series`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Dicomstores$Dicomweb$Dicomwebpost
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The path of the DICOMweb request, as specified in the STOW-RS, WADO-RS,
     * or QIDO-RS standard (e.g., studies/{study_id}`).
     */
    dicomWebPath?: string;
    /**
     * The name of the DICOM store that is being accessed (e.g.,
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`).
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }



  export class Resource$Projects$Locations$Datasets$Fhirstores {
    context: APIRequestContext;
    resources: Resource$Projects$Locations$Datasets$Fhirstores$Resources;
    securityLabels:
        Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.resources =
          new Resource$Projects$Locations$Datasets$Fhirstores$Resources(
              this.context);
      this.securityLabels =
          new Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels(
              this.context);
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.create
     * @desc Creates a new FHIR store within the parent dataset.
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
        options?: MethodOptions): GaxiosPromise<Schema$FhirStore>;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
        options: MethodOptions|BodyResponseCallback<Schema$FhirStore>,
        callback: BodyResponseCallback<Schema$FhirStore>): void;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Create,
        callback: BodyResponseCallback<Schema$FhirStore>): void;
    create(callback: BodyResponseCallback<Schema$FhirStore>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Create|
        BodyResponseCallback<Schema$FhirStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FhirStore>,
        callback?: BodyResponseCallback<Schema$FhirStore>):
        void|GaxiosPromise<Schema$FhirStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/fhirStores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$FhirStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.delete
     * @desc Deletes the FHIR store and removes all resources that are contained
     * within it.
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
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.executeBundle
     * @desc Executes all the requests in the given Bundle.
     * @alias healthcare.projects.locations.datasets.fhirStores.executeBundle
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    executeBundle(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    executeBundle(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    executeBundle(callback: BodyResponseCallback<Schema$HttpBody>): void;
    executeBundle(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.export
     * @desc Export resources from the FHIR store to the specified destination.
     * Fatal errors will be populated in the error field. Otherwise a detailed
     * response will be returned as of type ExportResourcesResponse contained in
     * the response field when the operation finishes. The metadata field type
     * is OperationMetadata.
     * @alias healthcare.projects.locations.datasets.fhirStores.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The FHIR store name to export from. The name should be in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     * @param {().ExportResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
        params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    export(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    export(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Export,
        callback: BodyResponseCallback<Schema$Operation>): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Export|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.get
     * @desc Gets the specified FHIR store.
     * @alias healthcare.projects.locations.datasets.fhirStores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the FHIR store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
        options?: MethodOptions): GaxiosPromise<Schema$FhirStore>;
    get(params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
        options: MethodOptions|BodyResponseCallback<Schema$FhirStore>,
        callback: BodyResponseCallback<Schema$FhirStore>): void;
    get(params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Get,
        callback: BodyResponseCallback<Schema$FhirStore>): void;
    get(callback: BodyResponseCallback<Schema$FhirStore>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Get|
        BodyResponseCallback<Schema$FhirStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FhirStore>,
        callback?: BodyResponseCallback<Schema$FhirStore>):
        void|GaxiosPromise<Schema$FhirStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$FhirStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.getIamPolicy
     * @desc Gets the access control policy for a FHIR store or security label
     * within a FHIR store. Returns NOT_FOUND error if the resource does not
     * exist. Returns an empty policy if the resource exists but does not have a
     * policy set.  Authorization requires the Google IAM permission
     * 'healthcare.fhirStores.getIamPolicy' for a FHIR store or
     * 'healthcare.securityLabels.getIamPolicy' for a security label
     * @alias healthcare.projects.locations.datasets.fhirStores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.getMetadata
     * @desc Gets the capabilities statement for the store.
     * @alias healthcare.projects.locations.datasets.fhirStores.getMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the FHIR store to retrieve the capabilities for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMetadata(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    getMetadata(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    getMetadata(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    getMetadata(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getMetadata(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}/metadata')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


/**
 * healthcare.projects.locations.datasets.fhirStores.import
 * @desc Import resources to the FHIR store by loading data from the specified
 * sources. Fatal errors will be populated in the error field. Otherwise a
 * detailed response will be returned as of type ImportResourcesResponse
 * contained in the response field when the operation finishes. The metadata
 * field type is OperationMetadata.
 * @alias healthcare.projects.locations.datasets.fhirStores.import
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.name The FHIR store name to import FHIR resources to. The name should be in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
 * @param {().ImportResourcesRequest} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
import(params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
import(params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import, options: MethodOptions|BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
import(params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import, callback: BodyResponseCallback<Schema$Operation>): void;
import(callback: BodyResponseCallback<Schema$Operation>): void;
import(paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Fhirstores$Import|BodyResponseCallback<Schema$Operation>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void|GaxiosPromise<Schema$Operation> {let params = (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Datasets$Fhirstores$Import; let options = (optionsOrCallback || {}) as MethodOptions;

                                                                                                                                                                                                                                                                                                        if(typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Projects$Locations$Datasets$Fhirstores$Import;
    options = {};
                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                        if(typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                        const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v1alpha/{+name}:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['name'], pathParams: ['name'], context: this.context}; if(callback) {
    createAPIRequest<Schema$Operation>(parameters, callback);
                                                                                                                                                                                                                                                                                                        } else {
    return createAPIRequest<Schema$Operation>(parameters);
                                                                                                                                                                                                                                                                                                        }}


    /**
 * healthcare.projects.locations.datasets.fhirStores.list
 * @desc Lists the FHIR stores in the given dataset.
 * @alias healthcare.projects.locations.datasets.fhirStores.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {integer=} params.pageSize Limit on the number of FHIR stores to return in a single response.  If zero the default page size of 100 is used.
 * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
 * @param {string} params.parent Name of the dataset.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    list(params?: Params$Resource$Projects$Locations$Datasets$Fhirstores$List, options?: MethodOptions): GaxiosPromise<Schema$ListFhirStoresResponse>;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFhirStoresResponse>,
        callback: BodyResponseCallback<Schema$ListFhirStoresResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$List,
        callback: BodyResponseCallback<Schema$ListFhirStoresResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListFhirStoresResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$List|
        BodyResponseCallback<Schema$ListFhirStoresResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFhirStoresResponse>,
        callback?: BodyResponseCallback<Schema$ListFhirStoresResponse>):
        void|GaxiosPromise<Schema$ListFhirStoresResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/fhirStores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$ListFhirStoresResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFhirStoresResponse>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.patch
     * @desc Updates the FHIR store.
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
        options?: MethodOptions): GaxiosPromise<Schema$FhirStore>;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$FhirStore>,
        callback: BodyResponseCallback<Schema$FhirStore>): void;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch,
        callback: BodyResponseCallback<Schema$FhirStore>): void;
    patch(callback: BodyResponseCallback<Schema$FhirStore>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch|
        BodyResponseCallback<Schema$FhirStore>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FhirStore>,
        callback?: BodyResponseCallback<Schema$FhirStore>):
        void|GaxiosPromise<Schema$FhirStore> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$FhirStore>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FhirStore>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.setIamPolicy
     * @desc Sets the access control policy for a FHIR store or security label
     * within a FHIR store. Replaces any existing policy.  Authorization
     * requires the Google IAM permission 'healthcare.fhirStores.setIamPolicy'
     * for a FHIR store or 'healthcare.securityLabels.setIamPolicy' for a
     * security label
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  There is no permission required to
     * make this API call.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.testIamPermissions
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
        options?: MethodOptions):
        GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the FHIR store that is being created. The string must match the
     * following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the FHIR store to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Executebundle
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the FHIR store in which this bundle will be executed.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Export
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The FHIR store name to export from. The name should be in the format
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Getmetadata
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the FHIR store to retrieve the capabilities for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Import
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The FHIR store name to import FHIR resources to. The name should be in
     * the format
     * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Limit on the number of FHIR stores to return in a single response.  If
     * zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if
     * any.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Resource name of the FHIR store, of the form
     * `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Datasets$Fhirstores$Resources {
    context: APIRequestContext;
    Patient: Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient;
    _history:
        Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.Patient =
          new Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient(
              this.context);
      this._history =
          new Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history(
              this.context);
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.conditionalDeleteResource
     * @desc Deletes FHIR resources matching a search query. Note: unless
     * resource versioning is disabled by setting the
     * disable_resource_versioning flag on the FHIR store, the deleted resources
     * will be moved to a history repository that can still be retrieved through
     * GetResourceVersion and related methods, unless they are removed by the
     * DeleteResourceVersions method.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.conditionalDeleteResource
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The type of the resource to update.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    conditionalDeleteResource(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    conditionalDeleteResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    conditionalDeleteResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource,
        callback: BodyResponseCallback<Schema$Empty>): void;
    conditionalDeleteResource(callback: BodyResponseCallback<Schema$Empty>):
        void;
    conditionalDeleteResource(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/resources/{+type}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.conditionalPatchResource
     * @desc Updates parts of a resource if the resource exists based on the
     * search criteria specified via query parameters.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.conditionalPatchResource
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The type of the resource to update.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    conditionalPatchResource(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    conditionalPatchResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    conditionalPatchResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    conditionalPatchResource(callback: BodyResponseCallback<Schema$HttpBody>):
        void;
    conditionalPatchResource(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/resources/{+type}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.conditionalUpdateResource
     * @desc Updates the entire resource if the resource exists based on the
     * search criteria specified via query parameters.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.conditionalUpdateResource
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The type of the resource to update.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    conditionalUpdateResource(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    conditionalUpdateResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    conditionalUpdateResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    conditionalUpdateResource(callback: BodyResponseCallback<Schema$HttpBody>):
        void;
    conditionalUpdateResource(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/resources/{+type}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.createResource
     * @desc Creates a FHIR resource.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.createResource
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the FHIR store this resource belongs to.
     * @param {string} params.type The type of the resource to create.
     * @param {().HttpBody} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createResource(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    createResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    createResource(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    createResource(callback: BodyResponseCallback<Schema$HttpBody>): void;
    createResource(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/resources/{+type}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent', 'type'],
        pathParams: ['parent', 'type'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.delete
     * @desc Deletes a FHIR resource. Note: unless resource versioning is
     * disabled by setting the disable_resource_versioning flag on the FHIR
     * store, the deleted resources will be moved to a history repository that
     * can still be retrieved through GetResourceVersion and related methods,
     * unless they are removed by the DeleteResourceVersions method.
     * @alias healthcare.projects.locations.datasets.fhirStores.resources.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.delete$purge
     * @desc Deletes all the historical versions of a resource (excluding
     * current version) from the FHIR store. To remove all versions of a
     * resource, first delete the current version and call this API.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.delete$purge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to purge.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete$purge(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete$purge(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete$purge(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete$purge(callback: BodyResponseCallback<Schema$Empty>): void;
    delete$purge(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}/$purge')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.get
     * @desc Gets a FHIR resource.
     * @alias healthcare.projects.locations.datasets.fhirStores.resources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.getMetadata
     * @desc Gets the capabilities statement for the store.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.getMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the FHIR store to retrieve the capabilities for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMetadata(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    getMetadata(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    getMetadata(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    getMetadata(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getMetadata(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}/resources/metadata')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.patch
     * @desc Updates part of an existing resource.
     * @alias healthcare.projects.locations.datasets.fhirStores.resources.patch
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    patch(callback: BodyResponseCallback<Schema$HttpBody>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.searchResources
     * @desc Searches resources in the given FHIR store.  # Search Parameters
     * The server's capability statement, retrieved through
     * GetCapabilityStatement, indicates which search parameters are supported
     * on each FHIR resource.  # Search Modifiers  Modifier   | Supported
     * ----------- | --------- `:missing`  | Yes `:exact`    | Yes `:contains` |
     * Yes `:text`     | Yes `:in`       | Yes `:not-in`   | Yes `:above`    |
     * Yes `:below`    | Yes `:[type]`   | Yes `:not`      | Yes `:recurse`  |
     * No
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.searchResources
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store to retrieve resources from.
     * @param {string} params.resourceType The type of the resource to search.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchResources(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    searchResources(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchResources(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchResources(callback: BodyResponseCallback<Schema$HttpBody>): void;
    searchResources(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/resources/{+resourceType}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent', 'resourceType'],
        pathParams: ['parent', 'resourceType'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.update
     * @desc Updates the entire resource or creates a new resource with a client
     * specified ID if the resource does not exist and the FHIR store has
     * enable_update_create set.
     * @alias healthcare.projects.locations.datasets.fhirStores.resources.update
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    update(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    update(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    update(callback: BodyResponseCallback<Schema$HttpBody>): void;
    update(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources._search
     * @desc Searches resources in the given FHIR store.  # Search Parameters
     * The server's capability statement, retrieved through
     * GetCapabilityStatement, indicates which search parameters are supported
     * on each FHIR resource.  # Search Modifiers  Modifier   | Supported
     * ----------- | --------- `:missing`  | Yes `:exact`    | Yes `:contains` |
     * Yes `:text`     | Yes `:in`       | Yes `:not-in`   | Yes `:above`    |
     * Yes `:below`    | Yes `:[type]`   | Yes `:not`      | Yes `:recurse`  |
     * No
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources._search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the FHIR store to retrieve resources from.
     * @param {().SearchResourcesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    _search(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    _search(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    _search(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    _search(callback: BodyResponseCallback<Schema$HttpBody>): void;
    _search(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/resources/_search')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionaldeleteresource
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The type of the resource to update.
     */
    type?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalpatchresource
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The type of the resource to update.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Conditionalupdateresource
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The type of the resource to update.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Createresource
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the FHIR store this resource belongs to.
     */
    parent?: string;
    /**
     * The type of the resource to create.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Delete$purge
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to purge.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Get
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Getmetadata
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the FHIR store to retrieve the capabilities for.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patch
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Searchresources
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the FHIR store to retrieve resources from.
     */
    parent?: string;
    /**
     * The type of the resource to search.
     */
    resourceType?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Update
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_search
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the FHIR store to retrieve resources from.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchResourcesRequest;
  }

  export class
      Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources.Patient.get$everything
     * @desc Gets all the resources in the patient compartment.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources.Patient.get$everything
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.end The response includes records prior to the end date. If no end date is provided, all records subsequent to the start date are in scope.
     * @param {string} params.name Name of the patient for which the information is required.
     * @param {string=} params.start The response includes records subsequent to the start date. If no start date is provided, all records prior to the end date are in scope.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get$everything(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    get$everything(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    get$everything(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    get$everything(callback: BodyResponseCallback<Schema$HttpBody>): void;
    get$everything(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}/$everything')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$Patient$Get$everything
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The response includes records prior to the end date. If no end date is
     * provided, all records subsequent to the start date are in scope.
     */
    end?: string;
    /**
     * Name of the patient for which the information is required.
     */
    name?: string;
    /**
     * The response includes records subsequent to the start date. If no start
     * date is provided, all records prior to the end date are in scope.
     */
    start?: string;
  }


  export class
      Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources._history.get
     * @desc Gets a version (current or historical) of FHIR resource by version
     * id.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources._history.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource version to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.resources._history.list
     * @desc Lists all the versions of a resource (including the current version
     * and deleted versions) from the FHIR store.
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.resources._history.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.at Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] Clients may specify any of the following: An entire year: `_at=2019` An entire month: `_at=2019-01` A specific day: `_at=2019-01-20` A specific second: `_at=2018-12-31T23:59:58Z`
     * @param {integer=} params.count The maximum number of search results on a page.
     * @param {string} params.name The name of the resource to retrieve.
     * @param {string=} params.page Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of the `link.url` field returned in the response to the previous request, where `link.relation` is "first", "previous", "next" or "last". Omit `page` if no previous request has been made.
     * @param {string=} params.since Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List,
        options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List,
        options: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List,
        callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List|
        BodyResponseCallback<Schema$HttpBody>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$HttpBody>,
        callback?: BodyResponseCallback<Schema$HttpBody>):
        void|GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}/_history')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$Get
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource version to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Resources$_history$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Only include resource versions that were current at some point during the
     * time period specified in the date time value. The date parameter format
     * is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] Clients may specify any of the
     * following: An entire year: `_at=2019` An entire month: `_at=2019-01` A
     * specific day: `_at=2019-01-20` A specific second:
     * `_at=2018-12-31T23:59:58Z`
     */
    at?: string;
    /**
     * The maximum number of search results on a page.
     */
    count?: number;
    /**
     * The name of the resource to retrieve.
     */
    name?: string;
    /**
     * Used to retrieve the first, previous, next, or last page of resource
     * versions when using pagination. Value should be set to the value of the
     * `link.url` field returned in the response to the previous request, where
     * `link.relation` is "first", "previous", "next" or "last". Omit `page` if
     * no previous request has been made.
     */
    page?: string;
    /**
     * Only include resource versions that were created at or after the given
     * instant in time. The instant in time uses the format
     * YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00
     * or 2017-01-01T00:00:00Z). The time must be specified to the second and
     * include a time zone.
     */
    since?: string;
  }



  export class Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.securityLabels.getIamPolicy
     * @desc Gets the access control policy for a FHIR store or security label
     * within a FHIR store. Returns NOT_FOUND error if the resource does not
     * exist. Returns an empty policy if the resource exists but does not have a
     * policy set.  Authorization requires the Google IAM permission
     * 'healthcare.fhirStores.getIamPolicy' for a FHIR store or
     * 'healthcare.securityLabels.getIamPolicy' for a security label
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.securityLabels.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.fhirStores.securityLabels.setIamPolicy
     * @desc Sets the access control policy for a FHIR store or security label
     * within a FHIR store. Replaces any existing policy.  Authorization
     * requires the Google IAM permission 'healthcare.fhirStores.setIamPolicy'
     * for a FHIR store or 'healthcare.securityLabels.setIamPolicy' for a
     * security label
     * @alias
     * healthcare.projects.locations.datasets.fhirStores.securityLabels.setIamPolicy
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Getiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Fhirstores$Securitylabels$Setiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }



  export class Resource$Projects$Locations$Datasets$Hl7v2stores {
    context: APIRequestContext;
    messages: Resource$Projects$Locations$Datasets$Hl7v2stores$Messages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.messages =
          new Resource$Projects$Locations$Datasets$Hl7v2stores$Messages(
              this.context);
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.create
     * @desc Creates a new HL7v2 store within the parent dataset.
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
        options?: MethodOptions): GaxiosPromise<Schema$Hl7V2Store>;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Hl7V2Store>,
        callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create,
        callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    create(callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create|
        BodyResponseCallback<Schema$Hl7V2Store>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Hl7V2Store>,
        callback?: BodyResponseCallback<Schema$Hl7V2Store>):
        void|GaxiosPromise<Schema$Hl7V2Store> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/hl7V2Stores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Hl7V2Store>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.delete
     * @desc Deletes the specified HL7v2 store and removes all messages that are
     * contained within it.
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
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the HL7v2 store to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Hl7V2Store>;
    get(params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Hl7V2Store>,
        callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    get(params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get,
        callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    get(callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get|
        BodyResponseCallback<Schema$Hl7V2Store>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Hl7V2Store>,
        callback?: BodyResponseCallback<Schema$Hl7V2Store>):
        void|GaxiosPromise<Schema$Hl7V2Store> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Hl7V2Store>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty
     * policy if the resource exists and does not have a policy set.
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
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
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Limit on the number of HL7v2 stores to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
        options?: MethodOptions): GaxiosPromise<Schema$ListHl7V2StoresResponse>;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListHl7V2StoresResponse>,
        callback: BodyResponseCallback<Schema$ListHl7V2StoresResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List,
        callback: BodyResponseCallback<Schema$ListHl7V2StoresResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListHl7V2StoresResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List|
        BodyResponseCallback<Schema$ListHl7V2StoresResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListHl7V2StoresResponse>,
        callback?: BodyResponseCallback<Schema$ListHl7V2StoresResponse>):
        void|GaxiosPromise<Schema$ListHl7V2StoresResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/hl7V2Stores')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
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
        options?: MethodOptions): GaxiosPromise<Schema$Hl7V2Store>;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Hl7V2Store>,
        callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    patch(
        params: Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch,
        callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    patch(callback: BodyResponseCallback<Schema$Hl7V2Store>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch|
        BodyResponseCallback<Schema$Hl7V2Store>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Hl7V2Store>,
        callback?: BodyResponseCallback<Schema$Hl7V2Store>):
        void|GaxiosPromise<Schema$Hl7V2Store> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Hl7V2Store>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Hl7V2Store>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces
     * any existing policy.
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
        options?: MethodOptions): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias
     * healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
        options?: MethodOptions):
        GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the HL7v2 store that is being created. The string must match
     * the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Limit on the number of HL7v2 stores to return in a single response. If
     * zero the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if
     * any.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Resource name of the HL7v2 store, of the form
     * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
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
     * @desc Creates a message and sends a notification to the Cloud Pub/Sub
     * topic. If configured, the MLLP adapter listens to messages created by
     * this method and sends those back to the hospital. A successful response
     * indicates the message has been persisted to storage and a Cloud Pub/Sub
     * notification has been sent. Sending to the hospital by the MLLP adapter
     * happens asynchronously.
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
        options?: MethodOptions): GaxiosPromise<Schema$Message>;
    create(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Message>,
        callback: BodyResponseCallback<Schema$Message>): void;
    create(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create,
        callback: BodyResponseCallback<Schema$Message>): void;
    create(callback: BodyResponseCallback<Schema$Message>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create|
        BodyResponseCallback<Schema$Message>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Message>,
        callback?: BodyResponseCallback<Schema$Message>):
        void|GaxiosPromise<Schema$Message> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/messages')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
    get(params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Message>;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Message>,
        callback: BodyResponseCallback<Schema$Message>): void;
    get(params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get,
        callback: BodyResponseCallback<Schema$Message>): void;
    get(callback: BodyResponseCallback<Schema$Message>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get|
        BodyResponseCallback<Schema$Message>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Message>,
        callback?: BodyResponseCallback<Schema$Message>):
        void|GaxiosPromise<Schema$Message> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest
     * @desc Ingests a new HL7v2 message from the hospital and sends a
     * notification to the Cloud Pub/Sub topic. Return is an HL7v2 ACK message
     * if the message was successfully stored. Otherwise an error is returned.
     * If an identical HL7v2 message is created twice only one resource is
     * created on the server and no error is reported.
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
        options?: MethodOptions): GaxiosPromise<Schema$IngestMessageResponse>;
    ingest(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
        options: MethodOptions|
        BodyResponseCallback<Schema$IngestMessageResponse>,
        callback: BodyResponseCallback<Schema$IngestMessageResponse>): void;
    ingest(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest,
        callback: BodyResponseCallback<Schema$IngestMessageResponse>): void;
    ingest(callback: BodyResponseCallback<Schema$IngestMessageResponse>): void;
    ingest(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest|
        BodyResponseCallback<Schema$IngestMessageResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$IngestMessageResponse>,
        callback?: BodyResponseCallback<Schema$IngestMessageResponse>):
        void|GaxiosPromise<Schema$IngestMessageResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/messages:ingest')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$IngestMessageResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IngestMessageResponse>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.hl7V2Stores.messages.list
     * @desc Lists all the messages in the given HL7v2 store with support for
     * filtering.
     * @alias healthcare.projects.locations.datasets.hl7V2Stores.messages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Restricts messages returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Fields/functions available for filtering are: - message_type, from the MSH-9 segment, e.g. 'NOT message_type = "ADT"' - send_date or sendDate, the YYYY-MM-DD date the message was sent in the   dataset's time_zone, from the MSH-7 segment; e.g.   'send_date < "2017-01-02"' - send_time, the timestamp of when the message was sent, using the RFC3339   time format for comparisons, from the MSH-7 segment; e.g. 'send_time <   "2017-01-02T00:00:00-05:00"' - send_facility, the hospital/trust that the message came from, from the   MSH-4 segment, e.g. 'send_facility = "RAL"' - HL7RegExp(expr), which does regular expression matching of expr against   the HL7 message payload using re2 (http://code.google.com/p/re2/)   syntax; e.g. 'HL7RegExp("^.*\|.*\|CERNER")' - PatientId(value, type), which matches if the message lists a patient   having an ID of the given value and type in the PID-2, PID-3, or PID-4   segments; e.g. 'PatientId("123456", "MRN")' - HasLabel(x), a boolean returning true if the message has a label with   key x (having any value) set using the labels map in Message; e.g.   'HasLabel("priority")' - Label(x), a string value of the label with key x as set using the labels   map in Message, e.g. 'Label("priority") = "high"' Negation on the patient ID function and the label function are not supported, e.g. invalid queries: 'NOT PatientId("123456", "MRN")', 'NOT HasLabel("tag1")', 'NOT Label("tag2") = "val2"'. Conjunction of multiple patient ID functions is not supported, e.g. an invalid query: 'PatientId("123456", "MRN") AND PatientId("456789", "MRN")'. Conjunction of multiple label functions is also not supported, e.g. an invalid query: 'HasLabel("tag1") AND Label("tag2") = "val2"'. Conjunction of one patient ID function, one label function and other fields is supported, e.g. a valid query: 'PatientId("123456", "MRN") AND HasLabel("tag1") AND message_type = "ADT"'.
     * @param {string=} params.orderBy Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order Fields available for ordering are: - send_time
     * @param {integer=} params.pageSize Limit on the number of messages to return in a single response. If zero the default page size of 100 is used.
     * @param {string=} params.pageToken The next_page_token value returned from the previous List request, if any.
     * @param {string} params.parent Name of the HL7v2 store to retrieve messages from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
        options?: MethodOptions): GaxiosPromise<Schema$ListMessagesResponse>;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListMessagesResponse>,
        callback: BodyResponseCallback<Schema$ListMessagesResponse>): void;
    list(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List,
        callback: BodyResponseCallback<Schema$ListMessagesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListMessagesResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List|
        BodyResponseCallback<Schema$ListMessagesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListMessagesResponse>,
        callback?: BodyResponseCallback<Schema$ListMessagesResponse>):
        void|GaxiosPromise<Schema$ListMessagesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+parent}/messages')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
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
        params?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
        options?: MethodOptions): GaxiosPromise<Schema$Message>;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Message>,
        callback: BodyResponseCallback<Schema$Message>): void;
    patch(
        params:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch,
        callback: BodyResponseCallback<Schema$Message>): void;
    patch(callback: BodyResponseCallback<Schema$Message>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch|
        BodyResponseCallback<Schema$Message>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Message>,
        callback?: BodyResponseCallback<Schema$Message>):
        void|GaxiosPromise<Schema$Message> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the HL7v2 message to retrieve.
     */
    name?: string;
    /**
     * Specifies which parts of the Message resource should be returned in the
     * response.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Hl7v2stores$Messages$Ingest
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Restricts messages returned to those matching a filter. Syntax:
     * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
     * Fields/functions available for filtering are: - message_type, from the
     * MSH-9 segment, e.g. 'NOT message_type = "ADT"' - send_date or sendDate,
     * the YYYY-MM-DD date the message was sent in the   dataset's time_zone,
     * from the MSH-7 segment; e.g.   'send_date < "2017-01-02"' - send_time,
     * the timestamp of when the message was sent, using the RFC3339   time
     * format for comparisons, from the MSH-7 segment; e.g. 'send_time <
     * "2017-01-02T00:00:00-05:00"' - send_facility, the hospital/trust that the
     * message came from, from the   MSH-4 segment, e.g. 'send_facility = "RAL"'
     * - HL7RegExp(expr), which does regular expression matching of expr against
     * the HL7 message payload using re2 (http://code.google.com/p/re2/) syntax;
     * e.g. 'HL7RegExp("^.*\|.*\|CERNER")' - PatientId(value, type), which
     * matches if the message lists a patient   having an ID of the given value
     * and type in the PID-2, PID-3, or PID-4   segments; e.g.
     * 'PatientId("123456", "MRN")' - HasLabel(x), a boolean returning true if
     * the message has a label with   key x (having any value) set using the
     * labels map in Message; e.g.   'HasLabel("priority")' - Label(x), a string
     * value of the label with key x as set using the labels   map in Message,
     * e.g. 'Label("priority") = "high"' Negation on the patient ID function and
     * the label function are not supported, e.g. invalid queries: 'NOT
     * PatientId("123456", "MRN")', 'NOT HasLabel("tag1")', 'NOT Label("tag2") =
     * "val2"'. Conjunction of multiple patient ID functions is not supported,
     * e.g. an invalid query: 'PatientId("123456", "MRN") AND
     * PatientId("456789", "MRN")'. Conjunction of multiple label functions is
     * also not supported, e.g. an invalid query: 'HasLabel("tag1") AND
     * Label("tag2") = "val2"'. Conjunction of one patient ID function, one
     * label function and other fields is supported, e.g. a valid query:
     * 'PatientId("123456", "MRN") AND HasLabel("tag1") AND message_type =
     * "ADT"'.
     */
    filter?: string;
    /**
     * Orders messages returned by the specified order_by clause. Syntax:
     * https://cloud.google.com/apis/design/design_patterns#sorting_order Fields
     * available for ordering are: - send_time
     */
    orderBy?: string;
    /**
     * Limit on the number of messages to return in a single response. If zero
     * the default page size of 100 is used.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from the previous List request, if
     * any.
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name of the Message, of the form
     * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`.
     * Assigned by the server.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition,
     * see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * Only the `labels` field is allowed to be updated. The labels in the
     * request will be merged with the existing set of labels. Existing labels
     * with the same keys will be updated.
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
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias healthcare.projects.locations.datasets.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Datasets$Operations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Projects$Locations$Datasets$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Projects$Locations$Datasets$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * healthcare.projects.locations.datasets.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
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
        options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Datasets$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Datasets$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://healthcare.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha/{+name}/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
